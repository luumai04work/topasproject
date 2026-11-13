# Ghi chú làm việc · RSD QT02 · Vai trò và phân quyền

Không thuộc bản phát hành. Tạo 12/11/2026 khi viết RSD QT02 v1.0.

## 1. Quyết định đã chốt dùng trong RSD

| Mã | Nội dung | Dùng ở |
|---|---|---|
| Q1, C1, ADR 0001 | Quyền là cặp (màn hoặc phần, thao tác), gán cho vai trò; hợp các vai trò; không phạm vi bản ghi; phần nhạy cảm là thao tác riêng | R01, R02; Phụ lục A |
| Q25 | Quản trị xem được mọi màn; có Xem thông tin thanh toán NCC và Xem tài khoản nhận hoàn của khách | R04; Phụ lục B |
| BOI-CANH, Mặc định áp sau khi sửa RSD; RSD QT01 1.4 | Quyền QT01, QT02 gắn cố định với Quản trị hệ thống | 1.4, R04 |
| U2 | Thao tác hoàn tác được thì làm ngay kèm Hoàn tác | R06, L2.3 |
| U5 | Không có quyền thì ẩn nút; trường chỉ đọc hiện dạng chữ | R08 |
| Q8 | Xung đột chỉ có Tải lại | R15 |
| Q5 | Nhật ký ghi cùng giao dịch | R14 |
| Q7 | Mã cho phép thủng số | R03 (mã VT) |
| RSD QT01 R02 | Quyền có hiệu lực từ thao tác tiếp theo; thông điệp “Quyền của bạn vừa thay đổi. Tải lại trang”; luôn còn Quản trị | R07, R12 |

## 2. Thiết kế tự quyết (U6) và diễn giải nguồn

