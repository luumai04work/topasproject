# RSD QT02 · Vai trò và phân quyền

**TOPAS · Module Quản trị · Phiên bản 1.0 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

- **Nguồn nghiệp vụ.** `docs/flows/danh-sach-man-hinh-level1.md` (dòng QT02), `docs/rsd/BOI-CANH-DU-AN.md` (Tổ chức và vai trò; Phân quyền; thuật ngữ Vai trò, Quyền, Người phụ trách, Ngừng hoạt động, Thao tác nhạy cảm; Mặc định áp sau khi sửa RSD), `docs/adr/0001-phan-quyen-chi-theo-man-va-thao-tac.md`, `docs/adr/0007-hdv-chi-thay-tour-duoc-phan-cong.md`, BOI-CANH “Vai trò HDV” (bổ sung 12/11/2026), RSD HD01 (Tour của tôi, viết song song), `docs/QUYET-DINH-PHASE-CODING.md` (Q1, Q3, Q5, Q7, Q8, Q25, C1, U2, U3, U5, U6, K4–K6), RSD QT01 v1.3 (1.4, R02, R03, R06, R08), RSD QT03 v1.2 (R01–R04, R09, R13, R15) và mục 1.4 (QT05: 1.5) của 18 RSD: DH01 v1.5, DH02 v1.4, DH03 v1.5, DH04 v1.4, DH06 v1.4, DH07 v1.8, DH08 v2.9, KD01-KD02 v1.3, KD03-KD04 v1.5, KD05 v1.5, KD06 v1.6, KD07 v1.4, KD08 v1.6, KT01 v1.6, QT01 v1.3, QT03 v1.2, QT04 v1.4, QT05 v1.3, QT07-QT12 v1.3.
- **Thay đổi ở v1.0 (12/11/2026).** Bản đầu tiên. Gộp quyền mặc định ở mục 1.4 của 18 RSD thành danh mục 125 mã quyền (Phụ lục A) và ma trận mặc định cho bốn vai trò (Phụ lục B). Danh sách màn ghi QT02 ngoài Level 1, ba vai trò mặc định và một nút Lưu; tài liệu này theo BOI-CANH: bốn vai trò, mỗi ô quyền lưu ngay, có Hoàn tác (U2).
- **Sửa sau rà chéo 12/11/2026 (giữ số phiên bản 1.0).** Vai trò tự tạo khai **thuộc phòng** Kinh doanh, Điều hành hoặc Kế toán và nhận mọi hành vi gắn với phòng đó; đổi phòng chỉ khi vai trò chưa gán (người dùng chốt 12/11/2026; 1.1, 1.3, 1.5, 2.1, 2.3, 2.4, 2.5, L3.1, L3.2, E3.1, E3.4, E3.11, E3.12, R03, R09, R13, R14, R15, 5.1, 5.2, AC24, AC29, AC30; thêm AC54–AC56). Hoàn tác 10 giây, tối đa 3 thông báo ngắn theo CGD U2.06, U2.07 (2.5, L2.3, R06, AC15; thêm AC57). Nút “+ Thêm vai trò”, hộp thoại xóa có “Quay lại” (CGD K6.06). Trang không có quyền theo CGD K0.09 (E1.2, L7.2). Mất quyền giữa phiên: nút Tải lại trang (L7.1, R07, AC13). Phụ lục A: `DH07.giao-phu-trach` dùng ở DH08.1; `DH08.sua-tong-quan` không gồm Điều hành phụ trách; `DH08.bat-dau-ket-thuc` gồm Kết thúc hồ sơ. Viết lại AC04, AC22, AC48, AC50, AC51 cho kiểm chứng được.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026).** Thêm vai trò đăng nhập HDV cho người dẫn đoàn (người dùng chốt 12/11/2026; BOI-CANH “Vai trò HDV”; ADR 0007). Năm vai trò hệ thống: VT-001 Kinh doanh, VT-002 Điều hành, VT-003 Kế toán, VT-004 Quản trị hệ thống (Admin), VT-005 HDV; vai trò tự tạo đánh số từ VT-006 (ví dụ của tài liệu đổi VT-005 → VT-006, VT-006 → VT-007). Vai trò tự tạo khai thuộc phòng Kinh doanh, Điều hành, Kế toán hoặc HDV. Thêm phạm vi bản ghi của phòng HDV, máy chủ lọc theo phân công (R16, L7.3). Vai trò thuộc phòng HDV chỉ có quyền HD01, mọi mã khác cố định Không (R04). Phụ lục A thêm module HDV với 3 mã `HD01.xem`, `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi` (128 mã, 132 dòng); Phụ lục B thêm cột HDV. Sửa 1.1–1.5, 2.1, 2.3, 2.5, L1.1, L3.1, E1.2, E3.12, R01–R04, R09, R11, R13, R14, 5.1, 5.2, Phụ lục A, B; AC01, AC03, AC04, AC07, AC25, AC50, AC54; thêm L7.3, E2.11, E3.13, E7.8, E7.9, R16, AC58–AC66.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · HDV chốt thêm).** Đối chiếu với BOI-CANH “Vai trò HDV”, mặc định theo Q3 sau đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)”: “Vai trò thuộc phòng HDV chỉ được cấp mã quyền HD01 và các màn chung (CH01–CH03); QT02 không cho bật quyền màn khác”. R04 đã khóa đúng như vậy từ bản bổ sung vai trò HDV; lượt này chỉ thêm câu dẫn nguồn BOI-CANH vào R04 và 1.5, không đổi ma trận, số mã, số quyền. Phụ lục A sửa phần Gồm của `HD01.xem` (Hiện số hộ chiếu ghi QT03, điện thoại, PDF chương trình; RSD HD01 R11–R13) và của `DH08.nhat-ky-su-co`, `DH08.chi-phi-phat-sinh`, `DH08.chi-phi-thuc-te` (gồm sửa, xóa mục Do HDV ghi; RSD DH08 R20); không thêm mã.
- **Cách đọc.** Mục 3 mô tả luồng. Mỗi bước ghi mã W, chỗ bấm, thao tác của người dùng và phản hồi của hệ thống. Mục 4 ghi quy tắc (mã R) mà các bước dẫn tới. Phụ lục A là danh mục mã quyền; Phụ lục B là ma trận mặc định.
- **Wireframe chưa dựng; mã W giữ chỗ.** Đợt đặc tả sau phase coding dùng chuẩn component K1–K6 thay cho hình; mỗi bước vẫn có mã W để dựng sau. Khi dựng: khung HTML desktop 1280 × 800 px, dùng chung `lib.js` với RSD DH08.
- **Dữ liệu minh họa.** Ngày giờ hiện tại 12/11/2026 09:30, múi giờ Asia/Ho_Chi_Minh. Người thao tác là Đỗ Quang Huy (Quản trị hệ thống). Vai trò: VT-001 Kinh doanh (6 tài khoản: 5 Đang hoạt động, Trần Quốc Bảo Bị khóa), VT-002 Điều hành (4), VT-003 Kế toán (2), VT-004 Quản trị hệ thống (2: Đỗ Quang Huy, Nguyễn Hoàng Nam), VT-005 HDV (2: Ngô Thị Mai NS-015, Hồ Quang Vinh NS-014, đều là Cộng tác viên ở DH06). Vũ Đức Minh có cả Kinh doanh và Điều hành. Ngô Thị Mai được phân công HDV điểm ở TP-2611-0042; Hồ Quang Vinh chưa được phân công Tour nào. Số quyền đang có theo Phụ lục B: Kinh doanh 59, Điều hành 62, Kế toán 38, HDV 3, Quản trị hệ thống 76 trên 128 mã. Số tài khoản là số minh họa của tài liệu này.

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu
- Phụ lục A · Danh mục mã quyền
- Phụ lục B · Ma trận quyền mặc định

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

QT02 là nơi duy nhất khai **vai trò** và **quyền** của từng vai trò. Quyền là một cặp (màn hoặc phần của màn, thao tác), có một mã quyền ổn định; vai trò là tập các mã quyền đang có; QT01 gán vai trò cho tài khoản (Q1, C1). Mục tiêu thiết kế:

- **Thấy ngay một vai trò được làm gì.** Ma trận xếp theo module → màn hoặc phần → thao tác, ghi bằng tên nghiệp vụ, có số đếm ở từng cấp; tìm theo tên hoặc mã.
- **Đổi một quyền bằng một lần bấm.** Ô quyền lưu ngay, có Hoàn tác; không có nút Lưu chung, không hộp thoại hỏi lại (U2).
- **Tạo vai trò mới không phải tích lại từ đầu.** Sao chép quyền từ vai trò có sẵn rồi chỉ sửa phần khác.
- **Vai trò tự tạo làm việc như phòng của nó.** Khi tạo, chọn phòng Kinh doanh, Điều hành, Kế toán hoặc HDV; vai trò nhận mọi hành vi gắn với phòng đó (người phụ trách, Của tôi, thông báo theo nhóm, Việc của tôi; với phòng HDV là trang Tour của tôi và phạm vi theo phân công) như vai trò hệ thống cùng tên; quyền vẫn chỉnh riêng theo ma trận (R13).
- **Người dẫn đoàn chỉ thấy Tour mình được phân công.** Phòng HDV chỉ có quyền Tour của tôi (HD01); máy chủ lọc mọi truy vấn của HD01 theo phân công phục vụ (R04, R16; ADR 0007).
- **Biết chỗ đã lệch mặc định.** Vai trò hệ thống đánh dấu từng ô khác mặc định; khôi phục bằng một lần bấm.
- **Không ai tự nâng quyền, không mất Quản trị.** Quyền QT01, QT02 gắn cố định với Quản trị hệ thống; vai trò Quản trị hệ thống không xóa, không ngừng dùng.
- **Mọi thay đổi có dấu vết.** Mỗi thao tác ghi nhật ký QT03 trong cùng giao dịch, có cờ Thao tác nhạy cảm.

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Menu Quản trị → Vai trò và phân quyền | Mở QT02 ở vai trò người dùng xem lần trước, tab Quyền; nhớ theo người dùng, cả sau khi đăng xuất (U3). Lần đầu mở vai trò Kinh doanh (W01). |
| QT02 → QT01 | Tab Tài khoản: bấm dòng mở QT01 với bảng trượt của tài khoản đó (RSD QT01 L3.1). Mục Xóa vai trò bị khóa vì còn tài khoản (W12) có liên kết mở QT01 lọc Vai trò là vai trò đang xét, ở thẻ mới. |
| QT01 → QT02 | QT01 đọc danh sách vai trò Đang dùng cho ô Vai trò và bộ lọc Vai trò (RSD QT01 1.2, R02), và phòng của từng vai trò để tính người phụ trách, Ngừng hoạt động, cảnh báo bỏ vai trò và ràng buộc liên kết Cộng tác viên (R13; RSD QT01 R03, R05, R08). QT01 không mở QT02. |
| QT02 → QT03 | Menu ⋯ → Lịch sử thay đổi mở QT03 lọc Bản ghi là mã vai trò, Thời gian Toàn bộ (RSD QT03 R09); QT02 không có lịch sử riêng, như QT05 (RSD QT03 1.2). |
| QT02 → mọi màn | Mọi màn đọc quyền hiệu lực của tài khoản ở mỗi yêu cầu để ẩn menu và nút, hiện trường dạng chữ và chặn thao tác ở máy chủ (R07, R08); HD01 lọc thêm theo phân công (R16). |

### 1.3. Ranh giới

- QT02 **sở hữu**:
  - vai trò: mã, tên, mô tả, loại (hệ thống hay tự tạo), phòng (Kinh doanh, Điều hành, Kế toán, HDV hoặc không có; R03, R13), trạng thái Đang dùng hoặc Ngừng dùng;
  - ma trận quyền: giá trị Có hoặc Không của từng cặp (vai trò, mã quyền);
  - danh mục mã quyền (Phụ lục A) và ma trận mặc định của năm vai trò hệ thống (Phụ lục B). Cả hai là dữ liệu khởi tạo đi cùng phiên bản phần mềm, không sửa trên giao diện (R02, R11).
- QT02 **không sở hữu** và chỉ đọc:
  - vai trò của từng tài khoản và trạng thái tài khoản (QT01); tab Tài khoản chỉ đọc;
  - kho nhật ký thao tác (QT03);
  - người phụ trách bản ghi (KD04, KD06, KD08, DH08);
  - phân công phục vụ ở DH08.5 và liên kết tài khoản ↔ nhân sự ở QT01, dùng để tính phạm vi của phòng HDV (R16);
  - điều kiện trạng thái của từng thao tác (ví dụ Hủy yêu cầu chỉ khi không có Booking Hiệu lực, RSD KD06 R21). QT02 chỉ quyết định vai trò nào được làm thao tác; điều kiện nghiệp vụ do RSD của màn đó quy định.
- **Ngoài phạm vi:** phạm vi bản ghi (Q1, ADR 0001), trừ phạm vi theo phân công của phòng HDV (R16, ADR 0007); quyền theo trường, trừ các phần nhạy cảm đã có mã riêng; cấp quyền thẳng cho một tài khoản không qua vai trò; quyền có thời hạn; nhập, xuất ma trận ra tệp; xem nhiều vai trò trên cùng một bảng; thao tác hàng loạt trên nhiều vai trò.
- QT02 **không gửi gì ra ngoài hệ thống** và không tạo thông báo (mục 5.3).

### 1.4. Quyền mặc định theo vai trò

| Màn hoặc phần · thao tác | Quản trị hệ thống | Kinh doanh, Điều hành, Kế toán, HDV, vai trò tự tạo |
|---|---|---|
| `QT02.xem` · Xem danh sách vai trò, ma trận quyền, tài khoản đang có vai trò | Có, cố định | Không, cố định (không có mục menu) |
| `QT02.quan-ly` · Tạo, đổi tên, sửa mô tả, bật tắt quyền, Hoàn tác, ngừng dùng, xóa, khôi phục mặc định | Có, cố định | Không, cố định |
| Lịch sử thay đổi (QT03) | Theo `QT03.xem`, cố định Có với Quản trị hệ thống (R04) | Theo `QT03.xem` |

- **Nguồn quyền.** Quyền QT01 và QT02 gắn cố định với vai trò Quản trị hệ thống, không cấp qua QT02 cho vai trò khác, để không ai tự nâng quyền (BOI-CANH, Mặc định áp sau khi sửa RSD; RSD QT01 1.4). Hai ô này khóa trên ma trận (R04).
- **Không có quyền** thì không thấy mục menu; mở bằng đường dẫn thì hiện trang không có quyền, không tải dữ liệu (W17, R08).
- **Kiểm tra lúc ghi.** Máy chủ kiểm tra quyền, ô cố định và phiên bản của từng ô mỗi lần ghi (R04, R15).
- **Dữ liệu cá nhân.** QT02 chỉ hiện họ tên, trạng thái và vai trò của tài khoản ở tab Tài khoản; không hiện email, điện thoại (chỉ hiện ở QT01, RSD QT01 1.4).

### 1.5. Truy vết nguồn

| Mã nguồn | Nội dung | Luồng, quy tắc |
|---|---|---|
| QT02 (danh sách màn) | Chọn vai trò, gán quyền theo từng màn và tab | L1.1, L2.1, L2.2 |
| BOI-CANH Phân quyền (Q1, C1); ADR 0001 | Quyền là cặp (màn hoặc phần, thao tác); hợp các vai trò; không phạm vi bản ghi; phần nhạy cảm là thao tác riêng | R01, R02; Phụ lục A |
| BOI-CANH Tổ chức và vai trò; RSD QT01 R02 | Năm vai trò hệ thống (thêm HDV, người dùng chốt 12/11/2026) | R03 |
| BOI-CANH Mặc định áp sau khi sửa RSD; RSD QT01 1.4 | Quyền QT01, QT02 cố định với Quản trị hệ thống | R04 |
| Q25; BOI-CANH Mặc định áp sau khi sửa RSD | Quản trị xem được mọi màn, có Xem thông tin thanh toán NCC và Xem tài khoản nhận hoàn của khách | R04; Phụ lục B |
| U2 | Thao tác hoàn tác được thì làm ngay kèm Hoàn tác | L2.3; R06 |
| U5 | Không có quyền thì ẩn nút, trường chỉ đọc hiện dạng chữ | L7.2; R08 |
| Q8 | Xung đột chỉ có Tải lại | E2.3; R15 |
| RSD QT01 R02 | Quyền có hiệu lực từ thao tác tiếp theo; luôn còn một Quản trị hệ thống đang hoạt động | L7.1; R07, R12 |
| RSD QT01 R03, R08 | Ngừng hoạt động tính theo vai trò; cảnh báo khi bỏ vai trò đang phụ trách | R13 |
| RSD QT03 R01, R13, R15 | Thao tác QT02 ghi nhật ký, có cờ nhạy cảm | L6.1; R14 |
| Người dùng chốt 12/11/2026 (sau rà chéo) | Vai trò tự tạo khai thuộc phòng, nhận hành vi của phòng; quyền chỉnh riêng | L3.1, L3.2; R03, R13 |
| BOI-CANH “Vai trò HDV”; ADR 0007 | HDV chỉ thấy, chỉ ghi trên hồ sơ Tour được phân công, đến khi hồ sơ Đã đóng; lọc ở máy chủ; vai trò tự tạo khai được thuộc phòng HDV | L7.3; R03, R04, R16 |
| BOI-CANH “Vai trò HDV”, mặc định Q3 sau đoạn “Người dùng chốt thêm” | Vai trò thuộc phòng HDV chỉ có mã HD01 và màn chung; không bật được quyền màn khác | R04, E2.11; Phụ lục B |
| BOI-CANH “Vai trò HDV”; RSD HD01 | Quyền của HDV: xem Tour, chương trình, khách đoàn; ghi nhật ký, sự cố, chi phí | Phụ lục A, B (`HD01.*`) |
| Yêu cầu viết RSD QT02 (12/11/2026) | Tạo bằng sao chép, đổi tên, ngừng dùng, xóa, xem tài khoản, khôi phục mặc định | L3.1–L3.4, L4.1, L5.1 |
| Mục 1.4 của 18 RSD (QT05: 1.5) | Quyền mặc định theo vai trò | Phụ lục B |

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. Bố cục màn

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Tiêu đề màn | “Vai trò và phân quyền”, dòng phụ “Quyền theo màn và thao tác · tài khoản nhiều vai trò thì quyền là hợp”. Bên phải là nút **+ Thêm vai trò** (CGD K6.06) | L3.1 |
| Cột trái: danh sách vai trò (rộng 280 px) | Năm vai trò hệ thống theo thứ tự cố định Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống; tiếp theo vai trò tự tạo Đang dùng theo tên A–Z; cuối cùng vai trò Ngừng dùng, chữ xám. Mỗi dòng: tên, nhãn Hệ thống (vai trò hệ thống) hoặc tên phòng chữ xám nhỏ (vai trò tự tạo), số tài khoản Đang hoạt động; vai trò Ngừng dùng có nhãn xám Ngừng dùng. Dòng đang chọn tô nền | R03, R10 |
| Phần đầu vai trò | Tên (sửa tại chỗ với vai trò tự tạo), mã VT, nhãn Vai trò hệ thống; phòng: “Thuộc phòng Kinh doanh” (vai trò tự tạo: ô chọn tại chỗ khi chưa gán cho tài khoản nào, đang gán thì dạng chữ kèm lý do; vai trò hệ thống Kinh doanh, Điều hành, Kế toán, HDV: dạng chữ; Quản trị hệ thống: không có dòng phòng); mô tả (sửa tại chỗ); công tắc Đang dùng / Ngừng dùng (chỉ vai trò tự tạo, K6). Dòng phụ: “n tài khoản · m quyền đang có”, với vai trò hệ thống thêm “Khác mặc định: k”. Menu ⋯: Khôi phục quyền mặc định (vai trò hệ thống), Lịch sử thay đổi, Xóa vai trò (vai trò tự tạo) | R03, R09–R11, R13 |
| Tab | **Quyền** và **Tài khoản (n)** | L1.1, L4.1 |
| Thanh của tab Quyền | Ô tìm (mã và tên màn, tên hiển thị, mã quyền); chip Tất cả, Đang có, Khác mặc định (chỉ vai trò hệ thống), mỗi chip có số; liên kết Mở hết, Thu gọn hết | L1.1 |
| Ma trận | Cây ba cấp. **Module** theo thứ tự Kinh doanh, Điều hành, Kế toán, HDV, Quản trị, Báo cáo, Chung, kèm “x/y quyền”. **Màn hoặc phần** (mã và tên màn) kèm ô tích cấp màn và “x/y”. **Mã quyền**: ô tích Có/Không, tên hiển thị, dòng phụ ghi phần Gồm và mã quyền chữ nhỏ màu xám; các nhãn và chỉ báo ở mục 2.3 | Phụ lục A |
| Tab Tài khoản | Bảng các tài khoản có vai trò: Họ tên, Trạng thái, Vai trò khác | L4.1 |

