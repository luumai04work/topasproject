# Ghi chú làm việc · RSD QT05 Danh mục dùng chung

Không thuộc bản phát hành. Viết mới ngày 12/11/2026 từ danh sách màn (`docs/flows/danh-sach-man-hinh-level1.md`, dòng QT05) và các yêu cầu QT05 đã ghi trong 14 RSD khác.

## Quyết định đã chốt

| Mã | Câu hỏi | Trả lời (người dùng, 12/11/2026) | Tác động |
|---|---|---|---|
| Q1 | Bảng tỷ giá theo ngày và các tham số chung đặt ở đâu, lấy tỷ giá thế nào (nguồn ghi “Nguồn tỷ giá chờ đặc tả”) | Đặt trong QT05. Kế toán nhập tay theo ngày, dán được từ Excel; ngày chưa nhập dùng tỷ giá ngày gần nhất trước đó, màn dùng ghi ngày lấy tỷ giá. Thêm nhóm Tham số chung do Quản trị sửa | 1.2, L5.1–L5.3, L7.1, R13, R14, R17, W24–W28, W34, AC31–AC39, AC46–AC48 |
| Q2 | Ai sửa nhóm nào | Chia theo phòng: Điều hành nhóm dịch vụ và nhân sự; Kinh doanh loại Tour, quốc gia, nguồn khách, kết quả chăm sóc, lý do hủy; Kế toán loại tiền, tỷ giá, phương thức thanh toán, ngân hàng; chỉ Quản trị Markup mặc định, bội số làm tròn, chính sách hoàn hủy Booking, tham số chung. Quản trị sửa mọi nhóm; vai trò khác xem mọi nhóm | 1.5, R01, L1.3, W03, W21, W23, AC02, AC27 |
| Q3 | Nhóm tuổi trẻ em (danh sách màn ghi ở QT05, RSD DH03 khai theo hợp đồng) | Bỏ khỏi QT05, giữ theo DH03 | 1.2 (Không thuộc QT05) |

## Thiết kế tự quyết cần xác nhận

