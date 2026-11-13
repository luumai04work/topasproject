# Ví dụ tính giá · bộ tính giá dùng chung

**TOPAS · Bộ tính giá KD02, DH04, KD06 · Phiên bản 1.0 · 13/11/2026**

- **Tài liệu này là gì.** Bộ dữ liệu minh họa đầy đủ, nhất quán, kèm kết quả tính bằng script, cho ba ví dụ: **A** báo giá Müller v3 (KD06), **B** giá vốn tham khảo của Tour mẫu TM-008 (KD02), **C** giường phụ (KD06 AC93, AC94). Đây là dữ liệu minh họa, không phải dữ liệu thật của NCC. Đồng thời là **dữ liệu mẫu cho scenario TDD của bộ tính giá**: test dựng đúng các bảng ở mục 1 rồi so kết quả với mục 3.
- **Số trong RSD dẫn về đây.** RSD KD06 (L4.1 bước 3, 4; R14; AC35, AC36, AC65, AC69, AC73), RSD KD08 (AC06, AC08), RSD KD01-KD02 (L4.2 bước 3; R07; AC19, AC28, AC29, AC30). Khi số trong RSD khác tài liệu này thì tài liệu này đúng; sửa RSD theo.
- **Quy tắc cài trong script.** RSD KD06 R04 (phòng, phòng đơn tự xếp, giường phụ), R13 (giá vốn, phân bổ), R14 (tỷ giá, Markup, làm tròn), R15 (nhập tay); RSD KD01-KD02 R05, R07 (giá vốn tham khảo); RSD DH03 R02, R07, R09, R14, R15, R23; RSD KD08 R05 (lịch thanh toán điền sẵn); BOI-CANH-DU-AN mục Nền tảng (Tiền Q9, Trẻ em Q12, Phòng Q13', Q14), thuật ngữ Phụ thu (Q15), Dịch vụ đi kèm, Giường phụ, Markup, Bội số làm tròn giá bán, Tỷ giá có hiệu lực. Không thêm quy tắc mới; chỗ quy tắc chưa đủ rõ ghi ở mục 2.
- **Cách sinh lại.** Script `tinh_vi_du.py` cùng thư mục, Python 3 thuần, dùng `decimal.Decimal`. Mục 1 sinh bằng `python3 -I docs/rsd/BO-TINH-GIA/tinh_vi_du.py --du-lieu`; mục 3 sinh bằng `python3 -I docs/rsd/BO-TINH-GIA/tinh_vi_du.py`. Không gõ tay hai mục này: sửa dữ liệu trong script, chạy lại, dán đè cả mục, rồi sửa các RSD dẫn về đây.
- **Thay đổi.** v1.0 (13/11/2026): tạo mới để tính lại ví dụ giá sau Q13', Q14 (phòng đơn tự xếp, giá vốn phòng đơn theo cách khai ở hợp đồng), giường phụ là dịch vụ đi kèm, KD02 tính phụ thu và bỏ làm tròn 1.000 ₫, giá bán mỗi khách làm tròn lên theo bội số. Bổ sung 13/11/2026: ba quyết định của người dùng (trẻ cùng nhóm gộp giá bình quân; phụ thu lễ theo phòng áp cả phòng đơn, phụ thu phòng đơn tỷ lệ trên giá mùa; KD02 phòng đơn tự xếp), thêm ví dụ B4 (11 khách); số của A, B1–B3, C không đổi. Ví dụ Müller v3 cũ (50.750 EUR) và tổng TM-008 cũ (9.865.000 ₫) tính theo quy tắc trước đó và không còn dữ liệu từng dòng, nên được thay bằng bộ dữ liệu ở đây.

## Tóm tắt kết quả

| Ví dụ | Kết quả chính |
|---|---|
| A · Müller v3 (EUR) | 23 người lớn, 2 trẻ (8, 10 tuổi), nhập 2 phòng đơn → 3 phòng đơn (1 tự xếp), 10 phòng đôi, 13 phòng. Giá vốn 45.222,82 EUR. Giá bán: người lớn 1.990, trẻ em 6–11 tuổi 780, phụ thu phòng đơn 1.460. Tổng 1.990 × 23 + 780 × 2 + 1.460 × 3 = 51.710 EUR; lãi gộp 6.487,18 EUR (12,5 %); Markup bình quân 14,3 %; bình quân 2.068,40 EUR/khách, trong ngân sách 2.100. Lịch thanh toán KD08: 15.513 + 36.197 EUR |
| B · TM-008 (KD02) | Khởi hành 08/12/2026, 12 khách: cả Tour 9.903.333 ₫ + 305 USD mỗi khách, chưa gồm 2 dịch vụ; Ngày 5 24.900.000 ₫ · 2.075.000 ₫/khách. Xóa Ngày 7: 8.353.333 ₫ + 305 USD. 16 khách: 9.407.500 ₫ + 305 USD, chưa gồm 4 dịch vụ (HDV không có mức giá cho 16 khách). 11 khách (5 phòng đôi + 1 phòng đơn tự xếp): 11.079.091 ₫ + 360,45 USD, chưa gồm 2 dịch vụ |
| C · giường phụ (VND) | AC93: giá vốn 4.600.000 ₫, người lớn 1.020.000 ₫ × 5 = 5.100.000 ₫, lãi gộp 500.000 ₫. AC94: trẻ 8 tuổi thêm giường 500.000 ₫ giá vốn, không có khoản giường phụ |

Các số trên chép từ mục 3; mục 3 là bản gốc.

## Phủ quy tắc

| Quy tắc | Chỗ trong dữ liệu |
|---|---|
| Phòng đơn tự xếp cho người lớn lẻ (R04, Q13') | A: 23 người lớn, nhập 2 phòng đơn → 3 phòng đơn, 10 phòng đôi |
| Phòng đơn trọn gói (Q14) | A: Thăng Long Opera Hotel (VND), Bhaya Cruises (USD) |
| Phòng đơn = giá phòng + phụ thu phòng đơn (Q14) | A: Hoi An Riverside Resort (số tiền), Sông Sài Gòn Hotel (tỷ lệ trên giá mùa) |
| Phụ thu phòng đơn hiển thị = phần vượt phần tiền phòng của người lớn ở phòng đôi (R13) | A: dòng Phụ thu phòng đơn của bảng giá theo đối tượng |
| Hai phụ thu Thay thế và một Cộng dồn cùng một đêm (Q15) | A: Hoi An Riverside Resort đêm 22/03/2027: max(3.300.000; 3.600.000) + 200.000 = 3.800.000 ₫ |
| Phụ thu Thay thế cả khoảng ngày | A: Hoi An Riverside Resort 21/03, 23/03: 3.300.000 ₫ thay giá mùa 3.000.000 ₫ |
| KD02 tính phụ thu (Q11) | B: Hanoi Boutique Hotel 08/12, 10/12/2026: 2.200.000 + 250.000 Cộng dồn |
| Mùa tách cuối tuần, loại ngày theo đêm (DH03 R07, R14) | A: Sông Sài Gòn Hotel đêm thứ Sáu 26/03, thứ Bảy 27/03 là cuối tuần; B: Hoi An Riverside Resort 12/12 cuối tuần, 13/12, 14/12 ngày thường |
| Chọn dòng giá theo hạng phòng, không so Thứ tự giữa các hạng (R13, DH03 R14) | A: Sông Sài Gòn Hotel có Superior (Thứ tự 1) và Deluxe (Thứ tự 2); điều kiện Deluxe lấy dòng Deluxe |
| Chọn dòng giá theo số người lớn, không theo tổng số khách (R13, KD06 AC82) | A: Set menu Việt Nam có 20–24 và 25–29 khách; 23 người lớn lấy 20–24. HDV tiếng Đức 2027 có 1–15 và 16–30 khách |
| Ngoài mọi khoảng số khách (DH04 R08) | B3: HDV tiếng Đức 2026 chỉ có 1–15 khách, 16 khách là khoản thiếu |
| Không có hợp đồng cho ngày dùng (DH03 R02) | A: Mường Thanh Holiday Huế 19, 20/03/2027 (hợp đồng 2026 hết hạn); B: Golden Lotus 12/12/2026 |
| Nhập tay khoản thiếu, áp cho đêm khác của cùng dịch vụ (R15) | A: Mường Thanh Holiday Huế, 6 khoản |
| Giá trẻ em theo nhóm tuổi của hợp đồng của từng dòng (Q12) | A: mọi dịch vụ theo khách và phòng; giá cố định, giá theo %, giá 0 (Thăng Long Opera) |
| Số trẻ miễn phí, trẻ nhỏ nhất miễn trước (Q12) | A: Vé Đại Nội Huế miễn 1 trẻ → trẻ 8 tuổi |
| Khoản theo đoàn chia cho số khách tính phí, trừ trẻ được miễn theo hợp đồng của chính dịch vụ (R13) | A: Thuyền rồng sông Hương miễn 2 trẻ → chia cho 23 người lớn |
| Trẻ ngoài mọi nhóm tuổi tính như người lớn (DH03 R09) | A: Bảo hiểm du lịch (Bảo Việt không có chính sách trẻ em) |
| Quy đổi = tiền gốc × tỷ giá gốc ÷ tỷ giá báo giá, từng khoản (R14) | A: khoản USD (Bhaya Cruises, vé Đà Nẵng – TP. Hồ Chí Minh) và VND sang EUR |
| Markup theo hạng mục và Markup chung (R14) | A: Vé máy bay 5 %, Hướng dẫn viên 20 %, hạng mục khác 15 % chung; C: Lưu trú 10 % |
| Giá bán mỗi đối tượng làm tròn lên theo bội số (Q9) | A: 1.989,94 → 1.990; 778,84 → 780; 1.458,76 → 1.460 EUR; C: 1.012.000 → 1.020.000 ₫ |
| Giường phụ là dịch vụ đi kèm, giá theo hợp đồng và mùa của dịch vụ chính, chia đều với phòng đôi (R13) | C: AC93 |
| Trẻ cần thêm giường theo chính sách trẻ em, không theo giá giường phụ | C: AC94 |
| Số lượng đi kèm 0 thì không tạo khoản (R13) | A: Thăng Long Opera và Hoi An Riverside có khai Giường phụ, điều kiện 0 giường phụ nên hành trình không thêm đi kèm |
| Dịch vụ ngừng dùng không tính (KD01-KD02 R06) | B: Xe 45 chỗ của Hải Vân Transport ở Ngày 8 |
| Lịch thanh toán điền sẵn 30/70, half-up, đợt cuối nhận phần dư (KD08 R05) | A: Booking BK-2611-0158 |

## 1. Dữ liệu

Sinh bằng `tinh_vi_du.py --du-lieu`. Ngày tính giá của ví dụ A là 11/11/2026 (bảng tỷ giá ngày 11/11/2026). Kỳ hợp đồng của cùng NCC không chồng lấn (DH03 R06). Mùa “Cả kỳ hợp đồng” không tách cuối tuần. Cuối tuần của mọi hợp đồng khai là đêm Thứ Sáu và Thứ Bảy.

### NCC và hợp đồng

| Hợp đồng | NCC | Kỳ hiệu lực | Loại tiền | Mùa (khoảng ngày; tách cuối tuần) | Chính sách trẻ em (nhóm: từ ≤ tuổi < đến dưới; điều kiện) | Số trẻ miễn phí | Ghi chú |
|---|---|---|---|---|---|---|---|
| TLO-2027 | Thăng Long Opera Hotel | 01/01/2027 – 31/12/2027 | VND | Cao điểm 01/01–30/04, 01/10–31/12; Thấp điểm 01/05–30/09 | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–11 (6 ≤ tuổi < 12) ngủ chung giường | — |  |
| BHY-2027 | Bhaya Cruises | 01/01/2027 – 31/12/2027 | USD | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–11 (6 ≤ tuổi < 12) ngủ chung giường | — |  |
| MTH-2026 | Mường Thanh Holiday Huế | 01/01/2026 – 31/12/2026 | VND | Cao điểm 01/01–30/04, 01/10–20/12; Thấp điểm 01/05–30/09; Giáng sinh 21/12–31/12 | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–11 (6 ≤ tuổi < 12) ngủ chung giường | — | Hết hạn 31/12/2026, chưa có hợp đồng 2027 |
| HAR-2027 | Hoi An Riverside Resort | 01/01/2027 – 31/12/2027 | VND | Cao điểm 01/01–30/04, 01/10–31/12 (tách: cuối tuần đêm T6, T7); Thấp điểm 01/05–30/09 (tách: cuối tuần đêm T6, T7) | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–11 (6 ≤ tuổi < 12) ngủ chung giường | — |  |
| SSG-2027 | Sông Sài Gòn Hotel | 01/01/2027 – 31/12/2027 | VND | Cao điểm 01/01–30/04, 01/10–31/12 (tách: cuối tuần đêm T6, T7); Thấp điểm 01/05–30/09 (tách: cuối tuần đêm T6, T7) | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–11 (6 ≤ tuổi < 12) ngủ chung giường | — |  |
| VNA-2027 | Vietnam Airlines | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–1 (0 ≤ tuổi < 2); 2–5 (2 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| DVG-2027 | Đất Việt Guides | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HLT-2027 | Hoàng Long Transport | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HTC-2027 | Hue Travel Car | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| SST-2027 | Saigon Star Transport | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HNP-2027 | Nhà hàng Hà Nội Phố | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| HCH-2027 | Nhà hàng Hoàng Cung Huế | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| MSG-2027 | Mỹ Sơn Garden | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| SGX-2027 | Nhà hàng Sài Gòn Xưa | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| VMQ-2027 | Văn Miếu – Quốc Tử Giám | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| BTH-2027 | Trung tâm Bảo tồn Di tích Cố đô Huế | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | 1 trẻ nhóm 6–11, nhỏ nhất trước | Miễn phí 1 trẻ nhóm 6–11 mỗi đoàn |
| TRH-2027 | HTX Thuyền rồng Hương Giang | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | 2 trẻ nhóm 6–11, nhỏ nhất trước | Miễn phí 2 trẻ nhóm 6–11 mỗi thuyền |
| BMS-2027 | Ban quản lý Di tích Mỹ Sơn | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| HCC-2027 | Hội An Cooking Class | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| MKD-2027 | Mekong Discovery | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| CCT-2027 | Khu di tích Địa đạo Củ Chi | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | 0–5 (0 ≤ tuổi < 6); 6–11 (6 ≤ tuổi < 12) | — |  |
| BVI-2027 | Bảo Việt | 01/01/2027 – 31/12/2027 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — | Không có chính sách trẻ em: trẻ tính như người lớn (DH03 R09) |
| HBH-2026 | Hanoi Boutique Hotel | 01/01/2026 – 31/12/2026 | VND | Cao điểm 01/01–30/04, 01/10–20/12; Thấp điểm 01/05–30/09; Giáng sinh 21/12–31/12 | Không có | — |  |
| HLT-2026 | Hoàng Long Transport | 01/01/2026 – 31/12/2026 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| BHY-2026 | Bhaya Cruises | 01/01/2026 – 31/12/2026 | USD | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HNP-2026 | Nhà hàng Hà Nội Phố | 01/01/2026 – 31/12/2026 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HTC-2026 | Hue Travel Car | 01/01/2026 – 20/12/2026 | VND | Cả kỳ hợp đồng 01/01–20/12 | Không có | — |  |
| DVG-2026 | Đất Việt Guides | 01/01/2026 – 31/12/2026 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HGH-2026 | Hương Giang Hotel | 01/01/2026 – 31/12/2026 | VND | Cao điểm 01/01–30/04, 01/10–20/12; Thấp điểm 01/05–30/09; Giáng sinh 21/12–31/12 | Không có | — |  |
| GLR-2025 | Golden Lotus Restaurant | 01/10/2025 – 30/09/2026 | VND | Cả kỳ hợp đồng 01/10–30/09 | Không có | — | Hết hạn 30/09/2026 |
| MSG-2026 | Mỹ Sơn Garden | 01/01/2026 – 31/12/2026 | VND | Cả kỳ hợp đồng 01/01–31/12 | Không có | — |  |
| HAR-2026 | Hoi An Riverside Resort | 01/01/2026 – 31/12/2026 | VND | Cao điểm 01/01–30/04, 01/10–20/12 (tách: cuối tuần đêm T6, T7); Thấp điểm 01/05–30/09 (tách: cuối tuần đêm T6, T7); Giáng sinh 21/12–31/12 | Không có | — |  |
| LTH-C | Khách sạn Lotus Hanoi | 01/12/2026 – 30/11/2027 | VND | Cao điểm 01/12–31/01, 16/02–30/04 (tách: cuối tuần đêm T6, T7); Thấp điểm 01/05–30/11 (tách: cuối tuần đêm T6, T7); Tết 01/02–15/02 | 0–5 (0 ≤ tuổi < 6) ngủ chung giường; 6–12 (6 ≤ tuổi < 13) thêm giường | — | Hợp đồng minh họa riêng cho KD06 AC93, AC94 |

### Dịch vụ và dòng giá

Khoảng số khách là số người lớn (DH03 R14). Giá trẻ em dạng % tính trên giá mỗi người lớn của cùng dòng (phòng: giá mùa ÷ 2). Căn cứ của mọi dòng giá trùng căn cứ mặc định theo đơn vị tính (dòng chính).

| Dịch vụ · NCC | Loại → hạng mục | Đơn vị · căn cứ | Hợp đồng | Hạng phòng | Khách | Thứ tự | Tiền | Giá theo mùa · loại ngày | Giá trẻ em | Phòng đơn |
|---|---|---|---|---|---|---|---|---|---|---|
| Phòng Deluxe · Thăng Long Opera Hotel | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | TLO-2027 | Deluxe | 1–99 | 1 | VND | Cao điểm 5.200.000; Thấp điểm 4.300.000 | 0–5: 0; 6–11: 0 | Trọn gói: Cao điểm 3.900.000; Thấp điểm 3.300.000 |
| Giường phụ (đi kèm Phòng Deluxe, Giường phụ) · Thăng Long Opera Hotel | Khách sạn → Lưu trú | giường/đêm (theo đêm) · đoàn, xe, đơn vị | TLO-2027 | — | 1–99 | 1 | VND | Cao điểm 950.000; Thấp điểm 800.000 | — | — |
| Cabin Deluxe Balcony · 2 ngày 1 đêm · Bhaya Cruises | Du thuyền → Lưu trú | cabin/đêm (theo đêm) · phòng | BHY-2027 | Deluxe | 1–99 | 1 | USD | Cả kỳ hợp đồng 720 | 0–5: 0; 6–11: 50 % | Trọn gói: Cả kỳ hợp đồng 860 |
| Phòng Deluxe Garden View · Hoi An Riverside Resort | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | HAR-2027 | Deluxe | 1–99 | 1 | VND | Cao điểm NT 3.000.000; Cao điểm CT 3.400.000; Thấp điểm NT 2.300.000; Thấp điểm CT 2.600.000 | 0–5: 0; 6–11: 400.000 | Phụ thu thêm 300.000/phòng/đêm |
| Giường phụ (đi kèm Phòng Deluxe Garden View, Giường phụ) · Hoi An Riverside Resort | Khách sạn → Lưu trú | giường/đêm (theo đêm) · đoàn, xe, đơn vị | HAR-2027 | — | 1–99 | 1 | VND | Cao điểm NT 750.000; Cao điểm CT 750.000; Thấp điểm NT 600.000; Thấp điểm CT 600.000 | — | — |
| Phòng River View · Sông Sài Gòn Hotel | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | SSG-2027 | Superior | 1–99 | 1 | VND | Cao điểm NT 3.500.000; Cao điểm CT 3.900.000; Thấp điểm NT 2.900.000; Thấp điểm CT 3.200.000 | 0–5: 0; 6–11: 25 % | Phụ thu thêm 10 % giá mùa của dòng/phòng/đêm |
| Phòng River View · Sông Sài Gòn Hotel | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | SSG-2027 | Deluxe | 1–99 | 2 | VND | Cao điểm NT 4.200.000; Cao điểm CT 4.700.000; Thấp điểm NT 3.500.000; Thấp điểm CT 3.900.000 | 0–5: 0; 6–11: 25 % | Phụ thu thêm 10 % giá mùa của dòng/phòng/đêm |
| Vé máy bay Hà Nội – Huế · Vietnam Airlines | Vé máy bay → Vé máy bay | khách/chặng · khách | VNA-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 1.850.000 | 0–1: 10 %; 2–5: 1.390.000; 6–11: 1.390.000 | — |
| Vé máy bay Đà Nẵng – TP. Hồ Chí Minh · Vietnam Airlines | Vé máy bay → Vé máy bay | khách/chặng · khách | VNA-2027 | — | 10–40 | 1 | USD | Cả kỳ hợp đồng 78 | 0–1: 10 %; 2–5: 75 %; 6–11: 75 % | — |
| HDV tiếng Đức · theo ngày · Đất Việt Guides | Hướng dẫn viên → Hướng dẫn viên | đoàn/ngày · đoàn, xe, đơn vị | DVG-2027 | — | 1–15 | 1 | VND | Cả kỳ hợp đồng 1.300.000 | — | — |
| HDV tiếng Đức · theo ngày · Đất Việt Guides | Hướng dẫn viên → Hướng dẫn viên | đoàn/ngày · đoàn, xe, đơn vị | DVG-2027 | — | 16–30 | 2 | VND | Cả kỳ hợp đồng 1.500.000 | — | — |
| Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HLT-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 2.800.000 | — | — |
| Xe 29 chỗ city tour Hà Nội · Hoàng Long Transport | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | HLT-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 3.600.000 | — | — |
| Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HLT-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 5.400.000 | — | — |
| Xe 29 chỗ sân bay Phú Bài – khách sạn · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 1.400.000 | — | — |
| Xe 29 chỗ city tour Huế · Hue Travel Car | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | HTC-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 2.800.000 | — | — |
| Xe 29 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 4.200.000 | — | — |
| Xe 29 chỗ Hội An – Mỹ Sơn (khứ hồi) · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 2.200.000 | — | — |
| Xe 29 chỗ Hội An – sân bay Đà Nẵng · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 1.600.000 | — | — |
| Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | SST-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 1.500.000 | — | — |
| Xe 29 chỗ city tour TP. Hồ Chí Minh · Saigon Star Transport | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | SST-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 3.000.000 | — | — |
| Xe 29 chỗ TP. Hồ Chí Minh – Mỹ Tho (khứ hồi) · Saigon Star Transport | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | SST-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 4.000.000 | — | — |
| Xe 29 chỗ TP. Hồ Chí Minh – Củ Chi (khứ hồi) · Saigon Star Transport | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | SST-2027 | — | 16–29 | 1 | VND | Cả kỳ hợp đồng 3.200.000 | — | — |
| Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Nhà hàng → Ăn uống | khách/bữa · khách | HNP-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 600.000 | 0–5: 0; 6–11: 70 % | — |
| Set menu Hà Nội · bữa trưa · Nhà hàng Hà Nội Phố | Nhà hàng → Ăn uống | khách/bữa · khách | HNP-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 480.000 | 0–5: 0; 6–11: 70 % | — |
| Set menu cung đình · bữa tối · Nhà hàng Hoàng Cung Huế | Nhà hàng → Ăn uống | khách/bữa · khách | HCH-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 850.000 | 0–5: 0; 6–11: 60 % | — |
| Set menu Huế · bữa trưa · Nhà hàng Hoàng Cung Huế | Nhà hàng → Ăn uống | khách/bữa · khách | HCH-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 450.000 | 0–5: 0; 6–11: 60 % | — |
| Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Nhà hàng → Ăn uống | khách/bữa · khách | MSG-2027 | — | 10–19 | 1 | VND | Cả kỳ hợp đồng 460.000 | 0–5: 0; 6–11: 50 % | — |
| Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Nhà hàng → Ăn uống | khách/bữa · khách | MSG-2027 | — | 20–24 | 2 | VND | Cả kỳ hợp đồng 430.000 | 0–5: 0; 6–11: 50 % | — |
| Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Nhà hàng → Ăn uống | khách/bữa · khách | MSG-2027 | — | 25–29 | 3 | VND | Cả kỳ hợp đồng 400.000 | 0–5: 0; 6–11: 50 % | — |
| Set menu Sài Gòn · bữa tối · Nhà hàng Sài Gòn Xưa | Nhà hàng → Ăn uống | khách/bữa · khách | SGX-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 600.000 | 0–5: 0; 6–11: 60 % | — |
| Set menu Sài Gòn · bữa trưa · Nhà hàng Sài Gòn Xưa | Nhà hàng → Ăn uống | khách/bữa · khách | SGX-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 450.000 | 0–5: 0; 6–11: 60 % | — |
| Set menu chia tay · bữa tối · Nhà hàng Sài Gòn Xưa | Nhà hàng → Ăn uống | khách/bữa · khách | SGX-2027 | — | 10–40 | 1 | VND | Cả kỳ hợp đồng 1.100.000 | 0–5: 0; 6–11: 60 % | — |
| Vé Văn Miếu – Quốc Tử Giám · Văn Miếu – Quốc Tử Giám | Vé tham quan → Tham quan | khách/vé · khách | VMQ-2027 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 70.000 | 0–5: 0; 6–11: 30 % | — |
| Vé Đại Nội Huế · Trung tâm Bảo tồn Di tích Cố đô Huế | Vé tham quan → Tham quan | khách/vé · khách | BTH-2027 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 200.000 | 0–5: 0; 6–11: 40.000 | — |
| Thuyền rồng sông Hương · HTX Thuyền rồng Hương Giang | Hoạt động tham quan → Tham quan | thuyền/lượt · đoàn, xe, đơn vị | TRH-2027 | — | 16–30 | 1 | VND | Cả kỳ hợp đồng 1.800.000 | — | — |
| Vé thánh địa Mỹ Sơn · Ban quản lý Di tích Mỹ Sơn | Vé tham quan → Tham quan | khách/vé · khách | BMS-2027 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 150.000 | 0–5: 0; 6–11: 50 % | — |
| Lớp nấu ăn Hội An · gồm bữa trưa · Hội An Cooking Class | Hoạt động tham quan → Tham quan | khách/buổi · khách | HCC-2027 | — | 10–30 | 1 | VND | Cả kỳ hợp đồng 950.000 | 0–5: 0; 6–11: 60 % | — |
| Tour thuyền Mekong · gồm bữa trưa · Mekong Discovery | Hoạt động tham quan → Tham quan | khách/tour · khách | MKD-2027 | — | 10–30 | 1 | VND | Cả kỳ hợp đồng 980.000 | 0–5: 0; 6–11: 60 % | — |
| Vé địa đạo Củ Chi · Khu di tích Địa đạo Củ Chi | Vé tham quan → Tham quan | khách/vé · khách | CCT-2027 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 125.000 | 0–5: 0; 6–11: 40 % | — |
| Bảo hiểm du lịch trọn tuyến · Bảo Việt | Bảo hiểm → Khác | khách/chuyến · khách | BVI-2027 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 280.000 | — | — |
| Phòng Deluxe · 4★ · Mường Thanh Holiday Huế | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | MTH-2026 | Deluxe | 1–99 | 1 | VND | Cao điểm 1.350.000; Thấp điểm 1.150.000; Giáng sinh 1.600.000 | 0–5: 0; 6–11: 0 | Không áp dụng |
| Phòng Deluxe · Hanoi Boutique Hotel | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | HBH-2026 | Deluxe | 1–99 | 1 | VND | Cao điểm 2.200.000; Thấp điểm 1.800.000; Giáng sinh 2.600.000 | — | Phụ thu thêm 600.000/phòng/đêm |
| Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HLT-2026 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 1.800.000 | — | — |
| Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HLT-2026 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 3.000.000 | — | — |
| Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises | Du thuyền → Lưu trú | cabin/đêm (theo đêm) · phòng | BHY-2026 | Deluxe | 1–99 | 1 | USD | Cả kỳ hợp đồng 610 | — | Trọn gói: Cả kỳ hợp đồng 915 |
| Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Nhà hàng → Ăn uống | khách/bữa · khách | HNP-2026 | — | 10–30 | 1 | VND | Cả kỳ hợp đồng 320.000 | — | — |
| Xe 16 chỗ city tour Huế · Hue Travel Car | Vận chuyển → Di chuyển | xe/ngày · đoàn, xe, đơn vị | HTC-2026 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 1.800.000 | — | — |
| Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2026 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 2.600.000 | — | — |
| Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | HTC-2026 | — | 1–99 | 1 | VND | Cả kỳ hợp đồng 1.200.000 | — | — |
| HDV tiếng Đức · theo ngày · Đất Việt Guides | Hướng dẫn viên → Hướng dẫn viên | đoàn/ngày · đoàn, xe, đơn vị | DVG-2026 | — | 1–15 | 1 | VND | Cả kỳ hợp đồng 1.300.000 | — | — |
| Phòng Deluxe River View · Hương Giang Hotel | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | HGH-2026 | Deluxe | 1–99 | 1 | VND | Cao điểm 1.900.000; Thấp điểm 1.500.000; Giáng sinh 2.300.000 | — | Phụ thu thêm 500.000/phòng/đêm |
| Set menu Huế · bữa trưa · Golden Lotus Restaurant | Nhà hàng → Ăn uống | khách/bữa · khách | GLR-2025 | — | 10–30 | 1 | VND | Cả kỳ hợp đồng 300.000 | — | — |
| Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Nhà hàng → Ăn uống | khách/bữa · khách | MSG-2026 | — | 10–20 | 1 | VND | Cả kỳ hợp đồng 350.000 | — | — |
| Phòng Deluxe Garden View · Hoi An Riverside Resort | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | HAR-2026 | Deluxe | 1–99 | 1 | VND | Cao điểm NT 2.400.000; Cao điểm CT 2.800.000; Thấp điểm NT 1.900.000; Thấp điểm CT 2.200.000; Giáng sinh 3.500.000 | — | Phụ thu thêm 900.000/phòng/đêm |
| Giường phụ (đi kèm Phòng Deluxe Garden View, Giường phụ) · Hoi An Riverside Resort | Khách sạn → Lưu trú | giường/đêm (theo đêm) · đoàn, xe, đơn vị | HAR-2026 | — | 1–99 | 1 | VND | Cao điểm NT 700.000; Cao điểm CT 700.000; Thấp điểm NT 550.000; Thấp điểm CT 550.000; Giáng sinh 900.000 | — | — |
| Phòng nghỉ tiêu chuẩn · Khách sạn Lotus Hanoi | Khách sạn → Lưu trú | phòng/đêm (theo đêm) · phòng | LTH-C | Tiêu chuẩn | 1–99 | 1 | VND | Cao điểm NT 2.000.000; Cao điểm CT 2.300.000; Thấp điểm NT 1.700.000; Thấp điểm CT 1.900.000; Tết 2.600.000 | 0–5: 0; 6–12: 50 % | Không áp dụng |
| Giường phụ (đi kèm Phòng nghỉ tiêu chuẩn, Giường phụ) · Khách sạn Lotus Hanoi | Khách sạn → Lưu trú | giường/đêm (theo đêm) · đoàn, xe, đơn vị | LTH-C | — | 1–99 | 1 | VND | Cao điểm NT 600.000; Cao điểm CT 650.000; Thấp điểm NT 500.000; Thấp điểm CT 500.000; Tết 800.000 | — | — |
| Xe 45 chỗ Đà Nẵng – Hội An · Ngừng dùng · Hải Vân Transport | Vận chuyển → Di chuyển | xe/lượt · đoàn, xe, đơn vị | — | — | — | — | — | Không cần cho ví dụ | — | — |

### Phụ thu lễ, sự kiện (DH03 R15)

| Dịch vụ · hợp đồng | Phụ thu | Ngày | Kết hợp | Mức | Căn cứ |
|---|---|---|---|---:|---|
| Phòng Deluxe Garden View · HAR-2027 | Mùa lễ hội đèn lồng tháng 3 | 20/03/2027 – 25/03/2027 | Thay thế | 3.300.000 ₫ | phòng/đêm |
| Phòng Deluxe Garden View · HAR-2027 | Đêm phố cổ rằm tháng Hai | 22/03/2027 | Thay thế | 3.600.000 ₫ | phòng/đêm |
| Phòng Deluxe Garden View · HAR-2027 | Phí đêm hội bắt buộc | 22/03/2027 | Cộng dồn | 200.000 ₫ | phòng/đêm |
| Phòng Deluxe · HBH-2026 | Phụ thu sự kiện cuối năm | 08/12/2026 – 10/12/2026 | Cộng dồn | 250.000 ₫ | phòng/đêm |

### Tỷ giá, Markup, bội số (QT05)

- Bảng tỷ giá ngày 11/11/2026: 1 EUR = 27.450 ₫; 1 USD = 25.380 ₫.
- Markup mặc định theo loại Tour: Inbound đoàn 15 %. Markup mặc định theo hạng mục: Vé máy bay 5 %; hạng mục khác để trống. Ví dụ A đặt thêm Hướng dẫn viên 20 % ở W27; ví dụ C đặt Lưu trú 10 %.
- Gán loại dịch vụ vào hạng mục: Khách sạn → Lưu trú; Du thuyền → Lưu trú; Vận chuyển → Di chuyển; Vé máy bay → Vé máy bay; Hướng dẫn viên → Hướng dẫn viên; Vé tham quan → Tham quan; Hoạt động tham quan → Tham quan; Nhà hàng → Ăn uống; Bảo hiểm → Khác.
- Bội số làm tròn giá bán: EUR 10; USD 10; VND 10.000.

### Hành trình ví dụ A (YC-2611-0019 v3)

| Ngày | Tiêu đề | Dịch vụ (cách tính số lượng) |
|---|---|---|
| 1 · Thứ Hai 15/03/2027 | Hà Nội – đón khách | Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport (Cố định · 1); Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố (Theo số khách); Phòng Deluxe · Thăng Long Opera Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1); Bảo hiểm du lịch trọn tuyến · Bảo Việt (Theo số khách) |
| 2 · Thứ Ba 16/03/2027 | Hà Nội city tour | Xe 29 chỗ city tour Hà Nội · Hoàng Long Transport (Cố định · 1); Vé Văn Miếu – Quốc Tử Giám · Văn Miếu – Quốc Tử Giám (Theo số khách); Set menu Hà Nội · bữa trưa · Nhà hàng Hà Nội Phố (Theo số khách); Phòng Deluxe · Thăng Long Opera Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 3 · Thứ Tư 17/03/2027 | Hà Nội – Hạ Long, ngủ du thuyền | Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport (Cố định · 1); Cabin Deluxe Balcony · 2 ngày 1 đêm · Bhaya Cruises (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 4 · Thứ Năm 18/03/2027 | Hạ Long – Hà Nội | Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport (Cố định · 1); Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố (Theo số khách); Phòng Deluxe · Thăng Long Opera Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 5 · Thứ Sáu 19/03/2027 | Hà Nội – bay Huế | Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport (Cố định · 1); Vé máy bay Hà Nội – Huế · Vietnam Airlines (Theo số khách); Xe 29 chỗ sân bay Phú Bài – khách sạn · Hue Travel Car (Cố định · 1); Set menu cung đình · bữa tối · Nhà hàng Hoàng Cung Huế (Theo số khách); Phòng Deluxe · 4★ · Mường Thanh Holiday Huế (Theo số phòng) · Nhập tay; HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 6 · Thứ Bảy 20/03/2027 | Huế – lăng tẩm, sông Hương | Xe 29 chỗ city tour Huế · Hue Travel Car (Cố định · 1); Vé Đại Nội Huế · Trung tâm Bảo tồn Di tích Cố đô Huế (Theo số khách); Thuyền rồng sông Hương · HTX Thuyền rồng Hương Giang (Cố định · 1); Set menu Huế · bữa trưa · Nhà hàng Hoàng Cung Huế (Theo số khách); Phòng Deluxe · 4★ · Mường Thanh Holiday Huế (Theo số phòng) · Nhập tay; HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 7 · Chủ nhật 21/03/2027 | Huế – đèo Hải Vân – Hội An | Xe 29 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car (Cố định · 1); Set menu Việt Nam · bữa tối · Mỹ Sơn Garden (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 8 · Thứ Hai 22/03/2027 | Hội An – Mỹ Sơn | Xe 29 chỗ Hội An – Mỹ Sơn (khứ hồi) · Hue Travel Car (Cố định · 1); Vé thánh địa Mỹ Sơn · Ban quản lý Di tích Mỹ Sơn (Theo số khách); Set menu Việt Nam · bữa tối · Mỹ Sơn Garden (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 9 · Thứ Ba 23/03/2027 | Hội An – lớp nấu ăn | Lớp nấu ăn Hội An · gồm bữa trưa · Hội An Cooking Class (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 10 · Thứ Tư 24/03/2027 | Hội An – bay TP. Hồ Chí Minh | Xe 29 chỗ Hội An – sân bay Đà Nẵng · Hue Travel Car (Cố định · 1); Vé máy bay Đà Nẵng – TP. Hồ Chí Minh · Vietnam Airlines (Theo số khách); Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport (Cố định · 1); Set menu Sài Gòn · bữa tối · Nhà hàng Sài Gòn Xưa (Theo số khách); Phòng River View · Sông Sài Gòn Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 11 · Thứ Năm 25/03/2027 | TP. Hồ Chí Minh city tour | Xe 29 chỗ city tour TP. Hồ Chí Minh · Saigon Star Transport (Cố định · 1); Set menu Sài Gòn · bữa trưa · Nhà hàng Sài Gòn Xưa (Theo số khách); Phòng River View · Sông Sài Gòn Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 12 · Thứ Sáu 26/03/2027 | Miền Tây – Mỹ Tho | Xe 29 chỗ TP. Hồ Chí Minh – Mỹ Tho (khứ hồi) · Saigon Star Transport (Cố định · 1); Tour thuyền Mekong · gồm bữa trưa · Mekong Discovery (Theo số khách); Phòng River View · Sông Sài Gòn Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 13 · Thứ Bảy 27/03/2027 | Địa đạo Củ Chi – tiệc chia tay | Xe 29 chỗ TP. Hồ Chí Minh – Củ Chi (khứ hồi) · Saigon Star Transport (Cố định · 1); Vé địa đạo Củ Chi · Khu di tích Địa đạo Củ Chi (Theo số khách); Set menu chia tay · bữa tối · Nhà hàng Sài Gòn Xưa (Theo số khách); Phòng River View · Sông Sài Gòn Hotel (Theo số phòng); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |
| 14 · Chủ nhật 28/03/2027 | Tiễn sân bay Tân Sơn Nhất | Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport (Cố định · 1); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1) |

### Lịch trình ví dụ B (Tour mẫu TM-008)

| Ngày | Tiêu đề | Dịch vụ (cách tính số lượng) |
|---|---|---|
| 1 | Hà Nội – đón khách | Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport (Cố định · 1); Phòng Deluxe · Hanoi Boutique Hotel (Theo số phòng) |
| 2 | Hà Nội – Hạ Long, ngủ du thuyền | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport (Cố định · 1); Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises (Theo số phòng) |
| 3 | Hạ Long – Hà Nội | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport (Cố định · 1); Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố (Theo số khách); Phòng Deluxe · Hanoi Boutique Hotel (Theo số phòng) |
| 4 | Hà Nội – bay Huế – city Huế | Xe 16 chỗ city tour Huế · Hue Travel Car (Cố định · 1); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1); Phòng Deluxe River View · Hương Giang Hotel (Theo số phòng) |
| 5 | Huế – đèo Hải Vân – Hội An | Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car (Cố định · 1); HDV tiếng Đức · theo ngày · Đất Việt Guides (Cố định · 1); Set menu Huế · bữa trưa · Golden Lotus Restaurant (Theo số khách); Set menu Việt Nam · bữa tối · Mỹ Sơn Garden (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng) |
| 6 | Hội An – Mỹ Sơn | Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car (Cố định · 1); Set menu Việt Nam · bữa tối · Mỹ Sơn Garden (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng) |
| 7 | Hội An tự do | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden (Theo số khách); Phòng Deluxe Garden View · Hoi An Riverside Resort (Theo số phòng) |
| 8 | Hội An – sân bay Đà Nẵng | Xe 45 chỗ Đà Nẵng – Hội An · Hải Vân Transport (Cố định · 1) |

### Hành trình ví dụ C (AC93, AC94)

| Ngày | Tiêu đề | Dịch vụ (cách tính số lượng) |
|---|---|---|
| 1 · Thứ Hai 15/03/2027 | Hà Nội | Phòng nghỉ tiêu chuẩn · Khách sạn Lotus Hanoi (Theo số phòng) + đi kèm Giường phụ (Theo số giường phụ) |

Nhập tay ở ví dụ A (Ngày 5, 6 · Mường Thanh Holiday Huế): phòng đôi 1.450.000 ₫, phòng đơn 1.450.000 ₫, trẻ em 0 ₫; ghi chú nguồn “Giá chào qua email Mường Thanh Holiday Huế 10/11/2026: 1.450.000 ₫/phòng/đêm, phòng đơn cùng giá, trẻ dưới 12 ngủ chung miễn phí”.

## 2. Cách hiểu đã chọn

Chỗ RSD chưa đủ rõ để script chỉ có một cách tính. Mỗi mục chọn cách sát chữ nhất; số ở mục 3 theo các cách này. Cách hiểu 1 và 2 làm đổi số của ví dụ A nếu chọn khác; các cách hiểu còn lại không đổi số của ví dụ hoặc chỉ là cách trình bày. Ba điểm sau là **quyết định của người dùng ngày 13/11/2026** (không còn là cách hiểu tạm): trẻ cùng nhóm gộp giá bình quân (mục 6); phụ thu lễ theo phòng áp cả phòng đơn, phụ thu phòng đơn tỷ lệ trên giá mùa (mục 1, 2); KD02 áp phòng đơn tự xếp (mục 15).

1. **Khoản phòng của một đêm** tách thành: phòng đôi (số phòng đôi × giá phòng của đêm), đi kèm Giường phụ (nếu có), phòng đơn (số phòng đơn × giá phòng đơn theo cách khai ở hợp đồng), trẻ em (theo chính sách trẻ em). Phụ thu lễ theo phòng áp cho mọi phòng của đêm, kể cả phòng đơn khai kiểu phụ thu thêm: giá phòng đơn = giá phòng của đêm (sau phụ thu lễ) + phụ thu phòng đơn. (Người dùng chốt 13/11/2026.) Phòng đơn trọn gói cùng đêm có phụ thu lễ chưa có quy tắc; dữ liệu ví dụ không có trường hợp này và script dừng nếu gặp.
2. **Phụ thu phòng đơn kiểu tỷ lệ** tính trên giá mùa của dòng (giá cơ sở “giá mùa của dòng” của DH03 R15, chưa gồm phụ thu lễ; người dùng chốt 13/11/2026), làm tròn half-up theo loại tiền. Sông Sài Gòn Hotel: 10 % × 4.200.000 = 420.000 ₫.
3. **Giá trẻ em kiểu tỷ lệ** tính trên giá mùa của dòng, không gồm phụ thu lễ; với dịch vụ phòng, “giá mỗi người lớn của cùng dòng” là giá mùa ÷ 2 (như KD06 AC94). Ví dụ không có trẻ em ở đêm có phụ thu lễ tính theo tỷ lệ, nên chưa có số nào phụ thuộc điểm này.
4. **Ngủ chung giường hay thêm giường.** KD06 không có ô chọn cho từng trẻ. Mỗi nhóm tuổi của hợp đồng khai một điều kiện và giá của nhóm là giá theo điều kiện đó (AC94: nhóm 6–12 của Lotus Hanoi là thêm giường).
5. **Hợp đồng không có chính sách trẻ em** (Bảo Việt): trẻ ngoài mọi nhóm tuổi tính như người lớn (DH03 R09), không phải khoản thiếu.
6. **Trẻ em gộp dòng giá bán** (R13 “cùng nhóm tuổi theo mọi hợp đồng gộp một dòng”): trẻ có cùng nhóm tuổi ở mọi khoản thì gộp; giá vốn và giá bán trước làm tròn của dòng là bình quân các trẻ trong dòng, rồi làm tròn lên theo bội số, kể cả khi một trẻ được suất miễn phí (người dùng chốt 13/11/2026). Ở ví dụ A trẻ 8 tuổi được miễn vé Đại Nội Huế nên hai trẻ có giá vốn khác nhau (778,00 và 779,67 trước làm tròn); tính riêng từng trẻ cũng ra 780, nên số của ví dụ không phụ thuộc cách hiểu này.
7. **Suất miễn phí ở khoản theo đoàn.** Trẻ được miễn theo hợp đồng của chính dịch vụ chịu 0; khoản chia đều cho số khách tính phí (Thuyền rồng: 1.800.000 ₫ ÷ 23).
8. **Phân bổ trên số đã quy đổi.** Mỗi khoản quy đổi sang loại tiền báo giá và làm tròn half-up trước (R14 “khoản quy đổi”), rồi chia cho đối tượng theo tỷ lệ tiền gốc của từng đối tượng trong khoản. Phần của đối tượng không làm tròn khi cộng; giá vốn và giá bán trước làm tròn của đối tượng chỉ làm tròn khi hiển thị; giá bán mỗi đối tượng làm tròn lên theo bội số từ số chưa làm tròn. Nhờ vậy Σ (giá vốn đối tượng × số người) = tổng giá vốn.
9. **Giá bán trước làm tròn** của khoản, dịch vụ, hạng mục và tổng là Σ (quy đổi × (1 + Markup)) chưa làm tròn, làm tròn half-up khi hiển thị; nên giá bán của hạng mục = giá vốn của hạng mục × (1 + Markup) và hai cách xem Theo ngày, Theo dịch vụ có cùng tổng. Markup bình quân = tổng giá bán trước làm tròn (đã làm tròn 0,01) ÷ tổng giá vốn − 1.
10. **Phụ thu phòng đơn** cộng theo từng đêm của từng dịch vụ phòng: giá phòng đơn − (khoản phòng đôi + khoản giường phụ cùng đêm) ÷ số người lớn ở phòng đôi; phần giá bán dùng Markup của từng khoản.
11. **Nhập tay khoản phòng khi thiếu hợp đồng**: phòng đôi, phòng đơn và trẻ em là ba khoản thiếu, người dùng nhập riêng từng khoản (Mường Thanh: 1.450.000 ₫, 1.450.000 ₫, 0 ₫).
12. **Lãi gộp %** tính trên tổng giá bán (như ví dụ cũ của R14). Bình quân mỗi khách (R26) làm tròn half-up 0,01.
13. **Cả Tour ở KD02** = tổng tạm tính các ngày ÷ số khách, làm tròn một lần (R07 “Cả Tour = tổng các ngày, mỗi khách”). Ở ví dụ B cộng mỗi khách của từng ngày cũng ra cùng số.
14. **Hợp đồng Lotus Hanoi của ví dụ C** dùng đúng số của KD06 AC93, AC94 (phòng 2.000.000 ₫, giường phụ 600.000 ₫ mùa Cao điểm ngày thường 15/03/2027), đặt mã riêng `LTH-C`, không theo hợp đồng LH-2026/HĐ-12 của RSD DH03 (AC70 ghi giường phụ Cao điểm NT 630.000 ₫ sau gia hạn +5 %).
15. **Phòng đơn tự xếp ở KD02** (người dùng chốt 13/11/2026): khi số khách tham chiếu lẻ, giá vốn tham khảo của dịch vụ theo phòng gồm số phòng đôi = làm tròn lên ((khách − phòng đơn) ÷ 2) và người lẻ tự xếp 1 phòng đơn, giá phòng đơn theo cách khai ở hợp đồng (trọn gói, hoặc giá phòng + phụ thu phòng đơn, phụ thu lễ theo phòng áp cả phòng đơn) như KD06 R04. Vẫn không tính trẻ em, giường phụ, tỷ giá, Markup. Ví dụ B4 (11 khách = 5 phòng đôi + 1 phòng đơn).

## 3. Kết quả

Sinh bằng `tinh_vi_du.py`. Số tiền theo định dạng Việt Nam (dấu chấm hàng nghìn, dấu phẩy thập phân).

### Ví dụ A · Müller v3 (KD06)

YC-2611-0019 · 15/03/2027 – 28/03/2027 · 14 ngày 13 đêm · tính giá ngày 11/11/2026. Hành trình có 62 dòng dịch vụ (36 dịch vụ khác nhau).

- Điều kiện: 23 người lớn, 2 trẻ em (8, 10 tuổi); hạng phòng Deluxe; phòng đơn nhập 2; giường phụ 0; khởi hành 15/03/2027; báo giá EUR.
- Phòng (R04): 3 phòng đơn (1 tự xếp cho người lớn lẻ), 10 phòng đôi, 13 phòng; 0 giường phụ; 20 người lớn ở phòng đôi.
- Tỷ giá có hiệu lực (bảng tỷ giá ngày 11/11/2026): EUR 27.450 ₫, USD 25.380 ₫.
- Markup chung 15 % (mặc định Inbound đoàn); theo hạng mục: Vé máy bay 5 %, Hướng dẫn viên 20 %; hạng mục khác để trống dùng Markup chung. Bội số làm tròn giá bán 10 EUR.
- Khoản thiếu đã nhập tay (R15): 6 khoản của Phòng Deluxe · 4★ (Không có hợp đồng cho 19/03/2027); Phòng Deluxe · 4★ (Không có hợp đồng cho 20/03/2027). Ghi chú nguồn: “Giá chào qua email Mường Thanh Holiday Huế 10/11/2026: 1.450.000 ₫/phòng/đêm, phòng đơn cùng giá, trẻ dưới 12 ngủ chung miễn phí”.

**Bảng tính giá · Theo ngày** (88 khoản)

| Ngày | Khoản | Hợp đồng · mùa · loại ngày | Số lượng × đơn giá gốc | Thành tiền gốc | Quy đổi EUR | Markup | Giá bán trước làm tròn |
|---|---|---|---|---|---:|---|---:|
| 1 · 15/03 | Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport | HLT-2027 · Cả kỳ hợp đồng | 1 xe × 2.800.000 ₫ | 2.800.000 ₫ | 102,00 | 15 % · Di chuyển (chung) | 117,30 |
| 1 · 15/03 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | HNP-2027 · Cả kỳ hợp đồng | 23 NL × 600.000 ₫; TE 8 t × 420.000 ₫ (70 %); TE 10 t × 420.000 ₫ (70 %) | 14.640.000 ₫ | 533,33 | 15 % · Ăn uống (chung) | 613,33 |
| 1 · 15/03 | Phòng Deluxe · phòng đôi · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 10 phòng × 5.200.000 ₫ | 52.000.000 ₫ | 1.894,35 | 15 % · Lưu trú (chung) | 2.178,50 |
| 1 · 15/03 | Phòng Deluxe · phòng đơn (1 tự xếp) · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 3 phòng × 3.900.000 ₫ · giá phòng đơn trọn gói | 11.700.000 ₫ | 426,23 | 15 % · Lưu trú (chung) | 490,16 |
| 1 · 15/03 | Phòng Deluxe · trẻ em · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 2 trẻ · 8 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 0 ₫ | 0,00 | 15 % · Lưu trú (chung) | 0,00 |
| 1 · 15/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 1 · 15/03 | Bảo hiểm du lịch trọn tuyến · Bảo Việt | BVI-2027 · Cả kỳ hợp đồng | 23 NL × 280.000 ₫; TE 8 t × 280.000 ₫ (ngoài nhóm tuổi · như NL); TE 10 t × 280.000 ₫ (ngoài nhóm tuổi · như NL) | 7.000.000 ₫ | 255,01 | 15 % · Khác (chung) | 293,26 |
| 2 · 16/03 | Xe 29 chỗ city tour Hà Nội · Hoàng Long Transport | HLT-2027 · Cả kỳ hợp đồng | 1 xe × 3.600.000 ₫ | 3.600.000 ₫ | 131,15 | 15 % · Di chuyển (chung) | 150,82 |
| 2 · 16/03 | Vé Văn Miếu – Quốc Tử Giám · Văn Miếu – Quốc Tử Giám | VMQ-2027 · Cả kỳ hợp đồng | 23 NL × 70.000 ₫; TE 8 t × 21.000 ₫ (30 %); TE 10 t × 21.000 ₫ (30 %) | 1.652.000 ₫ | 60,18 | 15 % · Tham quan (chung) | 69,21 |
| 2 · 16/03 | Set menu Hà Nội · bữa trưa · Nhà hàng Hà Nội Phố | HNP-2027 · Cả kỳ hợp đồng | 23 NL × 480.000 ₫; TE 8 t × 336.000 ₫ (70 %); TE 10 t × 336.000 ₫ (70 %) | 11.712.000 ₫ | 426,67 | 15 % · Ăn uống (chung) | 490,67 |
| 2 · 16/03 | Phòng Deluxe · phòng đôi · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 10 phòng × 5.200.000 ₫ | 52.000.000 ₫ | 1.894,35 | 15 % · Lưu trú (chung) | 2.178,50 |
| 2 · 16/03 | Phòng Deluxe · phòng đơn (1 tự xếp) · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 3 phòng × 3.900.000 ₫ · giá phòng đơn trọn gói | 11.700.000 ₫ | 426,23 | 15 % · Lưu trú (chung) | 490,16 |
| 2 · 16/03 | Phòng Deluxe · trẻ em · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 2 trẻ · 8 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 0 ₫ | 0,00 | 15 % · Lưu trú (chung) | 0,00 |
| 2 · 16/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 3 · 17/03 | Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | HLT-2027 · Cả kỳ hợp đồng | 1 xe × 5.400.000 ₫ | 5.400.000 ₫ | 196,72 | 15 % · Di chuyển (chung) | 226,23 |
| 3 · 17/03 | Cabin Deluxe Balcony · 2 ngày 1 đêm · phòng đôi · Bhaya Cruises | BHY-2027 · Cả kỳ hợp đồng | 10 cabin × 720,00 USD | 7.200,00 USD | 6.657,05 | 15 % · Lưu trú (chung) | 7.655,61 |
| 3 · 17/03 | Cabin Deluxe Balcony · 2 ngày 1 đêm · phòng đơn (1 tự xếp) · Bhaya Cruises | BHY-2027 · Cả kỳ hợp đồng | 3 cabin × 860,00 USD · giá phòng đơn trọn gói | 2.580,00 USD | 2.385,44 | 15 % · Lưu trú (chung) | 2.743,26 |
| 3 · 17/03 | Cabin Deluxe Balcony · 2 ngày 1 đêm · trẻ em · Bhaya Cruises | BHY-2027 · Cả kỳ hợp đồng | 2 trẻ · 8 t: 180,00 USD (nhóm 6–11 ngủ chung giường: 50 % × 720 ÷ 2); 10 t: 180,00 USD (nhóm 6–11 ngủ chung giường: 50 % × 720 ÷ 2) | 360,00 USD | 332,85 | 15 % · Lưu trú (chung) | 382,78 |
| 3 · 17/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 4 · 18/03 | Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | HLT-2027 · Cả kỳ hợp đồng | 1 xe × 5.400.000 ₫ | 5.400.000 ₫ | 196,72 | 15 % · Di chuyển (chung) | 226,23 |
| 4 · 18/03 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | HNP-2027 · Cả kỳ hợp đồng | 23 NL × 600.000 ₫; TE 8 t × 420.000 ₫ (70 %); TE 10 t × 420.000 ₫ (70 %) | 14.640.000 ₫ | 533,33 | 15 % · Ăn uống (chung) | 613,33 |
| 4 · 18/03 | Phòng Deluxe · phòng đôi · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 10 phòng × 5.200.000 ₫ | 52.000.000 ₫ | 1.894,35 | 15 % · Lưu trú (chung) | 2.178,50 |
| 4 · 18/03 | Phòng Deluxe · phòng đơn (1 tự xếp) · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 3 phòng × 3.900.000 ₫ · giá phòng đơn trọn gói | 11.700.000 ₫ | 426,23 | 15 % · Lưu trú (chung) | 490,16 |
| 4 · 18/03 | Phòng Deluxe · trẻ em · Thăng Long Opera Hotel | TLO-2027 · Cao điểm | 2 trẻ · 8 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 0 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 0 ₫ | 0,00 | 15 % · Lưu trú (chung) | 0,00 |
| 4 · 18/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 5 · 19/03 | Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport | HLT-2027 · Cả kỳ hợp đồng | 1 xe × 2.800.000 ₫ | 2.800.000 ₫ | 102,00 | 15 % · Di chuyển (chung) | 117,30 |
| 5 · 19/03 | Vé máy bay Hà Nội – Huế · Vietnam Airlines | VNA-2027 · Cả kỳ hợp đồng | 23 NL × 1.850.000 ₫; TE 8 t × 1.390.000 ₫ (cố định); TE 10 t × 1.390.000 ₫ (cố định) | 45.330.000 ₫ | 1.651,37 | 5 % · Vé máy bay | 1.733,94 |
| 5 · 19/03 | Xe 29 chỗ sân bay Phú Bài – khách sạn · Hue Travel Car | HTC-2027 · Cả kỳ hợp đồng | 1 xe × 1.400.000 ₫ | 1.400.000 ₫ | 51,00 | 15 % · Di chuyển (chung) | 58,65 |
| 5 · 19/03 | Set menu cung đình · bữa tối · Nhà hàng Hoàng Cung Huế | HCH-2027 · Cả kỳ hợp đồng | 23 NL × 850.000 ₫; TE 8 t × 510.000 ₫ (60 %); TE 10 t × 510.000 ₫ (60 %) | 20.570.000 ₫ | 749,36 | 15 % · Ăn uống (chung) | 861,76 |
| 5 · 19/03 | Phòng Deluxe · 4★ · phòng đôi · Mường Thanh Holiday Huế | Không có hợp đồng cho 19/03/2027 · **Nhập tay** | 10 phòng × 1.450.000 ₫ | 14.500.000 ₫ | 528,23 | 15 % · Lưu trú (chung) | 607,46 |
| 5 · 19/03 | Phòng Deluxe · 4★ · phòng đơn (1 tự xếp) · Mường Thanh Holiday Huế | Không có hợp đồng cho 19/03/2027 · **Nhập tay** | 3 phòng × 1.450.000 ₫ · nhập tay | 4.350.000 ₫ | 158,47 | 15 % · Lưu trú (chung) | 182,24 |
| 5 · 19/03 | Phòng Deluxe · 4★ · trẻ em · Mường Thanh Holiday Huế | Không có hợp đồng cho 19/03/2027 · **Nhập tay** | 2 trẻ · 8 t: 0 ₫ (nhập tay); 10 t: 0 ₫ (nhập tay) | 0 ₫ | 0,00 | 15 % · Lưu trú (chung) | 0,00 |
| 5 · 19/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 6 · 20/03 | Xe 29 chỗ city tour Huế · Hue Travel Car | HTC-2027 · Cả kỳ hợp đồng | 1 xe × 2.800.000 ₫ | 2.800.000 ₫ | 102,00 | 15 % · Di chuyển (chung) | 117,30 |
| 6 · 20/03 | Vé Đại Nội Huế · Trung tâm Bảo tồn Di tích Cố đô Huế | BTH-2027 · Cả kỳ hợp đồng | 23 NL × 200.000 ₫; TE 8 t × 0 ₫ (miễn phí theo HĐ); TE 10 t × 40.000 ₫ (cố định) | 4.640.000 ₫ | 169,03 | 15 % · Tham quan (chung) | 194,38 |
| 6 · 20/03 | Thuyền rồng sông Hương · HTX Thuyền rồng Hương Giang | TRH-2027 · Cả kỳ hợp đồng | 1 thuyền × 1.800.000 ₫ · chia cho 23 khách tính phí (trẻ 8, 10 t miễn phí theo HĐ) | 1.800.000 ₫ | 65,57 | 15 % · Tham quan (chung) | 75,41 |
| 6 · 20/03 | Set menu Huế · bữa trưa · Nhà hàng Hoàng Cung Huế | HCH-2027 · Cả kỳ hợp đồng | 23 NL × 450.000 ₫; TE 8 t × 270.000 ₫ (60 %); TE 10 t × 270.000 ₫ (60 %) | 10.890.000 ₫ | 396,72 | 15 % · Ăn uống (chung) | 456,23 |
| 6 · 20/03 | Phòng Deluxe · 4★ · phòng đôi · Mường Thanh Holiday Huế | Không có hợp đồng cho 20/03/2027 · **Nhập tay** | 10 phòng × 1.450.000 ₫ | 14.500.000 ₫ | 528,23 | 15 % · Lưu trú (chung) | 607,46 |
| 6 · 20/03 | Phòng Deluxe · 4★ · phòng đơn (1 tự xếp) · Mường Thanh Holiday Huế | Không có hợp đồng cho 20/03/2027 · **Nhập tay** | 3 phòng × 1.450.000 ₫ · nhập tay | 4.350.000 ₫ | 158,47 | 15 % · Lưu trú (chung) | 182,24 |
| 6 · 20/03 | Phòng Deluxe · 4★ · trẻ em · Mường Thanh Holiday Huế | Không có hợp đồng cho 20/03/2027 · **Nhập tay** | 2 trẻ · 8 t: 0 ₫ (nhập tay); 10 t: 0 ₫ (nhập tay) | 0 ₫ | 0,00 | 15 % · Lưu trú (chung) | 0,00 |
| 6 · 20/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 7 · 21/03 | Xe 29 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | HTC-2027 · Cả kỳ hợp đồng | 1 xe × 4.200.000 ₫ | 4.200.000 ₫ | 153,01 | 15 % · Di chuyển (chung) | 175,96 |
| 7 · 21/03 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | MSG-2027 · Cả kỳ hợp đồng | 23 NL × 430.000 ₫; TE 8 t × 215.000 ₫ (50 %); TE 10 t × 215.000 ₫ (50 %) | 10.320.000 ₫ | 375,96 | 15 % · Ăn uống (chung) | 432,35 |
| 7 · 21/03 | Phòng Deluxe Garden View · phòng đôi · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 10 phòng × 3.300.000 ₫ · Thay thế cao nhất trong (Mùa lễ hội đèn lồng tháng 3 3.300.000) thay giá mùa 3.000.000 | 33.000.000 ₫ | 1.202,19 | 15 % · Lưu trú (chung) | 1.382,52 |
| 7 · 21/03 | Phòng Deluxe Garden View · phòng đơn (1 tự xếp) · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 3 phòng × 3.600.000 ₫ · giá phòng 3.300.000 + phụ thu phòng đơn 300.000 | 10.800.000 ₫ | 393,44 | 15 % · Lưu trú (chung) | 452,46 |
| 7 · 21/03 | Phòng Deluxe Garden View · trẻ em · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 2 trẻ · 8 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 800.000 ₫ | 29,14 | 15 % · Lưu trú (chung) | 33,51 |
| 7 · 21/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 8 · 22/03 | Xe 29 chỗ Hội An – Mỹ Sơn (khứ hồi) · Hue Travel Car | HTC-2027 · Cả kỳ hợp đồng | 1 xe × 2.200.000 ₫ | 2.200.000 ₫ | 80,15 | 15 % · Di chuyển (chung) | 92,17 |
| 8 · 22/03 | Vé thánh địa Mỹ Sơn · Ban quản lý Di tích Mỹ Sơn | BMS-2027 · Cả kỳ hợp đồng | 23 NL × 150.000 ₫; TE 8 t × 75.000 ₫ (50 %); TE 10 t × 75.000 ₫ (50 %) | 3.600.000 ₫ | 131,15 | 15 % · Tham quan (chung) | 150,82 |
| 8 · 22/03 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | MSG-2027 · Cả kỳ hợp đồng | 23 NL × 430.000 ₫; TE 8 t × 215.000 ₫ (50 %); TE 10 t × 215.000 ₫ (50 %) | 10.320.000 ₫ | 375,96 | 15 % · Ăn uống (chung) | 432,35 |
| 8 · 22/03 | Phòng Deluxe Garden View · phòng đôi · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 10 phòng × 3.800.000 ₫ · Thay thế cao nhất trong (Mùa lễ hội đèn lồng tháng 3 3.300.000, Đêm phố cổ rằm tháng Hai 3.600.000) thay giá mùa 3.000.000; cộng Phí đêm hội bắt buộc 200.000 | 38.000.000 ₫ | 1.384,34 | 15 % · Lưu trú (chung) | 1.591,99 |
| 8 · 22/03 | Phòng Deluxe Garden View · phòng đơn (1 tự xếp) · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 3 phòng × 4.100.000 ₫ · giá phòng 3.800.000 + phụ thu phòng đơn 300.000 | 12.300.000 ₫ | 448,09 | 15 % · Lưu trú (chung) | 515,30 |
| 8 · 22/03 | Phòng Deluxe Garden View · trẻ em · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 2 trẻ · 8 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 800.000 ₫ | 29,14 | 15 % · Lưu trú (chung) | 33,51 |
| 8 · 22/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 9 · 23/03 | Lớp nấu ăn Hội An · gồm bữa trưa · Hội An Cooking Class | HCC-2027 · Cả kỳ hợp đồng | 23 NL × 950.000 ₫; TE 8 t × 570.000 ₫ (60 %); TE 10 t × 570.000 ₫ (60 %) | 22.990.000 ₫ | 837,52 | 15 % · Tham quan (chung) | 963,15 |
| 9 · 23/03 | Phòng Deluxe Garden View · phòng đôi · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 10 phòng × 3.300.000 ₫ · Thay thế cao nhất trong (Mùa lễ hội đèn lồng tháng 3 3.300.000) thay giá mùa 3.000.000 | 33.000.000 ₫ | 1.202,19 | 15 % · Lưu trú (chung) | 1.382,52 |
| 9 · 23/03 | Phòng Deluxe Garden View · phòng đơn (1 tự xếp) · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 3 phòng × 3.600.000 ₫ · giá phòng 3.300.000 + phụ thu phòng đơn 300.000 | 10.800.000 ₫ | 393,44 | 15 % · Lưu trú (chung) | 452,46 |
| 9 · 23/03 | Phòng Deluxe Garden View · trẻ em · Hoi An Riverside Resort | HAR-2027 · Cao điểm · ngày thường | 2 trẻ · 8 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định); 10 t: 400.000 ₫ (nhóm 6–11 ngủ chung giường: giá cố định) | 800.000 ₫ | 29,14 | 15 % · Lưu trú (chung) | 33,51 |
| 9 · 23/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 10 · 24/03 | Xe 29 chỗ Hội An – sân bay Đà Nẵng · Hue Travel Car | HTC-2027 · Cả kỳ hợp đồng | 1 xe × 1.600.000 ₫ | 1.600.000 ₫ | 58,29 | 15 % · Di chuyển (chung) | 67,03 |
| 10 · 24/03 | Vé máy bay Đà Nẵng – TP. Hồ Chí Minh · Vietnam Airlines | VNA-2027 · Cả kỳ hợp đồng | 23 NL × 78,00 USD; TE 8 t × 58,50 USD (75 %); TE 10 t × 58,50 USD (75 %) | 1.911,00 USD | 1.766,89 | 5 % · Vé máy bay | 1.855,23 |
| 10 · 24/03 | Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport | SST-2027 · Cả kỳ hợp đồng | 1 xe × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 15 % · Di chuyển (chung) | 62,84 |
| 10 · 24/03 | Set menu Sài Gòn · bữa tối · Nhà hàng Sài Gòn Xưa | SGX-2027 · Cả kỳ hợp đồng | 23 NL × 600.000 ₫; TE 8 t × 360.000 ₫ (60 %); TE 10 t × 360.000 ₫ (60 %) | 14.520.000 ₫ | 528,96 | 15 % · Ăn uống (chung) | 608,30 |
| 10 · 24/03 | Phòng River View · phòng đôi · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 10 phòng × 4.200.000 ₫ | 42.000.000 ₫ | 1.530,05 | 15 % · Lưu trú (chung) | 1.759,56 |
| 10 · 24/03 | Phòng River View · phòng đơn (1 tự xếp) · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 3 phòng × 4.620.000 ₫ · giá phòng 4.200.000 + phụ thu phòng đơn 10 % giá mùa = 420.000 | 13.860.000 ₫ | 504,92 | 15 % · Lưu trú (chung) | 580,66 |
| 10 · 24/03 | Phòng River View · trẻ em · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 2 trẻ · 8 t: 525.000 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.200.000 ÷ 2); 10 t: 525.000 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.200.000 ÷ 2) | 1.050.000 ₫ | 38,25 | 15 % · Lưu trú (chung) | 43,99 |
| 10 · 24/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 11 · 25/03 | Xe 29 chỗ city tour TP. Hồ Chí Minh · Saigon Star Transport | SST-2027 · Cả kỳ hợp đồng | 1 xe × 3.000.000 ₫ | 3.000.000 ₫ | 109,29 | 15 % · Di chuyển (chung) | 125,68 |
| 11 · 25/03 | Set menu Sài Gòn · bữa trưa · Nhà hàng Sài Gòn Xưa | SGX-2027 · Cả kỳ hợp đồng | 23 NL × 450.000 ₫; TE 8 t × 270.000 ₫ (60 %); TE 10 t × 270.000 ₫ (60 %) | 10.890.000 ₫ | 396,72 | 15 % · Ăn uống (chung) | 456,23 |
| 11 · 25/03 | Phòng River View · phòng đôi · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 10 phòng × 4.200.000 ₫ | 42.000.000 ₫ | 1.530,05 | 15 % · Lưu trú (chung) | 1.759,56 |
| 11 · 25/03 | Phòng River View · phòng đơn (1 tự xếp) · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 3 phòng × 4.620.000 ₫ · giá phòng 4.200.000 + phụ thu phòng đơn 10 % giá mùa = 420.000 | 13.860.000 ₫ | 504,92 | 15 % · Lưu trú (chung) | 580,66 |
| 11 · 25/03 | Phòng River View · trẻ em · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · ngày thường | 2 trẻ · 8 t: 525.000 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.200.000 ÷ 2); 10 t: 525.000 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.200.000 ÷ 2) | 1.050.000 ₫ | 38,25 | 15 % · Lưu trú (chung) | 43,99 |
| 11 · 25/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 12 · 26/03 | Xe 29 chỗ TP. Hồ Chí Minh – Mỹ Tho (khứ hồi) · Saigon Star Transport | SST-2027 · Cả kỳ hợp đồng | 1 xe × 4.000.000 ₫ | 4.000.000 ₫ | 145,72 | 15 % · Di chuyển (chung) | 167,58 |
| 12 · 26/03 | Tour thuyền Mekong · gồm bữa trưa · Mekong Discovery | MKD-2027 · Cả kỳ hợp đồng | 23 NL × 980.000 ₫; TE 8 t × 588.000 ₫ (60 %); TE 10 t × 588.000 ₫ (60 %) | 23.716.000 ₫ | 863,97 | 15 % · Tham quan (chung) | 993,57 |
| 12 · 26/03 | Phòng River View · phòng đôi · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 10 phòng × 4.700.000 ₫ | 47.000.000 ₫ | 1.712,20 | 15 % · Lưu trú (chung) | 1.969,03 |
| 12 · 26/03 | Phòng River View · phòng đơn (1 tự xếp) · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 3 phòng × 5.170.000 ₫ · giá phòng 4.700.000 + phụ thu phòng đơn 10 % giá mùa = 470.000 | 15.510.000 ₫ | 565,03 | 15 % · Lưu trú (chung) | 649,78 |
| 12 · 26/03 | Phòng River View · trẻ em · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 2 trẻ · 8 t: 587.500 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.700.000 ÷ 2); 10 t: 587.500 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.700.000 ÷ 2) | 1.175.000 ₫ | 42,81 | 15 % · Lưu trú (chung) | 49,23 |
| 12 · 26/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 13 · 27/03 | Xe 29 chỗ TP. Hồ Chí Minh – Củ Chi (khứ hồi) · Saigon Star Transport | SST-2027 · Cả kỳ hợp đồng | 1 xe × 3.200.000 ₫ | 3.200.000 ₫ | 116,58 | 15 % · Di chuyển (chung) | 134,07 |
| 13 · 27/03 | Vé địa đạo Củ Chi · Khu di tích Địa đạo Củ Chi | CCT-2027 · Cả kỳ hợp đồng | 23 NL × 125.000 ₫; TE 8 t × 50.000 ₫ (40 %); TE 10 t × 50.000 ₫ (40 %) | 2.975.000 ₫ | 108,38 | 15 % · Tham quan (chung) | 124,64 |
| 13 · 27/03 | Set menu chia tay · bữa tối · Nhà hàng Sài Gòn Xưa | SGX-2027 · Cả kỳ hợp đồng | 23 NL × 1.100.000 ₫; TE 8 t × 660.000 ₫ (60 %); TE 10 t × 660.000 ₫ (60 %) | 26.620.000 ₫ | 969,76 | 15 % · Ăn uống (chung) | 1.115,22 |
| 13 · 27/03 | Phòng River View · phòng đôi · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 10 phòng × 4.700.000 ₫ | 47.000.000 ₫ | 1.712,20 | 15 % · Lưu trú (chung) | 1.969,03 |
| 13 · 27/03 | Phòng River View · phòng đơn (1 tự xếp) · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 3 phòng × 5.170.000 ₫ · giá phòng 4.700.000 + phụ thu phòng đơn 10 % giá mùa = 470.000 | 15.510.000 ₫ | 565,03 | 15 % · Lưu trú (chung) | 649,78 |
| 13 · 27/03 | Phòng River View · trẻ em · Sông Sài Gòn Hotel | SSG-2027 · Cao điểm · cuối tuần | 2 trẻ · 8 t: 587.500 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.700.000 ÷ 2); 10 t: 587.500 ₫ (nhóm 6–11 ngủ chung giường: 25 % × 4.700.000 ÷ 2) | 1.175.000 ₫ | 42,81 | 15 % · Lưu trú (chung) | 49,23 |
| 13 · 27/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |
| 14 · 28/03 | Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport | SST-2027 · Cả kỳ hợp đồng | 1 xe × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 15 % · Di chuyển (chung) | 62,84 |
| 14 · 28/03 | HDV tiếng Đức · theo ngày · Đất Việt Guides | DVG-2027 · Cả kỳ hợp đồng | 1 đoàn × 1.500.000 ₫ | 1.500.000 ₫ | 54,64 | 20 % · Hướng dẫn viên | 65,57 |

