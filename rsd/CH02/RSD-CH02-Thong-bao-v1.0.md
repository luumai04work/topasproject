# RSD CH02 · Thông báo

**TOPAS · Module Chung · Phiên bản 1.0 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

> **Wireframe chưa dựng; mã W giữ chỗ.** Chuẩn giao diện (K1–K6, U1–U5) thay hình ở đợt này. Mã W trong bước luồng là chỗ để dựng sau; chưa có ảnh, chưa có thư mục `wireframes/`.

- **Nguồn nghiệp vụ.** `docs/rsd/BOI-CANH-DU-AN.md` (thuật ngữ Thông báo, Người phụ trách, Ngừng hoạt động; nguyên tắc Q5 tác động chéo trong một giao dịch, Q6 trạng thái theo thời gian; mặc định “DH06: Hoàn tác tắt nhận phân công thì gỡ thông báo vừa tạo”), `docs/QUYET-DINH-PHASE-CODING.md` (Q2 chỉ thông báo in-app, bỏ email nội bộ; Q5; Q6; U2; U3), ADR 0002. Sự kiện thông báo lấy từ các RSD: DH02 v1.4 (R04, R06, R08, L3.1, E3.1–E3.7), DH03 v1.5 (R05), DH06 v1.4 (R03, R05, L4.2), DH07 v1.8 (R08, R09, L4.1–L4.3), DH08 v2.9 (L1.2, L1.5, L3.12, L8.1, R05, R14, R16, R18, R19, E1.9, E1.11, E3.10–E3.21, E8.2), KD03-KD04 v1.5 (R04), KD05 v1.5 (R08), KD06 v1.6 (R22, R23), KD08 v1.6 (R07, R08, R09, R10, R11, mục 5.3), KT01 v1.6 (L1.6, R05, R07), QT01 v1.3 (R03, R06), QT02 v1.0 (vai trò thuộc phòng), QT05 v1.3 (R17), CH01 v1.0 (khung ứng dụng); chuẩn giao diện CGD (U2.06, U3.05–U3.07). Bổ sung vai trò HDV: BOI-CANH “Vai trò HDV”, ADR 0007, RSD HD01 (ghi sự cố, chi phí; viết song song), RSD DH08 (DH08.5 phân công phục vụ), RSD QT02 v1.0 (R13, R16), CGD K7.
- **Thay đổi ở v1.0 (12/11/2026).** Bản đầu tiên. Gom mọi sự kiện thông báo rải trong 18 RSD thành một danh mục (Phụ lục A); đặc tả chuông, bảng thông báo, cách sinh, gộp, chống trùng, gỡ khi Hoàn tác, nhắc định kỳ và lưu giữ.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026).** Sửa sau rà chéo, theo quyết định của người dùng 12/11/2026. (1) Người nhận theo vai trò thuộc phòng (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02) (R01). (2) Không có thông báo dịch vụ chờ ghi phải trả; Kế toán theo dõi bằng thẻ VT-KT-05 của CH03. (3) Thêm TB-DH08-10 cho RSD DH08 E1.9, sinh Định kỳ (L3.1, R04, R06, R09, Phụ lục A); giờ chạy nhắc là một tham số chung QT05 cho mọi loại nhắc định kỳ. (4) Mở danh sách từ thông báo không ghi đè bộ lọc đã nhớ; bộ lọc nằm tường minh trên URL; tab hồ sơ Tour theo RSD DH07 R10 (1.2, L1.3, E1.13, R07, AC08). (5) Hoàn tác hàng loạt chỉ gỡ phần của bản ghi thực sự được hoàn tác (R05). (6) TB-DH02-03 có nhánh Đã xử lý tính lúc đọc (2.2, L2.3, R06). (7) “chip Của tôi” thay “chip Khách của tôi”. (8) Viết lại AC29, AC31, AC48, AC51; thêm AC55–AC57. Danh mục đã đối chiếu lại với mọi RSD (Phụ lục A).
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · vai trò HDV).** Theo quyết định của người dùng 12/11/2026 (BOI-CANH “Vai trò HDV”, ADR 0007). Thêm 4 loại thông báo ở Phụ lục A.3: TB-HD01-01 (HDV ghi sự cố), TB-HD01-02 (HDV ghi, sửa hoặc xóa chi phí) tới Điều hành phụ trách hồ sơ; TB-DH08-11 (được phân công phục vụ), TB-DH08-12 (bị gỡ phân công) tới tài khoản liên kết với nhân sự đó. Chuông có cả trên HD01; trên điện thoại bảng thông báo mở toàn màn hình (CGD K7.08). Người nhận phòng HDV chỉ nhận thông báo của hồ sơ mình được phân công (R01); đích HD01 kiểm tra phạm vi (R07, E1.14). Sửa 1.2, 1.4, 1.5, 2.1, R01, R07, R11, R12, Phụ lục A (tổng 36 loại); thêm E1.14, AC58–AC65.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · HDV chốt thêm).** Theo BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)” và các mặc định theo Q3 ngay sau đó; RSD HD01 v1.0 và DH08 v2.9 (bổ sung cùng ngày). (1) Thêm **TB-DH08-13**: Điều hành áp dụng thay đổi chương trình thì tài khoản của mọi nhân sự được phân công ở hồ sơ nhận, mở HD01 tab Chương trình (RSD DH08 L1.5, R19). (2) TB-DH08-11 gồm cả khi phân công bị sửa (đổi vai trò phục vụ, phạm vi, ngày giờ) hoặc đổi sang nhân sự đó, khớp RSD DH08 R12; người không có `HD01.xem` mở DH08 thay cho HD01, như RSD DH08 R12. (3) TB-HD01-01 gồm cả khi HDV cập nhật kết quả sự cố; nội dung TB-HD01-01, TB-HD01-02 không chứa số tiền (1.4), RSD HD01 R06 và AC16 đã sửa theo. (4) Đóng Tour không tạo thông báo cho phòng HDV. Sửa 1.5, E1.14, R01, R07, R12, Phụ lục A (tổng 37 loại); thêm AC66–AC69.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · sau rà soát HD01).** Không đổi số loại (37). (1) TB-HD01-02: bản ghi chính là hồ sơ Tour, mọi lần ghi, sửa, xóa chi phí của cùng hồ sơ khi người nhận chưa đọc gộp một dòng “· n lần”, nội dung và đích theo lần ghi gần nhất; khớp RSD HD01 R06, AC28 (Phụ lục A). (2) E1.14, AC60: câu báo hồ sơ ngoài phạm vi thống nhất với CGD K0.09 “Không tìm thấy <Tour Code>”. (3) TB-DH08-08: sự kiện gồm HDV sửa hoặc xóa số và Điều hành bỏ số HDV (Phụ lục A; RSD DH08 L8.1, R20). (4) TB-DH08-12 gồm trường hợp đổi phân công sang nhân sự khác (gửi nhân sự cũ), khớp RSD DH08 R12. (5) AC63, AC66: thêm giờ và trạng thái hồ sơ để chạy được (chi phí thực tế và Đóng Tour cần hồ sơ Đã kết thúc).
- **Cách đọc.** Mục 3 là luồng; mỗi bước có mã W, chỗ bấm, thao tác và phản hồi. Mục 4 là quy tắc (mã R). Phụ lục A là danh mục loại thông báo: mỗi dòng là một mã loại `TB-…` mà luồng, quy tắc và AC dẫn tới. Mục 6 là tiêu chí nghiệm thu, mỗi AC gắn một mã test.
- **Quy ước ví dụ.** Giờ hiện tại trong ví dụ là 12/11/2026 09:00 (Asia/Ho_Chi_Minh). Người dùng ví dụ: Nguyễn Hoàng Nam, Lê Thu Hà (Kinh doanh); Trần Minh Anh, Lê Quang Huy (Điều hành); Vũ Đức Minh (Kinh doanh và Điều hành); Phạm Ngọc Lan (Kế toán); Đỗ Quang Huy (Quản trị hệ thống); Ngô Thị Mai (chỉ có vai trò HDV, tài khoản liên kết NS-015, Cộng tác viên). Nhóm Điều hành trong ví dụ gồm Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh. Tên, mã, số liệu chỉ để minh họa.

## Mục lục

1. Phạm vi và quyền
2. Khung, trạng thái và quy ước giao diện
3. Luồng thao tác
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu
- Phụ lục A. Danh mục loại thông báo

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

CH02 là thông báo trong ứng dụng (in-app) của TOPAS: một chuông trên thanh trên của khung ứng dụng, một bảng thông báo mở từ chuông, và cơ chế để các màn nguồn tạo thông báo. Không có email nội bộ (Q2). Mục tiêu thiết kế:

- **Biết ngay có việc mới.** Chuông luôn hiện số thông báo chưa đọc; số tự cập nhật mà không phải tải lại trang (R08).
- **Một lần bấm tới đúng chỗ xử lý.** Mỗi thông báo mở thẳng bản ghi, tab hoặc danh sách đã lọc ở màn nguồn, và tự đánh dấu đã đọc (R07).
- **Không bị nhiễu.** Không tự nhận thông báo về thao tác của chính mình; nhiều bản ghi trong một thao tác gộp thành một thông báo; cùng một việc chưa đọc thì làm mới tại chỗ thay vì thêm dòng; nhắc định kỳ không lặp mỗi lần chạy (R01, R03, R04).
- **Không sai lệch với dữ liệu.** Thông báo ghi trong cùng giao dịch với thao tác gốc; thao tác lỗi thì không có thông báo; Hoàn tác thì gỡ thông báo vừa tạo (R02, R05). Việc đã xong thì thông báo tự ghi Đã xử lý (R06).

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Khung ứng dụng (mọi màn sau đăng nhập) → chuông | Chuông nằm ở thanh trên, ngay bên trái menu người dùng (RSD CH01 mục 1.2). Bấm chuông mở bảng thông báo (L1.2). Trên HD01 Tour của tôi (màn điện thoại), chuông nằm ở thanh trên gọn, chạm mở bảng thông báo toàn màn hình (CGD K7.04, K7.08). |
| Việc của tôi (CH03) → bảng thông báo | Khối Thông báo chưa đọc của CH03 dùng cùng danh sách và cùng hành vi bấm (RSD CH03 L3.1); liên kết Mở bảng thông báo mở bảng ở chuông. |
| Thông báo → màn nguồn | Mở đích của loại thông báo theo Phụ lục A (bản ghi, tab, bảng trượt hoặc danh sách với bộ lọc có sẵn) (L1.3, R07). Danh sách mở ở dạng Bảng với bộ lọc của thông báo nằm trên URL (RSD DH07 R13); lựa chọn đã nhớ của màn đích không đổi (CGD U3.06). |
| Màn nguồn → CH02 | Màn nguồn tạo thông báo trong giao dịch của thao tác (L2.1) hoặc tác vụ nhắc hằng ngày tạo (L3.1). CH02 không có màn nào để người dùng tự tạo thông báo. |

### 1.3. Ranh giới

- CH02 **sở hữu**: chuông và số chưa đọc; bảng thông báo; bản ghi thông báo và trạng thái đọc của từng người nhận; quy tắc chọn người nhận, gộp, chống trùng, gỡ khi Hoàn tác, tự Đã xử lý; tác vụ nhắc hằng ngày và tác vụ dọn thông báo cũ; khóa chống nhắc lặp của các loại nhắc ở Phụ lục A, trừ mốc nhắc hợp đồng do DH02 sở hữu (RSD DH02 mục 5.1).
- CH02 **không sở hữu** và chỉ đọc: dữ liệu nghiệp vụ dùng để quyết định người nhận và nội dung (người phụ trách, nhóm Điều hành ở DH06, vai trò và trạng thái tài khoản ở QT01, quyền ở QT02, tham số chung ở QT05). Màn nguồn quyết định **khi nào** có sự kiện; CH02 quyết định **ai nhận, hiển thị và mở ra sao**.
- Thông báo không phải dữ liệu nghiệp vụ: đọc, chưa đọc hay bị dọn đều không đổi trạng thái của bản ghi nguồn và không là điều kiện cho thao tác nào. Việc cần làm vẫn hiện ở màn nguồn (chip, chỉ báo, banner) và ở Việc của tôi (CH03) dù người dùng đã đọc hay chưa đọc thông báo.
- CH02 **không gửi gì ra ngoài hệ thống**: không email, không tin nhắn, không thông báo đẩy của trình duyệt (Q2; mục 5.3).

### 1.4. Quyền

CH02 không đi qua ma trận QT02. Mọi tài khoản Đang hoạt động đã đăng nhập đều có chuông và bảng thông báo.

| Chức năng | Mọi tài khoản Đang hoạt động | Tài khoản Bị khóa | Quản trị hệ thống |
|---|---|---|---|
| Thấy chuông, số chưa đọc, bảng thông báo của mình | Có | Không có phiên (RSD CH01) | Có, chỉ của mình |
| Đánh dấu đã đọc, Đánh dấu tất cả đã đọc | Có, chỉ thông báo của mình | — | Có, chỉ của mình |
| Xem thông báo của người khác | Không | — | Không (Q25 là xem mọi màn, không phải hộp thông báo của người khác) |
| Mở đích của thông báo | Theo quyền xem màn đích ở QT02, kiểm tra lúc bấm (R07) | — | Có (Q25) |

- **Không có phạm vi bản ghi** (Q1), trừ phòng HDV: tài khoản chỉ có vai trò thuộc phòng HDV chỉ nhận thông báo của hồ sơ mình đang hoặc vừa được phân công (R01), và đích HD01 kiểm tra phạm vi theo RSD QT02 R16 (R07). Nhận thông báo không cấp thêm quyền: người nhận không có quyền xem màn đích vẫn nhận, nhưng khi bấm thì được báo không có quyền (E1.2).
- **Kiểm tra lúc ghi.** Máy chủ chỉ cho đánh dấu thông báo có người nhận là tài khoản đang gọi.
- **Dữ liệu cá nhân.** Nội dung thông báo chỉ gồm mã, tên khách hoặc tên đoàn, tên NCC, ngày, số lượng, lý do; không chứa email, điện thoại, số hộ chiếu, ngày sinh, số tài khoản, số tiền của khách hay NCC; số tiền chi phí do HDV ghi (TB-HD01-01, TB-HD01-02) cũng không đưa vào nội dung, người nhận xem ở đích. Lý do do người dùng nhập được cắt ở 120 ký tự.

### 1.5. Truy vết nguồn