1. **Ô quyền lưu ngay, có Hoàn tác, không có nút Lưu chung** (U2). Đổi quyền hoàn tác được nên không hộp thoại. Lựa chọn về Hoàn tác: **có**; Hoàn tác là thao tác ghi mới, chỉ chạy khi các ô chưa bị đổi sau đó, không đảo lại việc người dùng đã làm bằng quyền đó trong khoảng giữa (R06). Danh sách màn ghi “Lưu”: đã thay theo U2.
2. **Ô cấp màn:** Không → bật hết; Một phần hoặc Có hết → tắt hết. Chọn tắt cho trạng thái Một phần để một lần bấm không vô tình cấp nhiều quyền.
3. **Q25 hiểu là cố định:** mọi mã loại Xem và Phần nhạy cảm của Quản trị hệ thống là Có và khóa; các mã Thao tác của Quản trị bật tắt được (R04). Có câu hỏi xác nhận ở mục 5.
4. **Vai trò hệ thống không đổi tên, không Ngừng dùng, không xóa**, theo cách của giá trị hệ thống QT05 (RSD QT05 R06), vì QT01 R03, R05, DH06 R03 và chip Của tôi dựa vào chúng. Mô tả sửa được.
5. **Ngừng dùng vai trò tự tạo:** không gán mới; tài khoản đang có giữ vai trò và quyền. Theo mẫu chung của mọi công tắc Đang dùng / Ngừng dùng (tắt thì ẩn khi chọn mới, dữ liệu đã có giữ nguyên). Có câu hỏi xác nhận ở mục 5.
6. **Xóa vai trò** chỉ khi chưa gán cho tài khoản nào, kể cả Bị khóa (yêu cầu viết RSD); hộp thoại vì không hoàn tác được. Mục Xóa khóa kèm lý do khi còn tài khoản (W12) thay vì hộp thoại chặn.
7. **Quyền cần (R05):** không tự bật, tắt; chỉ báo Chưa có tác dụng; xét trên hợp các vai trò của tài khoản. Theo câu của RSD DH03 1.4 “chỉ có tác dụng khi vai trò có cả quyền Xem thông tin thanh toán NCC”, mở rộng thành quy tắc chung “thao tác cần quyền Xem của màn nơi có nút”.
8. **Khôi phục quyền mặc định không hộp thoại** (U2); xem trước bằng chip Khác mặc định.
9. **Sao chép quyền từ** điền sẵn vai trò đang chọn; sao chép từ Quản trị hệ thống thì bỏ QT01, QT02 (R04, R09).
10. **Mã vai trò** VT-001…VT-004 cho vai trò hệ thống, VT-NNN từ 005 cho vai trò tự tạo. Tên 2–50 ký tự, duy nhất kể cả Ngừng dùng; mô tả tối đa 200 ký tự.
11. **Bố cục:** cột trái danh sách vai trò, bên phải phần đầu và hai tab Quyền, Tài khoản; ma trận là cây module → màn → mã quyền; mã dùng ở nhiều màn chỉ một dòng, nhãn “Dùng ở”. Nhóm Chung (CH01–CH03) hiện chữ, không ô tích. Ô tìm từ 2 ký tự, 300 ms (K1), tìm trong mã và tên màn, tên hiển thị, mã quyền.
12. **Tab Tài khoản** chỉ đọc, không hiện email, điện thoại (RSD QT01 1.4: chỉ hiện ở QT01); gán và bỏ vai trò ở QT01.
13. **Hiệu lực:** quyền kiểm tra lúc máy chủ nhận yêu cầu; lô hàng loạt kiểm tra một lần khi nhận lô (như RSD KD05 E4.3); việc đã vào hàng đợi chạy tiếp; QT02 không gửi thông báo cho người bị đổi quyền (R07).
14. **Nâng cấp phiên bản:** mã mới thì vai trò hệ thống nhận mặc định, vai trò tự tạo nhận Không; đổi mặc định không đổi ma trận đang dùng; không ghi QT03 (R11).
15. **Không cảnh báo người phụ trách ở QT02.** Ngừng hoạt động tính theo vai trò (RSD QT01 R03), không theo quyền; cảnh báo kiểu RSD QT01 R08 chỉ có khi bỏ vai trò ở QT01. Xóa vai trò chỉ khi chưa gán nên không bản ghi nào mất người phụ trách vì QT02 (R13). Không thêm luồng mới.
16. **Cách lập danh mục mã quyền** (R02): mỗi dòng bảng 1.4 một mã; gộp thao tác trùng giữa các RSD; theo danh sách tự khai của DH01, QT04, QT05; tách DH08 theo nhóm thao tác. `<MÀN>` là màn sở hữu dữ liệu, nên Tạo Booking là `KD08.tao-booking` dù nút ở KD06.3.
17. **Ánh xạ thao tác chưa có dòng quyền riêng ở RSD nguồn:**
    - tạo nhanh khách ở KD06.1 (RSD KD06 1.3: “theo quy tắc của KD04”) → `KD04.tao-khach`;
    - phân bổ khoản thu và Dùng tiền thừa ở KT01 → `KT01.ghi-giao-dich`;
    - xem số hộ chiếu đầy đủ trong form khách DH08.4 (RSD DH08 1.4: “người có quyền sửa khách”) → `DH08.khach-doan`;
    - tạo hành trình, dịch nháp bằng AI ở KD06 → `KD06.sua`;
    - Đóng Tour, Mở lại Tour, Bắt đầu và kết thúc Tour, Áp dụng thay đổi chương trình tách thành mã riêng vì RSD DH08 nêu riêng (Mở lại Tour là thao tác cấp riêng theo BOI-CANH);
    - `DH03.xem-cong-no` cần thêm `KT01.xem-phai-tra` vì nút mở KT01.2.
18. **Hành vi theo phòng của vai trò, không phải quyền (R13):** đã thay bằng quyết định người dùng 12/11/2026, xem mục 7.

## 3. Chỗ vênh giữa các nguồn và cách xử lý