**Bảng tính giá · Theo dịch vụ** (gom theo hạng mục; mỗi dịch vụ một dòng cho cả hành trình)

| Hạng mục · dịch vụ | Ngày dùng | Số khoản | Giá vốn EUR | Markup | Giá bán trước làm tròn EUR |
|---|---|---:|---:|---|---:|
| **Lưu trú** · 5 dịch vụ | | | **31.608,11** | 15 % · chung | **36.349,33** |
| ↳ Phòng Deluxe · Thăng Long Opera Hotel | Ngày 1, 2, 4 | 9 | 6.961,74 | 15 % | 8.006,00 |
| ↳ Cabin Deluxe Balcony · 2 ngày 1 đêm · Bhaya Cruises | Ngày 3 | 3 | 9.375,34 | 15 % | 10.781,64 |
| ↳ Phòng Deluxe · 4★ · Mường Thanh Holiday Huế · Nhập tay | Ngày 5–6 | 6 | 1.373,40 | 15 % | 1.579,41 |
| ↳ Phòng Deluxe Garden View · Hoi An Riverside Resort | Ngày 7–9 | 9 | 5.111,11 | 15 % | 5.877,78 |
| ↳ Phòng River View · Sông Sài Gòn Hotel | Ngày 10–13 | 12 | 8.786,52 | 15 % | 10.104,50 |
| **Di chuyển** · 12 dịch vụ | | | **1.653,91** | 15 % · chung | **1.902,00** |
| ↳ Xe 29 chỗ đón tiễn sân bay Nội Bài · Hoàng Long Transport | Ngày 1, 5 | 2 | 204,00 | 15 % | 234,60 |
| ↳ Xe 29 chỗ city tour Hà Nội · Hoàng Long Transport | Ngày 2 | 1 | 131,15 | 15 % | 150,82 |
| ↳ Xe 29 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Ngày 3–4 | 2 | 393,44 | 15 % | 452,46 |
| ↳ Xe 29 chỗ sân bay Phú Bài – khách sạn · Hue Travel Car | Ngày 5 | 1 | 51,00 | 15 % | 58,65 |
| ↳ Xe 29 chỗ city tour Huế · Hue Travel Car | Ngày 6 | 1 | 102,00 | 15 % | 117,30 |
| ↳ Xe 29 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Ngày 7 | 1 | 153,01 | 15 % | 175,96 |
| ↳ Xe 29 chỗ Hội An – Mỹ Sơn (khứ hồi) · Hue Travel Car | Ngày 8 | 1 | 80,15 | 15 % | 92,17 |
| ↳ Xe 29 chỗ Hội An – sân bay Đà Nẵng · Hue Travel Car | Ngày 10 | 1 | 58,29 | 15 % | 67,03 |
| ↳ Xe 29 chỗ đón tiễn sân bay Tân Sơn Nhất · Saigon Star Transport | Ngày 10, 14 | 2 | 109,28 | 15 % | 125,67 |
| ↳ Xe 29 chỗ city tour TP. Hồ Chí Minh · Saigon Star Transport | Ngày 11 | 1 | 109,29 | 15 % | 125,68 |
| ↳ Xe 29 chỗ TP. Hồ Chí Minh – Mỹ Tho (khứ hồi) · Saigon Star Transport | Ngày 12 | 1 | 145,72 | 15 % | 167,58 |
| ↳ Xe 29 chỗ TP. Hồ Chí Minh – Củ Chi (khứ hồi) · Saigon Star Transport | Ngày 13 | 1 | 116,58 | 15 % | 134,07 |
| **Vé máy bay** · 2 dịch vụ | | | **3.418,26** | 5 % | **3.589,17** |
| ↳ Vé máy bay Hà Nội – Huế · Vietnam Airlines | Ngày 5 | 1 | 1.651,37 | 5 % | 1.733,94 |
| ↳ Vé máy bay Đà Nẵng – TP. Hồ Chí Minh · Vietnam Airlines | Ngày 10 | 1 | 1.766,89 | 5 % | 1.855,23 |
| **Hướng dẫn viên** · 1 dịch vụ | | | **764,96** | 20 % | **917,95** |
| ↳ HDV tiếng Đức · theo ngày · Đất Việt Guides | Ngày 1–14 | 14 | 764,96 | 20 % | 917,95 |
| **Tham quan** · 7 dịch vụ | | | **2.235,80** | 15 % · chung | **2.571,17** |
| ↳ Vé Văn Miếu – Quốc Tử Giám · Văn Miếu – Quốc Tử Giám | Ngày 2 | 1 | 60,18 | 15 % | 69,21 |
| ↳ Vé Đại Nội Huế · Trung tâm Bảo tồn Di tích Cố đô Huế | Ngày 6 | 1 | 169,03 | 15 % | 194,38 |
| ↳ Thuyền rồng sông Hương · HTX Thuyền rồng Hương Giang | Ngày 6 | 1 | 65,57 | 15 % | 75,41 |
| ↳ Vé thánh địa Mỹ Sơn · Ban quản lý Di tích Mỹ Sơn | Ngày 8 | 1 | 131,15 | 15 % | 150,82 |
| ↳ Lớp nấu ăn Hội An · gồm bữa trưa · Hội An Cooking Class | Ngày 9 | 1 | 837,52 | 15 % | 963,15 |
| ↳ Tour thuyền Mekong · gồm bữa trưa · Mekong Discovery | Ngày 12 | 1 | 863,97 | 15 % | 993,57 |
| ↳ Vé địa đạo Củ Chi · Khu di tích Địa đạo Củ Chi | Ngày 13 | 1 | 108,38 | 15 % | 124,64 |
| **Ăn uống** · 8 dịch vụ | | | **5.286,77** | 15 % · chung | **6.079,79** |
| ↳ Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Ngày 1, 4 | 2 | 1.066,66 | 15 % | 1.226,66 |
| ↳ Set menu Hà Nội · bữa trưa · Nhà hàng Hà Nội Phố | Ngày 2 | 1 | 426,67 | 15 % | 490,67 |
| ↳ Set menu cung đình · bữa tối · Nhà hàng Hoàng Cung Huế | Ngày 5 | 1 | 749,36 | 15 % | 861,76 |
| ↳ Set menu Huế · bữa trưa · Nhà hàng Hoàng Cung Huế | Ngày 6 | 1 | 396,72 | 15 % | 456,23 |
| ↳ Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Ngày 7–8 | 2 | 751,92 | 15 % | 864,71 |
| ↳ Set menu Sài Gòn · bữa tối · Nhà hàng Sài Gòn Xưa | Ngày 10 | 1 | 528,96 | 15 % | 608,30 |
| ↳ Set menu Sài Gòn · bữa trưa · Nhà hàng Sài Gòn Xưa | Ngày 11 | 1 | 396,72 | 15 % | 456,23 |
| ↳ Set menu chia tay · bữa tối · Nhà hàng Sài Gòn Xưa | Ngày 13 | 1 | 969,76 | 15 % | 1.115,22 |
| **Khác** · 1 dịch vụ | | | **255,01** | 15 % · chung | **293,26** |
| ↳ Bảo hiểm du lịch trọn tuyến · Bảo Việt | Ngày 1 | 1 | 255,01 | 15 % | 293,26 |
| **Tổng · 36 dịch vụ** | | 88 | **45.222,82** | bình quân 14,3 % | **51.702,67** |

