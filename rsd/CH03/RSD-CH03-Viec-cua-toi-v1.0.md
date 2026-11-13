# RSD CH03 · Việc của tôi

**TOPAS · Module Chung · Phiên bản 1.0 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

> **Wireframe chưa dựng; mã W giữ chỗ.** Chuẩn giao diện (K1–K6, U1–U5) thay hình ở đợt này. Mã W trong bước luồng là chỗ để dựng sau; chưa có ảnh, chưa có thư mục `wireframes/`.

- **Nguồn nghiệp vụ.** `docs/rsd/BOI-CANH-DU-AN.md` (thuật ngữ Vai trò, Việc của tôi, Người phụ trách, Của tôi, Dạng xem đã lưu; nguyên tắc Q6 trạng thái theo thời gian tính lúc đọc; “Lối vào từ thông báo mở Bảng”; chốt 12/11/2026 khi viết QT02, CH01–CH03), `docs/QUYET-DINH-PHASE-CODING.md` (U4 trang Việc của tôi theo vai trò, thẻ đếm mở bộ lọc có sẵn; K3 chip của RSD là dạng xem có sẵn; U3; Q1; Q25), ADR 0001, chuẩn giao diện CGD (U3.05–U3.07, U4.01, K2.06). Định nghĩa đếm và bộ lọc đích lấy từ: KD05 v1.5 (2.3, R02, R03), KD07 v1.4 (2.3, R04, R07, R08, E1.4; bộ lọc Yêu cầu đổi lịch trình), KD08 v1.6 (R13), DH02 v1.4 (R01, R03), DH07 v1.8 (2.3 kèm bộ lọc Việc cần xử lý, R07, R09, R13), DH08 v2.9 (2.1, 2.3, R02, R04, R18), KT01 v1.6 (1.4, R03), QT02 v1.0 (vai trò thuộc phòng), QT05 v1.3 (R17), CH01 v1.0 (R09: trang mặc định sau đăng nhập; R18 bổ sung 12/11/2026), CH02 v1.0 (bảng thông báo). Bổ sung vai trò HDV: BOI-CANH “Vai trò HDV”, ADR 0007, RSD QT02 v1.0 (R03, R13), CGD K0.05, K0.07, K7.12.
- **Thay đổi ở v1.0 (12/11/2026).** Bản đầu tiên. Trang mặc định sau đăng nhập; thẻ đếm việc theo vai trò (Phụ lục A); khối Thông báo chưa đọc dẫn CH02.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026).** Sửa sau rà chéo, theo quyết định của người dùng 12/11/2026. (1) KD07 có bộ lọc Yêu cầu đổi lịch trình, DH07 có bộ lọc Việc cần xử lý: bỏ cờ “cần thêm” ở Phụ lục A; VT-KD-06, VT-DH-04 đến 06 bật như mọi thẻ; R08, E2.4 bỏ (giữ mã). (2) Nhóm thẻ theo phòng: vai trò thuộc phòng Kinh doanh, Điều hành, Kế toán (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02) (1.4, 2.1, L1.2, E1.5, R01, R09). (3) Mở danh sách từ thẻ không ghi đè bộ lọc, dạng xem đã nhớ; mọi bộ lọc của đích nằm tường minh trên URL (1.2, L2.1, E2.2, R03, 5.1, AC05, AC14). (4) Đích ở DH07 dùng chip Của tôi thay giá trị lọc “Phụ trách = Của tôi” (Phụ lục A, AC16). (5) Dữ liệu mẫu bổ sung Booking và khoản công nợ cho TP-2611-0203, TP-2611-0204, hạng mục Cần đặt của TP-2611-0201, TP-2612-0202 và dòng “Dữ liệu còn lại”; kết quả đếm mong đợi tính lại (VT-DH-05 = 3); viết lại AC02, AC13, AC19, AC21, AC22, AC23, AC26, AC31 cho kiểm chứng được; thêm AC36 (vai trò tự tạo thuộc phòng).
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · vai trò HDV).** Theo quyết định của người dùng 12/11/2026 (BOI-CANH “Vai trò HDV”): phòng HDV không dùng Việc của tôi; trang mặc định của tài khoản chỉ có vai trò thuộc phòng HDV là Tour của tôi (HD01). Người vừa có vai trò thuộc phòng HDV vừa vai trò khác có trang mặc định là Việc của tôi, kèm lối sang HD01 (R10). Sửa 1.1, 1.2, 1.4, 1.5, 2.1, L1.1, E1.5, R01, R09, Phụ lục A (tổng); thêm E1.10, E1.11, R10, AC37–AC40.
- **Cách đọc.** Mục 3 là luồng; mỗi bước có mã W, chỗ bấm, thao tác và phản hồi. Mục 4 là quy tắc (mã R). Phụ lục A là danh mục thẻ: mỗi dòng một mã thẻ `VT-…` với định nghĩa đếm và bộ lọc đích. Mục 6 là tiêu chí nghiệm thu, mỗi AC gắn một mã test.
- **Quy ước ví dụ.** Hôm nay trong ví dụ là 12/11/2026 (Asia/Ho_Chi_Minh); ngưỡng Đến hạn 7 ngày, ngưỡng nhắc hồ sơ chưa giao 7 ngày, ngưỡng hợp đồng NCC sắp hết hạn 30 ngày, ngưỡng chờ phản hồi NCC 48 giờ. Người dùng ví dụ như RSD CH02. Tên, mã, số liệu chỉ để minh họa.

## Mục lục

1. Phạm vi và quyền
2. Khung trang, trạng thái thẻ và quy ước giao diện
3. Luồng thao tác
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu
- Phụ lục A. Danh mục thẻ

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

Việc của tôi là trang đầu tiên người dùng thấy sau đăng nhập. Trang trả lời một câu hỏi: **hôm nay tôi có bao nhiêu việc ở mỗi loại, và bấm vào đâu để làm**. Mục tiêu thiết kế:

- **Biết ngay việc cần làm.** Mỗi thẻ là một loại việc theo vai trò, có số đếm tính lúc mở trang (Q6). Thẻ không có việc gom vào một dòng “✓ Không có”, để mắt chỉ dừng ở thẻ có việc (R04).
- **Một lần bấm tới danh sách đã lọc.** Bấm thẻ mở danh sách nguồn ở dạng Bảng với đúng bộ lọc của thẻ; số trên thẻ bằng số dòng của danh sách đó (R02, R03). Không có danh sách riêng ở trang này.
- **Theo vai trò, không theo cấu hình.** Người có vai trò thuộc nhiều phòng thấy nhóm thẻ của từng phòng; thẻ chỉ hiện khi người dùng có quyền xem màn đích (R01).
- **Không dùng cho phòng HDV.** Tài khoản chỉ có vai trò thuộc phòng HDV mở Tour của tôi (HD01) thay Việc của tôi; người có thêm vai trò khác có lối sang HD01 ngay ở tiêu đề trang (R10).
- **Không lặp màn nguồn.** Trang không có thao tác ghi, không lặp chip, cột hay biểu đồ của màn nguồn; chỉ có số, tên và lối vào.

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Đăng nhập, Đổi mật khẩu bắt buộc → CH03 | Sau đăng nhập thành công mà không có đường dẫn `next` hợp lệ (RSD CH01 R09), trừ tài khoản chỉ có vai trò thuộc phòng HDV: mở Tour của tôi (RSD CH01 R18). |
| Menu → CH03 | Mục **Việc của tôi** đứng đầu menu bên; bấm logo TOPAS mở trang mặc định (CGD K0.07), là CH03 với mọi tài khoản trừ tài khoản chỉ có vai trò thuộc phòng HDV. Tài khoản đó không có mục Việc của tôi; mở đường dẫn CH03 thì được chuyển về Tour của tôi (R10). |
| CH03 → HD01 | Tài khoản có vai trò thuộc phòng HDV và vai trò khác: liên kết **Tour của tôi** ở tiêu đề trang, và mục Tour của tôi ở menu (CGD K0.05), mở HD01 theo bố cục điện thoại căn giữa (CGD K7.12) (R10). |
| CH03 → danh sách nguồn | Bấm thẻ: mở màn đích bằng URL mang dạng Bảng và bộ lọc của thẻ; lựa chọn đã nhớ của màn đích không đổi (L2.1, R03, Phụ lục A). |
| CH03 → bảng thông báo, màn đích của thông báo | Khối Thông báo chưa đọc: bấm một thông báo như RSD CH02 L1.3; liên kết Mở bảng thông báo mở bảng ở chuông (L3.1). |
| Danh sách nguồn → CH03 | Nút quay lại của trình duyệt hoặc mục Việc của tôi ở menu; trang tải lại số (R07). |

### 1.3. Ranh giới