Module của một mã quyền theo tiền tố mã màn: KD → Kinh doanh, DH → Điều hành, KT → Kế toán, HD → HDV, QT01–QT05 → Quản trị, QT07–QT12 → Báo cáo, CH → Chung. Một mã quyền dùng ở nhiều màn chỉ có một dòng, đặt ở màn trong mã, kèm nhãn “Dùng ở: …” (R02). Nhóm Chung (CH01–CH03) chỉ hiện chữ “Mọi tài khoản” hoặc “Không cần quyền”, không có ô tích (R04).

### 2.2. Dạng xem

| Dạng | Có không | Lý do |
|---|---|---|
| Cây ma trận của một vai trò | Có, duy nhất | Việc chính là xem và sửa quyền của một vai trò |
| Bảng, Kanban, Lịch | Không | Vai trò là cấu hình, ít bản ghi (thường dưới 10), không có ngày nghiệp vụ, chỉ hai trạng thái |

Màn không có bộ chuyển dạng xem.

### 2.3. Trạng thái và chỉ báo

| Loại | Giá trị | Cách có giá trị |
|---|---|---|
| Trạng thái vai trò | Đang dùng, Ngừng dùng (xám, K6) | Công tắc ở phần đầu, chỉ vai trò tự tạo (R10). Vai trò hệ thống luôn Đang dùng |
| Loại vai trò | Vai trò hệ thống, vai trò tự tạo | Lúc khởi tạo hoặc lúc tạo (R03) |
| Phòng của vai trò | Kinh doanh, Điều hành, Kế toán, HDV; Quản trị hệ thống không có phòng | Vai trò hệ thống: cố định (R13). Vai trò tự tạo: chọn khi tạo, đổi được khi chưa gán (R03) |
| Ô quyền | Có (ô đã tích), Không (ô trống) | Người dùng bấm (R06), sao chép (R09), khôi phục (R11) |
| Ô cố định | Ô khóa kèm 🔒 và lý do: “Gắn cố định với Quản trị hệ thống” (QT01, QT02 ở vai trò Quản trị hệ thống), “Chỉ Quản trị hệ thống” (QT01, QT02 ở vai trò khác), “Quản trị xem được mọi màn (Q25)” (mã loại Xem và Phần nhạy cảm ở vai trò Quản trị hệ thống), “Phòng HDV chỉ dùng Tour của tôi (ADR 0007)” (mọi mã ngoài `HD01.*` ở vai trò thuộc phòng HDV) | R04 |
| Ô cấp màn | Có hết (tích), Một phần (gạch ngang), Không (trống); chỉ tính các ô không cố định | R06 |
| Chỉ báo Khác mặc định | Chấm xanh cạnh ô, dòng phụ “Mặc định: Có” hoặc “Mặc định: Không”; chỉ ở vai trò hệ thống | R11 |
| Chỉ báo Chưa có tác dụng | Chữ vàng dưới tên quyền: “Chưa có tác dụng nếu tài khoản không có ‘Xem thông tin thanh toán NCC’ từ vai trò khác · Bật ‘Xem thông tin thanh toán NCC’” (ví dụ; tên lấy theo quyền cần) | R05 |
| Nhãn Phần nhạy cảm | Trên dòng mã loại Phần nhạy cảm | R01 |
| Nhãn Dùng ở | “Dùng ở: KT01” trên dòng mã dùng ở nhiều màn | R02 |

### 2.4. Vòng đời vai trò

| Từ | Đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|---|
| (chưa có) | Đang dùng | Quản trị bấm Thêm vai trò (W07) | Tên hợp lệ, không trùng; đã chọn phòng (R03) | Cấp mã VT; sao chép ma trận (R09); ghi QT03 | E3.1–E3.3 |
| Đang dùng | Ngừng dùng | Quản trị tắt công tắc (W10) | Vai trò tự tạo | Không còn trong ô chọn vai trò của QT01; tài khoản đang có giữ vai trò và quyền (R10) | E3.8 |
| Ngừng dùng | Đang dùng | Quản trị bật công tắc, hoặc bấm Hoàn tác | — | Hiện lại trong ô chọn vai trò của QT01 | E3.8 |
| Đang dùng, Ngừng dùng | (đã xóa) | Quản trị bấm Xóa vai trò trong hộp thoại (W11) | Vai trò tự tạo; không tài khoản nào có vai trò này, kể cả tài khoản Bị khóa | Xóa vai trò và ma trận; mã không dùng lại; ghi QT03 (R10) | E3.6, E3.7 |

Vai trò hệ thống chỉ có trạng thái Đang dùng: không có công tắc, không có mục Xóa vai trò, tên hiện dạng chữ (R03).

### 2.5. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác.**
  - *Trên cột trái:* chọn vai trò. Không có nút trên dòng.
  - *Ô tích tại chỗ:* bật, tắt một quyền hoặc mọi quyền của một màn; lưu ngay khi bấm, kèm thông báo ngắn có Hoàn tác (R06). Không có nút Lưu chung.
  - *Sửa tại chỗ ở phần đầu:* tên, mô tả; phòng (ô chọn, lưu ngay khi chọn, chỉ khi vai trò chưa gán). Enter hoặc rời ô thì lưu; Esc trả giá trị cũ.
  - *Công tắc:* Đang dùng / Ngừng dùng của vai trò tự tạo, lưu ngay, có Hoàn tác.
  - *Hộp thoại:* Thêm vai trò (ba trường: Tên, Thuộc phòng, Sao chép quyền từ; CGD K5.05) và Xóa vai trò (không hoàn tác được, U2). Không có bảng trượt.
- **Một thao tác, một chỗ bấm.** Thêm vai trò ở tiêu đề màn. Khôi phục mặc định, Lịch sử thay đổi, Xóa vai trò ở menu ⋯. Bật, tắt quyền ở ô tích. Hoàn tác chỉ ở thông báo ngắn. Tên, mã, số tài khoản ở phần đầu không lặp lại trong tab.
- **Trường chỉ đọc** hiện dạng chữ, không có khung nhập (U5). **Nút và ô bị khóa có lý do:** ô cố định (mục 2.3); Thêm vai trò khi Tên trống hoặc chưa chọn phòng; ô phòng khi vai trò đang gán (“Đang gán cho n tài khoản · bỏ ở QT01 trước khi đổi phòng”, E3.11); Khôi phục quyền mặc định khi không có ô khác mặc định (“Đang đúng mặc định”); Xóa vai trò khi còn tài khoản có vai trò (“Đang gán cho n tài khoản · bỏ ở QT01 trước”, W12); ô đang lưu.
- **Thông báo ngắn** theo CGD U2.07: góc phải dưới; có Hoàn tác thì tự đóng sau 10 giây, không có thì sau 5 giây; tối đa 3 thông báo cùng lúc, thông báo thứ tư làm thông báo cũ nhất đóng (và Hoàn tác của nó mất); mỗi thông báo Hoàn tác đúng thao tác của nó.
- **Tải.** Chọn vai trò thì tải cả ma trận của vai trò (khoảng 130 dòng) trong một lượt; khi đang tải, vùng ma trận hiện khung xám, cột trái vẫn chọn được. Tab Tài khoản tải khi mở tab.
- **Lưu.** Mỗi lần bấm gửi kèm phiên bản của các ô bị đổi và mã thao tác (R15). Ô đang lưu hiện vòng quay nhỏ và khóa đến khi có kết quả.
- **Giữ ngữ cảnh.** Đổi vai trò ở cột trái giữ ô tìm, chip và các nhóm đang mở. Sau khi bật, tắt, dòng giữ nguyên vị trí; dòng ra khỏi chip đang chọn (ví dụ tắt một quyền khi đang ở chip Đang có) mờ đi tại chỗ đến khi đổi chip, ô tìm hoặc vai trò.
- **Rỗng.** Tìm không khớp: “Không có quyền khớp ‘…’” và liên kết Xóa tìm. Chip Đang có rỗng: “Vai trò chưa có quyền nào”. Chip Khác mặc định rỗng: “Đang đúng mặc định”. Tab Tài khoản rỗng: E4.1. Cột trái không bao giờ rỗng vì luôn có năm vai trò hệ thống.
- **Lỗi tải chung.** Không tải được danh sách vai trò hoặc ma trận: W16. **Lỗi lưu chung:** W19.
- **Không có quyền.** Như mục 1.4 và W17.
- **Ngày giờ.** dd/mm/yyyy hh:mm theo Asia/Ho_Chi_Minh.
- **Lịch sử.** Mọi thao tác ghi vào QT03 trong cùng giao dịch (R14); xem bằng menu ⋯ → Lịch sử thay đổi (L6.1).

---

## 3. Luồng thao tác

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác của người dùng và phản hồi của hệ thống. Wireframe chưa dựng; mã W giữ chỗ.

### 3.1. Xem vai trò và ma trận quyền

**L1.1 Xem danh sách vai trò và ma trận của một vai trò.** *Điều kiện:* Quản trị hệ thống.

1. **W01 · Menu Quản trị → Vai trò và phân quyền.** Màn mở với vai trò Kinh doanh được chọn (lần đầu), tab Quyền, chip Tất cả, mọi module thu gọn. Cột trái có năm vai trò hệ thống với số tài khoản Đang hoạt động (Kinh doanh 5, Điều hành 4, Kế toán 2, HDV 2, Quản trị hệ thống 2). Phần đầu ghi “Kinh doanh · VT-001 · Vai trò hệ thống”, mô tả, dòng phụ “6 tài khoản · 59 quyền đang có · Khác mặc định: 0”. Ma trận hiện bảy module, mỗi module một dòng kèm số: Kinh doanh 31/32, Điều hành 5/37, Kế toán 3/9, HDV 0/3, Quản trị 8/35, Báo cáo 12/12, Chung (Mọi tài khoản).
2. **W01 · Bấm module Kinh doanh, rồi bấm màn KD06 · Hồ sơ yêu cầu Tour.** Module mở ra các màn theo thứ tự mã, mỗi màn có ô tích cấp màn và số (KD06 9/9, tích). Màn KD06 mở ra chín dòng mã quyền; ví dụ dòng “Tính giá, lưu phiên bản báo giá” có dòng phụ “KD06.3 · `KD06.tinh-gia`” và ô đã tích. Dòng “Chuyển người phụ trách yêu cầu” có nhãn “Dùng ở: KD05, KD06”.
3. **W02 · Ô tìm và chip.** Quản trị gõ “thanh toan”. Từ 2 ký tự, sau 300 ms (K1), ma trận chỉ còn các dòng có tên hiển thị hoặc mã quyền khớp (khớp tên màn thì hiện mọi dòng của màn), không phân biệt hoa thường và dấu; module và màn chứa dòng khớp tự mở: `DH03.xem-thanh-toan-ncc` (nhãn Phần nhạy cảm, Dùng ở: KT01), `DH03.sua-thong-tin-nhan-thanh-toan`, `DH03.sua-dieu-khoan-thanh-toan`, `KD08.sua-thanh-toan`, `QT05.sua-phuong-thuc-thanh-toan`. Bấm chip Đang có thì chỉ còn dòng đã tích (`KD08.sua-thanh-toan`); số trên chip tính theo ô tìm.
4. **W03 · Bấm Quản trị hệ thống ở cột trái.** Ô tìm và chip giữ nguyên; ma trận nạp vai trò mới. Các dòng `QT01.*`, `QT02.*` có ô khóa đã tích, lý do “Gắn cố định với Quản trị hệ thống”; mọi dòng loại Xem và Phần nhạy cảm có ô khóa đã tích, lý do “Quản trị xem được mọi màn (Q25)” (R04). Các ô còn lại bật, tắt được như vai trò khác. Phần đầu không có công tắc và không có mục Xóa vai trò.

*Kết quả:* Quản trị thấy đúng tập quyền của vai trò cần xem, theo module và màn, và biết ô nào cố định, ô nào khác mặc định.

**Ngoại lệ**

- **E1.1 · W16.** Không tải được danh sách vai trò hoặc ma trận: vùng tương ứng hiện thông báo lỗi và nút Thử lại; ô tìm, chip giữ giá trị; các ô tích không bấm được. Thử lại thì tải lại vai trò đang chọn.
- **E1.2 · W17.** Người không có `QT02.xem` (mọi vai trò trừ Quản trị hệ thống, R04) không thấy mục menu; mở QT02 bằng đường dẫn thì hiện trang không có quyền theo CGD K0.09 (“Bạn không có quyền xem trang này”, tên màn Vai trò và phân quyền, nút Về Việc của tôi; tài khoản chỉ có vai trò thuộc phòng HDV thấy nút Về Tour của tôi), không tải dữ liệu.
- **E1.3.** Ô tìm dưới 2 ký tự: chưa lọc; ô tìm hiện gợi ý “Nhập ít nhất 2 ký tự”.
- **E1.4.** Tìm không khớp: mục 2.5, Rỗng.
- **E1.5.** Vai trò vừa bị xóa ở phiên khác, Quản trị bấm vào dòng của nó: thông báo “Vai trò … không còn tồn tại”; cột trái tải lại và chọn Kinh doanh.
- **E1.6.** Vai trò hoặc ô quyền đổi ở phiên khác trong lúc đang xem: màn không tự cập nhật; dữ liệu mới hiện khi chọn lại vai trò, bấm Tải lại hoặc khi lần ghi gặp xung đột (E2.3).
- **E1.7.** Vai trò có nhiều tài khoản Bị khóa: số ở cột trái chỉ đếm tài khoản Đang hoạt động; số trên phần đầu và tab Tài khoản đếm mọi tài khoản (W13).

### 3.2. Bật, tắt quyền

**L2.1 Bật hoặc tắt một quyền.** *Điều kiện:* Quản trị hệ thống; ô không cố định. Ví dụ: doanh nghiệp không muốn Kinh doanh tự xóa khách hàng.

1. **W01 · Ô tích của dòng `KD04.xoa` · Xóa khách hàng chưa dùng, vai trò Kinh doanh.** Quản trị bỏ tích. Hệ thống ghi ngay giá trị Không cho ô này (R06), không hộp thoại. Ô hiện vòng quay trong lúc lưu.
2. **W04 · Sau khi lưu.** Ô trống; dòng có chấm Khác mặc định và dòng phụ “Mặc định: Có”. Số cập nhật ở màn KD04 (5/6, ô cấp màn gạch ngang), module Kinh doanh (30/32), phần đầu (“58 quyền đang có · Khác mặc định: 1”) và chip Khác mặc định (1). Thông báo ngắn: “Đã tắt Xóa khách hàng chưa dùng cho Kinh doanh · 5 tài khoản đang hoạt động nhận thay đổi từ thao tác tiếp theo” kèm nút Hoàn tác. Hệ thống ghi một mục QT03 (R14).

*Kết quả:* từ yêu cầu kế tiếp, máy chủ từ chối xóa khách với tài khoản không có `KD04.xoa` từ vai trò nào khác; nút Xóa ẩn ở lần tải trang tiếp theo (L7.1). Tài khoản có thêm một vai trò khác có `KD04.xoa` vẫn xóa được (R01). Bật lại một quyền làm cùng cách, bấm vào ô trống.

**L2.2 Bật hoặc tắt mọi quyền của một màn.** *Điều kiện:* Quản trị hệ thống. Ví dụ: Điều hành không cần xem công nợ.

1. **W06 · Ô tích cấp màn KT01 · Công nợ và thu chi, vai trò Điều hành.** Ô đang ở Một phần (3/9: ba quyền xem KT01.1, KT01.2, KT01.3). Quản trị bấm ô. Theo R06, ô Một phần bấm thì tắt hết; hệ thống ghi Không cho ba ô đang Có trong một thao tác.
2. **W04 · Sau khi lưu.** Ô cấp màn trống (0/9); ba dòng có chấm Khác mặc định. Thông báo ngắn “Đã tắt 3 quyền của KT01 cho Điều hành” kèm Hoàn tác. QT03 ghi một mục dạng lô, mỗi mã quyền một dòng (R14). Quyền đang Có ở màn khác mà cần quyền vừa tắt hiện chỉ báo Chưa có tác dụng: ở đây là `DH03.xem-cong-no` (nút Xem công nợ ở DH03 mở KT01.2, cần `KT01.xem-phai-tra`) (W05, R05).

*Kết quả:* Điều hành không còn mục Công nợ và thu chi ở lần tải trang tiếp theo. Bấm lại ô cấp màn (đang Không) thì bật cả chín quyền cấu hình được của KT01.

**L2.3 Hoàn tác.** *Điều kiện:* thông báo ngắn của thao tác còn hiện (10 giây, CGD U2.06).

1. **W04 · Nút Hoàn tác trên thông báo ngắn.** Quản trị bấm. Hệ thống đặt lại đúng các ô của thao tác đó về giá trị trước (R06), ghi một mục QT03 “Hoàn tác” dẫn mã thao tác gốc. Ô, số đếm và chấm Khác mặc định trở về như trước; thông báo ngắn “Đã hoàn tác”.

*Kết quả:* ma trận như trước thao tác gốc. Những gì người dùng đã làm bằng quyền đó trong khoảng giữa không bị đảo lại (R06).

**Ngoại lệ**

- **E2.1 · W03.** Ô cố định (R04): ô khóa kèm lý do, bấm không có tác dụng. Yêu cầu đổi ô cố định gửi thẳng tới máy chủ bị từ chối với “Quyền này gắn cố định, không đổi được”, không ghi gì.
- **E2.2 · W05.** Bật một quyền mà vai trò chưa có quyền cần (R05), ví dụ bật `DH03.sua-thong-tin-nhan-thanh-toan` cho vai trò không có `DH03.xem-thanh-toan-ncc`: vẫn lưu; dòng hiện chỉ báo Chưa có tác dụng kèm liên kết bật quyền cần. Tắt một quyền Xem mà quyền khác của vai trò đang cần: vẫn lưu; các dòng phụ thuộc hiện chỉ báo; thông báo ngắn ghi thêm “n quyền phụ thuộc chưa có tác dụng”. Hệ thống không tự bật, tắt quyền cần.
- **E2.3 · W15.** Ô vừa được đổi ở phiên khác sau lần tải (Q8): lần ghi bị từ chối, ô trở về giá trị trước khi bấm. Banner đỏ đầu tab Quyền: “Quyền ‘…’ vừa được … đổi lúc …”. Chỉ có nút Tải lại, không có nút ghi đè. Tải lại nạp ma trận mới; Quản trị bấm lại nếu vẫn cần. Thao tác nhiều ô (cấp màn) bị từ chối cả nếu một ô đã đổi.
- **E2.4 · W19.** Mất kết nối hoặc máy chủ lỗi khi lưu: ô trở về giá trị trước, thông báo đỏ “Chưa lưu được. Thử lại”. Kết quả chưa xác định thì hệ thống tra theo mã thao tác trước khi cho bấm lại; đã lưu thì hiện kết quả như bước 2 (R15).
- **E2.5.** Bấm liên tiếp trên cùng ô: ô khóa trong lúc đang lưu nên không có hai lần gửi song song; mỗi lần bấm sau khi lưu xong là một thao tác riêng, có thông báo và Hoàn tác riêng.
- **E2.6 · W20.** Bấm Hoàn tác khi một ô của thao tác gốc đã bị đổi sau đó (ở phiên khác, hoặc chính Quản trị bấm lại): không đổi gì; thông báo “Không hoàn tác được: ‘…’ đã được … đổi lúc …”. Hoàn tác thao tác nhiều ô là tất cả hoặc không (ngoại lệ ghi ở CGD U2.06).
- **E2.7.** Thông báo ngắn đã đóng: không còn Hoàn tác; muốn đảo lại thì bấm ô như một thao tác mới.
- **E2.8.** Vai trò bị xóa ở phiên khác khi đang bật, tắt: lần ghi bị từ chối như E1.5.
- **E2.9.** Quản trị tắt một quyền không cố định của chính vai trò Quản trị hệ thống (ví dụ `QT05.sua-tham-so-chung`): được; lần ghi sau của chính Quản trị ở QT05 bị từ chối theo L7.1. QT02 vẫn dùng được vì `QT02.*` cố định (R04).
- **E2.10.** Vai trò Ngừng dùng: ma trận vẫn sửa được, vì tài khoản đang có vai trò vẫn mang quyền của nó (R10).
- **E2.11 · W03.** Vai trò thuộc phòng HDV (VT-005 hoặc vai trò tự tạo thuộc phòng HDV): mọi ô ngoài `HD01.*` khóa ở Không, lý do “Phòng HDV chỉ dùng Tour của tôi (ADR 0007)”; ô cấp màn của các màn đó không bấm được. Yêu cầu bật gửi thẳng tới máy chủ bị từ chối như E2.1. Ba ô `HD01.*` bật tắt được như mọi ô (R04, R16).

