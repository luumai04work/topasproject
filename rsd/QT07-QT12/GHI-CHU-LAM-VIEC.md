# Ghi chú làm việc · RSD QT06–QT12 v1.1

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | QT06–QT12 từ danh sách màn; chưa có RSD nên viết mới; bàn giao MD + PNG trong `docs/rsd/QT06-QT12/` theo BOI-CANH | Toàn bộ tài liệu |
| Q1 | Bảy báo cáo viết gộp hay tách | Một RSD gộp; quy ước dùng chung viết một lần | Cấu trúc 2.1, 2.4, 3.8, R01–R04, R12–R16 |
| Q2 | Mốc ghi nhận doanh thu QT07 (nguồn ghi chờ đặc tả) | Lọc kỳ theo ngày kết thúc Tour; mỗi dòng một Booking với giá trị Booking, đã thu, doanh thu quyết toán; chưa quyết toán ghi “Chưa quyết toán”, không coi là 0 | R02, R06, L2.1–L2.4, W05–W07, AC14–AC16 |
| Q3 | Quyền xem và xuất | (v1.0) phân theo vai trò; **thay bằng Q4** ở v1.1. Xuất Excel theo bộ lọc, ghi QT03 vẫn giữ | R13 |
| Q4 | Ai xem báo cáo (sau bàn giao v1.0) | Ai cũng có quyền xem mọi báo cáo, đủ dữ liệu | 1.4, R01, AC01–AC05; bỏ W07, W12, W24 |
| Q5 | Nút Xem thống kê ở KD09 | Không có nút ở KD09 | Bỏ L1.4, W04, E1.7; RSD KD09 lên v1.2 |
| Q6 | KD06 lưu cách tạo hành trình | Không cần; sửa màn dùng thông tin: QT08 đọc trường nguồn tạo đã có ở RSD KD06 5.1 | R07, 5.1 |
| Q7 | DH08.8 lưu P&L dự tính VND | Đồng ý | R08, 5.1; RSD DH08 lên v2.6 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. *(Bỏ ở v1.1 theo Q4.)*
2. **Mặc định kỳ** (R02): QT06, QT08, QT11 là 90 ngày qua; QT07, QT09, QT12 là Tháng trước; QT10 tính tại hôm nay, không có kỳ. Khoảng tùy chọn tối đa 24 tháng.
3. **Mốc kỳ của từng báo cáo** (R02): QT06 thời điểm gửi gốc của lần gửi; QT08 thời điểm tạo yêu cầu; QT09 ngày đóng lần đầu; QT11 thời điểm gửi lần đặt; QT12 ngày Tour của sự cố và ngày của khoản chi phí.
4. **QT07: ngày kết thúc Tour = ngày về của Booking** (theo chương trình), không phải thời điểm Điều hành bấm Kết thúc. Booking Đã hủy vẫn hiện (giá trị gạch, không cộng); doanh thu của nó là phí giữ lại theo quyết toán.
5. **QT07 Đã thu** = thu − hoàn, lũy kế đến lúc tải, không theo kỳ.
6. **QT06 “Khách có yêu cầu Tour mới”** (R05): cùng mốc với dừng luồng của KD10 R09, không giới hạn thời gian sau lần gửi, đếm theo khách; ghi rõ là tương quan, không quy kết. Có thể đổi sang có cửa sổ (ví dụ 60 ngày) nếu doanh nghiệp muốn.
7. **QT06 chiến dịch trên bảng**: chiến dịch không Nháp có lần gửi trong kỳ hoặc có lịch gửi trong kỳ (hiện số 0 kèm lịch).
8. **QT06 bảng trượt kết quả** khi bấm dòng (thay vì mở thẳng KD10 như nguồn ghi “chọn chiến dịch để mở KD10”): thêm một bước nhưng xem được kết quả Survey ngay trong báo cáo; KD10 mở từ nút ở chân bảng trượt.
9. **QT08 “Chốt Booking”** đếm yêu cầu đã từng tạo Booking, kể cả Booking sau đó hủy; Đang có Booking, Đã hủy, Đang xử lý là trạng thái hiện tại.
10. **QT08 cách tạo hành trình** đọc trường nguồn tạo của hành trình hiện hành ở KD06 (Q6).
11. **QT08 bấm số → mục Danh sách yêu cầu** (thay cho bấm dòng tổng hợp), dòng của danh sách mở KD06.
12. **QT09 P&L dự tính** quy VND theo tỷ giá ngày lưu của loại tiền báo giá trong phiên bản quyết toán; Booking đã hủy để trống (RSD DH08 v2.6 R15).
13. **QT10 nhóm tuổi nợ**: Còn hạn, Đến hạn (ngưỡng Đến hạn), Quá hạn 1–30, 31–60, 61–90, trên 90 ngày; Cần hoàn gồm cả Tiền thừa; Booking Chờ điều chỉnh không xếp tuổi nợ.
14. **QT11 tỷ lệ xác nhận** = từng xác nhận ÷ (từng xác nhận + không đáp ứng); lần đặt hủy sau xác nhận vẫn tính xác nhận; ngưỡng tô đỏ không đáp ứng 20%; chênh giá chỉ so khi cùng loại tiền.
15. **QT12 chi phí** lấy số Điều hành ghi ở DH08.7, không lấy số KT01 đã điều chỉnh.
16. **≈ VND chỉ ở thẻ chỉ số** của QT07, QT10, QT12, không ở cột và không xuất Excel.
17. **Excel**: trang Tổng hợp và Chi tiết theo bảng R13; Chi tiết tối đa 50.000 dòng; tên tệp `<mã>_<tên>_<từ>_<đến>.xlsx`.
18. **Chỉ dạng Bảng**, không Kanban, Lịch, Dòng thời gian (2.2).
19. **Số liệu tính trực tiếp lúc tải**, không có bảng chụp sẵn; tải tối đa 30 giây.
20. **Menu Báo cáo là một nhóm riêng**, có đủ bảy báo cáo cho mọi vai trò; đường dẫn “Báo cáo / <tên báo cáo>”.

