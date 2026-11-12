# Ghi chú làm việc · RSD KD09 v1.3

## Cập nhật v1.3 (12/11/2026) · Rà soát mâu thuẫn lần ba

- [x] R03: bỏ “hoặc trên trang Survey”. Khách chỉ hủy nhận qua liên kết cuối email (Survey hoặc Remarketing), mở trang hủy nhận rồi bấm xác nhận (RSD KD10 L6.2, R13); trang Survey không có hủy nhận.
- [x] 5.1 Hủy nhận: khóa đổi từ “Mã khách + mã chiến dịch” sang “Mã lần gửi” như RSD KD10 5.1; người ghi trường Nhận email chăm sóc là KD10 (RSD KD10 R13, BOI-CANH mục Hệ thống và nguồn dữ liệu), không phải KD04. R03 sửa câu tương ứng. Số Hủy nhận vẫn đếm khách theo chiến dịch (RSD KD10 R13).
- [x] Nguồn nghiệp vụ: KD10 v1.2, KD03-KD04 v1.4. Mục lịch sử v1.2 giữ dẫn chiếu QT06-QT12 v1.1 (lịch sử, không sửa).
- Không dựng lại wireframe (giao diện không đổi). `check-rsd.js RSD-KD09-Danh-sach-chien-dich-cham-soc-v1.3.md --final`: 16 ảnh, 16 mã W, không cảnh báo.

## Cập nhật v1.2 (12/11/2026) · Bỏ nút Xem thống kê

**Nguồn:** người dùng chốt khi duyệt RSD QT06-QT12: KD09 không có nút Xem thống kê; mọi vai trò xem được QT06 qua menu Báo cáo.

**Đã sửa:** 1.2, 1.4, 1.5, 2.1, 2.5, E1.3, R03, R16, AC01, AC15, AC26, AC32; bỏ mục 3.4 (L4.1, E4.1–E4.3) và ảnh W13 (không dùng lại mã); R10 chỉ còn câu quyết định. Dựng lại toàn bộ ảnh (tiêu đề không còn nút). Đổi tên tệp lên v1.2, xóa v1.1.


## Cập nhật v1.1 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn

**Theo quyết định người dùng (BOI-CANH):** Q3 chuyển người phụ trách chiến dịch: người phụ trách hiện tại và Quản trị hệ thống. R11 giữ nguyên; đã sửa câu ở đầu tài liệu và 1.5 (trước ghi “Quản trị chuyển” làm hiểu là chỉ Quản trị). **Mục chờ xác nhận về quyền chuyển phụ trách (tự quyết số 12) đã đóng.**