### 3.3. Tạo, đổi tên, ngừng dùng và xóa vai trò

**L3.1 Tạo vai trò bằng sao chép.** *Điều kiện:* Quản trị hệ thống. Ví dụ: trưởng nhóm Kinh doanh cần chuyển khách hàng loạt khi nhân viên nghỉ, quyền mà mặc định chỉ Quản trị có.

1. **W07 · Nút + Thêm vai trò ở tiêu đề màn → hộp thoại.** Hộp thoại có ba trường:
   - **Tên** (bắt buộc).
   - **Thuộc phòng** (bắt buộc): Kinh doanh, Điều hành, Kế toán hoặc HDV. Điền sẵn theo vai trò ở ô Sao chép quyền từ (nhãn Gợi ý): Kinh doanh, Điều hành, Kế toán, HDV hoặc vai trò tự tạo thì lấy phòng của vai trò đó; Quản trị hệ thống hoặc Không sao chép thì để trống. Đổi ô Sao chép quyền từ chỉ điền lại phòng khi người dùng chưa tự chọn. Dưới ô ghi “Vai trò nhận các hành vi của phòng: người phụ trách, Của tôi, thông báo, Việc của tôi; quyền theo ma trận”. Chọn HDV thì dòng chữ đổi thành “Phòng HDV: chỉ có quyền Tour của tôi, chỉ thấy Tour được phân công (ADR 0007)”.
   - **Sao chép quyền từ** (điền sẵn vai trò đang chọn ở cột trái, nhãn Mặc định; chọn được mọi vai trò khác hoặc “Không sao chép · chưa có quyền nào”). Dưới ô ghi số quyền sẽ chép (“59 quyền”), và với Quản trị hệ thống ghi thêm “trừ quyền QT01, QT02”; khi Thuộc phòng là HDV chỉ đếm và chỉ chép ba quyền `HD01.*` (ví dụ “0 quyền · phòng HDV chỉ nhận quyền Tour của tôi”, R09).

   Mô tả nhập sau ở phần đầu (L3.2). Nút Thêm vai trò khóa khi Tên trống hoặc chưa chọn phòng. Quản trị nhập “Trưởng nhóm Kinh doanh”, giữ Sao chép quyền từ Kinh doanh; Thuộc phòng điền sẵn Kinh doanh.
2. **W08 · Nút Thêm vai trò.** Hệ thống kiểm tra theo R03, tạo VT-006 Đang dùng, thuộc phòng Kinh doanh, chép ma trận theo R09, ghi QT03. Hộp thoại đóng; cột trái có dòng mới (0 tài khoản) và đang chọn nó; tab Quyền mở với ma trận đã chép. Thông báo ngắn “Đã thêm vai trò Trưởng nhóm Kinh doanh (phòng Kinh doanh) · sao chép 59 quyền từ Kinh doanh”.
3. **W01 · Ô tích của dòng `KD03.chuyen-phu-trach-hang-loat`.** Quản trị tích như L2.1. Phần đầu ghi “Trưởng nhóm Kinh doanh · VT-006 · Thuộc phòng Kinh doanh”, dòng phụ “0 tài khoản · 60 quyền đang có” (vai trò tự tạo không có Khác mặc định).
4. **W13 · Tab Tài khoản.** Tab rỗng với liên kết “Gán vai trò ở QT01” (E4.1). Quản trị gán vai trò cho tài khoản ở QT01 (RSD QT01 L3.1).

*Kết quả:* vai trò mới có quyền của Kinh doanh và chuyển khách hàng loạt; tài khoản được gán ở QT01 nhận quyền từ thao tác tiếp theo. Quyền của vai trò mới không liên kết với Kinh doanh: sửa ma trận Kinh doanh về sau không đổi vai trò mới (R09). Vai trò mới thuộc phòng Kinh doanh nên tài khoản có nó nhận các hành vi của phòng Kinh doanh (R13): ví dụ tài khoản chỉ có VT-006 được chọn làm người phụ trách khách hàng và có chip Của tôi bật sẵn ở KD03.

**L3.2 Đổi tên, sửa mô tả, đổi phòng.** *Điều kiện:* Quản trị hệ thống. Tên chỉ đổi với vai trò tự tạo; phòng chỉ đổi với vai trò tự tạo chưa gán cho tài khoản nào (R03); mô tả sửa với mọi vai trò.

1. **W09 · Bấm tên ở phần đầu vai trò.** Tên thành ô nhập, chọn sẵn chữ. Quản trị gõ “Trưởng phòng Kinh doanh”, bấm Enter. Hệ thống kiểm tra theo R03, lưu, ghi QT03; cột trái đổi tên và giữ thứ tự A–Z. Thông báo ngắn kèm Hoàn tác. Mô tả sửa cùng cách (bấm dòng mô tả).
2. **W09 · Ô phòng ở phần đầu (vai trò tự tạo chưa gán, ví dụ VT-007 “Thủ quỹ” thuộc phòng Kế toán).** Quản trị chọn Điều hành. Hệ thống kiểm tra lại trong cùng giao dịch rằng vai trò chưa gán cho tài khoản nào (R03), lưu ngay, ghi QT03; thông báo ngắn “Đã đổi phòng của Thủ quỹ: Kế toán → Điều hành” kèm Hoàn tác. Vai trò đang gán thì ô hiện dạng chữ kèm lý do (E3.11).

*Kết quả:* QT01 (ô và bộ lọc Vai trò, thẻ vai trò) hiện tên mới ở lần tải sau; mục QT03 cũ giữ tên lúc thao tác (RSD QT03 R02). Tài khoản gán vai trò sau khi đổi phòng nhận hành vi của phòng mới (R13).

**L3.3 Ngừng dùng và dùng lại vai trò.** *Điều kiện:* Quản trị hệ thống; vai trò tự tạo.

1. **W10 · Công tắc Đang dùng ở phần đầu vai trò.** Quản trị tắt. Hệ thống ghi Ngừng dùng ngay, ghi QT03. Dòng ở cột trái chuyển xuống nhóm Ngừng dùng, chữ xám, giữ đang chọn. Thông báo ngắn “Đã ngừng dùng Trưởng phòng Kinh doanh · 2 tài khoản vẫn giữ vai trò này và quyền của nó; bỏ vai trò ở QT01 nếu cần” kèm Hoàn tác. Bật lại công tắc thì vai trò Đang dùng như trước.

*Kết quả:* vai trò không còn trong ô chọn vai trò khi tạo, sửa tài khoản ở QT01; hai tài khoản đang có vẫn mang quyền của nó (R10).

**L3.4 Xóa vai trò chưa gán.** *Điều kiện:* Quản trị hệ thống; vai trò tự tạo không gán cho tài khoản nào, kể cả tài khoản Bị khóa.

1. **W11 · Menu ⋯ → Xóa vai trò → hộp thoại.** Hộp thoại ghi tên, mã, số quyền đang có, “Chưa tài khoản nào có vai trò này”, hệ quả (xóa vai trò và ma trận, mã không dùng lại, lịch sử ở QT03 giữ nguyên) và “Không hoàn tác được”. Hai nút Xóa vai trò và Quay lại (CGD U2.04, K6.06); con trỏ mặc định ở Quay lại.
2. **W01 · Nút Xóa vai trò.** Hệ thống kiểm tra lại R10 trong cùng giao dịch, xóa, ghi QT03. Hộp thoại đóng; cột trái bỏ dòng và chọn Kinh doanh. Thông báo ngắn “Đã xóa vai trò …”, không có Hoàn tác.

*Kết quả:* vai trò không còn ở QT02, QT01; bộ lọc Vai trò của QT03 vẫn tìm được mục cũ theo mã VT.

**Ngoại lệ**

- **E3.1 · W07.** Tên trống, dài quá 50 ký tự, hoặc trùng tên vai trò khác (kể cả Ngừng dùng; so theo R03); hoặc chưa chọn Thuộc phòng: không tạo; lỗi dưới ô, ví dụ “Đã có vai trò Kinh doanh”, “Chọn phòng của vai trò”; dữ liệu đã nhập giữ.
- **E3.2.** Vai trò ở ô Sao chép quyền từ vừa bị xóa ở phiên khác: không tạo; lỗi dưới ô “Vai trò này không còn tồn tại”; Quản trị chọn lại.
- **E3.3.** Bấm Thêm vai trò hai lần hoặc lỗi mạng rồi bấm lại: chỉ một vai trò được tạo theo mã thao tác (R15); kết quả chưa xác định mà tra thấy đã tạo thì chọn vai trò đó.
- **E3.4 · W03.** Vai trò hệ thống: tên và phòng hiện dạng chữ, rê chuột ghi “Vai trò hệ thống · không đổi tên, không đổi phòng”; không có công tắc; menu ⋯ không có Xóa vai trò (R03).
- **E3.5.** Đổi tên trùng hoặc trống: ô báo lỗi cạnh trường, giữ chữ đang nhập; Esc trả tên cũ; không lưu.
- **E3.6 · W12.** Vai trò tự tạo còn tài khoản (kể cả Bị khóa): mục Xóa vai trò trong menu ⋯ khóa, dòng phụ “Đang gán cho 2 tài khoản · bỏ ở QT01 trước” và liên kết Mở QT01 (thẻ mới, lọc Vai trò là vai trò này, chip Tất cả). Muốn không gán thêm thì Ngừng dùng (L3.3).
- **E3.7.** Vai trò vừa được gán cho một tài khoản ở QT01 sau khi mở hộp thoại W11: bấm Xóa vai trò thì máy chủ từ chối; hộp thoại đổi nội dung thành “Vai trò vừa được gán cho 1 tài khoản lúc …” kèm liên kết Mở QT01, chỉ còn nút Đóng.
- **E3.8 · W15.** Tên, mô tả, phòng hoặc trạng thái vừa đổi ở phiên khác: không ghi; banner chỉ có Tải lại (Q8, R15).
- **E3.9.** Lỗi lưu hoặc kết quả chưa xác định: như E2.4.
- **E3.10.** QT01 đang mở ô Vai trò khi vai trò bị ngừng dùng hoặc xóa: QT01 lưu và máy chủ từ chối vai trò đó với lỗi cạnh ô Vai trò, “Vai trò đã ngừng dùng” (khi gán mới) hoặc “Vai trò không còn tồn tại” (thay đổi cần làm ở QT01, ghi ở GHI-CHU).
- **E3.11 · W09.** Vai trò tự tạo đang gán cho tài khoản (kể cả Bị khóa): ô phòng hiện dạng chữ “Thuộc phòng Kinh doanh”, dòng phụ “Đang gán cho 2 tài khoản · bỏ ở QT01 trước khi đổi phòng” và liên kết Mở QT01 (như E3.6). Vai trò vừa được gán ở QT01 sau khi tải: lần đổi phòng bị máy chủ từ chối, ô trở về phòng cũ, thông báo “Vai trò vừa được gán cho 1 tài khoản lúc …” (R03).
- **E3.12.** Ô Thuộc phòng không có Quản trị hệ thống. Yêu cầu tạo hoặc đổi phòng gửi thẳng tới máy chủ với phòng trống hoặc giá trị khác Kinh doanh, Điều hành, Kế toán, HDV bị từ chối, không ghi gì (R03).
- **E3.13 · W09.** Đổi phòng của vai trò tự tạo chưa gán sang HDV khi vai trò đang có quyền ngoài `HD01.*`: hệ thống đổi phòng và đặt mọi ô ngoài `HD01.*` về Không trong cùng một thao tác, ghi QT03 một mục dạng lô (phòng và từng ô bị tắt); thông báo ngắn ví dụ “Đã đổi phòng của Thủ quỹ: Kế toán → HDV · tắt 38 quyền ngoài Tour của tôi” kèm Hoàn tác; Hoàn tác trả lại phòng và mọi ô như trước, tất cả hoặc không (R06). Đổi phòng từ HDV sang phòng khác: các ô mở khóa, giữ Không (R03, R04).

### 3.4. Tài khoản đang có vai trò

**L4.1 Xem tài khoản đang có vai trò.** *Điều kiện:* Quản trị hệ thống.

1. **W13 · Tab Tài khoản (6) của vai trò Kinh doanh.** Bảng gồm Họ tên, Trạng thái (Đang hoạt động; Bị khóa màu xám, K6), Vai trò khác (ví dụ Vũ Đức Minh: Điều hành; Nguyễn Hoàng Nam: Quản trị hệ thống). Sắp Đang hoạt động trước, Bị khóa sau, trong mỗi nhóm theo họ tên A–Z. Không có thao tác ghi; dòng chữ đầu tab ghi “Gán và bỏ vai trò ở QT01”.
2. **W13 → QT01 · Bấm dòng Vũ Đức Minh.** Mở QT01 cùng thẻ trình duyệt với bảng trượt của tài khoản đó (RSD QT01 L3.1). Quay lại bằng nút quay lại của trình duyệt thì QT02 giữ vai trò và tab.

*Kết quả:* Quản trị biết ai đang mang quyền của vai trò trước khi sửa ma trận, ngừng dùng hoặc xóa vai trò.

**Ngoại lệ**

- **E4.1.** Chưa tài khoản nào có vai trò: “Chưa tài khoản nào có vai trò này” và liên kết Gán vai trò ở QT01 (mở QT01, chip Đang hoạt động).
- **E4.2 · W16.** Không tải được tab: lỗi kèm Thử lại; tab Quyền vẫn dùng được.
- **E4.3.** Tài khoản đổi vai trò hoặc bị khóa ở phiên khác khi tab đang mở: danh sách cập nhật khi mở lại tab hoặc chọn lại vai trò.

### 3.5. Khôi phục quyền mặc định

**L5.1 Khôi phục ma trận mặc định của vai trò hệ thống.** *Điều kiện:* Quản trị hệ thống; vai trò hệ thống có ít nhất một ô khác mặc định. Ví dụ: Kinh doanh đang khác mặc định ở hai ô: `KD04.xoa` đã tắt (L2.1), `KD05.xuat-excel` đã tắt.

1. **W02 · Chip Khác mặc định (2).** Ma trận chỉ còn hai dòng, mỗi dòng ghi “Mặc định: Có”. Quản trị xem để biết điều sẽ đổi.
2. **W14 · Menu ⋯ → Khôi phục quyền mặc định.** Hệ thống đặt ngay mọi ô không cố định của vai trò về giá trị ở Phụ lục B (R11), không hộp thoại (U2). Chip Khác mặc định về 0, hai dòng mờ tại chỗ; phần đầu “59 quyền đang có · Khác mặc định: 0”; mục menu khóa với “Đang đúng mặc định”. Thông báo ngắn “Đã khôi phục quyền mặc định của Kinh doanh: bật 2, tắt 0 · 5 tài khoản đang hoạt động nhận thay đổi từ thao tác tiếp theo” kèm Hoàn tác. QT03 ghi một mục dạng lô.

*Kết quả:* ma trận Kinh doanh đúng Phụ lục B. Hoàn tác (L2.3) trả lại hai ô đã tắt.

**Ngoại lệ**

- **E5.1.** Vai trò đang đúng mặc định: mục Khôi phục quyền mặc định khóa, ghi “Đang đúng mặc định”.
- **E5.2.** Vai trò tự tạo: không có mục Khôi phục quyền mặc định và không có chip Khác mặc định, vì không có ma trận mặc định (R11).
- **E5.3 · W15.** Một ô của vai trò vừa đổi ở phiên khác sau lần tải: cả lần khôi phục bị từ chối; banner chỉ có Tải lại (R15).
- **E5.4.** Hoàn tác không được vì ô đã đổi sau đó: như E2.6.

### 3.6. Lịch sử thay đổi

**L6.1 Xem lịch sử thay đổi của một vai trò.** *Điều kiện:* có `QT03.xem` (Quản trị hệ thống luôn có, R04).

1. **W01 → RSD QT03 W08 · Menu ⋯ → Lịch sử thay đổi.** Mở QT03 cùng thẻ trình duyệt, ô tìm là thẻ “Bản ghi: VT-001”, Thời gian Toàn bộ thời gian lưu, chip Tất cả (RSD QT03 R09). Mỗi mục ghi người, thời điểm, thao tác, cờ Thao tác nhạy cảm; bấm mục thì bảng trượt QT03 hiện từng trường, ví dụ “Quyền · KD04.xoa · Xóa khách hàng chưa dùng: Có → Không”; mục dạng lô liệt kê từng mã quyền (R14). Mở bản ghi từ QT03 đưa về QT02 đúng vai trò.

*Kết quả:* Quản trị biết ai đổi quyền nào của vai trò, lúc nào, kể cả Hoàn tác và khôi phục.

**Ngoại lệ**

- **E6.1.** Vai trò đã xóa: QT02 không còn lối vào; tìm mã VT ở QT03 (đối tượng Vai trò) vẫn thấy mọi mục, kể cả mục Xóa; Mở bản ghi khóa với thời điểm xóa (RSD QT03 E2.3).
- **E6.2.** Tài khoản có `QT02.xem` mà không có `QT03.xem`: không xảy ra, vì chỉ Quản trị hệ thống có `QT02.xem` và luôn có `QT03.xem` (R04). Nếu xảy ra do dữ liệu sai, mục Lịch sử thay đổi ẩn.

### 3.7. Quyền có hiệu lực ở các màn

**L7.1 Người dùng đang đăng nhập nhận quyền mới.** *Điều kiện:* Lê Thu Hà (chỉ có vai trò Kinh doanh) đang mở hồ sơ khách KD04, trang tải trước khi Quản trị tắt `KD04.xoa` ở L2.1.

1. **W18 · Lê Thu Hà bấm Xóa khách hàng (nút còn trên trang đã tải).** Máy chủ kiểm tra quyền theo ma trận hiện hành và từ chối (R07, R08). Màn hiện thông báo ngắn lỗi “Quyền của bạn vừa thay đổi” kèm nút **Tải lại trang**; dữ liệu trên màn giữ nguyên để chép; giao diện chưa đổi (RSD QT01 R02, CGD U5.05). Không có gì bị xóa, không ghi QT03.
2. **W18 → KD04 · Nút Tải lại trang.** Trang tải lại theo quyền mới: không còn nút Xóa khách hàng; các phần khác như trước. Lê Thu Hà không phải đăng nhập lại.

*Kết quả:* thay đổi ở QT02 có hiệu lực từ yêu cầu kế tiếp của mọi phiên; giao diện theo kịp ở lần tải trang tiếp theo (R07).

**L7.2 Kiểm tra quyền ở mọi màn.** *Điều kiện:* mọi người dùng, mọi màn.

1. **W17 · Mở một màn không có quyền Xem.** Ví dụ Kế toán mở DH04 bằng đường dẫn: trang không có quyền ghi tên màn và nút Về Việc của tôi (CGD K0.09); máy chủ không trả dữ liệu; menu không có mục DH04 (R08). Trên màn có quyền Xem mà thiếu quyền thao tác, nút của thao tác đó ẩn và trường hiện dạng chữ; phần nhạy cảm không có quyền thì ẩn cả phần và máy chủ không trả trường đó.

*Kết quả:* người dùng chỉ thấy và làm được theo quyền hiệu lực của mình; máy chủ chặn cả khi yêu cầu gửi thẳng không qua giao diện.

**L7.3 Phạm vi theo phân công của phòng HDV.** *Điều kiện:* Ngô Thị Mai chỉ có VT-005 HDV, tài khoản liên kết NS-015; NS-015 được phân công HDV điểm ở TP-2611-0042, không có phân công ở TP-2611-0038 (ADR 0007, R16).

