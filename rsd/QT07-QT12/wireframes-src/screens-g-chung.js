// Thao tác và ngoại lệ dùng chung cho mọi báo cáo QT06-QT12 (minh họa trên QT07, QT09, QT12).
const { fl, kp, rep, B } = require('./common');
const { page } = require('./lib');
const q7 = require('./screens-b-qt07.js');
const S = {};

// W20 · Bảng chọn kỳ (QT07, mốc ngày kết thúc Tour)
const opt = (t, on, sub = '') => `<div class="mi ${on ? 'on' : ''}"><span class="rd ${on ? 'on' : ''}"></span>${t}${sub ? `<span class="muted small" style="margin-left:auto">${sub}</span>` : ''}</div>`;
const pop = `<div class="menu" style="left:18px;top:94px;width:360px">
<div class="mh2">Mốc lọc: ngày kết thúc Tour</div>
${opt('Tháng này', 0, '11/2026')}${opt('Tháng trước', 1, '10/2026')}${opt('Quý này', 0, 'Q4/2026')}${opt('Quý trước', 0, 'Q3/2026')}${opt('90 ngày qua', 0, '14/08 – 11/11')}${opt('Năm nay', 0, '2026')}${opt('Năm trước', 0, '2025')}
<div class="sep" style="margin:6px 0"></div><div style="padding:2px 12px 8px"><div class="small b" style="margin-bottom:4px">Khoảng tùy chọn</div>
<div class="flex"><div class="input" style="width:120px">01/10/2026</div><span class="muted">–</span><div class="input" style="width:120px">31/10/2026</div>${B('Áp dụng', 'p sm')}</div>
<div class="hint">Chọn nhanh áp dụng ngay; khoảng tùy chọn cần bấm Áp dụng.</div></div></div>`;
S.W20 = q7._W05({ kOpen: true, overlay: pop });

// W21 · Sau khi xuất Excel (QT07)
S.W21 = q7._W05({ overlay: '<div class="toast">Đã xuất <b style="margin:0 4px">QT07_Doanh-thu_01-10-2026_31-10-2026.xlsx</b> · 8 Booking · 1 trang tính <a>Đóng</a></div>' });

// W22 · Không khớp bộ lọc (QT12)
S.W22 = rep({
  user: 'dh', side: 'Sự cố & chi phí phát sinh', title: 'Báo cáo sự cố và chi phí phát sinh', exp: 'off', expNote: '<span class="muted small" style="margin-left:6px">Không có dòng để xuất</span>',
  filters: fl('Kỳ phát sinh', 'Tháng trước (10/2026)') + fl('Tour Code', 'TP-2611-0042', 'set') + fl('Điều hành phụ trách', 'Tất cả'), clear: true,
  kpis: kp('Tour có sự cố hoặc chi phí', 0) + kp('Sự cố', 0) + kp('Chi phí phát sinh', 0) + kp('Gợi ý thu lại khách', 0) + kp('Chưa ghi công nợ', 0), kcols: 5,
  body: `<div class="tbl"><div class="empty"><div class="big">Không có Tour nào khớp bộ lọc</div>TP-2611-0042 không có sự cố hay chi phí phát sinh trong 10/2026 (Tour đi 18/11 – 25/11/2026).<br>Đổi Kỳ phát sinh, hoặc bấm Xóa bộ lọc ở cuối thanh lọc.</div></div>`,
});

// W23 · Lỗi tải số liệu (QT09)
S.W23 = rep({
  user: 'kt', side: 'P&L theo Tour', title: 'Báo cáo P&L theo Tour', exp: 'off', upd: false,
  filters: fl('Kỳ đóng Tour', 'Tháng trước (10/2026)') + fl('Khách hàng', 'Tất cả') + fl('Người phụ trách', 'Tất cả'),
  kpis: ['Doanh thu thực tế', 'Chi phí thực tế', 'P&L thực tế', 'So với dự tính', 'Tour lỗ'].map(l => kp(l, '–')).join(''), kcols: 5,
  body: `<div class="tbl"><div class="empty"><div class="big" style="color:#991b1b">Không tải được số liệu báo cáo</div>Máy chủ không trả kết quả trong 30 giây. Bộ lọc vẫn giữ nguyên.<div style="margin-top:10px">${B('Thử lại', 'p')}</div></div></div>`,
});

module.exports = S;