**Việc “cần sửa” đã làm:**
- [x] R11 giữ (Q3); đóng mục chờ xác nhận.
- [x] 2.4: thêm (mới) → Đang chạy (Lưu và bật khi tạo) và Nháp → (đã xóa) (Xóa nháp, chưa từng bật), khớp RSD KD10 2.3.
- [x] R04: số khách nhận được dẫn thẳng RSD KD10 R08, KD09 không tự tính.
- [x] R03, 5.1: “chưa có kết quả” đổi thành kết quả Đang gửi (BOI-CANH: Lần gửi có kết quả Đang gửi, Đã gửi, Gửi lỗi).
- [x] 2.4: Tạm dừng ghi “Không gửi theo lịch, không gửi lại lần gửi lỗi khi đang Tạm dừng”, khớp RSD KD10 v1.1 E5.4.
- [x] 2.2, R03: cột Kết quả của Survey thêm số Hủy nhận (khách hủy nhận được từ email Survey, RSD KD10 R13). AC05 sửa, AC41 mới.
- [x] Dòng 1.3 “KD09 không gửi gì ra ngoài” giữ nguyên.
- Thêm (nhỏ): R04 Survey đến hạn theo ngày đóng lần đầu, không gồm hồ sơ kết thúc vì Booking đã hủy (khớp RSD KD10 R05).
- Wireframe: `screens-kd09.js` ô Kết quả Survey thêm “· Hủy nhận n” (dữ liệu minh họa 0); dựng lại toàn bộ 17 ảnh. Đã xem W01.
- `check-rsd.js RSD-KD09-Danh-sach-chien-dich-cham-soc-v1.1.md --final`: sạch (17 ảnh, 17 mã W). Đã xóa tệp v1.0.

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD09 · Danh sách chiến dịch chăm sóc; chưa có RSD nên viết mới; một RSD riêng ở `rsd/KD09/`; bàn giao MD + PNG trong ZIP như các RSD trước | Toàn bộ tài liệu |
| Q1 | Vòng đời chiến dịch | Đúng ba trạng thái nguồn: Nháp, Đang chạy, Tạm dừng; không có trạng thái kết thúc | 1.3, 2.4, R02, chip, AC02–AC04 |
| Q2 | Quyền và duyệt | Mọi Kinh doanh xem mọi chiến dịch; chỉ người phụ trách (mặc định người tạo) sửa, bật, tạm dừng; người phụ trách hiện tại và Quản trị chuyển người phụ trách (xác nhận lại 12/11/2026 sau rà soát); không có bước duyệt | 1.4, R01, R11, L5.1, L5.2, W14–W17 |
| Q3 | Dạng xem | Chỉ Bảng | 2.6, R14; không có bộ chuyển dạng xem |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Bật, tạm dừng chỉ ở KD10**, không có thao tác đổi trạng thái trên dòng KD09 (câu Q1 chỉ chốt danh sách trạng thái).
2. **Chỉ báo phụ Đã gửi hết các bước** cho Remarketing Đang chạy không còn lần gửi theo lịch, vì không có trạng thái kết thúc (Q1).
3. **Mặc định Phụ trách Tất cả, chip Tất cả** (khác KD05 mặc định Của tôi), vì chiến dịch gửi cho khách của cả công ty và số chiến dịch ít.
4. **Cột của bảng**: Chiến dịch (mã, loại, tên), Đối tượng, Kỳ gửi, Lần gửi tiếp theo, Đã gửi (kèm số gửi lỗi), Kết quả (Survey: phản hồi và tỷ lệ; Remarketing: hủy nhận), Phụ trách, Trạng thái. Không hiện tên hay email khách nhận.
5. **“n gửi lỗi” là liên kết** mở KD10.2 chip Gửi lỗi; bấm phần còn lại của dòng mở KD10 ở tab đích.
6. **Tab đích khi bấm dòng**: có lần gửi → Lịch sử gửi; còn lại → Thiết lập chiến dịch.
7. **Định nghĩa Kỳ gửi** (R04, R06): Remarketing theo lịch các bước (gồm lần đã lên lịch); Survey từ ngày bật đến nay hoặc đến ngày tạm dừng; Survey Nháp không có kỳ gửi. Chọn nhanh: Tháng này, Tháng trước, Quý này, 30 ngày tới.
8. **Định nghĩa số liệu** (R03): Đã gửi, Gửi lỗi (chưa gửi lại thành công), Phản hồi ÷ Đã gửi, Hủy nhận; tính cho cả đời chiến dịch, không theo Kỳ gửi; dùng chung nguồn với QT06.
9. **Survey gửi theo đợt hằng ngày** ở giờ gửi của chiến dịch; KD09 hiện số khách đến hạn (R04). Cần RSD KD10 xác nhận.
10. **Tạo chiến dịch là một nút có danh sách hai loại**, luôn hỏi loại kể cả khi đang lọc Loại.
11. **Xem thống kê mang Loại và Kỳ gửi sang QT06**; Quản trị không có nút vì QT06 chỉ cho Kinh doanh.
12. **Chuyển phụ trách hàng loạt** (quyền người phụ trách và Quản trị: đã được người dùng chốt 12/11/2026, Q3 rà soát) cho người phụ trách và Quản trị như KD05, áp dụng mọi trạng thái; chiến dịch Đang chạy vẫn gửi; có thông báo gộp, nhãn Mới giao, Vừa chuyển.
13. **Mã chiến dịch `CD-YYMM-NNN`** (KD10 cấp).
14. **Không xuất Excel, không xóa ở KD09** (nguồn không có).
15. **Tìm kiếm** theo mã, tên chiến dịch, tên mẫu; không tìm theo khách nhận.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (KD09).** Ghi bộ lọc Tìm, Loại, Kỳ gửi, Phụ trách, chip trạng thái; chuyển phụ trách hàng loạt (Kinh doanh: của mình; Quản trị: mọi chiến dịch); cột Vai trò thêm Quản trị hệ thống (chuyển phụ trách).
- **Danh sách màn, vòng đời Chiến dịch chăm sóc.** Bỏ “nhãn đề xuất” và “Điều kiện dừng chờ đặc tả”: ba trạng thái Nháp, Đang chạy, Tạm dừng; không có kết thúc; bật, tạm dừng, bật lại ở KD10 do người phụ trách.
- **KD10 (chưa có RSD).** Cấp mã `CD-YYMM-NNN`; Loại chỉ đọc khi mở từ KD09; Lưu nháp, Lưu và bật, Tạm dừng, Bật lại; giờ gửi Survey hằng ngày; tab Lịch sử gửi có chip Tất cả, Đã gửi, Gửi lỗi, Đã phản hồi và nhận tham số chip từ KD09; ghi lần gửi theo mã khách, kết quả, gửi lại; hiện lịch sử chuyển phụ trách; chế độ chỉ đọc cho người không phụ trách; không dùng hạng khách hàng để phân nhóm.
- **QT06.** Nhận tham số Loại và Kỳ (chọn nhanh hoặc khoảng) từ KD09; ghi “Mở từ Chiến dịch chăm sóc · bộ lọc mang theo”; số liệu dùng cùng định nghĩa R03.
- **QT02.** Thêm quyền Tạo chiến dịch, Chuyển phụ trách chiến dịch (Kinh doanh: của mình; Quản trị: mọi chiến dịch).
- **Trung tâm thông báo.** Thông báo “Bạn được giao n chiến dịch chăm sóc” (gộp).
- **Menu.** Mục Kinh doanh → Chăm sóc khách hàng mở KD09 (tiêu đề màn: Chiến dịch chăm sóc).

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node của skill; máy không có Python nên chưa chạy `check-rsd.py`): 17 tham chiếu ảnh, 17 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E; mỗi ảnh nhúng một lần.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`; `indent-images.js` không phải sửa dòng nào.
- Đã xem trực quan sau lần chụp cuối: W01, W03, W04, W08, W09, W10, W11, W13, W14, W16, W17. Đã xem ở lần chụp trước và sửa: W12, W15 (bỏ tên mẫu ở cột Đối tượng). Chưa mở lại sau lần chụp cuối: W02, W05, W06, W07 (cùng khung với W01, W04).
- Số liệu đã đối chiếu: Tất cả 9 = Đang chạy 5 + Tạm dừng 2 + Nháp 2; của Nam 3 (CD-2603-001, CD-2609-001, CD-2611-001); người nhận Lê Thu Hà 2, Phạm Thanh Tùng 2, Vũ Đức Minh 0; Trần Quốc Bảo 2 (CD-2606-001, CD-2608-001). Tạm dừng CD-2610-002: Đang chạy 5 → 4, Tạm dừng 2 → 3. Remarketing có lần gửi trong 11/2026: CD-2609-001, CD-2610-002 (W04, W13: 24 lần gửi của CD-2610-002 ngày 05/11). Tỷ lệ phản hồi 19/46 = 41%, 14/31 = 45%, 9/18 = 50%. CD-2609-001: 182 đã gửi, 4 lỗi, 3 hủy nhận, 179 khách nhận được. Khớp KD04.4 của Müller Reisen GmbH: Survey CD-2603-001 gửi 08/11/2026 chưa phản hồi; email CD-2609-001 gửi 15/10/2026.
- `rsd/BOI-CANH-DU-AN.md` đã thêm thuật ngữ, vai trò, chủ sở hữu dữ liệu chiến dịch và các nguyên tắc đã chốt (sửa trực tiếp, không sao lưu).