**Giá theo đối tượng** (giá bán = làm tròn lên theo bội số của Σ phần giá vốn × (1 + Markup của khoản))

| Đối tượng | Giá vốn EUR | Giá bán trước làm tròn EUR | Giá bán EUR | Số người | Thành tiền EUR |
|---|---:|---:|---:|---:|---:|
| Người lớn | 1.741,19 | 1.989,94 | **1.990** | 23 | 45.770 |
| Trẻ em 6–11 tuổi (8, 10) | 685,03 | 778,84 | **780** | 2 | 1.560 |
| Phụ thu phòng đơn | 1.268,49 | 1.458,76 | **1.460** | 3 | 4.380 |
| **Tổng giá bán** | | | | | **51.710** |

- Trẻ em cùng nhóm tuổi ở mọi hợp đồng gộp một dòng giá bán (R13); giá của dòng là bình quân các trẻ trong dòng: trẻ 8 tuổi giá vốn 684,30, giá bán trước làm tròn 778,00 (nếu tính riêng: 780); trẻ 10 tuổi giá vốn 685,75, giá bán trước làm tròn 779,67 (nếu tính riêng: 780). Trẻ 8 tuổi được miễn vé Đại Nội Huế theo suất miễn phí của hợp đồng BTH-2027 (trẻ nhỏ nhất miễn trước).
- Tổng giá vốn: **45.222,82 EUR** = 935.515.000 ₫ + 12.051,00 USD gốc, quy đổi từng khoản rồi cộng
- Tổng giá bán trước làm tròn (Σ khoản): 51.702,67 EUR; tổng giá bán sau làm tròn theo đối tượng: **51.710,00 EUR**.
- Lãi gộp: **6.487,18 EUR** (12,5 % tổng giá bán).
- Markup bình quân = 51.702,67 EUR ÷ 45.222,82 EUR − 1 = **14,3 %**.
- Người ở phòng đơn trả giá người lớn + phụ thu phòng đơn = 1.990 + 1.460 = 3.450 EUR.
- So với ngân sách (R26, đến 2.100 EUR/khách): bình quân 51.710,00 EUR ÷ 25 khách = **2.068,40 EUR/khách**, thấp hơn 31,60 EUR (1,5 %) → trong ngân sách.