| Nguồn | Nội dung | Nơi trong CH02 |
|---|---|---|
| Q2, BOI-CANH (Thông báo) | Chỉ thông báo in-app, không email nội bộ | 1.3, R13, 5.3 |
| Q5, ADR 0002 | Thông báo ghi trong cùng giao dịch với thao tác gốc | L2.1, R02 |
| Q6 | Tác vụ định kỳ chỉ dùng để gây hành động, ví dụ tạo thông báo nhắc | L3.1, R09 |
| BOI-CANH “Mặc định áp sau khi sửa RSD” (DH06) | Hoàn tác gỡ thông báo vừa tạo | L2.2, R05 (áp chung) |
| U2, U3 | Hoàn tác thay hộp xác nhận; nhớ lựa chọn theo người dùng | L1.4, 2.3 |
| RSD DH06 R03; DH02 R08; DH07 R09 | Định nghĩa nhóm Điều hành nhận thông báo | R01 |
| RSD DH02 R04, R06, R08, L3.1, E3.1–E3.7; DH03 R05 | NCC ngừng dùng; nhắc hợp đồng sắp hết hạn, hết hạn; gộp trên 5 NCC; tự đánh dấu đã xử lý; liên kết cuối danh sách | TB-DH02-01 đến 03; R03, R06, R09; 2.1 |
| RSD DH06 R05, L4.2 | Tắt nhận phân công: thông báo nhóm và thông báo người phụ trách hồ sơ; Hoàn tác gỡ | TB-DH06-01, 02; R05 |
| RSD DH07 R08, R09, L4.1–L4.3 | Hồ sơ mới; nhắc hồ sơ chưa giao lúc 08:00 mỗi ngày; giao và bỏ giao người phụ trách | TB-DH07-01 đến 05; R04, R09 |
| RSD DH08 L1.2, L1.5, L3.12, L8.1, R05, R14, R16, R18, R19, E1.9, E1.11, E3.11, E3.13, E3.14, E3.21, E8.2 | Thay đổi chương trình, thay đổi không áp dụng được vì ngày đã qua, yêu cầu đổi lịch trình, quá hạn phản hồi, chi phí thực tế chuyển Kế toán, Booking đã hủy | TB-DH08-01 đến 10; TB-KD08-01, 04 |
| RSD KD03-KD04 R04 | Chuyển phụ trách khách, gộp hàng loạt | TB-KD04-01, 02 |
| RSD KD05 R08; KD06 R22, R23 | Giao yêu cầu Tour, gộp hàng loạt, người cũ cũng nhận | TB-KD06-01, 02 |
| RSD KD08 R07, R08, R09, R10, R11, mục 5.3; KT01 L1.6, R05, R07 | Lịch thanh toán thay đổi, lệch giá trị; Booking hủy; chuyển phụ trách Booking | TB-KD08-02 đến 08 |
| RSD QT01 R03, R06 | Tài khoản Bị khóa không nhận thông báo; Ngừng hoạt động | R01 |
| RSD QT05 R17 | Giờ chạy nhắc hằng ngày (một giờ cho mọi loại nhắc định kỳ), ngưỡng nhắc hồ sơ chưa giao | R09, R12 |
| RSD HD01; RSD DH08 (DH08.5); BOI-CANH “Vai trò HDV”; ADR 0007 | HDV ghi sự cố, chi phí thì Điều hành phụ trách hồ sơ nhận; được phân công, bị gỡ phân công thì tài khoản liên kết nhận; phòng HDV chỉ nhận thông báo của hồ sơ được phân công; chuông có trên HD01 | TB-HD01-01, 02; TB-DH08-11, 12; 2.1; R01, R07 |
| BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm” và mặc định Q3 ngay sau; RSD DH08 L1.5, R12, R19; RSD HD01 R06 | Áp dụng thay đổi chương trình thì mọi HDV được phân công nhận; sửa phân công cũng báo; HDV cập nhật kết quả sự cố thì Điều hành phụ trách nhận cùng loại với ghi sự cố; không báo HDV khi Đóng Tour | TB-DH08-13; TB-DH08-11; TB-HD01-01; R01, R07; Phụ lục A |
| BOI-CANH “Vai trò”, chốt 12/11/2026 khi viết QT02, CH01–CH03 | Vai trò tự tạo thuộc phòng nhận thông báo như vai trò hệ thống của phòng; không thông báo dịch vụ chờ ghi phải trả; mở danh sách từ thông báo không ghi đè bộ lọc đã nhớ | R01, R07, Phụ lục A |

---

## 2. Khung, trạng thái và quy ước giao diện

### 2.1. Chuông và bảng thông báo

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Chuông (W01) | Biểu tượng chuông ở thanh trên, bên trái menu người dùng. Khi có thông báo chưa đọc: huy hiệu số màu chính (không dùng đỏ, K6), tối đa “99+”. Không có thì không có huy hiệu. Nhãn khi di chuột: “Thông báo · n chưa đọc”. Trên màn điện thoại (HD01): chuông ở thanh trên gọn, không có nhãn di chuột (CGD K7.04, K7.05) | R08 |
| Đầu bảng (W02) | Tiêu đề Thông báo; nút chuyển hai giá trị **Chưa đọc (n)** · **Tất cả**; liên kết Đánh dấu tất cả đã đọc (chỉ hiện khi n > 0) | L1.2, L1.4 |
| Danh sách | Mới nhất ở trên, theo thời điểm làm mới (R04). Mỗi dòng một thông báo: chấm xanh và nền xanh nhạt khi Chưa đọc; tiêu đề (đậm khi Chưa đọc); nội dung tối đa 2 dòng, trong đó các mã bản ghi là liên kết; dòng phụ ghi màn nguồn, người gây ra (bỏ trống với nhắc định kỳ), thời gian (R11); nhãn xám Đã xử lý khi có (R06); “· n lần” khi đã được làm mới | R04, R06, R11 |
| Chân bảng | Xem thêm (khi còn thông báo cũ hơn); liên kết **Xem nhà cung cấp cần xử lý** khi người dùng có thông báo TB-DH02-02 hoặc TB-DH02-03 chưa Đã xử lý (RSD DH02 R08) | L1.2 |

Bảng thông báo là bảng nổi neo dưới chuông, rộng 420 px, cao tối đa 560 px, cuộn bên trong; đóng khi bấm ra ngoài, bấm lại chuông hoặc Esc. Không có màn thông báo riêng. Trên màn điện thoại, bảng thông báo mở thành trang toàn màn hình với cùng nội dung và hành vi; “←” hoặc nút quay lại đóng trang đó (CGD K7.08).

### 2.2. Trạng thái của thông báo

| Từ | Đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|---|
| (chưa có) | Chưa đọc | Màn nguồn ghi thao tác (L2.1) hoặc tác vụ nhắc hằng ngày (L3.1) | Có người nhận hợp lệ (R01) | Số trên chuông tăng ở lần cập nhật kế tiếp | Không có người nhận: E2.1 |
| Chưa đọc | Chưa đọc (làm mới) | Sự kiện cùng loại, cùng bản ghi tới người nhận đang có thông báo Chưa đọc (R04) | — | Thay nội dung, thời điểm làm mới, “· n lần”; lên đầu danh sách | — |
| Chưa đọc | Đã đọc | Người nhận bấm thông báo hoặc một liên kết trong nó (L1.3), hoặc Đánh dấu tất cả đã đọc (L1.4) | Thông báo còn | Số trên chuông giảm | E1.1–E1.3 |
| Đã đọc | Chưa đọc | Hoàn tác của Đánh dấu tất cả đã đọc (L1.4); nhắc hồ sơ chưa giao ngày hôm sau (TB-DH07-03, R04) | Trong 10 giây (Hoàn tác) | Số trên chuông tăng | E1.12 |
| Chưa đọc hoặc Đã đọc | Đã xử lý (chỉ báo) | Điều kiện ở R06 xảy ra: màn nguồn ghi dữ liệu (gắn trong giao dịch đó), hoặc tới ngày hợp đồng kế tiếp bắt đầu (riêng TB-DH02-03, tính lúc đọc) | — | Nhãn Đã xử lý; không tính vào số chưa đọc | — |
| Bất kỳ | (đã gỡ) | Người thao tác bấm Hoàn tác thao tác gốc (L2.2) | Hoàn tác được màn nguồn chấp nhận | Thông báo biến mất khỏi mọi bảng của người nhận | E2.5 |
| Bất kỳ | (đã dọn) | Tác vụ dọn hằng ngày (L3.2) | Tạo quá 180 ngày (R10) | Không còn trong Tất cả | — |

“Đã xử lý” là chỉ báo phụ, không thay Đã đọc hay Chưa đọc; thông báo Đã xử lý không tính vào số chưa đọc dù chưa bấm (R06).

### 2.3. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác.** Bảng nổi cho xem và mở thông báo. Không có hộp thoại: Đánh dấu tất cả đã đọc làm ngay, kèm thông báo ngắn có Hoàn tác (U2). Không có ô nhập.
- **Một thao tác, một chỗ bấm.** Bấm phần thân thông báo (tiêu đề, nội dung trừ liên kết, khoảng trống) mở đích chính; bấm một mã trong nội dung mở đích của mã đó (R07). Không có nút “Xem” hay “Đánh dấu đã đọc” riêng trên từng dòng.
- **Ghi nhớ.** Lựa chọn Chưa đọc hoặc Tất cả được nhớ theo người dùng, cả sau khi đăng xuất (U3). Lần đầu là Chưa đọc.
- **Tải.** Mở bảng thì tải 20 thông báo mới nhất của bộ lọc đang chọn; Xem thêm tải tiếp 20. Khi đang tải hiện khung xám; lỗi tải hiện W07 có Thử lại.
- **Rỗng (W06).** Chưa đọc rỗng: “Không có thông báo chưa đọc” kèm liên kết Xem tất cả. Tất cả rỗng: “Chưa có thông báo”.
- **Thông báo ngắn** ở góc phải dưới trong 5 giây; có Hoàn tác thì 10 giây (cùng chuẩn với các RSD khác).
- **Ngày giờ** theo Asia/Ho_Chi_Minh (R11).
- **Mở trong thẻ mới.** Ctrl hoặc Cmd khi bấm, hoặc bấm chuột giữa, mở đích ở thẻ mới và vẫn đánh dấu đã đọc; bảng ở thẻ hiện tại giữ mở.
- **Lịch sử.** Đọc, đánh dấu tất cả và Hoàn tác của nó không ghi nhật ký QT03 (trạng thái riêng của người dùng như bộ lọc nhớ theo U3, không phải dữ liệu nghiệp vụ). Tạo, gỡ thông báo ghi vào phần Tác động kèm theo của mục QT03 của thao tác gốc như các RSD nguồn đã nêu (RSD QT03 R03).

---

## 3. Luồng thao tác

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác và phản hồi. Hình chưa dựng; mã W giữ chỗ.

### 3.1. Chuông và bảng thông báo

**L1.1 Thấy có thông báo mới.** *Điều kiện:* tài khoản Đang hoạt động đã đăng nhập, đang ở bất kỳ màn nào.

1. **W01 · Chuông ở thanh trên.** Khi trang tải, hệ thống lấy số thông báo Chưa đọc không Đã xử lý của người dùng và hiện huy hiệu. Sau đó số được cập nhật theo R08 (mỗi 60 giây khi thẻ trình duyệt đang hiện, ngay khi thẻ hiện lại, sau mỗi lần chuyển màn). Có thông báo mới thì huy hiệu đổi số, không có âm thanh hay cửa sổ bật.

*Kết quả:* người dùng thấy số chưa đọc chậm nhất 60 giây sau khi thông báo được tạo.

**L1.2 Mở bảng và lọc.** *Điều kiện:* như L1.1.

1. **W01 → W02 · Bấm chuông.** Bảng thông báo mở ở lựa chọn nhớ lần trước (lần đầu là Chưa đọc), tải 20 thông báo mới nhất theo 2.3 và đồng thời cập nhật số trên chuông. Mỗi dòng hiện như 2.1; thông báo đã được làm mới ghi “· n lần”.
2. **W02 → W03 · Bấm Tất cả.** Danh sách gồm cả Đã đọc và Đã xử lý, mới nhất ở trên. Dòng Đã đọc nền trắng, tiêu đề chữ thường; dòng Đã xử lý thêm nhãn xám. Bấm Chưa đọc để quay lại.
3. **W03 · Cuộn tới cuối, bấm Xem thêm.** Tải tiếp 20 thông báo cũ hơn của cùng lựa chọn. Hết thì Xem thêm biến mất.
4. **W02 · Liên kết Xem nhà cung cấp cần xử lý ở chân bảng** (chỉ khi có theo 2.1). Bảng đóng, DH02 mở ở chip Cần xử lý (RSD DH02 R08, W02 của DH02). Liên kết này không đánh dấu thông báo nào.

*Kết quả:* người dùng thấy đủ thông báo của mình, mới nhất trước, phân biệt được chưa đọc, đã đọc, đã xử lý.

**L1.3 Bấm một thông báo.** *Điều kiện:* bảng đang mở; thông báo còn.

1. **W02 · Bấm phần thân của một thông báo.** Hệ thống gửi một yêu cầu mở thông báo. Máy chủ, trong một giao dịch, đánh dấu thông báo Đã đọc (nếu đang Chưa đọc) và kiểm tra đích chính theo R07: quyền xem màn đích, bản ghi đích còn tồn tại. Hợp lệ thì bảng đóng và trình duyệt mở đích chính (Phụ lục A, cột Đích); số trên chuông giảm 1 nếu thông báo vừa Chưa đọc. Đích là danh sách thì mở bằng URL mang tường minh dạng Bảng và mọi bộ lọc của đích (R07); lựa chọn đã nhớ của màn đích không đổi.
2. **W04 · Thông báo gộp nhiều bản ghi: bấm một mã trong nội dung.** Nội dung liệt kê tối đa 10 mã, mỗi mã là liên kết; còn lại ghi “và k … khác” (R11). Bấm một mã: như bước 1 nhưng kiểm tra và mở đích của mã đó (ví dụ một Tour Code mở DH08 của hồ sơ đó). Bấm phần thân: mở đích chính của loại (Phụ lục A); với loại không nêu đích danh sách thì đích chính là đích của mã đầu tiên trong nội dung.
3. **W05 · Đích không mở được.** Đích không còn tồn tại hoặc người dùng không có quyền xem màn đích: bảng không đóng, thông báo vẫn được đánh dấu Đã đọc, ngay dưới dòng hiện câu lý do (E1.1, E1.2). Không chuyển trang.

*Kết quả:* thông báo Đã đọc; người dùng đứng ở đúng chỗ xử lý, hoặc biết rõ vì sao không mở được.

**L1.4 Đánh dấu tất cả đã đọc.** *Điều kiện:* bảng đang mở; có ít nhất một thông báo Chưa đọc.

1. **W02 → W08 · Liên kết Đánh dấu tất cả đã đọc ở đầu bảng.** Hệ thống đánh dấu Đã đọc mọi thông báo Chưa đọc của người dùng **có thời điểm làm mới không muộn hơn lúc bảng được tải** (gồm cả thông báo chưa tải vì nằm sau Xem thêm). Không hỏi xác nhận. Huy hiệu chuông mất (hoặc còn số thông báo mới đến sau lúc tải, E1.9); danh sách Chưa đọc hiện W06; thông báo ngắn “Đã đánh dấu n thông báo là đã đọc” kèm Hoàn tác trong 10 giây (U2).
2. **W08 → W02 · Hoàn tác trên thông báo ngắn.** Trong 10 giây: các thông báo vừa được đánh dấu trở lại Chưa đọc, trừ thông báo người dùng đã bấm mở sau đó (E1.12); số trên chuông và danh sách trở lại.

