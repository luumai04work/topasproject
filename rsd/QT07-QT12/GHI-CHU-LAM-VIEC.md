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

## Quyết định rà soát 13/11/2026

- **Quyết định rà soát 13/11/2026 (Q-RS21).** QT07 đọc đã thu, còn phải thu từ số liệu công nợ của KT01 (RSD KT01 5.1), không tự tính “giá trị − đã thu” (trước đây khác KT01 khi lịch lệch giá trị, và cộng lẫn khoản phát sinh khác loại tiền). Mỗi loại tiền một dòng trong ô; tổng theo loại tiền. Sửa L2.1 bước 1, R06; thêm AC51, AC52. Wireframe W05 (ô Đã thu một dòng) chưa vẽ lại.
- **Quyết định rà soát 13/11/2026 (Q-RS22).** Tên giá trị danh mục trên mọi báo cáo là tên hiện tại ở QT05; đổi tên lý do hủy thì QT08 hiện tên mới, đếm theo giá trị nên không tách nhóm. Sửa R03, R07, E3.4; thêm AC53.
- **Quyết định rà soát 13/11/2026 (Q-RS17).** Danh sách yêu cầu của QT08 hiện báo giá theo RSD KD05 R03 (phiên bản của Booking khi có Booking Hiệu lực). Sửa bảng nhãn 2.x, L3.3 bước 1, R07; thêm AC54. Wireframe W10 (cột “Báo giá mới nhất”) chưa vẽ lại.

## Cách hiểu đã chọn khi code (ticket 85, 18/11/2026)

Tài liệu chưa nói rõ hoặc vênh nhau; chọn cách hiểu để mọi câu cùng đúng (CLAUDE.md “Tài liệu chưa rõ hoặc vênh nhau”). Báo cáo QT08–QT12 (ticket 86, 87) theo cùng cách.