**Lịch thanh toán điền sẵn ở KD08 (R05)** · Booking BK-2611-0158 tạo 11/11/2026, khởi hành 15/03/2027, giá trị 51.710,00 EUR

| Đợt | Mẫu | Hạn | Số tiền |
|---|---|---|---:|
| Đợt 1 | 30 % · ngày tạo + 14 ngày | 25/11/2026 | 15.513,00 EUR |
| Đợt 2 | 70 % (phần còn lại) · khởi hành − 30 ngày | 13/02/2027 | 36.197,00 EUR |
| Tổng | | | 51.710,00 EUR · Khớp giá trị |

### Ví dụ B · TM-008 · giá vốn tham khảo (KD02)

#### B1 · Khởi hành 08/12/2026, 12 khách (KD01-KD02 AC28, AC29)

| Ngày | Dịch vụ · NCC | Số lượng | Đơn giá tham khảo | Thành tiền |
|---|---|---|---|---:|
| 1 · Thứ Ba 08/12 | Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 1 · Thứ Ba 08/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 6 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 14.700.000 ₫ |
| | **Tạm tính Ngày 1** | |  | **16.500.000 ₫ · 1.375.000 ₫/khách** |
| 2 · Thứ Tư 09/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 2 · Thứ Tư 09/12 | Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises | Theo số phòng · 6 | 610,00 USD · Cả kỳ hợp đồng | 3.660,00 USD |
| | **Tạm tính Ngày 2** | |  | **3.000.000 ₫ · 250.000 ₫/khách + 3.660,00 USD · 305,00 USD/khách** |
| 3 · Thứ Năm 10/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 3 · Thứ Năm 10/12 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Theo số khách · 12 | 320.000 ₫ · Cả kỳ hợp đồng · 10–30 khách | 3.840.000 ₫ |
| 3 · Thứ Năm 10/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 6 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 14.700.000 ₫ |
| | **Tạm tính Ngày 3** | |  | **21.540.000 ₫ · 1.795.000 ₫/khách** |
| 4 · Thứ Sáu 11/12 | Xe 16 chỗ city tour Huế · Hue Travel Car | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 4 · Thứ Sáu 11/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 4 · Thứ Sáu 11/12 | Phòng Deluxe River View · Hương Giang Hotel | Theo số phòng · 6 | 1.900.000 ₫ · Cao điểm | 11.400.000 ₫ |
| | **Tạm tính Ngày 4** | |  | **14.500.000 ₫ · 1.208.333 ₫/khách** |
| 5 · Thứ Bảy 12/12 | Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Cố định · 1 | 2.600.000 ₫ · Cả kỳ hợp đồng | 2.600.000 ₫ |
| 5 · Thứ Bảy 12/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 5 · Thứ Bảy 12/12 | Set menu Huế · bữa trưa · Golden Lotus Restaurant | Theo số khách · 12 | Không có hợp đồng cho 12/12/2026 | — |
| 5 · Thứ Bảy 12/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 12 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 4.200.000 ₫ |
| 5 · Thứ Bảy 12/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 6 | 2.800.000 ₫ · Cao điểm · cuối tuần | 16.800.000 ₫ |
| | **Tạm tính Ngày 5** | | chưa gồm 1 dịch vụ | **24.900.000 ₫ · 2.075.000 ₫/khách** |
| 6 · Chủ nhật 13/12 | Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car | Cố định · 1 | 1.200.000 ₫ · Cả kỳ hợp đồng | 1.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 12 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 4.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 6 | 2.400.000 ₫ · Cao điểm · ngày thường | 14.400.000 ₫ |
| | **Tạm tính Ngày 6** | |  | **19.800.000 ₫ · 1.650.000 ₫/khách** |
| 7 · Thứ Hai 14/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 12 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 4.200.000 ₫ |
| 7 · Thứ Hai 14/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 6 | 2.400.000 ₫ · Cao điểm · ngày thường | 14.400.000 ₫ |
| | **Tạm tính Ngày 7** | |  | **18.600.000 ₫ · 1.550.000 ₫/khách** |
| 8 · Thứ Ba 15/12 | Xe 45 chỗ Đà Nẵng – Hội An · Hải Vân Transport | Cố định · 1 | Không tính · dịch vụ ngừng dùng | — |
| | **Tạm tính Ngày 8** | | chưa gồm 1 dịch vụ | **—** |