1. **W17 · Mai mở HD01 rồi gõ đường dẫn HD01 của TP-2611-0038.** Danh sách Tour của tôi chỉ có TP-2611-0042. Máy chủ lọc mọi truy vấn HD01 theo phân công ở mỗi yêu cầu; đường dẫn của TP-2611-0038 hiện trang không tìm thấy theo CGD K0.09 (“Không tìm thấy TP-2611-0038”, nút Về Tour của tôi), không lộ dữ liệu, cùng phản hồi như mã không tồn tại. Mai mở DH07, DH08 bằng đường dẫn thì hiện trang không có quyền như L7.2.
2. **W18 · Điều hành gỡ phân công của NS-015 ở DH08.5 khi Mai đang mở TP-2611-0042 trên HD01; Mai bấm Lưu một mục nhật ký.** Máy chủ từ chối vì hồ sơ đã ra khỏi phạm vi (R16): không ghi mục nhật ký, không ghi QT03; dữ liệu đang nhập giữ trên màn để chép; nội dung thông báo và lối về danh sách theo RSD HD01.

*Kết quả:* phòng HDV chỉ thấy và chỉ ghi trên hồ sơ đang được phân công; mỗi lần phân công, gỡ phân công hoặc đóng hồ sơ có hiệu lực từ yêu cầu kế tiếp.

**Ngoại lệ**

- **E7.1 · W17.** Mất quyền Xem màn đang mở: lần tải dữ liệu kế tiếp (đổi trang, mở bản ghi, Tải lại) hiện trang không có quyền; dữ liệu đang nhập chưa lưu không được giữ (RSD QT03 E1.7).
- **E7.2.** Được cấp thêm quyền: nút, mục menu hiện ở lần tải trang tiếp theo; trước đó, yêu cầu gửi tới máy chủ đã được chấp nhận theo quyền mới.
- **E7.3.** Thao tác hàng loạt: quyền kiểm tra một lần khi máy chủ nhận lô; lô nhận sau khi quyền bị tắt thì không dòng nào được thực hiện, banner nêu lý do (như RSD KD05 E4.3).
- **E7.4.** Việc đã vào hàng đợi trước khi quyền đổi (gửi email NCC, dựng PDF, gọi AI; Q5) chạy tiếp, vì quyền đã kiểm tra lúc người dùng bấm.
- **E7.5.** Tài khoản nhiều vai trò: quyền hiệu lực là hợp (R01). Tắt một quyền ở một vai trò không đổi gì với tài khoản có quyền đó từ vai trò khác.
- **E7.6.** Tài khoản bị khóa hoặc đổi vai trò ở QT01: theo RSD QT01 R02, R06; QT02 không tham gia.
- **E7.7.** Thiếu quyền cần (R05) dù có quyền thao tác: máy chủ từ chối như bước 1; nút không hiện vì màn hoặc phần chứa nút không hiện.
- **E7.8.** Hồ sơ của HDV chuyển Đã đóng (DH08 Đóng Tour), hoặc tài khoản bị gỡ liên kết nhân sự ở QT01: hồ sơ ra khỏi HD01 ở yêu cầu kế tiếp như gỡ phân công (R16). Hồ sơ được Mở lại Tour (về Đã kết thúc) mà phân công còn: HD01 hiện lại hồ sơ.
- **E7.9.** Tài khoản có cả HDV và vai trò thuộc phòng khác (chỉ nhân sự Nội bộ, RSD QT01 R05), ví dụ Điều hành và HDV: HD01 vẫn chỉ hiện hồ sơ được phân công; DH07, DH08 hiện mọi hồ sơ theo quyền của Điều hành (R01, R16).

---

## 4. Quy tắc triển khai chi tiết

### R01. Mô hình quyền (Q1, C1, ADR 0001)

- Mỗi quyền là một cặp (màn hoặc phần của màn, thao tác) có một **mã quyền** ở Phụ lục A. Vai trò là tập mã quyền có giá trị Có.
- **Quyền hiệu lực** của tài khoản là **hợp** các mã quyền của mọi vai trò của tài khoản, kể cả vai trò Ngừng dùng (R10). Tài khoản Bị khóa không đăng nhập nên không có quyền hiệu lực (RSD QT01 R06).
- **Không có phạm vi bản ghi.** Có quyền một thao tác trên một màn thì làm được trên mọi bản ghi của màn đó. Người phụ trách không thêm, không bớt quyền. Ngoại lệ duy nhất: phạm vi theo phân công ở HD01 (R16, ADR 0007).
- Điều kiện trạng thái của thao tác (ví dụ cột Điều kiện ở RSD KD06 1.4, ràng buộc “trừ Mẫu mặc định” ở RSD DH01 1.4) vẫn áp dụng như RSD của màn; QT02 không đổi.
- **Phần nhạy cảm** là mã riêng loại Phần nhạy cảm. Hiện có hai: `DH03.xem-thanh-toan-ncc`, `KT01.xem-tai-khoan-nhan-hoan`. Không có quyền thì phần đó ẩn và máy chủ không trả các trường của phần đó (RSD DH03 1.4, KT01 R01).
- **Quyền suy ra, không có mã riêng:** liên kết sang màn khác theo quyền Xem của màn đích, không có quyền thì hiện dạng chữ. Gồm: KD08 → KD06 (yêu cầu, phiên bản); KD04 → KD08, DH08; KD05 → KD08; KD07 → KD08, DH08; DH02 → DH03; DH04 → DH03.2; KD08.2 → KT01.1 (Xem công nợ); QT03 Mở bản ghi; khoan sâu của QT07–QT12; kết quả tìm nhanh Ctrl+K (U1) chỉ gồm loại bản ghi người dùng có mã quyền ghi ở cột cuối CGD U1.03 (ví dụ Tour mẫu theo `KD01.xem`, khách hàng theo `KD03.xem`, giao dịch Thu từ khách theo `KT01.xem-phai-thu`).

### R02. Danh mục mã quyền

- **Dạng mã** `<MÀN>.<thao-tác>`. `<MÀN>` là mã màn sở hữu dữ liệu mà thao tác đọc hoặc ghi (ví dụ `KD08.tao-booking` dù nút ở KD06.3; `DH03.xem-thanh-toan-ncc` dù cũng hiện ở KT01.2). `<thao-tác>` là chữ thường không dấu, nối bằng gạch ngang.
- **Mã ổn định.** Không đổi khi đổi tên hiển thị hay phần Gồm. Mã đã bỏ không dùng lại cho nghĩa khác. Mã dùng chung ở `packages/shared` cho cả giao diện và máy chủ.
- **Danh mục đi cùng phiên bản phần mềm**, không sửa trên giao diện. Khi RSD một màn thêm, bỏ hay tách thao tác, sửa Phụ lục A, B của RSD này trước khi code (BOI-CANH, thứ tự nguồn sự thật).
- **Cách lập danh mục từ RSD nguồn.** Mỗi dòng của bảng quyền mục 1.4 (QT05: 1.5) là một mã, trừ:
  - dòng “theo quyền của màn khác”: không thành mã, theo R01 (quyền suy ra);
  - dòng nêu điều không phải quyền (người nhận thông báo, mặc định chip Của tôi, mốc mặc định của Lịch, dạng xem): không thành mã, theo R13;
  - cùng một thao tác có ở nhiều RSD: một mã dùng chung, nhãn “Dùng ở”, nguồn ghi đủ các RSD (`DH03.tao-ncc`, `DH02.bat-tat-ncc`, `DH03.xem-thanh-toan-ncc`, `DH03.dich-vu-bang-gia`, `DH07.giao-phu-trach`, `KD04.tao-khach`, `KD06.tao-yeu-cau`, `KD06.chuyen-phu-trach`, `KD08.tao-booking`, `KT01.ghi-cong-no-phat-sinh`);
  - RSD tự khai danh sách thao tác: theo danh sách đó (DH01: hai thao tác; QT04: hai thao tác; QT05: Sửa theo từng nhóm và hai thao tác theo trường);
  - dòng gộp nhiều thao tác mà vai trò được cấp khác nhau (DH08): tách theo nhóm thao tác ghi trong dòng; quyền xem mọi tab DH08 là một mã `DH08.xem`.
- **Loại mã:** Xem; Phần nhạy cảm; Thao tác; Cố định (QT01, QT02); Mọi tài khoản và Không cần quyền (CH01–CH03, không phải ô của ma trận). Tên hiển thị và phần Gồm ở Phụ lục A là chữ hiện trên ma trận.

### R03. Vai trò hệ thống và vai trò tự tạo

- **Năm vai trò hệ thống** VT-001 Kinh doanh, VT-002 Điều hành, VT-003 Kế toán, VT-004 Quản trị hệ thống (Admin), VT-005 HDV (thêm theo người dùng chốt 12/11/2026) có sẵn khi khởi tạo, với ma trận ở Phụ lục B. Tên hiển thị của VT-004 là “Quản trị hệ thống”; Admin là tên gọi khác trong BOI-CANH. Không đổi tên, không Ngừng dùng, không xóa, vì logic ở màn khác dựa vào chúng (R12, R13), cùng cách với giá trị hệ thống của QT05 (RSD QT05 R06). Mô tả sửa được; ma trận sửa được trừ ô cố định (R04).
- **Vai trò tự tạo** có mã `VT-NNN` tăng dần từ VT-006; số không dùng lại, cho phép thủng (Q7). Không giới hạn số vai trò.
- **Phòng** (người dùng chốt 12/11/2026). Vai trò hệ thống có phòng cố định: Kinh doanh, Điều hành, Kế toán, HDV thuộc phòng cùng tên; Quản trị hệ thống không thuộc phòng nào. Vai trò tự tạo **bắt buộc** thuộc đúng một phòng: Kinh doanh, Điều hành, Kế toán hoặc HDV (HDV thêm theo người dùng chốt 12/11/2026); Quản trị hệ thống không phải là phòng để chọn. Hành vi theo phòng ở R13; vai trò thuộc phòng HDV chỉ có quyền HD01 (R04).
- **Đổi phòng** của vai trò tự tạo chỉ được khi vai trò không gán cho tài khoản nào, kể cả tài khoản Bị khóa (cùng điều kiện với Xóa, R10); máy chủ kiểm tra số tài khoản trong cùng giao dịch đổi phòng (E3.11). Đổi phòng làm ngay, có Hoàn tác (R06). Lý do: đổi phòng khi đang gán sẽ đổi người phụ trách hợp lệ, trạng thái Ngừng hoạt động và người nhận thông báo của tài khoản mà không qua cảnh báo như RSD QT01 R08; muốn đổi thì tạo vai trò mới thuộc phòng cần dùng rồi đổi vai trò ở QT01. Đổi sang HDV thì mọi ô ngoài `HD01.*` về Không trong cùng thao tác (E3.13).
- **Tên** 2–50 ký tự, duy nhất trong mọi vai trò kể cả Ngừng dùng; so sánh không phân biệt hoa thường, bỏ khoảng trắng hai đầu, gộp khoảng trắng liên tiếp. **Mô tả** tối đa 200 ký tự, không bắt buộc.

### R04. Quyền cố định

- `QT01.*` và `QT02.*`: Có, cố định với Quản trị hệ thống; Không, cố định với mọi vai trò khác, kể cả vai trò tự tạo sao chép từ Quản trị hệ thống (BOI-CANH; RSD QT01 1.4).
- Mã loại **Xem** và **Phần nhạy cảm**: Có, cố định với Quản trị hệ thống (Q25; BOI-CANH Mặc định áp sau khi sửa RSD). Với vai trò khác bật, tắt được, trừ vai trò thuộc phòng HDV (dòng dưới). Các mã loại Thao tác của Quản trị hệ thống (ví dụ `KD06.mo-lai-yeu-cau`, `DH08.mo-lai-tour`, `QT05.sua-*`) bật, tắt được.
- **Phòng HDV** (VT-005 HDV và vai trò tự tạo thuộc phòng HDV): mọi mã ngoài `HD01.*` là Không, cố định, lý do “Phòng HDV chỉ dùng Tour của tôi (ADR 0007)”; ba mã `HD01.*` bật tắt được; các màn chung CH01–CH03 có như mọi tài khoản (dòng CH01–CH03 ngay dưới). Nguồn: BOI-CANH “Vai trò HDV”, mặc định theo Q3 sau đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)”: vai trò thuộc phòng HDV chỉ được cấp mã quyền HD01 và các màn chung, QT02 không cho bật quyền màn khác. Lý do: ADR 0007 cho phòng HDV chỉ thấy và chỉ ghi trên hồ sơ Tour được phân công, phạm vi đó chỉ được lọc ở HD01 (R16), còn quyền ở màn khác mở dữ liệu ngoài phân công (chương trình, khách đoàn, giá của đoàn khác). Ô `HD01.*` của vai trò không thuộc phòng HDV bật tắt được, mặc định Không, riêng `HD01.xem` của Quản trị hệ thống Có, cố định (dòng trên).
- CH01–CH03 không là ô của ma trận: Đăng nhập không cần quyền; Đổi mật khẩu, Thông báo, Việc của tôi có với mọi tài khoản đang hoạt động. Tài khoản chỉ có vai trò thuộc phòng HDV dùng Tour của tôi làm trang mặc định thay Việc của tôi (RSD CH01 R18, CH03 1.4). Thẻ của Việc của tôi theo vai trò do đặc tả Việc của tôi quy định (U4); bấm thẻ hoặc thông báo mở màn đích theo quyền Xem của màn đó.
- Máy chủ từ chối mọi yêu cầu đổi ô cố định (E2.1).

### R05. Quyền cần

- Quyền cần của từng mã ghi ở cột Cần của Phụ lục A. Mã loại Thao tác cần quyền Xem của màn hoặc phần nơi có nút; mã Xem của một phần (tab, lịch sử, phần nhạy cảm) cần quyền Xem của màn chứa phần đó. Riêng: hai quyền sửa phần thanh toán NCC cần `DH03.xem-thanh-toan-ncc` (RSD DH03 1.4); `DH03.xem-cong-no` cần thêm `KT01.xem-phai-tra` vì nút mở KT01.2; `QT05.sua-markup-mac-dinh` cần Sửa của nhóm chứa trường; `QT05.sua-boi-so-lam-tron` cần `QT05.sua-loai-tien` (RSD QT05 1.5).
- Quyền cần xét trên **quyền hiệu lực** của tài khoản (hợp các vai trò), không xét trong từng vai trò. Máy chủ chỉ cho thực hiện khi tài khoản có cả quyền thao tác và quyền cần.
- QT02 không tự bật, tắt quyền cần. Dòng có quyền Có mà vai trò thiếu quyền cần hiện chỉ báo Chưa có tác dụng (W05) kèm liên kết bật quyền cần.

### R06. Bật, tắt và Hoàn tác (U2)

- Đổi quyền hoàn tác được nên **làm ngay, không hộp thoại**, kèm thông báo ngắn có **Hoàn tác** trong 10 giây (CGD U2.06, U2.07). Áp dụng cho: một ô, ô cấp màn, khôi phục mặc định, đổi tên, sửa mô tả, đổi phòng, Ngừng dùng và dùng lại. Không áp dụng cho Tạo vai trò (đảo lại bằng Xóa) và Xóa vai trò (hộp thoại, không hoàn tác được).
- **Ô cấp màn:** ô đang Không thì bấm bật mọi ô không cố định của màn; ô đang Một phần hoặc Có hết thì bấm tắt hết. Là một thao tác, một mục QT03 dạng lô.
- **Hoàn tác** là một thao tác ghi mới, đặt đúng các ô của thao tác gốc về giá trị trước, ghi QT03 riêng dẫn mã thao tác gốc. Chỉ hoàn tác được khi mọi ô của thao tác gốc chưa bị đổi sau đó; nếu không thì không đổi gì (E2.6). Đây là ngoại lệ “tất cả hoặc không” đã ghi ở CGD U2.06: thao tác nhiều ô là một thao tác trên một vai trò, không phải thao tác hàng loạt nên không bỏ qua từng ô. Hoàn tác không đảo lại những gì người dùng đã làm bằng quyền đó trong khoảng giữa.

### R07. Hiệu lực với phiên đang đăng nhập (RSD QT01 R02)

- Máy chủ đọc ma trận hiện hành ở **mỗi yêu cầu** đọc và ghi, nên mọi thay đổi ở QT02 có hiệu lực từ **yêu cầu kế tiếp** của mọi phiên. Không đăng xuất phiên, không cần đăng nhập lại.
- Menu, nút và trường chỉ đọc cập nhật ở lần tải trang tiếp theo, kể cả khi chuyển sang màn khác trong ứng dụng.
- Mất quyền ghi khi đang mở màn: lần ghi bị từ chối, thông báo “Quyền của bạn vừa thay đổi” kèm nút **Tải lại trang**; dữ liệu trên form giữ để chép; giao diện đổi ở lần tải trang sau (W18; CGD U5.05). Mất quyền Xem: lần tải kế tiếp hiện trang không có quyền (W17).
- Quyền kiểm tra lúc máy chủ nhận yêu cầu. Lô hàng loạt kiểm tra một lần khi nhận lô; việc đã vào hàng đợi chạy tiếp (E7.3, E7.4).
- QT02 không gửi thông báo cho người bị đổi quyền.

### R08. Áp quyền trên giao diện và máy chủ (U5)

- Không có quyền Xem của màn: mục menu ẩn; mở bằng đường dẫn thì trang không có quyền, không tải dữ liệu (W17).
- Không có quyền thao tác: nút, mục menu ⋯, công tắc, ô chọn dòng, ô sửa tại chỗ của thao tác đó ẩn; trường chỉ đọc hiện dạng chữ, không có khung nhập. Không hiện nút khóa thay cho nút không có quyền.
- Phần nhạy cảm không có quyền: ẩn cả phần, kể cả tiêu đề và cột tóm tắt; máy chủ không trả các trường của phần đó trong mọi API, tệp xuất và bản in (RSD DH03 1.4, KT01 R01).
- Máy chủ kiểm tra quyền (và quyền cần, R05) ở mọi yêu cầu, không dựa vào việc ẩn nút. Bị từ chối thì không ghi dữ liệu, không ghi QT03 (RSD QT03 R01).

### R09. Tạo và sao chép

- Sao chép chép mọi ô không cố định của vai trò nguồn **tại thời điểm tạo**; ô cố định của vai trò mới theo R04 (QT01, QT02 là Không; mã Xem không còn cố định; vai trò mới thuộc phòng HDV chỉ nhận ba ô `HD01.*`, mọi ô khác Không). Sau khi tạo, hai vai trò độc lập.
- Sao chép quyền từ điền sẵn vai trò đang chọn; chọn được mọi vai trò, kể cả Ngừng dùng. “Không sao chép” thì mọi ô là Không.
- Vai trò mới Đang dùng, chưa có tài khoản, thuộc phòng đã chọn ở ô Thuộc phòng (R03). Sao chép quyền không chép phòng; phòng chỉ là giá trị điền sẵn (L3.1).

### R10. Ngừng dùng và xóa

- **Ngừng dùng** (vai trò tự tạo): vai trò không còn trong ô chọn vai trò khi tạo, sửa tài khoản ở QT01; tài khoản đang có giữ vai trò và quyền của nó. QT01 hiện thẻ vai trò kèm “(ngừng dùng)”; bỏ được, không thêm lại được. Bộ lọc Vai trò ở QT01, QT03 vẫn có vai trò này. Cùng cách với mọi công tắc Đang dùng / Ngừng dùng của dự án: tắt thì không hiện khi chọn mới, dữ liệu đã có giữ nguyên.
- **Xóa** chỉ với vai trò tự tạo không gán cho tài khoản nào, kể cả tài khoản Bị khóa. Xóa vai trò và mọi ô của nó. Máy chủ kiểm tra lại số tài khoản trong cùng giao dịch xóa (E3.7). Không hoàn tác. Mục QT03 cũ giữ tên vai trò lúc thao tác.

### R11. Mặc định, khôi phục và nâng cấp

- Ma trận mặc định chỉ có cho năm vai trò hệ thống, là Phụ lục B. Ô **khác mặc định** là ô không cố định có giá trị khác Phụ lục B; đếm ở phần đầu và chip.
- **Khôi phục quyền mặc định** đặt mọi ô không cố định của vai trò hệ thống về Phụ lục B trong một thao tác, không hộp thoại, có Hoàn tác (R06).
- **Phiên bản phần mềm thêm mã quyền:** vai trò hệ thống nhận giá trị Phụ lục B của mã đó; vai trò tự tạo nhận Không. **Bỏ mã:** xóa ô của mã đó ở mọi vai trò. **Đổi giá trị mặc định** của mã đã có: không đổi ma trận đang dùng, chỉ đổi đích của Khôi phục và phép đếm Khác mặc định. Các thay đổi do nâng cấp không do người dùng nên không ghi QT03 (RSD QT03 R03); ghi nhật ký kỹ thuật (số mã thêm, bỏ).