- **Nhớ bộ lọc (R14, U3) do màn hình ghi, không do API.** Hợp đồng ghi “mỗi lần tải nhớ bộ lọc”, nhưng scenario AC42 cần mở QT07 từ menu với Kỳ mặc định sau khi chính Kế toán đó đã gọi API với kỳ tùy chọn (AC20). Cách hiểu: mỗi lần **màn hình** hiện báo cáo với một bộ lọc (bấm chọn hoặc mở từ URL) thì nhớ bộ lọc đó cho người dùng (lựa chọn nhớ `filters` của mã màn QTxx, lưu ở máy chủ, còn sau đăng xuất); API đọc báo cáo không ghi gì. Vẫn đúng “mỗi lần tải nhớ bộ lọc” với người dùng màn hình, và đúng U3.06 (mở từ menu dùng bộ lọc nhớ, ghi lên URL).
- **Yêu cầu không có Kỳ đọc Kỳ mặc định R02** (5.2: Kỳ bắt buộc, mặc định theo R02). “API không áp bộ lọc mặc định” của hợp đồng hiểu là API không tự áp bộ lọc đã nhớ; màn hình luôn gửi Kỳ. Các bộ lọc khác bỏ trống là Tất cả.
- **Kỳ chọn nhanh là trọn tháng, quý, năm theo lịch** (Tháng này = 01/11 – 30/11), không dừng ở hôm nay; “90 ngày qua” gồm hôm nay và 89 ngày trước (R02). Chi tiết ghi cạnh lựa chọn như W20 (11/2026, Q4/2026, 14/08 – 11/11, 2026).
- **Khoảng tùy chọn bỏ trống một đầu (E8.5):** khoảng mở tới giới hạn 24 tháng: thiếu Từ thì Từ = Đến − 24 tháng + 1 ngày; thiếu Đến thì Đến = Từ + 24 tháng − 1 ngày. “Dài hơn 24 tháng” = Đến ≥ Từ + 24 tháng (01/10/2024 – 30/09/2026 hợp lệ).
- **Đã thu (QT07) là “tổng đã thu” trong số liệu công nợ của Booking do KT01 xuất (RSD KT01 5.1), theo loại tiền, lũy kế tới lúc tải** (R06, Q-RS21 “báo cáo không tự tính”; sửa sau review 18/11/2026). Báo cáo không cộng giao dịch: đọc số của KT01 gồm phần đã thu vào các đợt, phí giữ lại sau điều chỉnh, khoản phải thu phát sinh (đúng loại tiền của khoản), tiền thừa và cần hoàn chưa hoàn. Số này bằng giao dịch thu − giao dịch hoàn Hiệu lực (câu “QT07 đọc giao dịch thu, hoàn” ở KT01 5.1 vẫn đúng: KT01 tính từ các giao dịch đó). Ở loại tiền của Booking, số này bằng số đã thu KD07 hiện cho Booking đã điều chỉnh, cộng khoản phát sinh cùng loại tiền nếu có. Tiền thừa nằm trong Đã thu (QT07 không có cột tiền thừa; KT01.1 tách nó ra cột riêng). Còn phải thu = số còn của KT01.1 (các đợt, phí giữ lại sau điều chỉnh, khoản phát sinh), không phải giá trị − đã thu.
- **Kế toán mở KD08.2 (R12, RSD KD08 1.2):** người xem có vai trò thuộc phòng Kế toán và không có vai trò phòng Kinh doanh (cùng quy tắc KD07 R09); người khác mở tab mặc định. Không có quyền KD08.xem hoặc DH08.xem thì dòng, ô không bấm được (E8.8).
- **Bấm Xuất Excel lặp (E8.6, E8.9, R13)** trả lại đúng tệp của lần bấm đầu (tệp là ảnh chụp lúc bắt đầu xuất, E8.9), không tính lại, không ghi QT03 lần hai (sửa sau review 18/11/2026). Để vậy, tệp của một lần bấm có mã yêu cầu được giữ cùng mục QT03 tối đa 24 giờ, chỉ để trả cho lần gửi lại cùng mã; không có danh sách, không tải lại được bằng cách khác, quá hạn thì xóa. Vẫn đúng R13 “hệ thống không lưu tệp sau khi tải”: không có kho tệp xuất. Gửi lại cùng mã sau 24 giờ trả 404.
- **Khoảng tùy chọn bỏ trống cả hai đầu** không hợp lệ: 400 trên Từ (`validation.required`), vì Kỳ bắt buộc (5.2) và E8.5 chỉ cho bỏ trống *một* đầu. Màn hình đã khóa Áp dụng khi chưa nhập gì; URL `period=CUSTOM` không ngày thì về Kỳ mặc định (U3.07).
- **Xóa bộ lọc (R14) không đổi chip.** R14 kể “bộ lọc, chip, công tắc, Nhóm theo” là các thứ khác nhau, mục 2.1 xếp chip ở hàng riêng ngoài Thanh lọc, và CGD K2.07 ghi rõ Xóa bộ lọc “giữ nguyên chip của RSD đang chọn”. Nên Xóa bộ lọc đưa Kỳ, các bộ lọc riêng, Nhóm theo (ở Thanh lọc, W06) và công tắc “Chỉ …” (bộ lọc ba lựa chọn K2.02) về mặc định; chip giữ nguyên, và chip khác Tất cả không làm hiện Xóa bộ lọc.
- **Không có quyền ở màn đích (E8.8):** chỗ bấm là chữ thường; di chuột hiện ô nhắc đen “Bạn không có quyền xem <tên màn đích>” (tên màn theo `screens.<mã>`, ví dụ “Hồ sơ Booking”, “Hồ sơ Tour”). Dòng không bấm được thì ô nhắc hiện ở ô đầu của dòng.
- **Ngôn ngữ của tệp xuất:** thân yêu cầu xuất có `language` (ngôn ngữ đang chọn của màn); tên trang, tiêu đề cột, chữ trạng thái trong tệp theo ngôn ngữ đó, mặc định tiếng Việt.
- **Tệp QT07:** một trang Tổng hợp; Booking có nhiều loại tiền ở Đã thu hoặc Còn phải thu thì các loại tiền sau nằm ở dòng kế tiếp (lặp mã Booking), mỗi số tiền kèm cột loại tiền (R13); có dòng nhóm khi Nhóm theo, dòng tổng theo loại tiền.
- **Thẻ ≈ VND (R04, E2.2):** loại tiền lấy tỷ giá ngày trước hôm nay ghi “tỷ giá AUD ngày 10/11” và loại tiền chưa có tỷ giá ghi “chưa gồm AUD · chưa có tỷ giá” ở dòng dưới của thẻ, sau danh sách số theo loại tiền.

## Cách hiểu đã chọn khi code (ticket 86, 18/11/2026)

QT08, QT09. Cùng nguyên tắc với mục ticket 85 ở trên.