- 8 ngày, 21 dịch vụ. Tổng tạm tính các ngày: 118.840.000 ₫ + 3.660,00 USD. **Cả Tour: 9.903.333 ₫ + 305,00 USD mỗi khách** (tổng ÷ 12, làm tròn half-up), chưa gồm 2 dịch vụ.

#### B2 · Như B1, xóa Ngày 7 “Hội An tự do” (AC19)

| Ngày | Dịch vụ · NCC | Số lượng | Đơn giá tham khảo | Thành tiền |
|---|---|---|---|---:|
| 1 · Thứ Ba 08/12 | Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 1 · Thứ Ba 08/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 6 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 14.700.000 ₫ |
| | **Tạm tính Ngày 1** | |  | **16.500.000 ₫ · 1.375.000 ₫/khách** |
| 2 · Thứ Tư 09/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 2 · Thứ Tư 09/12 | Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises | Theo số phòng · 6 | 610,00 USD · Cả kỳ hợp đồng | 3.660,00 USD |
| | **Tạm tính Ngày 2** | |  | **3.000.000 ₫ · 250.000 ₫/khách + 3.660,00 USD · 305,00 USD/khách** |
| 3 · Thứ Năm 10/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 3 · Thứ Năm 10/12 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Theo số khách · 12 | 320.000 ₫ · Cả kỳ hợp đồng · 10–30 khách | 3.840.000 ₫ |
| 3 · Thứ Năm 10/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 6 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 14.700.000 ₫ |
| | **Tạm tính Ngày 3** | |  | **21.540.000 ₫ · 1.795.000 ₫/khách** |
| 4 · Thứ Sáu 11/12 | Xe 16 chỗ city tour Huế · Hue Travel Car | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 4 · Thứ Sáu 11/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 4 · Thứ Sáu 11/12 | Phòng Deluxe River View · Hương Giang Hotel | Theo số phòng · 6 | 1.900.000 ₫ · Cao điểm | 11.400.000 ₫ |
| | **Tạm tính Ngày 4** | |  | **14.500.000 ₫ · 1.208.333 ₫/khách** |
| 5 · Thứ Bảy 12/12 | Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Cố định · 1 | 2.600.000 ₫ · Cả kỳ hợp đồng | 2.600.000 ₫ |
| 5 · Thứ Bảy 12/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 5 · Thứ Bảy 12/12 | Set menu Huế · bữa trưa · Golden Lotus Restaurant | Theo số khách · 12 | Không có hợp đồng cho 12/12/2026 | — |
| 5 · Thứ Bảy 12/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 12 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 4.200.000 ₫ |
| 5 · Thứ Bảy 12/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 6 | 2.800.000 ₫ · Cao điểm · cuối tuần | 16.800.000 ₫ |
| | **Tạm tính Ngày 5** | | chưa gồm 1 dịch vụ | **24.900.000 ₫ · 2.075.000 ₫/khách** |
| 6 · Chủ nhật 13/12 | Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car | Cố định · 1 | 1.200.000 ₫ · Cả kỳ hợp đồng | 1.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 12 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 4.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 6 | 2.400.000 ₫ · Cao điểm · ngày thường | 14.400.000 ₫ |
| | **Tạm tính Ngày 6** | |  | **19.800.000 ₫ · 1.650.000 ₫/khách** |
| 7 · Thứ Hai 14/12 | Xe 45 chỗ Đà Nẵng – Hội An · Hải Vân Transport | Cố định · 1 | Không tính · dịch vụ ngừng dùng | — |
| | **Tạm tính Ngày 7** | | chưa gồm 1 dịch vụ | **—** |