- CH03 **không sở hữu dữ liệu nghiệp vụ** và không ghi gì. Mọi số đếm đọc trực tiếp từ dữ liệu của màn nguồn bằng chính truy vấn danh sách của màn đó với bộ lọc của thẻ (R02). Không có bảng tổng hợp, không có tác vụ định kỳ tính sẵn (Q6).
- CH03 **sở hữu**: bố cục trang, danh mục thẻ (Phụ lục A), quy tắc hiện thẻ theo vai trò và quyền, cách mở màn đích.
- Định nghĩa trạng thái, chỉ báo, chip và bộ lọc thuộc RSD của màn nguồn. Khi RSD nguồn đổi định nghĩa, thẻ đổi theo vì dùng cùng truy vấn. Mọi thẻ ở Phụ lục A dùng bộ lọc đã có ở RSD màn đích, gồm bộ lọc Yêu cầu đổi lịch trình của KD07 và Việc cần xử lý của DH07 (người dùng chốt 12/11/2026).
- Danh sách thông báo thuộc RSD CH02; CH03 chỉ hiện khối Thông báo chưa đọc dùng chung thành phần của CH02.
- CH03 không gửi gì ra ngoài hệ thống (mục 5.3).

### 1.4. Quyền

CH03 không đi qua ma trận QT02: mọi tài khoản Đang hoạt động đã đăng nhập đều mở được trang. Thẻ thì theo vai trò và theo quyền xem màn đích.

Nhóm thẻ gắn với phòng, không với tên vai trò: vai trò thuộc phòng Kinh doanh, Điều hành hoặc Kế toán là vai trò hệ thống cùng tên hoặc vai trò tự tạo thuộc phòng đó (RSD QT02). Phòng HDV không có nhóm thẻ và không dùng Việc của tôi (R10).

| Phần | Vai trò thuộc phòng Kinh doanh | Vai trò thuộc phòng Điều hành | Vai trò thuộc phòng Kế toán | Vai trò thuộc phòng HDV | Quản trị hệ thống |
|---|---|---|---|---|---|
| Mở trang Việc của tôi | Có | Có | Có | Tài khoản chỉ có vai trò thuộc phòng HDV: không, chuyển về Tour của tôi (R10); có thêm vai trò khác thì theo vai trò đó | Có |
| Nhóm thẻ (Phụ lục A) | Nhóm Kinh doanh | Nhóm Điều hành | Nhóm Kế toán | Không có nhóm thẻ | Không có nhóm thẻ |
| Một thẻ cụ thể | Hiện khi tài khoản có quyền xem màn đích (và tab đích, với KT01) ở QT02 | Như bên trái | Như bên trái | — | — |
| Khối Thông báo chưa đọc | Có | Có | Có | Khi mở được trang (theo vai trò khác) | Có |
| Liên kết Tour của tôi ở tiêu đề | — | — | — | Có, khi tài khoản có `HD01.xem` (R10) | — |

- **Nhiều vai trò** (Q1: quyền là hợp): trang hiện một nhóm thẻ cho mỗi phòng mà tài khoản có ít nhất một vai trò thuộc phòng đó, theo thứ tự Kinh doanh, Điều hành, Kế toán; hai vai trò cùng phòng (ví dụ Kinh doanh và một vai trò tự tạo thuộc phòng Kinh doanh) chỉ cho một nhóm. Mỗi thẻ thuộc đúng một nhóm nên không lặp. Vai trò thuộc phòng HDV không thêm nhóm; tài khoản có nó cùng vai trò khác có trang mặc định là Việc của tôi và liên kết Tour của tôi (R10; RSD CH01 R18).
- **Quản trị hệ thống** không có nhóm thẻ dù xem được mọi màn (Q25), vì không phụ trách bản ghi nào và không có việc cần làm trong danh mục nguồn.
- **Không có phạm vi bản ghi** (Q1). Thẻ có chữ “của tôi” là bộ lọc theo người phụ trách (chip Của tôi của màn đích), không phải giới hạn quyền.
- **Kiểm tra lúc đọc.** Máy chủ kiểm tra vai trò và quyền xem màn đích mỗi lần trả số của một thẻ; không có quyền thì không trả số (thẻ không hiện).

### 1.5. Truy vết nguồn

| Nguồn | Nội dung | Nơi trong CH03 |
|---|---|---|
| U4 | Trang Việc của tôi theo vai trò: thẻ đếm mở bộ lọc có sẵn | Toàn tài liệu |
| BOI-CANH “Việc của tôi”, “Người phụ trách”, “Của tôi” | Người phụ trách là nguồn của Việc của tôi; chip Của tôi | R01, R02, Phụ lục A |
| K3 | Chip của RSD là dạng xem có sẵn | R03 |
| Q6 | Trạng thái theo thời gian tính lúc đọc | R02, R07 |
| U3; CGD U3.06, U4.01 | Nhớ bộ lọc theo người dùng; mở từ thẻ bằng URL không ghi đè lựa chọn đã nhớ | R03 |
| BOI-CANH “Vai trò”; RSD QT02 | Vai trò tự tạo khai thuộc phòng, nhận thẻ Việc của tôi của phòng đó | 1.4, R01 |
| RSD CH01 R09 | Sau đăng nhập mở Việc của tôi | 1.2, L1.1 |
| BOI-CANH “Vai trò HDV”; RSD CH01 R18 (người dùng chốt 12/11/2026) | Phòng HDV không dùng Việc của tôi, trang mặc định là Tour của tôi; người có thêm vai trò khác giữ Việc của tôi và có lối sang HD01 | 1.2, 1.4, 2.1; R10 |
| RSD KD05 2.3, R02, R03 | Chip Của tôi, Đang xử lý; bộ lọc Kết quả báo giá | VT-KD-01 đến 03 |
| RSD KD07 2.3, R04, R07, E1.4 | Bộ lọc Thanh toán: Cần thu trong N ngày, Có đợt quá hạn, Chưa có lịch thanh toán; Chưa có dữ liệu công nợ | VT-KD-04, 05; E1.3 |
| RSD KD07 2.3, R07; KD08 R13; DH08 R18, E3.11 | Bộ lọc Yêu cầu đổi lịch trình: Đang chờ (Chờ Kinh doanh), Quá hạn phản hồi | VT-KD-06 |
| RSD DH07 2.3, R09 | Chip Của tôi; Phụ trách: Chưa có người phụ trách; ngưỡng nhắc | VT-DH-01, 02 |
| RSD DH02 R01, R03 | Chip Cần xử lý | VT-DH-03 |
| RSD DH07 2.3; DH08 2.1, 2.3, R02, R04, R19 | Bộ lọc Việc cần xử lý: Thay đổi chương trình (Chờ áp dụng), Đặt dịch vụ (hạng mục Cần đặt, Cần đặt lại, Xác nhận một phần, Cần điều chỉnh, Cần hủy), Chờ NCC phản hồi quá hạn (x ngày chưa phản hồi) | VT-DH-04 đến 06 |
| RSD KT01 R03 | Chip KT01.1, KT01.2, KT01.3 | VT-KT-01 đến 10 |

---

## 2. Khung trang, trạng thái thẻ và quy ước giao diện

### 2.1. Bố cục (W01)

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Tiêu đề | “Việc của tôi”; bên phải ghi “Cập nhật lúc hh:mm” và nút Làm mới; tài khoản có vai trò thuộc phòng HDV và `HD01.xem` có thêm liên kết **Tour của tôi** (mở HD01) | R07, R10 |
| Cột trái (khoảng 880 px) | Các nhóm thẻ theo phòng. Mỗi nhóm: tiêu đề là tên phòng (Kinh doanh, Điều hành, Kế toán); lưới thẻ 4 cột; dòng cuối nhóm “✓ Không có: …” khi có thẻ số 0 (R04) | R01, R04 |
| Cột phải (khoảng 340 px) | Khối **Thông báo chưa đọc**: tối đa 5 thông báo Chưa đọc mới nhất, liên kết Mở bảng thông báo | L3.1; RSD CH02 |

Trang không có bộ lọc, không có dạng xem, không có thao tác ghi. Màn hẹp hơn 1280 px: khối thông báo xuống dưới các nhóm thẻ.

### 2.2. Thẻ và trạng thái của thẻ

Mỗi thẻ gồm: **tên thẻ** (một dòng), **số đếm** (chữ lớn), **dòng phụ** (tùy thẻ, ví dụ “2 quá hạn”), và ghi chú nhỏ đơn vị đếm (ví dụ “Booking”, “hồ sơ”, “dịch vụ”). Cả thẻ là một chỗ bấm.