- **QT08 “Booking đã hủy” ở phễu** = Chốt Booking − Đang có Booking: yêu cầu đã từng tạo Booking nhưng hiện không còn Booking Hiệu lực (gồm cả yêu cầu Booking đã hủy rồi được mở lại, E3.1). Ba số Đang có Booking, Đã hủy, Đang xử lý đọc trạng thái yêu cầu của KD05 R02 (cùng hàm với KD05), không tính lại.
- **QT08 tỷ lệ** là số nguyên làm tròn nửa lên; mẫu số 0 thì ghi “—” (không ghi 0%).
- **QT08 thứ tự dòng:** Nhóm theo Người phụ trách: người đang hoạt động trước, rồi theo tên (người ngừng hoạt động cuối, như W08); Nhóm theo Cách tạo hành trình: Bằng AI, Từ Tour mẫu, Thủ công, Chưa có hành trình (R07). Nhóm không có yêu cầu nào trong tập thì không hiện. Khối Lý do hủy: nhiều yêu cầu trước, cùng số thì theo tên.
- **QT08 điều kiện của Danh sách yêu cầu:** nhóm của dòng (Phụ trách hoặc Cách tạo hành trình), cột (thẻ “Trạng thái: <tên cột>”, cột Yêu cầu không thành thẻ), lý do hủy (bấm ở khối Lý do hủy: cột Đã hủy và lý do đó). “trong n yêu cầu của kỳ” là số yêu cầu của nhóm (cả kỳ khi không có nhóm), như W10 “trong 22 yêu cầu”. Đổi Nhóm theo thì bỏ điều kiện nhóm. Mục, điều kiện, trang là “mục” của R14: Xóa bộ lọc giữ nguyên chúng.
- **QT08 dòng Danh sách yêu cầu:** cột Booking là Booking Hiệu lực, không có thì Booking gần nhất (đã hủy, kèm ngày hủy dưới lý do “Booking đã hủy”, W10).
- **QT08 Nhóm theo** luôn có giá trị (5.2 bắt buộc): ô hiện “Nhóm theo: Người phụ trách” khung thường khi ở mặc định, không có ×.
- **QT08 Excel:** trang Tổng hợp = bảng theo Nhóm theo đang chọn, dòng Tổng, rồi khối Lý do hủy; trang Chi tiết = mọi yêu cầu của tập (đang ở mục Danh sách thì mọi yêu cầu khớp điều kiện của danh sách, mọi trang). Tên tệp `QT08_Chuyen-doi-yeu-cau_<từ>_<đến>.xlsx` (tệp tiếng Anh `QT08_Conversion_…`).
- **QT09 bộ lọc Chỉ Tour lỗ** (CGD-AC94: Tất cả · Có · Không) nằm ở thanh lọc như mọi bộ lọc ba lựa chọn (K2.02), không nằm cạnh chip như hình. Có = Tour đã quyết toán có P&L < 0 (định nghĩa Tour lỗ, R08); Không = mọi Tour còn lại, gồm Tour chưa quyết toán. Chip không đổi theo bộ lọc này; thẻ và dòng Tổng tính trên các dòng đang hiện (chip và bộ lọc, “thẻ tính theo bộ lọc”, L4.1 bước 3).
- **QT09 Người phụ trách** là danh sách chia hai nhóm: Kinh doanh phụ trách Booking (tài khoản), Điều hành phụ trách hồ sơ (nhân sự DH06); chọn một người ở nhóm Kinh doanh thì giữ Tour có Booking do người đó phụ trách, ở nhóm Điều hành thì giữ Tour có hồ sơ do người đó phụ trách (sửa sau review 18/11/2026: giá trị lọc ghi rõ nhóm, `SALES:<id>` hoặc `OPERATIONS:<id>`).
- **QT09 chỉ báo Đã mở lại** = hồ sơ đã từng mở lại (cờ `reopened` của DH08 R16, giữ khi đóng lại). **KT01 có giao dịch mới** dùng đúng quy tắc E8.8 của DH08.8 (giao dịch, điều chỉnh của Tour chưa nằm trong phiên bản Hiện hành).
- **QT09 đơn vị:** bảng nghìn ₫ làm tròn nửa lên; thẻ triệu ₫ một chữ số thập phân như L4.1 (“3.658,9 triệu ₫”; R04 làm tròn triệu chỉ nói thẻ ≈ VND của QT07, QT10, QT12). Biên ghi một chữ số thập phân; doanh thu 0 thì “—” (E4.6). Excel ghi đồng (R13).
- **Chữ đơn vị “triệu ₫” trên thẻ** (sửa sau review 18/11/2026): theo chữ RSD (L2.1 “≈ 4.401 triệu ₫”, L4.1 “3.658,9 triệu ₫”, L5, L7), không theo chữ viết tắt “tr ₫” của hình; một khóa dùng chung cho QT07 và QT09. Dòng dưới thẻ Chi phí thực tế ghi “điều chỉnh ròng +3,5” không lặp đơn vị, như L4.1.
- **QT09 Excel:** một trang Tổng hợp, mỗi Tour một dòng (số ₫ của phiên bản quyết toán, ô trống khi chưa quyết toán), dòng Tổng của Tour đã quyết toán. Có cột Loại tiền ghi VND ở dòng đã quyết toán và dòng Tổng (sửa sau review 18/11/2026: R13 “số tiền xuất dạng số kèm cột loại tiền” áp cho mọi báo cáo; bảng trang tính của R13 chỉ nói đơn vị ₫ của QT09, không miễn cột này). Tên tệp `QT09_PnL-theo-Tour_<từ>_<đến>.xlsx` (tệp tiếng Anh `QT09_Tour-PnL_…`).
- **QT08 dòng Tổng bấm được** (R07, sửa sau review 18/11/2026): mỗi số của dòng Tổng mở Danh sách yêu cầu với điều kiện của cột, không có điều kiện nhóm (“trong n yêu cầu của kỳ” = cả kỳ).
- **Màu chỉ báo hồ sơ Tour ở QT09** như DH07 (K6.02 dòng “Chỉ báo hồ sơ Tour”, sửa sau review 18/11/2026): Đã mở lại là Cần chú ý (vàng), Booking đã hủy là Phải xử lý (đỏ, như hình W11). Nhãn trạng thái Booking Đã hủy (xám, CGD-AC141) là chuyện khác: đây là chỉ báo của hồ sơ.