- 7 ngày, 19 dịch vụ. Tổng tạm tính các ngày: 100.240.000 ₫ + 3.660,00 USD. **Cả Tour: 8.353.333 ₫ + 305,00 USD mỗi khách** (tổng ÷ 12, làm tròn half-up), chưa gồm 2 dịch vụ.

#### B3 · Như B1, đổi số khách 12 → 16 (AC30)

| Ngày | Dịch vụ · NCC | Số lượng | Đơn giá tham khảo | Thành tiền |
|---|---|---|---|---:|
| 1 · Thứ Ba 08/12 | Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 1 · Thứ Ba 08/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 8 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 19.600.000 ₫ |
| | **Tạm tính Ngày 1** | |  | **21.400.000 ₫ · 1.337.500 ₫/khách** |
| 2 · Thứ Tư 09/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 2 · Thứ Tư 09/12 | Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises | Theo số phòng · 8 | 610,00 USD · Cả kỳ hợp đồng | 4.880,00 USD |
| | **Tạm tính Ngày 2** | |  | **3.000.000 ₫ · 187.500 ₫/khách + 4.880,00 USD · 305,00 USD/khách** |
| 3 · Thứ Năm 10/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 3 · Thứ Năm 10/12 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Theo số khách · 16 | 320.000 ₫ · Cả kỳ hợp đồng · 10–30 khách | 5.120.000 ₫ |
| 3 · Thứ Năm 10/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 8 | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000 | 19.600.000 ₫ |
| | **Tạm tính Ngày 3** | |  | **27.720.000 ₫ · 1.732.500 ₫/khách** |
| 4 · Thứ Sáu 11/12 | Xe 16 chỗ city tour Huế · Hue Travel Car | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 4 · Thứ Sáu 11/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | Không có mức giá cho 16 khách (bảng giá 1–15 khách) | — |
| 4 · Thứ Sáu 11/12 | Phòng Deluxe River View · Hương Giang Hotel | Theo số phòng · 8 | 1.900.000 ₫ · Cao điểm | 15.200.000 ₫ |
| | **Tạm tính Ngày 4** | | chưa gồm 1 dịch vụ | **17.000.000 ₫ · 1.062.500 ₫/khách** |
| 5 · Thứ Bảy 12/12 | Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Cố định · 1 | 2.600.000 ₫ · Cả kỳ hợp đồng | 2.600.000 ₫ |
| 5 · Thứ Bảy 12/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | Không có mức giá cho 16 khách (bảng giá 1–15 khách) | — |
| 5 · Thứ Bảy 12/12 | Set menu Huế · bữa trưa · Golden Lotus Restaurant | Theo số khách · 16 | Không có hợp đồng cho 12/12/2026 | — |
| 5 · Thứ Bảy 12/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 16 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 5.600.000 ₫ |
| 5 · Thứ Bảy 12/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 8 | 2.800.000 ₫ · Cao điểm · cuối tuần | 22.400.000 ₫ |
| | **Tạm tính Ngày 5** | | chưa gồm 2 dịch vụ | **30.600.000 ₫ · 1.912.500 ₫/khách** |
| 6 · Chủ nhật 13/12 | Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car | Cố định · 1 | 1.200.000 ₫ · Cả kỳ hợp đồng | 1.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 16 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 5.600.000 ₫ |
| 6 · Chủ nhật 13/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 8 | 2.400.000 ₫ · Cao điểm · ngày thường | 19.200.000 ₫ |
| | **Tạm tính Ngày 6** | |  | **26.000.000 ₫ · 1.625.000 ₫/khách** |
| 7 · Thứ Hai 14/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 16 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 5.600.000 ₫ |
| 7 · Thứ Hai 14/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 8 | 2.400.000 ₫ · Cao điểm · ngày thường | 19.200.000 ₫ |
| | **Tạm tính Ngày 7** | |  | **24.800.000 ₫ · 1.550.000 ₫/khách** |
| 8 · Thứ Ba 15/12 | Xe 45 chỗ Đà Nẵng – Hội An · Hải Vân Transport | Cố định · 1 | Không tính · dịch vụ ngừng dùng | — |
| | **Tạm tính Ngày 8** | | chưa gồm 1 dịch vụ | **—** |