## Thay đổi ở màn khác

- **RSD KD09 → v1.2 (đã sửa):** bỏ nút Xem thống kê, mục 3.4, ảnh W13.
- **RSD DH08 → v2.6 (đã sửa):** phiên bản quyết toán lưu giá bán, giá vốn, P&L dự tính VND; đích khoan sâu từ QT07, QT09, QT11, QT12.
- **RSD KD06:** không sửa (Q6).
- **Danh sách màn (QT06–QT12), chưa sửa:** bỏ “Đề xuất báo cáo”; QT07 ghi mốc ngày kết thúc Tour; cột vai trò ghi mọi vai trò; KD09 bỏ “Chọn Xem thống kê để mở QT06”.
- **RSD KT01, chưa sửa:** lối vào từ QT10 mang chip theo nhóm tuổi nợ; ghi rõ Kinh doanh, Điều hành mở từ QT10 vẫn theo quyền KT01.
- **RSD QT03, chưa sửa:** R15 thêm sự kiện Xuất tệp của QT06–QT12.
- **QT02 (khi viết RSD):** báo cáo không cần cấu hình quyền; mọi vai trò xem.

## Kiểm tra đã thực hiện

- v1.1: `check-rsd.js --final` cho QT06–QT12 (20 ảnh), KD09 v1.2 (16 ảnh): không cảnh báo. Dựng lại toàn bộ ảnh QT06–QT12 (menu đủ bảy báo cáo) và KD09 (tiêu đề không còn nút).
- v1.0: `check-rsd.js --final`: 24 ảnh nhúng, không cảnh báo. Máy không có Python nên chưa chạy `check-rsd.py`.
- `node wireframes-src/sync-md.js`: tên ảnh khớp `captions.js`.
- Đã mở và xem lại cả 24 ảnh; sửa: định dạng số triệu (QT09), thẻ nhiều loại tiền bị cắt (QT10), bảng trượt QT11 quá hẹp, nhãn menu bị xuống dòng, số trang tính ở W21.
- Số liệu minh họa tính bằng mã trong `wireframes-src` (tổng, tỷ lệ, ≈ VND) nên thẻ, dòng tổng và bảng khớp nhau; dữ liệu Tour tháng 10/2026 dùng chung giữa QT07, QT09, QT10, QT12; chiến dịch khớp KD09.
- Đồng bộ với RSD QT05 v1.0 (cập nhật BOI-CANH trong lúc viết): tỷ giá có hiệu lực lấy ngày gần nhất ≤ hôm nay (R04, E2.2, AC20); ngưỡng Đến hạn là tham số chung ở QT05 (R15); giá trị danh mục dùng nhãn Ngừng dùng (E3.4).
- Chưa kiểm tra: hiển thị DOCX (không yêu cầu); số liệu minh họa chưa đối chiếu với dữ liệu thật.