| # | Nguồn A | Nguồn B | Cách xử lý |
|---|---|---|---|
| V1 | RSD DH03 1.4: Xem công nợ (nút ở DH03 mở KT01.2) không cấp cho Kinh doanh | RSD KT01 1.4: KT01.2 · Xem cấp cho Kinh doanh | Không trái nhau về quyền nhưng lệch trải nghiệm: Kinh doanh xem được KT01.2 từ menu mà không có nút ở DH03. BOI-CANH không nói. Giữ đúng từng RSD: hai mã `DH03.xem-cong-no` (Kinh doanh Không) và `KT01.xem-phai-tra` (Kinh doanh Có) |
| V2 | BOI-CANH, bảng Tổ chức và vai trò: “khách đoàn” là việc chính của Điều hành | RSD DH08 1.4: DH08.4 danh sách khách, yêu cầu riêng do Kinh doanh thêm, sửa, nhập Excel; Điều hành chỉ xem | Bảng vai trò của BOI-CANH mô tả việc, không phải câu quyền; đoạn Phân quyền của BOI-CANH nói câu quyền trong RSD là giá trị mặc định. Theo DH08: `DH08.khach-doan` Kinh doanh Có, Điều hành Không |
| V3 | BOI-CANH, Bán hàng: sửa yêu cầu, lập báo giá, hủy, mở lại “mặc định cấp cho Kinh doanh” | RSD KD06 1.4: Mở lại yêu cầu và Chuyển người phụ trách cấp cả Kinh doanh và Quản trị hệ thống | BOI-CANH không loại trừ Quản trị; khớp RSD KD05 R08 (chuyển phụ trách mặc định Kinh doanh và Quản trị). Theo RSD KD06 |
| V4 | BOI-CANH, Bán hàng: chuyển người phụ trách khách “(kể cả hàng loạt)… mặc định cấp cho Kinh doanh, chuyển hàng loạt cấp cho Quản trị” (đọc được hai cách) | RSD KD03-KD04 1.4: chuyển hàng loạt Kinh doanh Không, Quản trị Có; chuyển một khách cả hai Có | BOI-CANH không rõ Kinh doanh có chuyển hàng loạt không. Theo RSD KD03-KD04 |
| V5 | Danh sách màn QT02: ba vai trò mặc định, một nút Lưu | BOI-CANH: bốn vai trò; U2 | Theo BOI-CANH (danh sách màn là lịch sử, Q6) |
| V6 | RSD KD06 1.4 “Tạo Booking”; RSD KD08 1.4 “Tạo Booking (từ KD06.3)” | — | Cùng thao tác, cùng giá trị: một mã `KD08.tao-booking` |
| V7 | RSD DH08 1.4: Kế toán “Ghi công nợ (mở KT01.3)” ở DH08.7 | RSD KT01 1.4: Ghi công nợ phát sinh | Cùng thao tác, cùng giá trị: một mã `KT01.ghi-cong-no-phat-sinh` |
| V8 | Thao tác trùng giữa DH02 và DH03 (Tạo NCC, Bật tắt NCC), DH03 và KT01 (Xem thông tin thanh toán NCC), DH03 và DH04 (Sửa dịch vụ và bảng giá), KD04, KD05, KD06 (Tạo yêu cầu), KD05 và KD06 (Chuyển người phụ trách yêu cầu) | — | Giá trị khớp nhau; gộp thành mã dùng chung (R02) |
| V9 | RSD KD06 1.4 không có dòng cho tạo nhanh khách ở KD06.1; RSD KT01 1.4 không có dòng cho phân bổ và Dùng tiền thừa | — | Thiếu dòng, không trái nhau. Ánh xạ ở mục 2, điểm 17 |
| V10 | GHI-CHU của QT01: “QT02… phạm vi bản ghi lấy rộng nhất” | Q1: không có phạm vi bản ghi | GHI-CHU không phải nguồn; bỏ qua, theo Q1 |

Không có chỗ nào RSD trái BOI-CANH về một giá trị quyền cụ thể; mọi giá trị ở Phụ lục B lấy đúng mục 1.4 của RSD màn. Ngoài ra: KD07 không cấp cho Điều hành nhưng KD08 · Xem có cấp (Điều hành mở Booking từ DH07, DH08); đúng theo hai RSD, không phải vênh.

## 4. Thay đổi cần làm ở màn khác