*Kết quả:* không còn thông báo Chưa đọc tính tới lúc tải bảng; trạng thái Đã xử lý không đổi.

**Ngoại lệ**

- **E1.1 · W05.** Bản ghi đích không còn tồn tại (ví dụ khách hàng đã bị xóa ở KD04, nhân sự đã bị xóa ở DH06): dưới dòng ghi “<Loại bản ghi> <mã> không còn tồn tại.” Thông báo Đã đọc; không chuyển trang. Đích là danh sách đã lọc thì không có ngoại lệ này: danh sách mở bình thường, có thể rỗng theo chuẩn của màn đó.
- **E1.2 · W05.** Người dùng không có quyền xem màn đích (vai trò không được cấp ở QT02, hoặc vừa bị thu hồi): dưới dòng ghi “Bạn không có quyền xem <tên màn>.” Thông báo Đã đọc; không chuyển trang; không lộ dữ liệu của đích. Nếu người dùng vẫn mở đường dẫn của đích bằng cách khác thì màn đích hiện chuẩn không có quyền của nó (ví dụ RSD DH02 E3.7).
- **E1.3.** Thông báo đã bị gỡ (Hoàn tác thao tác gốc, L2.2) hoặc đã bị dọn (L3.2) trong lúc bảng đang mở: bấm vào thì dòng ghi “Thông báo này không còn.” rồi mờ đi; danh sách và số trên chuông tải lại.
- **E1.4 · W07.** Không tải được bảng (mất kết nối, máy chủ lỗi): vùng danh sách hiện “Chưa tải được thông báo” và Thử lại; đầu bảng vẫn chuyển được Chưa đọc · Tất cả; huy hiệu giữ số cũ. Thử lại tải lại với lựa chọn đang chọn.
- **E1.5.** Bấm thông báo khi mất kết nối: không chuyển trang, thông báo giữ Chưa đọc, thông báo ngắn đỏ “Chưa mở được thông báo. Thử lại.” Bấm lại được.
- **E1.6 · W06.** Không có thông báo: theo 2.3 (Rỗng). Phân biệt “Không có thông báo chưa đọc” (vẫn có thông báo đã đọc) với “Chưa có thông báo” (chưa từng nhận, hoặc đã dọn hết).
- **E1.7.** Lần cập nhật số định kỳ lỗi: huy hiệu giữ số cũ, không báo lỗi; lần cập nhật sau thử lại (R08).
- **E1.8.** Người dùng mở TOPAS ở nhiều thẻ: đọc ở thẻ này thì thẻ kia cập nhật số ở lần cập nhật kế tiếp; bấm ở thẻ kia một thông báo đã đọc vẫn mở đích bình thường.
- **E1.9.** Có thông báo mới đến sau lúc bảng được tải rồi người dùng bấm Đánh dấu tất cả đã đọc: thông báo mới giữ Chưa đọc; huy hiệu còn số đó; thông báo ngắn nêu đúng số đã đánh dấu.
- **E1.10.** Phiên hết hạn hoặc tài khoản bị khóa khi đang mở bảng: yêu cầu bị từ chối; xử lý theo RSD CH01 (chuyển tới Đăng nhập kèm `next` là trang đang làm, không phải đích của thông báo).
- **E1.11.** Bấm cùng một thông báo nhiều lần liên tiếp, hoặc bấm Đánh dấu tất cả đã đọc hai lần: dòng và liên kết khóa tới khi có kết quả; máy chủ đánh dấu một lần, số trên chuông chỉ giảm một lần.
- **E1.12.** Bấm Hoàn tác của Đánh dấu tất cả sau khi đã bấm mở một thông báo trong số đó (ở thẻ khác): thông báo đã mở giữ Đã đọc; các thông báo khác trở lại Chưa đọc. Hết 10 giây thì không Hoàn tác được nữa.
- **E1.13.** Đích chính là danh sách mà màn đích không còn một bộ lọc hoặc giá trị lọc trên URL của thông báo (ví dụ RSD nguồn đổi bộ lọc, giá trị đã xóa): theo CGD U3.07, màn đích bỏ riêng tham số đó, áp mặc định của màn cho phần đó, giữ các tham số còn lại, và hiện thông báo ngắn “Đã bỏ qua n bộ lọc không còn dùng được”. Giá trị danh mục chỉ chuyển Ngừng dùng thì vẫn áp, kèm “(ngừng dùng)”.
- **E1.14 · W05.** Người bấm TB-DH08-11 hoặc TB-DH08-13 mà hồ sơ đã ra khỏi phạm vi phân công (bị gỡ phân công, hồ sơ Đã đóng): dưới dòng ghi “Không tìm thấy <Tour Code>”, cùng câu với trang không tìm thấy của CGD K0.09, không phân biệt bị gỡ, Đã đóng hay không tồn tại; thông báo Đã đọc; không chuyển trang; không có dữ liệu của hồ sơ trong phản hồi (R07; RSD QT02 R16).

### 3.2. Sinh thông báo theo sự kiện

**L2.1 Thông báo tạo cùng thao tác gốc.** *Điều kiện:* người dùng làm ở màn nguồn một thao tác khớp một dòng Phụ lục A có cột Sinh là “Trong giao dịch”.

1. **Màn nguồn; W01 của người nhận.** Người thao tác lưu ở màn nguồn (ví dụ Kinh doanh bấm Lưu Booking ở KD08). Trong cùng giao dịch với thao tác (Q5), hệ thống xác định người nhận theo R01 với dữ liệu lúc ghi, bỏ người thao tác, gộp theo R03, áp chống trùng theo R04, rồi ghi thông báo. Thao tác lỗi thì cả giao dịch không ghi gì, kể cả thông báo. Màn nguồn phản hồi như RSD của nó; người thao tác không thấy thông báo nào ở chuông của mình.
2. **W01 → W02 của người nhận.** Người nhận thấy huy hiệu tăng ở lần cập nhật kế tiếp (R08); mở bảng thấy thông báo ở đầu Chưa đọc, nội dung theo Phụ lục A.

*Kết quả:* mỗi người nhận có đúng một thông báo cho thao tác đó (hoặc thông báo đang chưa đọc của họ được làm mới), cùng tồn tại hoặc cùng không tồn tại với dữ liệu của thao tác.

**L2.2 Hoàn tác gỡ thông báo.** *Điều kiện:* thao tác gốc có Hoàn tác trên thông báo ngắn hoặc banner ở màn nguồn (ví dụ tắt Nhận phân công ở DH06, ngừng dùng NCC ở DH02) và đã tạo thông báo.

1. **Thông báo ngắn ở màn nguồn; W02 của người nhận.** Người thao tác bấm Hoàn tác trong thời hạn của màn nguồn. Trong cùng giao dịch với Hoàn tác, hệ thống gỡ mọi thông báo do thao tác gốc tạo (theo ID thao tác gốc), dù người nhận đã đọc (R05). Thông báo đã được làm mới bởi thao tác gốc (R04) trở về nội dung, thời điểm và số lần trước đó. Hoàn tác không tạo thông báo mới.
2. **W02 của người nhận.** Ở lần cập nhật kế tiếp, số trên chuông giảm; thông báo không còn trong Chưa đọc và Tất cả. Nếu bảng đang mở, bấm vào dòng đó thì E1.3.

*Kết quả:* người nhận không còn thông báo nào về thao tác đã được Hoàn tác.

**L2.3 Thông báo tự Đã xử lý.** *Điều kiện:* thông báo thuộc loại có điều kiện tự Đã xử lý ở R06.

1. **W03 · Nhãn Đã xử lý trên dòng.** Khi màn nguồn ghi dữ liệu làm điều kiện ở R06 đúng (ví dụ hồ sơ Tour vừa có người phụ trách), trong cùng giao dịch đó hệ thống gắn Đã xử lý cho mọi thông báo liên quan của mọi người nhận. Riêng nhánh “hợp đồng kế tiếp đã bắt đầu” của TB-DH02-03 đúng do ngày trôi qua, không do thao tác nào: nhãn tính lúc đọc (R06). Dòng hiện nhãn xám Đã xử lý; thông báo không còn tính vào số chưa đọc và không hiện ở Chưa đọc, vẫn ở Tất cả. Bấm vẫn mở đích như L1.3.

*Kết quả:* người nhận không còn bị nhắc về việc đã có người làm.

**Ngoại lệ**

- **E2.1.** Không có người nhận hợp lệ (ví dụ nhóm Điều hành rỗng vì chưa ai đủ điều kiện ở RSD DH06 R03; Kinh doanh phụ trách Booking đang Bị khóa): không tạo thông báo; thao tác gốc vẫn thành công; nhật ký hệ thống ghi loại, bản ghi và lý do (RSD DH02 E3.6). Màn nguồn vẫn hiện đúng chỉ báo.
- **E2.2.** Người nhận duy nhất là người thao tác (ví dụ Điều hành tự giao hồ sơ cho mình): không tạo thông báo (R01).
- **E2.3.** Người nhận là Điều hành phụ trách hồ sơ nhưng hồ sơ chưa có người phụ trách, hoặc người phụ trách Ngừng hoạt động: nhóm Điều hành nhận thay (R01; RSD DH08 R05).
- **E2.4.** Thao tác gốc lỗi hoặc bị từ chối (xung đột phiên bản, mất quyền, lỗi máy chủ): không có thông báo nào được tạo; người thao tác làm lại theo RSD nguồn; lần làm lại thành công tạo thông báo như bình thường.
- **E2.5.** Hoàn tác bị màn nguồn từ chối (ví dụ đã có người đổi tiếp bản ghi, RSD DH02 E2.6): thông báo giữ nguyên.
- **E2.6.** Người nhận đổi sau khi thông báo đã tạo (ví dụ Booking được chuyển cho người khác): thông báo đã tạo giữ ở người cũ, không chuyển. Người mới biết việc qua thông báo chuyển phụ trách (TB-KD08-07) và qua màn nguồn. Thông báo tạo sau thời điểm chuyển, kể cả nhắc định kỳ, đi tới người mới (R01).
- **E2.7.** Thao tác hàng loạt thành công một phần: thông báo chỉ liệt kê các dòng đã đổi; dòng bỏ qua hoặc lỗi không có trong thông báo. Thử lại phần lỗi thành công thì tạo thông báo cho phần đó (lại gộp theo người nhận).
- **E2.8.** Người nhận không có quyền xem màn đích: vẫn nhận (1.4); khi bấm thì E1.2.
- **E2.9.** Người nhận Bị khóa sau khi đã nhận: thông báo cũ giữ nguyên, không ai thấy cho tới khi tài khoản được mở khóa; không nhận thông báo mới trong thời gian Bị khóa (R01).

### 3.3. Nhắc định kỳ và dọn thông báo

**L3.1 Tác vụ nhắc hằng ngày.** *Điều kiện:* tới giờ chạy nhắc hằng ngày (tham số chung QT05 R17, mặc định 08:00, dùng chung cho mọi loại nhắc định kỳ; R09, R12).

1. **W01, W02 của người nhận · vào giờ chạy (mặc định 08:00).** Hệ thống xét lần lượt năm loại nhắc: TB-DH02-02 (hợp đồng vào ngưỡng), TB-DH02-03 (hợp đồng hết hạn), TB-DH07-03 (hồ sơ chưa giao trong ngưỡng nhắc), TB-DH08-03 (yêu cầu đổi lịch trình quá hạn phản hồi), TB-DH08-10 (thay đổi chương trình không áp dụng được vì chạm ngày đã qua). Với mỗi bản ghi thỏa điều kiện của loại (Phụ lục A) mà chưa có khóa chống nhắc lặp tương ứng (R04), hệ thống tạo thông báo cho người nhận tính tại lúc chạy (R01) và ghi khóa trong cùng một giao dịch; với TB-DH07-03 thì làm mới thông báo hôm trước của cùng hồ sơ (R04). Hợp đồng vào ngưỡng hoặc hết hạn trên 5 NCC cùng mốc trong ngày thì gộp (R03).
2. **W02 · Người nhận mở bảng.** Thông báo nhắc nằm ở đầu Chưa đọc, dòng phụ không có tên người gây ra, chỉ ghi “Nhắc hằng ngày”. Bấm mở đích như L1.3.

*Kết quả:* mỗi việc đến hạn được nhắc đúng số lần theo nguồn: hợp đồng mỗi mốc một lần; yêu cầu quá hạn phản hồi một lần; thay đổi chương trình không áp dụng được một lần; hồ sơ chưa giao mỗi ngày một lần trên cùng một dòng thông báo.

**L3.2 Dọn thông báo cũ.** *Điều kiện:* sau lần chạy nhắc hằng ngày.

1. **W03 · Danh sách Tất cả không còn thông báo cũ.** Hệ thống xóa các thông báo quá hạn lưu 180 ngày, kể cả Chưa đọc (R10). Khóa chống nhắc lặp và mốc nhắc hợp đồng không bị xóa theo.

*Kết quả:* bảng thông báo chỉ giữ 180 ngày gần nhất.

**Ngoại lệ**

- **E3.1.** Hệ thống không chạy được lúc giờ chạy (máy chủ dừng, khởi động lại): tác vụ chạy bù ngay khi hệ thống chạy lại trong cùng ngày. Lỡ cả ngày thì lần chạy kế tiếp vẫn nhắc các bản ghi đã thỏa điều kiện mà chưa có khóa, vì điều kiện xét theo “chưa được nhắc” chứ không theo đúng ngày (R09; RSD DH02 E3.4).
- **E3.2.** Tác vụ chạy hai lần trong cùng ngày (chạy bù, chạy lặp): khóa chống nhắc lặp làm lần sau không tạo thêm thông báo; TB-DH07-03 không làm mới lần hai trong cùng ngày (R04).
- **E3.3.** Điều kiện hết trước giờ chạy (ví dụ hợp đồng kế tiếp được thêm, hồ sơ vừa có người phụ trách, Kinh doanh vừa Chuyển sang Điều hành và yêu cầu được xử lý, Kinh doanh vừa Chuyển sang Điều hành phiên bản mới nên thay đổi không áp dụng được thành Đã thay thế): không nhắc (RSD DH02 E3.1).
- **E3.4.** Không có người nhận lúc chạy: E2.1; khóa không được ghi để lần chạy sau xét lại khi đã có người nhận.
- **E3.5.** Lỗi ở một bản ghi giữa chừng: mỗi bản ghi xử lý trong một giao dịch riêng; bản ghi lỗi không có thông báo và không có khóa, các bản ghi khác vẫn xong; lần chạy sau xét lại bản ghi lỗi.
- **E3.6.** Quản trị đổi giờ chạy hoặc ngưỡng (QT05 R17): áp từ lần chạy kế tiếp; hợp đồng đã trong ngưỡng mới mà chưa được nhắc thì được nhắc ở lần đó (RSD DH02 E3.4).
- **E3.7.** Ngày kết thúc hợp đồng bị sửa sau khi đã nhắc: mốc được tính lại theo RSD DH02 E3.3; hợp đồng vào ngưỡng lần nữa thì nhắc lại.
- **E3.8.** NCC Ngừng dùng, bật lại khi hợp đồng đã trong ngưỡng hoặc đã hết hạn: nhắc ở lần chạy kế tiếp (RSD DH02 E3.2).