| Trạng thái thẻ | Khi nào | Hiển thị | Bấm |
|---|---|---|---|
| Đang tải | Trang vừa mở hoặc Làm mới | Khung xám ở vị trí số | Không |
| Có việc | Số > 0 | Số màu chữ thường; số hoặc dòng phụ đỏ chỉ ở thẻ, dòng phụ có cột Màu đỏ ở Phụ lục A và giá trị > 0 (K6) | Mở màn đích (L2.1) |
| Không có việc | Số = 0 | Không có thẻ; tên thẻ vào dòng “✓ Không có: …” của nhóm (R04) | Không |
| Lỗi tải | Không lấy được số | Thẻ giữ chỗ, số “–”, dòng phụ “Chưa tải được · Thử lại” (E1.2) | Bấm Thử lại tải lại thẻ đó; bấm phần còn lại của thẻ vẫn mở màn đích |
| Thiếu dữ liệu nguồn | Màn nguồn báo không có số liệu (ví dụ KT01 không trả số cho KD07, RSD KD07 E1.4) | Số “–”, dòng phụ nêu lý do của màn nguồn (“Chưa có dữ liệu công nợ”) | Mở màn đích; màn đích tự hiện lý do |

### 2.3. Quy ước giao diện và xử lý dùng chung

- **Một thao tác, một chỗ bấm.** Mỗi thẻ một đích. Thẻ không có nút phụ, không có menu. Dòng phụ chỉ để biết, không bấm riêng (trừ Thử lại khi lỗi).
- **Màu (K6).** Đỏ chỉ cho việc quá hạn hoặc phải xử lý gấp, theo cột Màu đỏ của Phụ lục A; còn lại màu chữ thường. Không dùng xanh lá cho thẻ.
- **Số lớn.** Số ≥ 1.000 hiện có dấu chấm ngăn cách (1.240); không rút gọn kiểu “1,2k”.
- **Thứ tự.** Nhóm theo thứ tự Kinh doanh, Điều hành, Kế toán. Trong nhóm, thẻ theo thứ tự ở Phụ lục A; thẻ số 0 không chiếm chỗ nên thẻ còn lại dồn lên.
- **Tải.** Các thẻ tải song song, mỗi thẻ một yêu cầu; thẻ lỗi không làm hỏng thẻ khác. Khối thông báo tải độc lập.
- **Mở trong thẻ mới.** Ctrl hoặc Cmd khi bấm, hoặc chuột giữa, mở màn đích ở thẻ trình duyệt mới.
- **Ngày giờ** theo Asia/Ho_Chi_Minh; “hôm nay” trong mọi định nghĩa đếm là ngày theo múi giờ này.
- **Lịch sử.** Trang không ghi gì nên không có mục nhật ký QT03.

---

## 3. Luồng thao tác

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác và phản hồi. Hình chưa dựng; mã W giữ chỗ.

### 3.1. Mở Việc của tôi

**L1.1 Vào trang sau đăng nhập.** *Điều kiện:* tài khoản Đang hoạt động vừa đăng nhập, không có `next` hợp lệ (RSD CH01 R09); hoặc bấm mục Việc của tôi, logo. Không áp cho tài khoản chỉ có vai trò thuộc phòng HDV (E1.10).

1. **W01 · Trang Việc của tôi.** Hệ thống xác định các vai trò của tài khoản và quyền xem màn đích (R01), dựng các nhóm thẻ, rồi tải số của từng thẻ song song (R02). Trong lúc tải, mỗi thẻ hiện khung xám. Tiêu đề ghi “Cập nhật lúc hh:mm” theo lúc tải xong thẻ cuối. Khối Thông báo chưa đọc tải cùng lúc (L3.1).
2. **W01 · Đọc các nhóm thẻ.** Mỗi nhóm hiện các thẻ có số > 0 theo thứ tự Phụ lục A; dòng cuối nhóm “✓ Không có: <tên các thẻ số 0>” (R04). Thẻ có cột Màu đỏ ở Phụ lục A hiện số hoặc dòng phụ màu đỏ khi > 0.

*Kết quả:* người dùng thấy số việc của từng loại theo vai trò, tính tại lúc mở trang.

**L1.2 Người nhiều vai trò.** *Điều kiện:* tài khoản có vai trò thuộc từ hai phòng (ví dụ Vũ Đức Minh: Kinh doanh và Điều hành).

1. **W02 · Hai nhóm thẻ trên cùng trang.** Nhóm Kinh doanh trước, nhóm Điều hành sau, mỗi nhóm có tiêu đề tên phòng. Thẻ của nhóm nào tính theo định nghĩa của nhóm đó (Phụ lục A). Nhóm không có thẻ nào > 0 chỉ còn một dòng “✓ Không có việc cần làm” dưới tiêu đề (W03).

*Kết quả:* người dùng thấy đủ việc của mọi vai trò mà không phải đổi vai trò.

**L1.3 Làm mới số.** *Điều kiện:* trang đang mở.

1. **W01 · Nút Làm mới ở tiêu đề.** Hệ thống tải lại số mọi thẻ và khối thông báo theo R07; “Cập nhật lúc” đổi theo. Thẻ có số mới khác 0 hiện lại; thẻ về 0 vào dòng ✓. Trang cũng tự làm mới khi người dùng quay lại thẻ trình duyệt này sau hơn 60 giây, và khi quay lại từ màn đích.

*Kết quả:* số phản ánh dữ liệu và ngày giờ tại lúc làm mới (Q6).

**Ngoại lệ**

- **E1.1 · W04.** Máy chủ lỗi khi tải mọi thẻ: mỗi thẻ ở trạng thái Lỗi tải (2.2); tiêu đề ghi “Chưa cập nhật được” thay cho giờ; nút Làm mới vẫn dùng được.
- **E1.2 · W04.** Một thẻ lỗi: chỉ thẻ đó hiện “–” và “Chưa tải được · Thử lại”; thẻ khác bình thường. Thử lại tải lại riêng thẻ đó.
- **E1.3.** Màn nguồn báo thiếu dữ liệu (KT01 không trả số liệu công nợ cho KD07, RSD KD07 E1.4): VT-KD-04 hiện “–” và “Chưa có dữ liệu công nợ”, không hiện 0, không vào dòng ✓. Bấm thẻ mở KD07 như Phụ lục A; KD07 tự khóa bộ lọc Thanh toán và báo lý do. VT-KD-05 cũng dùng bộ lọc Thanh toán nên xử lý như vậy.
- **E1.4.** Quản trị đổi quyền hoặc vai trò của tài khoản khi trang đang mở: trang không tự đổi; lần làm mới sau, thẻ, nhóm hiện hoặc ẩn theo quyền mới. Bấm một thẻ mà quyền xem màn đích vừa bị thu hồi: màn đích hiện chuẩn không có quyền của nó, không lộ dữ liệu.
- **E1.5 · W05.** Tài khoản không có vai trò thuộc phòng Kinh doanh, Điều hành hay Kế toán (chỉ Quản trị hệ thống, hoặc Quản trị hệ thống và HDV), hoặc mọi thẻ đều bị ẩn vì thiếu quyền xem màn đích: cột trái hiện “Chưa có thẻ việc cho vai trò của bạn.” Khối Thông báo chưa đọc vẫn hiện; tài khoản có vai trò thuộc phòng HDV vẫn có liên kết Tour của tôi (R10).
- **E1.6 · W03.** Mọi thẻ của mọi nhóm đều 0: mỗi nhóm chỉ còn “✓ Không có việc cần làm”.
- **E1.7.** Phiên hết hạn hoặc tài khoản bị khóa khi đang mở trang: theo RSD CH01 (chuyển tới Đăng nhập kèm `next` là Việc của tôi).
- **E1.8.** Bấm Làm mới nhiều lần liên tiếp: nút khóa tới khi các thẻ tải xong; chỉ một lượt tải chạy.
- **E1.9.** Ngày đổi khi trang để mở qua nửa đêm: số không tự đổi; lần làm mới kế tiếp tính theo ngày mới (Q6).
- **E1.10.** Tài khoản chỉ có vai trò thuộc phòng HDV mở đường dẫn của Việc của tôi (đánh dấu trang, gõ tay): chuyển ngay về Tour của tôi (HD01), không tải số của thẻ nào (R10).
- **E1.11.** Tài khoản có vai trò thuộc phòng HDV và vai trò khác bấm liên kết Tour của tôi: HD01 mở theo bố cục điện thoại căn giữa (CGD K7.12); menu ☰ của HD01 có Việc của tôi để quay lại.

### 3.2. Mở danh sách từ thẻ

**L2.1 Bấm thẻ.** *Điều kiện:* thẻ ở trạng thái Có việc, Lỗi tải hoặc Thiếu dữ liệu nguồn.

1. **W01 → màn đích · Bấm thẻ.** Trình duyệt mở màn đích bằng URL mang tường minh dạng Bảng (nếu màn có nhiều dạng xem), chip Của tôi bật hoặc tắt, chip và bộ lọc ghi ở Phụ lục A, và Tất cả cho các bộ lọc khác trên thanh công cụ của màn; ô tìm trống; trang 1; sắp xếp mặc định của màn (R03). Lựa chọn đã nhớ của màn đích (bộ lọc, chip, dạng xem) không đổi: mở màn đó từ menu sau này vẫn theo lựa chọn đã nhớ (CGD U3.06).
2. **Màn đích (ngoài CH03; W01 không đổi) · Danh sách đã lọc.** Số dòng khớp của danh sách (số trên chip đang chọn, hoặc tổng dòng ở dòng ghi chú của bảng) bằng số trên thẻ nếu dữ liệu chưa đổi giữa hai lần đọc (R02). Người dùng xử lý ở màn đích theo RSD của màn đó.
3. **Màn đích → W01 · Nút quay lại của trình duyệt.** Việc của tôi mở lại và làm mới số (R07); thẻ vừa xử lý xong có thể vào dòng ✓.