- **QT01.** Ô Vai trò khi tạo, sửa tài khoản chỉ có vai trò Đang dùng; tài khoản đang có vai trò Ngừng dùng hiện thẻ kèm “(ngừng dùng)”, bỏ được, không thêm lại được; lưu với vai trò đã xóa hoặc gán mới vai trò Ngừng dùng thì lỗi cạnh ô (RSD QT02 R10, E3.10). Bộ lọc Vai trò vẫn có vai trò Ngừng dùng. Mục 1.4 của QT01 dẫn mã `QT01.*`.
- **QT03.** Dòng QT02 ở R15 thay bằng bảng sự kiện ở RSD QT02 R14. Bộ lọc Đối tượng đã có “Vai trò” (R12). Mở bản ghi của đối tượng Vai trò mở QT02 đúng vai trò.
- **Mọi RSD có mục 1.4.** Khi nâng phiên bản, dẫn mã quyền của Phụ lục A trong bảng 1.4 để test và code dùng chung một tên. Thêm hoặc tách thao tác thì sửa Phụ lục A, B của QT02 trước.
- **DH03.** Ghi rõ nút Xem công nợ cần thêm quyền xem KT01.2 (`KT01.xem-phai-tra`); nếu người dùng chọn cách khác ở câu hỏi V1 thì sửa giá trị.
- **KD06.** Dòng tạo nhanh khách ở KD06.1 theo `KD04.tao-khach`.
- **KT01.** Phân bổ và Dùng tiền thừa thuộc `KT01.ghi-giao-dich`.
- **BOI-CANH.** Có thể thêm thuật ngữ “Mã quyền” (`<MÀN>.<thao-tác>`, Phụ lục A của QT02) và “Vai trò hệ thống” (bốn vai trò VT-001…VT-004, không đổi tên, không ngừng dùng, không xóa); làm rõ câu V4.
- **Đặc tả Việc của tôi, Thông báo, Đăng nhập** (CH01–CH03, viết song song): dùng mã ở Phụ lục A; thẻ và thông báo mở màn đích theo quyền Xem của màn đó. CH02, CH03 đã ghi “không đi qua ma trận QT02”, khớp R04. **CH01 R08** (“mất vai trò” khi QT02 ngừng dùng hoặc xóa vai trò duy nhất; GHI-CHU CH01 đề nghị QT02 chặn hoặc cảnh báo): theo QT02 v1.0 không xảy ra qua QT02, vì chỉ xóa được vai trò chưa gán (R10), vai trò Ngừng dùng vẫn giữ hiệu lực với tài khoản đang có (R10), vai trò hệ thống không xóa, không ngừng dùng (R03). CH01 có thể ghi “không xảy ra theo QT02 R10”; nếu người dùng chọn cách khác ở câu hỏi 3 (mục 5) thì CH01 R08 mới có tác dụng.
- **`packages/shared`.** Danh sách mã quyền và ma trận mặc định sinh từ Phụ lục A, B.

## 5. Câu hỏi cho người dùng

1. **(Đã trả lời 12/11/2026: vai trò tự tạo khai “thuộc phòng”, xem mục 7.) Vai trò tự tạo và hành vi theo vai trò (R13).** RSD hiện để người phụ trách, Ngừng hoạt động, chip Của tôi bật sẵn, thông báo theo vai trò, thẻ Việc của tôi theo bốn vai trò hệ thống; vai trò tự tạo chỉ mang quyền. Ví dụ tài khoản chỉ có “Trưởng nhóm Kinh doanh” sẽ không được chọn làm người phụ trách khách. Giữ cách này (người đó cần có thêm vai trò Kinh doanh), hay vai trò tự tạo cần khai “tương đương vai trò hệ thống nào”?
2. **Q25 cố định.** Quản trị hệ thống luôn xem được mọi màn, kể cả thông tin thanh toán NCC và tài khoản nhận hoàn của khách, không tắt được ở QT02. Đồng ý, hay muốn tắt được hai phần nhạy cảm này với Quản trị?
3. **Ngừng dùng vai trò.** Tài khoản đang có vai trò Ngừng dùng vẫn giữ quyền của nó (chỉ không gán mới). Đồng ý, hay Ngừng dùng thì vai trò hết tác dụng ngay?
4. **V1, V2.** Kinh doanh có cần nút Xem công nợ ở DH03 không (đang Không)? Danh sách khách đoàn DH08.4 để Kinh doanh nhập, Điều hành chỉ xem như RSD DH08, đúng không?