- 8 ngày, 21 dịch vụ. Tổng tạm tính các ngày: 150.520.000 ₫ + 4.880,00 USD. **Cả Tour: 9.407.500 ₫ + 305,00 USD mỗi khách** (tổng ÷ 16, làm tròn half-up), chưa gồm 4 dịch vụ.

#### B4 · Như B1, đổi số khách 12 → 11, phòng đơn tự xếp (KD01-KD02 R05, R07)

| Ngày | Dịch vụ · NCC | Số lượng | Đơn giá tham khảo | Thành tiền |
|---|---|---|---|---:|
| 1 · Thứ Ba 08/12 | Xe 16 chỗ đón sân bay Nội Bài · Hoàng Long Transport | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 1 · Thứ Ba 08/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000; phòng đơn 3.050.000 ₫ (giá phòng 2.450.000 + phụ thu phòng đơn 600.000) | 15.300.000 ₫ |
| | **Tạm tính Ngày 1** | |  | **17.100.000 ₫ · 1.554.545 ₫/khách** |
| 2 · Thứ Tư 09/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 2 · Thứ Tư 09/12 | Cabin Deluxe · 2 ngày 1 đêm · Bhaya Cruises | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 610,00 USD · Cả kỳ hợp đồng; phòng đơn 915,00 USD (giá phòng đơn trọn gói) | 3.965,00 USD |
| | **Tạm tính Ngày 2** | |  | **3.000.000 ₫ · 272.727 ₫/khách + 3.965,00 USD · 360,45 USD/khách** |
| 3 · Thứ Năm 10/12 | Xe 16 chỗ Hà Nội – Hạ Long (một chiều) · Hoàng Long Transport | Cố định · 1 | 3.000.000 ₫ · Cả kỳ hợp đồng | 3.000.000 ₫ |
| 3 · Thứ Năm 10/12 | Set menu Hà Nội · bữa tối · Nhà hàng Hà Nội Phố | Theo số khách · 11 | 320.000 ₫ · Cả kỳ hợp đồng · 10–30 khách | 3.520.000 ₫ |
| 3 · Thứ Năm 10/12 | Phòng Deluxe · Hanoi Boutique Hotel | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 2.450.000 ₫ · Cao điểm · gồm phụ thu: cộng Phụ thu sự kiện cuối năm 250.000; phòng đơn 3.050.000 ₫ (giá phòng 2.450.000 + phụ thu phòng đơn 600.000) | 15.300.000 ₫ |
| | **Tạm tính Ngày 3** | |  | **21.820.000 ₫ · 1.983.636 ₫/khách** |
| 4 · Thứ Sáu 11/12 | Xe 16 chỗ city tour Huế · Hue Travel Car | Cố định · 1 | 1.800.000 ₫ · Cả kỳ hợp đồng | 1.800.000 ₫ |
| 4 · Thứ Sáu 11/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 4 · Thứ Sáu 11/12 | Phòng Deluxe River View · Hương Giang Hotel | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 1.900.000 ₫ · Cao điểm; phòng đơn 2.400.000 ₫ (giá phòng 1.900.000 + phụ thu phòng đơn 500.000) | 11.900.000 ₫ |
| | **Tạm tính Ngày 4** | |  | **15.000.000 ₫ · 1.363.636 ₫/khách** |
| 5 · Thứ Bảy 12/12 | Xe 16 chỗ Huế – Hội An qua đèo Hải Vân · Hue Travel Car | Cố định · 1 | 2.600.000 ₫ · Cả kỳ hợp đồng | 2.600.000 ₫ |
| 5 · Thứ Bảy 12/12 | HDV tiếng Đức · theo ngày · Đất Việt Guides | Cố định · 1 | 1.300.000 ₫ · Cả kỳ hợp đồng · 1–15 khách | 1.300.000 ₫ |
| 5 · Thứ Bảy 12/12 | Set menu Huế · bữa trưa · Golden Lotus Restaurant | Theo số khách · 11 | Không có hợp đồng cho 12/12/2026 | — |
| 5 · Thứ Bảy 12/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 11 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 3.850.000 ₫ |
| 5 · Thứ Bảy 12/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 2.800.000 ₫ · Cao điểm · cuối tuần; phòng đơn 3.700.000 ₫ (giá phòng 2.800.000 + phụ thu phòng đơn 900.000) | 17.700.000 ₫ |
| | **Tạm tính Ngày 5** | | chưa gồm 1 dịch vụ | **25.450.000 ₫ · 2.313.636 ₫/khách** |
| 6 · Chủ nhật 13/12 | Xe 16 chỗ Hội An – Mỹ Sơn · Hue Travel Car | Cố định · 1 | 1.200.000 ₫ · Cả kỳ hợp đồng | 1.200.000 ₫ |
| 6 · Chủ nhật 13/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 11 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 3.850.000 ₫ |
| 6 · Chủ nhật 13/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 2.400.000 ₫ · Cao điểm · ngày thường; phòng đơn 3.300.000 ₫ (giá phòng 2.400.000 + phụ thu phòng đơn 900.000) | 15.300.000 ₫ |
| | **Tạm tính Ngày 6** | |  | **20.350.000 ₫ · 1.850.000 ₫/khách** |
| 7 · Thứ Hai 14/12 | Set menu Việt Nam · bữa tối · Mỹ Sơn Garden | Theo số khách · 11 | 350.000 ₫ · Cả kỳ hợp đồng · 10–20 khách | 3.850.000 ₫ |
| 7 · Thứ Hai 14/12 | Phòng Deluxe Garden View · Hoi An Riverside Resort | Theo số phòng · 5 phòng đôi + 1 phòng đơn tự xếp | 2.400.000 ₫ · Cao điểm · ngày thường; phòng đơn 3.300.000 ₫ (giá phòng 2.400.000 + phụ thu phòng đơn 900.000) | 15.300.000 ₫ |
| | **Tạm tính Ngày 7** | |  | **19.150.000 ₫ · 1.740.909 ₫/khách** |
| 8 · Thứ Ba 15/12 | Xe 45 chỗ Đà Nẵng – Hội An · Hải Vân Transport | Cố định · 1 | Không tính · dịch vụ ngừng dùng | — |
| | **Tạm tính Ngày 8** | | chưa gồm 1 dịch vụ | **—** |