1. **Bố cục:** một màn, cột trái 21 nhóm chia 5 mục theo phòng; vùng phải là bảng của nhóm. Thêm, sửa tại chỗ trên dòng (không form), trừ chính sách hoàn hủy dùng bảng trượt.
2. **Thêm nhiều** bằng dán danh sách cho nhóm chỉ có tên bắt buộc; Enter lưu và mở dòng trống tiếp theo.
3. **Giá trị hệ thống** (R06): Toàn quốc, Điều hành (nhóm công việc), Có nhu cầu Tour mới, Khác và Booking đã hủy (lý do hủy yêu cầu), Khác (lý do hủy Booking), VND, Khác (hạng mục), Chính sách mặc định. Không đổi tên, không tắt, không xóa; đổi được thứ tự và thuộc tính riêng. “Khác” của hai nhóm lý do và hạng mục Khác là người viết thêm.
4. **Nhóm bắt buộc** (không tắt được giá trị đang dùng cuối cùng): Loại dịch vụ, Đơn vị tính, Loại Tour, Nhóm công việc, Ngôn ngữ, Loại tiền.
5. **Tắt giá trị đang dùng có hộp thoại** liệt kê số bản ghi theo nơi dùng; chưa dùng thì lưu ngay kèm Hoàn tác (theo mẫu DH02, DH06).
6. **Trùng tên** chặn kể cả với giá trị Ngừng dùng; dấu tiếng Việt được phân biệt.
7. **Tỷ giá:** cảnh báo chênh > 5 % so với ngày liền trước (không chặn); tối đa 4 chữ số thập phân; không nhập ngày sau hôm nay; sửa ngày đã dùng bắt buộc lý do; ô đã dùng không xóa trắng; “Đã dùng” chỉ đếm phiên bản báo giá và quyết toán (KT01 tính lúc hiển thị). Không giới hạn tuổi của tỷ giá; không gửi thông báo nhắc nhập.
8. **Chính sách hoàn hủy:** mỗi lần lưu là một phiên bản; bậc 0 ngày cố định (gồm không đến); N là số ngày nguyên, áp bậc có N lớn nhất ≤ số ngày hủy trước; tối đa 10 bậc; cảnh báo khi bậc gần ngày giữ lại ít hơn; mỗi loại Tour thuộc tối đa một chính sách đang dùng; chính sách mới điền sẵn bậc từ Chính sách mặc định.
9. **Danh sách tham số chung** (7 tham số, R17) gom từ các RSD; khoảng hợp lệ là người viết đặt.
10. **Quốc gia** khởi tạo đủ theo ISO 3166-1, Đang dùng; nhóm quốc gia và ngôn ngữ mặc định nhập sau.
11. **Ngôn ngữ** có thêm Mã ISO 639-1 (không bắt buộc); **Ngân hàng** có tên viết tắt và mã SWIFT; **Loại tiền** có ký hiệu.
12. **Markup** hiện cho mọi vai trò nội bộ ở QT05 (chỉ xem), không ẩn với Điều hành, Kế toán.
13. **Kênh chăm sóc** giữ danh sách cố định của KD03-KD04, không đưa vào QT05. Vai trò phục vụ Tour là danh sách cố định của DH08.5.
14. Không thuộc RSD này: mẫu lịch thanh toán mặc định của Booking (RSD KD08), dịch vụ AI, địa chỉ email chăm sóc. Đề xuất để ở một màn cấu hình hệ thống riêng.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (QT05).** Ghi lại cột Danh mục và Luồng: 21 nhóm (mục 1.2 RSD), bỏ nhóm tuổi trẻ em; vai trò Quản trị hệ thống, Điều hành, Kinh doanh, Kế toán; quyền theo Q2 (bỏ chữ “đề xuất”); tỷ giá Kế toán nhập tay theo ngày (thay “Nguồn tỷ giá chờ đặc tả”); có Tham số chung.
- **RSD KD06.** R25: hạng phòng do Điều hành và Quản trị; lý do hủy yêu cầu do Kinh doanh và Quản trị; bảng tỷ giá ở QT05 nhóm Tỷ giá (Kế toán); loại tiền báo giá mặc định và hạn proposal là tham số chung QT05. E4.2 và R14: “chưa có tỷ giá” nghĩa là không có tỷ giá nào ở ngày ≤ ngày tính giá (QT05 R13); khi dùng tỷ giá của ngày trước, ô tỷ giá ghi “tỷ giá ngày dd/mm/yyyy”. Thẻ tra tên tiếng Anh theo loại dịch vụ và tên tiếng Việt.
- **RSD KT01.** E0.13, R16: định nghĩa chưa có tỷ giá theo QT05 R13; nguồn tỷ giá là QT05; bội số làm tròn chỉ Quản trị; phương thức thanh toán, ngân hàng do Kế toán quản lý.
- **RSD DH08.** E8.3, R15: định nghĩa chưa có tỷ giá theo QT05 R13; khối Tỷ giá quy đổi ghi ngày lấy tỷ giá khi khác ngày cần quy đổi.
- **RSD DH03.** R21: hạng phòng, thẻ gợi ý, địa điểm do Điều hành và Quản trị; loại tiền, ngân hàng do Kế toán và Quản trị. Phân biệt “đơn vị làm tròn khi gia hạn hợp đồng” (DH03 R12) với “bội số làm tròn giá bán” (QT05 R10); làm tròn khi gia hạn nhập trong hộp thoại gia hạn, không phải danh mục QT05.
- **RSD KD01-KD02.** Bảng cấu hình phụ thuộc: Loại Tour do Kinh doanh và Quản trị; địa điểm, đơn vị tính do Điều hành và Quản trị.
- **RSD KD03-KD04.** Quốc gia, nguồn khách, kết quả chăm sóc do Kinh doanh và Quản trị; ngôn ngữ do Điều hành và Quản trị; ngưỡng Cần chăm sóc sau Tour là tham số chung QT05.
- **RSD KD07, KD08, KT01.** Ngưỡng Đến hạn là tham số chung ở QT05 (nhóm Tham số chung). KD08: lý do hủy Booking do Kinh doanh và Quản trị.
- **RSD DH02, DH04.** Ngưỡng hợp đồng sắp hết hạn là tham số chung ở QT05.
- **RSD DH07.** Tiền tố Tour Code là tham số chung ở QT05; đổi tiền tố chỉ áp cho mã cấp sau.
- **RSD KD10.** Hạn link Survey là tham số chung ở QT05.
- **QT02.** Quyền sửa theo từng nhóm QT05 và quyền theo trường (Markup, bội số làm tròn) theo mặc định mục 1.5.
- **QT03.** Nhận sự kiện lịch sử của QT05 kèm lý do (tỷ giá, ghi chú chính sách).

## Kiểm tra đã chạy