### R12. Luôn còn Quản trị hệ thống (RSD QT01 R02)

- Hệ thống luôn có ít nhất một tài khoản Đang hoạt động có vai trò Quản trị hệ thống; điều này do QT01 giữ.
- QT02 không có thao tác nào làm mất quyền quản trị: vai trò Quản trị hệ thống không xóa, không Ngừng dùng (R03); `QT01.*`, `QT02.*` cố định (R04). Máy chủ từ chối mọi yêu cầu vi phạm, kể cả gửi thẳng không qua giao diện.

### R13. Hành vi theo phòng của vai trò, không phải quyền (người dùng chốt 12/11/2026)

- Mỗi vai trò thuộc nhiều nhất một phòng (R03): VT-001 Kinh doanh thuộc phòng Kinh doanh, VT-002 Điều hành thuộc phòng Điều hành, VT-003 Kế toán thuộc phòng Kế toán, VT-004 Quản trị hệ thống không thuộc phòng nào, VT-005 HDV thuộc phòng HDV; vai trò tự tạo thuộc phòng đã khai.
- Các hành vi sau theo **phòng của vai trò**, không theo ma trận quyền, và không bật tắt ở QT02. Tài khoản có ít nhất một vai trò thuộc phòng X (kể cả vai trò Ngừng dùng, R10) nhận hành vi của phòng X đúng như tài khoản có vai trò hệ thống X:
  - được chọn làm người phụ trách, và khi nào người phụ trách là Ngừng hoạt động: phòng Kinh doanh với khách hàng, yêu cầu Tour, Booking; phòng Điều hành với hồ sơ Tour qua nhân sự liên kết (RSD QT01 R03, R05, R08; DH06 R03);
  - chip Của tôi bật sẵn: phòng Kinh doanh ở KD03, KD05, KD07, KT01.1; phòng Điều hành ở DH07 (BOI-CANH, Của tôi; CGD K2.06);
  - người nhận thông báo theo nhóm (ví dụ phòng Kế toán khi lịch thanh toán Booking đổi, RSD KD08; nhóm Điều hành theo RSD DH06 R03);
  - thẻ của Việc của tôi (U4, RSD CH03); mốc mặc định của Lịch theo vai trò (RSD KD07 1.4);
  - riêng phòng HDV: không được chọn làm người phụ trách bản ghi nào, không có chip Của tôi bật sẵn, không có nhóm thẻ Việc của tôi; trang mặc định sau đăng nhập là Tour của tôi khi tài khoản chỉ có vai trò thuộc phòng HDV (RSD CH01 R18, CH03 1.4); nhận thông báo phân công phục vụ qua nhân sự liên kết (RSD CH02); phạm vi theo phân công ở HD01 (R16); Cộng tác viên chỉ liên kết được với tài khoản chỉ có vai trò thuộc phòng HDV (RSD QT01 R05).
- Gợi ý vai trò theo nhóm công việc khi tạo tài khoản ở QT01 (RSD QT01 R05) chỉ tích vai trò hệ thống, không theo phòng.
- Phòng không thêm, không bớt quyền nào, trừ phòng HDV chỉ có quyền HD01 (R04): quyền của vai trò tự tạo vẫn chỉnh riêng theo ma trận. Ví dụ vai trò thuộc phòng Kinh doanh không có `KD03.xem` thì người có nó vẫn được chọn làm người phụ trách khách nhưng không mở được KD03; vai trò thuộc phòng Kế toán có `KD03.xem` thì mở được KD03 nhưng chip Của tôi tắt sẵn và không được chọn làm người phụ trách khách.
- Tắt quyền ở QT02 không đổi người phụ trách của bản ghi nào và không làm tài khoản thành Ngừng hoạt động, vì Ngừng hoạt động tính theo phòng của vai trò (RSD QT01 R03). Đổi phòng chỉ được khi vai trò chưa gán (R03), xóa vai trò chỉ được khi chưa gán (R10). Vì vậy không bản ghi nào mất người phụ trách hay đổi trạng thái Ngừng hoạt động vì một thao tác ở QT02, và QT02 không có cảnh báo như RSD QT01 R08.

### R14. Nhật ký QT03

- Mỗi thao tác ghi ở QT02 ghi một mục vào kho QT03 trong cùng giao dịch (Q5; RSD QT03 R05): đối tượng Vai trò (mã VT, tên lúc thao tác), màn QT02, kiểu thao tác (tại chỗ, hộp thoại), cờ Thao tác nhạy cảm (RSD QT03 R13), mã thao tác.
- Sự kiện và trường ghi:

  | Sự kiện | Trường trước → sau, ghi chú |
  |---|---|
  | Tạo vai trò | Tên, phòng, vai trò nguồn, số quyền đã chép |
  | Đổi phòng | Phòng: cũ → mới; đổi sang HDV kèm một dòng cho mỗi ô bị tắt (E3.13) |
  | Đổi tên, sửa mô tả | Tên hoặc Mô tả: cũ → mới |
  | Ngừng dùng, Dùng lại | Trạng thái: Đang dùng ↔ Ngừng dùng; số tài khoản đang có |
  | Bật, tắt một quyền | “Quyền · mã quyền · tên hiển thị”: Không ↔ Có |
  | Bật, tắt cả màn | Mục dạng lô (RSD QT03 R04): mỗi mã quyền một dòng |
  | Khôi phục quyền mặc định | Mục dạng lô: mỗi ô đổi một dòng |
  | Hoàn tác | Mục dạng lô hoặc một dòng; dẫn mã thao tác gốc |
  | Xóa vai trò | Tên, mô tả, số quyền đang có lúc xóa |

- Bị từ chối (cố định, xung đột, không có quyền) thì không ghi (RSD QT03 R01).
- Dòng QT02 ở RSD QT03 R15 thay bằng bảng trên (thay đổi cần làm ở QT03).

### R15. Đồng thời và chống lặp (Q8)

- Khóa lạc quan theo **từng ô** (vai trò, mã quyền) và theo **thông tin vai trò** (tên, mô tả, phòng, trạng thái). Hai Quản trị đổi hai ô khác nhau không xung đột.
- Phiên bản đã đổi thì từ chối; banner chỉ có Tải lại, không có nút ghi đè (W15).
- Thao tác nhiều ô (cấp màn, khôi phục, Hoàn tác) kiểm tra phiên bản mọi ô; một ô đã đổi thì từ chối cả.
- Mỗi lần bấm có mã thao tác; bấm lặp hoặc gửi lại sau lỗi mạng với cùng mã chỉ thực hiện một lần. Kết quả chưa xác định thì tra theo mã thao tác trước khi cho bấm lại.
- Xóa vai trò hoặc đổi phòng, cùng lúc gán vai trò ở QT01: xóa và đổi phòng kiểm tra số tài khoản trong cùng giao dịch; QT01 lưu vai trò đã xóa thì bị từ chối (E3.7, E3.10, E3.11).

### R16. Phạm vi theo phân công của phòng HDV (ADR 0007; người dùng chốt 12/11/2026)

- **Hồ sơ được phân công** của một tài khoản: hồ sơ Tour có ít nhất một phân công phục vụ ở DH08.5 của nhân sự liên kết với tài khoản (RSD QT01 R05), bất kể vai trò phục vụ, và hồ sơ chưa Đã đóng (BOI-CANH, Vai trò HDV, mặc định theo Q3). Tài khoản không liên kết nhân sự thì không có hồ sơ nào.
- **Máy chủ lọc.** Mọi truy vấn và thao tác của HD01 (danh sách, chi tiết, tệp chứng từ, thao tác ghi) chỉ chạy trên hồ sơ được phân công, tính lại ở **mỗi yêu cầu** từ phân công, trạng thái hồ sơ và liên kết hiện hành; không dựa vào việc ẩn trên giao diện. Yêu cầu tới hồ sơ ngoài tập (đoán đường dẫn, gọi API) nhận cùng phản hồi như hồ sơ không tồn tại, không lộ dữ liệu hay việc hồ sơ có tồn tại; không ghi gì, không ghi QT03.
- **Hiệu lực.** Gỡ phân công (DH08.5), Đóng Tour (DH08), gỡ liên kết nhân sự hoặc khóa tài khoản (QT01): hồ sơ ra khỏi phạm vi từ yêu cầu kế tiếp; lần ghi đang dở bị từ chối, dữ liệu trên màn giữ để chép (L7.3). Thêm phân công, hoặc Mở lại Tour (Đã đóng → Đã kết thúc) khi phân công còn: hồ sơ vào phạm vi từ yêu cầu kế tiếp.
- **Áp cho mọi tài khoản dùng HD01**, kể cả Quản trị hệ thống: HD01 là Tour của tôi, không phải danh sách mọi Tour; xem mọi hồ sơ thì dùng DH07, DH08 theo quyền ở đó.
- **Không thu hẹp quyền khác.** Vai trò thuộc phòng HDV chỉ có quyền HD01 (R04) nên phòng HDV chỉ thấy và chỉ ghi trong phạm vi này. Tài khoản có thêm vai trò thuộc phòng khác giữ đủ quyền của vai trò đó trên mọi bản ghi (R01); hợp quyền không mở rộng HD01 ra ngoài phạm vi.
- Điều kiện trên từng mục (HDV chỉ sửa, xóa mục do chính mình ghi; không ghi khi hồ sơ Đã đóng) là điều kiện nghiệp vụ của RSD HD01, áp như R01.
- Đây là phạm vi bản ghi duy nhất của hệ thống. Không thêm phạm vi cho vai trò khác theo cách này; muốn vậy phải xét lại ADR 0001 (ADR 0007).

### Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Khi thiếu |
|---|---|---|---|
| Danh mục mã quyền (Phụ lục A) | Phiên bản phần mềm, dữ liệu khởi tạo | Ma trận, kiểm tra quyền ở mọi màn | Không chạy được; kiểm tra khi khởi động |
| Ma trận mặc định (Phụ lục B) | Phiên bản phần mềm, dữ liệu khởi tạo | Khởi tạo năm vai trò, Khôi phục, Khác mặc định (R11) | Không chạy được; kiểm tra khi khởi động |
| Vai trò của tài khoản | QT01 | Số tài khoản, tab Tài khoản, quyền hiệu lực, R10 | Tab Tài khoản lỗi tải (E4.2) |
| Kho nhật ký | QT03 | R14, L6.1 | Không lưu được thao tác (RSD QT03 R05), báo lỗi lưu (W19) |
| Phân công phục vụ, liên kết nhân sự | DH08 (DH08.5), QT01 | R16 | HD01 không có hồ sơ nào; không lộ hồ sơ nào |

---

## 5. Dữ liệu

### 5.1. Đối tượng

| Đối tượng | Khóa | Dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|---|
| Vai trò | Mã vai trò `VT-NNN` | Tên, mô tả, loại (hệ thống, tự tạo), phòng (Kinh doanh, Điều hành, Kế toán, HDV, trống với Quản trị hệ thống), trạng thái (Đang dùng, Ngừng dùng), ngày tạo, người tạo, phiên bản | QT02 ghi; QT01, QT03 đọc |
| Ô quyền | Mã vai trò + mã quyền | Giá trị (Có, Không), phiên bản, người và thời điểm đổi cuối | QT02 ghi; máy chủ đọc ở mọi yêu cầu |
| Mã quyền | Mã quyền | Màn hoặc phần, module, tên hiển thị, phần Gồm, loại, quyền cần, danh sách màn dùng | Dữ liệu khởi tạo (Phụ lục A); chỉ đọc |
| Giá trị mặc định | Mã vai trò hệ thống + mã quyền | Có, Không | Dữ liệu khởi tạo (Phụ lục B); chỉ đọc |
| Vai trò của tài khoản (đọc) | ID tài khoản + mã vai trò | Họ tên, trạng thái tài khoản | QT01 |
| Mục nhật ký | Mã thao tác QT03 | Theo R14 | QT02 ghi vào kho QT03 |
| Thiết lập người dùng | ID tài khoản | Vai trò xem lần trước ở QT02 | Nhớ theo người dùng (U3) |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| Thêm vai trò (W07) | Tên | Có | Trống | 2–50 ký tự; duy nhất (R03) |
| Thêm vai trò (W07) | Thuộc phòng | Có | Phòng của vai trò ở ô Sao chép quyền từ; trống khi Quản trị hệ thống hoặc Không sao chép | Kinh doanh, Điều hành, Kế toán hoặc HDV (R03) |
| Thêm vai trò (W07) | Sao chép quyền từ | Có | Vai trò đang chọn | Vai trò còn tồn tại, hoặc Không sao chép (R09) |
| Phần đầu vai trò (W09) | Tên | Có | Tên hiện tại | Như trên; chỉ vai trò tự tạo |
| Phần đầu vai trò (W09) | Mô tả | Không | Mô tả hiện tại | Tối đa 200 ký tự |
| Phần đầu vai trò (W09) | Phòng | Có | Phòng hiện tại | Kinh doanh, Điều hành, Kế toán hoặc HDV; chỉ vai trò tự tạo chưa gán cho tài khoản nào (R03) |
| Phần đầu vai trò (W10) | Đang dùng | — | Đang dùng | Chỉ vai trò tự tạo |
| Ma trận (W01) | Ô quyền | — | Theo ma trận | Không phải ô cố định (R04) |
| Thanh tab Quyền (W02) | Tìm | Không | Trống | Từ 2 ký tự; tìm trong mã và tên màn, tên hiển thị, mã quyền |

### 5.3. Dữ liệu gửi ra ngoài

QT02 không gửi email, tin nhắn hay tài liệu ra ngoài hệ thống, và không tạo thông báo trong ứng dụng.

---

## 6. Tiêu chí nghiệm thu