## Cách hiểu đã chọn khi code (ticket 87, 18/11/2026)

QT10, QT11, QT12. Tài liệu chưa nói rõ; chọn cách hiểu để mọi câu cùng đúng.

- **QT10 · Booking Chờ điều chỉnh (E5.1, R09 “Không tính”; sửa sau review 18/11/2026).** Theo đúng chữ R09 “Không tính: Booking Chờ điều chỉnh” và ticket “Booking đã hủy chưa điều chỉnh thì không xếp tuổi nợ”: không tính gì của Booking đó, cả các đợt, khoản phải thu phát sinh lẫn Tiền thừa / Cần hoàn (không theo cách đọc hẹp KT01 R07 chỉ tạm dừng đợt). Dòng khách ở loại tiền của Booking vẫn đếm “Chờ điều chỉnh n Booking”, kể cả khi mọi cột bằng 0.
- **QT10 · Hạn đợt (L5.3, R09)** chỉ lọc đợt và khoản theo hạn; cột Cần hoàn / Phải nhận hoàn và chỉ báo Chờ điều chỉnh không có hạn nên không đổi theo ô này.
- **QT10 · Chip khi khoan sâu (R09 “Quá hạn, Đến hạn, Cần hoàn, Còn hạn”; sửa sau review 18/11/2026).** Đúng thứ tự R09: Quá hạn → Đến hạn → Cần hoàn (phải trả: Phải nhận hoàn) → Còn hạn. Chờ điều chỉnh không phải nhóm tuổi nợ: dòng chỉ có Booking chờ điều chỉnh (không số nào xếp nhóm, không Cần hoàn) mở chip Chờ điều chỉnh (E5.1). Dòng của người chi khác không phải NCC (RSD KT01 E3.4, không có mã) mở KT01.2 tìm theo tên người nhận.
- **QT10 · Thứ tự dòng (R09, E5.4).** Dòng có nhóm quá hạn lâu nhất trước, cùng nhóm thì ≈ VND của nhóm đó lớn hơn trước (loại tiền chưa có tỷ giá xếp sau); các dòng của một đối tượng luôn liền nhau, đứng ở chỗ dòng đầu tiên của đối tượng đó.
- **QT10 · Xóa bộ lọc đưa Mục về Phải thu** (sửa sau review 18/11/2026: R14 “đưa mọi bộ lọc về mặc định”, R02 xếp “Mục Phải thu hoặc Phải trả” vào “Bộ lọc khác”); đổi Mục bỏ ô Khách hàng / NCC (mã khách và mã NCC khác nhau).
- **QT10 · Không có dòng tổng** (như hình W13–W15: tổng theo loại tiền ở các thẻ). Cột Đến hạn ghi số ngày của ngưỡng (E5.3) cả ở tiêu đề cột và lựa chọn “Đến hạn trong N ngày” của ô Nhóm tuổi nợ.
- **Tour Code (5.2 “từ 3 ký tự, gợi ý theo mã”, R09 “Tour Code chỉ tính khoản liên kết Tour đó”; sửa sau review 18/11/2026)** ở QT10 và QT12 là ô lọc như hình (W13, W18): gõ từ 3 ký tự thì gợi ý các Tour Code chứa chuỗi gõ (không phân biệt hoa thường, mới nhất trước, tối đa 20); chọn một mã thì báo cáo chỉ tính đúng Tour đó. API nhận đúng một Tour Code; dưới 3 ký tự trả 400.
- **QT11 · Từng xác nhận (R10)** = lần đặt Đã xác nhận + lần đặt Đã hủy còn giữ số lượng xác nhận (DH08 giữ số lượng xác nhận khi hủy; đó là “lịch sử lần đặt”). Một phần = số lượng xác nhận nhỏ hơn số yêu cầu. Tỷ lệ làm tròn nửa lên đến phần trăm nguyên; chênh giá tính chính xác trên số thập phân, làm tròn nửa lên một chữ số thập phân, hiện theo K0.04 (`formatPercent`, không ghi số 0 thừa: “0%”, “+4,5%”; hình ghi “0,0%”).
- **QT11 · Chênh giá** so giá tham chiếu của một đơn vị ở hạng mục (DH08.3) với giá NCC xác nhận của một đơn vị; trung bình là trung bình cộng % của các lần đặt có cả hai giá cùng loại tiền. Cột của dòng NCC tô đỏ khi trung bình dương (theo “dương tô đỏ” của W17; hình W16 tô đỏ từ 3% không có quy tắc nào ghi).
- **QT11 · Bảng trượt W17** (sửa sau review 18/11/2026: §6 “QT11 bảng trượt cuộn tải thêm”) đọc 50 lần đặt mỗi lần; cuối danh sách ghi “+n lần đặt · cuộn để xem” như hình, cuộn tới dòng đó thì tải tiếp; chip đếm theo kết quả hiện tại trên cả kỳ. Bấm Tour Code mở DH08.3 với bảng trượt lịch sử lần đặt của đúng hạng mục (`?tab=booking&item=<hạng mục>`, “nơi xem lịch sử các lần đặt”, L6.2).
- **QT12 · Sự cố đang xử lý** = sự cố chưa ghi kết quả; ngày Tour của sự cố là ngày (giờ Việt Nam) của thời điểm ghi trong nhật ký. Hai công tắc là bộ lọc ba lựa chọn Tất cả / Có / Không (CGD K2.02), đặt ở hàng dưới thanh lọc như chỗ của công tắc trên hình.
- **QT12 · Bấm số chi phí** (R12) là bấm số khoản (“2 khoản”), không phải số tiền. **Bấm số sự cố** (L7.1 bước 2 “lọc Sự cố trong kỳ của báo cáo”; sửa sau review 18/11/2026) mở DH08.6 lọc Sự cố, ô chọn ngày của DH08 L6.1 đặt sẵn kỳ của báo cáo (`&from=&to=`).
- **QT12 · Điều hành phụ trách** (5.2 “Tài khoản QT01, kể cả ngừng hoạt động”; sửa sau review 18/11/2026): danh sách gồm mọi tài khoản có vai trò hệ thống Điều hành, kể cả tài khoản bị khóa hoặc không còn vai trò (ghi “(ngừng hoạt động)”), cộng người đang phụ trách hồ sơ; không liệt kê tài khoản chỉ có vai trò khác vì họ không phụ trách được hồ sơ Tour (Q-RS13), chọn họ không có tác dụng. Dòng ghi người phụ trách kèm “(ngừng hoạt động)” như DH07.
- **QT11 · NCC ngừng dùng** giữ chữ “(ngừng dùng)” của giá trị (CGD K2.02), không dùng chữ “(ngừng hoạt động)” của người.
- **Tên tệp xuất** (R13 chỉ ghi QT10): `QT11_Hieu-suat-NCC_<từ>_<đến>.xlsx`, `QT12_Su-co-chi-phi_<từ>_<đến>.xlsx`. Trang Chi tiết: QT10 mỗi đợt / khoản còn nợ một dòng; QT11 mỗi lần đặt một dòng như W17; QT12 mỗi sự cố, mỗi khoản một dòng.