*Kết quả:* người dùng đứng ở danh sách đúng việc cần làm bằng một lần bấm.

**Ngoại lệ**

- **E2.1.** Dữ liệu đổi giữa lúc trang tải số và lúc bấm thẻ (người khác vừa xử lý, ngày vừa qua mốc): danh sách đích hiện theo dữ liệu mới, có thể khác số trên thẻ; quay lại thì thẻ cập nhật. Danh sách rỗng thì màn đích hiện trạng thái rỗng của nó (có Xóa bộ lọc).
- **E2.2.** Màn đích đang nhớ dạng Kanban hoặc Lịch: vẫn mở dạng Bảng vì dạng xem nằm trên URL (R03); dạng xem đã nhớ của màn không đổi, mở màn từ menu vẫn ở Kanban hoặc Lịch. Người dùng tự đổi dạng xem hoặc bộ lọc trên màn đích thì lựa chọn mới được nhớ như thường (CGD U3.06).
- **E2.3.** Màn đích lỗi tải: màn đích hiện lỗi và Thử lại theo RSD của nó; bộ lọc của thẻ giữ nguyên để thử lại.
- **E2.4.** Bỏ theo quyết định của người dùng 12/11/2026: KD07, DH07 đã có bộ lọc mới, không còn thẻ chờ bộ lọc (R08).
- **E2.5.** Bộ lọc của thẻ có giá trị tham số đổi được (ngưỡng Đến hạn khác 7): nhãn bộ lọc ở màn đích theo giá trị đang cấu hình (RSD KD07 R04); số trên thẻ dùng cùng giá trị.

### 3.3. Khối Thông báo chưa đọc

**L3.1 Xem và mở thông báo ở trang.** *Điều kiện:* trang đang mở.

1. **W06 · Khối Thông báo chưa đọc ở cột phải.** Tiêu đề “Thông báo chưa đọc (n)”, n là số chưa đọc như huy hiệu chuông (RSD CH02 R08). Dưới là tối đa 5 thông báo Chưa đọc, không Đã xử lý, mới nhất trước, trình bày như một dòng của bảng thông báo (RSD CH02 mục 2.1). Không có thông báo chưa đọc: “Không có thông báo chưa đọc”.
2. **W06 · Bấm một thông báo.** Như RSD CH02 L1.3: đánh dấu Đã đọc, mở đích; đích không mở được thì hiện lý do ngay dưới dòng (RSD CH02 E1.1, E1.2). Huy hiệu chuông và số của khối cùng giảm.
3. **W06 → bảng thông báo · Liên kết Mở bảng thông báo.** Mở bảng thông báo ở chuông (RSD CH02 L1.2), không chuyển trang.

*Kết quả:* người dùng đọc thông báo mới nhất ngay trên trang đầu, không phải mở chuông.

**Ngoại lệ**

- **E3.1.** Khối không tải được: “Chưa tải được thông báo” và Thử lại; thẻ việc không bị ảnh hưởng.
- **E3.2.** Số chưa đọc ở khối và ở chuông lệch nhau tạm thời (hai lần đọc cách nhau): cả hai cập nhật ở lần cập nhật kế tiếp của chuông (RSD CH02 R08); khối dùng cùng nguồn số.
- **E3.3.** Thông báo đã bị gỡ hoặc dọn trong lúc trang mở: như RSD CH02 E1.3.

---

## 4. Quy tắc triển khai chi tiết

### R01. Thẻ theo vai trò và quyền

- Nhóm thẻ gắn với ba phòng Kinh doanh, Điều hành, Kế toán (Phụ lục A). Tài khoản có vai trò thuộc phòng nào (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02) thì có nhóm của phòng đó. Quản trị hệ thống và phòng HDV không có nhóm (1.4, R10).
- Thẻ trong nhóm chỉ hiện khi tài khoản có quyền xem màn đích ở QT02; với KT01 là quyền xem đúng tab đích (KT01.1, KT01.2, KT01.3; RSD KT01 1.4). Nhóm không còn thẻ nào vì thiếu quyền thì ẩn cả nhóm.
- “Của tôi” trong định nghĩa đếm là đúng nghĩa chip Của tôi của màn đích (BOI-CANH “Của tôi”, CGD K2.06): KD05, KD07 là bản ghi người dùng phụ trách; DH07 với vai trò thuộc phòng Điều hành là hồ sơ người dùng phụ trách và hồ sơ Chưa có người phụ trách (RSD DH07 2.3).

### R02. Đếm

- **Số trên thẻ = số bản ghi khớp của danh sách đích với đúng bộ lọc của thẻ, tại lúc đọc.** Máy chủ tính bằng cùng truy vấn danh sách của màn đích (cùng điều kiện lọc, cùng quy tắc trạng thái), chỉ lấy tổng, không tự viết điều kiện riêng. Định nghĩa ở Phụ lục A là diễn giải của bộ lọc đó để viết test.
- Đơn vị đếm là đơn vị dòng của danh sách đích: yêu cầu, Booking, hồ sơ, NCC, dịch vụ, khoản, Tour.
- **Tính lúc đọc (Q6).** Mọi trạng thái theo thời gian (Đến hạn, Quá hạn, Sắp hết hạn, khởi hành trong ngưỡng, chưa phản hồi quá ngưỡng) tính theo ngày giờ lúc tải số. Đổi đồng hồ thì số đổi ở lần tải sau mà không cần dữ liệu đổi.
- **Dòng phụ** là số của một tập con, cũng tính bằng bộ lọc của màn đích khi màn có bộ lọc đó (ví dụ VT-KD-04 dòng phụ dùng bộ lọc Thanh toán = Có đợt quá hạn của KD07); bấm thẻ vẫn mở bộ lọc chính.
- Không cache số giữa các lần tải trang.

### R03. Mở màn đích với bộ lọc có sẵn

- Đích ghi ở Phụ lục A gồm màn, tab, chip và giá trị bộ lọc. Bấm thẻ mở màn bằng URL (CGD U3.05) mang tường minh mọi bộ lọc của đích: dạng xem Bảng; chip Của tôi bật nếu thẻ nêu Của tôi, tắt nếu không; chip của RSD và bộ lọc ghi ở Phụ lục A; Tất cả cho mọi bộ lọc khác trên thanh công cụ của màn đích; ô tìm trống; trang 1; sắp xếp mặc định của màn cho chip đó. Nhờ vậy số dòng không phụ thuộc mặc định theo vai trò của màn (ví dụ KD07 mặc định Khởi hành Chưa kết thúc với Kinh doanh).
- Tham số vắng mặt trên URL (ví dụ bộ lọc màn đích thêm sau khi viết Phụ lục A) lấy mặc định của màn, không lấy lựa chọn đã nhớ (CGD U3.06).
- Mở từ thẻ không ghi đè bộ lọc, chip và dạng xem đã nhớ của màn đích (CGD U3.06, U4.01); chỉ khi người dùng tự đổi một lựa chọn trên màn đích thì lựa chọn đó mới được nhớ.
- Bộ lọc của thẻ là một dạng xem có sẵn theo K3; không tạo dạng xem đã lưu mới cho người dùng.

### R04. Thẻ số 0

- Thẻ có số 0 không hiện ô thẻ; tên thẻ được ghép vào một dòng cuối nhóm “✓ Không có: <tên thẻ>, <tên thẻ>” theo thứ tự Phụ lục A (cùng cách với khối Việc cần làm của RSD DH08 R01). Dòng này không bấm được.
- Mọi thẻ của nhóm đều 0: nhóm chỉ còn “✓ Không có việc cần làm”.
- Thẻ lỗi tải hoặc thiếu dữ liệu nguồn không coi là 0 (2.2).

### R05. Dòng phụ và màu

- Dòng phụ chỉ hiện khi giá trị > 0, theo cột Dòng phụ của Phụ lục A.
- Màu đỏ (K6) áp cho số hoặc dòng phụ ghi ở cột Màu đỏ của Phụ lục A, khi giá trị > 0. Các số khác màu chữ thường.

### R06. Khối Thông báo chưa đọc

- Dùng chung thành phần và quy tắc của RSD CH02: cùng nguồn số chưa đọc (R08 của CH02), cùng cách hiển thị, cùng hành vi bấm và kiểm tra đích (R07 của CH02).
- Chỉ hiện thông báo Chưa đọc, không Đã xử lý, tối đa 5; không có Xem thêm, không có Đánh dấu tất cả đã đọc ở khối này (dùng bảng ở chuông).
- Khối cập nhật cùng nhịp với huy hiệu chuông (60 giây khi thẻ trình duyệt hiện) và khi Làm mới.