---

## 4. Quy tắc triển khai chi tiết

### R01. Người nhận

- **Tính lúc sự kiện.** Người nhận tính theo dữ liệu tại lúc ghi thao tác gốc, hoặc tại lúc tác vụ nhắc chạy. Đổi người phụ trách sau đó không chuyển thông báo đã tạo (E2.6).
- **Điều kiện chung.** Người nhận phải là tài khoản Đang hoạt động (RSD QT01 R03). Tài khoản Bị khóa không nhận (E2.9).
- **Bỏ người thao tác.** Người làm thao tác gốc không nhận thông báo về thao tác đó, kể cả khi thuộc nhóm người nhận hoặc là người phụ trách. Không RSD nguồn nào nêu ngoại lệ. Nhắc định kỳ không có người thao tác.
- **Định nghĩa người nhận dùng trong Phụ lục A:**

| Người nhận | Định nghĩa | Nguồn |
|---|---|---|
| Nhóm Điều hành | Nhân sự DH06 thuộc nhóm công việc Điều hành, Nhận phân công Đang dùng, có tài khoản liên kết Đang hoạt động và có vai trò thuộc phòng Điều hành (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02) | RSD DH06 R03; người dùng chốt 12/11/2026 |
| Nhóm Kế toán | Mọi tài khoản Đang hoạt động có vai trò thuộc phòng Kế toán (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02) | Các RSD ghi “Kế toán nhận thông báo”; CH02 định nghĩa; người dùng chốt 12/11/2026 |
| Điều hành phụ trách hồ sơ | Người phụ trách hồ sơ Tour (DH07, DH08.1). Hồ sơ chưa có người phụ trách, hoặc người phụ trách Ngừng hoạt động, thì nhóm Điều hành nhận thay | RSD DH08 R05 (hồ sơ chưa giao); CH02 áp chung |
| Kinh doanh phụ trách Booking | Người phụ trách Booking (KD08), cũng là người phụ trách yêu cầu Tour của Booking. Ngừng hoạt động thì không có người nhận thay (E2.1) | RSD KD08 R11, DH08 R18, E3.10 |
| Người được giao, người nhận chuyển | Người được ghi là người phụ trách mới của bản ghi | RSD DH07 R08, KD03-KD04 R04, KD05 R08, KD06 R23, KD08 R11 |
| Tài khoản của nhân sự được phân công | Tài khoản Đang hoạt động liên kết với nhân sự (RSD QT01 R05) của phân công phục vụ vừa thêm, vừa sửa hoặc vừa gỡ ở DH08.5, kể cả nhân sự mới (TB-DH08-11) và nhân sự cũ (TB-DH08-12) khi phân công được đổi sang người khác (TB-DH08-11, TB-DH08-12); với TB-DH08-13 là mọi nhân sự có ít nhất một phân công ở DH08.5 của hồ sơ lúc áp dụng thay đổi chương trình. Bất kể vai trò của tài khoản. Nhân sự không có tài khoản liên kết thì không có người nhận (E2.1) | RSD DH08 (DH08.5, R12, R19); BOI-CANH “Vai trò HDV” |
| Người phụ trách cũ | Người phụ trách ngay trước lần đổi, chỉ khi người thao tác không phải người đó | RSD KD03-KD04 R04, KD05 R08, KD06 R22, R23, KD08 R11 |

- **Người nhận trùng nhau trong một thao tác.** Một người khớp nhiều cách nhận của **cùng một loại** (ví dụ vừa thuộc nhóm Điều hành vừa là người phụ trách) nhận một thông báo. Khác loại thì nhận từng loại theo Phụ lục A, trừ chỗ Phụ lục A ghi loại trừ (TB-DH06-02).
- **Phòng HDV chỉ nhận thông báo của hồ sơ mình được phân công** (ADR 0007). Phòng HDV không thuộc nhóm người nhận nào khác ở bảng trên (nhóm Điều hành, nhóm Kế toán và các người phụ trách cần vai trò thuộc phòng khác). Vì vậy tài khoản chỉ có vai trò thuộc phòng HDV chỉ nhận TB-DH08-11, TB-DH08-12 của hồ sơ mà nhân sự liên kết vừa được, vừa bị sửa hoặc vừa bị gỡ phân công, và TB-DH08-13 của hồ sơ đang được phân công. Nội dung chỉ gồm Tour Code, tên đoàn, vai trò phục vụ, ngày, phiên bản chương trình; không có giá, công nợ hay dữ liệu của hồ sơ khác. Đóng Tour, Mở lại Tour không tạo thông báo cho phòng HDV (mặc định Q3 của BOI-CANH “Vai trò HDV”). Tài khoản có thêm vai trò thuộc phòng khác nhận các loại khác theo vai trò đó như mọi tài khoản.
- **Ngừng hoạt động** theo BOI-CANH: tài khoản Bị khóa, hoặc không còn vai trò thuộc phòng mà bản ghi cần (vai trò thuộc phòng Điều hành với hồ sơ Tour, vai trò thuộc phòng Kinh doanh với Booking; vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02).

### R02. Thời điểm tạo

- Thông báo “Trong giao dịch” ghi trong cùng giao dịch cơ sở dữ liệu với thao tác gốc: thành công cả hoặc không gì cả (Q5, ADR 0002). Không có hàng đợi, không có trạng thái gửi lỗi, không có thử lại.
- Thông báo “Định kỳ” do tác vụ nhắc hằng ngày tạo (R09); đây là việc duy nhất của CH02 dùng tác vụ định kỳ, đúng Q6 (tác vụ chỉ để gây hành động).
- Nội dung là bản chụp lúc tạo hoặc lúc làm mới (tên, mã, ngày, lý do). Đổi tên bản ghi về sau không đổi nội dung đã tạo; đích được kiểm tra lại lúc bấm (R07).

### R03. Gộp trong một thao tác

- Một thao tác (kể cả hàng loạt, kể cả một lần chạy nhắc cho một mốc) tạo **tối đa một thông báo cho mỗi cặp (người nhận, mã loại)**. Nội dung liệt kê các bản ghi liên quan, ví dụ “Bạn được giao 3 yêu cầu Tour từ Nguyễn Hoàng Nam: YC-2611-0031, YC-2611-0032, YC-2611-0035” (RSD KD05 R08).
- Nhắc hợp đồng TB-DH02-02, TB-DH02-03: mỗi NCC một thông báo; trên 5 NCC cùng mốc trong cùng lần chạy thì gộp một thông báo “n nhà cung cấp có hợp đồng sắp hết hạn” (hoặc “đã hết hạn”) cho mỗi người nhận, đích DH02 chip Cần xử lý (RSD DH02 E3.5).
- Nhắc hồ sơ chưa giao TB-DH07-03 và nhắc quá hạn TB-DH08-03 không gộp: mỗi hồ sơ, mỗi yêu cầu một thông báo, để làm mới và tự Đã xử lý theo từng bản ghi.

### R04. Chống trùng và làm mới tại chỗ

- **Làm mới khi còn chưa đọc.** Thông báo mới của một bản ghi (thông báo chỉ có một bản ghi chính) tới người nhận đang có thông báo **Chưa đọc, chưa Đã xử lý, cùng mã loại, cùng bản ghi chính** thì không thêm dòng: hệ thống thay nội dung bằng nội dung mới, đặt thời điểm làm mới bằng hiện tại (đưa lên đầu), tăng số lần, giữ thời điểm tạo. Ví dụ Kinh doanh sửa lịch thanh toán của BK-2611-0156 ba lần trong khi Kế toán chưa đọc: Kế toán có một thông báo “· 3 lần” với nội dung lần sửa cuối. Thông báo gộp nhiều bản ghi không làm mới, luôn tạo dòng mới.
- **Khóa chống nhắc lặp cho loại Định kỳ:**

| Loại | Khóa | Số lần nhắc |
|---|---|---|
| TB-DH02-02 Vào ngưỡng | Mốc nhắc hợp đồng của DH02: ID hợp đồng, loại mốc Vào ngưỡng, ngày kết thúc lúc tính | Mỗi hợp đồng mỗi mốc một lần; sửa ngày kết thúc thì tính lại (RSD DH02 R08, E3.3) |
| TB-DH02-03 Hết hạn | Như trên, loại mốc Hết hạn | Như trên |
| TB-DH07-03 Hồ sơ chưa giao | ID hồ sơ, ngày chạy | Mỗi ngày một lần cho tới khi hồ sơ có người phụ trách hoặc rời Mới tạo (RSD DH07 R09) |
| TB-DH08-03 Quá hạn phản hồi | ID yêu cầu đổi lịch trình | Một lần cho mỗi yêu cầu (RSD DH08 E3.11, AC41) |
| TB-DH08-10 Không áp dụng được vì ngày đã qua | ID thay đổi chương trình | Một lần cho mỗi thay đổi chương trình (RSD DH08 E1.9); phiên bản mới được chuyển là thay đổi mới, có khóa riêng |

- **Nhắc mỗi ngày trên cùng một dòng.** TB-DH07-03 có tối đa một thông báo cho mỗi cặp (hồ sơ, người nhận). Lần nhắc ngày sau làm mới thông báo đó (nội dung “khởi hành sau n ngày” mới, thời điểm làm mới, số lần) và đưa về Chưa đọc kể cả khi người nhận đã đọc hôm trước, vì nguồn yêu cầu nhắc mỗi ngày. Người nhận mới của nhóm (vừa đủ điều kiện) được tạo thông báo mới.

### R05. Hoàn tác

- Áp cho mọi thao tác có Hoàn tác ở màn nguồn (U2), mở rộng mặc định của BOI-CANH cho DH06. Hiện có: tắt Nhận phân công (RSD DH06 R05, gỡ TB-DH06-01, TB-DH06-02); ngừng dùng NCC trên dòng, phần đầu DH03 hoặc hàng loạt (RSD DH02 R04, R06, gỡ TB-DH02-01). Thao tác khác về sau có Hoàn tác và tạo thông báo thì theo cùng quy tắc.
- Gỡ trong cùng giao dịch với Hoàn tác, theo ID thao tác gốc lưu trên thông báo; gỡ cả khi người nhận đã đọc (RSD DH06 AC24). Thông báo mà thao tác gốc đã làm mới (R04) thì khôi phục nội dung, thời điểm làm mới, số lần trước đó thay vì gỡ.
- **Hoàn tác hàng loạt chỉ gỡ phần thực sự được hoàn tác** (CGD U2.06: bản ghi đã bị đổi tiếp sau thao tác thì bị bỏ qua, banner ghi số bản ghi không hoàn tác được). Thông báo lưu danh sách bản ghi nguồn kèm ID thao tác gốc (5.1); với mỗi thông báo của thao tác gốc:
  - mọi bản ghi nguồn trong đó được hoàn tác: gỡ thông báo (hoặc khôi phục bản trước nếu là thông báo đã làm mới);
  - chỉ một phần được hoàn tác: giữ thông báo, dựng lại nội dung chỉ gồm các bản ghi không hoàn tác được (danh sách mã, số lượng, các mục liên quan); giữ thời điểm tạo, thời điểm làm mới, trạng thái đọc và Đã xử lý; không đưa lên đầu, không tăng số lần;
  - không bản ghi nào trong đó được hoàn tác: giữ nguyên.
- Hoàn tác không tạo thông báo mới, kể cả khi giá trị trả về có tác động tương tự một thao tác khác (ví dụ Hoàn tác một lần bật NCC đưa NCC về Ngừng dùng thì không tạo TB-DH02-01).
- Hoàn tác bị từ chối toàn bộ thì không gỡ (E2.5).

### R06. Tự Đã xử lý

| Loại | Tự Đã xử lý khi | Nguồn |
|---|---|---|
| TB-DH02-02 | NCC có hợp đồng kế tiếp, hoặc NCC chuyển Ngừng dùng. Thông báo gộp nhiều NCC: khi mọi NCC trong đó thỏa | RSD DH02 R08 |
| TB-DH02-03 | NCC chuyển Ngừng dùng; hoặc NCC có hợp đồng kế tiếp đã bắt đầu, tức hợp đồng có ngày bắt đầu sau ngày kết thúc của hợp đồng trong thông báo và không muộn hơn hôm nay (gồm trường hợp vừa thêm hợp đồng chứa hôm nay). Thông báo gộp nhiều NCC: khi mọi NCC trong đó thỏa | RSD DH02 R08 |
| TB-DH07-01, TB-DH07-03 | Hồ sơ có người phụ trách; riêng TB-DH07-03 cũng khi hồ sơ rời Mới tạo | RSD DH07 R09 |
| TB-KD08-01 | Thay đổi chương trình rời Chờ áp dụng (Đã áp dụng, Đã thay thế, Không áp dụng) | RSD DH08 R19; CH02 |
| TB-DH08-01, TB-DH08-02, TB-DH08-03 | Yêu cầu đổi lịch trình rời Chờ Kinh doanh (Đã xử lý, Đã rút) | RSD DH08 R18; CH02 |
| TB-DH08-10 | Thay đổi chương trình rời Chờ áp dụng (Đã thay thế khi Kinh doanh Chuyển sang Điều hành phiên bản mới, Không áp dụng) | RSD DH08 E1.6, E1.9, E1.11, R19; CH02 |
| TB-KD08-05 | Kế toán ghi điều chỉnh sau hủy cho Booking (Booking rời Chờ điều chỉnh) | RSD KT01 R07; CH02 |

- **Cách gắn.** Điều kiện do một thao tác ghi làm đúng thì Đã xử lý gắn trong cùng giao dịch với thao tác đó (Q5). Một điều kiện đổi theo thời gian: nhánh “hợp đồng kế tiếp đã bắt đầu” của TB-DH02-03 (hợp đồng kế tiếp có khoảng trống, thêm từ trước, tới ngày bắt đầu thì thỏa mà không ai thao tác). Nhánh này **tính lúc đọc** (Q6) mỗi khi lấy số chưa đọc (R08) và tải bảng thông báo, không có tác vụ nào ghi nhãn. Điều kiện chỉ đi một chiều theo thời gian (đã bắt đầu thì không “chưa bắt đầu” lại), nên nhãn không tự mất; chỉ mất khi hợp đồng đó bị xóa hoặc dời ngày bắt đầu ra sau hôm nay. Các loại khác trong bảng không có điều kiện đổi theo thời gian.
- Đã xử lý không bị bỏ khi điều kiện đảo lại (ví dụ người phụ trách bị bỏ giao); lần nhắc kế tiếp, nếu có, tạo hoặc làm mới theo R04. Ngoại lệ duy nhất là nhánh tính lúc đọc của TB-DH02-03 ở trên.
- Loại không có trong bảng thì không tự Đã xử lý; người dùng đọc là xong.

### R07. Mở đích

- **Đích lưu trên thông báo** gồm màn, tab hoặc bảng trượt, ID bản ghi hoặc bộ lọc danh sách, theo cột Đích của Phụ lục A. Thông báo gộp lưu thêm đích của từng mã trong nội dung.
- **Kiểm tra lúc bấm, ở máy chủ, trong cùng yêu cầu đánh dấu Đã đọc:**
  1. Người dùng có quyền xem màn đích (QT02; Quản trị hệ thống luôn có, Q25). Không: E1.2.
  2. Đích là bản ghi thì bản ghi còn tồn tại. Không: E1.1.
  3. Hợp lệ: trả đường dẫn; trình duyệt mở.