Mã AC là mã test. Dữ liệu theo mục đầu tài liệu; ma trận ban đầu đúng Phụ lục B.

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được |
|---|---|---|
| AC01 | Quản trị mở QT02 lần đầu | Vai trò Kinh doanh, tab Quyền, chip Tất cả; cột trái có năm vai trò hệ thống theo thứ tự Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống, số tài khoản 5, 4, 2, 2, 2; phần đầu “6 tài khoản · 59 quyền đang có · Khác mặc định: 0” (W01) |
| AC02 | Tài khoản Kinh doanh (và Điều hành, Kế toán) mở QT02 bằng đường dẫn | Không có mục menu; trang không có quyền; máy chủ không trả dữ liệu vai trò (E1.2) |
| AC03 | Dữ liệu khởi tạo | Mỗi cặp (mã quyền, vai trò hệ thống) ở Phụ lục B có đúng giá trị; số quyền đang có: Kinh doanh 59, Điều hành 62, Kế toán 38, HDV 3, Quản trị hệ thống 76 |
| AC04 | (a) So tự động danh mục mã quyền ở `packages/shared` với Phụ lục A. (b) Tài khoản thử chỉ có một vai trò tự tạo “Không sao chép” (0 quyền), gửi thẳng 6 yêu cầu ghi đại diện: tạo khách (`KD04.tao-khach`), tính giá (`KD06.tinh-gia`), hủy Booking (`KD08.huy-booking`), giao người phụ trách hồ sơ (`DH07.giao-phu-trach`), ghi giao dịch (`KT01.ghi-giao-dich`), sửa tham số chung (`QT05.sua-tham-so-chung`) | (a) Đúng 128 mã, không thừa, không thiếu; mỗi mã có loại và quyền cần đúng Phụ lục A; 4 dòng Chung không là ô ma trận. (b) Cả 6 yêu cầu bị từ chối vì quyền; không có dữ liệu nào đổi; không có mục QT03 (R08) |
| AC05 | Gõ “thanh toan” ở ô tìm | Còn 5 dòng: `DH03.xem-thanh-toan-ncc`, `DH03.sua-thong-tin-nhan-thanh-toan`, `DH03.sua-dieu-khoan-thanh-toan`, `KD08.sua-thanh-toan`, `QT05.sua-phuong-thuc-thanh-toan`; các module chứa dòng khớp tự mở (W02) |
| AC06 | Gõ “k” | Chưa lọc; gợi ý “Nhập ít nhất 2 ký tự” (E1.3) |
| AC07 | Chọn Quản trị hệ thống | 7 ô `QT01.*`, `QT02.*` và 32 ô loại Xem, Phần nhạy cảm (gồm `HD01.xem`) khóa đã tích kèm lý do; không có công tắc, không có Xóa vai trò (W03) |
| AC08 | Chọn Kinh doanh, xem dòng QT01, QT02 | Ô khóa trống, lý do “Chỉ Quản trị hệ thống” |
| AC09 | Gửi thẳng yêu cầu bật `QT02.quan-ly` cho Kinh doanh, hoặc tắt `DH03.xem-thanh-toan-ncc` cho Quản trị hệ thống | Máy chủ từ chối “Quyền này gắn cố định, không đổi được”; ma trận không đổi; không có mục QT03 (E2.1) |
| AC10 | Nhóm Chung | CH01 Đăng nhập “Không cần quyền”; CH01 Đổi mật khẩu, CH02, CH03 “Mọi tài khoản”; không có ô tích |
| AC11 | Bỏ tích `KD04.xoa` của Kinh doanh | Không hộp thoại; ô trống; chấm Khác mặc định “Mặc định: Có”; KD04 5/6 (gạch ngang), module Kinh doanh 30/32, phần đầu 58, chip Khác mặc định 1; thông báo có Hoàn tác (W04) |
| AC12 | Sau AC11 | QT03 có một mục: đối tượng Vai trò VT-001, màn QT02, cờ Thao tác nhạy cảm, trường “Quyền · KD04.xoa · Xóa khách hàng chưa dùng: Có → Không” (R14) |
| AC13 | Sau AC11, Lê Thu Hà đang mở KD04 (trang tải trước AC11) bấm Xóa khách hàng | Bị từ chối, thông báo “Quyền của bạn vừa thay đổi” kèm nút Tải lại trang; khách không bị xóa; không có mục QT03; bấm Tải lại trang thì không còn nút Xóa; không phải đăng nhập lại (W18, L7.1) |
| AC14 | Sau AC11, Vũ Đức Minh (Kinh doanh, Điều hành) | Nếu Điều hành không có `KD04.xoa` thì Minh không xóa được; bật `KD04.xoa` cho Điều hành thì Minh xóa được, Lê Thu Hà vẫn không (R01) |
| AC15 | Bấm Hoàn tác ở giây thứ 8 sau AC11 (thông báo có Hoàn tác hiện 10 giây) | Ô về Có; chip Khác mặc định 0; QT03 có thêm mục Hoàn tác dẫn mã thao tác của AC11; Lê Thu Hà xóa được từ yêu cầu kế tiếp (L2.3) |
| AC16 | Sau AC11, Quản trị B bật lại `KD04.xoa`; Quản trị A bấm Hoàn tác của AC11 (thông báo còn hiện) | “Không hoàn tác được: … đã được … đổi lúc …”; ô giữ giá trị của B (E2.6) |
| AC17 | Hai Quản trị cùng mở Kinh doanh; A tắt `KD06.tinh-gia`; B chưa tải lại, bấm ô `KD06.tinh-gia` | B bị từ chối; ô của B trở về giá trị trước; banner chỉ có Tải lại, không có ghi đè (E2.3) |
| AC18 | Như AC17, B bấm ô `KD06.ghi-ket-qua` | Lưu thành công (khóa theo từng ô, R15) |
| AC19 | Mất kết nối khi bấm một ô; mạng có lại, kết quả chưa xác định | Ô về giá trị trước, thông báo “Chưa lưu được. Thử lại”; tra theo mã thao tác; đã lưu thì hiện kết quả, không ghi lần hai (E2.4) |
| AC20 | Bấm nhanh hai lần vào cùng ô | Lần bấm thứ hai bị chặn khi ô đang lưu; chỉ một mục QT03 cho lần bấm đầu (E2.5) |
| AC21 | Bấm ô cấp màn KT01 của Điều hành (Một phần 3/9) | Ba quyền Xem KT01 thành Không; ô cấp màn trống 0/9; một mục QT03 dạng lô 3 dòng; Hoàn tác trả lại cả ba (L2.2) |
| AC22 | (a) Điều hành ở KT01 0/9 (đã tắt ba quyền Xem như AC21, không Hoàn tác; chip Khác mặc định 3), bấm ô cấp màn KT01. (b) Chọn Quản trị hệ thống, bấm ô cấp màn KT01 (4 ô Xem, Phần nhạy cảm cố định Có; 5 ô thao tác Không) | (a) Ô cấp màn tích 9/9; 9 mã KT01 đều Có; một mục QT03 dạng lô 9 dòng; chip Khác mặc định của Điều hành 6 (6 mã thao tác KT01 mặc định Không). (b) 5 ô thao tác thành Có; 4 ô cố định vẫn Có và khóa; mục QT03 dạng lô 5 dòng, không có dòng của ô cố định (R04, R06) |
| AC23 | Tắt `DH03.xem-thanh-toan-ncc` của Kế toán | Dòng `DH03.sua-thong-tin-nhan-thanh-toan` và `DH03.sua-dieu-khoan-thanh-toan` hiện Chưa có tác dụng; thông báo ghi “2 quyền phụ thuộc chưa có tác dụng”; Nguyễn Thị Hằng không thấy phần thanh toán ở DH03, KT01.2; API sửa thông tin nhận thanh toán bị từ chối; API đọc NCC không trả số tài khoản (R05, R08) |
| AC24 | Thêm “Trưởng nhóm Kinh doanh” sao chép từ Kinh doanh | Thuộc phòng điền sẵn Kinh doanh; VT-006, Đang dùng, thuộc phòng Kinh doanh, 0 tài khoản, 59 quyền giống hệt Kinh doanh; thông báo “sao chép 59 quyền”; mục QT03 Tạo vai trò ghi tên, phòng, vai trò nguồn, 59 (L3.1) |
| AC25 | Tạo vai trò thuộc phòng Kinh doanh, sao chép từ Quản trị hệ thống | QT01, QT02 là Không và khóa; 32 mã Xem, Phần nhạy cảm là Có và bật tắt được; các ô khác giống Quản trị hệ thống (R09) |
| AC26 | Tạo vai trò với tên “ kinh   doanh ” hoặc tên trống | Không tạo; lỗi “Đã có vai trò Kinh doanh”; với tên trống, nút Thêm vai trò khóa (E3.1) |
| AC27 | Bấm Thêm vai trò hai lần liên tiếp | Một vai trò được tạo (E3.3) |
| AC28 | Sau AC24, sửa ma trận Kinh doanh | Ma trận VT-006 không đổi (R09) |
| AC29 | VT-006 thuộc phòng Kinh doanh, có `KD03.chuyen-phu-trach-hang-loat` (sau L3.1). Gán VT-006 cho tài khoản thử T chỉ có vai trò này; T đăng nhập lần đầu | T chuyển khách hàng loạt được ở KD03; T có trong danh sách chọn người phụ trách khách hàng, yêu cầu Tour, Booking; chip Của tôi của T bật sẵn ở KD03, KD05, KD07, KT01.1; Việc của tôi của T có nhóm thẻ Kinh doanh (R13) |
| AC30 | Thêm VT-007 “Thủ quỹ” thuộc phòng Kế toán, sao chép từ Kinh doanh (có `KD03.xem`); gán cho tài khoản thử U chỉ có VT-007; Kinh doanh sửa lịch thanh toán một Booking | U mở được KD03 nhưng chip Của tôi tắt sẵn; U không có trong danh sách chọn người phụ trách khách hàng, yêu cầu Tour, Booking; U nhận thông báo lịch thanh toán đổi như tài khoản Kế toán; Việc của tôi của U có nhóm thẻ Kế toán, không có nhóm Kinh doanh (R13) |
| AC31 | Đổi tên VT-006 thành “Trưởng phòng Kinh doanh” | Lưu ngay, có Hoàn tác; QT01 hiện tên mới ở lần tải sau; mục QT03 cũ giữ tên cũ (L3.2) |
| AC32 | Vai trò hệ thống | Tên dạng chữ, không sửa được; không có công tắc; menu ⋯ không có Xóa vai trò; mô tả sửa được (E3.4) |
| AC33 | Ngừng dùng VT-006 đang gán cho 2 tài khoản | Thông báo nêu 2 tài khoản giữ vai trò; hai tài khoản vẫn có quyền của VT-006; QT01 ô Vai trò khi tạo tài khoản không có VT-006; tài khoản đang có hiện “(ngừng dùng)”, bỏ được, không thêm lại được (R10) |
| AC34 | Sau AC33, sửa ma trận VT-006 | Lưu được; hai tài khoản nhận thay đổi từ yêu cầu kế tiếp (E2.10) |
| AC35 | Xóa vai trò tự tạo chưa gán | Hộp thoại W11; xác nhận thì vai trò mất khỏi QT02, QT01; mục QT03 Xóa giữ tên; vai trò tạo sau có mã mới, không dùng lại mã đã xóa (L3.4, R03) |
| AC36 | Vai trò tự tạo chỉ gán cho một tài khoản Bị khóa | Mục Xóa vai trò khóa, “Đang gán cho 1 tài khoản · bỏ ở QT01 trước”, liên kết mở QT01 lọc theo vai trò (E3.6) |
| AC37 | Mở hộp thoại xóa, phiên khác gán vai trò cho một tài khoản, rồi bấm Xóa vai trò | Máy chủ từ chối; hộp thoại báo vừa được gán; vai trò còn nguyên (E3.7) |
| AC38 | Tab Tài khoản của Kinh doanh | 6 dòng; 5 Đang hoạt động trước theo tên, Trần Quốc Bảo Bị khóa (xám) cuối; Vũ Đức Minh có Vai trò khác “Điều hành”; không có email, điện thoại; bấm dòng mở QT01 bảng trượt của tài khoản đó (L4.1) |
| AC39 | Kinh doanh tắt `KD04.xoa` và `KD05.xuat-excel`, rồi Khôi phục quyền mặc định | Không hộp thoại; hai ô về Có; chip Khác mặc định 0; mục menu khóa “Đang đúng mặc định”; một mục QT03 dạng lô 2 dòng; Hoàn tác trả lại hai ô Không (L5.1) |
| AC40 | Vai trò tự tạo | Không có Khôi phục quyền mặc định, không có chip Khác mặc định (E5.2) |
| AC41 | Menu ⋯ → Lịch sử thay đổi của Kinh doanh sau AC11, AC15 | QT03 mở với thẻ “Bản ghi: VT-001”, Toàn bộ thời gian; có hai mục (tắt, Hoàn tác) có cờ nhạy cảm (L6.1) |
| AC42 | Kế toán mở DH04 bằng đường dẫn | Trang không có quyền; không có dữ liệu; menu không có DH04 (L7.2) |
| AC43 | Tắt `KT01.xem-phai-thu` của Kinh doanh khi Lê Thu Hà đang xem KT01.1; Lê Thu Hà sang trang 2 | Trang không có quyền (E7.1) |
| AC44 | Bật `KD03.chuyen-phu-trach-hang-loat` cho Kinh doanh khi Lê Thu Hà đang mở KD03 | Ô chọn dòng chưa hiện cho tới khi tải lại; gửi thẳng yêu cầu chuyển hàng loạt trước khi tải lại thì được chấp nhận (E7.2) |
| AC45 | Lê Thu Hà gửi lô chuyển phụ trách ở KD05 ngay sau khi `KD06.chuyen-phu-trach` của Kinh doanh bị tắt | Không dòng nào được chuyển; banner nêu lý do (E7.3) |
| AC46 | Kinh doanh có `KD04.sua`; Lê Thu Hà sửa khách do người khác phụ trách | Sửa được; người phụ trách không đổi quyền (R01) |
| AC47 | Tắt quyền `KD06.chuyen-phu-trach` của Kinh doanh | Người phụ trách của mọi yêu cầu không đổi; không ai hiện “(ngừng hoạt động)” vì thay đổi này; không có cảnh báo (R13) |
| AC48 | (a) Chọn Quản trị hệ thống trên giao diện. (b) Gửi thẳng 5 yêu cầu: xóa VT-004; ngừng dùng VT-004; đổi tên VT-004; đặt phòng cho VT-004; tắt `QT02.quan-ly` của VT-004 | (a) Không có công tắc, không có mục Xóa vai trò, tên và phòng là chữ; 7 ô `QT01.*`, `QT02.*` khóa đã tích. (b) Cả 5 bị từ chối; tên, trạng thái, phòng, ma trận của VT-004 không đổi; không có mục QT03; Đỗ Quang Huy vẫn mở và sửa được QT02 (R03, R04, R12) |
| AC49 | Quản trị tắt `QT05.sua-tham-so-chung` của Quản trị hệ thống | Lưu được; Quản trị lưu tham số chung ở QT05 bị từ chối từ yêu cầu kế tiếp; QT02 vẫn dùng được (E2.9) |
| AC50 | Có VT-006 tự tạo. Chạy nâng cấp với dữ liệu khởi tạo thử thêm mã `KD05.thu-nghiem` (loại Thao tác, cần `KD05.xem`; Phụ lục B thử: Kinh doanh Có, Điều hành, Kế toán, HDV, Quản trị hệ thống Không) | VT-001 có `KD05.thu-nghiem` Có, phần đầu 60 quyền; VT-002, VT-003, VT-004, VT-006 Không; VT-005 HDV Không và khóa (R04); chip Khác mặc định của năm vai trò hệ thống không đổi; không có mục QT03; nhật ký kỹ thuật ghi “thêm 1 mã” (R11) |
| AC51 | Kinh doanh đúng mặc định (`KD05.xuat-excel` Có). Chạy nâng cấp với dữ liệu khởi tạo thử đổi mặc định `KD05.xuat-excel` của Kinh doanh thành Không; rồi bấm Khôi phục quyền mặc định | Sau nâng cấp: ô vẫn Có; chip Khác mặc định của Kinh doanh 1, dòng phụ “Mặc định: Không”; không có mục QT03. Sau Khôi phục: ô Không, Khác mặc định 0, có mục QT03 dạng lô 1 dòng (R11) |
| AC52 | Mọi thao tác ở QT02 | Không có email, tin nhắn, thông báo nào được tạo (mục 5.3) |
| AC53 | Tìm nhanh Ctrl+K của Kế toán gõ “TM-” | Không có kết quả Tour mẫu vì Kế toán không có `KD01.xem` (R01) |
| AC54 | Đang chọn Quản trị hệ thống ở cột trái, bấm + Thêm vai trò; mở ô Thuộc phòng; rồi đổi Sao chép quyền từ sang Điều hành; gửi thẳng yêu cầu tạo vai trò với phòng trống, rồi với phòng “Quản trị hệ thống” | Thuộc phòng trống; danh sách chọn chỉ có Kinh doanh, Điều hành, Kế toán, HDV; nút Thêm vai trò khóa tới khi chọn phòng; đổi Sao chép sang Điều hành thì Thuộc phòng điền Điều hành (nhãn Gợi ý); hai yêu cầu gửi thẳng bị từ chối, không tạo vai trò, không có mục QT03 (R03, E3.12) |
| AC55 | VT-006 đang gán cho 2 tài khoản; VT-007 chưa gán. Bấm ô phòng của VT-006; gửi thẳng yêu cầu đổi phòng VT-006; đổi phòng VT-007 Kế toán → Điều hành rồi bấm Hoàn tác | VT-006: phòng hiện dạng chữ “Thuộc phòng Kinh doanh”, lý do “Đang gán cho 2 tài khoản · bỏ ở QT01 trước khi đổi phòng”; yêu cầu gửi thẳng bị từ chối. VT-007: lưu ngay, QT03 ghi “Phòng: Kế toán → Điều hành”; Hoàn tác đưa về Kế toán, QT03 có mục Hoàn tác (R03, E3.11) |
| AC56 | Tài khoản V chỉ có vai trò Kinh doanh, phụ trách 3 khách hàng; ở QT01 thêm VT-006 (phòng Kinh doanh) rồi bỏ Kinh doanh; sau đó ngừng dùng VT-006 ở QT02 | Lưu ở QT01 không có cảnh báo bỏ vai trò; 3 khách giữ người phụ trách V, không kèm “(ngừng hoạt động)”. Sau khi ngừng dùng VT-006: V vẫn giữ hành vi phòng Kinh doanh và quyền của VT-006 (R10, R13; RSD QT01 R08) |
| AC57 | Tắt lần lượt 4 ô quyền khác nhau của Kinh doanh trong 10 giây | Chỉ 3 thông báo ngắn hiện, thông báo của lần tắt đầu đã đóng và không còn Hoàn tác; Hoàn tác ở mỗi thông báo còn lại chỉ đổi đúng ô của nó; thông báo tự đóng 10 giây sau khi hiện (2.5; CGD U2.07) |
| AC58 | Chọn HDV ở cột trái | Phần đầu “HDV · VT-005 · Vai trò hệ thống”, dòng phụ “2 tài khoản · 3 quyền đang có · Khác mặc định: 0”; module HDV 3/3, sáu module còn lại 0; mọi ô ngoài `HD01.*` khóa ở Không với lý do “Phòng HDV chỉ dùng Tour của tôi (ADR 0007)” (riêng `QT01.*`, `QT02.*` lý do “Chỉ Quản trị hệ thống”); không có công tắc, không có Xóa vai trò (R03, R04, E2.11) |
| AC59 | Gửi thẳng yêu cầu bật `DH08.xem` cho VT-005; sau đó bỏ tích `HD01.ghi-chi-phi` của VT-005 rồi bấm Hoàn tác | Lần 1 bị từ chối “Quyền này gắn cố định, không đổi được”, ma trận không đổi, không có mục QT03. Lần 2 lưu ngay, chip Khác mặc định 1, dòng phụ “Mặc định: Có”; Hoàn tác đưa về 0 (R04, R06) |
| AC60 | + Thêm vai trò “HDV thử việc”, Thuộc phòng HDV, Sao chép quyền từ Kinh doanh | Dưới ô Sao chép ghi “0 quyền · phòng HDV chỉ nhận quyền Tour của tôi”; vai trò tạo với 0 quyền đang có; mọi ô ngoài `HD01.*` khóa ở Không; tích `HD01.xem` lưu được (R09, E2.11) |
| AC61 | VT-007 “Thủ quỹ” thuộc phòng Kế toán, chưa gán, có 38 quyền (sao chép từ Kế toán); đổi phòng sang HDV; rồi bấm Hoàn tác | Lưu ngay; 38 ô về Không và khóa; thông báo “… tắt 38 quyền ngoài Tour của tôi”; QT03 một mục dạng lô có “Phòng: Kế toán → HDV” và 38 dòng ô; Hoàn tác trả phòng Kế toán và 38 ô Có, QT03 có mục Hoàn tác (E3.13) |
| AC62 | Ngô Thị Mai (chỉ VT-005; NS-015 phân công HDV điểm ở TP-2611-0042) đăng nhập; mở HD01; gọi thẳng API chi tiết HD01 của TP-2611-0038; gọi API danh sách DH07 | HD01 chỉ có TP-2611-0042; API HD01 của TP-2611-0038 trả cùng mã trạng thái và phần thân như một Tour Code không tồn tại, không có dữ liệu hồ sơ; API DH07 bị từ chối vì quyền (R16, L7.3) |
| AC63 | Như AC62; Mai mở TP-2611-0042 trên HD01, nhập một mục nhật ký; Điều hành gỡ phân công của NS-015 ở DH08.5; Mai bấm Lưu; rồi tải lại HD01 | Lần lưu bị từ chối; không có mục nhật ký mới, không có mục QT03; chữ đang nhập còn trên màn; sau khi tải lại, danh sách Tour của tôi không còn TP-2611-0042 (R16, L7.3) |
| AC64 | NS-015 còn phân công ở TP-2611-0042; hồ sơ Đã kết thúc; Điều hành Đóng Tour, Mai tải lại HD01; sau đó Điều hành Mở lại Tour, Mai tải lại HD01 | Sau khi đóng: HD01 không có TP-2611-0042. Sau khi mở lại: HD01 hiện lại TP-2611-0042 (E7.8, R16) |
| AC65 | Tài khoản thử có Điều hành và HDV, liên kết một nhân sự Nội bộ được phân công ở đúng một hồ sơ; mở DH07 rồi HD01 | DH07 hiện mọi hồ sơ như tài khoản Điều hành; HD01 chỉ hiện hồ sơ được phân công (E7.9, R16) |
| AC66 | Đỗ Quang Huy (Quản trị hệ thống, không liên kết nhân sự) mở HD01, rồi mở DH08 của TP-2611-0042 | HD01 mở được và không có Tour nào; DH08 của TP-2611-0042 xem được mọi tab (R16; Q25) |

---

## Phụ lục A · Danh mục mã quyền

Danh mục đi cùng phiên bản phần mềm (R02). 132 dòng: 128 mã quyền là ô của ma trận (121 bật tắt được, 7 cố định với Quản trị hệ thống; với vai trò thuộc phòng HDV, mọi mã ngoài `HD01.*` cố định Không, R04) và 4 dòng Chung (CH01–CH03) không là ô của ma trận. Cột:

- **Màn hoặc phần:** nơi thao tác hiện trên giao diện; mã dùng ở nhiều màn ghi đủ (nhãn “Dùng ở” trên ma trận).
- **Loại:** Xem, Phần nhạy cảm, Thao tác, Cố định, Mọi tài khoản, Không cần quyền (R02). Mã loại Xem và Phần nhạy cảm cố định Có với Quản trị hệ thống (R04).
- **Cần:** quyền tài khoản phải có thêm thì thao tác mới có tác dụng (R05). “Xem của màn nơi bấm” là mã Xem của màn có nút.
- **Nguồn:** RSD và mục; “1.4” là mục Quyền mặc định theo vai trò (QT05 là 1.5). Ba mã `HD01.*` lấy theo BOI-CANH “Vai trò HDV”; RSD HD01 (viết song song) dẫn đúng ba mã này.