### R07. Tải và làm mới

- Số của thẻ tải khi mở trang, khi bấm Làm mới, khi quay lại trang từ màn khác, và khi thẻ trình duyệt hiện lại sau hơn 60 giây ẩn. Không tự kéo định kỳ khi trang đang hiện (số việc đổi chậm; tránh tải nặng không cần).
- Mỗi thẻ một yêu cầu, song song; mỗi yêu cầu kiểm tra quyền (1.4).
- “Cập nhật lúc hh:mm” là giờ thẻ cuối cùng tải xong của lượt đó.

### R08. Thẻ cần bộ lọc mới ở màn đích

- Bỏ theo quyết định của người dùng 12/11/2026: KD07 có bộ lọc Yêu cầu đổi lịch trình (RSD KD07 2.3, R07), DH07 có bộ lọc Việc cần xử lý (RSD DH07 2.3); mọi thẻ ở Phụ lục A dùng bộ lọc đã có ở màn đích. Thẻ thêm về sau theo cùng nguyên tắc: bộ lọc phải có ở RSD màn đích trước khi thẻ vào danh mục (R02).

### R09. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Khi thiếu |
|---|---|---|---|
| Vai trò của tài khoản | QT01 | R01 | Không có nhóm thẻ (E1.5) |
| Phòng của vai trò tự tạo | QT02 | R01 | — (vai trò tự tạo luôn khai thuộc một phòng) |
| Quyền xem màn, tab đích | QT02 | R01 | Thẻ ẩn |
| Ngưỡng Đến hạn | Tham số chung QT05 R17 | VT-KD-04, VT-KT-02, VT-KT-07 | 7 ngày |
| Ngưỡng nhắc hồ sơ chưa giao | Tham số chung QT05 R17 | VT-DH-01 (dòng phụ) | 7 ngày |
| Ngưỡng hợp đồng NCC sắp hết hạn | Tham số chung QT05 R17 | VT-DH-03 | 30 ngày |
| Ngưỡng chờ phản hồi NCC | Tham số chung QT05 R17 | VT-DH-06 | 48 giờ |
| Danh mục thẻ (Phụ lục A) | Mã nguồn, dùng chung với màn đích | Toàn trang | — |
| Phòng của vai trò (HDV), quyền `HD01.xem` | QT02 | R10 | Không có liên kết Tour của tôi |
| Thời gian ẩn để tự làm mới (60 giây), số thông báo trong khối (5) | Tệp cấu hình hoặc dữ liệu khởi tạo (C2) | R06, R07 | Giá trị trong ngoặc |

### R10. Phòng HDV và Việc của tôi (người dùng chốt 12/11/2026; RSD CH01 R18)

- Phòng HDV không dùng Việc của tôi: không có nhóm thẻ. Tài khoản chỉ có vai trò thuộc phòng HDV có trang mặc định là Tour của tôi (HD01), không có mục Việc của tôi ở menu (CGD K0.05, K7.04); mở đường dẫn CH03 thì máy chủ chuyển về HD01, không trả số của thẻ nào (E1.10).
- Tài khoản có vai trò thuộc phòng HDV và vai trò thuộc phòng khác hoặc Quản trị hệ thống: trang mặc định là Việc của tôi với nhóm thẻ của phòng khác (R01). Tiêu đề trang có liên kết **Tour của tôi** mở HD01 khi tài khoản có `HD01.xem`; liên kết không có số đếm.
- Việc của người dẫn đoàn (Tour đang phục vụ, nhật ký, chi phí cần ghi) xem ở HD01, không thành thẻ ở CH03.
- Phòng xét theo vai trò hiện hành, tính lúc tải trang như R01.

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa và dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|
| Định nghĩa thẻ | Mã thẻ, phòng, tên, đơn vị, màn và tab đích, bộ lọc chính, bộ lọc dòng phụ, màu đỏ, thứ tự | Phụ lục A; nằm trong mã nguồn dùng chung, không có màn cấu hình |
| Số của thẻ (không lưu) | Mã thẻ, ID người dùng, số chính, số dòng phụ, thời điểm tính | Tính lúc đọc từ dữ liệu màn nguồn (R02) |
| Thông báo (đọc) | Theo RSD CH02 mục 5.1 | Khối Thông báo chưa đọc |

CH03 không lưu dữ liệu nào và không ghi vào lựa chọn đã nhớ của màn đích (R03); lựa chọn đó lưu theo chuẩn U3 của màn đích khi người dùng tự đổi.

### 5.2. Trường nhập

CH03 không có trường nhập.

### 5.3. Dữ liệu gửi ra ngoài

CH03 **không gửi** gì ra ngoài hệ thống.

---

## 6. Tiêu chí nghiệm thu

Giờ trong điều kiện là giờ của nguồn thời gian điều khiển được trong môi trường test (như RSD CH01). “Thẻ ghi n” nghĩa là số chính của thẻ sau khi trang tải xong. Mã test `T-CH03-nn` khớp số AC.

**Dữ liệu mẫu (hôm nay 12/11/2026).**

| Nhóm | Bản ghi | Dữ liệu |
|---|---|---|
| Yêu cầu Tour (KD05) | YC-2611-0101, YC-2611-0102, YC-2611-0103 | Đang xử lý, phụ trách Nguyễn Hoàng Nam; báo giá mới nhất lần lượt: chưa có; v2 Chưa có kết quả; v1 Chốt |
| Yêu cầu Tour (KD05) | YC-2610-0090; YC-2610-0080; YC-2611-0104 | Đã có Booking (Nam); Đã hủy (Nam); Đang xử lý, phụ trách Lê Thu Hà, chưa có báo giá |
| Booking (KD07, KT01.1) | BK-2611-0150 | Hiệu lực, phụ trách Nam; đợt 1 hạn 10/11/2026 chưa thu đủ |
| Booking | BK-2611-0151 | Hiệu lực, Nam; đợt 1 hạn 19/11/2026 chưa thu; có yêu cầu đổi lịch trình Chờ Kinh doanh hạn phản hồi 11/11/2026 |
| Booking | BK-2611-0152 | Hiệu lực, Nam; đợt 1 hạn 20/11/2026 chưa thu |
| Booking | BK-2611-0153; BK-2611-0154 | Hiệu lực, Nam; chưa có lịch thanh toán; Đã thu đủ |
| Booking | BK-2610-0140; BK-2610-0120 | Đã hủy (Nam), chưa ghi điều chỉnh (Chờ điều chỉnh); Đã hủy, đã điều chỉnh, Cần hoàn 500 EUR |
| Booking | BK-2611-0160 | Hiệu lực, phụ trách Lê Thu Hà; đợt hạn 15/11/2026 chưa thu |
| Hồ sơ Tour (DH07) | TP-2611-0201; TP-2612-0202 | Mới tạo, Chưa có người phụ trách; khởi hành 16/11/2026, 2 hạng mục Cần đặt; khởi hành 05/12/2026, 3 hạng mục Cần đặt. Không có thay đổi chương trình chờ áp dụng, không có lần đặt nào |
| Hồ sơ Tour | TP-2611-0203; TP-2611-0204 | Đã kết thúc, phụ trách Trần Minh Anh, chưa quyết toán, Booking BK-2610-0133; Đã kết thúc, phụ trách Vũ Đức Minh, chưa quyết toán, Booking BK-2610-0134, có 1 chi phí phát sinh Chưa ghi công nợ. Cả hai không còn hạng mục chờ đặt, điều chỉnh, hủy hay chờ kết quả |
| Booking (KT01.1, KT01.3) | BK-2610-0133; BK-2610-0134 | Hiệu lực, phụ trách Lê Thu Hà; mỗi Booking một khoản phải thu (lịch thanh toán) mọi đợt Đã thu đủ, không có Tiền thừa (Đã tất toán) |
| Hồ sơ Tour | TP-2611-0205 | Mới tạo, phụ trách Trần Minh Anh; thay đổi chương trình v4 Chờ áp dụng; hạng mục: 2 Cần đặt, 1 Cần hủy, 1 Chờ kết quả với lần đặt gửi 09/11/2026 10:00 |
| NCC (DH02) | NCC A; NCC B; NCC C; NCC D | Đang dùng, Hết hạn; Đang dùng, hợp đồng kết thúc 30/11/2026, không có hợp đồng kế tiếp (Sắp hết hạn); Đang dùng, hợp đồng còn hiệu lực, thiếu thông tin thanh toán; Ngừng dùng, Hết hạn |
| Phải trả (KT01.2) | — | 3 dịch vụ Chờ ghi phải trả (2 Đã xác nhận, 1 Phí hủy); khoản phải trả: 1 Quá hạn, 2 Đến hạn, 1 Phải nhận hoàn |
| Dữ liệu còn lại | — | Hồ sơ Tour của các Booking trong bảng mà bảng không nêu: Mới tạo, phụ trách Lê Quang Huy. Booking của TP-2611-0201, TP-2612-0202, TP-2611-0205: Hiệu lực, phụ trách Lê Thu Hà, chưa có lịch thanh toán. Không có Booking, hồ sơ Tour hay khoản công nợ nào khác |