- **Danh sách với bộ lọc có sẵn.** Mở bằng URL (CGD U3.05) mang tường minh mọi bộ lọc của đích: dạng xem Bảng (RSD DH07 R13); chip Của tôi bật nếu thông báo nêu, tắt nếu không; chip và bộ lọc ghi ở cột Đích của Phụ lục A; Tất cả cho các bộ lọc khác trên thanh công cụ của màn đích; ô tìm trống. Tham số vắng mặt trên URL lấy mặc định của màn, không lấy lựa chọn đã nhớ (CGD U3.06). Mở từ thông báo **không ghi đè** bộ lọc, chip và dạng xem đã nhớ của màn đích; chỉ khi người dùng tự đổi trên màn đích thì lựa chọn mới được nhớ. Tham số không còn hợp lệ: E1.13.
- **Tab đích của hồ sơ Tour.** Mở hồ sơ Tour từ thông báo (đích chính hoặc một Tour Code trong nội dung) mà việc của thông báo không gắn với một tab riêng thì tab đích theo RSD DH07 R10, tính theo trạng thái hồ sơ và vai trò người bấm lúc bấm: Mới tạo, Đang diễn ra → DH08.1; Đã kết thúc → DH08.8; Đã đóng → DH08.1 chỉ đọc, riêng Kế toán mở hồ sơ Đã đóng chưa có phiên bản quyết toán hiện hành → DH08.8. Phụ lục A ghi các đích này là “DH08 (tab theo DH07 R10)”. Đích ghi rõ một tab vì việc nằm ở tab đó (DH08.1 banner thay đổi chương trình, DH08.2, DH08.3, DH08.5, DH08.8) thì mở đúng tab đó, kể cả khi hồ sơ đã đổi trạng thái; hồ sơ Đã đóng mở ở chế độ chỉ đọc theo RSD DH08.
- **Đích HD01** (TB-DH08-11, TB-DH08-13): ngoài quyền `HD01.xem`, máy chủ kiểm tra hồ sơ còn trong phạm vi phân công của người bấm (RSD QT02 R16). Không còn (đã gỡ phân công, hồ sơ Đã đóng): E1.14. TB-DH08-12 mở danh sách Tour của tôi, không mở hồ sơ. Người bấm không có `HD01.xem` (ví dụ nhân sự Nội bộ chỉ có vai trò Điều hành được phân công làm Trưởng đoàn): TB-DH08-11, TB-DH08-12 mở DH08.5 của hồ sơ, TB-DH08-13 mở DH08.1 của hồ sơ, theo quyền DH08 như mọi đích (RSD DH08 R12, R19).
- Trạng thái bản ghi đã đổi (ví dụ hồ sơ đã được giao) không chặn mở; màn đích hiện dữ liệu mới nhất.

### R08. Số chưa đọc và cập nhật

- **Số chưa đọc** = số thông báo của người dùng ở trạng thái Chưa đọc và không Đã xử lý (gồm Đã xử lý tính lúc đọc của TB-DH02-03, R06). Không tính thông báo đã gỡ, đã dọn.
- **Cập nhật bằng kéo định kỳ:** mỗi 60 giây khi thẻ trình duyệt đang hiện; tạm dừng khi thẻ ẩn; lấy ngay khi thẻ hiện lại, khi chuyển màn, khi mở bảng. Không dùng kết nối đẩy (quy mô 10–50 người dùng, độ trễ tối đa 60 giây chấp nhận được cho việc nội bộ).
- Yêu cầu lấy số chỉ đọc, không gia hạn phiên đăng nhập (để thẻ để quên không giữ phiên mãi; RSD CH01 gia hạn theo hoạt động của người dùng).
- Lấy số lỗi: giữ số cũ, không báo (E1.7).

### R09. Tác vụ nhắc hằng ngày

- Chạy mỗi ngày một lần vào **giờ chạy nhắc hằng ngày**, một tham số chung ở QT05 R17 (mặc định 08:00, giờ Asia/Ho_Chi_Minh; R12) dùng cho mọi loại Định kỳ của Phụ lục A (năm loại: TB-DH02-02, TB-DH02-03, TB-DH07-03, TB-DH08-03, TB-DH08-10), rồi chạy dọn (R10). Không loại nào có giờ chạy riêng.
- Điều kiện của từng loại xét theo dữ liệu và ngày lúc chạy (Q6); điều kiện dùng “chưa có khóa” thay vì “đúng ngày” để chạy bù không bỏ sót (E3.1).
- Mỗi bản ghi nguồn xử lý trong một giao dịch: tạo hoặc làm mới thông báo và ghi khóa cùng nhau (E3.5).
- Tác vụ không ghi nhật ký QT03 (RSD QT03 mục 1.3: việc hệ thống tự chạy theo lịch); kết quả mỗi lần chạy (số bản ghi xét, số thông báo, số lỗi) ghi vào nhật ký hệ thống.
- Điều kiện riêng của từng loại:
  - TB-DH02-02, TB-DH02-03: theo RSD DH02 R01, R08 (NCC Đang dùng; n ≤ N lần đầu và không có hợp đồng kế tiếp; hoặc ngày đầu tiên không có hợp đồng chứa hôm nay sau ngày kết thúc).
  - TB-DH07-03: hồ sơ Mới tạo, chưa có người phụ trách, ngày khởi hành không muộn hơn hôm nay + ngưỡng nhắc hồ sơ chưa giao, kể cả đã qua ngày khởi hành, vì nguồn nhắc “cho đến khi hồ sơ có người phụ trách” (RSD DH07 R09, QT05 R17).
  - TB-DH08-03: yêu cầu đổi lịch trình đang Chờ Kinh doanh, Booking Hiệu lực, hôm nay sau ngày hạn phản hồi (cùng cách tính với chỉ báo Quá hạn phản hồi của RSD DH08 E3.11).
  - TB-DH08-10: thay đổi chương trình đang Chờ áp dụng, hồ sơ Đang diễn ra, Booking Hiệu lực, có ít nhất một dòng thay đổi chạm ngày trước hôm nay (cùng điều kiện với dòng “Không áp dụng được, ngày đã qua” của RSD DH08 E1.9). Sinh định kỳ vì điều kiện thường thành đúng do ngày trôi qua khi chưa ai áp dụng, và để người Chuyển sang Điều hành không tự nhận thông báo về thao tác của mình (R01); thay đổi chạm ngày đã qua ngay lúc chuyển thì được nhắc ở lần chạy kế tiếp.

### R10. Lưu giữ

- Thông báo giữ 180 ngày: tác vụ dọn hằng ngày xóa thông báo có ngày tạo (giờ Asia/Ho_Chi_Minh) sớm hơn hôm nay trừ 180 ngày, kể cả thông báo Chưa đọc. Ví dụ thông báo tạo 12/11/2026 còn sau lần dọn 11/05/2027, bị xóa ở lần dọn 12/05/2027.
- Thông báo được làm mới vẫn tính từ thời điểm tạo.
- Khóa chống nhắc lặp giữ theo bản ghi nguồn; mốc nhắc hợp đồng theo RSD DH02.

### R11. Nội dung và hiển thị

- **Tiêu đề** một dòng, bắt đầu bằng việc cần biết (ví dụ “Hồ sơ TP-2611-0201 chưa có người phụ trách”). **Nội dung** tối đa 2 dòng trên bảng, theo mẫu ở cột Nội dung của Phụ lục A; dài hơn thì cắt bằng “…”, di chuột hiện đủ.
- **Danh sách mã** trong thông báo gộp hiện tối đa 10 mã theo thứ tự của nguồn (ngày khởi hành, ngày dùng, hoặc thứ tự trong thao tác), còn lại “và k … khác”.
- **Thời gian** theo thời điểm làm mới: dưới 1 phút “vừa xong”; dưới 60 phút “n phút trước”; dưới 24 giờ “n giờ trước”; còn lại “dd/mm hh:mm”, khác năm hiện tại thì “dd/mm/yyyy hh:mm”. Di chuột hiện đủ ngày giờ và thời điểm tạo khi khác thời điểm làm mới.
- **Dòng phụ:** tên màn nguồn (ví dụ “Hồ sơ Tour”, “Booking”), người gây ra (họ tên lúc tạo), thời gian; nhắc định kỳ ghi “Nhắc hằng ngày” thay người gây ra.
- Biểu tượng theo module của màn nguồn (Kinh doanh, Điều hành, Kế toán, HDV); không dùng màu đỏ (K6).

### R12. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Khi thiếu |
|---|---|---|---|
| Giờ chạy nhắc hằng ngày (một giờ cho mọi loại Định kỳ) | Tham số chung QT05 R17 (Quản trị) | R09 | 08:00 |
| Ngưỡng nhắc hồ sơ chưa giao | Tham số chung QT05 R17 | TB-DH07-03 | 7 ngày |
| Ngưỡng hợp đồng NCC sắp hết hạn | Tham số chung QT05 R17 | TB-DH02-02 | 30 ngày |
| Nhóm Điều hành (DH06), liên kết tài khoản và vai trò (QT01), phòng của vai trò tự tạo (QT02) | Điều hành, Quản trị hệ thống | R01 | Không có người nhận: E2.1 |
| Quyền xem màn đích (QT02) | Quản trị hệ thống | R07 | E1.2 |
| Phân công phục vụ (DH08.5), liên kết tài khoản ↔ nhân sự (QT01) | Điều hành, Quản trị hệ thống | TB-DH08-11, TB-DH08-12, TB-DH08-13; R01, R07 | Nhân sự không có tài khoản liên kết: không có người nhận (E2.1) |
| Chu kỳ cập nhật số (60 giây), thời hạn lưu (180 ngày), số dòng mỗi lần tải (20), số mã hiện trong thông báo gộp (10) | Tệp cấu hình hoặc dữ liệu khởi tạo (C2) | R08, R10, 2.3, R11 | Giá trị trong ngoặc |

### R13. Không gửi ra ngoài

Không có email nội bộ, tin nhắn, thông báo đẩy của trình duyệt hay bản tin tổng hợp gửi email (Q2). Thông báo chỉ có trong bảng thông báo của TOPAS và khối Thông báo chưa đọc của Việc của tôi (RSD CH03).

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa và dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|
| Thông báo | ID; mã loại (Phụ lục A); ID người nhận; tiêu đề, nội dung (bản chụp); màn nguồn; người gây ra (ID, họ tên lúc tạo; trống với Định kỳ); bản ghi chính (loại, ID, mã hiển thị); danh sách bản ghi kèm đích từng mã (thông báo gộp); đích chính (màn, tab hoặc bảng trượt, ID bản ghi hoặc bộ lọc); thời điểm tạo; thời điểm làm mới; số lần; thời điểm đọc; thời điểm Đã xử lý; ID thao tác gốc; nội dung trước lần làm mới gần nhất (để khôi phục khi Hoàn tác, R05) | Màn nguồn ghi trong giao dịch (R02) hoặc tác vụ nhắc (R09); người nhận ghi thời điểm đọc; tác vụ dọn xóa (R10) |
| Khóa chống nhắc lặp | Mã loại, ID bản ghi nguồn, ngày chạy (TB-DH07-03) | R04; CH02 sở hữu, trừ mốc nhắc hợp đồng |
| Mốc nhắc hợp đồng (đọc, ghi) | ID hợp đồng, loại mốc, ngày kết thúc lúc tính, ngày đã nhắc | RSD DH02 mục 5.1 sở hữu; tác vụ nhắc ghi trong giao dịch tạo thông báo |
| Lựa chọn Chưa đọc · Tất cả | ID người dùng, giá trị | Nhớ theo người dùng (U3) |
| Lần Đánh dấu tất cả đã đọc | ID người dùng, danh sách ID thông báo đã đánh dấu, thời điểm | Giữ 10 giây cho Hoàn tác (L1.4) |
| Nhật ký hệ thống của tác vụ | Thời điểm chạy, số bản ghi, số thông báo, lỗi; thông báo không có người nhận (E2.1) | R09; không phải QT03 |

### 5.2. Trường nhập

CH02 không có trường người dùng nhập. Người dùng chỉ chọn Chưa đọc hoặc Tất cả, bấm thông báo, Đánh dấu tất cả đã đọc và Hoàn tác.

### 5.3. Dữ liệu gửi ra ngoài

CH02 **không gửi** gì ra ngoài hệ thống (R13; Q2).

---

## 6. Tiêu chí nghiệm thu

Giờ trong điều kiện là giờ của nguồn thời gian điều khiển được trong môi trường test (như RSD CH01). “Nhận” nghĩa là có thông báo Chưa đọc mới (hoặc được làm mới) ở bảng của người đó sau lần cập nhật kế tiếp. Mã test `T-CH02-nn` khớp số AC.