| Mã quyền | Module | Màn hoặc phần | Tên hiển thị | Gồm | Loại | Cần | Nguồn (RSD, mục) |
|---|---|---|---|---|---|---|---|
| `KD01.xem` | Kinh doanh | KD01, KD02 | Xem Tour mẫu | Danh sách, tìm, lọc ở KD01; mở KD02; giá vốn tham khảo | Xem | — | KD01-KD02 1.4 |
| `KD02.tao` | Kinh doanh | KD01 | Tạo Tour mẫu | Nút tạo ở KD01 | Thao tác | `KD01.xem` | KD01-KD02 1.4 |
| `KD02.sua-thong-tin-chung` | Kinh doanh | KD02.1 | Sửa thông tin chung Tour mẫu | — | Thao tác | `KD01.xem` | KD01-KD02 1.4 |
| `KD02.sua-lich-trinh` | Kinh doanh | KD02.2 | Sửa lịch trình và dịch vụ Tour mẫu | Ngày, nội dung lịch trình, dòng dịch vụ | Thao tác | `KD01.xem` | KD01-KD02 1.4 |
| `KD02.bat-tat` | Kinh doanh | KD01, KD02 | Bật, tắt Tour mẫu | Công tắc Đang dùng / Ngừng dùng | Thao tác | `KD01.xem` | KD01-KD02 1.4 |
| `KD03.xem` | Kinh doanh | KD03 | Xem danh sách khách hàng | Tìm, lọc, mở hồ sơ | Xem | — | KD03-KD04 1.4 |
| `KD03.chuyen-phu-trach-hang-loat` | Kinh doanh | KD03 | Chuyển người phụ trách khách hàng loạt | Ô chọn dòng, thanh hàng loạt | Thao tác | `KD03.xem` | KD03-KD04 1.4 |
| `KD04.tao-khach` | Kinh doanh | KD03, KD06.1 | Tạo khách hàng | Nút tạo ở KD03; tạo nhanh khách trong hộp thoại tìm khách ở KD06.1 | Thao tác | Xem của màn nơi bấm | KD03-KD04 1.4; KD06 1.3 |
| `KD04.xem` | Kinh doanh | KD04.1 | Xem hồ sơ khách hàng | Thông tin, người liên hệ, ngày sinh, địa chỉ | Xem | — | KD03-KD04 1.4 |
| `KD04.sua` | Kinh doanh | KD04.1 | Sửa khách hàng | Thông tin, người liên hệ, lý do lưu khi trùng | Thao tác | `KD04.xem` | KD03-KD04 1.4 |
| `KD04.chuyen-phu-trach` | Kinh doanh | KD04 | Chuyển người phụ trách một khách | — | Thao tác | `KD04.xem` | KD03-KD04 1.4 |
| `KD04.xoa` | Kinh doanh | KD04 | Xóa khách hàng chưa dùng | — | Thao tác | `KD04.xem` | KD03-KD04 1.4 |
| `KD04.xem-lich-su-tour` | Kinh doanh | KD04.2, KD04.3 | Xem Lịch sử Tour, yêu cầu Tour và Booking của khách | — | Xem | `KD04.xem` | KD03-KD04 1.4 |
| `KD05.xem` | Kinh doanh | KD05 | Xem danh sách yêu cầu Tour | Bảng, Kanban, Lịch; tìm, lọc mọi yêu cầu | Xem | — | KD05 1.4 |
| `KD05.xuat-excel` | Kinh doanh | KD05 | Xuất Excel danh sách yêu cầu | Theo bộ lọc; tệp không có email, điện thoại | Thao tác | `KD05.xem` | KD05 1.4 |
| `KD06.xem` | Kinh doanh | KD06 | Xem hồ sơ yêu cầu Tour | KD06.1–KD06.3, lịch sử; mở proposal, sao chép link đang mở | Xem | — | KD06 1.4 |
| `KD06.tao-yeu-cau` | Kinh doanh | KD04, KD05, KD06 | Tạo yêu cầu Tour | Người tạo là người phụ trách | Thao tác | Xem của màn nơi bấm | KD03-KD04 1.4; KD05 1.4; KD06 1.4 |
| `KD06.sua` | Kinh doanh | KD06.1, KD06.2 | Sửa yêu cầu và hành trình | Thông tin, hành trình, nội dung tiếng Anh, tạo hành trình và dịch nháp bằng AI | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.tinh-gia` | Kinh doanh | KD06.3 | Tính giá, lưu phiên bản báo giá | — | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.ghi-ket-qua` | Kinh doanh | KD06.3 | Ghi kết quả báo giá | Chốt, Cần điều chỉnh, Không chốt | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.publish-link` | Kinh doanh | KD06.3 | Publish, gia hạn, thu hồi link proposal | — | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.huy-yeu-cau` | Kinh doanh | KD06 | Hủy yêu cầu Tour | — | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.mo-lai-yeu-cau` | Kinh doanh | KD06 | Mở lại yêu cầu Tour | Kèm lý do, có thể chọn người phụ trách mới | Thao tác | `KD06.xem` | KD06 1.4 |
| `KD06.chuyen-phu-trach` | Kinh doanh | KD05, KD06 | Chuyển người phụ trách yêu cầu | Một hoặc hàng loạt ở KD05; một yêu cầu ở KD06 | Thao tác | Xem của màn nơi bấm | KD05 1.4; KD06 1.4 |
| `KD07.xem` | Kinh doanh | KD07 | Xem danh sách Booking | Bảng, Lịch; mở KD08 theo KD08.xem | Xem | — | KD07 1.4 |
| `KD08.xem` | Kinh doanh | KD08.1, KD08.2 | Xem hồ sơ Booking | — | Xem | — | KD08 1.4 |
| `KD08.tao-booking` | Kinh doanh | KD06.3 | Tạo Booking | Nút ở KD06.3, từ phiên bản Chốt | Thao tác | `KD06.xem` | KD06 1.4; KD08 1.4 |
| `KD08.xem-lich-su` | Kinh doanh | KD08 | Xem lịch sử thay đổi Booking | — | Xem | `KD08.xem` | KD08 1.4 |
| `KD08.sua-thanh-toan` | Kinh doanh | KD08.2 | Sửa điều khoản và lịch thanh toán | — | Thao tác | `KD08.xem` | KD08 1.4 |
| `KD08.dieu-chinh-chuong-trinh` | Kinh doanh | KD08 | Điều chỉnh chương trình, Chuyển sang Điều hành | Nút mở KD06 ở chế độ điều chỉnh; nút Chuyển sang Điều hành. Sửa và tính giá trong chế độ điều chỉnh theo KD06.sua, KD06.tinh-gia | Thao tác | `KD08.xem` | KD08 1.4 |
| `KD08.huy-booking` | Kinh doanh | KD08.1 | Hủy Booking | — | Thao tác | `KD08.xem` | KD08 1.4 |
| `KD08.chuyen-phu-trach` | Kinh doanh | KD08 | Chuyển người phụ trách Booking | Yêu cầu Tour chuyển theo | Thao tác | `KD08.xem` | KD08 1.4 |
| `DH01.xem` | Điều hành | DH01 | Xem mẫu checklist | Danh sách, tìm, lọc, mở mẫu, xem trước, lịch sử phiên bản | Xem | — | DH01 1.4 |
| `DH01.quan-ly` | Điều hành | DH01 | Quản lý mẫu checklist | Tạo, sửa và lưu phiên bản mới, bật tắt, xóa mẫu chưa dùng | Thao tác | `DH01.xem` | DH01 1.4 |
| `DH02.xem` | Điều hành | DH02 | Xem danh sách NCC | Tìm, lọc; mở hồ sơ NCC theo DH03.xem | Xem | — | DH02 1.4 |
| `DH02.bat-tat-ncc` | Điều hành | DH02, DH03 | Bật, tắt NCC | Dòng, hàng loạt ở DH02; công tắc ở phần đầu DH03 | Thao tác | Xem của màn nơi bấm | DH02 1.4; DH03 1.4 |
| `DH02.nhap-excel` | Điều hành | DH02 | Nhập NCC từ Excel | — | Thao tác | `DH02.xem` | DH02 1.4 |
| `DH03.xem` | Điều hành | DH03, DH05 | Xem hồ sơ NCC | Thông tin chung, hợp đồng, dịch vụ và bảng giá, trừ phần thanh toán | Xem | — | DH03 1.4 |
| `DH03.tao-ncc` | Điều hành | DH02, DH03 | Tạo NCC | Nút tạo ở DH02 mở DH03 tạo mới | Thao tác | Xem của màn nơi bấm | DH02 1.4; DH03 1.4 |
| `DH03.xem-cong-no` | Điều hành | DH03 | Xem công nợ NCC | Nút ở phần đầu DH03, mở KT01.2 | Xem | `DH03.xem`; `KT01.xem-phai-tra` | DH03 1.4 |
| `DH03.sua-thong-tin-chung` | Điều hành | DH03.1 | Sửa thông tin chung NCC | Thông tin chung, đầu mối, email đặt dịch vụ | Thao tác | `DH03.xem` | DH03 1.4 |
| `DH03.xem-thanh-toan-ncc` | Điều hành | DH03.1, DH03.2, KT01.2 | Xem thông tin thanh toán NCC | Thông tin nhận thanh toán, mã số thuế, điều khoản thanh toán của hợp đồng và của đợt trả, lịch sử hai phần này | Phần nhạy cảm | Xem của màn nơi hiện | DH03 1.4; KT01 1.4 |
| `DH03.sua-thong-tin-nhan-thanh-toan` | Điều hành | DH03.1 | Sửa thông tin nhận thanh toán NCC | — | Thao tác | `DH03.xem-thanh-toan-ncc` | DH03 1.4 |
| `DH03.hop-dong` | Điều hành | DH03.2 | Thêm, sửa, gia hạn, xóa hợp đồng NCC | Hợp đồng, mùa giá, chính sách đổi hủy, chính sách trẻ em | Thao tác | `DH03.xem` | DH03 1.4 |
| `DH03.sua-dieu-khoan-thanh-toan` | Điều hành | DH03.2 | Sửa điều khoản thanh toán của hợp đồng | — | Thao tác | `DH03.xem-thanh-toan-ncc` | DH03 1.4 |
| `DH03.dich-vu-bang-gia` | Điều hành | DH03.3, DH05, DH04 | Sửa dịch vụ và bảng giá | Thêm, sửa, bật tắt, nhân bản, xóa, nhập Excel; nút Sửa trong hồ sơ NCC ở DH04 | Thao tác | `DH03.xem` | DH03 1.4; DH04 1.4 |
| `DH04.xem` | Điều hành | DH04 | Tra cứu dịch vụ và bảng giá | Danh sách, tìm, lọc, giá áp dụng, công tắc Gồm cả ngừng dùng, hết hạn; DH05 chỉ xem | Xem | — | DH04 1.4 |
| `DH06.xem` | Điều hành | DH06 | Xem danh mục nhân sự | Danh sách, bảng trượt, lịch phân công, liên hệ, ghi chú | Xem | — | DH06 1.4 |
| `DH06.them-sua` | Điều hành | DH06 | Thêm, sửa nhân sự | — | Thao tác | `DH06.xem` | DH06 1.4 |
| `DH06.bat-tat-nhan-phan-cong` | Điều hành | DH06 | Bật, tắt Nhận phân công | — | Thao tác | `DH06.xem` | DH06 1.4 |
| `DH06.xoa` | Điều hành | DH06 | Xóa nhân sự chưa từng được phân công | — | Thao tác | `DH06.xem` | DH06 1.4 |
| `DH07.xem` | Điều hành | DH07 | Xem danh sách hồ sơ Tour | Bảng, Kanban, Lịch; mở DH08 theo DH08.xem | Xem | — | DH07 1.4 |
| `DH07.giao-phu-trach` | Điều hành | DH07, DH08.1 | Giao người phụ trách hồ sơ Tour | Tại chỗ, hàng loạt, trên thẻ Kanban ở DH07; ô Điều hành phụ trách trong Thông tin điều hành ở DH08.1; hồ sơ chưa đóng | Thao tác | Xem của màn nơi bấm | DH07 1.4; DH08 2.2, 5.2 |
| `DH08.xem` | Điều hành | DH08 | Xem hồ sơ Tour | Mọi tab DH08.1–DH08.8; số hộ chiếu đã che | Xem | — | DH08 1.4 |
| `DH08.sua-tong-quan` | Điều hành | DH08.1 | Sửa thông tin điều hành | Các trường của Thông tin điều hành (ngôn ngữ phục vụ…), trừ Điều hành phụ trách (theo `DH07.giao-phu-trach`) | Thao tác | `DH08.xem` | DH08 1.4, 5.2 |
| `DH08.bat-dau-ket-thuc` | Điều hành | DH08 | Bắt đầu, kết thúc Tour | Bắt đầu Tour, Kết thúc Tour; Kết thúc hồ sơ khi Booking đã hủy (RSD DH08 R14) | Thao tác | `DH08.xem` | DH08 1.4, R14 |
| `DH08.ap-dung-thay-doi` | Điều hành | DH08 | Áp dụng thay đổi chương trình | Xem thay đổi, Áp dụng thay đổi | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.dich-vu-checklist` | Điều hành | DH08.2 | Sửa dịch vụ và checklist | Thêm, sửa, bỏ dịch vụ; phân công; cập nhật tiến độ | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.doi-ncc-dich-vu` | Điều hành | DH08.2, DH08.3 | Đổi NCC/dịch vụ | — | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.dat-dich-vu` | Điều hành | DH08.3 | Đặt dịch vụ với NCC | Gửi đặt, đặt lại, hủy, ghi kết quả, gửi điều chỉnh, báo Kinh doanh | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.khach-doan` | Điều hành | DH08.4 | Sửa danh sách khách đoàn | Thêm, sửa, nhập Excel, yêu cầu riêng, gán chuyến bay; xem số hộ chiếu đầy đủ trong form khách | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.phan-phong` | Điều hành | DH08.4 | Phân phòng, Pax list, Rooming list | Xếp phòng, tải, gửi NCC | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.nhan-su` | Điều hành | DH08.5 | Phân công nhân sự phục vụ Tour | Phân công, sửa, bỏ | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.nhat-ky-su-co` | Điều hành | DH08.6 | Ghi nhật ký và sự cố | Thêm, cập nhật kết quả; sửa, xóa mục Do HDV ghi (RSD DH08 L6.4, R20) | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.chi-phi-phat-sinh` | Điều hành | DH08.7 | Sửa chi phí phát sinh | Thêm, sửa khoản chưa ghi công nợ; xóa khoản Do HDV ghi chưa ghi công nợ (RSD DH08 L7.3, R20) | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.chi-phi-thuc-te` | Điều hành | DH08.8 | Nhập chi phí thực tế | Đến khi đóng Tour; gồm sửa, Bỏ số HDV của dòng Do HDV ghi (RSD DH08 L8.1, R20) | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.dong-tour` | Điều hành | DH08 | Đóng Tour | — | Thao tác | `DH08.xem` | DH08 1.4 |
| `DH08.mo-lai-tour` | Điều hành | DH08 | Mở lại Tour | Kèm lý do, có thể chọn Điều hành phụ trách mới | Thao tác | `DH08.xem` | DH08 1.4, R16 |
| `DH08.quyet-toan` | Điều hành | DH08.8 | Quyết toán | Đối chiếu, điều chỉnh, lưu quyết toán | Thao tác | `DH08.xem` | DH08 1.4 |
| `KT01.xem-phai-thu` | Kế toán | KT01.1 | Xem phải thu khách hàng | — | Xem | — | KT01 1.4 |
| `KT01.xem-phai-tra` | Kế toán | KT01.2 | Xem phải trả NCC | Không gồm thông tin thanh toán NCC | Xem | — | KT01 1.4 |
| `KT01.xem-cong-no-tour` | Kế toán | KT01.3 | Xem công nợ theo Tour | — | Xem | — | KT01 1.4 |
| `KT01.xem-tai-khoan-nhan-hoan` | Kế toán | KT01.1 | Xem tài khoản nhận hoàn của khách | — | Phần nhạy cảm | `KT01.xem-phai-thu` | KT01 1.4 |
| `KT01.ghi-giao-dich` | Kế toán | KT01 | Ghi, hủy giao dịch | Thu từ khách, Hoàn cho khách, Chi trả NCC, Nhận hoàn từ NCC; phân bổ, Dùng tiền thừa | Thao tác | Xem của tab nơi bấm | KT01 1.4 |
| `KT01.dieu-chinh-sau-huy` | Kế toán | KT01.1 | Ghi, sửa điều chỉnh sau hủy | — | Thao tác | `KT01.xem-phai-thu` | KT01 1.4 |
| `KT01.ghi-phai-tra` | Kế toán | KT01.2 | Ghi phải trả, điều chỉnh khoản phải trả | — | Thao tác | `KT01.xem-phai-tra` | KT01 1.4 |
| `KT01.ghi-cong-no-phat-sinh` | Kế toán | KT01.3, DH08.7 | Ghi công nợ phát sinh | Nút Ghi công nợ ở DH08.7 mở KT01.3 | Thao tác | `KT01.xem-cong-no-tour` | KT01 1.4; DH08 1.4 |
| `KT01.sua-chung-tu` | Kế toán | KT01 | Sửa ngày chứng từ, tệp, ghi chú của giao dịch | — | Thao tác | Xem của tab nơi bấm | KT01 1.4 |
| `HD01.xem` | HDV | HD01 | Xem Tour của tôi | Danh sách Tour mình được phân công; chương trình theo ngày, dịch vụ đã đặt, liên hệ NCC, khách đoàn (số hộ chiếu che; Hiện số từng khách, mỗi lần ghi QT03), Rooming list; gọi Điều hành phụ trách, người liên hệ phía khách hàng, khách trong đoàn; tải PDF chương trình không giá (RSD HD01 R11–R13); nhật ký, sự cố, chi phí của Tour đó. Chỉ hồ sơ được phân công (R16); không có giá bán, giá vốn, Markup, công nợ, quyết toán, thông tin thanh toán NCC | Xem | — | BOI-CANH (Vai trò HDV); RSD HD01 1.4 |
| `HD01.ghi-nhat-ky` | HDV | HD01 | Ghi nhật ký và sự cố | Thêm mục nhật ký, sự cố (nhãn Do HDV ghi); sửa, xóa mục do chính mình ghi khi hồ sơ chưa Đã đóng | Thao tác | `HD01.xem` | BOI-CANH (Vai trò HDV); RSD HD01 1.4 |
| `HD01.ghi-chi-phi` | HDV | HD01 | Ghi chi phí phát sinh và chi phí thực tế | Thêm kèm ảnh chứng từ (nhãn Do HDV ghi); sửa, xóa mục do chính mình ghi khi hồ sơ chưa Đã đóng | Thao tác | `HD01.xem` | BOI-CANH (Vai trò HDV); RSD HD01 1.4 |
| `QT01.xem` | Quản trị | QT01 | Xem người dùng | Danh sách, tìm, lọc, lịch sử tài khoản | Cố định | — | QT01 1.4 |
| `QT01.tao-sua` | Quản trị | QT01 | Tạo tài khoản, sửa thông tin và vai trò | — | Cố định | `QT01.xem` | QT01 1.4 |
| `QT01.lien-ket-nhan-su` | Quản trị | QT01 | Liên kết, gỡ liên kết nhân sự | — | Cố định | `QT01.xem` | QT01 1.4 |
| `QT01.dat-lai-mat-khau` | Quản trị | QT01 | Đặt lại mật khẩu | Trừ tài khoản của chính mình | Cố định | `QT01.xem` | QT01 1.4 |
| `QT01.khoa-mo-khoa` | Quản trị | QT01 | Khóa, mở khóa tài khoản | Trừ tài khoản của chính mình | Cố định | `QT01.xem` | QT01 1.4 |
| `QT02.xem` | Quản trị | QT02 | Xem vai trò và quyền | Danh sách vai trò, ma trận quyền, tài khoản đang có vai trò | Cố định | — | QT02 1.4 |
| `QT02.quan-ly` | Quản trị | QT02 | Quản lý vai trò và quyền | Tạo, đổi tên, sửa mô tả, bật tắt quyền, Hoàn tác, ngừng dùng, xóa, khôi phục mặc định | Cố định | `QT02.xem` | QT02 1.4 |
| `QT03.xem` | Quản trị | QT03 | Xem nhật ký thao tác | Tìm, lọc, bảng trượt chi tiết; mở bản ghi theo quyền xem màn nguồn | Xem | — | QT03 1.4 |
| `QT03.xuat-excel` | Quản trị | QT03 | Xuất Excel nhật ký thao tác | — | Thao tác | `QT03.xem` | QT03 1.4 |
| `QT04.xem` | Quản trị | QT04.2 | Xem mẫu tài liệu và email | Danh sách, mở mẫu, lịch sử phiên bản | Xem | — | QT04 1.4 |
| `QT04.quan-ly-mau` | Quản trị | QT04.2 | Quản lý mẫu Điều hành | Tạo, sửa, lưu, bật tắt, xóa, khôi phục, xem trước, gửi thử, tải thử | Thao tác | `QT04.xem` | QT04 1.4 |
| `QT05.xem` | Quản trị | QT05 | Xem danh mục dùng chung | Mọi nhóm, tìm | Xem | — | QT05 1.5 |
| `QT05.sua-loai-dich-vu` | Quản trị | QT05 | Sửa nhóm Loại dịch vụ | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-don-vi-tinh` | Quản trị | QT05 | Sửa nhóm Đơn vị tính | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-hang-phong` | Quản trị | QT05 | Sửa nhóm Hạng phòng | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-the-bao-gom` | Quản trị | QT05 | Sửa nhóm Thẻ bao gồm, không bao gồm | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-dia-diem` | Quản trị | QT05 | Sửa nhóm Địa điểm | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-nhom-cong-viec` | Quản trị | QT05 | Sửa nhóm Nhóm công việc | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ngon-ngu` | Quản trị | QT05 | Sửa nhóm Ngôn ngữ | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-loai-tour` | Quản trị | QT05 | Sửa nhóm Loại Tour | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-quoc-gia` | Quản trị | QT05 | Sửa nhóm Quốc gia | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-nhom-quoc-gia` | Quản trị | QT05 | Sửa nhóm Nhóm quốc gia | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-nguon-khach` | Quản trị | QT05 | Sửa nhóm Nguồn khách | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ly-do-huy-yeu-cau` | Quản trị | QT05 | Sửa nhóm Lý do hủy yêu cầu Tour | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ly-do-huy-booking` | Quản trị | QT05 | Sửa nhóm Lý do hủy Booking | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-loai-tien` | Quản trị | QT05 | Sửa nhóm Loại tiền | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ty-gia` | Quản trị | QT05 | Sửa nhóm Tỷ giá | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-phuong-thuc-thanh-toan` | Quản trị | QT05 | Sửa nhóm Phương thức thanh toán | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ngan-hang` | Quản trị | QT05 | Sửa nhóm Ngân hàng | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-hang-muc-markup` | Quản trị | QT05 | Sửa nhóm Hạng mục dịch vụ & Markup | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-chinh-sach-hoan-huy` | Quản trị | QT05 | Sửa nhóm Chính sách hoàn hủy Booking | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-ngay-nghi-le` | Quản trị | QT05 | Sửa nhóm Ngày nghỉ lễ | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-tham-so-chung` | Quản trị | QT05 | Sửa nhóm Tham số chung | Thêm, sửa, bật tắt, xóa, đổi thứ tự giá trị của nhóm | Thao tác | `QT05.xem` | QT05 1.2, 1.5 |
| `QT05.sua-markup-mac-dinh` | Quản trị | QT05 | Sửa Markup mặc định | Trường Markup mặc định của Loại Tour và của Hạng mục dịch vụ & Markup | Thao tác | Sửa của nhóm chứa trường | QT05 1.5 |
| `QT05.sua-boi-so-lam-tron` | Quản trị | QT05 | Sửa bội số làm tròn giá bán | Trường của nhóm Loại tiền | Thao tác | `QT05.sua-loai-tien` | QT05 1.5 |
| `QT07.xem` | Báo cáo | QT07 | Xem báo cáo doanh thu | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT07.xuat-excel` | Báo cáo | QT07 | Xuất Excel báo cáo doanh thu | Theo bộ lọc và phạm vi | Thao tác | `QT07.xem` | QT07-QT12 1.4 |
| `QT08.xem` | Báo cáo | QT08 | Xem báo cáo chuyển đổi yêu cầu và báo giá | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT08.xuat-excel` | Báo cáo | QT08 | Xuất Excel báo cáo chuyển đổi yêu cầu và báo giá | Theo bộ lọc và phạm vi | Thao tác | `QT08.xem` | QT07-QT12 1.4 |
| `QT09.xem` | Báo cáo | QT09 | Xem báo cáo P&L theo Tour | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT09.xuat-excel` | Báo cáo | QT09 | Xuất Excel báo cáo P&L theo Tour | Theo bộ lọc và phạm vi | Thao tác | `QT09.xem` | QT07-QT12 1.4 |
| `QT10.xem` | Báo cáo | QT10 | Xem báo cáo công nợ phải thu và phải trả | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT10.xuat-excel` | Báo cáo | QT10 | Xuất Excel báo cáo công nợ phải thu và phải trả | Theo bộ lọc và phạm vi | Thao tác | `QT10.xem` | QT07-QT12 1.4 |
| `QT11.xem` | Báo cáo | QT11 | Xem báo cáo hiệu suất nhà cung cấp | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT11.xuat-excel` | Báo cáo | QT11 | Xuất Excel báo cáo hiệu suất nhà cung cấp | Theo bộ lọc và phạm vi | Thao tác | `QT11.xem` | QT07-QT12 1.4 |
| `QT12.xem` | Báo cáo | QT12 | Xem báo cáo sự cố và chi phí phát sinh | Đủ dữ liệu, không lọc theo người phụ trách; khoan sâu theo quyền màn đích | Xem | — | QT07-QT12 1.4 |
| `QT12.xuat-excel` | Báo cáo | QT12 | Xuất Excel báo cáo sự cố và chi phí phát sinh | Theo bộ lọc và phạm vi | Thao tác | `QT12.xem` | QT07-QT12 1.4 |
| `CH01.dang-nhap` | Chung | CH01 | Đăng nhập | Trước khi đăng nhập; bắt đổi mật khẩu tạm | Không cần quyền | — | BOI-CANH (Q2, Q24) |
| `CH01.doi-mat-khau` | Chung | CH01 | Đổi mật khẩu | Mật khẩu của chính mình | Mọi tài khoản | — | BOI-CANH (Q24) |
| `CH02.xem` | Chung | CH02 | Xem thông báo của mình | Mở bản ghi theo quyền xem màn đích | Mọi tài khoản | — | BOI-CANH (Q2) |
| `CH03.xem` | Chung | CH03 | Xem Việc của tôi | Thẻ theo vai trò; bấm thẻ mở danh sách theo quyền xem màn đích | Mọi tài khoản | — | BOI-CANH (U4) |