**Kết quả đếm mong đợi ngày 12/11/2026:** VT-KD-01 = 3, VT-KD-02 = 1, VT-KD-03 = 1, VT-KD-04 = 2 (dòng phụ 1 quá hạn), VT-KD-05 = 1, VT-KD-06 = 1 (dòng phụ 1 quá hạn phản hồi), VT-DH-01 = 2 (dòng phụ 1 sắp khởi hành), VT-DH-02 = 1 với Trần Minh Anh và 1 với Vũ Đức Minh, VT-DH-03 = 3 (dòng phụ 1 hết hạn), VT-DH-04 = 1, VT-DH-05 = 3 (dòng phụ 8 hạng mục), VT-DH-06 = 1 (dòng phụ 1 lần đặt), VT-KT-01 = 1, VT-KT-02 = 2, VT-KT-03 = 1, VT-KT-04 = 1, VT-KT-05 = 3, VT-KT-06 = 1, VT-KT-07 = 2, VT-KT-08 = 1, VT-KT-09 = 1, VT-KT-10 = 1. Với Vũ Đức Minh: VT-DH-04 = 0, VT-DH-05 = 2 (dòng phụ 5 hạng mục), VT-DH-06 = 0. (VT-DH-05 của Trần Minh Anh gồm TP-2611-0201, TP-2612-0202 vì chip Của tôi của Điều hành gồm hồ sơ Chưa có người phụ trách, và TP-2611-0205 với 3 hạng mục: 2 Cần đặt, 1 Cần hủy; VT-KT-02 gồm BK-2611-0151 và BK-2611-0160; VT-KT-09 là TP-2611-0204, VT-KT-10 là TP-2611-0203 theo thứ tự ưu tiên RSD KT01 R03.)

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được | Mã test |
|---|---|---|---|
| AC01 | Nguyễn Hoàng Nam đăng nhập không có `next` | Mở Việc của tôi (RSD CH01 R09); chỉ có nhóm Kinh doanh và khối Thông báo chưa đọc | T-CH03-01 |
| AC02 | Nam mở trang với dữ liệu mẫu | Thẻ theo thứ tự VT-KD-01 (3), 02 (1), 03 (1), 04 (2, dòng phụ đỏ “1 quá hạn”), 05 (1), 06 (1, dòng phụ đỏ “1 quá hạn phản hồi”); không có dòng ✓ | T-CH03-02 |
| AC03 | Nam bấm VT-KD-01 | KD05 dạng Bảng, chip Của tôi bật, chip Đang xử lý, Thời gian đi và Kết quả báo giá Tất cả, ô tìm trống; danh sách đúng 3 dòng YC-2611-0101, 0102, 0103; không có YC-2611-0104 | T-CH03-03 |
| AC04 | Nam bấm VT-KD-02 rồi quay lại, bấm VT-KD-03 | Lần 1: KD05 như AC03 thêm Kết quả báo giá = Chưa có báo giá, 1 dòng YC-2611-0101. Lần 2: Kết quả báo giá = Chốt, 1 dòng YC-2611-0103 | T-CH03-04 |
| AC05 | Nam bấm VT-KD-04 khi KD07 đang nhớ dạng Lịch, Khởi hành Chưa kết thúc; sau đó mở KD07 từ menu | Lần bấm thẻ: KD07 dạng Bảng, chip Của tôi bật, chip Hiệu lực, Thanh toán = Cần thu trong 7 ngày, Khởi hành Tất cả, Phụ trách Tất cả, ô tìm trống; URL có đủ các giá trị này; 2 dòng BK-2611-0150, BK-2611-0151. Mở từ menu: KD07 ở dạng Lịch, Khởi hành Chưa kết thúc, Thanh toán Tất cả như lựa chọn đã nhớ trước lần bấm (R03) | T-CH03-05 |
| AC06 | Nam bấm VT-KD-05 | KD07 Bảng, Của tôi, Hiệu lực, Thanh toán = Chưa có lịch thanh toán; 1 dòng BK-2611-0153 | T-CH03-06 |
| AC07 | Đặt đồng hồ 13/11/2026, Nam bấm Làm mới | VT-KD-04 = 3 (thêm BK-2611-0152 vì hạn 20/11 vào ngưỡng Đến hạn), dòng phụ vẫn 1 quá hạn; không dữ liệu nào đổi (Q6, R02) | T-CH03-07 |
| AC08 | Đặt đồng hồ 20/11/2026, Nam làm mới (không ai thu tiền) | VT-KD-04 = 3, dòng phụ “2 quá hạn” (BK-2611-0150, BK-2611-0151) | T-CH03-08 |
| AC09 | Kế toán ghi thu đủ đợt của BK-2611-0150; Nam quay lại Việc của tôi | VT-KD-04 = 1, không còn dòng phụ quá hạn (R07) | T-CH03-09 |
| AC10 | Kế toán ghi thu đủ BK-2611-0150, BK-2611-0151; Nam lưu lịch cho BK-2611-0153 với một đợt hạn 31/12/2026 | VT-KD-04, VT-KD-05 không còn ô thẻ; dòng cuối nhóm “✓ Không có: Booking cần thu, Booking chưa có lịch thanh toán” (R04) | T-CH03-10 |
| AC11 | KT01 không trả số liệu công nợ (lỗi dựng sẵn) | VT-KD-04, VT-KD-05 hiện “–” và “Chưa có dữ liệu công nợ”, không vào dòng ✓; bấm mở KD07 với bộ lọc Thanh toán khóa kèm lý do (E1.3) | T-CH03-11 |
| AC12 | Lỗi dựng sẵn chỉ ở truy vấn của VT-KD-02 | VT-KD-02 hiện “–”, “Chưa tải được · Thử lại”; các thẻ khác đúng số; Thử lại sau khi gỡ lỗi hiện 1 (E1.2) | T-CH03-12 |
| AC13 | Trần Minh Anh (Điều hành) mở trang | Nhóm Điều hành theo thứ tự: VT-DH-01 (2, dòng phụ đỏ “1 sắp khởi hành”), VT-DH-02 (1), VT-DH-03 (3, dòng phụ đỏ “1 hết hạn”), VT-DH-04 (1), VT-DH-05 (3, dòng phụ “8 hạng mục”), VT-DH-06 (1, dòng phụ “1 lần đặt”); không có dòng ✓ | T-CH03-13 |
| AC14 | Minh Anh bấm VT-DH-01 khi DH07 đang nhớ Kanban, chip Của tôi bật; sau đó mở DH07 từ menu | Lần bấm thẻ: DH07 dạng Bảng, chip Của tôi tắt, chip Đang mở, Phụ trách = Chưa có người phụ trách, Khởi hành, Quyết toán và Việc cần xử lý Tất cả; 2 dòng TP-2611-0201, TP-2612-0202. Mở từ menu: DH07 ở Kanban, chip Của tôi bật (lựa chọn đã nhớ không đổi, R03) | T-CH03-14 |
| AC15 | Đặt đồng hồ 28/11/2026 (hai hồ sơ vẫn Mới tạo, chưa giao), Minh Anh làm mới | VT-DH-01 = 2, dòng phụ “2 sắp khởi hành”: TP-2612-0202 vì 05/12 ≤ 28/11 + 7 ngày, TP-2611-0201 vì đã qua ngày khởi hành mà chưa giao; không dữ liệu nào đổi | T-CH03-15 |
| AC16 | Minh Anh bấm VT-DH-02 | DH07 Bảng, chip Đã kết thúc, chip Của tôi bật, Phụ trách Tất cả; 1 dòng TP-2611-0203 | T-CH03-16 |
| AC17 | Minh Anh bấm VT-DH-03 | DH02 chip Cần xử lý, bộ lọc khác Tất cả; 3 dòng NCC A, NCC B, NCC C; không có NCC D | T-CH03-17 |
| AC18 | Đặt đồng hồ 01/12/2026, Minh Anh làm mới | VT-DH-03 = 3, dòng phụ “2 hết hạn” (NCC B đã qua ngày kết thúc) | T-CH03-18 |
| AC19 | Minh Anh bấm lần lượt VT-DH-04, VT-DH-05, VT-DH-06 | Mỗi lần DH07 dạng Bảng, chip Đang mở, chip Của tôi bật, Phụ trách, Khởi hành, Quyết toán Tất cả, và Việc cần xử lý lần lượt = Thay đổi chương trình: 1 dòng TP-2611-0205; = Đặt dịch vụ: 3 dòng TP-2611-0201, TP-2612-0202, TP-2611-0205; = Chờ NCC phản hồi quá hạn: 1 dòng TP-2611-0205 (RSD DH07 2.3) | T-CH03-19 |
| AC20 | Từ AC19, đặt đồng hồ 11/11/2026 09:00 (lần đặt gửi 09/11 10:00 mới 47 giờ) | VT-DH-06 không có ô thẻ, vào dòng ✓; đặt lại 11/11/2026 10:01 thì VT-DH-06 = 1 (48 giờ theo giờ lịch, RSD DH08 R04) | T-CH03-20 |
| AC21 | Vũ Đức Minh (Kinh doanh và Điều hành, không phụ trách yêu cầu, Booking nào) mở trang | Nhóm Kinh doanh đứng trước chỉ có “✓ Không có việc cần làm”; nhóm Điều hành có VT-DH-01 (2), VT-DH-02 (1, là TP-2611-0204), VT-DH-03 (3), VT-DH-05 (2, dòng phụ “5 hạng mục”: TP-2611-0201, TP-2612-0202) và dòng “✓ Không có: Thay đổi chương trình chờ áp dụng, NCC chưa phản hồi quá hạn” (L1.2) | T-CH03-21 |
| AC22 | Phạm Ngọc Lan (Kế toán) mở trang | Nhóm Kế toán có 10 ô thẻ theo thứ tự Phụ lục A với số VT-KT-01 = 1, 02 = 2, 03 = 1, 04 = 1, 05 = 3, 06 = 1, 07 = 2, 08 = 1, 09 = 1, 10 = 1; số của VT-KT-01 và VT-KT-06 màu đỏ, các số khác màu chữ thường; không có dòng ✓ | T-CH03-22 |
| AC23 | Lan bấm lần lượt VT-KT-01, 03, 05, 09, 10 | KT01.1 chip Quá hạn, Của tôi tắt: đúng 1 dòng BK-2611-0150; KT01.1 chip Chờ điều chỉnh, Của tôi tắt: đúng 1 dòng BK-2610-0140; KT01.2 chip Chờ ghi phải trả: 3 dòng (2 dịch vụ Đã xác nhận, 1 phí hủy); KT01.3 chip Chờ ghi phát sinh: đúng 1 dòng TP-2611-0204 (BK-2610-0134); KT01.3 chip Chưa quyết toán: đúng 1 dòng TP-2611-0203 (BK-2610-0133), không có TP-2611-0204 | T-CH03-23 |
| AC24 | Đặt đồng hồ 21/11/2026, Lan làm mới (không ai thu tiền) | VT-KT-01 = 4 (BK-2611-0150, 0151, 0152, 0160 đều quá hạn); VT-KT-02 = 0, vào dòng ✓ (Q6) | T-CH03-24 |
| AC25 | Quản trị bỏ quyền xem KT01.2 của vai trò Kế toán ở QT02; Lan bấm Làm mới | VT-KT-05 đến VT-KT-08 không còn, không ở dòng ✓; các thẻ khác giữ (R01) | T-CH03-25 |
| AC26 | Quản trị bỏ quyền xem KD07 của vai trò Kinh doanh; Nam làm mới | VT-KD-04, VT-KD-05, VT-KD-06 không còn, không ở dòng ✓; VT-KD-01 đến 03 giữ | T-CH03-26 |
| AC27 | Đỗ Quang Huy (chỉ Quản trị hệ thống) đăng nhập | Việc của tôi hiện “Chưa có thẻ việc cho vai trò của bạn.” và khối Thông báo chưa đọc (E1.5) | T-CH03-27 |
| AC28 | Nam gọi thẳng API lấy số của VT-KT-01 | Bị từ chối, không có số trong phản hồi (1.4) | T-CH03-28 |
| AC29 | Với mỗi thẻ trong AC02, AC13, AC22: bấm thẻ ngay sau khi trang tải, không ai đổi dữ liệu | Số dòng khớp của danh sách đích bằng số trên thẻ (R02) | T-CH03-29 |
| AC30 | Nam đang ở trang; Lê Thu Hà chuyển YC-2611-0104 cho Nam; Nam bấm VT-KD-01 ngay (chưa làm mới) | KD05 hiện 4 dòng; quay lại Việc của tôi thì VT-KD-01 = 4 (E2.1, R07) | T-CH03-30 |
| AC31 | Nam mở trang rồi bấm VT-KD-06 | VT-KD-06 = 1, dòng phụ đỏ “1 quá hạn phản hồi”; KD07 dạng Bảng, chip Của tôi bật, chip Hiệu lực, Khởi hành, Thanh toán, Phụ trách Tất cả, Yêu cầu đổi lịch trình = Đang chờ; đúng 1 dòng BK-2611-0151. Đổi bộ lọc thành Quá hạn phản hồi trên KD07: vẫn 1 dòng BK-2611-0151 (RSD KD07 R07) | T-CH03-31 |
| AC32 | Nam có 7 thông báo Chưa đọc, 1 thông báo Đã xử lý chưa bấm | Khối ghi “Thông báo chưa đọc (7)”, hiện 5 dòng mới nhất, không có dòng Đã xử lý; bấm một dòng thì mở đích như RSD CH02 L1.3, khối và huy hiệu còn 6 (L3.1) | T-CH03-32 |
| AC33 | Nam bấm Mở bảng thông báo ở khối | Bảng thông báo ở chuông mở, không chuyển trang | T-CH03-33 |
| AC34 | Mọi thẻ của Lan đều 0 | Nhóm Kế toán chỉ còn “✓ Không có việc cần làm” (E1.6) | T-CH03-34 |
| AC35 | Đổi ngưỡng Đến hạn ở QT05 thành 3 ngày; Nam làm mới ngày 12/11/2026 | VT-KD-04 = 1 (chỉ BK-2611-0150 quá hạn; BK-2611-0151 hạn 19/11 không còn trong ngưỡng); bấm thẻ thì KD07 ghi bộ lọc “Cần thu trong 3 ngày” và 1 dòng (E2.5) | T-CH03-35 |
| AC36 | Quản trị gán cho Nam thêm vai trò tự tạo “Trưởng nhóm Kinh doanh” thuộc phòng Kinh doanh; tài khoản thử chỉ có vai trò tự tạo “Điều hành ca đêm” thuộc phòng Điều hành, có quyền xem DH07, DH02 | Nam vẫn chỉ có một nhóm Kinh doanh, các thẻ như AC02. Tài khoản thử có nhóm Điều hành với VT-DH-01 (2), VT-DH-03 (3), VT-DH-05 (2: hồ sơ Chưa có người phụ trách) và dòng ✓ cho các thẻ số 0; không có “Chưa có thẻ việc cho vai trò của bạn.” (1.4, R01) | T-CH03-36 |
| AC37 | Ngô Thị Mai (chỉ có vai trò HDV) đăng nhập; sau đó gõ đường dẫn Việc của tôi | Đăng nhập mở Tour của tôi (RSD CH01 R18); đường dẫn Việc của tôi chuyển về Tour của tôi; không có yêu cầu lấy số thẻ nào; menu không có mục Việc của tôi (R10, E1.10) | T-CH03-37 |
| AC38 | Tài khoản thử có Điều hành và HDV (nhân sự liên kết không phụ trách hồ sơ nào) đăng nhập | Mở Việc của tôi; chỉ có nhóm Điều hành (VT-DH-01 = 2, VT-DH-03 = 3, VT-DH-05 = 2 theo hồ sơ Chưa có người phụ trách, như AC36), không có nhóm HDV; tiêu đề có liên kết Tour của tôi, bấm mở HD01 (R10, E1.11) | T-CH03-38 |
| AC39 | Tài khoản thử có Quản trị hệ thống và HDV đăng nhập | Việc của tôi hiện “Chưa có thẻ việc cho vai trò của bạn.”, khối Thông báo chưa đọc và liên kết Tour của tôi (E1.5, R10) | T-CH03-39 |
| AC40 | Mai gọi thẳng API lấy số của VT-DH-01 | Bị từ chối, không có số trong phản hồi (1.4, R10) | T-CH03-40 |