**Dữ liệu mẫu chung.** Nhóm Điều hành: Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh. Nhóm Kế toán: Phạm Ngọc Lan. Hồ sơ TP-2611-0201 Mới tạo, chưa có người phụ trách, khởi hành 16/11/2026, Booking BK-2611-0159 Hiệu lực phụ trách Nguyễn Hoàng Nam. Hồ sơ TP-2611-0042 Mới tạo, phụ trách Trần Minh Anh, Booking BK-2610-0137 phụ trách Nguyễn Hoàng Nam. Ngưỡng nhắc hồ sơ chưa giao 7 ngày; ngưỡng hợp đồng 30 ngày; giờ chạy nhắc 08:00.

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được | Mã test |
|---|---|---|---|
| AC01 | Phạm Ngọc Lan có 3 thông báo Chưa đọc, 2 Đã đọc, 1 Đã xử lý; mở trang bất kỳ | Huy hiệu chuông ghi 3 (R08) | T-CH02-01 |
| AC02 | Lan có 120 thông báo Chưa đọc | Huy hiệu ghi “99+”; nhãn di chuột “Thông báo · 120 chưa đọc” | T-CH02-02 |
| AC03 | Một thông báo mới được tạo cho Lan lúc 09:00:00 khi thẻ của Lan đang hiện | Huy hiệu tăng 1 không muộn hơn 09:01:00, không tải lại trang (L1.1) | T-CH02-03 |
| AC04 | Lan bấm chuông lần đầu | Bảng mở ở Chưa đọc, 3 dòng, mới nhất ở trên, mỗi dòng có chấm xanh, tiêu đề đậm (W02) | T-CH02-04 |
| AC05 | Từ AC04 bấm Tất cả, đóng bảng, đăng xuất, đăng nhập lại, bấm chuông | Bảng mở ở Tất cả với 6 dòng; dòng Đã xử lý có nhãn xám; lựa chọn được nhớ (2.3, U3) | T-CH02-05 |
| AC06 | Lan có 45 thông báo; ở Tất cả bấm Xem thêm hai lần | Lần lượt hiện 20, 40, 45 dòng; sau lần hai không còn Xem thêm | T-CH02-06 |
| AC07 | Lan bấm thông báo TB-KD08-02 Chưa đọc của BK-2611-0156 | Thông báo Đã đọc; huy hiệu giảm 1; KT01.1 mở với bảng trượt của BK-2611-0156 (L1.3, R07) | T-CH02-07 |
| AC08 | Trần Minh Anh bấm TB-DH07-01 của TP-2611-0201 khi DH07 đang nhớ dạng Kanban, chip Của tôi bật; sau đó mở DH07 từ menu | Lần bấm thông báo: DH07 mở dạng Bảng, chip Của tôi tắt, chip Đang mở, Phụ trách Chưa có người phụ trách, ô tìm trống, Khởi hành, Quyết toán và Việc cần xử lý Tất cả; URL có đủ các giá trị này. Mở từ menu: DH07 ở Kanban, chip Của tôi bật (lựa chọn đã nhớ không đổi; R07; RSD DH07 R13) | T-CH02-08 |
| AC09 | Lê Thu Hà có TB-KD06-01 gộp 3 yêu cầu; bấm mã YC-2611-0032 trong nội dung | KD06 của YC-2611-0032 mở ở tab đích theo RSD KD06 R06; thông báo Đã đọc (W04) | T-CH02-09 |
| AC10 | Lê Thu Hà có TB-KD04-01 của khách KH-00412; khách bị xóa ở KD04; Hà bấm thông báo | Không chuyển trang; dưới dòng “Khách hàng KH-00412 không còn tồn tại.”; thông báo Đã đọc (E1.1) | T-CH02-10 |
| AC11 | Phạm Ngọc Lan có TB-DH08-07 của TP-2611-0038; Quản trị bỏ quyền xem DH08 của vai trò Kế toán ở QT02; Lan bấm thông báo | Không chuyển trang; “Bạn không có quyền xem Hồ sơ Tour.”; phản hồi không có dữ liệu hồ sơ; thông báo Đã đọc (E1.2) | T-CH02-11 |
| AC12 | Lan có 5 Chưa đọc; mở bảng lúc 09:00; lúc 09:00:30 có thêm 1 thông báo; 09:01 Lan bấm Đánh dấu tất cả đã đọc | 5 thông báo Đã đọc; thông báo đến 09:00:30 giữ Chưa đọc; huy hiệu ghi 1 sau lần cập nhật; thông báo ngắn “Đã đánh dấu 5 thông báo là đã đọc” có Hoàn tác (L1.4, E1.9) | T-CH02-12 |
| AC13 | Từ AC12, bấm Hoàn tác trong 10 giây | 5 thông báo trở lại Chưa đọc; huy hiệu 6 | T-CH02-13 |
| AC14 | Lan có 30 Chưa đọc (bảng mới tải 20); bấm Đánh dấu tất cả đã đọc | Cả 30 Đã đọc (L1.4) | T-CH02-14 |
| AC15 | Bảng mở; mất kết nối; bấm một thông báo | Không chuyển trang; thông báo ngắn đỏ “Chưa mở được thông báo. Thử lại.”; thông báo vẫn Chưa đọc (E1.5) | T-CH02-15 |
| AC16 | Máy chủ lỗi khi mở bảng | “Chưa tải được thông báo” và Thử lại; huy hiệu giữ số cũ (E1.4) | T-CH02-16 |
| AC17 | Tài khoản mới chưa từng nhận thông báo mở bảng ở Chưa đọc, rồi Tất cả | “Không có thông báo chưa đọc” kèm Xem tất cả; rồi “Chưa có thông báo” (E1.6) | T-CH02-17 |
| AC18 | Nguyễn Hoàng Nam bấm Lưu Booking BK-2611-0158 (phụ trách Nam) ở KD08 | Trong cùng giao dịch: Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh mỗi người có một TB-DH07-01; Nam không có TB-DH07-02 vì là người thao tác (R01, R02) | T-CH02-18 |
| AC19 | Như AC18 nhưng Lê Thu Hà bấm Lưu Booking của yêu cầu do Nam phụ trách | Nam có TB-DH07-02 mở DH08 của hồ sơ mới; Hà không có thông báo nào | T-CH02-19 |
| AC20 | Lưu Booking thất bại vì lỗi dựng sẵn khi tạo hồ sơ (RSD KD08 AC15) | Không có thông báo nào được tạo cho ai (R02, E2.4) | T-CH02-20 |
| AC21 | Trần Minh Anh giao TP-2611-0201 cho chính mình ở DH07 | Không ai có TB-DH07-04; TB-DH07-01 và TB-DH07-03 của TP-2611-0201 ở mọi người nhận chuyển Đã xử lý; huy hiệu của Lê Quang Huy, Vũ Đức Minh giảm tương ứng (E2.2, R06) | T-CH02-21 |
| AC22 | Trần Minh Anh giao hàng loạt 4 hồ sơ cho Lê Quang Huy ở DH07, 1 dòng bị bỏ qua vì đổi ở phiên khác | Huy có một TB-DH07-04 liệt kê 3 Tour Code; không có mã của dòng bị bỏ qua (R03, E2.7) | T-CH02-22 |
| AC23 | Trần Minh Anh đổi người phụ trách TP-2611-0042 từ mình sang Lê Quang Huy ở DH08.1 | Huy có TB-DH07-04; Minh Anh không có TB-DH07-05 vì là người thao tác | T-CH02-23 |
| AC24 | Lê Quang Huy đổi người phụ trách TP-2611-0042 từ Trần Minh Anh sang Vũ Đức Minh ở DH07 | Vũ Đức Minh có TB-DH07-04; Trần Minh Anh có TB-DH07-05 | T-CH02-24 |
| AC25 | Lê Quang Huy (Điều hành) tắt Nhận phân công của Trần Minh Anh, người đang phụ trách TP-2611-0047, TP-2612-0003 và có 2 công việc ở TP-2611-0038 (phụ trách Vũ Đức Minh) | Vũ Đức Minh có một TB-DH06-01 liệt kê TP-2611-0047, TP-2612-0003 và một TB-DH06-02 liệt kê 2 công việc của TP-2611-0038; Huy (người thao tác) và Minh Anh (người bị tắt) không có thông báo nào (RSD DH06 R05) | T-CH02-25 |
| AC26 | Từ AC25, Huy bấm Hoàn tác trong 10 giây | Mọi thông báo của AC25 bị gỡ, kể cả khi Vũ Đức Minh đã đọc; huy hiệu của Minh giảm (L2.2, R05) | T-CH02-26 |
| AC27 | Kinh doanh Nam sửa lịch thanh toán BK-2611-0156 ba lần, lần ba lệch giá trị Booking kèm lý do; Lan chưa đọc | Lan có một dòng TB-KD08-03 “· 3 lần”, nội dung là lần lưu thứ ba có số chênh và lý do; thời điểm là lần lưu thứ ba (R04) | T-CH02-27 |
| AC28 | Như AC27 nhưng Lan đọc sau lần sửa thứ nhất | Lan có hai dòng: một Đã đọc (lần 1), một Chưa đọc “· 2 lần” (lần 2, 3) | T-CH02-28 |
| AC29 | TP-2611-0042 (phụ trách Trần Minh Anh) có thay đổi chương trình v4 Chờ áp dụng, Minh Anh có TB-KD08-01 của v4 chưa đọc; Nam hủy BK-2610-0137 ở KD08 | Trần Minh Anh có TB-KD08-04; Lan có TB-KD08-05; Nam không có TB-KD08-06, không có TB-DH08-06 vì là người thao tác; v4 chuyển Không áp dụng và TB-KD08-01 của Minh Anh chuyển Đã xử lý (R01, R06) | T-CH02-29 |
| AC30 | Như AC29 nhưng Lê Thu Hà hủy Booking của Nam | Nam có TB-KD08-06 và TB-DH08-06 | T-CH02-30 |
| AC31 | Lê Thu Hà hủy BK-2611-0159 (phụ trách Nguyễn Hoàng Nam) của hồ sơ TP-2611-0201 (chưa có người phụ trách) ở KD08 | Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh mỗi người có đúng một TB-KD08-04 (nhóm Điều hành nhận thay, E2.3); Nam có TB-KD08-06; Lan có TB-KD08-05; Hà không có thông báo nào | T-CH02-31 |
| AC32 | Nam bấm Chuyển sang Điều hành v4 ở KD08 cho BK-2610-0137; sau đó Trần Minh Anh áp dụng ở DH08 | Minh Anh có TB-KD08-01 lúc chuyển; khi áp dụng, TB-KD08-01 chuyển Đã xử lý và Nam có TB-DH08-05 | T-CH02-32 |
| AC33 | Trần Minh Anh gửi yêu cầu đổi lịch trình cho hạng mục KS Huế 4★ của TP-2611-0042, hạn phản hồi 16/11/2026 | Nam có TB-DH08-01; bấm thân mở KD08.1 của BK-2610-0137 có banner yêu cầu (W21 của KD08); bấm liên kết Xem ở hồ sơ Tour mở DH08.3 kèm bảng trượt yêu cầu chỉ xem | T-CH02-33 |
| AC34 | Từ AC33, không ai xử lý; đặt giờ 17/11/2026 08:00 rồi 18/11/2026 08:00 | Lúc 17/11 08:00 Nam có một TB-DH08-03; lúc 18/11 không có thêm (R04, R09; RSD DH08 AC41) | T-CH02-34 |
| AC35 | Từ AC33, ngày 15/11 Trần Minh Anh bấm Nhắc lại hai lần khi Nam chưa đọc lần đầu | Nam có một TB-DH08-02 “· 2 lần” | T-CH02-35 |
| AC36 | Từ AC33, Trần Minh Anh rút yêu cầu kèm lý do | Nam có TB-DH08-04 ghi lý do; TB-DH08-01 của yêu cầu đó chuyển Đã xử lý (R06) | T-CH02-36 |
| AC37 | Ngày 12/11/2026 08:00, TP-2611-0201 (khởi hành 16/11) chưa có người phụ trách | Mỗi người nhóm Điều hành có một TB-DH07-03 “khởi hành sau 4 ngày” (L3.1) | T-CH02-37 |
| AC38 | Từ AC37, Lê Quang Huy đọc lúc 09:00; đặt giờ 13/11/2026 08:00 | Mỗi người vẫn chỉ có một dòng TB-DH07-03 cho TP-2611-0201, nội dung “khởi hành sau 3 ngày”, “· 2 lần”; dòng của Huy trở lại Chưa đọc (R04) | T-CH02-38 |
| AC39 | Từ AC38, 10:00 ngày 13/11 Vũ Đức Minh giao TP-2611-0201 cho Lê Quang Huy; đặt giờ 14/11/2026 08:00 | Lúc giao: TB-DH07-03 của mọi người Đã xử lý; Huy có TB-DH07-04. Ngày 14/11 không có TB-DH07-03 nào cho hồ sơ này | T-CH02-39 |
| AC40 | Tác vụ 08:00 ngày 12/11 chạy hai lần (chạy bù sau khởi động lại) | Không có thông báo trùng; TB-DH07-03 không tăng số lần ở lần chạy thứ hai (E3.2) | T-CH02-40 |
| AC41 | Máy chủ dừng từ 07:00 đến 10:00 ngày 12/11 | Tác vụ chạy lúc khởi động lại 10:00; kết quả như AC37 (E3.1) | T-CH02-41 |
| AC42 | 08:00 ngày hợp đồng của NCC Đang dùng Mekong Eyes Cruise còn đúng 30 ngày, không có hợp đồng kế tiếp | Mỗi người nhóm Điều hành có một TB-DH02-02; bấm mở DH03.2 của NCC; ngày hôm sau không nhắc lại (RSD DH02 AC29, AC30) | T-CH02-42 |
| AC43 | Từ AC42, Điều hành thêm hợp đồng kế tiếp ở DH03.2 | TB-DH02-02 của mọi người nhận chuyển Đã xử lý; không tính vào số chưa đọc (R06) | T-CH02-43 |
| AC44 | 08:00 có 7 NCC cùng vào ngưỡng | Mỗi người nhóm Điều hành có một thông báo “7 nhà cung cấp có hợp đồng sắp hết hạn”, mở DH02 chip Cần xử lý; chân bảng có liên kết Xem nhà cung cấp cần xử lý (R03) | T-CH02-44 |
| AC45 | Nhóm Điều hành rỗng (mọi nhân sự nhóm Điều hành đều Ngừng dùng nhận phân công) lúc 08:00 có hợp đồng vào ngưỡng | Không có thông báo; nhật ký hệ thống ghi; không ghi mốc nhắc; khi có người đủ điều kiện, lần chạy kế tiếp nhắc (E2.1, E3.4) | T-CH02-45 |
| AC46 | Lê Quang Huy (Điều hành) ngừng dùng NH Phố Hội đang có hạng mục Cần đặt ở TP-2611-0042 (phụ trách Trần Minh Anh) và TP-2611-0201 (chưa có người phụ trách) | Trần Minh Anh có một TB-DH02-01 liệt kê hai hồ sơ (vừa là phụ trách TP-2611-0042 vừa thuộc nhóm nhận thay cho TP-2611-0201); Vũ Đức Minh có một TB-DH02-01 cho TP-2611-0201; Huy không có (R01, R03) | T-CH02-46 |
| AC47 | Từ AC46, Huy bấm Hoàn tác trên thông báo ngắn | Các TB-DH02-01 của AC46 bị gỡ (R05) | T-CH02-47 |
| AC48 | Quản trị chuyển hàng loạt 11 khách của Lê Thu Hà (Đang hoạt động) cho Nguyễn Hoàng Nam | Nam có một TB-KD04-01 “Bạn được giao 11 khách hàng từ Lê Thu Hà”, hiện 10 mã và “và 1 khách hàng khác”; bấm thân mở KD03 với chip Của tôi bật; Hà có một TB-KD04-02 (R03, R11) | T-CH02-48 |
| AC49 | Như AC48 nhưng tài khoản Lê Thu Hà Bị khóa | Hà không có thông báo (R01) | T-CH02-49 |
| AC50 | Điều hành Lưu và chuyển Kế toán bước 1 của TP-2611-0038; lần khác Đóng Tour TP-2611-0051 khi bước 1 chưa chuyển | Lan có TB-DH08-07 cho TP-2611-0038 và TB-DH08-09 cho TP-2611-0051, cả hai mở DH08.8 | T-CH02-50 |
| AC51 | Chạy lần lượt kịch bản của AC18, AC25, AC27, AC31, AC33, AC34, AC37, AC42, AC48, AC50, AC57 (mẫu đại diện cố định: đủ ba nhóm người nhận Điều hành, Kinh doanh, Kế toán; cả loại Trong giao dịch và Định kỳ) với hộp thư thử (mailpit) trống | Mọi thông báo mong đợi của các AC đó có trong bảng thông báo; hộp thư thử nhận 0 email; hàng đợi gửi email không có việc nào được thêm trong lúc chạy (R13) | T-CH02-51 |
| AC52 | Thông báo tạo ngày 12/11/2026; đặt giờ 11/05/2027 08:00 rồi 12/05/2027 08:00 | Còn ở Tất cả sau lần chạy 11/05/2027; không còn sau lần chạy 12/05/2027 (180 ngày, R10) | T-CH02-52 |
| AC53 | Lan gọi thẳng API đánh dấu đã đọc một thông báo của Nam | Bị từ chối; thông báo của Nam giữ nguyên (1.4) | T-CH02-53 |
| AC54 | Lan bấm cùng một thông báo ba lần liên tiếp | Một lần đánh dấu, một lần chuyển trang; huy hiệu giảm 1 (E1.11) | T-CH02-54 |
| AC55 | Lê Quang Huy ngừng dùng hàng loạt NH Phố Hội và Xe Sơn Trà ở DH02, cả hai có hạng mục Cần đặt ở TP-2611-0042 (phụ trách Trần Minh Anh); Minh Anh có một TB-DH02-01 liệt kê hai NCC và đã đọc. Trong 10 giây, Vũ Đức Minh sửa email đặt dịch vụ của Xe Sơn Trà ở DH03.1; Huy bấm Hoàn tác trên banner | NH Phố Hội về Đang dùng; Xe Sơn Trà giữ Ngừng dùng, banner ghi 1 NCC không hoàn tác được (CGD U2.06). TB-DH02-01 của Minh Anh vẫn còn, nội dung chỉ còn Xe Sơn Trà và hạng mục của nó, không còn NH Phố Hội; thời điểm tạo, thời điểm làm mới và trạng thái Đã đọc không đổi (R05) | T-CH02-55 |
| AC56 | NCC Mekong Eyes Cruise Đang dùng; hợp đồng HĐ-01 kết thúc 01/12/2026; hợp đồng HĐ-02 bắt đầu 05/12/2026 đã thêm từ trước; không ai thao tác; đặt giờ 02/12/2026 08:00, rồi 04/12/2026 12:00, rồi 05/12/2026 00:01 | 02/12: mỗi người nhóm Điều hành có một TB-DH02-03 của HĐ-01, Chưa đọc. 04/12: vẫn Chưa đọc, tính vào số chưa đọc. 05/12 00:01: thông báo có nhãn Đã xử lý, không tính vào số chưa đọc, không hiện ở Chưa đọc; không có lần ghi dữ liệu nào vào thông báo (R06, Q6) | T-CH02-56 |
| AC57 | TP-2611-0042 Đang diễn ra từ 16/11/2026; 18/11/2026 10:00 Nam Chuyển sang Điều hành v5 của BK-2610-0137 có dòng đổi dịch vụ ngày 17/11; Trần Minh Anh chưa áp dụng; đặt giờ 19/11/2026 08:00, rồi 20/11/2026 08:00; 20/11 10:00 Nam Chuyển sang Điều hành v6 | 18/11: Nam không có thông báo nào; Minh Anh có TB-KD08-01; W09 của DH08 hiện dòng 17/11 “Không áp dụng được, ngày đã qua”, Áp dụng thay đổi khóa. 19/11 08:00: Nam có đúng một TB-DH08-10 của v5, bấm mở KD08.1. 20/11 08:00: không có thêm. 20/11 10:00: v5 Đã thay thế, TB-DH08-10 của v5 chuyển Đã xử lý (R04, R06, R09; RSD DH08 E1.9) | T-CH02-57 |
| AC58 | Trần Minh Anh (phụ trách TP-2611-0042) phân công NS-015 làm HDV điểm ở DH08.5 | Ngô Thị Mai có một TB-DH08-11 có Tour Code, tên đoàn, vai trò phục vụ, ngày; bấm mở HD01 chi tiết TP-2611-0042; Minh Anh không có thông báo (R01) | T-CH02-58 |
| AC59 | Minh Anh phân công Hồ Quang Vinh (NS-014, Cộng tác viên chưa có tài khoản) ở TP-2611-0042 | Thao tác thành công; không có thông báo nào; nhật ký hệ thống ghi không có người nhận (E2.1) | T-CH02-59 |
| AC60 | Sau AC58, Minh Anh gỡ phân công của NS-015; Mai bấm TB-DH08-11 cũ, rồi TB-DH08-12 | Mai có TB-DH08-12 ghi “không còn xem được hồ sơ này”. Bấm TB-DH08-11: không chuyển trang, dưới dòng “Không tìm thấy TP-2611-0042”, phản hồi không có dữ liệu hồ sơ. Bấm TB-DH08-12: mở danh sách Tour của tôi (E1.14, R07) | T-CH02-60 |
| AC61 | Mai (phân công ở TP-2611-0042) ghi một sự cố ở HD01 | Trần Minh Anh có một TB-HD01-01, bấm mở DH08.6 của hồ sơ; Mai, Lê Quang Huy, Vũ Đức Minh không có thông báo (R01) | T-CH02-61 |
| AC62 | Mai cũng được phân công ở TP-2611-0201 (chưa có người phụ trách); Mai ghi một sự cố ở hồ sơ đó | Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh mỗi người có một TB-HD01-01 (nhóm Điều hành nhận thay, E2.3) | T-CH02-62 |
| AC63 | Đặt giờ 26/11/2026 09:00; TP-2611-0042 Đã kết thúc (Điều hành đã bấm Kết thúc Tour), có dịch vụ đã xác nhận; Minh Anh không có TB-HD01-02 Chưa đọc nào của hồ sơ. Mai ghi một chi phí phát sinh ở HD01 cho TP-2611-0042, sửa khoản đó, rồi ghi chi phí thực tế của một dịch vụ; Minh Anh chưa đọc | Minh Anh có một dòng TB-HD01-02 “· 3 lần”, nội dung là lần ghi chi phí thực tế, bấm mở DH08.8; nội dung không có số tiền (R04, 1.4) | T-CH02-63 |
| AC64 | Mai chỉ có vai trò HDV. Trong ngày: một Booking mới tạo hồ sơ Tour, một Booking bị hủy, một lịch thanh toán đổi, Mai được phân công ở một hồ sơ khác | Mai chỉ có TB-DH08-11 của lần phân công; không có TB-DH07-01, TB-KD08-02, TB-KD08-04, TB-KD08-05 hay loại nào khác (R01) | T-CH02-64 |
| AC65 | Mai mở HD01 ở vùng hiển thị 390 × 844, chạm chuông, chạm một TB-DH08-11 Chưa đọc | Bảng thông báo mở toàn màn hình có Chưa đọc · Tất cả; chạm thông báo mở HD01 của hồ sơ đó; số trên chuông giảm 1 (2.1, L1.3; CGD K7.08) | T-CH02-65 |
| AC66 | Mai (NS-015) có 2 phân công ở TP-2611-0042 (Mới tạo, Booking Hiệu lực); Trần Minh Anh, phụ trách và cũng có phân công Trưởng đoàn ở hồ sơ, áp dụng thay đổi chương trình v5 ở DH08 lúc 12/11/2026 09:00. Sau đó đặt giờ 26/11/2026 09:00, hồ sơ Đã kết thúc (đã qua Bắt đầu Tour và Kết thúc Tour), Minh Anh bấm Đóng Tour | Lúc áp dụng: Mai có đúng một TB-DH08-13 “Chương trình TP-2611-0042 đã đổi sang v5 · …”, không có giá; bấm mở HD01 tab Chương trình; Minh Anh không có TB-DH08-13 (người thao tác); Nam có TB-DH08-05. Lúc Đóng Tour: Mai không có thông báo nào (R01, R03, R07, Phụ lục A) | T-CH02-66 |
| AC67 | Minh Anh sửa phân công của NS-015 ở TP-2611-0042 từ HDV điểm 18/11 sang HDV suốt tuyến 18–25/11 | Mai có một TB-DH08-11 ghi “Phân công của bạn ở TP-2611-0042 đã đổi · HDV suốt tuyến · 18/11–25/11”, mở HD01 chi tiết hồ sơ (Phụ lục A; RSD DH08 R12) | T-CH02-67 |
| AC68 | Mai ghi sự cố có chi phí 1.500.000 ₫ ở HD01; Minh Anh chưa đọc; Mai nhập kết quả cho sự cố đó | Minh Anh có một dòng TB-HD01-01 “· 2 lần”, nội dung “HDV Ngô Thị Mai cập nhật kết quả sự cố ở TP-2611-0042 · …”; không dòng nào có “1.500.000” hay ký hiệu tiền; không có TB-HD01-02 (R04, 1.4, Phụ lục A) | T-CH02-68 |
| AC69 | Tài khoản Lê Quang Huy (chỉ Điều hành, không có `HD01.xem`) liên kết nhân sự Nội bộ được phân công Trưởng đoàn ở TP-2611-0042; Minh Anh áp dụng thay đổi v5; Huy bấm TB-DH08-13, rồi bấm TB-DH08-11 cũ | TB-DH08-13 mở DH08.1 của TP-2611-0042; TB-DH08-11 mở DH08.5 của hồ sơ (R07; RSD DH08 R12, R19) | T-CH02-69 |