- `node wireframes-src/check-rsd.js RSD-QT05-Danh-muc-dung-chung-v1.0.md --final`: 34 ảnh nhúng, 34 mã W, không cảnh báo. Máy không có Python nên không chạy `check-rsd.py`.
- `sync-md.js`, `indent-images.js`: tên ảnh khớp `captions.js`, ảnh thụt lề đúng bước.
- Đã mở xem W01, W08, W12, W16, W18, W25, W28, W30, W33 sau khi chụp; sửa bảng tỷ giá tràn phải (W24–W28), chữ Đang dùng ở xuống dòng (W08), lỗi % thiếu ở W33.
- Số liệu đối chiếu: Loại dịch vụ 13 + 1 = 14, tổng thẻ 46; Hạng phòng 8 → 9; Loại Tour 5 → 4 sau khi tắt; MICE 1 + 9 + 4 = 14 bản ghi; Tour học sinh 2 + 4 + 4 = 10 = 2 + 1 + 3 + 4; tỷ giá 12/11 khớp KT01 (EUR 27.480, USD 25.400, AUD 16.650, JPY 168, GBP 32.900), 11/11 EUR 27.450, USD 25.380 khớp KD06; Chuẩn 2026 khớp bảng bậc của KT01 W07 (hủy trước 8 ngày → 75 %); Markup Inbound đoàn 15 %, Vé máy bay 5 %, Hướng dẫn viên 20 % khớp KD06.
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích của người dùng; chưa đối chiếu với QT02, QT03 vì chưa có RSD.

## 12/11/2026 · rà soát lần hai (v1.1)

Tệp mới `RSD-QT05-Danh-muc-dung-chung-v1.1.md`, đã xóa bản v1.0.