---

## Phụ lục A. Danh mục thẻ

Cột **Đích** ghi màn, tab, chip và bộ lọc đặt trên URL khi bấm thẻ; bộ lọc trên thanh công cụ của màn đích mà cột không ghi thì URL mang Tất cả, chip Của tôi không ghi “bật” thì tắt (R03). Mọi đích mở dạng Bảng. Cột **Định nghĩa đếm** diễn giải bộ lọc đích; số thật luôn là số dòng của danh sách đích (R02). Mọi bộ lọc ở cột Đích đã có ở RSD màn đích.

### A.1. Kinh doanh

| Mã | Tên thẻ · đơn vị | Định nghĩa đếm | Đích và bộ lọc | Dòng phụ | Màu đỏ | Nguồn |
|---|---|---|---|---|---|---|
| VT-KD-01 | Yêu cầu đang xử lý · yêu cầu | Yêu cầu Tour nhóm Đang xử lý, người phụ trách là tôi | KD05: chip Của tôi bật, chip Đang xử lý | — | Không | RSD KD05 2.3, R02 |
| VT-KD-02 | Chưa có báo giá · yêu cầu | Như VT-KD-01 và chưa có phiên bản báo giá nào | KD05: chip Của tôi bật, chip Đang xử lý, Kết quả báo giá = Chưa có báo giá | — | Không | RSD KD05 2.3, R03 |
| VT-KD-03 | Đã chốt, chưa tạo Booking · yêu cầu | Như VT-KD-01 và báo giá mới nhất có kết quả Chốt (yêu cầu Đang xử lý nên chưa có Booking Hiệu lực) | KD05: chip Của tôi bật, chip Đang xử lý, Kết quả báo giá = Chốt | — | Không | RSD KD05 R02, R03; KD06 R19 |
| VT-KD-04 | Booking cần thu · Booking | Booking Hiệu lực tôi phụ trách có ít nhất một đợt hoặc khoản Phát sinh Quá hạn hoặc Đến hạn (hạn ≤ hôm nay + ngưỡng Đến hạn) | KD07: chip Của tôi bật, chip Hiệu lực, Thanh toán = Cần thu trong N ngày (gồm quá hạn), Khởi hành = Tất cả | “k quá hạn”: cùng bộ lọc với Thanh toán = Có đợt quá hạn | Dòng phụ | RSD KD07 R04, R07 |
| VT-KD-05 | Booking chưa có lịch thanh toán · Booking | Booking Hiệu lực tôi phụ trách chưa có đợt nào ở KD08.2 | KD07: chip Của tôi bật, chip Hiệu lực, Thanh toán = Chưa có lịch thanh toán, Khởi hành = Tất cả | — | Không | RSD KD07 R04, R07 |
| VT-KD-06 | Yêu cầu đổi lịch trình chờ xử lý · Booking | Booking Hiệu lực tôi phụ trách có ít nhất một yêu cầu đổi lịch trình Chờ Kinh doanh | KD07: chip Của tôi bật, chip Hiệu lực, Yêu cầu đổi lịch trình = Đang chờ, Khởi hành = Tất cả | “k quá hạn phản hồi”: cùng bộ lọc với Yêu cầu đổi lịch trình = Quá hạn phản hồi | Dòng phụ | RSD KD07 2.3, R07; KD08 R13; DH08 R18, E3.11 |