## 12/11/2026 · v1.2 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-QT06-QT12-Bao-cao-v1.2.md` (đã xóa v1.1).
- **E8.8, AC50.** Ví dụ cũ “Quản trị không được xem KT01” sai: RSD KT01 1.4, R01 cho Quản trị xem mọi khoản. Đổi sang ví dụ đúng theo bảng quyền: Điều hành, Kế toán không truy cập KD06 (RSD KD06 R01), nên mã yêu cầu ở QT06 W03 và dòng yêu cầu ở QT08 W10 không mở được với hai vai trò này. AC50 dùng Kế toán ở QT08.
- **Bước Remarketing (quyết định D).** RSD KD10 2.4 và W11: bước kế tiếp Sắp gửi, các bước sau Chờ. Sửa 2.3, L1.3; W03 bước 3 đổi Chờ (nhãn xám). Tên bước trên W03 đổi theo tiêu đề email ở KD10 W11 (Spring 2027 in Northern Vietnam – early bird; Ha Long & Sapa: 10% off until 31/12; Last call: spring 2027 departures) để cùng chiến dịch CD-2609-001 khớp hai màn. Đã dựng lại và xem W03.
- **E1.6, L3.3.** Giới hạn mở KD06 chỉ xem cho Kinh doanh và Quản trị (RSD KD06 R01); Mở lại yêu cầu do người phụ trách hoặc Quản trị, Quản trị chọn người phụ trách mới (RSD KD06 R22).
- **E5.5 bỏ** (đợt không có hạn): RSD KT01 5.2 bắt buộc hạn cho mọi đợt, kể cả công nợ phát sinh. Mã E5.5 không dùng lại.
- **AC07.** Đã gửi 14 = 6 + 5 + 3 đúng; sai ở điều kiện “14 lần gửi … 1 gửi lỗi”. Theo cách đếm của KD10 (AC30: Tất cả 47 = Đã gửi 46 + Gửi lỗi 1), lần gửi trong kỳ là 15. Số Remarketing CD-2609-001 (182 / 4 / 3 / dự kiến 179) đã khớp KD10 W11, AC34; không đổi. AC17 dẫn E2.4 (quyết toán lưu phiên bản mới), không phải E2.5.
- Dẫn phiên bản dòng 6 và R08, 5.1 theo bảng phiên bản mới.
- `check-rsd.js --final`: 20 ảnh, 20 mã W, đạt.

## Cập nhật 12/11/2026 theo quyết định phase coding

Thư mục đổi `docs/rsd/QT06-QT12/` → `docs/rsd/QT07-QT12/`; tệp mới `RSD-QT07-QT12-Bao-cao-v1.3.md` (cả hai bằng `git mv` từ `RSD-QT06-QT12-Bao-cao-v1.2.md`). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `BOI-CANH-DU-AN.md` bản sửa 12/11/2026.

**Thay đổi**