- 8 ngày, 21 dịch vụ. Tổng tạm tính các ngày: 121.870.000 ₫ + 3.965,00 USD. **Cả Tour: 11.079.091 ₫ + 360,45 USD mỗi khách** (tổng ÷ 11, làm tròn half-up), chưa gồm 2 dịch vụ.

### Ví dụ C · giường phụ (KD06 AC93, AC94)

#### AC93 · 5 người lớn, 1 giường phụ

- Điều kiện: 5 người lớn; hạng phòng Tiêu chuẩn; phòng đơn nhập 0; giường phụ 1; khởi hành 15/03/2027; báo giá VND.
- Phòng (R04): 0 phòng đơn, 2 phòng đôi, 2 phòng; 1 giường phụ; 5 người lớn ở phòng đôi.
- Markup chung 15 % (mặc định Inbound đoàn); theo hạng mục: Vé máy bay 5 %, Lưu trú 10 %; hạng mục khác để trống dùng Markup chung. Bội số làm tròn giá bán 10.000 ₫.

**Bảng tính giá · Theo ngày** (2 khoản)

| Ngày | Khoản | Hợp đồng · mùa · loại ngày | Số lượng × đơn giá gốc | Thành tiền gốc | Quy đổi VND | Markup | Giá bán trước làm tròn |
|---|---|---|---|---|---:|---|---:|
| 1 · 15/03 | Phòng nghỉ tiêu chuẩn · phòng đôi · Khách sạn Lotus Hanoi | LTH-C · Cao điểm · ngày thường | 2 phòng × 2.000.000 ₫ | 4.000.000 ₫ | 4.000.000 | 10 % · Lưu trú | 4.400.000 |
| 1 · 15/03 | ↳ Đi kèm · Giường phụ (đi kèm Phòng nghỉ tiêu chuẩn) · Khách sạn Lotus Hanoi | LTH-C · Cao điểm · ngày thường | 1 giường × 600.000 ₫ | 600.000 ₫ | 600.000 | 10 % · Lưu trú | 660.000 |

**Bảng tính giá · Theo dịch vụ** (gom theo hạng mục; mỗi dịch vụ một dòng cho cả hành trình)

| Hạng mục · dịch vụ | Ngày dùng | Số khoản | Giá vốn VND | Markup | Giá bán trước làm tròn VND |
|---|---|---:|---:|---|---:|
| **Lưu trú** · 2 dịch vụ | | | **4.600.000** | 10 % | **5.060.000** |
| ↳ Phòng nghỉ tiêu chuẩn · Khách sạn Lotus Hanoi | Ngày 1 | 1 | 4.000.000 | 10 % | 4.400.000 |
| ↳ Giường phụ kèm Phòng nghỉ tiêu chuẩn · Khách sạn Lotus Hanoi | Ngày 1 | 1 | 600.000 | 10 % | 660.000 |
| **Tổng · 2 dịch vụ** | | 2 | **4.600.000** | bình quân 10,0 % | **5.060.000** |

**Giá theo đối tượng** (giá bán = làm tròn lên theo bội số của Σ phần giá vốn × (1 + Markup của khoản))

| Đối tượng | Giá vốn VND | Giá bán trước làm tròn VND | Giá bán VND | Số người | Thành tiền VND |
|---|---:|---:|---:|---:|---:|
| Người lớn | 920.000 | 1.012.000 | **1.020.000** | 5 | 5.100.000 |
| **Tổng giá bán** | | | | | **5.100.000** |

- Tổng giá vốn: **4.600.000 ₫**
- Tổng giá bán trước làm tròn (Σ khoản): 5.060.000 ₫; tổng giá bán sau làm tròn theo đối tượng: **5.100.000 ₫**.
- Lãi gộp: **500.000 ₫** (9,8 % tổng giá bán).
- Markup bình quân = 5.060.000 ₫ ÷ 4.600.000 ₫ − 1 = **10,0 %**.

#### AC94 · 2 người lớn, 0 giường phụ, 1 trẻ 8 tuổi cần thêm giường

- Điều kiện: 2 người lớn, 1 trẻ em (8 tuổi); hạng phòng Tiêu chuẩn; phòng đơn nhập 0; giường phụ 0; khởi hành 15/03/2027; báo giá VND.
- Phòng (R04): 0 phòng đơn, 1 phòng đôi, 1 phòng; 0 giường phụ; 2 người lớn ở phòng đôi.
- Markup chung 15 % (mặc định Inbound đoàn); theo hạng mục: Vé máy bay 5 %, Lưu trú 10 %; hạng mục khác để trống dùng Markup chung. Bội số làm tròn giá bán 10.000 ₫.

**Bảng tính giá · Theo ngày** (2 khoản)

| Ngày | Khoản | Hợp đồng · mùa · loại ngày | Số lượng × đơn giá gốc | Thành tiền gốc | Quy đổi VND | Markup | Giá bán trước làm tròn |
|---|---|---|---|---|---:|---|---:|
| 1 · 15/03 | Phòng nghỉ tiêu chuẩn · phòng đôi · Khách sạn Lotus Hanoi | LTH-C · Cao điểm · ngày thường | 1 phòng × 2.000.000 ₫ | 2.000.000 ₫ | 2.000.000 | 10 % · Lưu trú | 2.200.000 |
| 1 · 15/03 | Phòng nghỉ tiêu chuẩn · trẻ em · Khách sạn Lotus Hanoi | LTH-C · Cao điểm · ngày thường | 1 trẻ · 8 t: 500.000 ₫ (nhóm 6–12 thêm giường: 50 % × 2.000.000 ÷ 2) | 500.000 ₫ | 500.000 | 10 % · Lưu trú | 550.000 |

**Bảng tính giá · Theo dịch vụ** (gom theo hạng mục; mỗi dịch vụ một dòng cho cả hành trình)

| Hạng mục · dịch vụ | Ngày dùng | Số khoản | Giá vốn VND | Markup | Giá bán trước làm tròn VND |
|---|---|---:|---:|---|---:|
| **Lưu trú** · 1 dịch vụ | | | **2.500.000** | 10 % | **2.750.000** |
| ↳ Phòng nghỉ tiêu chuẩn · Khách sạn Lotus Hanoi | Ngày 1 | 2 | 2.500.000 | 10 % | 2.750.000 |
| **Tổng · 1 dịch vụ** | | 2 | **2.500.000** | bình quân 10,0 % | **2.750.000** |

**Giá theo đối tượng** (giá bán = làm tròn lên theo bội số của Σ phần giá vốn × (1 + Markup của khoản))

| Đối tượng | Giá vốn VND | Giá bán trước làm tròn VND | Giá bán VND | Số người | Thành tiền VND |
|---|---:|---:|---:|---:|---:|
| Người lớn | 1.000.000 | 1.100.000 | **1.100.000** | 2 | 2.200.000 |
| Trẻ em 6–12 tuổi (8) | 500.000 | 550.000 | **550.000** | 1 | 550.000 |
| **Tổng giá bán** | | | | | **2.750.000** |

- Tổng giá vốn: **2.500.000 ₫**
- Tổng giá bán trước làm tròn (Σ khoản): 2.750.000 ₫; tổng giá bán sau làm tròn theo đối tượng: **2.750.000 ₫**.
- Lãi gộp: **250.000 ₫** (9,1 % tổng giá bán).
- Markup bình quân = 2.750.000 ₫ ÷ 2.500.000 ₫ − 1 = **10,0 %**.