### A.2. Điều hành

| Mã | Tên thẻ · đơn vị | Định nghĩa đếm | Đích và bộ lọc | Dòng phụ | Màu đỏ | Nguồn |
|---|---|---|---|---|---|---|
| VT-DH-01 | Hồ sơ chưa giao · hồ sơ | Hồ sơ Tour Mới tạo, Đang diễn ra hoặc Đã kết thúc (chip Đang mở) chưa có người phụ trách; không theo người dùng | DH07: chip Của tôi tắt, chip Đang mở, Phụ trách = Chưa có người phụ trách, Khởi hành = Tất cả, Quyết toán = Tất cả | “k sắp khởi hành”: hồ sơ Mới tạo trong số đó có ngày khởi hành không muộn hơn hôm nay + ngưỡng nhắc, kể cả đã qua ngày khởi hành (cùng điều kiện nhắc ở RSD CH02 R09) | Dòng phụ | RSD DH07 2.3, R09; QT05 R17 |
| VT-DH-02 | Chờ đóng Tour · hồ sơ | Hồ sơ Đã kết thúc, Của tôi (với vai trò thuộc phòng Điều hành: tôi phụ trách hoặc Chưa có người phụ trách) | DH07: chip Của tôi bật, chip Đã kết thúc | — | Không | RSD DH07 2.3, R07; DH08 R16 |
| VT-DH-03 | NCC cần xử lý · NCC | NCC Đang dùng thuộc Cần xử lý: hợp đồng Hết hạn, Chưa có hợp đồng, Sắp hết hạn, hoặc thiếu thông tin thanh toán; không theo người dùng | DH02: chip Cần xử lý | “k hết hạn”: NCC có tình trạng hợp đồng Hết hạn | Dòng phụ | RSD DH02 R01, R03 |
| VT-DH-04 | Thay đổi chương trình chờ áp dụng · hồ sơ | Hồ sơ Đang mở, Của tôi, có thay đổi chương trình Chờ áp dụng | DH07: chip Của tôi bật, chip Đang mở, Việc cần xử lý = Thay đổi chương trình | — | Không | RSD DH07 2.3, R07; DH08 R19 |
| VT-DH-05 | Dịch vụ cần đặt, điều chỉnh, hủy · hồ sơ | Hồ sơ Đang mở, Của tôi, có ít nhất một hạng mục Cần đặt, Cần đặt lại, Xác nhận một phần, Cần điều chỉnh hoặc Cần hủy (số trên tab Đặt dịch vụ của DH08 > 0) | DH07: chip Của tôi bật, chip Đang mở, Việc cần xử lý = Đặt dịch vụ | “m hạng mục”: tổng số trên tab Đặt dịch vụ của các hồ sơ đó | Không | RSD DH07 2.3; DH08 2.1, R02 |
| VT-DH-06 | NCC chưa phản hồi quá hạn · hồ sơ | Hồ sơ Đang mở, Của tôi, có ít nhất một hạng mục có chỉ báo “n ngày chưa phản hồi” (lần đặt Đã gửi quá ngưỡng chờ phản hồi NCC, giờ lịch) | DH07: chip Của tôi bật, chip Đang mở, Việc cần xử lý = Chờ NCC phản hồi quá hạn | “m lần đặt”: số lần đặt Đã gửi quá ngưỡng của các hồ sơ đó | Không | RSD DH07 2.3; DH08 2.3, R04 |

### A.3. Kế toán

| Mã | Tên thẻ · đơn vị | Định nghĩa đếm | Đích và bộ lọc | Dòng phụ | Màu đỏ | Nguồn |
|---|---|---|---|---|---|---|
| VT-KT-01 | Phải thu quá hạn · Booking | Booking ở chip Quá hạn của KT01.1 (tình trạng dòng Quá hạn theo thứ tự ưu tiên) | KT01.1: chip Quá hạn, chip Của tôi tắt | — | Số | RSD KT01 R03 |
| VT-KT-02 | Phải thu đến hạn · Booking | Booking ở chip Đến hạn của KT01.1 | KT01.1: chip Đến hạn, Của tôi tắt | — | Không | RSD KT01 R03 |
| VT-KT-03 | Chờ điều chỉnh sau hủy · Booking | Booking Đã hủy chưa ghi điều chỉnh | KT01.1: chip Chờ điều chỉnh, Của tôi tắt | — | Không | RSD KT01 R03, R07 |
| VT-KT-04 | Cần hoàn cho khách · Booking | Booking ở chip Cần hoàn: Cần hoàn sau điều chỉnh > 0, hoặc có Tiền thừa chưa xử lý | KT01.1: chip Cần hoàn, Của tôi tắt | — | Không | RSD KT01 R03, R06, R07 |
| VT-KT-05 | Chờ ghi phải trả · dịch vụ | Dịch vụ Đã xác nhận chưa có khoản phải trả, cộng phí hủy chưa ghi | KT01.2: chip Chờ ghi phải trả | — | Không | RSD KT01 R03, R08 |
| VT-KT-06 | Phải trả quá hạn · khoản | Khoản phải trả ở chip Quá hạn của KT01.2 | KT01.2: chip Quá hạn | — | Số | RSD KT01 R03 |
| VT-KT-07 | Phải trả đến hạn · khoản | Khoản phải trả ở chip Đến hạn của KT01.2 | KT01.2: chip Đến hạn | — | Không | RSD KT01 R03 |
| VT-KT-08 | Phải nhận hoàn từ NCC · khoản | Khoản phải trả có Phải nhận hoàn | KT01.2: chip Phải nhận hoàn | — | Không | RSD KT01 R03, R09 |
| VT-KT-09 | Chi phí phát sinh chờ ghi · Tour | Tour ở chip Chờ ghi phát sinh của KT01.3 | KT01.3: chip Chờ ghi phát sinh | — | Không | RSD KT01 R03, R11 |
| VT-KT-10 | Tour chưa quyết toán · Tour | Tour ở chip Chưa quyết toán của KT01.3 (theo thứ tự ưu tiên R03: Tour còn chi phí phát sinh chờ ghi nằm ở VT-KT-09) | KT01.3: chip Chưa quyết toán | — | Không | RSD KT01 R03, L3.4 |

**Tổng:** 22 thẻ: Kinh doanh 6, Điều hành 6, Kế toán 10; cả 22 dùng bộ lọc đã có ở RSD màn đích (KD07 thêm Yêu cầu đổi lịch trình, DH07 thêm Việc cần xử lý theo quyết định của người dùng 12/11/2026). Quản trị hệ thống và phòng HDV không có thẻ (R10).
