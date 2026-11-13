#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ví dụ tính giá của bộ tính giá dùng chung TOPAS (KD02, DH04, KD06).

Dữ liệu minh họa, khớp các bảng trong VI-DU-TINH-GIA-v1.0.md (cùng thư mục).
Quy tắc cài theo RSD KD06 R04, R13, R14, R15; RSD KD01-KD02 R05, R07; RSD DH03 R07,
R09, R14, R15, R23; RSD KD08 R05; BOI-CANH-DU-AN (Tiền Q9, Trẻ em Q12, Phòng Q13', Q14).

Chạy (Python 3 thuần, không cần thư viện ngoài):
    python3 -I docs/rsd/BO-TINH-GIA/tinh_vi_du.py            # kết quả ví dụ A, B, C (Markdown)
    python3 -I docs/rsd/BO-TINH-GIA/tinh_vi_du.py --du-lieu  # bảng dữ liệu (Markdown)
"""
import sys
from dataclasses import dataclass, field
from datetime import date, timedelta
from decimal import Decimal, ROUND_CEILING, ROUND_HALF_UP, getcontext

getcontext().prec = 60
D = Decimal

# ---------------------------------------------------------------------------
# Tiền và định dạng
# ---------------------------------------------------------------------------
DON_VI_NHO = {'VND': D('1'), 'EUR': D('0.01'), 'USD': D('0.01')}
KY_HIEU = {'VND': '₫', 'EUR': 'EUR', 'USD': 'USD'}


def lam_tron(x, tien):
    """Half-up theo đơn vị nhỏ nhất của loại tiền (Q9)."""
    return x.quantize(DON_VI_NHO[tien], rounding=ROUND_HALF_UP)


def lam_tron_len_boi(x, boi):
    """Làm tròn lên theo bội số (giá bán mỗi đối tượng, R14).
    Số đầu vào được chuẩn hóa 9 chữ số thập phân trước để phần dư do phép chia
    vô hạn (÷ 23, ÷ 3…) không đẩy một số đã tròn bội lên bội kế tiếp."""
    x = x.quantize(D('1e-9'), rounding=ROUND_HALF_UP)
    return (x / boi).to_integral_value(rounding=ROUND_CEILING) * boi


def so(x, le=0):
    q = D(1).scaleb(-le)
    x = D(x).quantize(q, rounding=ROUND_HALF_UP)
    s = f'{abs(x):,.{le}f}'.replace(',', '_').replace('.', ',').replace('_', '.')
    return ('−' if x < 0 else '') + s


def tien(x, t):
    return f"{so(x, 0 if t == 'VND' else 2)} {KY_HIEU[t]}"


def pct(x, le=1):
    return f'{so(x, le)} %'


def d(s):
    dd, mm, yy = s.split('/')
    return date(int(yy), int(mm), int(dd))


def ng(x):
    return x.strftime('%d/%m/%Y')


THU = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật']


# ---------------------------------------------------------------------------
# Mô hình dữ liệu (rút gọn từ RSD DH03)
# ---------------------------------------------------------------------------
@dataclass
class Mua:
    ten: str
    khoang: list            # [(từ, đến)]
    tach_cuoi_tuan: bool = False


@dataclass
class NhomTuoi:
    ma: str                 # nhãn hiển thị, ví dụ '6–11'
    tu: int
    den_duoi: int           # từ ≤ tuổi < đến dưới (DH03 R09)
    dieu_kien: str          # 'ngủ chung giường' | 'thêm giường' | ''


@dataclass
class HopDong:
    ma: str
    ncc: str
    tu: date
    den: date
    tien: str
    mua: list
    cuoi_tuan: tuple = (4, 5)          # đêm Thứ Sáu, Thứ Bảy
    nhom_tuoi: list = field(default_factory=list)
    mien_phi: tuple = None             # (số trẻ miễn phí, nhóm tuổi)
    ghi_chu: str = ''


@dataclass
class DichVu:
    ma: str
    ncc: str
    ten: str
    loai: str
    don_vi: str
    can_cu: str                        # 'khach' | 'phong' | 'doan'
    theo_dem: bool = False
    di_kem_cua: str = None
    giuong_phu: bool = False
    dang_dung: bool = True


@dataclass
class DongGia:
    dv: str
    hd: str
    tien: str
    gia: dict                          # {(mùa, loại ngày): đơn giá}; loại ngày 'NT', 'CT' hoặc ''
    khach: tuple = (1, 99)
    hang_phong: str = ''
    thu_tu: int = 1
    tre_em: dict = field(default_factory=dict)   # {nhóm: ('%', x) | ('tien', x)}
    phong_don: tuple = None            # ('tron_goi', {khóa: giá}) | ('phu_thu', x) | ('phu_thu_%', x)


@dataclass
class PhuThu:
    dv: str
    hd: str
    ten: str
    tu: date
    den: date
    kieu: str                          # 'Thay thế' | 'Cộng dồn'
    muc: D
    can_cu: str


LOAI_HANG_MUC = {
    'Khách sạn': 'Lưu trú', 'Du thuyền': 'Lưu trú', 'Vận chuyển': 'Di chuyển',
    'Vé máy bay': 'Vé máy bay', 'Hướng dẫn viên': 'Hướng dẫn viên',
    'Vé tham quan': 'Tham quan', 'Hoạt động tham quan': 'Tham quan',
    'Nhà hàng': 'Ăn uống', 'Bảo hiểm': 'Khác',
}
THU_TU_HANG_MUC = ['Lưu trú', 'Di chuyển', 'Vé máy bay', 'Hướng dẫn viên', 'Tham quan', 'Ăn uống', 'Khác']
CAN_CU_TXT = {'khach': 'khách', 'phong': 'phòng', 'doan': 'đoàn, xe, đơn vị'}

# ---------------------------------------------------------------------------
# DỮ LIỆU · NCC
# ---------------------------------------------------------------------------
NCC = {
    # Ví dụ A (Müller v3, năm 2027)
    'TLO': 'Thăng Long Opera Hotel',
    'BHY': 'Bhaya Cruises',
    'MTH': 'Mường Thanh Holiday Huế',
    'HAR': 'Hoi An Riverside Resort',
    'SSG': 'Sông Sài Gòn Hotel',
    'VNA': 'Vietnam Airlines',
    'DVG': 'Đất Việt Guides',
    'HLT': 'Hoàng Long Transport',
    'HTC': 'Hue Travel Car',
    'SST': 'Saigon Star Transport',
    'HNP': 'Nhà hàng Hà Nội Phố',
    'HCH': 'Nhà hàng Hoàng Cung Huế',
    'MSG': 'Mỹ Sơn Garden',
    'SGX': 'Nhà hàng Sài Gòn Xưa',
    'VMQ': 'Văn Miếu – Quốc Tử Giám',
    'BTH': 'Trung tâm Bảo tồn Di tích Cố đô Huế',
    'TRH': 'HTX Thuyền rồng Hương Giang',
    'BMS': 'Ban quản lý Di tích Mỹ Sơn',
    'HCC': 'Hội An Cooking Class',
    'MKD': 'Mekong Discovery',
    'CCT': 'Khu di tích Địa đạo Củ Chi',
    'BVI': 'Bảo Việt',
    # Ví dụ B (TM-008, năm 2026) dùng thêm
    'HBH': 'Hanoi Boutique Hotel',
    'HGH': 'Hương Giang Hotel',
    'GLR': 'Golden Lotus Restaurant',
    'HVT': 'Hải Vân Transport',
    # Ví dụ C (giường phụ)
    'LTH': 'Khách sạn Lotus Hanoi',
}


def mua_ca_ky(tu, den):
    return [Mua('Cả kỳ hợp đồng', [(d(tu), d(den))])]


def mua_ks_2027(tach):
    return [Mua('Cao điểm', [(d('01/01/2027'), d('30/04/2027')), (d('01/10/2027'), d('31/12/2027'))], tach),
            Mua('Thấp điểm', [(d('01/05/2027'), d('30/09/2027'))], tach)]


def mua_ks_2026(tach):
    return [Mua('Cao điểm', [(d('01/01/2026'), d('30/04/2026')), (d('01/10/2026'), d('20/12/2026'))], tach),
            Mua('Thấp điểm', [(d('01/05/2026'), d('30/09/2026'))], tach),
            Mua('Giáng sinh', [(d('21/12/2026'), d('31/12/2026'))], False)]


NT_6_11 = [NhomTuoi('0–5', 0, 6, 'ngủ chung giường'), NhomTuoi('6–11', 6, 12, 'ngủ chung giường')]
VE_6_11 = [NhomTuoi('0–5', 0, 6, ''), NhomTuoi('6–11', 6, 12, '')]

# ---------------------------------------------------------------------------
# DỮ LIỆU · Hợp đồng (kỳ không chồng lấn trong cùng NCC, DH03 R06)
# ---------------------------------------------------------------------------
HOP_DONG = [
    # --- năm 2027 (ví dụ A)
    HopDong('TLO-2027', 'TLO', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ks_2027(False), nhom_tuoi=NT_6_11),
    HopDong('BHY-2027', 'BHY', d('01/01/2027'), d('31/12/2027'), 'USD', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=NT_6_11),
    HopDong('MTH-2026', 'MTH', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ks_2026(False), nhom_tuoi=NT_6_11,
            ghi_chu='Hết hạn 31/12/2026, chưa có hợp đồng 2027'),
    HopDong('HAR-2027', 'HAR', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ks_2027(True), nhom_tuoi=NT_6_11),
    HopDong('SSG-2027', 'SSG', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ks_2027(True), nhom_tuoi=NT_6_11),
    HopDong('VNA-2027', 'VNA', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'),
            nhom_tuoi=[NhomTuoi('0–1', 0, 2, ''), NhomTuoi('2–5', 2, 6, ''), NhomTuoi('6–11', 6, 12, '')]),
    HopDong('DVG-2027', 'DVG', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027')),
    HopDong('HLT-2027', 'HLT', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027')),
    HopDong('HTC-2027', 'HTC', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027')),
    HopDong('SST-2027', 'SST', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027')),
    HopDong('HNP-2027', 'HNP', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('HCH-2027', 'HCH', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('MSG-2027', 'MSG', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('SGX-2027', 'SGX', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('VMQ-2027', 'VMQ', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('BTH-2027', 'BTH', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11,
            mien_phi=(1, '6–11'), ghi_chu='Miễn phí 1 trẻ nhóm 6–11 mỗi đoàn'),
    HopDong('TRH-2027', 'TRH', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11,
            mien_phi=(2, '6–11'), ghi_chu='Miễn phí 2 trẻ nhóm 6–11 mỗi thuyền'),
    HopDong('BMS-2027', 'BMS', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('HCC-2027', 'HCC', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('MKD-2027', 'MKD', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('CCT-2027', 'CCT', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'), nhom_tuoi=VE_6_11),
    HopDong('BVI-2027', 'BVI', d('01/01/2027'), d('31/12/2027'), 'VND', mua_ca_ky('01/01/2027', '31/12/2027'),
            ghi_chu='Không có chính sách trẻ em: trẻ tính như người lớn (DH03 R09)'),
    # --- năm 2026 (ví dụ B)
    HopDong('HBH-2026', 'HBH', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ks_2026(False)),
    HopDong('HLT-2026', 'HLT', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ca_ky('01/01/2026', '31/12/2026')),
    HopDong('BHY-2026', 'BHY', d('01/01/2026'), d('31/12/2026'), 'USD', mua_ca_ky('01/01/2026', '31/12/2026')),
    HopDong('HNP-2026', 'HNP', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ca_ky('01/01/2026', '31/12/2026')),
    HopDong('HTC-2026', 'HTC', d('01/01/2026'), d('20/12/2026'), 'VND', mua_ca_ky('01/01/2026', '20/12/2026')),
    HopDong('DVG-2026', 'DVG', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ca_ky('01/01/2026', '31/12/2026')),
    HopDong('HGH-2026', 'HGH', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ks_2026(False)),
    HopDong('GLR-2025', 'GLR', d('01/10/2025'), d('30/09/2026'), 'VND', mua_ca_ky('01/10/2025', '30/09/2026'),
            ghi_chu='Hết hạn 30/09/2026'),
    HopDong('MSG-2026', 'MSG', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ca_ky('01/01/2026', '31/12/2026')),
    HopDong('HAR-2026', 'HAR', d('01/01/2026'), d('31/12/2026'), 'VND', mua_ks_2026(True)),
    # --- ví dụ C (số liệu theo KD06 AC93, AC94)
    HopDong('LTH-C', 'LTH', d('01/12/2026'), d('30/11/2027'), 'VND',
            [Mua('Cao điểm', [(d('01/12/2026'), d('31/01/2027')), (d('16/02/2027'), d('30/04/2027'))], True),
             Mua('Thấp điểm', [(d('01/05/2027'), d('30/11/2027'))], True),
             Mua('Tết', [(d('01/02/2027'), d('15/02/2027'))], False)],
            nhom_tuoi=[NhomTuoi('0–5', 0, 6, 'ngủ chung giường'), NhomTuoi('6–12', 6, 13, 'thêm giường')],
            ghi_chu='Hợp đồng minh họa riêng cho KD06 AC93, AC94'),
]
HD = {h.ma: h for h in HOP_DONG}

# ---------------------------------------------------------------------------
# DỮ LIỆU · Dịch vụ
# ---------------------------------------------------------------------------
DICH_VU = [
    DichVu('TLO-DLX', 'TLO', 'Phòng Deluxe', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('TLO-GP', 'TLO', 'Giường phụ', 'Khách sạn', 'giường/đêm', 'doan', True, di_kem_cua='TLO-DLX', giuong_phu=True),
    DichVu('BHY-CAB', 'BHY', 'Cabin Deluxe Balcony · 2 ngày 1 đêm', 'Du thuyền', 'cabin/đêm', 'phong', True),
    DichVu('MTH-DLX', 'MTH', 'Phòng Deluxe · 4★', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('HAR-DGV', 'HAR', 'Phòng Deluxe Garden View', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('HAR-GP', 'HAR', 'Giường phụ', 'Khách sạn', 'giường/đêm', 'doan', True, di_kem_cua='HAR-DGV', giuong_phu=True),
    DichVu('SSG-RV', 'SSG', 'Phòng River View', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('VNA-HUI', 'VNA', 'Vé máy bay Hà Nội – Huế', 'Vé máy bay', 'khách/chặng', 'khach'),
    DichVu('VNA-SGN', 'VNA', 'Vé máy bay Đà Nẵng – TP. Hồ Chí Minh', 'Vé máy bay', 'khách/chặng', 'khach'),
    DichVu('DVG-DE', 'DVG', 'HDV tiếng Đức · theo ngày', 'Hướng dẫn viên', 'đoàn/ngày', 'doan'),
    DichVu('HLT-NB29', 'HLT', 'Xe 29 chỗ đón tiễn sân bay Nội Bài', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HLT-CT29', 'HLT', 'Xe 29 chỗ city tour Hà Nội', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('HLT-HL29', 'HLT', 'Xe 29 chỗ Hà Nội – Hạ Long (một chiều)', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HTC-PB29', 'HTC', 'Xe 29 chỗ sân bay Phú Bài – khách sạn', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HTC-CT29', 'HTC', 'Xe 29 chỗ city tour Huế', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('HTC-HV29', 'HTC', 'Xe 29 chỗ Huế – Hội An qua đèo Hải Vân', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HTC-MS29', 'HTC', 'Xe 29 chỗ Hội An – Mỹ Sơn (khứ hồi)', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HTC-DN29', 'HTC', 'Xe 29 chỗ Hội An – sân bay Đà Nẵng', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('SST-TSN29', 'SST', 'Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('SST-CT29', 'SST', 'Xe 29 chỗ city tour TP. Hồ Chí Minh', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('SST-MT29', 'SST', 'Xe 29 chỗ TP. Hồ Chí Minh – Mỹ Tho (khứ hồi)', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('SST-CC29', 'SST', 'Xe 29 chỗ TP. Hồ Chí Minh – Củ Chi (khứ hồi)', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('HNP-TOI', 'HNP', 'Set menu Hà Nội · bữa tối', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('HNP-TRUA', 'HNP', 'Set menu Hà Nội · bữa trưa', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('HCH-TOI', 'HCH', 'Set menu cung đình · bữa tối', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('HCH-TRUA', 'HCH', 'Set menu Huế · bữa trưa', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('MSG-VN', 'MSG', 'Set menu Việt Nam · bữa tối', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('SGX-TOI', 'SGX', 'Set menu Sài Gòn · bữa tối', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('SGX-TRUA', 'SGX', 'Set menu Sài Gòn · bữa trưa', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('SGX-CT', 'SGX', 'Set menu chia tay · bữa tối', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('VMQ-VE', 'VMQ', 'Vé Văn Miếu – Quốc Tử Giám', 'Vé tham quan', 'khách/vé', 'khach'),
    DichVu('BTH-DN', 'BTH', 'Vé Đại Nội Huế', 'Vé tham quan', 'khách/vé', 'khach'),
    DichVu('TRH-TR', 'TRH', 'Thuyền rồng sông Hương', 'Hoạt động tham quan', 'thuyền/lượt', 'doan'),
    DichVu('BMS-VE', 'BMS', 'Vé thánh địa Mỹ Sơn', 'Vé tham quan', 'khách/vé', 'khach'),
    DichVu('HCC-LOP', 'HCC', 'Lớp nấu ăn Hội An · gồm bữa trưa', 'Hoạt động tham quan', 'khách/buổi', 'khach'),
    DichVu('MKD-TH', 'MKD', 'Tour thuyền Mekong · gồm bữa trưa', 'Hoạt động tham quan', 'khách/tour', 'khach'),
    DichVu('CCT-VE', 'CCT', 'Vé địa đạo Củ Chi', 'Vé tham quan', 'khách/vé', 'khach'),
    DichVu('BVI-BH', 'BVI', 'Bảo hiểm du lịch trọn tuyến', 'Bảo hiểm', 'khách/chuyến', 'khach'),
    # năm 2026 (ví dụ B)
    DichVu('HBH-DLX', 'HBH', 'Phòng Deluxe', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('HLT-NB16', 'HLT', 'Xe 16 chỗ đón sân bay Nội Bài', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HLT-HL16', 'HLT', 'Xe 16 chỗ Hà Nội – Hạ Long (một chiều)', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('BHY-CAB16', 'BHY', 'Cabin Deluxe · 2 ngày 1 đêm', 'Du thuyền', 'cabin/đêm', 'phong', True),
    DichVu('HTC-CT16', 'HTC', 'Xe 16 chỗ city tour Huế', 'Vận chuyển', 'xe/ngày', 'doan'),
    DichVu('HTC-HV16', 'HTC', 'Xe 16 chỗ Huế – Hội An qua đèo Hải Vân', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HTC-MS16', 'HTC', 'Xe 16 chỗ Hội An – Mỹ Sơn', 'Vận chuyển', 'xe/lượt', 'doan'),
    DichVu('HGH-DRV', 'HGH', 'Phòng Deluxe River View', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('GLR-HUE', 'GLR', 'Set menu Huế · bữa trưa', 'Nhà hàng', 'khách/bữa', 'khach'),
    DichVu('HVT-X45', 'HVT', 'Xe 45 chỗ Đà Nẵng – Hội An', 'Vận chuyển', 'xe/lượt', 'doan', dang_dung=False),
    # ví dụ C
    DichVu('LTH-STD', 'LTH', 'Phòng nghỉ tiêu chuẩn', 'Khách sạn', 'phòng/đêm', 'phong', True),
    DichVu('LTH-GP', 'LTH', 'Giường phụ', 'Khách sạn', 'giường/đêm', 'doan', True, di_kem_cua='LTH-STD', giuong_phu=True),
]
DV = {x.ma: x for x in DICH_VU}

# ---------------------------------------------------------------------------
# DỮ LIỆU · Dòng giá
# ---------------------------------------------------------------------------
V = lambda s: D(s.replace('.', ''))   # '1.450.000' → 1450000
CD, TD, GS = 'Cao điểm', 'Thấp điểm', 'Giáng sinh'
CK = 'Cả kỳ hợp đồng'


def ks(cd_nt, td_nt, cd_ct=None, td_ct=None):
    """Giá khách sạn theo mùa; có giá Cuối tuần thì mùa tách cuối tuần."""
    if cd_ct is None:
        return {(CD, ''): V(cd_nt), (TD, ''): V(td_nt)}
    return {(CD, 'NT'): V(cd_nt), (CD, 'CT'): V(cd_ct), (TD, 'NT'): V(td_nt), (TD, 'CT'): V(td_ct)}


def ck(x):
    return {(CK, ''): V(x) if isinstance(x, str) else D(x)}


DONG_GIA = [
    # ---------- 2027 (A)
    DongGia('TLO-DLX', 'TLO-2027', 'VND', ks('5.200.000', '4.300.000'), (1, 99), 'Deluxe',
            tre_em={'0–5': ('tien', V('0')), '6–11': ('tien', V('0'))},
            phong_don=('tron_goi', ks('3.900.000', '3.300.000'))),
    DongGia('TLO-GP', 'TLO-2027', 'VND', ks('950.000', '800.000')),
    DongGia('BHY-CAB', 'BHY-2027', 'USD', ck('720'), (1, 99), 'Deluxe',
            tre_em={'0–5': ('tien', D('0')), '6–11': ('%', D('50'))},
            phong_don=('tron_goi', ck('860'))),
    DongGia('HAR-DGV', 'HAR-2027', 'VND', ks('3.000.000', '2.300.000', '3.400.000', '2.600.000'), (1, 99), 'Deluxe',
            tre_em={'0–5': ('tien', V('0')), '6–11': ('tien', V('400.000'))},
            phong_don=('phu_thu', V('300.000'))),
    DongGia('HAR-GP', 'HAR-2027', 'VND', ks('750.000', '600.000', '750.000', '600.000')),
    DongGia('SSG-RV', 'SSG-2027', 'VND', ks('3.500.000', '2.900.000', '3.900.000', '3.200.000'), (1, 99), 'Superior',
            tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('25'))},
            phong_don=('phu_thu_%', D('10'))),
    DongGia('SSG-RV', 'SSG-2027', 'VND', ks('4.200.000', '3.500.000', '4.700.000', '3.900.000'), (1, 99), 'Deluxe', thu_tu=2,
            tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('25'))},
            phong_don=('phu_thu_%', D('10'))),
    DongGia('VNA-HUI', 'VNA-2027', 'VND', ck('1.850.000'), (10, 40),
            tre_em={'0–1': ('%', D('10')), '2–5': ('tien', V('1.390.000')), '6–11': ('tien', V('1.390.000'))}),
    DongGia('VNA-SGN', 'VNA-2027', 'USD', ck(D('78')), (10, 40),
            tre_em={'0–1': ('%', D('10')), '2–5': ('%', D('75')), '6–11': ('%', D('75'))}),
    DongGia('DVG-DE', 'DVG-2027', 'VND', ck('1.300.000'), (1, 15)),
    DongGia('DVG-DE', 'DVG-2027', 'VND', ck('1.500.000'), (16, 30), thu_tu=2),
    DongGia('HLT-NB29', 'HLT-2027', 'VND', ck('2.800.000'), (16, 29)),
    DongGia('HLT-CT29', 'HLT-2027', 'VND', ck('3.600.000'), (16, 29)),
    DongGia('HLT-HL29', 'HLT-2027', 'VND', ck('5.400.000'), (16, 29)),
    DongGia('HTC-PB29', 'HTC-2027', 'VND', ck('1.400.000'), (16, 29)),
    DongGia('HTC-CT29', 'HTC-2027', 'VND', ck('2.800.000'), (16, 29)),
    DongGia('HTC-HV29', 'HTC-2027', 'VND', ck('4.200.000'), (16, 29)),
    DongGia('HTC-MS29', 'HTC-2027', 'VND', ck('2.200.000'), (16, 29)),
    DongGia('HTC-DN29', 'HTC-2027', 'VND', ck('1.600.000'), (16, 29)),
    DongGia('SST-TSN29', 'SST-2027', 'VND', ck('1.500.000'), (16, 29)),
    DongGia('SST-CT29', 'SST-2027', 'VND', ck('3.000.000'), (16, 29)),
    DongGia('SST-MT29', 'SST-2027', 'VND', ck('4.000.000'), (16, 29)),
    DongGia('SST-CC29', 'SST-2027', 'VND', ck('3.200.000'), (16, 29)),
    DongGia('HNP-TOI', 'HNP-2027', 'VND', ck('600.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('70'))}),
    DongGia('HNP-TRUA', 'HNP-2027', 'VND', ck('480.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('70'))}),
    DongGia('HCH-TOI', 'HCH-2027', 'VND', ck('850.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('HCH-TRUA', 'HCH-2027', 'VND', ck('450.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('MSG-VN', 'MSG-2027', 'VND', ck('460.000'), (10, 19), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('50'))}),
    DongGia('MSG-VN', 'MSG-2027', 'VND', ck('430.000'), (20, 24), thu_tu=2, tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('50'))}),
    DongGia('MSG-VN', 'MSG-2027', 'VND', ck('400.000'), (25, 29), thu_tu=3, tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('50'))}),
    DongGia('SGX-TOI', 'SGX-2027', 'VND', ck('600.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('SGX-TRUA', 'SGX-2027', 'VND', ck('450.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('SGX-CT', 'SGX-2027', 'VND', ck('1.100.000'), (10, 40), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('VMQ-VE', 'VMQ-2027', 'VND', ck('70.000'), (1, 99), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('30'))}),
    DongGia('BTH-DN', 'BTH-2027', 'VND', ck('200.000'), (1, 99), tre_em={'0–5': ('tien', V('0')), '6–11': ('tien', V('40.000'))}),
    DongGia('TRH-TR', 'TRH-2027', 'VND', ck('1.800.000'), (16, 30)),
    DongGia('BMS-VE', 'BMS-2027', 'VND', ck('150.000'), (1, 99), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('50'))}),
    DongGia('HCC-LOP', 'HCC-2027', 'VND', ck('950.000'), (10, 30), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('MKD-TH', 'MKD-2027', 'VND', ck('980.000'), (10, 30), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('60'))}),
    DongGia('CCT-VE', 'CCT-2027', 'VND', ck('125.000'), (1, 99), tre_em={'0–5': ('tien', V('0')), '6–11': ('%', D('40'))}),

    DongGia('BVI-BH', 'BVI-2027', 'VND', ck('280.000'), (1, 99)),
    # MTH-2026 có dòng giá 2026 nhưng không có hợp đồng 2027 → 19, 20/03/2027 thiếu hợp đồng
    DongGia('MTH-DLX', 'MTH-2026', 'VND', {(CD, ''): V('1.350.000'), (TD, ''): V('1.150.000'), (GS, ''): V('1.600.000')}, (1, 99), 'Deluxe',
            tre_em={'0–5': ('tien', V('0')), '6–11': ('tien', V('0'))}, phong_don=None),
    # ---------- 2026 (B)
    DongGia('HBH-DLX', 'HBH-2026', 'VND', {(CD, ''): V('2.200.000'), (TD, ''): V('1.800.000'), (GS, ''): V('2.600.000')}, (1, 99), 'Deluxe',
            phong_don=('phu_thu', V('600.000'))),
    DongGia('HLT-NB16', 'HLT-2026', 'VND', ck('1.800.000'), (1, 99)),
    DongGia('HLT-HL16', 'HLT-2026', 'VND', ck('3.000.000'), (1, 99)),
    DongGia('BHY-CAB16', 'BHY-2026', 'USD', ck('610'), (1, 99), 'Deluxe', phong_don=('tron_goi', ck('915'))),
    DongGia('HNP-TOI', 'HNP-2026', 'VND', ck('320.000'), (10, 30)),
    DongGia('HTC-CT16', 'HTC-2026', 'VND', ck('1.800.000'), (1, 99)),
    DongGia('HTC-HV16', 'HTC-2026', 'VND', ck('2.600.000'), (1, 99)),
    DongGia('HTC-MS16', 'HTC-2026', 'VND', ck('1.200.000'), (1, 99)),
    DongGia('DVG-DE', 'DVG-2026', 'VND', ck('1.300.000'), (1, 15)),
    DongGia('HGH-DRV', 'HGH-2026', 'VND', {(CD, ''): V('1.900.000'), (TD, ''): V('1.500.000'), (GS, ''): V('2.300.000')}, (1, 99), 'Deluxe',
            phong_don=('phu_thu', V('500.000'))),
    DongGia('GLR-HUE', 'GLR-2025', 'VND', ck('300.000'), (10, 30)),
    DongGia('MSG-VN', 'MSG-2026', 'VND', ck('350.000'), (10, 20)),
    DongGia('HAR-DGV', 'HAR-2026', 'VND', {(CD, 'NT'): V('2.400.000'), (CD, 'CT'): V('2.800.000'), (TD, 'NT'): V('1.900.000'),
                                          (TD, 'CT'): V('2.200.000'), (GS, ''): V('3.500.000')}, (1, 99), 'Deluxe',
            phong_don=('phu_thu', V('900.000'))),
    DongGia('HAR-GP', 'HAR-2026', 'VND', {(CD, 'NT'): V('700.000'), (CD, 'CT'): V('700.000'), (TD, 'NT'): V('550.000'),
                                         (TD, 'CT'): V('550.000'), (GS, ''): V('900.000')}),
    # ---------- C (Lotus, theo KD06 AC93, AC94)
    DongGia('LTH-STD', 'LTH-C', 'VND', {('Cao điểm', 'NT'): V('2.000.000'), ('Cao điểm', 'CT'): V('2.300.000'),
                                       ('Thấp điểm', 'NT'): V('1.700.000'), ('Thấp điểm', 'CT'): V('1.900.000'),
                                       ('Tết', ''): V('2.600.000')}, (1, 99), 'Tiêu chuẩn',
            tre_em={'0–5': ('tien', V('0')), '6–12': ('%', D('50'))}),
    DongGia('LTH-GP', 'LTH-C', 'VND', {('Cao điểm', 'NT'): V('600.000'), ('Cao điểm', 'CT'): V('650.000'),
                                      ('Thấp điểm', 'NT'): V('500.000'), ('Thấp điểm', 'CT'): V('500.000'),
                                      ('Tết', ''): V('800.000')}),
]

# ---------------------------------------------------------------------------
# DỮ LIỆU · Phụ thu lễ Tết (DH03 R15)
# ---------------------------------------------------------------------------
PHU_THU = [
    PhuThu('HAR-DGV', 'HAR-2027', 'Mùa lễ hội đèn lồng tháng 3', d('20/03/2027'), d('25/03/2027'), 'Thay thế', V('3.300.000'), 'phòng/đêm'),
    PhuThu('HAR-DGV', 'HAR-2027', 'Đêm phố cổ rằm tháng Hai', d('22/03/2027'), d('22/03/2027'), 'Thay thế', V('3.600.000'), 'phòng/đêm'),
    PhuThu('HAR-DGV', 'HAR-2027', 'Phí đêm hội bắt buộc', d('22/03/2027'), d('22/03/2027'), 'Cộng dồn', V('200.000'), 'phòng/đêm'),
    PhuThu('HBH-DLX', 'HBH-2026', 'Phụ thu sự kiện cuối năm', d('08/12/2026'), d('10/12/2026'), 'Cộng dồn', V('250.000'), 'phòng/đêm'),
]

# ---------------------------------------------------------------------------
# DỮ LIỆU · Tỷ giá, Markup, bội số
# ---------------------------------------------------------------------------
TY_GIA = {'VND': D('1'), 'EUR': V('27.450'), 'USD': V('25.380')}   # bảng tỷ giá ngày 11/11/2026
NGAY_TY_GIA = d('11/11/2026')
BOI_SO = {'EUR': D('10'), 'USD': D('10'), 'VND': V('10.000')}
MARKUP_MAC_DINH_HANG_MUC = {'Vé máy bay': D('5')}                 # QT05
MARKUP_LOAI_TOUR = {'Inbound đoàn': D('15')}                       # QT05

# ---------------------------------------------------------------------------
# DỮ LIỆU · Hành trình
#   dòng: (mã dịch vụ, cách tính, số lượng cố định, tùy chọn)
#   cách tính: 'khach' Theo số khách, 'phong' Theo số phòng, 'co_dinh' Cố định
# ---------------------------------------------------------------------------
NHAP_TAY_MTH = {'phong_doi': (V('1.450.000'), 'VND'), 'phong_don': (V('1.450.000'), 'VND'), 'tre_em': (V('0'), 'VND'),
                'ghi_chu': 'Giá chào qua email Mường Thanh Holiday Huế 10/11/2026: 1.450.000 ₫/phòng/đêm, phòng đơn cùng giá, trẻ dưới 12 ngủ chung miễn phí'}

HDV = ('DVG-DE', 'co_dinh', 1, {})
VI_DU_A_HANH_TRINH = [
    ('Hà Nội – đón khách', [('HLT-NB29', 'co_dinh', 1, {}), ('HNP-TOI', 'khach', 0, {}), ('TLO-DLX', 'phong', 0, {}), HDV, ('BVI-BH', 'khach', 0, {})]),
    ('Hà Nội city tour', [('HLT-CT29', 'co_dinh', 1, {}), ('VMQ-VE', 'khach', 0, {}), ('HNP-TRUA', 'khach', 0, {}), ('TLO-DLX', 'phong', 0, {}), HDV]),
    ('Hà Nội – Hạ Long, ngủ du thuyền', [('HLT-HL29', 'co_dinh', 1, {}), ('BHY-CAB', 'phong', 0, {}), HDV]),
    ('Hạ Long – Hà Nội', [('HLT-HL29', 'co_dinh', 1, {}), ('HNP-TOI', 'khach', 0, {}), ('TLO-DLX', 'phong', 0, {}), HDV]),
    ('Hà Nội – bay Huế', [('HLT-NB29', 'co_dinh', 1, {}), ('VNA-HUI', 'khach', 0, {}), ('HTC-PB29', 'co_dinh', 1, {}),
                          ('HCH-TOI', 'khach', 0, {}), ('MTH-DLX', 'phong', 0, {'nhap_tay': NHAP_TAY_MTH}), HDV]),
    ('Huế – lăng tẩm, sông Hương', [('HTC-CT29', 'co_dinh', 1, {}), ('BTH-DN', 'khach', 0, {}), ('TRH-TR', 'co_dinh', 1, {}),
                                    ('HCH-TRUA', 'khach', 0, {}), ('MTH-DLX', 'phong', 0, {'nhap_tay': NHAP_TAY_MTH}), HDV]),
    ('Huế – đèo Hải Vân – Hội An', [('HTC-HV29', 'co_dinh', 1, {}), ('MSG-VN', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {}), HDV]),
    ('Hội An – Mỹ Sơn', [('HTC-MS29', 'co_dinh', 1, {}), ('BMS-VE', 'khach', 0, {}), ('MSG-VN', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {}), HDV]),
    ('Hội An – lớp nấu ăn', [('HCC-LOP', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {}), HDV]),
    ('Hội An – bay TP. Hồ Chí Minh', [('HTC-DN29', 'co_dinh', 1, {}), ('VNA-SGN', 'khach', 0, {}), ('SST-TSN29', 'co_dinh', 1, {}),
                                      ('SGX-TOI', 'khach', 0, {}), ('SSG-RV', 'phong', 0, {}), HDV]),
    ('TP. Hồ Chí Minh city tour', [('SST-CT29', 'co_dinh', 1, {}), ('SGX-TRUA', 'khach', 0, {}), ('SSG-RV', 'phong', 0, {}), HDV]),
    ('Miền Tây – Mỹ Tho', [('SST-MT29', 'co_dinh', 1, {}), ('MKD-TH', 'khach', 0, {}), ('SSG-RV', 'phong', 0, {}), HDV]),
    ('Địa đạo Củ Chi – tiệc chia tay', [('SST-CC29', 'co_dinh', 1, {}), ('CCT-VE', 'khach', 0, {}), ('SGX-CT', 'khach', 0, {}), ('SSG-RV', 'phong', 0, {}), HDV]),
    ('Tiễn sân bay Tân Sơn Nhất', [('SST-TSN29', 'co_dinh', 1, {}), HDV]),
]

VI_DU_A = {
    'ten': 'Ví dụ A · Müller Reisen GmbH · YC-2611-0019 · phiên bản v3',
    'khoi_hanh': d('15/03/2027'), 'ngay_ve': d('28/03/2027'),
    'nguoi_lon': 23, 'tuoi_tre': [8, 10], 'hang_phong': 'Deluxe', 'phong_don': 2, 'giuong_phu': 0,
    'tien': 'EUR', 'loai_tour': 'Inbound đoàn',
    'markup_hang_muc': {'Vé máy bay': D('5'), 'Hướng dẫn viên': D('20')},
    'ngan_sach_den': D('2100'),
    'hanh_trinh': VI_DU_A_HANH_TRINH,
    'booking': {'ma': 'BK-2611-0158', 'ngay_tao': d('11/11/2026')},
}

# Tour mẫu TM-008 (8 ngày, 21 dịch vụ). Ngày 8 có Xe 45 chỗ của Hải Vân Transport đã Ngừng dùng.
TM_008 = [
    ('Hà Nội – đón khách', [('HLT-NB16', 'co_dinh', 1, {}), ('HBH-DLX', 'phong', 0, {})]),
    ('Hà Nội – Hạ Long, ngủ du thuyền', [('HLT-HL16', 'co_dinh', 1, {}), ('BHY-CAB16', 'phong', 0, {})]),
    ('Hạ Long – Hà Nội', [('HLT-HL16', 'co_dinh', 1, {}), ('HNP-TOI', 'khach', 0, {}), ('HBH-DLX', 'phong', 0, {})]),
    ('Hà Nội – bay Huế – city Huế', [('HTC-CT16', 'co_dinh', 1, {}), ('DVG-DE', 'co_dinh', 1, {}), ('HGH-DRV', 'phong', 0, {})]),
    ('Huế – đèo Hải Vân – Hội An', [('HTC-HV16', 'co_dinh', 1, {}), ('DVG-DE', 'co_dinh', 1, {}), ('GLR-HUE', 'khach', 0, {}),
                                    ('MSG-VN', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {})]),
    ('Hội An – Mỹ Sơn', [('HTC-MS16', 'co_dinh', 1, {}), ('MSG-VN', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {})]),
    ('Hội An tự do', [('MSG-VN', 'khach', 0, {}), ('HAR-DGV', 'phong', 0, {})]),
    ('Hội An – sân bay Đà Nẵng', [('HVT-X45', 'co_dinh', 1, {})]),
]

VI_DU_C = [
    {'ten': 'AC93 · 5 người lớn, 1 giường phụ', 'khoi_hanh': d('15/03/2027'), 'nguoi_lon': 5, 'tuoi_tre': [],
     'hang_phong': 'Tiêu chuẩn', 'phong_don': 0, 'giuong_phu': 1, 'tien': 'VND', 'loai_tour': 'Inbound đoàn',
     'markup_hang_muc': {'Lưu trú': D('10')},
     'hanh_trinh': [('Hà Nội', [('LTH-STD', 'phong', 0, {'di_kem': [('LTH-GP', 'giuong_phu', 0)]})])]},
    {'ten': 'AC94 · 2 người lớn, 0 giường phụ, 1 trẻ 8 tuổi cần thêm giường', 'khoi_hanh': d('15/03/2027'), 'nguoi_lon': 2,
     'tuoi_tre': [8], 'hang_phong': 'Tiêu chuẩn', 'phong_don': 0, 'giuong_phu': 0, 'tien': 'VND', 'loai_tour': 'Inbound đoàn',
     'markup_hang_muc': {'Lưu trú': D('10')},
     'hanh_trinh': [('Hà Nội', [('LTH-STD', 'phong', 0, {'di_kem': [('LTH-GP', 'giuong_phu', 0)]})])]},
]


# ---------------------------------------------------------------------------
# BỘ TÍNH GIÁ
# ---------------------------------------------------------------------------
def hop_dong_ap_dung(ncc, ngay):
    ds = [h for h in HOP_DONG if h.ncc == ncc and h.tu <= ngay <= h.den]
    assert len(ds) <= 1, f'Kỳ hợp đồng chồng lấn: {ncc} {ngay}'
    return ds[0] if ds else None


def mua_loai_ngay(hd, ngay):
    for m in hd.mua:
        for a, b in m.khoang:
            if a <= ngay <= b:
                if m.tach_cuoi_tuan:
                    return (m.ten, 'CT' if ngay.weekday() in hd.cuoi_tuan else 'NT')
                return (m.ten, '')
    return None


def nhom_cua(hd, tuoi):
    if hd is None:
        return None
    for n in hd.nhom_tuoi:
        if n.tu <= tuoi < n.den_duoi:
            return n
    return None


def tre_mien_phi(hd, tuoi_tre):
    """Chỉ số các trẻ được miễn phí theo hợp đồng; trẻ nhỏ nhất miễn trước (Q12)."""
    if hd is None or not hd.mien_phi:
        return set()
    so_tre, ma = hd.mien_phi
    ung = [i for i, a in enumerate(tuoi_tre) if (nhom_cua(hd, a) or NhomTuoi('', 0, 0, '')).ma == ma]
    ung.sort(key=lambda i: tuoi_tre[i])
    return set(ung[:so_tre])


def khoang_txt(ds):
    return ', '.join(f'{g.khach[0]}–{g.khach[1]}' for g in ds)


def chon_dong_gia(dv, hd, so_nl, hang_phong):
    """DH03 R14, KD06 R13: căn cứ trùng căn cứ mặc định, khoảng số khách chứa số người lớn,
    theo hạng phòng của điều kiện; cùng hạng phòng lấy Thứ tự nhỏ nhất; chưa có hạng phòng
    thì hạng có giá thấp nhất."""
    ds = [g for g in DONG_GIA if g.dv == dv.ma and g.hd == hd.ma]
    if not ds:
        return None, f'Hợp đồng {hd.ma} chưa có dòng giá', ''
    khop = [g for g in ds if g.khach[0] <= so_nl <= g.khach[1]]
    if not khop:
        return None, f'Không có mức giá cho {so_nl} khách (bảng giá {khoang_txt(ds)} khách)', ''
    hangs = sorted({g.hang_phong for g in khop if g.hang_phong})
    canh_bao = ''
    if hangs:
        if hang_phong in hangs:
            khop = [g for g in khop if g.hang_phong == hang_phong]
        elif hang_phong:
            return None, f'Không có dòng giá hạng {hang_phong}', ''
        else:
            gia_thap = min(min(g.gia.values()) for g in khop)
            hang = sorted(g.hang_phong for g in khop if min(g.gia.values()) == gia_thap)[0]
            khop = [g for g in khop if g.hang_phong == hang]
            if len(hangs) > 1:
                canh_bao = 'Chưa chọn hạng phòng · tính theo hạng giá thấp nhất'
    return min(khop, key=lambda g: g.thu_tu), '', canh_bao


@dataclass
class GiaNgay:
    hd: HopDong
    g: DongGia
    ml: tuple
    gia_mua: D
    gia: D
    thay: list
    cong: list
    canh_bao: str

    def mua_txt(self):
        m, l = self.ml
        return m + {'NT': ' · ngày thường', 'CT': ' · cuối tuần', '': ''}[l]

    def phu_thu_txt(self):
        if not self.thay and not self.cong:
            return ''
        parts = []
        if self.thay:
            ds = ', '.join(f'{p.ten} {so(p.muc)}' for p in self.thay)
            parts.append(f'Thay thế cao nhất trong ({ds}) thay giá mùa {so(self.gia_mua)}')
        if self.cong:
            parts.append('cộng ' + ', '.join(f'{p.ten} {so(p.muc)}' for p in self.cong))
        return '; '.join(parts)


def gia_ngay(dv, ngay, so_nl, hang_phong):
    hd = hop_dong_ap_dung(dv.ncc, ngay)
    if hd is None:
        return None, f'Không có hợp đồng cho {ng(ngay)}'
    g, loi, cb = chon_dong_gia(dv, hd, so_nl, hang_phong)
    if g is None:
        return None, loi
    ml = mua_loai_ngay(hd, ngay)
    if ml is None:
        return None, f'{ng(ngay)} chưa thuộc mùa giá nào của {hd.ma}'
    gm = g.gia.get(ml)
    if gm is None:
        return None, f'Thiếu giá mùa {ml[0]}'
    pts = [p for p in PHU_THU if p.dv == dv.ma and p.hd == hd.ma and p.tu <= ngay <= p.den]
    thay = [p for p in pts if p.kieu == 'Thay thế']
    cong = [p for p in pts if p.kieu == 'Cộng dồn']
    gia = max(p.muc for p in thay) if thay else gm          # Q15
    gia += sum((p.muc for p in cong), D(0))
    return GiaNgay(hd, g, ml, gm, gia, thay, cong, cb), ''


def gia_phong_don(gn):
    """Giá một phòng đơn của một đêm theo cách khai ở hợp đồng (Q14); dùng chung KD06 và KD02.
    Phụ thu lễ theo phòng áp cho cả phòng đơn kiểu phụ thu thêm (gn.gia đã gồm phụ thu lễ);
    phụ thu phòng đơn dạng tỷ lệ tính trên giá mùa chưa gồm phụ thu lễ (BOI-CANH 13/11/2026)."""
    sp, t = gn.g.phong_don, gn.g.tien
    if sp is None:
        return gn.gia, 'giá đã theo phòng'
    if sp[0] == 'tron_goi':
        # Người dùng chốt 13/11/2026: phụ thu lễ Cộng dồn cộng vào giá trọn gói; đêm có phụ thu lễ
        # Thay thế thì phòng đơn trọn gói là khoản thiếu, người dùng nhập tay (KD06 R13, R15).
        if gn.thay:
            raise ValueError('Khoản thiếu: Phòng đơn trọn gói · đêm có giá lễ thay thế (nhập tay)')
        cong = sum((p.muc for p in gn.cong), D(0))
        return sp[1][gn.ml] + cong, 'giá phòng đơn trọn gói' + (f' + phụ thu lễ {so(cong)}' if cong else '')
    if sp[0] == 'phu_thu':
        return gn.gia + sp[1], f'giá phòng {so(gn.gia)} + phụ thu phòng đơn {so(sp[1])}'
    ptd = lam_tron(gn.gia_mua * sp[1] / 100, t)
    return gn.gia + ptd, f'giá phòng {so(gn.gia)} + phụ thu phòng đơn {so(sp[1])} % giá mùa = {so(ptd)}'


@dataclass
class Khoan:
    ngay_so: int
    ngay: date
    dv: DichVu
    hd_txt: str
    nhan: str
    sl_txt: str
    tien: str
    thanh_tien: D
    thanh_phan: list            # [(đối tượng, số người, tiền gốc mỗi người)]
    ref: tuple                  # (ngày, dịch vụ chính) để ghép phòng đôi, phòng đơn
    nhap_tay: str = ''
    di_kem: bool = False
    ghi_chu: str = ''
    hang_muc: str = ''
    markup: D = D(0)
    markup_txt: str = ''
    quy_doi: D = D(0)
    ban: D = D(0)


def tinh_kd06(vd):
    """Bộ tính giá ở KD06.3 (R04, R13, R14, R15). Trả về dict kết quả."""
    nl, tuoi, gp = vd['nguoi_lon'], vd['tuoi_tre'], vd['giuong_phu']
    q = vd['tien']
    # R04 · phòng
    le = nl - vd['phong_don'] - gp
    pd = vd['phong_don'] + (1 if le % 2 else 0)
    tu_xep = pd - vd['phong_don']
    doi = -(-(nl - pd - gp) // 2)
    nl_doi = nl - pd
    so_phong = pd + doi
    markup_chung = MARKUP_LOAI_TOUR[vd['loai_tour']]
    mk = dict(MARKUP_MAC_DINH_HANG_MUC)
    mk.update(vd['markup_hang_muc'])

    ds, thieu = [], []

    def them(k):
        ds.append(k)

    for n, (tieu_de, dong_ds) in enumerate(vd['hanh_trinh'], 1):
        ngay = vd['khoi_hanh'] + timedelta(days=n - 1)
        for ma_dv, cach, sl_cd, opt in dong_ds:
            dv = DV[ma_dv]
            gn, loi = gia_ngay(dv, ngay, nl, vd['hang_phong'])
            nt = opt.get('nhap_tay')
            if gn is None and not nt:
                thieu.append((n, ngay, dv, loi))
                continue
            hd = gn.hd if gn else None
            hd_txt = (f'{hd.ma} · {gn.mua_txt()}' if gn else loi)
            ghi = gn.phu_thu_txt() if gn else ''
            nhap = nt['ghi_chu'] if (gn is None and nt) else ''
            free = tre_mien_phi(hd, tuoi)
            if cach == 'phong':
                assert dv.can_cu == 'phong'
                ref = (n, dv.ma)
                if doi:
                    dg, t = (gn.gia, gn.g.tien) if gn else nt['phong_doi']
                    them(Khoan(n, ngay, dv, hd_txt, 'phòng đôi', f'{doi} {dv.don_vi.split("/")[0]} × {tien(dg, t)}', t, dg * doi,
                               [('DOI', nl_doi, dg * doi / nl_doi)], ref, nhap, ghi_chu=ghi))
                for ma_dk, cach_dk, sl_dk in opt.get('di_kem', []):
                    dk = DV[ma_dk]
                    sl = gp if cach_dk == 'giuong_phu' else sl_dk
                    if sl == 0:
                        continue
                    # đi kèm: giá theo hợp đồng áp dụng của dịch vụ chính, mùa và loại ngày của ngày dùng (R13)
                    g_dk = [g for g in DONG_GIA if g.dv == dk.ma and g.hd == hd.ma and g.khach[0] <= nl <= g.khach[1]]
                    dg_dk = g_dk[0].gia[gn.ml]
                    them(Khoan(n, ngay, dk, f'{hd.ma} · {gn.mua_txt()}', f'đi kèm {dv.ten}', f'{sl} giường × {tien(dg_dk, g_dk[0].tien)}',
                               g_dk[0].tien, dg_dk * sl, [('DOI', nl_doi, dg_dk * sl / nl_doi)], ref, di_kem=True))
                if gp and not opt.get('di_kem'):
                    thieu.append((n, ngay, dv, f'Giường phụ · chưa thêm vào {dv.ten}, {ng(ngay)}'))
                if pd:
                    if gn:
                        t = gn.g.tien
                        dg, cach_pd = gia_phong_don(gn)
                    else:
                        (dg, t), cach_pd = nt['phong_don'], 'nhập tay'
                    nhan = 'phòng đơn' + (f' ({tu_xep} tự xếp)' if tu_xep else '')
                    them(Khoan(n, ngay, dv, hd_txt, nhan, f'{pd} {dv.don_vi.split("/")[0]} × {tien(dg, t)}', t, dg * pd,
                               [('DON', pd, dg)], ref, nhap, ghi_chu=cach_pd))
                if tuoi:
                    tp, mo_ta, t = [], [], (gn.g.tien if gn else nt['tre_em'][1])
                    for i, a in enumerate(tuoi):
                        if gn:
                            nh = nhom_cua(hd, a)
                            assert nh is not None, 'Ví dụ không có trẻ ngoài nhóm tuổi ở dịch vụ phòng'
                            sp = gn.g.tre_em.get(nh.ma)
                            if i in free:
                                p, m = D(0), 'miễn phí theo HĐ'
                            elif sp is None:
                                thieu.append((n, ngay, dv, f'Thiếu giá trẻ em nhóm {nh.ma}'))
                                p, m = D(0), 'thiếu'
                            elif sp[0] == '%':
                                p = lam_tron(sp[1] / 100 * gn.gia_mua / 2, t)
                                m = f'{so(sp[1])} % × {so(gn.gia_mua)} ÷ 2'
                            else:
                                p, m = sp[1], 'giá cố định'
                            m = f'nhóm {nh.ma} {nh.dieu_kien}: {m}'
                        else:
                            p, m = nt['tre_em'][0], 'nhập tay'
                        tp.append((('TE', i), 1, p))
                        mo_ta.append(f'{a} t: {tien(p, t)} ({m})')
                    them(Khoan(n, ngay, dv, hd_txt, 'trẻ em', f'{len(tuoi)} trẻ', t, sum(x[2] for x in tp), tp, ref, nhap,
                               ghi_chu='; '.join(mo_ta)))
            elif cach == 'khach':
                assert dv.can_cu == 'khach'
                t = gn.g.tien
                tp = [('NL', nl, gn.gia)]
                parts = [f'{nl} NL × {tien(gn.gia, t)}']
                for i, a in enumerate(tuoi):
                    nh = nhom_cua(hd, a)
                    if i in free:
                        p, m = D(0), 'miễn phí theo HĐ'
                    elif nh is None:
                        p, m = gn.gia, 'ngoài nhóm tuổi · như NL'
                    else:
                        sp = gn.g.tre_em.get(nh.ma)
                        if sp is None:
                            thieu.append((n, ngay, dv, f'Thiếu giá trẻ em nhóm {nh.ma}'))
                            p, m = D(0), 'thiếu'
                        elif sp[0] == '%':
                            p, m = lam_tron(gn.gia_mua * sp[1] / 100, t), f'{so(sp[1])} %'
                        else:
                            p, m = sp[1], 'cố định'
                    tp.append((('TE', i), 1, p))
                    parts.append(f'TE {a} t × {tien(p, t)} ({m})')
                tt = sum(x[1] * x[2] for x in tp)
                them(Khoan(n, ngay, dv, hd_txt, '', '; '.join(parts), t, tt, tp, (n, dv.ma), ghi_chu=ghi))
            else:  # co_dinh
                t = gn.g.tien
                tt = gn.gia * sl_cd
                tinh_phi = [i for i in range(len(tuoi)) if i not in free]
                so_tinh_phi = nl + len(tinh_phi)
                tp = [('NL', nl, tt / so_tinh_phi)] + [(('TE', i), 1, (tt / so_tinh_phi if i in tinh_phi else D(0)))
                                                         for i in range(len(tuoi))]
                g_txt = f'{sl_cd} {dv.don_vi.split("/")[0]} × {tien(gn.gia, t)}'
                if free:
                    ghi = (ghi + '; ' if ghi else '') + f'chia cho {so_tinh_phi} khách tính phí (trẻ {", ".join(str(tuoi[i]) for i in sorted(free))} t miễn phí theo HĐ)'
                them(Khoan(n, ngay, dv, hd_txt, '', g_txt, t, tt, tp, (n, dv.ma), ghi_chu=ghi))

    # R14 · quy đổi, Markup, giá bán trước làm tròn của từng khoản
    for k in ds:
        k.hang_muc = LOAI_HANG_MUC[k.dv.loai]
        if k.hang_muc in mk:
            k.markup, k.markup_txt = mk[k.hang_muc], f'{so(mk[k.hang_muc])} % · {k.hang_muc}'
        else:
            k.markup, k.markup_txt = markup_chung, f'{so(markup_chung)} % · {k.hang_muc} (chung)'
        k.quy_doi = lam_tron(k.thanh_tien * TY_GIA[k.tien] / TY_GIA[q], q)
        k.ban = k.quy_doi * (1 + k.markup / 100)          # chưa làm tròn; chỉ làm tròn khi hiển thị

    # R13 · phân bổ vào đối tượng (trên số đã quy đổi của khoản)
    gv = {'NL': D(0), 'PTPD': D(0)}
    gb = {'NL': D(0), 'PTPD': D(0)}
    te_gv = [D(0)] * len(tuoi)
    te_gb = [D(0)] * len(tuoi)
    te_nhom = [[] for _ in tuoi]
    phong = {}
    for k in ds:
        hs = 1 + k.markup / 100
        hd = hop_dong_ap_dung(k.dv.ncc, k.ngay)
        for i, a in enumerate(tuoi):
            nh = nhom_cua(hd, a)
            te_nhom[i].append(nh.ma if nh else None)
        for dt, so_ng, moi in k.thanh_phan:
            share = (k.quy_doi * moi / k.thanh_tien) if k.thanh_tien else D(0)
            if dt == 'NL':
                gv['NL'] += share
                gb['NL'] += share * hs
            elif dt == 'DOI':
                gv['NL'] += share
                gb['NL'] += share * hs
                p = phong.setdefault(k.ref, [D(0), D(0), None, None])
                p[0] += share
                p[1] += share * hs
            elif dt == 'DON':
                p = phong.setdefault(k.ref, [D(0), D(0), None, None])
                p[2], p[3] = share, share * hs
            else:
                i = dt[1]
                te_gv[i] += share
                te_gb[i] += share * hs
    for ref, (c_doi, b_doi, c_don, b_don) in phong.items():
        if c_don is not None:
            gv['PTPD'] += c_don - c_doi
            gb['PTPD'] += b_don - b_doi

    boi = BOI_SO[q]
    doi_tuong = [('Người lớn', nl, gv['NL'], gb['NL'])]
    nhom_te = {}
    for i, a in enumerate(tuoi):
        nhom_te.setdefault(tuple(te_nhom[i]), []).append(i)
    for key, idx in nhom_te.items():
        ma = sorted({x for x in key if x})
        nhan = 'Trẻ em ' + (f'{ma[0]} tuổi ' if len(ma) == 1 else '') + '(' + ', '.join(str(tuoi[i]) for i in idx) + ')'
        doi_tuong.append((nhan, len(idx), sum(te_gv[i] for i in idx) / len(idx), sum(te_gb[i] for i in idx) / len(idx)))
    if pd:
        doi_tuong.append(('Phụ thu phòng đơn', pd, gv['PTPD'], gb['PTPD']))
    kq_dt = [(nhan, sl, c, b, lam_tron_len_boi(b, boi)) for nhan, sl, c, b in doi_tuong]
    chi_tiet_te = [(tuoi[i], te_gv[i], te_gb[i]) for i in range(len(tuoi))]

    tong_gv = sum((k.quy_doi for k in ds), D(0))
    tong_ban_truoc = sum((k.ban for k in ds), D(0))
    tong_gb = sum((sl * g for _, sl, _, _, g in kq_dt), D(0))
    kiem = sum((sl * c for _, sl, c, _, _ in kq_dt), D(0))
    assert abs(kiem - tong_gv) < D('1e-20'), (kiem, tong_gv)
    return {
        'vd': vd, 'khoan': ds, 'thieu': thieu, 'doi_tuong': kq_dt, 'chi_tiet_te': chi_tiet_te,
        'phong': {'phong_don': pd, 'tu_xep': tu_xep, 'doi': doi, 'so_phong': so_phong, 'giuong_phu': gp, 'nl_doi': nl_doi},
        'markup_chung': markup_chung, 'markup': mk,
        'tong_gv': tong_gv, 'tong_ban_truoc': tong_ban_truoc, 'tong_gb': tong_gb,
        'lai_gop': tong_gb - tong_gv, 'markup_bq': (lam_tron(tong_ban_truoc, q) / tong_gv - 1) * 100 if tong_gv else D(0),

    }


# ---------------------------------------------------------------------------
# GIÁ VỐN THAM KHẢO KD02 (RSD KD01-KD02 R05, R07)
# ---------------------------------------------------------------------------
def tinh_kd02(tm, khoi_hanh, N, xoa_ngay=None):
    ngay_ds = [x for i, x in enumerate(tm, 1) if i != xoa_ngay]
    ket_qua, tong = [], {}
    for n, (tieu_de, dong_ds) in enumerate(ngay_ds, 1):
        ngay = khoi_hanh + timedelta(days=n - 1)
        dong_kq, tam = [], {}
        for ma_dv, cach, sl_cd, opt in dong_ds:
            dv = DV[ma_dv]
            if not dv.dang_dung:
                dong_kq.append((dv, cach, sl_cd, None, 'Không tính · dịch vụ ngừng dùng', None, None))
                continue
            gn, loi = gia_ngay(dv, ngay, N, None)
            if cach == 'khach':
                sl, sl_txt = N, f'Theo số khách · {N}'
            elif cach == 'phong':
                sl, sl_txt = -(-N // 2), f'Theo số phòng · {-(-N // 2)}'
            else:
                sl, sl_txt = sl_cd, f'Cố định · {sl_cd}'
            if gn is None:
                dong_kq.append((dv, cach, sl, sl_txt, loi, None, None))
                continue
            t = gn.g.tien
            pd_kd02 = 1 if (cach == 'phong' and N % 2) else 0
            if pd_kd02:
                # KD02 áp phòng đơn tự xếp như KD06 R04 (BOI-CANH 13/11/2026): người lẻ tự xếp 1 phòng đơn
                doi = -(-(N - pd_kd02) // 2)
                dg_pd, cach_pd = gia_phong_don(gn)
                tt = gn.gia * doi + dg_pd * pd_kd02
                sl_txt = f'Theo số phòng · {doi} phòng đôi + {pd_kd02} phòng đơn tự xếp'
            else:
                tt = gn.gia * sl
            mo_ta = f'{tien(gn.gia, t)} · {gn.mua_txt()}' + (f' · {gn.g.khach[0]}–{gn.g.khach[1]} khách' if gn.g.khach != (1, 99) else '')
            if gn.thay or gn.cong:
                mo_ta += f' · gồm phụ thu: {gn.phu_thu_txt()}'
            if pd_kd02:
                mo_ta += f'; phòng đơn {tien(dg_pd, t)} ({cach_pd})'
            dong_kq.append((dv, cach, sl, sl_txt, mo_ta, tt, t))
            tam[t] = tam.get(t, D(0)) + tt
        for t, v in tam.items():
            tong[t] = tong.get(t, D(0)) + v
        ket_qua.append((n, ngay, tieu_de, dong_kq, tam))
    return ket_qua, tong


# ---------------------------------------------------------------------------
# IN KẾT QUẢ (Markdown)
# ---------------------------------------------------------------------------
def p(*a):
    print(*a)


def in_kd06(kq, chi_tiet=True):
    vd = kq['vd']
    q = vd['tien']
    ph = kq['phong']
    tuoi = vd['tuoi_tre']
    p(f"- Điều kiện: {vd['nguoi_lon']} người lớn" + (f", {len(tuoi)} trẻ em ({', '.join(map(str, tuoi))} tuổi)" if tuoi else '')
      + f"; hạng phòng {vd['hang_phong']}; phòng đơn nhập {vd['phong_don']}; giường phụ {vd['giuong_phu']}; "
      f"khởi hành {ng(vd['khoi_hanh'])}; báo giá {q}.")
    p(f"- Phòng (R04): {ph['phong_don']} phòng đơn" + (f" ({ph['tu_xep']} tự xếp cho người lớn lẻ)" if ph['tu_xep'] else '')
      + f", {ph['doi']} phòng đôi, {ph['so_phong']} phòng; {ph['giuong_phu']} giường phụ; {ph['nl_doi']} người lớn ở phòng đôi.")
    if q != 'VND':
        p(f"- Tỷ giá có hiệu lực (bảng tỷ giá ngày {ng(NGAY_TY_GIA)}): EUR {so(TY_GIA['EUR'])} ₫, USD {so(TY_GIA['USD'])} ₫.")
    mk = ', '.join(f'{h} {so(v)} %' for h, v in kq['markup'].items())
    p(f"- Markup chung {so(kq['markup_chung'])} % (mặc định {vd['loai_tour']}); theo hạng mục: {mk}; hạng mục khác để trống dùng Markup chung. "
      f"Bội số làm tròn giá bán {so(BOI_SO[q])} {KY_HIEU[q]}.")
    if kq['thieu']:
        p('- **Còn khoản thiếu:** ' + '; '.join(f'Ngày {n} {dv.ten}: {l}' for n, _, dv, l in kq['thieu']))
    nhap = [k for k in kq['khoan'] if k.nhap_tay]
    if nhap:
        dvs = sorted({(k.dv.ten, k.hd_txt) for k in nhap})
        p(f"- Khoản thiếu đã nhập tay (R15): {len(nhap)} khoản của " + '; '.join(f'{a} ({b})' for a, b in dvs)
          + f". Ghi chú nguồn: “{nhap[0].nhap_tay}”.")
    p()
    if chi_tiet:
        p(f'**Bảng tính giá · Theo ngày** ({len(kq["khoan"])} khoản)')
        p()
        p(f'| Ngày | Khoản | Hợp đồng · mùa · loại ngày | Số lượng × đơn giá gốc | Thành tiền gốc | Quy đổi {q} | Markup | Giá bán trước làm tròn |')
        p('|---|---|---|---|---|---:|---|---:|')
        for k in kq['khoan']:
            ten = f'{k.dv.ten}' + (f' · {k.nhan}' if k.nhan and not k.di_kem else '') + f' · {NCC[k.dv.ncc]}'
            if k.di_kem:
                ten = f'↳ Đi kèm · {k.dv.ten} ({k.nhan}) · {NCC[k.dv.ncc]}'
            sl = k.sl_txt + (f' · {k.ghi_chu}' if k.ghi_chu else '')
            hd_txt = k.hd_txt + (' · **Nhập tay**' if k.nhap_tay else '')
            p(f'| {k.ngay_so} · {k.ngay:%d/%m} | {ten} | {hd_txt} | {sl} | {tien(k.thanh_tien, k.tien)} | {so(k.quy_doi, 0 if q == "VND" else 2)} | {k.markup_txt} | {so(k.ban, 0 if q == "VND" else 2)} |')
        p()
    # Theo dịch vụ
    le = 0 if q == 'VND' else 2
    nhom = {}
    for k in kq['khoan']:
        key = (k.hang_muc, k.dv.ma)
        nhom.setdefault(key, []).append(k)
    p('**Bảng tính giá · Theo dịch vụ** (gom theo hạng mục; mỗi dịch vụ một dòng cho cả hành trình)')
    p()
    p(f'| Hạng mục · dịch vụ | Ngày dùng | Số khoản | Giá vốn {q} | Markup | Giá bán trước làm tròn {q} |')
    p('|---|---|---:|---:|---|---:|')
    tong_c = tong_b = D(0)
    so_dv = 0
    for hm in THU_TU_HANG_MUC:
        keys = [kk for kk in nhom if kk[0] == hm]
        if not keys:
            continue
        c = sum((k.quy_doi for kk in keys for k in nhom[kk]), D(0))
        b = sum((k.ban for kk in keys for k in nhom[kk]), D(0))
        m = nhom[keys[0]][0].markup_txt.split(' · ')[0] + ('' if hm in kq['markup'] else ' · chung')
        p(f'| **{hm}** · {len(keys)} dịch vụ | | | **{so(c, le)}** | {m} | **{so(b, le)}** |')
        for kk in sorted(keys, key=lambda x: kq['khoan'].index(nhom[x][0])):
            ks_ = nhom[kk]
            dv = ks_[0].dv
            ngs = sorted({k.ngay_so for k in ks_})
            ng_txt = f'Ngày {ngs[0]}' if len(ngs) == 1 else ('Ngày ' + (f'{ngs[0]}–{ngs[-1]}' if ngs == list(range(ngs[0], ngs[-1] + 1)) else ', '.join(map(str, ngs))))
            ten = dv.ten + (f' kèm {DV[dv.di_kem_cua].ten}' if dv.di_kem_cua else '') + f' · {NCC[dv.ncc]}'
            if any(k.nhap_tay for k in ks_):
                ten += ' · Nhập tay'
            p(f'| ↳ {ten} | {ng_txt} | {len(ks_)} | {so(sum((k.quy_doi for k in ks_), D(0)), le)} | {ks_[0].markup_txt.split(" · ")[0]} | {so(sum((k.ban for k in ks_), D(0)), le)} |')
        tong_c += c
        tong_b += b
        so_dv += len(keys)
    p(f'| **Tổng · {so_dv} dịch vụ** | | {len(kq["khoan"])} | **{so(tong_c, le)}** | bình quân {pct(kq["markup_bq"])} | **{so(tong_b, le)}** |')
    p()
    p('**Giá theo đối tượng** (giá bán = làm tròn lên theo bội số của Σ phần giá vốn × (1 + Markup của khoản))')
    p()
    p(f'| Đối tượng | Giá vốn {q} | Giá bán trước làm tròn {q} | Giá bán {q} | Số người | Thành tiền {q} |')
    p('|---|---:|---:|---:|---:|---:|')
    for nhan, sl, c, b, g in kq['doi_tuong']:
        p(f'| {nhan} | {so(c, le)} | {so(b, le)} | **{so(g, 0)}** | {sl} | {so(g * sl, 0)} |')
    p(f'| **Tổng giá bán** | | | | | **{so(kq["tong_gb"], 0)}** |')
    p()
    if len(kq['chi_tiet_te']) > 1:
        p('- Trẻ em cùng nhóm tuổi ở mọi hợp đồng gộp một dòng giá bán (R13); giá của dòng là bình quân các trẻ trong dòng: '
          + '; '.join(f'trẻ {a} tuổi giá vốn {so(c, le)}, giá bán trước làm tròn {so(b, le)} (nếu tính riêng: {so(lam_tron_len_boi(b, BOI_SO[q]), 0)})'
                      for a, c, b in kq['chi_tiet_te'])
          + '. Trẻ 8 tuổi được miễn vé Đại Nội Huế theo suất miễn phí của hợp đồng BTH-2027 (trẻ nhỏ nhất miễn trước).')


    tb = kq['tong_gb']
    p(f"- Tổng giá vốn: **{tien(kq['tong_gv'], q)}**" + (
        ' = ' + ' + '.join(f"{tien(sum((k.thanh_tien for k in kq['khoan'] if k.tien == t), D(0)), t)}"
                           for t in ['VND', 'USD'] if any(k.tien == t for k in kq['khoan']))
        + ' gốc, quy đổi từng khoản rồi cộng' if q != 'VND' else ''))
    p(f"- Tổng giá bán trước làm tròn (Σ khoản): {tien(kq['tong_ban_truoc'], q)}; tổng giá bán sau làm tròn theo đối tượng: **{tien(tb, q)}**.")
    p(f"- Lãi gộp: **{tien(kq['lai_gop'], q)}** ({pct(kq['lai_gop'] / tb * 100)} tổng giá bán).")
    p(f"- Markup bình quân = {tien(kq['tong_ban_truoc'], q)} ÷ {tien(kq['tong_gv'], q)} − 1 = **{pct(kq['markup_bq'])}**.")
    pd = [x for x in kq['doi_tuong'] if x[0] == 'Phụ thu phòng đơn']
    if pd:
        nl_g = kq['doi_tuong'][0][4]
        p(f"- Người ở phòng đơn trả giá người lớn + phụ thu phòng đơn = {so(nl_g, 0)} + {so(pd[0][4], 0)} = {so(nl_g + pd[0][4], 0)} {KY_HIEU[q]}.")
    so_khach = vd['nguoi_lon'] + len(tuoi)
    if vd.get('ngan_sach_den'):
        bq = lam_tron(tb / so_khach, q)
        ns = vd['ngan_sach_den']
        p(f"- So với ngân sách (R26, đến {so(ns, 0)} {q}/khách): bình quân {tien(tb, q)} ÷ {so_khach} khách = **{tien(bq, q)}/khách**, "
          f"thấp hơn {tien(ns - bq, q)} ({pct((ns - bq) / ns * 100)}) → trong ngân sách.")


def in_lich_thanh_toan(kq):
    vd = kq['vd']
    q = vd['tien']
    gtri = kq['tong_gb']
    bk = vd['booking']
    d1 = lam_tron(gtri * D('0.30'), q)
    d2 = gtri - d1
    han1 = bk['ngay_tao'] + timedelta(days=14)
    han2 = vd['khoi_hanh'] - timedelta(days=30)
    p(f"**Lịch thanh toán điền sẵn ở KD08 (R05)** · Booking {bk['ma']} tạo {ng(bk['ngay_tao'])}, khởi hành {ng(vd['khoi_hanh'])}, giá trị {tien(gtri, q)}")
    p()
    p('| Đợt | Mẫu | Hạn | Số tiền |')
    p('|---|---|---|---:|')
    p(f'| Đợt 1 | 30 % · ngày tạo + 14 ngày | {ng(han1)} | {tien(d1, q)} |')
    p(f'| Đợt 2 | 70 % (phần còn lại) · khởi hành − 30 ngày | {ng(han2)} | {tien(d2, q)} |')
    p(f'| Tổng | | | {tien(d1 + d2, q)} · Khớp giá trị |')


def in_kd02(tieu_de, tm, khoi_hanh, N, xoa_ngay=None):
    kq, tong = tinh_kd02(tm, khoi_hanh, N, xoa_ngay)
    p(f'#### {tieu_de}')
    p()
    p('| Ngày | Dịch vụ · NCC | Số lượng | Đơn giá tham khảo | Thành tiền |')
    p('|---|---|---|---|---:|')
    for n, ngay, td, dong_kq, tam in kq:
        for dv, cach, sl, sl_txt, mo_ta, tt, t in dong_kq:
            sl_txt = sl_txt or f'Cố định · {sl}'
            p(f'| {n} · {THU[ngay.weekday()]} {ngay:%d/%m} | {dv.ten} · {NCC[dv.ncc]} | {sl_txt} | {mo_ta} | {tien(tt, t) if tt is not None else "—"} |')
        thieu = [x for x in dong_kq if x[5] is None]
        tt_txt = ' + '.join(f'{tien(v, t)} · {tien(lam_tron(v / N, t), t)}/khách' for t, v in sorted(tam.items(), key=lambda x: x[0] != 'VND'))
        p(f'| | **Tạm tính Ngày {n}** | | {("chưa gồm " + str(len(thieu)) + " dịch vụ") if thieu else ""} | **{tt_txt or "—"}** |')
    so_thieu = sum(1 for _, _, _, dk, _ in kq for x in dk if x[5] is None)
    tong_txt = ' + '.join(f'{tien(lam_tron(v / N, t), t)}' for t, v in sorted(tong.items(), key=lambda x: x[0] != 'VND'))
    tam_txt = ' + '.join(f'{tien(v, t)}' for t, v in sorted(tong.items(), key=lambda x: x[0] != 'VND'))
    p()
    p(f'- {len(kq)} ngày, {sum(len(dk) for _, _, _, dk, _ in kq)} dịch vụ. Tổng tạm tính các ngày: {tam_txt}. '
      f'**Cả Tour: {tong_txt} mỗi khách** (tổng ÷ {N}, làm tròn half-up), chưa gồm {so_thieu} dịch vụ.')
    p()


def in_ket_qua():
    p('### Ví dụ A · Müller v3 (KD06)')
    p()
    kq = tinh_kd06(VI_DU_A)
    vd = VI_DU_A
    p(f"YC-2611-0019 · {ng(vd['khoi_hanh'])} – {ng(vd['ngay_ve'])} · {len(vd['hanh_trinh'])} ngày {len(vd['hanh_trinh']) - 1} đêm · "
      f"tính giá ngày {ng(NGAY_TY_GIA)}. Hành trình có {sum(len(x[1]) for x in vd['hanh_trinh'])} dòng dịch vụ "
      f"({len({m for x in vd['hanh_trinh'] for m, *_ in x[1]})} dịch vụ khác nhau).")

    p()
    in_kd06(kq)
    p()
    in_lich_thanh_toan(kq)
    p()
    p('### Ví dụ B · TM-008 · giá vốn tham khảo (KD02)')
    p()
    in_kd02('B1 · Khởi hành 08/12/2026, 12 khách (KD01-KD02 AC28, AC29)', TM_008, d('08/12/2026'), 12)
    in_kd02('B2 · Như B1, xóa Ngày 7 “Hội An tự do” (AC19)', TM_008, d('08/12/2026'), 12, xoa_ngay=7)
    in_kd02('B3 · Như B1, đổi số khách 12 → 16 (AC30)', TM_008, d('08/12/2026'), 16)
    in_kd02('B4 · Như B1, đổi số khách 12 → 11, phòng đơn tự xếp (KD01-KD02 R05, R07)', TM_008, d('08/12/2026'), 11)
    p('### Ví dụ C · giường phụ (KD06 AC93, AC94)')
    p()
    for vd in VI_DU_C:
        p(f"#### {vd['ten']}")
        p()
        in_kd06(tinh_kd06(vd))
        p()


# ---------------------------------------------------------------------------
# IN BẢNG DỮ LIỆU (Markdown)
# ---------------------------------------------------------------------------
def gia_txt(g):
    parts = []
    for (m, l), v in g.gia.items():
        parts.append(f"{m}{' ' + l if l else ''} {so(v, 0 if g.tien != 'USD' else 0)}")
    return '; '.join(parts)


def in_du_lieu():
    p('### NCC và hợp đồng')
    p()
    p('| Hợp đồng | NCC | Kỳ hiệu lực | Loại tiền | Mùa (khoảng ngày; tách cuối tuần) | Chính sách trẻ em (nhóm: từ ≤ tuổi < đến dưới; điều kiện) | Số trẻ miễn phí | Ghi chú |')
    p('|---|---|---|---|---|---|---|---|')
    for h in HOP_DONG:
        mua = '; '.join(f"{m.ten} " + ', '.join(f'{a:%d/%m}–{b:%d/%m}' for a, b in m.khoang)
                        + (' (tách: cuối tuần đêm T6, T7)' if m.tach_cuoi_tuan else '') for m in h.mua)
        nt = '; '.join(f'{n.ma} ({n.tu} ≤ tuổi < {n.den_duoi}){" " + n.dieu_kien if n.dieu_kien else ""}' for n in h.nhom_tuoi) or 'Không có'
        mp = f'{h.mien_phi[0]} trẻ nhóm {h.mien_phi[1]}, nhỏ nhất trước' if h.mien_phi else '—'
        p(f'| {h.ma} | {NCC[h.ncc]} | {ng(h.tu)} – {ng(h.den)} | {h.tien} | {mua} | {nt} | {mp} | {h.ghi_chu} |')
    p()
    p('### Dịch vụ và dòng giá')
    p()
    p('Khoảng số khách là số người lớn (DH03 R14). Giá trẻ em dạng % tính trên giá mỗi người lớn của cùng dòng (phòng: giá mùa ÷ 2). '
      'Căn cứ của mọi dòng giá trùng căn cứ mặc định theo đơn vị tính (dòng chính).')
    p()
    p('| Dịch vụ · NCC | Loại → hạng mục | Đơn vị · căn cứ | Hợp đồng | Hạng phòng | Khách | Thứ tự | Tiền | Giá theo mùa · loại ngày | Giá trẻ em | Phòng đơn |')
    p('|---|---|---|---|---|---|---|---|---|---|---|')
    for g in DONG_GIA:
        dv = DV[g.dv]
        te = '; '.join(f"{k}: {so(v[1]) + ' %' if v[0] == '%' else so(v[1])}" for k, v in g.tre_em.items()) or '—'
        if g.phong_don is None:
            pdn = '—' if dv.can_cu != 'phong' else 'Không áp dụng'
        elif g.phong_don[0] == 'tron_goi':
            pdn = 'Trọn gói: ' + '; '.join(f"{m}{' ' + l if l else ''} {so(v)}" for (m, l), v in g.phong_don[1].items())
        elif g.phong_don[0] == 'phu_thu':
            pdn = f'Phụ thu thêm {so(g.phong_don[1])}/phòng/đêm'
        else:
            pdn = f'Phụ thu thêm {so(g.phong_don[1])} % giá mùa của dòng/phòng/đêm'
        ten = dv.ten + (f' (đi kèm {DV[dv.di_kem_cua].ten}' + (', Giường phụ' if dv.giuong_phu else '') + ')' if dv.di_kem_cua else '')
        if not dv.dang_dung:
            ten += ' · Ngừng dùng'
        p(f'| {ten} · {NCC[dv.ncc]} | {dv.loai} → {LOAI_HANG_MUC[dv.loai]} | {dv.don_vi}{" (theo đêm)" if dv.theo_dem else ""} · {CAN_CU_TXT[dv.can_cu]} | {g.hd} | {g.hang_phong or "—"} | {g.khach[0]}–{g.khach[1]} | {g.thu_tu} | {g.tien} | {gia_txt(g)} | {te} | {pdn} |')
    dv_ko_gia = [x for x in DICH_VU if not any(g.dv == x.ma for g in DONG_GIA)]
    for dv in dv_ko_gia:
        ten = dv.ten + (f' (đi kèm {DV[dv.di_kem_cua].ten}, Giường phụ)' if dv.di_kem_cua else '') + (' · Ngừng dùng' if not dv.dang_dung else '')
        p(f'| {ten} · {NCC[dv.ncc]} | {dv.loai} → {LOAI_HANG_MUC[dv.loai]} | {dv.don_vi} · {CAN_CU_TXT[dv.can_cu]} | — | — | — | — | — | Không cần cho ví dụ | — | — |')
    p()
    p('### Phụ thu lễ, sự kiện (DH03 R15)')
    p()
    p('| Dịch vụ · hợp đồng | Phụ thu | Ngày | Kết hợp | Mức | Căn cứ |')
    p('|---|---|---|---|---:|---|')
    for x in PHU_THU:
        p(f'| {DV[x.dv].ten} · {x.hd} | {x.ten} | {ng(x.tu)}{" – " + ng(x.den) if x.den != x.tu else ""} | {x.kieu} | {so(x.muc)} ₫ | {x.can_cu} |')
    p()
    p('### Tỷ giá, Markup, bội số (QT05)')
    p()
    p(f"- Bảng tỷ giá ngày {ng(NGAY_TY_GIA)}: 1 EUR = {so(TY_GIA['EUR'])} ₫; 1 USD = {so(TY_GIA['USD'])} ₫.")
    p(f"- Markup mặc định theo loại Tour: Inbound đoàn {so(MARKUP_LOAI_TOUR['Inbound đoàn'])} %. Markup mặc định theo hạng mục: Vé máy bay 5 %; "
      'hạng mục khác để trống. Ví dụ A đặt thêm Hướng dẫn viên 20 % ở W27; ví dụ C đặt Lưu trú 10 %.')
    p('- Gán loại dịch vụ vào hạng mục: ' + '; '.join(f'{k} → {v}' for k, v in LOAI_HANG_MUC.items()) + '.')
    p(f"- Bội số làm tròn giá bán: EUR {so(BOI_SO['EUR'])}; USD {so(BOI_SO['USD'])}; VND {so(BOI_SO['VND'])}.")
    p()
    for ten, ht, kh in [('Hành trình ví dụ A (YC-2611-0019 v3)', VI_DU_A_HANH_TRINH, VI_DU_A['khoi_hanh']),
                        ('Lịch trình ví dụ B (Tour mẫu TM-008)', TM_008, None),
                        ('Hành trình ví dụ C (AC93, AC94)', VI_DU_C[0]['hanh_trinh'], VI_DU_C[0]['khoi_hanh'])]:
        p(f'### {ten}')
        p()
        p('| Ngày | Tiêu đề | Dịch vụ (cách tính số lượng) |')
        p('|---|---|---|')
        for n, (td, ds) in enumerate(ht, 1):
            ngay = f' · {THU[(kh + timedelta(days=n - 1)).weekday()]} {(kh + timedelta(days=n - 1)):%d/%m/%Y}' if kh else ''
            items = []
            for ma, cach, sl, opt in ds:
                c = {'khach': 'Theo số khách', 'phong': 'Theo số phòng', 'co_dinh': f'Cố định · {sl}'}[cach]
                x = f'{DV[ma].ten} · {NCC[DV[ma].ncc]} ({c})'
                if opt.get('nhap_tay'):
                    x += ' · Nhập tay'
                for dk, cdk, _ in opt.get('di_kem', []):
                    x += f' + đi kèm {DV[dk].ten} (Theo số giường phụ)'
                items.append(x)
            p(f'| {n}{ngay} | {td} | ' + '; '.join(items) + ' |')
        p()
    p(f"Nhập tay ở ví dụ A (Ngày 5, 6 · Mường Thanh Holiday Huế): phòng đôi {so(NHAP_TAY_MTH['phong_doi'][0])} ₫, phòng đơn {so(NHAP_TAY_MTH['phong_don'][0])} ₫, "
          f"trẻ em {so(NHAP_TAY_MTH['tre_em'][0])} ₫; ghi chú nguồn “{NHAP_TAY_MTH['ghi_chu']}”.")


if __name__ == '__main__':
    if '--du-lieu' in sys.argv:
        in_du_lieu()
    else:
        in_ket_qua()