## 6. Kiểm tra đã chạy

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py docs/rsd/QT02/RSD-QT02-Vai-tro-va-phan-quyen-v1.0.md` và bản `--final`: 0 ảnh (wireframe chưa dựng, mã W giữ chỗ W01–W20), không lỗi bảng, không nhãn chờ, mọi bước mục 3 có mã W, mọi mục con mục 3 có ngoại lệ E; mã thoát 0.
- Phụ lục A, B sinh bằng script tạm ngoài dự án từ một bảng dữ liệu duy nhất, nên hai phụ lục khớp nhau: 129 dòng; 125 mã quyền (118 bật tắt được, 7 cố định); 31 mã loại Xem và Phần nhạy cảm; mã không trùng.
- Số quyền mặc định: Kinh doanh 59, Điều hành 62, Kế toán 38, Quản trị hệ thống 75 trên 125; tóm tắt theo module ở đầu Phụ lục B khớp đếm từng dòng.
- Đối chiếu tay từng giá trị Phụ lục B với mục 1.4 (QT05: 1.5) của 18 RSD và các câu quyền trong BOI-CANH (mục Quản trị, Bán hàng, Điều hành, Kế toán, Mặc định áp sau khi sửa RSD).
- Số liệu ví dụ trong luồng và AC: Kinh doanh 59 → 58 khi tắt `KD04.xoa`; KD04 5/6; module Kinh doanh 31/32 → 30/32; KT01 của Điều hành 3/9; KD06 9/9; tìm “thanh toan” ra 5 dòng.
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích; wireframe chưa dựng.

## 7. Sửa sau rà chéo 12/11/2026

Giữ số phiên bản 1.0 và số hiệu L, E, R, AC; thêm E3.11, E3.12, AC54–AC57.

**Quyết định của người dùng**

- **Vai trò tự tạo khai “thuộc phòng”.** Khi thêm vai trò bắt buộc chọn phòng Kinh doanh, Điều hành hoặc Kế toán (Quản trị hệ thống không phải phòng). Vai trò nhận mọi hành vi gắn với phòng như vai trò hệ thống cùng tên: được chọn làm người phụ trách các bản ghi của phòng, Ngừng hoạt động, chip Của tôi bật sẵn, người nhận thông báo theo nhóm, thẻ Việc của tôi; quyền vẫn chỉnh riêng theo ma trận. Sửa 1.1, 1.2, 1.3, 1.5, 2.1, 2.3, 2.4, 2.5, L3.1, L3.2 (thêm bước 2), E3.1, E3.4, E3.8, R03, R09, R13 (viết lại), R14, R15, 5.1, 5.2; AC24, AC29, AC30 viết lại; thêm E3.11, E3.12, AC54–AC56.
- **Tự quyết kèm theo:**
  - Đổi phòng chỉ khi vai trò không gán cho tài khoản nào (kể cả Bị khóa), cùng điều kiện với Xóa; làm ngay, có Hoàn tác. Lý do: đổi khi đang gán làm thay đổi người phụ trách hợp lệ, Ngừng hoạt động, người nhận thông báo mà không qua cảnh báo kiểu QT01 R08. Muốn đổi thì tạo vai trò mới.
  - Hộp thoại Thêm vai trò giữ đúng 3 trường (CGD K5.05): Tên, Thuộc phòng, Sao chép quyền từ; bỏ Mô tả khỏi hộp thoại, nhập sau ở phần đầu (U6). R14 sự kiện Tạo vai trò ghi phòng thay cho mô tả.
  - Thuộc phòng điền sẵn theo vai trò nguồn (nhãn Gợi ý), trống khi nguồn là Quản trị hệ thống hoặc Không sao chép; sao chép quyền không chép phòng.
  - Mốc Lịch mặc định theo vai trò (KD07 1.4) cũng theo phòng; gợi ý vai trò theo nhóm công việc ở QT01 R05 vẫn chỉ tích vai trò hệ thống.
  - Tài khoản giữ vai trò Ngừng dùng thì vẫn nhận hành vi phòng của vai trò đó (cùng cách với quyền, R10).

**Phát hiện của người rà soát**

- **T1, N-9 · Thông báo ngắn.** Hoàn tác 10 giây, tự đóng 10 giây (không Hoàn tác thì 5 giây), tối đa 3 thông báo theo CGD U2.06, U2.07; bỏ “xếp chồng không giới hạn” (2.5, L2.3, R06, AC15; thêm AC57).
- **T10 · Hoàn tác thao tác nhiều ô.** Chọn giữ “tất cả hoặc không” ở QT02 và ghi ngoại lệ ở CGD U2.06 (sửa cùng đợt). Lý do: ô cấp màn và Khôi phục là một thao tác trên một vai trò, ghi một mục QT03; hoàn tác một phần để lại ma trận không ứng với trạng thái nào Quản trị đã thấy. R06, E2.6 dẫn CGD U2.06.
- **T12, N-11 · Phụ lục A.** `DH07.giao-phu-trach`: Màn “DH07, DH08.1” (nhãn Dùng ở: DH08.1), Gồm thêm ô Điều hành phụ trách trong Thông tin điều hành, Cần “Xem của màn nơi bấm”, nguồn DH08 2.2, 5.2; thêm vào danh sách mã dùng chung ở R02. `DH08.sua-tong-quan`: Gồm loại trường Điều hành phụ trách. `DH08.bat-dau-ket-thuc`: Gồm thêm Kết thúc hồ sơ (DH08 R14). Không đổi giá trị Phụ lục B, không đổi số mã (125).
- **N-1.** Nút “+ Thêm vai trò”, nút trong hộp thoại “Thêm vai trò” (CGD K6.06); hộp thoại xóa có “Xóa vai trò” và “Quay lại”.
- **N-2.** Trang không có quyền theo CGD K0.09, nút Về Việc của tôi (E1.2, L7.2).
- **N1 · Mất quyền giữa phiên.** Thông báo “Quyền của bạn vừa thay đổi” kèm nút Tải lại trang; giao diện đổi ở lần tải sau (L7.1, R07, AC13), khớp QT01 R02 và CGD U5.05.
- **T3.** R01 dẫn cột mã quyền của CGD U1.03 cho tìm nhanh.
- **AC viết lại cho kiểm chứng được:** AC04 (so tự động danh mục với Phụ lục A và 6 API ghi đại diện với tài khoản 0 quyền), AC22 (số ô, số dòng QT03, số Khác mặc định; thêm trường hợp có ô cố định ở Quản trị hệ thống), AC29, AC30 (theo phòng), AC48 (liệt kê giao diện và 5 yêu cầu gửi thẳng), AC50 (mã thử `KD05.thu-nghiem`), AC51 (đổi mặc định `KD05.xuat-excel`).
- **Kiểm tra:** `check-rsd.py` mã thoát 0, 0 ảnh (mã W giữ chỗ).

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **QT01:** đã sửa cùng đợt (R02, R03, R05, R08, E3.1: “vai trò thuộc phòng …”).
- **DH06 R03, DH07, DH08 (danh sách chọn Điều hành phụ trách), KD03-KD04, KD05, KD08 (danh sách chọn người phụ trách), CH02 (người nhận theo nhóm), CH03 (nhóm thẻ theo vai trò, E1.5 “chỉ vai trò khác ở QT02”), KD07 1.4 (mốc Lịch):** đọc “vai trò Kinh doanh, Điều hành, Kế toán” là “vai trò thuộc phòng …” theo QT02 R13.
- **QT03 R15:** dòng QT02 thay bằng bảng R14 (đã có ở mục 4), thêm sự kiện Đổi phòng.
- **BOI-CANH:** thuật ngữ Vai trò, Của tôi, Ngừng hoạt động nên nêu “vai trò thuộc phòng”.

## 8. Bổ sung vai trò HDV 12/11/2026

Giữ số phiên bản 1.0 và số hiệu L, E, R, AC; thêm L7.3, E2.11, E3.13, E7.8, E7.9, R16, AC58–AC66.

**Quyết định của người dùng (BOI-CANH “Vai trò HDV”, ADR 0007)**

- Năm vai trò hệ thống: Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống (Admin). Vai trò tự tạo khai được thuộc phòng HDV.
- HDV chỉ thấy và chỉ ghi trên hồ sơ Tour mình được phân công (DH08.5), từ lúc phân công đến khi hồ sơ Đã đóng; lọc ở máy chủ. Đây là phạm vi bản ghi duy nhất.
- Quyền của HDV: xem Tour, chương trình, dịch vụ đã đặt, khách đoàn, Rooming list; ghi nhật ký, sự cố; ghi chi phí phát sinh và chi phí thực tế. Ba mã cố định: `HD01.xem`, `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi`.
- Cộng tác viên chỉ có tài khoản với vai trò thuộc phòng HDV.

**Tự quyết kèm theo (U6; ghi để người dùng xem lại)**

1. **Mã vai trò HDV là VT-005**; vai trò tự tạo đánh số từ VT-006. Ví dụ của tài liệu đổi VT-005 → VT-006 (Trưởng nhóm Kinh doanh), VT-006 → VT-007 (Thủ quỹ); RSD QT01 AC43 đổi theo. Dữ liệu chưa có ở môi trường nào nên không có chuyển đổi mã.
2. **Tên hiển thị VT-004 giữ “Quản trị hệ thống”**; “Admin” chỉ là tên gọi khác ghi trong danh sách năm vai trò, để không đổi chữ ở QT01, CGD và các AC đã có.
3. **Vai trò thuộc phòng HDV: mọi mã ngoài `HD01.*` cố định Không (R04).** Suy từ ADR 0007 (phòng HDV chỉ thấy hồ sơ Tour được phân công) và BOI-CANH (Cộng tác viên chỉ có vai trò phòng HDV): phạm vi chỉ lọc ở HD01, nên một quyền ở màn khác (ví dụ `DH08.xem`, `KD03.xem`) sẽ cho Cộng tác viên đọc dữ liệu ngoài phân công. Khóa ở QT02 thay vì thêm lọc phân công vào DH07, DH08 (ADR 0001: không thêm phạm vi lẻ tẻ). Xem câu hỏi 1.
4. **Đổi phòng sang HDV** (vai trò tự tạo chưa gán) tắt mọi ô ngoài `HD01.*` trong cùng thao tác, có Hoàn tác tất cả hoặc không (E3.13); sao chép vào phòng HDV chỉ chép ba ô `HD01.*` (R09).
5. **Phạm vi R16 áp cho mọi tài khoản dùng HD01**, kể cả Quản trị: HD01 là “Tour của tôi”. Quản trị có `HD01.xem` cố định theo Q25 nhưng thường thấy danh sách rỗng (không liên kết nhân sự); xem mọi Tour ở DH07, DH08.
6. **Hồ sơ ngoài phạm vi trả cùng phản hồi như không tồn tại** (không phải “không có quyền”), để không lộ Tour Code có thật.
7. **Mở lại Tour** (Đã đóng → Đã kết thúc) khi phân công còn thì HDV thấy lại hồ sơ: suy từ “đến khi hồ sơ Đã đóng”.
8. **Thứ tự hiển thị:** cột trái và module theo thứ tự BOI-CANH: Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống; module HDV đứng sau Kế toán.

**Kiểm tra số liệu (script tạm ngoài dự án, đếm từ Phụ lục B)**

- 128 mã ô ma trận (125 + 3 `HD01.*`), 132 dòng Phụ lục A; 32 mã loại Xem, Phần nhạy cảm (thêm `HD01.xem`).
- Số quyền: Kinh doanh 59, Điều hành 62, Kế toán 38, HDV 3, Quản trị hệ thống 76; tóm tắt theo module khớp đếm từng dòng (module HDV: 0, 0, 0, 3, 1).
- `check-rsd.py` mã thoát 0.

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **RSD HD01 (đang viết):** mục 1.4 dẫn đúng ba mã `HD01.*`; lọc theo R16; thông báo khi lần ghi bị từ chối vì hồ sơ ra khỏi phạm vi (L7.3 bước 2 để HD01 quyết chữ).
- **RSD DH06 R01, E3.2:** Cộng tác viên liên kết được tài khoản chỉ có vai trò thuộc phòng HDV; đổi Nội bộ sang Cộng tác viên khi tài khoản liên kết có vai trò ngoài phòng HDV thì chặn (RSD QT01 R05).
- **RSD DH08 (DH08.5):** gỡ phân công, Đóng Tour làm hồ sơ ra khỏi HD01 của HDV ngay (R16); nêu trong hộp thoại hoặc thông báo ngắn nếu cần.
- **BOI-CANH:** dòng “Vai trò tự tạo ở QT02 phải khai thuộc phòng Kinh doanh, Điều hành hoặc Kế toán” ở mục “Chốt và mặc định khi viết QT02…” đã cũ so với thuật ngữ Vai trò (có HDV); nên sửa cho khớp.

**Câu hỏi cho người dùng**

1. Vai trò thuộc phòng HDV có bao giờ cần quyền ngoài Tour của tôi không? Đã chốt 12/11/2026 (mặc định Q3 của BOI-CANH “Vai trò HDV”, sau đoạn “Người dùng chốt thêm”): không; vai trò thuộc phòng HDV chỉ có mã HD01 và màn chung. Người Nội bộ cần thêm thì gán thêm vai trò Điều hành ở QT01.

## 9. Bổ sung 12/11/2026 · HDV chốt thêm (giữ v1.0)

Nguồn: BOI-CANH “Vai trò HDV”, mặc định theo Q3 sau đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)”: “Vai trò thuộc phòng HDV chỉ được cấp mã quyền HD01 và các màn chung (CH01–CH03). QT02 không cho bật quyền màn khác cho vai trò thuộc phòng HDV, để phạm vi của ADR 0007 không bị lách qua DH08.”

**Xác nhận:** R04 (dòng Phòng HDV), E2.11, E3.13, R09 và Phụ lục B (cột HDV: ba mã `HD01.*` Có, mọi mã khác Không và cố định) đã khóa đúng như vậy từ mục 8; CH01–CH03 không là ô của ma trận nên vẫn có với mọi tài khoản. Câu hỏi 1 ở mục 8 nay đã chốt.

**Đã sửa (dòng “Thay đổi ở v1.0 (bổ sung 12/11/2026 · HDV chốt thêm)”):** R04 thêm câu dẫn BOI-CANH và nêu CH01–CH03; 1.5 thêm dòng truy vết; Phụ lục A sửa cột Gồm của `HD01.xem` (Hiện số hộ chiếu ghi QT03, gọi điện, PDF chương trình; RSD HD01 R11–R13), `DH08.nhat-ky-su-co`, `DH08.chi-phi-phat-sinh`, `DH08.chi-phi-thuc-te` (Điều hành sửa, xóa mục Do HDV ghi; RSD DH08 L6.4, L7.3, L8.1, R20). Không thêm mã, không đổi ma trận hay số quyền (128 mã, 132 dòng; HDV 3).

**Kiểm tra.** `check-rsd.py`: 0 ảnh (wireframe chưa dựng; cảnh báo thiếu ảnh bỏ qua theo giao việc), không lỗi.

## 10. Khi code ticket 03 (13/11/2026): tự đơn giản hóa giao diện (U6)

Không đổi luồng, trạng thái, quyền, tiền hay hành vi gửi ra ngoài.

1. **Ticket 03 chỉ xem.** Ô tích không cố định hiện giá trị nhưng chưa bấm được; bật tắt, Hoàn tác, chỉ báo Chưa có tác dụng ở ticket 04. Tab Tài khoản, + Thêm vai trò, menu ⋯, sửa tên và mô tả ở ticket 10, 11. Mô tả của năm vai trò hệ thống ban đầu trống (RSD không cho sẵn).
2. **Vai trò đang chọn nằm trên URL** (`/roles?role=VT-002`, CGD K0.08). Nhớ vai trò xem lần trước theo người dùng (mục 1.2, U3) làm cùng hạ tầng nhớ lựa chọn ở ticket 12; tới lúc đó lần nào mở từ menu cũng là Kinh doanh.
3. **Tìm** khớp tên hiển thị, mã quyền, mã màn và tên màn của cây (không phân biệt hoa thường, dấu; gạch nối và dấu chấm trong mã coi như khoảng trắng). Không tìm trong phần Gồm: nếu tìm cả Gồm thì “thanh toan” khớp thêm `KT01.xem-phai-tra` (“Không gồm thông tin thanh toán NCC”), trái AC05. Module và màn có dòng khớp tự mở; người dùng vẫn thu gọn lại được.
4. **Số đếm.** “x/y quyền” ở module và “x/y” ở màn đếm mọi ô, kể cả ô cố định (khớp W01: Quản trị 8/35 với Kinh doanh). Ô cấp màn (tích, gạch ngang, trống) tính trên ô không cố định như 2.3; màn chỉ có ô cố định thì hiện theo các ô đó và khóa. Số trên chip theo ô tìm.
5. **Nhãn “Dùng ở”** liệt kê các màn trong cột “Màn hoặc phần” của Phụ lục A khác màn của mã: `DH03.xem-thanh-toan-ncc` → “Dùng ở: KT01” (như W02), `KD06.chuyen-phu-trach` → “Dùng ở: KD05” (ví dụ ở L1.1 ghi “KD05, KD06”, khác một chút). Dòng phụ: phần Gồm (nếu có) một dòng, rồi “Màn hoặc phần · mã quyền”.
6. **Tên màn.** Cây ma trận dùng tên theo tiêu đề RSD (“KD06 · Hồ sơ yêu cầu Tour”, “KT01 · Công nợ và thu chi”); menu và tiêu đề tab dùng tên ở CGD K0.05.
7. **Chữ không có trong RSD:** ô tìm gợi ý “Mã, tên màn, tên quyền”; lỗi tải W16 “Không tải được danh sách vai trò”, “Không tải được ma trận quyền” kèm Thử lại; cột trái có nhãn trợ năng “Vai trò”.
8. **Tên vai trò hệ thống** đi qua i18n theo khóa hệ thống (`SALES`, `OPERATIONS`, `ACCOUNTING`, `GUIDE`, `SYSTEM_ADMIN`), không lưu trong DB; vai trò tự tạo lưu tên người nhập.
9. **API ghi một ô** (`PUT /api/roles/:mã/permissions/:mã quyền`): ô cố định trả 422 `PERMISSION_FIXED` (E2.1, AC09); ô khác lưu ngay. Khóa phiên bản từng ô, mã thao tác, Hoàn tác và mục QT03 thêm ở ticket 04.