---

## Phụ lục A. Danh mục loại thông báo

Cột **Sinh**: “Trong giao dịch” là tạo cùng giao dịch với thao tác gốc (R02); “Định kỳ” là tác vụ nhắc hằng ngày (R09). Mọi loại áp R01 (bỏ người thao tác, chỉ tài khoản Đang hoạt động), R03, R04. Tự Đã xử lý ở R06; gỡ khi Hoàn tác ở R05. Nội dung là mẫu; `<…>` là dữ liệu điền lúc tạo.

### A.1. Điều hành và NCC

| Mã | Nguồn | Sự kiện | Người nhận | Nội dung ngắn | Đích khi bấm | Sinh |
|---|---|---|---|---|---|---|
| TB-DH02-01 | RSD DH02 R04, R06, L2.2; DH03 R05; DH08 R05 | NCC chuyển Ngừng dùng (công tắc trên dòng DH02, hàng loạt, phần đầu DH03) khi có hạng mục chưa gửi NCC (Cần đặt, Cần đặt lại, Chờ Kinh doanh) ở hồ sơ chưa đóng | Điều hành phụ trách mỗi hồ sơ đó (R01, nhận thay khi chưa giao); gộp theo người nhận: các NCC, hồ sơ, hạng mục | “NCC <tên> ngừng dùng · n hạng mục chưa gửi cần chọn NCC khác ở <Tour Code…>” | DH08.3 của hồ sơ; mỗi Tour Code mở DH08.3 của hồ sơ đó | Trong giao dịch |
| TB-DH02-02 | RSD DH02 R08, L3.1 | Hợp đồng hiện hành của NCC Đang dùng vào ngưỡng sắp hết hạn lần đầu, không có hợp đồng kế tiếp | Nhóm Điều hành | “Hợp đồng <số> của <NCC> hết hạn <dd/mm/yyyy>, còn n ngày” | DH03.2 của NCC. Gộp trên 5 NCC: “n nhà cung cấp có hợp đồng sắp hết hạn”, DH02 chip Cần xử lý | Định kỳ |
| TB-DH02-03 | RSD DH02 R08, L3.1 | Ngày đầu tiên sau ngày kết thúc mà NCC Đang dùng không có hợp đồng chứa hôm nay | Nhóm Điều hành | “Hợp đồng <số> của <NCC> đã hết hạn <dd/mm/yyyy> · NCC vẫn Đang dùng” | DH03.2 của NCC. Gộp trên 5 NCC: “n nhà cung cấp có hợp đồng đã hết hạn”, DH02 chip Cần xử lý | Định kỳ |
| TB-DH06-01 | RSD DH06 R05, L4.2 | Tắt Nhận phân công của nhân sự đang phụ trách hồ sơ Tour chưa đóng | Nhóm Điều hành, trừ người bị tắt | “<Họ tên> không nhận phân công · đang phụ trách n hồ sơ cần giao lại: <Tour Code…>” | DH07 dạng Bảng, chip Của tôi tắt, chip Đang mở, Phụ trách = người bị tắt; mỗi Tour Code mở DH08 (tab theo DH07 R10) | Trong giao dịch |
| TB-DH06-02 | RSD DH06 R05, L4.2 | Như trên, khi người bị tắt có công việc checklist chưa hoàn tất (DH08.2) hoặc phân công phục vụ Tour từ hôm nay (DH08.5) ở hồ sơ chưa đóng | Điều hành phụ trách từng hồ sơ đó; người đã nhận TB-DH06-01 có cùng hồ sơ thì không nhận cho hồ sơ đó | “<Họ tên> không nhận phân công · còn n việc, k phân công phục vụ ở <Tour Code…>” | DH08.2 của hồ sơ (DH08.5 khi hồ sơ chỉ có phân công phục vụ); mỗi Tour Code mở như vậy | Trong giao dịch |
| TB-DH07-01 | RSD DH07 R09, R01; KD08 R08 | Hồ sơ Tour tự tạo khi Booking được lưu | Nhóm Điều hành | “Hồ sơ <Tour Code> mới từ <mã Booking> · <khách> · khởi hành <dd/mm> · Chưa có người phụ trách” | DH07 dạng Bảng, chip Của tôi tắt, chip Đang mở, Phụ trách = Chưa có người phụ trách | Trong giao dịch |
| TB-DH07-02 | RSD DH07 R09 | Như trên | Kinh doanh phụ trách Booking | “Đã tạo hồ sơ Tour <Tour Code> cho <mã Booking>” | DH08 của hồ sơ (tab theo DH07 R10) | Trong giao dịch |
| TB-DH07-03 | RSD DH07 R09, L4.3; QT05 R17 | Hồ sơ Mới tạo chưa có người phụ trách, khởi hành trong ngưỡng nhắc | Nhóm Điều hành | “Hồ sơ <Tour Code> chưa có người phụ trách · khởi hành sau n ngày (<dd/mm>) · <khách>”; đã qua ngày khởi hành thì “đã khởi hành <dd/mm>” | DH07 dạng Bảng, chip Của tôi tắt, chip Đang mở, Phụ trách = Chưa có người phụ trách | Định kỳ, mỗi ngày làm mới (R04) |
| TB-DH07-04 | RSD DH07 R08, L4.1, L4.2; DH08 L1.2, R16 (Mở lại có chọn người mới) | Giao hoặc đổi người phụ trách hồ sơ (tại chỗ, hàng loạt, thẻ Kanban ở DH07; Thông tin điều hành ở DH08.1; Mở lại Tour) | Người được giao; gộp hàng loạt | “Bạn được giao phụ trách <Tour Code…> · <khách> · khởi hành <dd/mm>” | DH08 của hồ sơ (tab theo DH07 R10); mỗi Tour Code mở như vậy | Trong giao dịch |
| TB-DH07-05 | RSD DH07 R08; áp cả DH08 L1.2 | Đổi người phụ trách hồ sơ sang người khác | Người phụ trách cũ; gộp hàng loạt | “<Tour Code…> đã chuyển cho <người mới>” | DH08 của hồ sơ (tab theo DH07 R10); mỗi Tour Code mở như vậy | Trong giao dịch |

### A.2. Hồ sơ Tour và Kinh doanh