- **Lý do.** R17 ghi “thêm tham số mới cần bổ sung RSD này” nhưng chỉ có 7 tham số, trong khi DH07, DH08, KD05, DH02, KD10 đã ghi ngưỡng hoặc giá trị mặc định do Quản trị cấu hình. Gom thêm 7 tham số: Ngưỡng nhắc hồ sơ chưa giao 7 ngày (DH07 R09, R12); Ngưỡng cảnh báo hộ chiếu 6 tháng, Ngưỡng chờ phản hồi NCC 48 giờ, Hạn phản hồi của Kinh doanh 2 ngày làm việc (DH08 R04, R11, R17, R18); Khoảng cập nhật mặc định cột Kanban 90 ngày (KD05 R11, R13); Giờ chạy nhắc hằng ngày 08:00 (DH02 R08, R10); Giờ gửi mặc định của chiến dịch 09:00 (KD10 W01).
- **Đã có, bỏ qua.** Ngưỡng hợp đồng sắp hết hạn 30 ngày (DH02, DH03, DH04), Ngưỡng Đến hạn (KD07, KD08, KT01, QT10), Cần chăm sóc sau Tour, Hạn link Survey, Hạn proposal, Loại tiền báo giá mặc định, Tiền tố Tour Code.
- **Không đưa vào tham số chung (suy ra, chờ xác nhận).** Giới hạn xuất Excel 5.000 dòng (KD05), giới hạn vẽ Lịch (KD05, KD07, DH07), thử lại gửi email (KD10), thời gian chờ AI (KD06), hộp thư chung, logo: cấu hình hệ thống hoặc giới hạn kỹ thuật; ghi ở 1.2 “Không thuộc QT05”.
- **Suy ra, chờ xác nhận.** Khoảng hợp lệ của 7 tham số mới; giờ nhắc 08:00 của DH07 có dùng chung tham số Giờ chạy nhắc hằng ngày không (DH07 không ghi cấu hình được).
- **Danh mục Ngôn ngữ** thêm nơi dùng DH03 (trường Ngôn ngữ giao dịch của NCC, DH03 v1.3) và QT04.
- **Tỷ giá R13** giữ nguyên.
- **Hình.** W34 thêm 7 dòng, cột Cập nhật lần cuối chỉ ghi ngày để vừa khung; số đếm Tham số chung ở cột trái 7 → 14 nên dựng lại toàn bộ W01–W34. Đã xem W34.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-QT05-Danh-muc-dung-chung-v1.1.md --final`: 34 tham chiếu ảnh, 34 mã W, không lỗi.
- **Việc ở màn khác (ngoài phạm vi).** DH08 R17, KD05 R11, DH02 R10, KD10 R12 (giờ gửi) nên ghi chủ sở hữu là “tham số chung ở QT05 (RSD QT05 R17)” như DH07 đã làm.

## 12/11/2026 · v1.2 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-QT05-Danh-muc-dung-chung-v1.2.md` (đã xóa v1.1).
- **R17.** Ngưỡng Đến hạn thêm nơi dùng QT10 (RSD QT06-QT12 E5.3: cột Đến hạn, Còn hạn theo ngưỡng). W34 cột Dùng ở và dòng gợi ý dưới ô sửa thêm QT10; dựng lại W34, đã xem lại.
- **1.3 Màn dùng → QT05.** RSD KD01-KD02 v1.2 E2.5 đổi câu báo thành “Chưa có loại Tour. Thêm loại Tour ở QT05.” (Kinh doanh tự thêm Loại Tour theo 1.5); trích lại câu mới.
- **Không thuộc QT05 (quyết định B).** RSD DH08 đã bỏ danh mục nhãn yêu cầu riêng (yêu cầu riêng nhập tự do) và sức chứa theo hạng phòng (không kiểm tra sức chứa), nên không thêm hai mục này vào QT05, cũng không cần ghi vào danh sách “Không thuộc QT05”.
- **Phương thức thanh toán (việc của KT01).** Đã xem R06, R05, R20: nhóm không có giá trị hệ thống, không phải nhóm bắt buộc, giá trị minh họa không tự tạo. Chọn sửa phía KT01 (v1.5 R15, R16, 5.2: danh mục trống thì giao dịch lưu không có phương thức); QT05 không đổi.
- Dẫn phiên bản dòng nguồn theo bảng phiên bản mới (DH01 v1.4, DH02 v1.3, DH03 v1.4, DH04 v1.3, DH06 v1.3, DH07 v1.7, DH08 v2.8, KD01-KD02 v1.2, KD03-KD04 v1.4, KD05 v1.4, KD06 v1.5, KD07 v1.3, KD08 v1.5, KD10 v1.2, KT01 v1.5, QT04 v1.3); thêm QT06-QT12 v1.2 vì R17 dẫn tới.
- `check-rsd.js --final`: 34 ảnh, 34 mã W, đạt.

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-QT05-Danh-muc-dung-chung-v1.3.md` (`git mv` từ v1.2). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, BOI-CANH bản 12/11/2026. Các mục cũ bên trên là lịch sử; phần nói về kết quả chăm sóc, KD10, “chờ xác nhận” không còn áp dụng (C3, Q3).

- **Q1, Q25, U5.** Mục 1.5 viết lại thành “Quyền mặc định theo vai trò”: mỗi nhóm một thao tác Sửa ở QT02, thêm hai thao tác theo trường (Sửa Markup mặc định, Sửa bội số làm tròn giá bán). Mặc định giữ nguyên phân chia theo phòng như BOI-CANH mục Quản trị. Lịch sử thay đổi trong menu ⋯ theo quyền xem QT03 (mặc định Quản trị). Trường chỉ đọc hiện dạng chữ. Sửa 1.3, 1.5, 2.4, R01, R10, R15, R21, AC29.
- **C3.** Bỏ nhóm Kết quả chăm sóc và giá trị hệ thống Có nhu cầu Tour mới; bỏ tham số Cần chăm sóc sau Tour, Hạn link Survey, Giờ gửi mặc định của chiến dịch (R17 còn 11 tham số); bỏ KD10 khỏi Màn dùng, Đang dùng ở (R03), R08, L4.4, 1.4; bỏ “kênh chăm sóc”, “địa chỉ gửi email chăm sóc” ở 1.2.
- **Q23.** Thêm nhóm Ngày nghỉ lễ ở mục Giá & chính sách, mặc định chỉ Quản trị sửa: mục 3.8 mới (L8.1, E8.1–E8.4), R22 mới, 5.1, 5.2, AC53–AC56. Số nhóm vẫn 21 (bỏ Kết quả chăm sóc, thêm Ngày nghỉ lễ). R17 ghi 48 giờ chờ NCC theo giờ lịch, Hạn phản hồi của Kinh doanh theo ngày làm việc (R22).
- **Q7, Q9, Q10.** Tiền tố Tour Code mặc định TP (đã có, thêm dẫn Q7); R10 thêm bội số chỉ áp cho giá bán mỗi khách, không áp cho đợt thanh toán và phí giữ lại, làm tròn half-up; R13 ngày lấy tỷ giá khi báo giá là ngày bấm Tính giá.
- **Q8.** Xung đột khi lưu chỉ có nút Tải lại (E2.2, E5.2, R19, AC14).
- **C2, Q3.** Mục “Không thuộc QT05” ghi các cấu hình kỹ thuật nằm ở tệp cấu hình hoặc dữ liệu khởi tạo; bỏ nhãn “suy ra, chờ xác nhận” ở 1.2 và R17 (chấp nhận mặc định).
- **U3, K5.** Nhóm và chip nhớ theo người dùng; bảng trượt chính sách 880 px.

**Tự đơn giản hóa giao diện (U6).**
- Nhóm Ngày nghỉ lễ đặt ở mục Giá & chính sách (mục của Quản trị) thay vì thêm mục thứ sáu ở cột trái; tên mục giữ nguyên.
- Ngày nghỉ lễ dùng bảng theo ngày như Tỷ giá: bộ chọn năm, sắp theo ngày, không có công tắc Đang dùng, không có kéo đổi thứ tự, không có cột Đang dùng ở; xóa làm ngay kèm Hoàn tác (U2), không hộp thoại.
- Thêm nhiều ngày nghỉ bằng dán “dd/mm/yyyy | Tên ngày lễ”.

**Hình chưa cập nhật** (không dựng lại, ghi ở mục Wireframe và dưới hình).
- Mọi hình: cột trái còn Kết quả chăm sóc, chưa có Ngày nghỉ lễ, Tham số chung còn đếm 14; trường chỉ đọc viền nét đứt; bảng trượt chính sách 760 px (W30–W33).
- W11: nút “Tải bản mới” (nay Tải lại).
- W12: hộp thoại còn “chiến dịch”; W12, W13, W14, W20, W21: dòng “Dùng ở” còn KD10.
- W34: còn 14 tham số, gồm ba tham số đã bỏ.
- Nhóm Ngày nghỉ lễ chưa có hình (L8.1 dẫn bố cục W24, W05, W07, W14).

**Câu hỏi cho người dùng.**
- Hộp thoại W12 khi tắt giá trị đang dùng (L3.1, 2.2, R05, E6.4): tắt là hoàn tác được, theo U2 lẽ ra làm ngay kèm Hoàn tác; nhưng BOI-CANH vẫn giữ “cảnh báo nơi đang dùng rồi cho ngừng” cho NCC (DH02). Giữ nguyên hộp thoại.
- Nhóm quốc gia không còn màn dùng nào ngoài QT05 sau C3 (trước chỉ KD10 dùng). BOI-CANH vẫn liệt kê nhóm này; giữ nguyên.

**Kiểm tra.** `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py --final`: 34 ảnh, 34 mã W, không lỗi.

## Sửa sau rà chéo 12/11/2026

- **T8.** R17: Giờ chạy nhắc hằng ngày là một giờ chung cho mọi loại nhắc định kỳ của RSD CH02 (DH02 hợp đồng, DH07 hồ sơ chưa giao, DH08 quá hạn phản hồi và thay đổi chương trình không áp dụng được). Cột Dùng ở thêm CH02 R09, R12; DH07 R09, R12; DH08 E1.9, E3.11, R17. Bỏ câu “nhắc hồ sơ chưa giao của DH07 chưa gắn vào tham số này”. Vẫn 11 tham số; W34 không dựng lại (cột Dùng ở trên hình chỉ minh họa).
- Ghi nhận, chưa sửa: RSD DH08 R04, R17 vẫn ghi Ngưỡng chờ phản hồi NCC ở tệp cấu hình, còn R17 của QT05 ghi là tham số chung (câu hỏi cho người dùng).
- **Kiểm tra.** `check-rsd.py`: 34 ảnh, 34 mã W, không lỗi.

## Dịch vụ đi kèm 12/11/2026

Không sửa RSD QT05. Lý do: loại dịch vụ không cần cờ “được làm đi kèm”. Dịch vụ đi kèm là thuộc tính của dịch vụ ở DH03 (ô Đi kèm dịch vụ, RSD DH03 R23); giường phụ nhận biết bằng dấu Giường phụ trên đi kèm, chỉ có khi dịch vụ chính thuộc loại lưu trú (cờ loại lưu trú đã có). Markup của khoản đi kèm ở KD06 theo hạng mục của loại dịch vụ của chính đi kèm, dùng nguyên gán loại dịch vụ vào hạng mục hiện có. Đơn vị tính cho giường phụ (ví dụ Giường/đêm, cờ theo đêm) là dữ liệu Điều hành thêm vào nhóm Đơn vị tính, không cần đổi đặc tả.