---

## Phụ lục B · Ma trận quyền mặc định

Người dùng đã duyệt ma trận này ngày 12/11/2026, gồm cả cột HDV. Mọi thay đổi giá trị mặc định sau ngày này là thay đổi quyền, phải hỏi người dùng.

Giá trị khởi tạo của năm vai trò hệ thống và đích của Khôi phục quyền mặc định (R11). Lấy đúng mục 1.4 của từng RSD; chỗ hai nguồn khác nhau xử lý theo BOI-CANH, BOI-CANH không nói thì theo RSD của màn đó. “Cố định” là ô không bật tắt được (R04). Bốn dòng Chung (CH01–CH03) không có trong ma trận. Cột HDV: ba mã `HD01.*` Có, mọi mã khác Không và cố định (R04).

**Tóm tắt số quyền đang có theo module**

| Module | Số mã | Kinh doanh | Điều hành | Kế toán | HDV | Quản trị hệ thống |
|---|---|---|---|---|---|---|
| Kinh doanh (KD01–KD08) | 32 | 31 | 3 | 3 | 0 | 15 |
| Điều hành (DH01–DH08) | 37 | 5 | 34 | 9 | 0 | 10 |
| Kế toán (KT01) | 9 | 3 | 3 | 9 | 0 | 4 |
| HDV (HD01) | 3 | 0 | 0 | 0 | 3 | 1 |
| Quản trị (QT01–QT05) | 35 | 8 | 10 | 5 | 0 | 34 |
| Báo cáo (QT07–QT12) | 12 | 12 | 12 | 12 | 0 | 12 |
| **Tổng** | **128** | **59** | **62** | **38** | **3** | **76** |

**Ma trận đầy đủ**

| Mã quyền | Tên hiển thị | Kinh doanh | Điều hành | Kế toán | HDV | Quản trị hệ thống |
|---|---|---|---|---|---|---|
| `KD01.xem` | Xem Tour mẫu | Có | Có | Không | Không (cố định) | Có (cố định, Q25) |
| `KD02.tao` | Tạo Tour mẫu | Có | Không | Không | Không (cố định) | Không |
| `KD02.sua-thong-tin-chung` | Sửa thông tin chung Tour mẫu | Có | Không | Không | Không (cố định) | Không |
| `KD02.sua-lich-trinh` | Sửa lịch trình và dịch vụ Tour mẫu | Có | Không | Không | Không (cố định) | Không |
| `KD02.bat-tat` | Bật, tắt Tour mẫu | Có | Không | Không | Không (cố định) | Không |
| `KD03.xem` | Xem danh sách khách hàng | Có | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `KD03.chuyen-phu-trach-hang-loat` | Chuyển người phụ trách khách hàng loạt | Không | Không | Không | Không (cố định) | Có |
| `KD04.tao-khach` | Tạo khách hàng | Có | Không | Không | Không (cố định) | Không |
| `KD04.xem` | Xem hồ sơ khách hàng | Có | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `KD04.sua` | Sửa khách hàng | Có | Không | Không | Không (cố định) | Không |
| `KD04.chuyen-phu-trach` | Chuyển người phụ trách một khách | Có | Không | Không | Không (cố định) | Có |
| `KD04.xoa` | Xóa khách hàng chưa dùng | Có | Không | Không | Không (cố định) | Không |
| `KD04.xem-lich-su-tour` | Xem Lịch sử Tour, yêu cầu Tour và Booking của khách | Có | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `KD05.xem` | Xem danh sách yêu cầu Tour | Có | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `KD05.xuat-excel` | Xuất Excel danh sách yêu cầu | Có | Không | Không | Không (cố định) | Có |
| `KD06.xem` | Xem hồ sơ yêu cầu Tour | Có | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `KD06.tao-yeu-cau` | Tạo yêu cầu Tour | Có | Không | Không | Không (cố định) | Không |
| `KD06.sua` | Sửa yêu cầu và hành trình | Có | Không | Không | Không (cố định) | Không |
| `KD06.tinh-gia` | Tính giá, lưu phiên bản báo giá | Có | Không | Không | Không (cố định) | Không |
| `KD06.ghi-ket-qua` | Ghi kết quả báo giá | Có | Không | Không | Không (cố định) | Không |
| `KD06.publish-link` | Publish, gia hạn, thu hồi link proposal | Có | Không | Không | Không (cố định) | Không |
| `KD06.huy-yeu-cau` | Hủy yêu cầu Tour | Có | Không | Không | Không (cố định) | Không |
| `KD06.mo-lai-yeu-cau` | Mở lại yêu cầu Tour | Có | Không | Không | Không (cố định) | Có |
| `KD06.chuyen-phu-trach` | Chuyển người phụ trách yêu cầu | Có | Không | Không | Không (cố định) | Có |
| `KD07.xem` | Xem danh sách Booking | Có | Không | Có | Không (cố định) | Có (cố định, Q25) |
| `KD08.xem` | Xem hồ sơ Booking | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `KD08.tao-booking` | Tạo Booking | Có | Không | Không | Không (cố định) | Không |
| `KD08.xem-lich-su` | Xem lịch sử thay đổi Booking | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `KD08.sua-thanh-toan` | Sửa điều khoản và lịch thanh toán | Có | Không | Không | Không (cố định) | Không |
| `KD08.dieu-chinh-chuong-trinh` | Điều chỉnh chương trình, Chuyển sang Điều hành | Có | Không | Không | Không (cố định) | Không |
| `KD08.huy-booking` | Hủy Booking | Có | Không | Không | Không (cố định) | Không |
| `KD08.chuyen-phu-trach` | Chuyển người phụ trách Booking | Có | Không | Không | Không (cố định) | Có |
| `DH01.xem` | Xem mẫu checklist | Không | Có | Không | Không (cố định) | Có (cố định, Q25) |
| `DH01.quan-ly` | Quản lý mẫu checklist | Không | Có | Không | Không (cố định) | Không |
| `DH02.xem` | Xem danh sách NCC | Không | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH02.bat-tat-ncc` | Bật, tắt NCC | Không | Có | Không | Không (cố định) | Không |
| `DH02.nhap-excel` | Nhập NCC từ Excel | Không | Có | Không | Không (cố định) | Không |
| `DH03.xem` | Xem hồ sơ NCC | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH03.tao-ncc` | Tạo NCC | Không | Có | Không | Không (cố định) | Không |
| `DH03.xem-cong-no` | Xem công nợ NCC | Không | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH03.sua-thong-tin-chung` | Sửa thông tin chung NCC | Không | Có | Không | Không (cố định) | Không |
| `DH03.xem-thanh-toan-ncc` | Xem thông tin thanh toán NCC | Không | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH03.sua-thong-tin-nhan-thanh-toan` | Sửa thông tin nhận thanh toán NCC | Không | Không | Có | Không (cố định) | Không |
| `DH03.hop-dong` | Thêm, sửa, gia hạn, xóa hợp đồng NCC | Không | Có | Không | Không (cố định) | Không |
| `DH03.sua-dieu-khoan-thanh-toan` | Sửa điều khoản thanh toán của hợp đồng | Không | Có | Có | Không (cố định) | Không |
| `DH03.dich-vu-bang-gia` | Sửa dịch vụ và bảng giá | Không | Có | Không | Không (cố định) | Không |
| `DH04.xem` | Tra cứu dịch vụ và bảng giá | Có | Có | Không | Không (cố định) | Có (cố định, Q25) |
| `DH06.xem` | Xem danh mục nhân sự | Không | Có | Không | Không (cố định) | Có (cố định, Q25) |
| `DH06.them-sua` | Thêm, sửa nhân sự | Không | Có | Không | Không (cố định) | Không |
| `DH06.bat-tat-nhan-phan-cong` | Bật, tắt Nhận phân công | Không | Có | Không | Không (cố định) | Không |
| `DH06.xoa` | Xóa nhân sự chưa từng được phân công | Không | Có | Không | Không (cố định) | Không |
| `DH07.xem` | Xem danh sách hồ sơ Tour | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH07.giao-phu-trach` | Giao người phụ trách hồ sơ Tour | Không | Có | Không | Không (cố định) | Không |
| `DH08.xem` | Xem hồ sơ Tour | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `DH08.sua-tong-quan` | Sửa thông tin điều hành | Không | Có | Không | Không (cố định) | Không |
| `DH08.bat-dau-ket-thuc` | Bắt đầu, kết thúc Tour | Không | Có | Không | Không (cố định) | Không |
| `DH08.ap-dung-thay-doi` | Áp dụng thay đổi chương trình | Không | Có | Không | Không (cố định) | Không |
| `DH08.dich-vu-checklist` | Sửa dịch vụ và checklist | Không | Có | Không | Không (cố định) | Không |
| `DH08.doi-ncc-dich-vu` | Đổi NCC/dịch vụ | Không | Có | Không | Không (cố định) | Không |
| `DH08.dat-dich-vu` | Đặt dịch vụ với NCC | Không | Có | Không | Không (cố định) | Không |
| `DH08.khach-doan` | Sửa danh sách khách đoàn | Có | Không | Không | Không (cố định) | Không |
| `DH08.phan-phong` | Phân phòng, Pax list, Rooming list | Không | Có | Không | Không (cố định) | Không |
| `DH08.nhan-su` | Phân công nhân sự phục vụ Tour | Không | Có | Không | Không (cố định) | Không |
| `DH08.nhat-ky-su-co` | Ghi nhật ký và sự cố | Không | Có | Không | Không (cố định) | Không |
| `DH08.chi-phi-phat-sinh` | Sửa chi phí phát sinh | Không | Có | Không | Không (cố định) | Không |
| `DH08.chi-phi-thuc-te` | Nhập chi phí thực tế | Không | Có | Không | Không (cố định) | Không |
| `DH08.dong-tour` | Đóng Tour | Không | Có | Không | Không (cố định) | Không |
| `DH08.mo-lai-tour` | Mở lại Tour | Không | Có | Không | Không (cố định) | Có |
| `DH08.quyet-toan` | Quyết toán | Không | Không | Có | Không (cố định) | Không |
| `KT01.xem-phai-thu` | Xem phải thu khách hàng | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `KT01.xem-phai-tra` | Xem phải trả NCC | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `KT01.xem-cong-no-tour` | Xem công nợ theo Tour | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `KT01.xem-tai-khoan-nhan-hoan` | Xem tài khoản nhận hoàn của khách | Không | Không | Có | Không (cố định) | Có (cố định, Q25) |
| `KT01.ghi-giao-dich` | Ghi, hủy giao dịch | Không | Không | Có | Không (cố định) | Không |
| `KT01.dieu-chinh-sau-huy` | Ghi, sửa điều chỉnh sau hủy | Không | Không | Có | Không (cố định) | Không |
| `KT01.ghi-phai-tra` | Ghi phải trả, điều chỉnh khoản phải trả | Không | Không | Có | Không (cố định) | Không |
| `KT01.ghi-cong-no-phat-sinh` | Ghi công nợ phát sinh | Không | Không | Có | Không (cố định) | Không |
| `KT01.sua-chung-tu` | Sửa ngày chứng từ, tệp, ghi chú của giao dịch | Không | Không | Có | Không (cố định) | Không |
| `HD01.xem` | Xem Tour của tôi | Không | Không | Không | Có | Có (cố định, Q25) |
| `HD01.ghi-nhat-ky` | Ghi nhật ký và sự cố | Không | Không | Không | Có | Không |
| `HD01.ghi-chi-phi` | Ghi chi phí phát sinh và chi phí thực tế | Không | Không | Không | Có | Không |
| `QT01.xem` | Xem người dùng | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT01.tao-sua` | Tạo tài khoản, sửa thông tin và vai trò | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT01.lien-ket-nhan-su` | Liên kết, gỡ liên kết nhân sự | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT01.dat-lai-mat-khau` | Đặt lại mật khẩu | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT01.khoa-mo-khoa` | Khóa, mở khóa tài khoản | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT02.xem` | Xem vai trò và quyền | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT02.quan-ly` | Quản lý vai trò và quyền | Không (cố định) | Không (cố định) | Không (cố định) | Không (cố định) | Có (cố định) |
| `QT03.xem` | Xem nhật ký thao tác | Không | Không | Không | Không (cố định) | Có (cố định, Q25) |
| `QT03.xuat-excel` | Xuất Excel nhật ký thao tác | Không | Không | Không | Không (cố định) | Có |
| `QT04.xem` | Xem mẫu tài liệu và email | Có | Có | Không | Không (cố định) | Có (cố định, Q25) |
| `QT04.quan-ly-mau` | Quản lý mẫu Điều hành | Không | Có | Không | Không (cố định) | Không |
| `QT05.xem` | Xem danh mục dùng chung | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT05.sua-loai-dich-vu` | Sửa nhóm Loại dịch vụ | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-don-vi-tinh` | Sửa nhóm Đơn vị tính | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-hang-phong` | Sửa nhóm Hạng phòng | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-the-bao-gom` | Sửa nhóm Thẻ bao gồm, không bao gồm | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-dia-diem` | Sửa nhóm Địa điểm | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-nhom-cong-viec` | Sửa nhóm Nhóm công việc | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-ngon-ngu` | Sửa nhóm Ngôn ngữ | Không | Có | Không | Không (cố định) | Có |
| `QT05.sua-loai-tour` | Sửa nhóm Loại Tour | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-quoc-gia` | Sửa nhóm Quốc gia | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-nhom-quoc-gia` | Sửa nhóm Nhóm quốc gia | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-nguon-khach` | Sửa nhóm Nguồn khách | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-ly-do-huy-yeu-cau` | Sửa nhóm Lý do hủy yêu cầu Tour | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-ly-do-huy-booking` | Sửa nhóm Lý do hủy Booking | Có | Không | Không | Không (cố định) | Có |
| `QT05.sua-loai-tien` | Sửa nhóm Loại tiền | Không | Không | Có | Không (cố định) | Có |
| `QT05.sua-ty-gia` | Sửa nhóm Tỷ giá | Không | Không | Có | Không (cố định) | Có |
| `QT05.sua-phuong-thuc-thanh-toan` | Sửa nhóm Phương thức thanh toán | Không | Không | Có | Không (cố định) | Có |
| `QT05.sua-ngan-hang` | Sửa nhóm Ngân hàng | Không | Không | Có | Không (cố định) | Có |
| `QT05.sua-hang-muc-markup` | Sửa nhóm Hạng mục dịch vụ & Markup | Không | Không | Không | Không (cố định) | Có |
| `QT05.sua-chinh-sach-hoan-huy` | Sửa nhóm Chính sách hoàn hủy Booking | Không | Không | Không | Không (cố định) | Có |
| `QT05.sua-ngay-nghi-le` | Sửa nhóm Ngày nghỉ lễ | Không | Không | Không | Không (cố định) | Có |
| `QT05.sua-tham-so-chung` | Sửa nhóm Tham số chung | Không | Không | Không | Không (cố định) | Có |
| `QT05.sua-markup-mac-dinh` | Sửa Markup mặc định | Không | Không | Không | Không (cố định) | Có |
| `QT05.sua-boi-so-lam-tron` | Sửa bội số làm tròn giá bán | Không | Không | Không | Không (cố định) | Có |
| `QT07.xem` | Xem báo cáo doanh thu | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT07.xuat-excel` | Xuất Excel báo cáo doanh thu | Có | Có | Có | Không (cố định) | Có |
| `QT08.xem` | Xem báo cáo chuyển đổi yêu cầu và báo giá | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT08.xuat-excel` | Xuất Excel báo cáo chuyển đổi yêu cầu và báo giá | Có | Có | Có | Không (cố định) | Có |
| `QT09.xem` | Xem báo cáo P&L theo Tour | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT09.xuat-excel` | Xuất Excel báo cáo P&L theo Tour | Có | Có | Có | Không (cố định) | Có |
| `QT10.xem` | Xem báo cáo công nợ phải thu và phải trả | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT10.xuat-excel` | Xuất Excel báo cáo công nợ phải thu và phải trả | Có | Có | Có | Không (cố định) | Có |
| `QT11.xem` | Xem báo cáo hiệu suất nhà cung cấp | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT11.xuat-excel` | Xuất Excel báo cáo hiệu suất nhà cung cấp | Có | Có | Có | Không (cố định) | Có |
| `QT12.xem` | Xem báo cáo sự cố và chi phí phát sinh | Có | Có | Có | Không (cố định) | Có (cố định, Q25) |
| `QT12.xuat-excel` | Xuất Excel báo cáo sự cố và chi phí phát sinh | Có | Có | Có | Không (cố định) | Có |