| Mã | Nguồn | Sự kiện | Người nhận | Nội dung ngắn | Đích khi bấm | Sinh |
|---|---|---|---|---|---|---|
| TB-DH08-01 | RSD DH08 R18, L3.12 | Điều hành gửi yêu cầu đổi lịch trình (Báo Kinh doanh) | Kinh doanh phụ trách Booking | “Điều hành yêu cầu đổi lịch trình · <Tour Code> · <dịch vụ> ngày <dd/mm> · hạn phản hồi <dd/mm>” | KD08.1 của Booking có banner yêu cầu (W21 của KD08); liên kết phụ “Xem ở hồ sơ Tour”: DH08.3 kèm bảng trượt yêu cầu, chỉ xem | Trong giao dịch |
| TB-DH08-02 | RSD DH08 L3.12 bước 2, E3.13 | Điều hành bấm Nhắc lại trong Xem yêu cầu | Kinh doanh phụ trách Booking lúc nhắc | “Nhắc lại: yêu cầu đổi lịch trình <Tour Code> · hạn <dd/mm>” | Như TB-DH08-01 | Trong giao dịch |
| TB-DH08-03 | RSD DH08 E3.11, AC41 | Yêu cầu đổi lịch trình còn Chờ Kinh doanh sau ngày hạn phản hồi | Kinh doanh phụ trách Booking lúc chạy | “Quá hạn phản hồi yêu cầu đổi lịch trình <Tour Code> · hạn <dd/mm>” | Như TB-DH08-01 | Định kỳ, một lần |
| TB-DH08-04 | RSD DH08 E3.14, E3.21 | Yêu cầu đổi lịch trình chuyển Đã rút do Điều hành rút, hoặc do hồ sơ chuyển Đã kết thúc | Kinh doanh phụ trách Booking | “Yêu cầu đổi lịch trình <Tour Code> · <dịch vụ> đã rút · <lý do>” | KD08.1 của Booking | Trong giao dịch |
| TB-DH08-05 | RSD DH08 R19, L1.5 kết quả | Điều hành áp dụng thay đổi chương trình | Kinh doanh phụ trách Booking | “Điều hành đã áp dụng thay đổi chương trình v<N> cho <Tour Code>” | KD08.1 của Booking (khối Thay đổi chương trình) | Trong giao dịch |
| TB-DH08-06 | RSD DH08 E1.11, R19 | Thay đổi chương trình Chờ áp dụng chuyển Không áp dụng vì Booking đã hủy hoặc hồ sơ chuyển Đã kết thúc | Kinh doanh phụ trách Booking | “Thay đổi chương trình v<N> của <Tour Code> không áp dụng · <lý do>” | KD08.1 của Booking | Trong giao dịch |
| TB-DH08-07 | RSD DH08 L8.1 bước 2 | Điều hành bấm Lưu và chuyển Kế toán ở bước 1 tab Quyết toán | Nhóm Kế toán | “Chi phí thực tế <Tour Code> đã chuyển Kế toán” | DH08.8 của hồ sơ | Trong giao dịch |
| TB-DH08-08 | RSD DH08 L8.1 bước 2, R20; RSD HD01 L4.3 | Điều hành hoặc HDV sửa (kể cả HDV xóa số của mình ở HD01), hoặc Điều hành bỏ số HDV, chi phí thực tế khi hồ sơ đã có phiên bản quyết toán Hiện hành | Nhóm Kế toán | “Chi phí thực tế <Tour Code> đã sửa sau quyết toán v<n> · cần xem lại quyết toán” | DH08.8 của hồ sơ | Trong giao dịch |
| TB-DH08-09 | RSD DH08 R16, E8.2 | Đóng Tour khi bước 1 chưa chuyển Kế toán (Chuyển khi đóng Tour) | Nhóm Kế toán | “<Tour Code> đã đóng · chi phí thực tế chuyển khi đóng Tour” | DH08.8 của hồ sơ | Trong giao dịch |
| TB-DH08-10 | RSD DH08 E1.9, R19 | Thay đổi chương trình Chờ áp dụng của hồ sơ Đang diễn ra có dòng chạm ngày trước hôm nay nên không áp dụng được (R09) | Kinh doanh phụ trách Booking lúc chạy | “Thay đổi chương trình v<N> của <Tour Code> không áp dụng được · chạm ngày đã qua <dd/mm…> · cần điều chỉnh và chuyển phiên bản mới” | KD08.1 của Booking (khối Thay đổi chương trình) | Định kỳ, một lần |
| TB-KD04-01 | RSD KD03-KD04 R04, L4.1, L4.2 | Chuyển người phụ trách khách (một khách hoặc hàng loạt) | Người phụ trách mới; gộp hàng loạt | “Bạn được giao n khách hàng từ <người cũ>: <mã…> · <ghi chú bàn giao>” | Một khách: KD04 của khách. Nhiều khách: KD03 chip Của tôi bật (RSD KD03-KD04 R04; CGD K2.06); mỗi mã mở KD04 | Trong giao dịch |
| TB-KD04-02 | RSD KD03-KD04 R04 | Như trên, người chuyển không phải người cũ | Người phụ trách cũ; gộp hàng loạt | “n khách hàng của bạn đã chuyển cho <người mới>: <mã…>” | KD04 của khách đầu tiên; mỗi mã mở KD04 | Trong giao dịch |
| TB-KD06-01 | RSD KD05 R08; KD06 R22, R23 | Chuyển người phụ trách yêu cầu Tour Đang xử lý (KD05 hàng loạt, KD06), hoặc Mở lại yêu cầu có đổi người phụ trách | Người phụ trách mới; gộp hàng loạt | “Bạn được giao n yêu cầu Tour từ <người cũ>: <mã…>” | KD06 của yêu cầu (tab đích theo RSD KD06 R06); mỗi mã mở KD06 | Trong giao dịch |
| TB-KD06-02 | RSD KD05 R08; KD06 R22, R23 | Như trên, người chuyển không phải người cũ | Người phụ trách cũ; gộp hàng loạt | “n yêu cầu Tour của bạn đã chuyển cho <người mới>: <mã…>” | KD06 của yêu cầu đầu tiên; mỗi mã mở KD06 | Trong giao dịch |
| TB-KD08-01 | RSD KD08 R09, L1.6; DH08 L1.5 bước 1, R19 | Kinh doanh bấm Chuyển sang Điều hành, tạo thay đổi chương trình Chờ áp dụng | Điều hành phụ trách hồ sơ | “<Tour Code> có thay đổi chương trình v<N> từ <mã Booking> · n thay đổi · chờ áp dụng” | DH08.1 của hồ sơ (banner W08 của DH08) | Trong giao dịch |
| TB-KD08-02 | RSD KD08 R07, L2.1, L2.3; KT01 L1.6, R05 | Lưu lịch thanh toán (lần đầu hoặc sửa), tổng các đợt khớp giá trị Booking | Nhóm Kế toán | “Lịch thanh toán <mã Booking> đã <lập, sửa> · <đợt đổi: cũ → mới>” | KT01.1, bảng trượt của Booking (RSD KT01 mục 1.2) | Trong giao dịch |
| TB-KD08-03 | RSD KD08 R06, L2.2; KT01 mục 1.2 | Như trên, tổng các đợt lệch giá trị Booking, lưu kèm lý do (thay cho TB-KD08-02 trong lần lưu đó) | Nhóm Kế toán | “Lịch thanh toán <mã Booking> lệch giá trị Booking · <thiếu, thừa> <số, loại tiền> · <lý do>” | KT01.1, bảng trượt của Booking | Trong giao dịch |
| TB-KD08-04 | RSD KD08 R10, L1.3; DH08 R14 | Hủy Booking | Điều hành phụ trách hồ sơ | “<mã Booking> đã hủy · <lý do> · <Tour Code> cần gửi hủy NCC” | DH08.3 của hồ sơ | Trong giao dịch |
| TB-KD08-05 | RSD KD08 R10; KT01 R07, AC10 | Hủy Booking | Nhóm Kế toán | “<mã Booking> đã hủy · chờ điều chỉnh công nợ” | KT01.1, bảng trượt của Booking | Trong giao dịch |
| TB-KD08-06 | RSD KD08 mục 5.3 (“yêu cầu Tour đã hủy theo Booking”), R10 | Hủy Booking làm yêu cầu Tour tự Đã hủy | Kinh doanh phụ trách Booking | “<mã Booking> đã hủy bởi <người hủy> · yêu cầu <mã yêu cầu> tự chuyển Đã hủy” | KD08.1 của Booking | Trong giao dịch |
| TB-KD08-07 | RSD KD08 R11, L1.4 | Chuyển người phụ trách Booking (yêu cầu Tour chuyển theo) | Người phụ trách mới | “Bạn được giao Booking <mã Booking> và yêu cầu <mã yêu cầu> từ <người cũ>” | KD08.1 của Booking | Trong giao dịch |
| TB-KD08-08 | RSD KD08 R11 | Như trên, người chuyển không phải người cũ | Người phụ trách cũ | “<mã Booking> đã chuyển cho <người mới>” | KD08.1 của Booking | Trong giao dịch |

### A.3. HDV và phân công phục vụ (bổ sung 12/11/2026)

| Mã | Nguồn | Sự kiện | Người nhận | Nội dung ngắn | Đích khi bấm | Sinh |
|---|---|---|---|---|---|---|
| TB-HD01-01 | RSD HD01 R06; BOI-CANH “Vai trò HDV” (cập nhật kết quả: mặc định Q3 sau đoạn “Người dùng chốt thêm”) | HDV thêm một sự cố ở HD01 (mục có nhãn Do HDV ghi); hoặc HDV cập nhật kết quả sự cố của mình ở HD01 (lần lưu làm ô Kết quả đổi giá trị, RSD HD01 L3.3). Bản ghi chính là sự cố: ghi rồi cập nhật kết quả khi chưa đọc thì làm mới (R04) | Điều hành phụ trách hồ sơ (R01, nhóm Điều hành nhận thay khi chưa giao hoặc Ngừng hoạt động) | Ghi mới: “Sự cố ở <Tour Code> do HDV <họ tên> ghi · <nội dung, 80 ký tự đầu> · <dd/mm hh:mm>”, có chi phí thì thêm “· có chi phí phát sinh”. Cập nhật kết quả: “HDV <họ tên> cập nhật kết quả sự cố ở <Tour Code> · <kết quả, 80 ký tự đầu>”. Không có số tiền (1.4) | DH08.6 của hồ sơ (ghi mới: lọc Sự cố đang xử lý; cập nhật kết quả: Tất cả) | Trong giao dịch |
| TB-HD01-02 | RSD HD01; BOI-CANH “Vai trò HDV” | HDV ghi, sửa hoặc xóa một khoản chi phí phát sinh hoặc một dòng chi phí thực tế ở HD01; trừ khoản ghi cùng sự cố mới (đã nằm trong TB-HD01-01) (RSD HD01 R06). Bản ghi chính là hồ sơ Tour (R04): mọi lần ghi, sửa, xóa chi phí phát sinh hoặc chi phí thực tế của cùng hồ sơ khi người nhận chưa đọc gộp một dòng “· n lần”, nội dung và đích theo lần ghi gần nhất (AC63; RSD HD01 AC28) | Điều hành phụ trách hồ sơ (như trên) | “HDV <họ tên> <đã ghi, đã sửa, đã xóa> chi phí <phát sinh, thực tế> ở <Tour Code> · <tên khoản hoặc dịch vụ>”. Không có số tiền (1.4) | DH08.7 (chi phí phát sinh) hoặc DH08.8 (chi phí thực tế) của hồ sơ, theo lần ghi gần nhất | Trong giao dịch |
| TB-DH08-11 | RSD DH08 (DH08.5), R12; BOI-CANH “Vai trò HDV” | Lưu phân công phục vụ mới cho một nhân sự ở hồ sơ chưa đóng; sửa phân công đã có (đổi vai trò phục vụ, phạm vi, khoảng ngày giờ); hoặc đổi phân công sang nhân sự này (RSD DH08 R12) | Tài khoản của nhân sự được phân công (R01) | “Bạn được phân công <vai trò phục vụ> · <Tour Code> · <tên đoàn> · <dd/mm–dd/mm>”; khi sửa: “Phân công của bạn ở <Tour Code> đã đổi · <vai trò phục vụ> · <dd/mm–dd/mm>” | HD01, chi tiết Tour đó (R07; E1.14); người không có `HD01.xem`: DH08.5 của hồ sơ | Trong giao dịch |
| TB-DH08-12 | RSD DH08 (DH08.5), R12; ADR 0007 | Bỏ phân công phục vụ của một nhân sự; hoặc đổi phân công sang nhân sự khác (gửi cho nhân sự cũ) (RSD DH08 R12) | Tài khoản của nhân sự bị gỡ phân công hoặc bị thay (R01) | “Bạn không còn được phân công <vai trò phục vụ> ở <Tour Code> · <dd/mm–dd/mm>”; nhân sự không còn phân công nào ở hồ sơ thì thêm “· không còn xem được hồ sơ này” | HD01, danh sách Tour của tôi; người không có `HD01.xem`: DH08.5 của hồ sơ | Trong giao dịch |
| TB-DH08-13 | RSD DH08 L1.5, R19; BOI-CANH “Vai trò HDV” (người dùng chốt thêm 12/11/2026) | Điều hành áp dụng thay đổi chương trình cho hồ sơ (không gửi khi Đóng Tour) | Tài khoản của nhân sự được phân công (R01): mọi nhân sự có phân công ở hồ sơ lúc áp dụng; một người một thông báo (R03) | “Chương trình <Tour Code> đã đổi sang v<N> · <các ngày có thay đổi dd/mm…>” | HD01, chi tiết Tour đó, tab Chương trình (R07; E1.14); người không có `HD01.xem`: DH08.1 của hồ sơ | Trong giao dịch |

**Tổng:** 37 loại, gồm 32 loại Trong giao dịch và 5 loại Định kỳ (TB-DH02-02, TB-DH02-03, TB-DH07-03, TB-DH08-03, TB-DH08-10). Mọi loại đều có sự kiện nêu trong RSD nguồn; CH02 không thêm sự kiện nào ngoài nguồn. Bốn loại đầu ở A.3 thêm theo yêu cầu bổ sung vai trò HDV 12/11/2026; TB-DH08-13 thêm theo đoạn “Người dùng chốt thêm” cùng ngày; RSD HD01 và DH08 dẫn đúng các mã này.

**Danh mục đầy đủ** theo đối chiếu ngày 12/11/2026 (sau rà chéo) với mọi `docs/rsd/*/RSD-*.md`: mọi câu “nhận thông báo”, “gửi thông báo”, “thông báo cho”, “nhắc” về thông báo trong ứng dụng đều ứng với một loại ở trên. Sự kiện nguồn không thành loại, có lý do: dịch vụ chờ ghi phải trả ở KT01 (bỏ theo quyết định của người dùng 12/11/2026; Kế toán theo dõi bằng thẻ VT-KT-05 của RSD CH03); cảnh báo Quản trị khi thiếu tiền tố Tour Code (RSD DH07 E1.7) không xảy ra vì tham số luôn có giá trị (RSD QT05 R17, khởi tạo sẵn). Chi tiết đối chiếu ở `GHI-CHU-LAM-VIEC.md` của CH02.