- **C3, bỏ trọn QT06.** Mục 3.1 còn một dòng “Bỏ theo C3”; L1.1–L1.3, E1.1–E1.6 không dùng lại. R05 còn dòng “(Bỏ theo C3)”. AC06–AC13 ghi “Bỏ theo C3 (QT06)”. Bỏ dòng QT06 ở 1.1, 1.2 (hai lối ra sang KD10, KD06), 1.3 (nguồn KD10), 1.5, 2.1, 2.3, R02, R12, R13, R16, 5.1; 5.2 bỏ bộ lọc Loại, Chiến dịch; R02 bỏ mốc “Kỳ gửi”; E8.8 bỏ ví dụ QT06 và “chiến dịch Nháp”. Tham chiếu R05–R11 đổi thành R06–R11. Còn sáu báo cáo QT07–QT12; “bảy” đổi thành “sáu”.
- **Q1.** Mục 1.4 viết lại thành bảng quyền mặc định (màn · thao tác × vai trò): mặc định mọi vai trò xem và xuất Excel cả sáu báo cáo, cấu hình ở QT02; bỏ câu “Không có cấu hình quyền riêng cho báo cáo ở QT02”. R01, R13, R15, AC01 theo cùng ý. Ví dụ khoan sâu sang KT01 bỏ “KT01 chỉ cho Kinh doanh xem Booking mình phụ trách”, thay bằng “KT01 chỉ xem, không ghi thu” (quyền mặc định ở KT01). L3.3 và E3.2: Mở lại yêu cầu theo quyền ở KD06 (mặc định Kinh doanh), không còn “người phụ trách hoặc Quản trị”.
- **U3.** Bộ lọc nhớ theo người dùng, cả sau khi đăng xuất (1.2, L8.1, R14).
- **K6, thuật ngữ.** “NCC ngừng sử dụng” → “Ngừng dùng” (E6.4); “đổi cho phép sử dụng” → “bật tắt công tắc Đang dùng” (L6.2). 2.3 ghi Đã hủy và Booking đã hủy màu xám.
- **Q3.** Mục “Thiết kế do người viết tự quyết, cần xác nhận” (20 mục ở trên) coi như đã chốt: chấp nhận mặc định (Q3). Các mục 3 (phần QT06), 6, 7, 8 không còn áp dụng vì QT06 đã bỏ.
- **Q9.** RSD không nói về nguồn kỹ thuật ngoài R03 (“đọc trực tiếp dữ liệu hiện hành lúc tải, không có bảng chụp sẵn”), đã khớp; không thêm câu.

**Tự đơn giản hóa giao diện (U6)**

- Không có. Ma trận quyền 1.4 tách Xem và Xuất Excel thành hai thao tác cùng giá trị mặc định, không đổi hành vi.

**Hình**

- Bỏ nhúng W01, W02, W03 (chỉ minh họa QT06); giữ tệp PNG trong `wireframes/`.
- Ghi chung ở phần Dữ liệu trên hình: mọi hình còn mục menu Báo cáo → Survey & chiến dịch email; hình của vai trò Kinh doanh (ví dụ W10) còn mục Chăm sóc khách hàng.
- W05: nhãn Đã hủy màu đỏ. W11: nhãn Booking đã hủy màu đỏ.
- `wireframes-src/` (common.js, lib.js, screens-g-chung.js) còn chú thích “QT06-QT12” và menu đủ 7 báo cáo; không sửa theo yêu cầu.

**Ngoài thư mục, chưa sửa (để người phụ trách các màn đó xử lý)**

- Còn trỏ tên cũ “QT06-QT12”: `BOI-CANH-DU-AN.md` (thuật ngữ Mốc ghi nhận doanh thu, Chốt Booking, Nhóm tuổi nợ, nguyên tắc QT), RSD DH08 v2.9, RSD QT05 v1.3, GHI-CHU của KT01, DH08, QT05. RSD QT03 đã đổi sang QT07-QT12 trong đợt này.

**Kiểm tra**

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py`: 17 ảnh, 17 mã W, không lỗi.
- `grep` từ cấm: chỉ còn ở lịch sử phiên bản, dòng “Bỏ theo C3”, ghi chú hình và “Thử lại” khi lỗi tải hoặc mất mạng.
