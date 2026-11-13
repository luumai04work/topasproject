# RSD CH01 · Đăng nhập và mật khẩu

**TOPAS · Module Chung · Phiên bản 1.0 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

> **Wireframe chưa dựng; mã W giữ chỗ.** Chuẩn giao diện (K1–K6, U1–U5) thay hình ở đợt này. Mã W trong bước luồng là chỗ để dựng sau; chưa có ảnh, chưa có thư mục `wireframes/`.

- **Nguồn nghiệp vụ.** `docs/rsd/BOI-CANH-DU-AN.md` (mục Nền tảng “Đăng nhập (Q24)”; thuật ngữ Tài khoản, Mật khẩu tạm · Chờ đổi mật khẩu, Tạm khóa đăng nhập; “Mặc định áp sau khi sửa RSD”), `docs/QUYET-DINH-PHASE-CODING.md` (Q2, Q5, Q24, U2, U3, U5), RSD QT01 v1.3 (R02, R03, R04, R06, R09, E5.6), RSD QT03 v1.2 (R01, R07, R13, R15), ADR 0001 và 0002; bổ sung vai trò HDV: BOI-CANH Nền tảng (ngoại lệ điện thoại) và “Vai trò HDV”, RSD QT02 v1.0 (R03, R13, R16), CGD K0.07, K0.09, K7, ADR 0007.
- **Thay đổi ở v1.0 (12/11/2026).** Bản đầu tiên. Tách màn Đăng nhập và Đổi mật khẩu khỏi QT01 (QT01 v1.3 R04 chỉ tham chiếu) và chốt phiên, Tạm khóa đăng nhập, quy tắc mật khẩu thành quy tắc kiểm chứng được.
- **Sửa sau rà chéo 12/11/2026 (giữ số phiên bản 1.0).** Bỏ tình huống “mất vai trò duy nhất” vì không dựng được dữ liệu (M07, E1.7, L3.4, R02, R08, R10, R17, AC11, AC61). Quy tắc mật khẩu R05 là nguồn duy nhất, thêm “không chứa phần trước @ của email” (R05, 5.2, AC74). Mở khóa tài khoản có mật khẩu tạm đã mất hiệu lực khi khóa thì bắt đặt mật khẩu tạm mới (R06, E11.3, AC69, theo QT01 R07). Màn Đăng nhập hiện thông tin liên hệ Quản trị lấy từ tệp cấu hình nếu có (2.1, L1.5, E5.1, R15, R17, AC24, AC75). “Menu người dùng” đổi thành “Menu tài khoản”, “toast” thành “thông báo ngắn” (CGD K0.06). R17 bỏ phương án dự phòng khi Việc của tôi không có thẻ. AC09 bỏ đo thời gian; AC71 giới hạn nơi kiểm; AC72 không khẳng định số mục.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026).** Thêm vai trò HDV (người dùng chốt 12/11/2026). Màn Đăng nhập và Đổi mật khẩu dùng được trên điện thoại theo CGD K7 (R19). Sau đăng nhập, tài khoản chỉ có vai trò thuộc phòng HDV mở Tour của tôi (HD01), còn lại mở Việc của tôi (R18). Sửa 1.1–1.4, 2.1, 3 (danh sách mã W), L1.1, E1.3, E1.6, E4.1, E4.2, L2.1, L2.2, L3.3, 3.4, R09, R13, R17; thêm L1.6, E12.1–E12.6, R18, R19, W09, W10, AC76–AC82.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · sau rà soát HD01).** Đăng xuất khi HD01 còn bản chưa gửi trên máy là ngoại lệ của “không hộp thoại xác nhận”: hiện hộp thoại theo RSD HD01 E5.5, R08 (L3.1, R11; thêm E8.6, AC83; CGD K0.11). Không đổi số hiệu khác.
- **Cách đọc.** Mục 3 là luồng theo màn; mỗi bước có mã W, chỗ bấm, thao tác và phản hồi. Mục 4 là quy tắc (mã R) mà bước dẫn tới. Mục 6 là tiêu chí nghiệm thu, mỗi AC gắn một mã test để viết scenario. Tên, email, mật khẩu, giờ trong ví dụ chỉ để minh họa.
- **Quy ước ví dụ.** Giờ hiện tại trong ví dụ là 12/11/2026 09:00 (Asia/Ho_Chi_Minh), người dùng ví dụ là Phan Thu Hà (ha.phan@congty.vn, Điều hành); người dùng HDV ví dụ là Ngô Thị Mai (ngomai.hue@gmail.com, chỉ có vai trò HDV, Cộng tác viên NS-015).

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

CH01 gồm hai màn: **CH01.1 Đăng nhập** và **CH01.2 Đổi mật khẩu**, cùng cơ chế **phiên đăng nhập** dùng cho mọi màn khác. Mục tiêu thiết kế:

- **Vào hệ thống bằng ba thao tác:** nhập email, nhập mật khẩu, bấm Enter. Con trỏ nằm sẵn ở ô Email; sau khi vào, mở đúng trang người dùng định vào hoặc trang mặc định (Việc của tôi; Tour của tôi với tài khoản chỉ có vai trò thuộc phòng HDV, R18).
- **Dùng được trên điện thoại.** Người dẫn đoàn đăng nhập và đổi mật khẩu trên điện thoại theo CGD K7 (R19).
- **Không lộ thông tin cho người lạ.** Mọi lần đăng nhập không thành công cho cùng một thông báo, dù email không có, sai mật khẩu hay tài khoản Bị khóa (R02).
- **Chặn dò mật khẩu** bằng Tạm khóa đăng nhập 15 phút sau 5 lần sai liên tiếp, tự hết, không cần Quản trị (R03).
- **Mật khẩu tạm không dùng lâu.** Đăng nhập bằng mật khẩu tạm thì chỉ làm được một việc: đổi mật khẩu (R06).
- **Mất phiên không mất ngữ cảnh.** Phiên hết hạn hoặc bị chấm dứt thì đăng nhập lại về đúng trang đang làm; dữ liệu chưa lưu được chặn rời trang theo chuẩn khi còn cứu được (R09, R10).

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Địa chỉ bất kỳ của TOPAS, chưa có phiên hợp lệ → CH01.1 | Chuyển tới màn Đăng nhập kèm đường dẫn đang vào (tham số `next`, R09). Không banner nếu người dùng chưa từng có phiên trong trình duyệt này. |
| Yêu cầu đang làm bị từ chối vì phiên chấm dứt → CH01.1 | Chuyển tới màn Đăng nhập kèm banner nêu lý do và `next` là trang đang làm (L1.4, L3.3, L3.4; R08). |
| CH01.1 → trang mặc định hoặc đường dẫn `next` | Sau đăng nhập thành công (L1.1, L1.6). Trang mặc định là Việc của tôi (CH03), hoặc Tour của tôi (HD01) với tài khoản chỉ có vai trò thuộc phòng HDV (R18). |
| CH01.1 → CH01.2 chế độ bắt buộc | Khi tài khoản Chờ đổi mật khẩu (L2.1). Xong thì mở `next` hoặc trang mặc định (R18). |
| Menu tài khoản (góc phải trên cùng của khung ứng dụng) → CH01.2 chế độ tự đổi, hoặc Đăng xuất | Chỉ khi đã đăng nhập (L2.2, L3.1). Menu tài khoản thuộc khung ứng dụng; trên điện thoại là menu ☰ của khung thu gọn (CGD K7.04). CH01 chỉ quy định hai mục này. |
| QT01 → CH01 | Quản trị tạo, đặt lại, mở khóa tài khoản (mật khẩu tạm), khóa tài khoản; CH01 đọc kết quả ở yêu cầu kế tiếp (R08). QT01 hiện chỉ báo Tạm khóa đăng nhập đọc từ CH01 (R03). |

### 1.3. Ranh giới

- CH01 **sở hữu**: màn Đăng nhập, màn Đổi mật khẩu, phiên đăng nhập (tạo, gia hạn, thu hồi, hạn 7 ngày), bộ đếm lần sai và Tạm khóa đăng nhập, thời điểm đăng nhập gần nhất, quy tắc mật khẩu, thông báo lỗi đăng nhập, đường dẫn quay lại.
- CH01 **không sở hữu** và chỉ đọc hoặc gọi:
  - tài khoản, trạng thái Đang hoạt động hoặc Bị khóa, vai trò, email đăng nhập, mật khẩu tạm và Chờ đổi mật khẩu do QT01 tạo và quản lý (QT01 R01–R04). CH01 chỉ ghi giá trị băm mật khẩu và loại mật khẩu khi người dùng đổi mật khẩu;
  - quyền và phòng của vai trò (QT02): CH01 không đọc ma trận quyền; chỉ đọc phòng của các vai trò của tài khoản để chọn trang mặc định (R18);
  - nhật ký thao tác (QT03): CH01 ghi mục khi đổi mật khẩu (R12);
  - trang Việc của tôi (CH03), trang Tour của tôi (HD01) và khung ứng dụng (menu, chuẩn K1–K7).
- CH01 **không** có: quên mật khẩu qua email, link đặt lại, đăng nhập bằng Google hay Microsoft, xác thực hai lớp, nút mở sớm Tạm khóa đăng nhập, tự đăng ký tài khoản, “ghi nhớ đăng nhập” ngoài phiên 7 ngày (R15; BOI-CANH).
- CH01 **không gửi gì ra ngoài hệ thống** (mục 5.3).

### 1.4. Quyền

CH01 không đi qua ma trận QT02: mọi người dùng dùng được các chức năng dưới đây theo trạng thái của mình (Q24). Không có phạm vi bản ghi (Q1).

| Chức năng | Chưa đăng nhập | Đã đăng nhập | Đã đăng nhập, Chờ đổi mật khẩu |
|---|---|---|---|
| CH01.1 Đăng nhập | Có | Chuyển ngay tới `next` hoặc trang mặc định (R18) | Chuyển tới CH01.2 chế độ bắt buộc |
| CH01.2 Đổi mật khẩu, tự đổi (có ô mật khẩu hiện tại) | Không (chuyển tới Đăng nhập) | Có, mọi vai trò | Không có lối vào; thay bằng chế độ bắt buộc |
| CH01.2 chế độ bắt buộc (không có ô mật khẩu hiện tại) | Không | Không | Có, là màn duy nhất dùng được |
| Đăng xuất | — | Có | Có |
| Mọi màn khác | Không | Theo quyền ở QT02 | Không, bị chặn ở máy chủ (R06) |

- Tài khoản Bị khóa không có phiên (R08).
- Máy chủ kiểm tra phiên và trạng thái tài khoản ở **mọi yêu cầu** (R07, R08), không chỉ lúc đăng nhập.
- Không có quyền thì ẩn nút; trường chỉ đọc hiện dạng chữ (U5); CH01 không có trường chỉ đọc nào đáng kể.

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. Khung màn

- **CH01.1 Đăng nhập** là trang đứng riêng, **không có menu và không có header ứng dụng** (chưa có người dùng). Chỉ một thẻ giữa trang: tên TOPAS, ô Email, ô Mật khẩu (có nút Hiện/Ẩn), nút chính **Đăng nhập**, dòng chữ cố định hướng dẫn liên hệ Quản trị và, nếu tệp cấu hình có, một dòng thông tin liên hệ Quản trị (L1.5, R15). Vùng thông báo nằm trên ô Email.
- **CH01.2 Đổi mật khẩu** có hai chế độ cùng một form:
  - *Tự đổi:* trong khung ứng dụng (có menu), ô Mật khẩu hiện tại, Mật khẩu mới, Nhập lại mật khẩu mới; nút **Đổi mật khẩu**, nút Hủy quay về trang trước.
  - *Bắt buộc:* **không có menu**; chỉ tên người dùng và nút Đăng xuất ở góc phải. Không có ô Mật khẩu hiện tại (R06). Không có nút Hủy.
- **Menu tài khoản** (khung ứng dụng, CGD K0.06): họ tên và vai trò; có mục **Đổi mật khẩu** và **Đăng xuất**; mục khác do khung ứng dụng quy định.
- **Trên điện thoại** (vùng hiển thị hẹp hơn 768 px, R19): hai màn theo CGD K7.13. Thẻ đăng nhập rộng hết màn trừ lề 16 px; form một cột (K7.07); vùng chạm tối thiểu 44 px (K7.05). Menu tài khoản là menu ☰ của khung thu gọn (K7.04). Nội dung, thông báo và quy tắc giống bản máy tính.

### 2.2. Trạng thái

CH01 không có đối tượng có vòng đời riêng. Hai chỉ báo của **tài khoản** do QT01 sở hữu (Đang hoạt động, Bị khóa; Chờ đổi mật khẩu); CH01 thêm hai trạng thái ngắn của **đăng nhập**:

| Trạng thái | Cách tính | Tác động |
|---|---|---|
| Tạm khóa đăng nhập (theo email) | Có thời điểm hết khóa lớn hơn giờ hiện tại (R03) | Mọi lần đăng nhập bị từ chối bằng M02, kể cả mật khẩu đúng |
| Phiên | Còn hiệu lực khi chưa thu hồi và giờ hiện tại nhỏ hơn hạn phiên (R07) | Yêu cầu hợp lệ thì gia hạn |

Danh mục thông báo (văn bản cố định để viết test; `{hh:mm}` là giờ Asia/Ho_Chi_Minh):

| Mã | Nội dung | Dùng ở |
|---|---|---|
| M01 | Email hoặc mật khẩu không đúng, hoặc tài khoản không đăng nhập được. Liên hệ Quản trị hệ thống nếu cần. | L1.2 |
| M02 | Đăng nhập tạm khóa do nhập sai nhiều lần. Thử lại sau {hh:mm}. | L1.3 |
| M03 | Phiên đăng nhập đã hết hạn. Đăng nhập lại để tiếp tục. | L3.3 |
| M04 | Tài khoản đã bị khóa. Liên hệ Quản trị hệ thống. | L3.4 (giống QT01 E5.6) |
| M05 | Mật khẩu của bạn đã được đặt lại. Đăng nhập bằng mật khẩu tạm mới do Quản trị hệ thống cấp. | L3.4 |
| M06 | Mật khẩu đã được đổi ở phiên khác. Đăng nhập lại bằng mật khẩu mới. | L3.4 |
| M07 | Bỏ theo rà chéo 12/11/2026 (N4): tài khoản luôn có ít nhất một vai trò có hiệu lực (QT01 R02; QT02 R01, R10), không có tình huống “mất vai trò”. Mã không dùng lại | — |
| M08 | Bạn đã đăng xuất. | L3.1 |
| M09 | Không kết nối được máy chủ. Thử lại sau ít phút. | E1.4, E2.5 |

### 2.3. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác:** cả hai màn là form tại trang. Không bảng trượt. Hộp thoại chỉ là hộp thoại chặn rời trang theo chuẩn (R10), không có hộp thoại xác nhận cho Đăng nhập, Đổi mật khẩu, Đăng xuất (U2).
- **Một thao tác, một chỗ bấm.** Đăng nhập, Đổi mật khẩu bằng nút chính hoặc phím Enter trong form (cùng một hành động, không phải hai nút). Đăng xuất và Đổi mật khẩu chỉ ở menu tài khoản.
- **Điền sẵn và giữ dữ liệu.** Khi lỗi: giữ Email; xóa ô mật khẩu ở màn Đăng nhập; ở màn Đổi mật khẩu giữ ô Mật khẩu mới và Nhập lại, xóa ô Mật khẩu hiện tại khi nó sai. Con trỏ về ô có lỗi đầu tiên.
- **Lỗi cạnh trường** cho lỗi kiểm tra nhập (trống, định dạng, quy tắc mật khẩu); **thông báo ở vùng trên form** cho kết quả đăng nhập (M01, M02) và lỗi kết nối.
- **Nút khóa có lý do.** Đăng nhập luôn bấm được (lỗi báo cạnh ô). Đổi mật khẩu khóa khi còn ô trống, chú thích ngay dưới nút “Nhập đủ các ô”. Nút đang gửi hiện “Đang đăng nhập…” hoặc “Đang lưu…” và khóa tới khi có kết quả, chống bấm lặp (R16).
- **Hiện/Ẩn mật khẩu** là nút cạnh ô; mặc định ẩn; không nhớ giữa các lần mở.
- **Danh sách quy tắc mật khẩu** hiện dưới ô Mật khẩu mới và tự đánh dấu đạt/chưa đạt khi gõ (R05); máy chủ kiểm lại khi bấm.
- **Đang tải:** hai màn không tải dữ liệu nghiệp vụ nên không có trạng thái rỗng.
- **Lỗi kết nối hoặc máy chủ (5xx):** M09 ở vùng trên form, giữ dữ liệu đã nhập; không tính lần sai (R03).
- **Ngày giờ:** Asia/Ho_Chi_Minh; giờ trong M02 dạng hh:mm 24 giờ.
- **Lịch sử:** không có tab Lịch sử ở CH01. Đổi mật khẩu ghi QT03 và hiện ở tab Lịch sử của QT01 (R12).
- **Cập nhật đồng thời:** không khóa lạc quan; xung đột giữa các phiên giải bằng quy tắc thu hồi phiên (R08) và mã thao tác (R16).

---

## 3. Luồng thao tác

Mã W của CH01: **W01** Đăng nhập; **W02** Đăng nhập có thông báo ở vùng trên form (M01, M02, M09, hoặc banner lý do chấm dứt phiên); **W03** Đổi mật khẩu bắt buộc; **W04** Đổi mật khẩu tự đổi; **W05** Đổi mật khẩu có lỗi cạnh trường; **W06** Menu tài khoản; **W07** Banner phiên chấm dứt trên trang đang sửa chưa lưu; **W08** Hộp thoại chặn rời trang (chuẩn dùng chung); **W09** Đăng nhập trên điện thoại; **W10** Đổi mật khẩu trên điện thoại (cả hai chế độ).

### 3.1. Đăng nhập

**L1.1 Đăng nhập thành công.** *Điều kiện:* tài khoản Đang hoạt động, không Chờ đổi mật khẩu; email chưa bị Tạm khóa đăng nhập. Ví dụ: Phan Thu Hà.

1. **W01 · Mở địa chỉ TOPAS (chưa có phiên).** Hệ thống hiện màn Đăng nhập, con trỏ ở ô Email. Nếu địa chỉ vào là trang khác, đường dẫn đó được giữ làm `next` (R09).
2. **W01 · Gõ email, Tab, gõ mật khẩu, bấm Enter hoặc nút Đăng nhập.** Nút đổi thành “Đang đăng nhập…” và khóa. Hệ thống chuẩn hóa email (R01), kiểm tra theo R02 và R03.
3. **W01 → trang mặc định hoặc `next`.** Đúng thì hệ thống tạo phiên mới, đặt hạn phiên bằng giờ hiện tại + 7 ngày (R07), đặt Đăng nhập gần nhất, đặt bộ đếm lần sai về 0 (R03). Mở `next` nếu hợp lệ (R09), không thì mở trang mặc định (R18): Việc của tôi (CH03), hoặc Tour của tôi (HD01) khi tài khoản chỉ có vai trò thuộc phòng HDV. Bộ lọc và dạng xem đã lưu theo người dùng được nạp lại (U3).

*Kết quả:* phiên 7 ngày; bộ đếm về 0; không ghi QT03 (R12).

- **E1.1.** Bỏ trống Email hoặc Mật khẩu: lỗi cạnh ô (“Nhập email”, “Nhập mật khẩu”); không gửi, không tính lần sai.
- **E1.2.** Email sai định dạng (thiếu @, có khoảng trắng giữa chuỗi): lỗi cạnh ô “Email không hợp lệ”; không gửi, không tính lần sai.
- **E1.3.** Đã có phiên hợp lệ mà mở lại màn Đăng nhập (nút Back, đánh dấu trang): chuyển ngay tới `next` hoặc trang mặc định (R18), không hiện form.
- **E1.4.** Lỗi mạng, máy chủ không phản hồi hoặc 5xx: M09 (W02); giữ Email và mật khẩu đã nhập; không tính lần sai; người dùng bấm lại được. Kết quả chưa xác định (đã gửi mà không nhận phản hồi): coi như lỗi kết nối; bấm lại không tạo hai phiên vì phiên chỉ phát ở phản hồi nhận được (R16).
- **E1.5.** Bấm Đăng nhập lặp khi đang gửi: nút khóa, chỉ một yêu cầu đi (R16).
- **E1.6.** Tài khoản Chờ đổi mật khẩu: không vào trang mặc định; chuyển sang L2.1.
- **E1.7.** Bỏ theo rà chéo 12/11/2026 (N4): không có tài khoản Đang hoạt động nào thiếu vai trò có hiệu lực (QT01 R02; QT02 R01, R10).
- **E1.8.** Đồng hồ máy khách lệch: không ảnh hưởng, mọi so sánh giờ ở máy chủ (R04).

**L1.2 Đăng nhập không thành công.** *Điều kiện:* một trong ba trường hợp: email không có tài khoản; mật khẩu sai; tài khoản Bị khóa (mật khẩu đúng hay sai đều vậy).

1. **W01 · Gõ email và mật khẩu, bấm Đăng nhập.** Như L1.1 bước 2.
2. **W02 · Phản hồi.** Hệ thống hiện **M01** ở vùng trên form, **giống hệt nhau** cho ba trường hợp (R02). Email giữ nguyên, ô mật khẩu xóa, con trỏ về ô Mật khẩu. Không tạo phiên. Lần sai được đếm (R03).

*Kết quả:* không có phiên; bộ đếm của email tăng 1; không ghi QT03.

- **E2.1.** Tài khoản Bị khóa nhập mật khẩu đúng: vẫn M01 và tính là một lần sai (R02, R03); người dùng không biết tài khoản bị khóa. Muốn biết thì hỏi Quản trị.
- **E2.2.** Email có hoa, thường lẫn lộn hoặc khoảng trắng hai đầu: coi như email đã chuẩn hóa (R01), không phải lỗi.
- **E2.3.** Mật khẩu có khoảng trắng đầu hoặc cuối: giữ nguyên khi so sánh, không cắt (R05).
- **E2.4.** Đang Tạm khóa đăng nhập: xem L1.3, không phải M01.

**L1.3 Tạm khóa đăng nhập và hết khóa.** *Điều kiện:* cùng một email có 5 lần đăng nhập không thành công **liên tiếp** (R03). Ví dụ: lần sai thứ 5 lúc 09:00.

1. **W01 → W02 · Lần sai thứ 5.** Hệ thống không hiện M01 mà hiện **M02** với giờ hết khóa 09:15 (W02); ô mật khẩu xóa. Tạm khóa bắt đầu ngay.
2. **W02 · Trong 15 phút, nhập bất kỳ (kể cả đúng).** Hệ thống hiện lại M02 với cùng giờ 09:15; không kiểm tra mật khẩu, không tính lần sai, không kéo dài khóa (R03).
3. **W01 · Từ 09:15 trở đi.** Khóa tự hết, bộ đếm về 0. Lần nhập kế tiếp xử lý như bình thường (L1.1 nếu đúng; nếu sai là lần sai thứ 1). Không có nút mở sớm, không cần Quản trị.

*Kết quả:* Tạm khóa đăng nhập không đổi trạng thái tài khoản (vẫn Đang hoạt động, QT01 R03); không ghi QT03.

- **E3.1.** Đăng nhập đúng ở lần thứ 5 (tức 4 sai rồi đúng): vào bình thường, bộ đếm về 0 (R03).
- **E3.2.** Email chưa có tài khoản hoặc tài khoản Bị khóa nhập sai 5 lần: cũng M02 như tài khoản thật (R02, R03).
- **E3.3.** Quản trị đặt lại mật khẩu hoặc mở khóa tài khoản khi email đang Tạm khóa đăng nhập: khóa **không** bị xóa; người dùng chờ đến giờ hết khóa (BOI-CANH: không có nút mở sớm).
- **E3.4.** Hai thiết bị cùng thử một email: dùng chung một bộ đếm; hai yêu cầu đồng thời được xử lý lần lượt, không tính vượt 5 và không bỏ sót lần sai (R16).
- **E3.5.** Hai email khác nhau: bộ đếm độc lập.
- **E3.6.** Khóa hết đúng lúc đang gõ: không tự thông báo; lần bấm tiếp theo mới kiểm tra theo giờ máy chủ.

**L1.4 Đăng nhập lại sau khi phiên chấm dứt và quay về trang cũ.** *Điều kiện:* phiên vừa chấm dứt (L3.3, L3.4), người dùng đã ở màn Đăng nhập với banner lý do và `next` là trang đang làm.

1. **W02 · Đọc banner (M03, M04, M05 hoặc M06), nhập email và mật khẩu, bấm Đăng nhập.** Banner nằm trên ô Email; ô Email điền sẵn email của phiên trước khi biết (R09). Các bước kiểm tra như L1.1.
2. **W02 → trang cũ.** Đăng nhập thành công thì mở đúng đường dẫn `next` (gồm tham số truy vấn). Tài khoản Chờ đổi mật khẩu thì qua L2.1 rồi mới tới `next`.

*Kết quả:* người dùng quay lại đúng trang; dữ liệu chưa lưu ở trang cũ không phục hồi, trừ trường hợp L3.3 bước 3.

- **E4.1.** `next` không hợp lệ (R09): bỏ qua, mở trang mặc định (R18).
- **E4.2.** Trang cũ người dùng không còn quyền xem: màn đích tự xử lý không có quyền; CH01 không can thiệp. Ví dụ tài khoản chỉ có vai trò thuộc phòng HDV đăng nhập với `next` là một màn máy tính: trang không có quyền theo CGD K0.09, nút Về Tour của tôi.
- **E4.3.** Đăng nhập bằng tài khoản khác với tài khoản phiên trước: vẫn vào `next`; quyền theo tài khoản mới.
- **E4.4.** Lý do M04: đăng nhập sẽ không thành công (M01); dòng hướng dẫn Quản trị vẫn hiện.

**L1.5 Quên mật khẩu.** *Điều kiện:* người dùng không nhớ mật khẩu hoặc chưa có tài khoản.

1. **W01 · Đọc dòng chữ cố định dưới nút Đăng nhập:** “Quên mật khẩu hoặc chưa có tài khoản? Liên hệ Quản trị hệ thống.” Nếu tệp cấu hình có thông tin liên hệ Quản trị, dòng dưới hiện đúng chữ đã cấu hình, ví dụ “Liên hệ: Đỗ Quang Huy · máy lẻ 102”. Không có liên kết, không có ô nhập email, không gửi gì (R15).
2. **W01 · Nhận mật khẩu tạm rồi đăng nhập.** Người dùng báo Quản trị qua kênh nội bộ; Quản trị đặt lại mật khẩu ở QT01 L4.1 (hoặc mở khóa QT01 L5.3, tạo tài khoản QT01 L2.1) và chuyển mật khẩu tạm. Người dùng đăng nhập ở W01 theo L1.1 rồi đổi mật khẩu theo L2.1.

*Kết quả:* không có luồng tự đặt lại.

- **E5.1.** Tìm kiếm cách đặt lại ở màn Đăng nhập: không có. Thông tin liên hệ chỉ là chữ trong tệp cấu hình, không đọc từ dữ liệu tài khoản; tệp cấu hình không có thì chỉ hiện dòng chữ cố định (R15, R17).

**L1.6 Đăng nhập trên điện thoại và vào Tour của tôi.** *Điều kiện:* tài khoản Đang hoạt động chỉ có vai trò thuộc phòng HDV, mật khẩu chính thức; mở TOPAS trên điện thoại (vùng hiển thị hẹp hơn 768 px). Ví dụ: Ngô Thị Mai.

1. **W09 · Mở địa chỉ TOPAS trên điện thoại (chưa có phiên).** Màn Đăng nhập theo bố cục điện thoại (R19; CGD K7.13): thẻ rộng hết màn trừ lề 16 px; ô Email dùng bàn phím email, không tự viết hoa, không tự sửa chính tả; nút Hiện/Ẩn mật khẩu và nút Đăng nhập đạt vùng chạm 44 px. Nội dung, thông báo M01–M09 và mọi quy tắc như W01, W02.
2. **W09 · Gõ email, mật khẩu, chạm Đăng nhập (hoặc phím Đi của bàn phím ảo).** Kiểm tra như L1.1 bước 2.
3. **W09 → Tour của tôi (HD01) hoặc `next`.** Đúng thì tạo phiên như L1.1 bước 3 (7 ngày, gia hạn theo hoạt động). Không có `next` hợp lệ: mở trang mặc định theo R18, với Mai là Tour của tôi.

*Kết quả:* HDV vào thẳng Tour của tôi trên điện thoại bằng ba thao tác; phiên, Tạm khóa, thông báo lỗi như trên máy tính.

- **E12.1.** Tài khoản Chờ đổi mật khẩu: W10 (Đổi mật khẩu bắt buộc, bố cục điện thoại) theo L2.1; xong mở `next` hoặc Tour của tôi.
- **E12.2.** Tài khoản có cả vai trò thuộc phòng HDV và vai trò khác (ví dụ Điều hành) đăng nhập trên điện thoại: trang mặc định là Việc của tôi (R18), bố cục máy tính (CGD K7.01); Tour của tôi mở từ menu.
- **E12.3.** Tài khoản chỉ có vai trò thuộc phòng HDV đăng nhập trên máy tính: Đăng nhập bố cục máy tính; sau đăng nhập vẫn mở Tour của tôi (bố cục K7 căn giữa, CGD K7.12).
- **E12.4.** Mạng điện thoại chập chờn khi chạm Đăng nhập: như E1.4 (M09, giữ dữ liệu, không tính lần sai).
- **E12.5.** Xoay ngang điện thoại khi đang nhập: bố cục vẫn một cột, dữ liệu đã nhập giữ nguyên.
- **E12.6.** Tài khoản chỉ có vai trò thuộc phòng HDV mà chưa liên kết nhân sự hoặc chưa được phân công Tour nào: vẫn đăng nhập được và mở Tour của tôi; trang không có Tour, hiện theo RSD HD01 (RSD QT02 R16).

### 3.2. Đổi mật khẩu

**L2.1 Đổi mật khẩu tạm ở lần đăng nhập đầu.** *Điều kiện:* tài khoản Đang hoạt động, Chờ đổi mật khẩu (mật khẩu hiện tại là mật khẩu tạm, QT01 R04). Ví dụ: Phan Thu Hà vừa được tạo tài khoản.

1. **W01 · Đăng nhập bằng mật khẩu tạm.** Như L1.1; kiểm tra email và mật khẩu đúng. Hệ thống tạo phiên **hạn chế** (chỉ dùng được CH01.2 chế độ bắt buộc và Đăng xuất, R06) và mở **W03**. Đăng nhập gần nhất được đặt.
2. **W03 · Gõ Mật khẩu mới, gõ Nhập lại mật khẩu mới.** Có hai ô, không có ô Mật khẩu hiện tại. Danh sách quy tắc (R05) tự đánh dấu khi gõ; nút Đổi mật khẩu mở khi đủ hai ô.
3. **W03 · Bấm Đổi mật khẩu (hoặc Enter).** Hệ thống kiểm tra R05 (gồm khác mật khẩu tạm), ghi mật khẩu mới dạng băm, đổi loại mật khẩu thành chính thức (chỉ báo Chờ đổi mật khẩu của QT01 mất), thu hồi mọi phiên khác của tài khoản (R08), ghi QT03 “Đổi mật khẩu tạm” trong cùng giao dịch (R12). Phiên hiện tại gỡ hạn chế.
4. **W03 → trang mặc định hoặc `next`.** Thông báo ngắn “Đã đổi mật khẩu”. Mở `next` nếu hợp lệ (R09), không thì trang mặc định (R18).

*Kết quả:* tài khoản không còn Chờ đổi mật khẩu; mật khẩu tạm không dùng được nữa; phiên giữ nguyên hạn.

- **E6.1.** Mở bất kỳ địa chỉ khác (gõ tay, Back, đánh dấu trang) khi chưa đổi: chuyển lại W03 (R06). Yêu cầu dữ liệu từ màn khác bị máy chủ từ chối bằng lỗi “cần đổi mật khẩu”, client chuyển W03.
- **E6.2.** Mật khẩu mới không đạt R05 hoặc trùng mật khẩu tạm: lỗi cạnh ô (W05), không đổi; giữ ô đã nhập.
- **E6.3.** Nhập lại không khớp: lỗi cạnh ô Nhập lại “Mật khẩu nhập lại không khớp”.
- **E6.4.** Bấm Đăng xuất ở W03: đăng xuất theo L3.1; lần đăng nhập sau vẫn bị bắt đổi mật khẩu.
- **E6.5.** Không đổi, bỏ đó 7 ngày: phiên hết hạn như thường (L3.3, R07); mật khẩu tạm **không hết hạn** (QT01 R04), đăng nhập lại vẫn dùng được và vẫn bị bắt đổi.
- **E6.6.** Quản trị khóa tài khoản hoặc đặt lại mật khẩu khi người dùng đang ở W03: yêu cầu kế tiếp bị từ chối, về Đăng nhập theo L3.4.
- **E6.7.** Lỗi lưu hoặc kết quả chưa xác định (mất mạng sau khi bấm): M09, giữ dữ liệu; bấm lại cùng mã thao tác chỉ đổi một lần; nếu tra thấy đã đổi thì báo “Mật khẩu đã được đổi” và đi tiếp bước 4 (R16).
- **E6.8.** Chặn rời trang khi đã gõ mà chưa bấm Đổi mật khẩu: hộp thoại W08 theo chuẩn khi đóng thẻ hoặc điều hướng đi ngoài hệ thống; điều hướng trong hệ thống vẫn bị chuyển về W03 (R06).
- **E6.9.** Mở hai thẻ W03 cùng lúc, đổi ở thẻ này: thẻ kia ở lần gửi tiếp theo thấy tài khoản không còn Chờ đổi mật khẩu, báo “Mật khẩu đã được đổi” và đi tiếp `next`.

**L2.2 Tự đổi mật khẩu.** *Điều kiện:* đã đăng nhập, không Chờ đổi mật khẩu. Ví dụ: Phan Thu Hà đổi mật khẩu định kỳ.

1. **W06 · Menu tài khoản → Đổi mật khẩu.** Mở **W04** với con trỏ ở ô Mật khẩu hiện tại. Hệ thống nhớ trang đang đứng để quay về.
2. **W04 · Gõ Mật khẩu hiện tại, Mật khẩu mới, Nhập lại mật khẩu mới.** Danh sách quy tắc (R05) tự đánh dấu khi gõ, gồm “Khác mật khẩu hiện tại” khi đã nhập mật khẩu hiện tại.
3. **W04 · Bấm Đổi mật khẩu (hoặc Enter).** Hệ thống kiểm tra mật khẩu hiện tại **trước** (R05, R03), rồi quy tắc mật khẩu mới. Đạt thì ghi mật khẩu mới dạng băm, thu hồi mọi phiên khác của tài khoản (R08), ghi QT03 “Đổi mật khẩu” cùng giao dịch (R12).
4. **W04 → trang trước.** Quay về trang đang đứng trước khi mở (hoặc trang mặc định nếu không rõ, R18). Thông báo ngắn “Đã đổi mật khẩu”, kèm “Đã đăng xuất n phiên khác” khi n lớn hơn 0.

*Kết quả:* mật khẩu mới có hiệu lực ngay; mật khẩu cũ không dùng được; phiên hiện tại giữ nguyên hạn.

- **E7.1.** Mật khẩu hiện tại sai: lỗi cạnh ô “Mật khẩu hiện tại không đúng” (W05); không kiểm tra tiếp các ô khác; lần sai được đếm chung với đăng nhập (R03); xóa ô Mật khẩu hiện tại, giữ hai ô còn lại.
- **E7.2.** Đây là lần sai thứ 5 liên tiếp của email: Tạm khóa đăng nhập bắt đầu, mọi phiên của tài khoản chấm dứt, người dùng về Đăng nhập với M02 (R03, R08).
- **E7.3.** Mật khẩu mới không đạt R05: lỗi cạnh ô, danh sách quy tắc đánh dấu mục chưa đạt (W05).
- **E7.4.** Mật khẩu mới trùng mật khẩu hiện tại: lỗi cạnh ô Mật khẩu mới “Mật khẩu mới phải khác mật khẩu hiện tại”.
- **E7.5.** Nhập lại không khớp: như E6.3.
- **E7.6.** Bấm Hủy hoặc đóng khi đã gõ: hộp thoại chặn rời trang W08 theo chuẩn; chưa gõ gì thì quay về ngay.
- **E7.7.** Phiên chấm dứt khi đang ở W04 (khóa, hết hạn…): theo L3.3, L3.4; lần bấm Đổi mật khẩu bị từ chối, mật khẩu không đổi.
- **E7.8.** Lỗi lưu, kết quả chưa xác định, bấm lặp: như E6.7.
- **E7.9.** Quản trị đặt lại mật khẩu đúng lúc người dùng bấm Đổi: máy chủ xử lý lần lượt; đổi sau đặt lại thì phiên đã bị thu hồi, lần đổi bị từ chối (L3.4); đổi trước đặt lại thì mật khẩu bị đặt lại ghi đè.

### 3.3. Phiên

**L3.1 Đăng xuất.** *Điều kiện:* đã đăng nhập (kể cả Chờ đổi mật khẩu).

1. **W06 · Menu tài khoản → Đăng xuất.** Hệ thống thu hồi **phiên hiện tại** ngay, xóa dữ liệu phiên ở trình duyệt (bộ nhớ đệm trang, không xóa thiết lập bộ lọc và dạng xem theo người dùng, U3), mở **W02** với M08. Không hộp thoại xác nhận (U2), trừ khi HD01 còn bản chưa gửi trên máy (E8.6).

*Kết quả:* phiên hiện tại không dùng lại được; phiên khác của tài khoản (thiết bị khác) giữ nguyên; không ghi QT03.

- **E8.1.** Trang đang có dữ liệu chưa lưu: hộp thoại chặn rời trang W08 theo chuẩn (R10); Ở lại thì không đăng xuất.
- **E8.2.** Phiên đã hết hạn hoặc bị thu hồi khi bấm Đăng xuất: vẫn về Đăng nhập, M08, không báo lỗi.
- **E8.3.** Nút Back sau khi đăng xuất: không hiện dữ liệu cũ; trang cần phiên chuyển lại Đăng nhập (R14).
- **E8.4.** Lỗi mạng khi bấm Đăng xuất: client xóa dữ liệu phiên cục bộ, về Đăng nhập; thông báo ngắn “Chưa thu hồi được phiên trên máy chủ; đăng xuất lại khi có mạng”, phiên máy chủ tự hết ở hạn (R07).
- **E8.5.** Đăng xuất ở một thẻ khi còn thẻ khác cùng trình duyệt: các thẻ kia bị từ chối ở yêu cầu kế tiếp và về Đăng nhập (M03).
- **E8.6.** Đăng xuất khi HD01 còn bản chưa gửi lưu trên máy của tài khoản (RSD HD01 R08), dù đang ở màn nào: trước khi thu hồi phiên, hộp thoại “Còn n mục chưa gửi · đăng xuất sẽ xóa các mục này khỏi máy” với nút Ở lại và Vẫn đăng xuất (RSD HD01 E5.5). Ở lại thì không đăng xuất, bản chưa gửi giữ nguyên. Vẫn đăng xuất thì xóa các bản chưa gửi của tài khoản khỏi máy rồi đăng xuất như L3.1 (R11).

**L3.2 Gia hạn phiên theo hoạt động.** *Điều kiện:* đã đăng nhập; người dùng đang làm việc.

1. **Bất kỳ màn có menu tài khoản (W06) · Thao tác của người dùng gây yêu cầu tới máy chủ** (mở màn, lưu, lọc, bấm nút). Máy chủ kiểm tra phiên hợp lệ rồi đặt lại hạn phiên = giờ hiện tại + 7 ngày (R07). Không có thông báo, không ảnh hưởng thao tác.

*Kết quả:* người dùng làm việc đều đặn thì không bị hỏi đăng nhập lại; người dùng nghỉ quá 7 ngày thì phiên hết (L3.3).

- **E9.1.** Yêu cầu nền tự động (làm mới số thông báo, kiểm tra trạng thái): **không** gia hạn (R07). Để trang mở không làm phiên sống mãi.
- **E9.2.** Yêu cầu bị từ chối (không có quyền, lỗi nhập, phiên hạn chế): chỉ yêu cầu hợp lệ gia hạn; yêu cầu từ chối vì không có quyền vẫn tính là hoạt động nếu phiên còn hiệu lực (R07).
- **E9.3.** Giờ hiện tại đúng bằng hạn phiên: coi là đã hết hạn (R07), không gia hạn.
- **E9.4.** Nhiều thẻ cùng phiên: dùng chung một hạn; hoạt động ở thẻ nào cũng gia hạn.
- **E9.5.** Hai yêu cầu đồng thời cùng gia hạn: hạn là giờ máy chủ muộn hơn trong hai; không lùi hạn.

**L3.3 Phiên hết hạn khi đang làm việc.** *Điều kiện:* đã đăng nhập, không hoạt động quá 7 ngày; trình duyệt vẫn mở trang đang làm. Ví dụ: Hà để thẻ mở 8 ngày rồi bấm Lưu ở trang Khách hàng.

1. **Bất kỳ màn (W07 nếu có thay đổi chưa lưu) · Bấm Lưu hoặc thao tác tải.** Máy chủ từ chối vì phiên hết hạn (R08). Client xử lý theo bước 2 hoặc 3.
2. **Trang không có thay đổi chưa lưu → W02.** Chuyển ngay tới màn Đăng nhập với banner **M03**, email điền sẵn, `next` là đường dẫn và truy vấn của trang đang làm (R09). Sau đó L1.4.
3. **Trang có thay đổi chưa lưu → W07.** Không chuyển trang. Hiện banner đỏ đầu trang “Phiên đăng nhập đã hết hạn. Đăng nhập ở thẻ khác rồi bấm Lưu lại; dữ liệu đang nhập vẫn giữ ở đây” kèm liên kết **Đăng nhập ở thẻ mới** (mở màn Đăng nhập; `next` là địa chỉ gốc `/`, tức trang mặc định, R18). Dữ liệu đang nhập giữ nguyên. Người dùng đăng nhập ở thẻ mới rồi quay lại bấm Lưu: lần này thành công theo phiên mới (R10). Nếu người dùng chọn rời trang (đóng thẻ, bấm liên kết khác) thì hộp thoại **W08** theo chuẩn hỏi xác nhận (R10).

*Kết quả:* không mất dữ liệu ngoài ý muốn; không ghi QT03.

- **E10.1.** Phiên mới thuộc tài khoản khác với tài khoản đã mở trang: lần Lưu bị từ chối với banner “Trang này mở bằng tài khoản khác. Tải lại trang” (R10); dữ liệu giữ trên form để chép.
- **E10.2.** Quản trị đã khóa tài khoản trong lúc đó: đăng nhập ở thẻ mới không thành công (M01); người dùng không lưu được; dữ liệu chưa lưu mất khi rời trang (R10).
- **E10.3.** Nhiều thẻ cùng hết hạn: mỗi thẻ tự xử lý theo bước 2 hoặc 3; đăng nhập ở một thẻ làm các thẻ còn lại dùng lại được phiên mới (cùng trình duyệt).
- **E10.4.** Yêu cầu nền bị từ chối vì hết hạn: không chuyển trang; chờ đến thao tác của người dùng rồi mới xử lý, để không cắt ngang lúc đang gõ (R10).
- **E10.5.** Tệp đang tải lên đúng lúc hết hạn: tải lại tệp sau khi đăng nhập; mô tả chi tiết thuộc màn nguồn.

**L3.4 Phiên bị chấm dứt vì tài khoản đổi trạng thái.** *Điều kiện:* người dùng đang đăng nhập; ở nơi khác xảy ra một trong: Quản trị **khóa** tài khoản (QT01 L5.1); Quản trị **đặt lại mật khẩu** (QT01 L4.1); người dùng **đổi mật khẩu** ở phiên khác (L2.1, L2.2) (R08).

1. **Bất kỳ màn (W07 ở bước 2) · Yêu cầu kế tiếp tới máy chủ.** Máy chủ từ chối kèm lý do phiên (R08). Không có đẩy thông báo tức thì; hiệu lực tại yêu cầu kế tiếp.
2. **→ W02 hoặc W07.** Chuyển tới màn Đăng nhập với banner theo lý do: M04 (khóa), M05 (đặt lại), M06 (đổi ở phiên khác). `next` là trang đang làm. Với M05 và M06 có thể đăng nhập lại được: nếu trang có thay đổi chưa lưu thì xử lý như L3.3 bước 3 (W07, W08). Với M04 không đăng nhập lại được: chuyển ngay, **không** chặn rời trang, dữ liệu chưa lưu mất (khớp QT01 E5.6).
3. **W02 · Đăng nhập lại (nếu được).** Theo L1.4. Sau M05 người dùng dùng mật khẩu tạm mới nên bị bắt đổi (L2.1).

*Kết quả:* mọi phiên của tài khoản đã bị thu hồi ngay khi sự kiện xảy ra (R08); người dùng biết lý do ở lần chạm kế tiếp.

- **E11.1.** Đổi vai trò (tài khoản luôn còn ít nhất một vai trò, QT01 R02): **không** chấm dứt phiên; quyền mới áp dụng từ yêu cầu kế tiếp, menu cập nhật ở lần tải trang kế (QT01 R02).
- **E11.2.** Đổi email đăng nhập ở QT01: phiên giữ nguyên (QT01 R01).
- **E11.3.** Quản trị mở khóa tài khoản: không ảnh hưởng phiên (khi khóa mọi phiên đã bị thu hồi). Đăng nhập sau đó bằng mật khẩu tạm mới (L2.1); hoặc bằng mật khẩu chính thức cũ khi Quản trị bỏ tích Đặt mật khẩu tạm mới, chỉ được với tài khoản có mật khẩu chính thức lúc bị khóa. Tài khoản đang có mật khẩu tạm lúc bị khóa thì mật khẩu tạm đó đã mất hiệu lực khi khóa và mở khóa bắt buộc đặt mật khẩu tạm mới (QT01 R04, R07).
- **E11.4.** Người dùng ở W03 (phiên hạn chế) gặp các sự kiện trên: xử lý giống nhau.
- **E11.5.** Phiên đã bị thu hồi bởi hai sự kiện liên tiếp (ví dụ đặt lại rồi khóa): lý do hiển thị là lý do đến **sau cùng**; không ảnh hưởng kết quả.
- **E11.6.** Phiên hết hạn và bị thu hồi trước đó: lý do thu hồi thắng lý do hết hạn.

### 3.4. Truy vết nguồn → luồng

| Nguồn | Nội dung | Luồng |
|---|---|---|
| BOI-CANH · Đăng nhập (Q24) | Phiên 7 ngày, gia hạn theo hoạt động | L3.2, L3.3; R07 |
| BOI-CANH · Đăng nhập (Q24) | Tạm khóa 15 phút sau 5 lần sai | L1.2, L1.3; R03 |
| BOI-CANH · Đăng nhập (Q24) | Mật khẩu ít nhất 10 ký tự, có chữ và số | L2.1, L2.2; R05 |
| BOI-CANH · Đăng nhập (Q24) | Bắt đổi mật khẩu tạm ở lần đầu | L2.1; R06 |
| BOI-CANH · Đăng nhập (Q24) | Có màn Đổi mật khẩu | L2.2 |
| BOI-CANH · Thuật ngữ Tạm khóa đăng nhập | Khác Bị khóa | L1.3; R02, R03 |
| BOI-CANH · Mặc định sau khi sửa RSD | Tạm khóa tự hết 15 phút, không nút mở sớm | L1.3 (E3.3); R03 |
| BOI-CANH · Tài khoản, Mật khẩu tạm | Không email, không link đặt lại | L1.5; R15 |
| QT01 R04 | Mật khẩu tạm không hết hạn, đổi ở lần đầu, hiện ở QT01 | L2.1 (E6.5); R06 |
| QT01 R04, R06, E5.6 | Đặt lại, khóa thì thu hồi phiên | L3.4; R08 |
| QT01 R09, QT03 R01 | Đổi mật khẩu tạm ghi lịch sử; QT03 không ghi đăng nhập | L2.1, L2.2; R12 |
| Phạm vi CH01 | Đường dẫn quay lại, dữ liệu chưa lưu | L1.4, L3.3; R09, R10 |
| Phạm vi CH01 | Đăng xuất | L3.1; R11 |
| Phạm vi CH01 | Mở Việc của tôi (CH03) hoặc đường dẫn người dùng định vào | L1.1; R09 |
| BOI-CANH · Nền tảng (ngoại lệ điện thoại), Vai trò HDV (người dùng chốt 12/11/2026) | Màn của HDV dùng trên điện thoại; tài khoản chỉ có vai trò thuộc phòng HDV vào Tour của tôi | L1.6; R18, R19 |

---

## 4. Quy tắc triển khai chi tiết

### R01. Email đăng nhập

- Email chuẩn hóa: bỏ khoảng trắng hai đầu, so sánh không phân biệt hoa thường (QT01 R01). Email sai định dạng bị chặn trước khi tính lần sai (E1.2).
- Đăng nhập tra tài khoản theo email chuẩn hóa hiện tại ở QT01. Đổi email ở QT01 thì lần đăng nhập sau dùng email mới (QT01 R01).

### R02. Thông báo lỗi an toàn

- Mọi lần đăng nhập không thành công **không** do Tạm khóa đều trả một thông báo duy nhất M01, dù: email không có tài khoản; mật khẩu sai; tài khoản Bị khóa (mật khẩu đúng hay sai).
- Ba trường hợp có **cùng** mã trạng thái, cùng nội dung phản hồi, cùng vị trí hiển thị, và thời gian xử lý tương đương (máy chủ vẫn băm so sánh với giá trị giả khi email không có hoặc tài khoản Bị khóa).
- Tạm khóa đăng nhập (M02) được áp **như nhau** cho email có tài khoản, email không có tài khoản và tài khoản Bị khóa (R03), để người ngoài không phân biệt được.
- Màn Đăng nhập không có gợi ý nào lộ trạng thái tài khoản (không hiện số lần còn lại, không hiện “tài khoản bị khóa”).
- Người đã có phiên mà tài khoản bị khóa thì được báo M04 (R08): người này đã đăng nhập nên biết tài khoản tồn tại; không lộ thông tin cho người ngoài.

### R03. Đếm lần sai và Tạm khóa đăng nhập (Q24)

- **Khóa đếm:** email chuẩn hóa. Có tài khoản hay không đều đếm (R02). Mỗi email một bộ đếm gồm *số lần sai liên tiếp* và *giờ hết khóa*.
- **Lần sai** = một lần gửi hợp lệ về định dạng ở màn Đăng nhập mà không đăng nhập được (R02), **hoặc** một lần nhập sai Mật khẩu hiện tại ở màn Đổi mật khẩu tự đổi của tài khoản đó. Không tính: lỗi kiểm tra nhập (trống, sai định dạng), lỗi kết nối hoặc 5xx, lần gửi trong lúc đang Tạm khóa.
- **Tạm khóa:** khi số lần sai liên tiếp đạt **5**, đặt giờ hết khóa = giờ của lần sai thứ 5 + **15 phút**. Chính lần thứ 5 đã nhận M02.
- **Trong Tạm khóa** (giờ hiện tại nhỏ hơn giờ hết khóa): mọi lần đăng nhập, kể cả mật khẩu đúng, bị từ chối bằng M02 với cùng giờ hết khóa; không so mật khẩu, không đếm, không kéo dài khóa.
- **Hết khóa:** từ giờ hết khóa trở đi (giờ hiện tại lớn hơn hoặc bằng) khóa tự hết, số lần sai về 0. Đúng giờ hết khóa đã được phép đăng nhập. Không cần tác vụ định kỳ: trạng thái tính lúc đọc từ giờ (Q6).
- **Reset:** số lần sai về 0 khi (a) đăng nhập đúng, (b) khóa hết. Không có thời hạn nào khác: 4 lần sai rồi nghỉ lâu thì lần sai kế tiếp vẫn là lần thứ 5.
- **Không có mở sớm.** Quản trị không mở được Tạm khóa; đặt lại mật khẩu, mở khóa tài khoản không xóa nó (E3.3).
- **Tạm khóa không đổi trạng thái tài khoản** ở QT01 (vẫn Đang hoạt động, QT01 R03). QT01 hiện chỉ báo **Tạm khóa đăng nhập, tự hết lúc hh:mm** trên tài khoản đang có giờ hết khóa lớn hơn hiện tại, đọc từ bộ đếm theo email của tài khoản; không có nút mở sớm.
- **Màn Đổi mật khẩu sai 5 lần:** đủ 5 thì Tạm khóa bắt đầu và mọi phiên của tài khoản bị thu hồi (R08, E7.2).
- **Giờ hiển thị trong M02** là giờ hết khóa, Asia/Ho_Chi_Minh, hh:mm.

### R04. Nguồn thời gian

- Mọi so sánh thời gian của CH01 (giờ hết khóa, hạn phiên, giờ đăng nhập gần nhất) dùng **một nguồn thời gian của máy chủ**. Môi trường kiểm thử thay được nguồn này (đặt giờ cụ thể, tiến giờ theo phút, ngày) mà không sửa dữ liệu hay chờ thật. Đồng hồ của trình duyệt không tham gia.
- Ví dụ test: sai 5 lần lúc 09:00 → 09:14:59 còn khóa, 09:15:00 đăng nhập được.

### R05. Quy tắc mật khẩu (Q24)

- Độ dài từ **10** đến **128** ký tự; có ít nhất **một chữ cái** (a–z, A–Z, kể cả chữ có dấu) và ít nhất **một chữ số** (0–9). Ký tự đặc biệt và khoảng trắng được phép, không bắt buộc.
- Không cắt khoảng trắng đầu và cuối; phân biệt hoa thường.
- Mật khẩu mới **khác** mật khẩu hiện tại (so sánh chính xác, phân biệt hoa thường). Ở chế độ bắt buộc, mật khẩu hiện tại là mật khẩu tạm.
- Mật khẩu nhập lại khớp mật khẩu mới.
- **Không chứa phần trước @ của email đăng nhập** của tài khoản (so không phân biệt hoa thường, không phân biệt dấu; chỉ áp khi phần trước @ có từ 3 ký tự). Ví dụ email ha.phan@congty.vn thì `Ha.Phan2026x` không đạt; lỗi cạnh ô “Mật khẩu không được chứa phần trước @ của email”. Danh sách quy tắc dưới ô có mục này.
- Thứ tự kiểm tra khi bấm Đổi mật khẩu: mật khẩu hiện tại đúng (chỉ chế độ tự đổi) → độ dài và ký tự → không chứa phần trước @ của email → khác mật khẩu hiện tại → nhập lại khớp. Gặp lỗi đầu thì dừng ở ô đó; danh sách quy tắc (client) đánh dấu mọi mục.
- **R05 là nguồn duy nhất của quy tắc mật khẩu.** Mật khẩu tạm do Quản trị tự nhập ở QT01 theo đúng các quy tắc trên trừ “khác mật khẩu hiện tại”; mật khẩu tạm hệ thống tự sinh cũng phải đạt (sinh lại nếu không đạt) (QT01 R04).
- Chỉ lưu dạng băm. Không lưu, không ghi nhật ký, không đưa vào đường dẫn hoặc thông báo lỗi dạng rõ.

### R06. Mật khẩu tạm và Chờ đổi mật khẩu (theo QT01 R04)

- Mật khẩu tạm không hết hạn. Tài khoản Chờ đổi mật khẩu đăng nhập được bằng mật khẩu tạm, nhưng phiên là phiên **hạn chế**.
- Phiên hạn chế chỉ cho: màn CH01.2 chế độ bắt buộc, gửi yêu cầu đổi mật khẩu, Đăng xuất. Mọi yêu cầu khác (trang, dữ liệu, thao tác ghi) bị máy chủ từ chối bằng lỗi “cần đổi mật khẩu” và client chuyển tới W03. Không có đường bỏ qua.
- Chế độ bắt buộc **không** có ô Mật khẩu hiện tại, vì người dùng vừa xác thực bằng chính mật khẩu đó.
- Trạng thái hạn chế **tính lúc đọc** từ loại mật khẩu hiện tại của tài khoản (tạm hay chính thức), không lưu trên phiên: đặt lại mật khẩu thì mọi phiên bị thu hồi (R08); đổi xong thì mọi phiên khác đã bị thu hồi (R08) và phiên đang đổi hết hạn chế ngay ở yêu cầu kế tiếp.
- Đổi mật khẩu tạm thành công: loại mật khẩu thành chính thức; chỉ báo Chờ đổi mật khẩu ở QT01 mất.
- Khóa tài khoản làm mật khẩu tạm đang có mất hiệu lực; mở khóa tài khoản đó bắt buộc đặt mật khẩu tạm mới (QT01 R04, R07; E11.3).

### R07. Phiên (Q24)

- **Tạo** khi đăng nhập thành công: mã phiên ngẫu nhiên, khó đoán, cấp mới mỗi lần đăng nhập (không dùng lại mã cũ). Hạn phiên = giờ hiện tại + **7 ngày**.
- **Gia hạn theo hoạt động:** mỗi yêu cầu do **thao tác của người dùng** tới máy chủ, khi phiên còn hiệu lực (kể cả phiên hạn chế), đặt lại hạn phiên = giờ hiện tại + 7 ngày. Không có hạn tuyệt đối tối đa. Yêu cầu nền tự động (làm mới số thông báo, kiểm tra trạng thái) **không** gia hạn (E9.1). Yêu cầu hợp lệ về phiên nhưng bị từ chối vì quyền hay lỗi nhập vẫn là hoạt động (E9.2).
- **Hết hạn:** giờ hiện tại lớn hơn hoặc bằng hạn phiên (E9.3). Tính lúc đọc ở mỗi yêu cầu, không cần tác vụ định kỳ (Q6).
- **Nhiều phiên:** một tài khoản có nhiều phiên cùng lúc (nhiều thiết bị, trình duyệt); mỗi phiên có hạn riêng. Đăng xuất chỉ thu hồi phiên hiện tại (R11).
- Mỗi phiên lưu thời điểm tạo, hạn, hoạt động gần nhất, trạng thái thu hồi và lý do (mục 5.1). Lý do được đọc một lần ở yêu cầu bị từ chối để hiện banner đúng (R08).

### R08. Chấm dứt phiên

Bảng dưới là các sự kiện thu hồi hoặc làm phiên không còn dùng được, và nơi người dùng thấy lý do (banner ở màn Đăng nhập):

| Sự kiện | Phạm vi | Lúc thu hồi | Lý do hiển thị |
|---|---|---|---|
| Hết hạn 7 ngày không hoạt động | Phiên đó | Tính lúc đọc (R07) | M03 |
| Đăng xuất (R11) | Phiên hiện tại | Ngay | M08 |
| Quản trị khóa tài khoản (QT01 R06) | Mọi phiên của tài khoản | Ngay, trong giao dịch khóa | M04 |
| Quản trị đặt lại mật khẩu (QT01 R04) | Mọi phiên của tài khoản | Ngay, trong giao dịch đặt lại | M05 |
| Người dùng đổi mật khẩu (L2.1, L2.2) | Mọi phiên **khác** của tài khoản; giữ phiên đang đổi | Ngay, trong giao dịch đổi | M06 |
| Đạt 5 lần nhập sai mật khẩu hiện tại ở màn Đổi mật khẩu (R03) | Mọi phiên của tài khoản | Ngay | M02 |

- **Hiệu lực ở yêu cầu kế tiếp:** máy chủ kiểm tra phiên và trạng thái tài khoản (Đang hoạt động) ở **mọi yêu cầu**; chấm dứt hiện ra ở yêu cầu kế tiếp của người dùng, không đẩy tức thì (L3.4). Khi sự kiện xảy ra mà máy chủ chưa kịp thu hồi (ví dụ hết hạn tính lúc đọc), yêu cầu kế tiếp cũng bị từ chối.
- **Ngoại lệ chấm dứt không áp dụng:** đổi vai trò; đổi email; mở khóa tài khoản (phiên đã thu hồi lúc khóa); sửa thông tin khác ở QT01.
- Nhiều lý do: lý do **sau cùng** thắng; thu hồi thắng hết hạn (E11.5, E11.6).
- **Mất vai trò:** bỏ theo rà chéo 12/11/2026 (N4). Tài khoản luôn có ít nhất một vai trò (QT01 R02); vai trò Ngừng dùng vẫn mang quyền cho tài khoản đang có nó (QT02 R01, R10); chỉ xóa được vai trò chưa gán, vai trò hệ thống không xóa, không ngừng dùng (QT02 R03, R10). CH01 không có sự kiện chấm dứt phiên vì vai trò; đổi vai trò theo E11.1.
- Quản trị không đặt lại mật khẩu của chính mình ở QT01 (QT01 R04), nên “đặt lại” không tự chấm dứt phiên Quản trị.

### R09. Đường dẫn quay lại (`next`)

- Giữ **đường dẫn và truy vấn** của trang đang vào hoặc đang làm trong tham số `next` của màn Đăng nhập.
- Hợp lệ khi: bắt đầu bằng một dấu `/`, không bắt đầu bằng `//` hoặc `/\`, không chứa lược đồ (`http:`, `javascript:`), tối đa 2.000 ký tự, và không trỏ tới chính màn Đăng nhập. Không hợp lệ thì bỏ qua và mở trang mặc định (R18) (chống chuyển hướng ra ngoài).
- Sau đăng nhập thành công: mở `next` hợp lệ, không thì trang mặc định (R18).
- Tài khoản Chờ đổi mật khẩu: `next` được giữ qua bước đổi mật khẩu (L2.1) rồi mở sau cùng.
- Màn Đăng nhập điền sẵn Email khi lý do là phiên chấm dứt (email của phiên trước); không điền khi người dùng mới vào.
- Chỉ giữ đường dẫn, **không** giữ dữ liệu form chưa lưu (R10).

### R10. Dữ liệu chưa lưu khi phiên chấm dứt

- **Trang có thay đổi chưa lưu** theo chuẩn chặn rời trang (rời form còn sửa chưa lưu thì hỏi xác nhận, W08).
- **Hết hạn, đặt lại mật khẩu, đổi mật khẩu ở phiên khác** (người dùng còn đăng nhập lại được): không tự chuyển trang; hiện banner W07, giữ dữ liệu; người dùng đăng nhập ở thẻ mới rồi quay lại Lưu. Chọn rời trang thì hộp thoại W08.
- **Khóa** (không đăng nhập lại được): chuyển ngay tới Đăng nhập; dữ liệu mất (khớp QT01 E5.6). Trước khi chuyển, client gỡ trình chặn rời trang để không hiện hộp thoại vô nghĩa.
- Trang giữ **mã tài khoản** của lúc mở. Lần Lưu bằng phiên mới thuộc tài khoản khác bị máy chủ từ chối kèm banner “Trang này mở bằng tài khoản khác. Tải lại trang” (E10.1).
- Yêu cầu nền bị từ chối vì phiên chấm dứt không tự chuyển trang; chờ thao tác của người dùng (E10.4).

### R11. Đăng xuất

- Thu hồi phiên hiện tại ngay ở máy chủ rồi xóa dữ liệu phiên ở trình duyệt. Không thu hồi phiên khác của tài khoản. Không hộp thoại xác nhận (U2); trang có dữ liệu chưa lưu thì chặn rời trang (R10, E8.1).
- **Ngoại lệ HD01.** Tài khoản còn bản chưa gửi của HD01 lưu trên máy (RSD HD01 R08) thì Đăng xuất hiện hộp thoại theo RSD HD01 E5.5 trước khi thu hồi phiên (E8.6), vì đăng xuất xóa các bản này khỏi máy và không lấy lại được. Không có bản chưa gửi thì đăng xuất ngay như trên.
- Thiết lập theo người dùng (bộ lọc, dạng xem đã lưu) **được giữ** sau khi đăng xuất (U3); bộ nhớ đệm dữ liệu nghiệp vụ bị xóa.
- Đăng xuất không ghi QT03 (QT03 R01).

### R12. Ghi nhật ký QT03

- **Có ghi** mỗi lần đổi mật khẩu **thành công**, vì đây là thao tác ghi dữ liệu của người dùng (QT03 R01; QT01 R09 đã khai “đổi mật khẩu tạm”). Một mục cho mỗi lần: nhãn **Đổi mật khẩu tạm** (chế độ bắt buộc, L2.1) hoặc **Đổi mật khẩu** (tự đổi, L2.2); mã màn CH01.2; đối tượng là tài khoản của chính người đổi; một trường “Mật khẩu”, Trước “—”, Sau “đã đổi” (không có giá trị mật khẩu, kể cả băm; QT03 R07); cờ Thao tác nhạy cảm vì là thao tác trên Người dùng (QT03 R13). Ghi cùng giao dịch với việc đổi mật khẩu và thu hồi phiên khác (Q5, ADR 0002): thành công cả hoặc không gì cả.
- **Không ghi:** đăng nhập thành công hoặc không, Tạm khóa đăng nhập, đăng xuất, hết hạn hoặc chấm dứt phiên, gia hạn phiên, đổi mật khẩu bị từ chối (QT03 R01).
- Mục này hiện ở tab Lịch sử của tài khoản ở QT01 (đọc kho QT03, QT01 R09).

### R13. Quyền dùng

- CH01 không qua ma trận QT02 (mục 1.4). Không có thao tác nào bị ẩn theo vai trò ngoài việc cần có phiên.
- Quyền của mọi màn khác vẫn do QT02 và máy chủ kiểm tra ở mỗi yêu cầu.
- Hai màn CH01 dùng được trên máy tính và điện thoại với mọi tài khoản (R19).

### R14. Bảo mật triển khai

- Mã phiên gửi qua cookie chỉ dùng cho HTTP (không đọc được bằng script), chỉ qua kết nối bảo mật, không đưa vào đường dẫn.
- Trang cần phiên và trang CH01 đặt không lưu đệm: sau đăng xuất, nút Back không hiện lại dữ liệu cũ (E8.3).
- Mật khẩu không xuất hiện trong nhật ký máy chủ, đường dẫn, thông báo lỗi, QT03.
- Phản hồi lỗi đăng nhập không phân biệt các nguyên nhân (R02): cùng mã trạng thái, cùng phần thân, cùng độ dài phản hồi. Máy chủ chạy cùng bước băm cho mọi trường hợp (R02) để thời gian xử lý không lộ nguyên nhân; điều này kiểm khi rà mã, không có AC đo thời gian.

### R15. Không có quên mật khẩu qua email

- Không có tự đặt lại mật khẩu, không có link đặt lại, hệ thống không gửi email nào về mật khẩu (BOI-CANH; QT01 R04). Màn Đăng nhập chỉ có dòng chữ cố định hướng người dùng liên hệ Quản trị, kèm dòng thông tin liên hệ lấy từ tệp cấu hình nếu có (L1.5).
- Thông tin liên hệ là một chuỗi chữ tự do trong tệp cấu hình triển khai (C2), tối đa 200 ký tự, hiện nguyên văn dạng chữ thường (không thành liên kết); không đọc từ tài khoản hay dữ liệu nào khác của hệ thống. Không có hoặc rỗng thì không hiện dòng này.

### R16. Đồng thời và chống lặp

- Đăng nhập: nút khóa khi đang gửi. Máy chủ xử lý các lần thử cùng một email **lần lượt** (khóa theo email) để bộ đếm không bỏ sót và không vượt 5 khi đồng thời (E3.4).
- Đổi mật khẩu: mỗi lần mở form có một mã thao tác; gửi lặp hoặc gửi lại sau lỗi mạng với cùng mã chỉ đổi một lần; nếu tra thấy đã đổi thì báo “Mật khẩu đã được đổi” và đi tiếp (E6.7).
- Hai yêu cầu đồng thời cùng gặp phiên chấm dứt: cả hai bị từ chối; client chỉ chuyển trang một lần.
- Thu hồi phiên và đổi mật khẩu cùng một giao dịch; một yêu cầu đang xử lý dở với phiên bị thu hồi giữa chừng được tính theo kết quả kiểm tra phiên lúc ghi.

### R17. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Khi thiếu |
|---|---|---|---|
| Trang Việc của tôi (CH03) | CH03 | Đích sau đăng nhập (R09) | Không thiếu: Việc của tôi có với mọi tài khoản; vai trò không có thẻ thì trang hiện “Chưa có thẻ việc cho vai trò của bạn.” (RSD CH03 E1.5) |
| Trang Tour của tôi (HD01) | HD01 | Đích sau đăng nhập của tài khoản chỉ có vai trò thuộc phòng HDV (R18) | Không thiếu: HD01 không có Tour thì hiện trang trống theo RSD HD01 |
| Phòng của vai trò | QT02 (R03, R13) | R18 | Vai trò hệ thống có phòng cố định; vai trò tự tạo luôn khai phòng |
| Thông tin liên hệ Quản trị trên màn Đăng nhập | Tệp cấu hình triển khai (C2) | L1.5, R15 | Chỉ hiện dòng chữ cố định |
| Nguồn thời gian máy chủ | Triển khai | R03, R07 | Dùng giờ hệ thống |
| Hằng số 5 lần, 15 phút, 7 ngày, 10 ký tự | Cố định trong mã (Q24), không có màn cấu hình | R03, R05, R07 | — |

### R18. Trang mặc định sau đăng nhập (người dùng chốt 12/11/2026; CGD K0.07)

- Tài khoản **chỉ có vai trò thuộc phòng HDV** (VT-005 HDV hoặc vai trò tự tạo thuộc phòng HDV, RSD QT02 R03): trang mặc định là **Tour của tôi (HD01)**.
- Mọi tài khoản khác, kể cả tài khoản vừa có vai trò thuộc phòng HDV vừa có vai trò khác: trang mặc định là **Việc của tôi (CH03)**; Tour của tôi mở từ menu hoặc lối ở Việc của tôi (RSD CH03 1.2).
- Tính ở máy chủ lúc đăng nhập và mỗi lần mở địa chỉ gốc `/`, từ vai trò hiện hành của tài khoản (QT01) và phòng của vai trò (QT02); đổi vai trò giữa phiên có hiệu lực ở lần mở `/` kế tiếp (E11.1). CH01 không đọc ma trận quyền: nếu Quản trị tắt `HD01.xem` của vai trò phòng HDV ở QT02, tài khoản vẫn được đưa tới HD01 và nhận trang không có quyền của CGD K0.09; còn Đổi mật khẩu và Đăng xuất ở menu.
- Trong tài liệu này, “Việc của tôi” ở vị trí đích sau đăng nhập, sau đổi mật khẩu, khi `next` không hợp lệ hay đã có phiên đọc là trang mặc định theo quy tắc này.

### R19. Dùng trên điện thoại (BOI-CANH Nền tảng, ngoại lệ điện thoại)

- CH01.1 và CH01.2 dùng được trên điện thoại: vùng hiển thị hẹp hơn 768 px thì theo bố cục CGD K7 (K7.02 chiều rộng 360–430 px, K7.05 vùng chạm, K7.07 form một cột, K7.13); từ 768 px trở lên là bố cục máy tính như 2.1.
- Mọi quy tắc khác của CH01 không đổi theo thiết bị: thông báo M01–M09, Tạm khóa, quy tắc mật khẩu, phiên 7 ngày và gia hạn theo hoạt động, `next`, chặn rời trang, ghi QT03.
- Ô Email: bàn phím email, không tự viết hoa chữ đầu, không tự sửa chính tả, cho trình duyệt điền sẵn. Ô Mật khẩu: cho trình quản lý mật khẩu của máy điền (đánh dấu đúng loại mật khẩu hiện tại hoặc mật khẩu mới).
- Menu tài khoản trên điện thoại là menu ☰ của khung thu gọn (CGD K7.04), có Đổi mật khẩu và Đăng xuất như K0.06.
- Phiên trên điện thoại là một phiên riêng (R07); đăng xuất ở điện thoại không đăng xuất phiên trên máy tính (R11).

---

## 5. Dữ liệu

### 5.1. Đối tượng

| Đối tượng | Khóa | Dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|---|
| Phiên đăng nhập | ID phiên (giá trị mã không lưu dạng rõ) | Tài khoản, thời điểm tạo, hạn phiên, hoạt động gần nhất, thời điểm thu hồi, lý do thu hồi | CH01 ghi khi đăng nhập, gia hạn, thu hồi; QT01 thu hồi khi khóa, đặt lại mật khẩu (QT01 mục 5.1) |
| Bộ đếm đăng nhập | Email chuẩn hóa | Số lần sai liên tiếp, giờ hết khóa | CH01 ghi mỗi lần sai, đăng nhập đúng; QT01 đọc để hiện chỉ báo Tạm khóa đăng nhập |
| Mật khẩu | ID tài khoản | Giá trị băm, loại (tạm hoặc chính thức), thời điểm đặt | QT01 ghi mật khẩu tạm; CH01 ghi khi người dùng đổi |
| Tài khoản (đọc) | ID tài khoản | Email, trạng thái, vai trò, đăng nhập gần nhất | QT01 sở hữu; CH01 chỉ ghi Đăng nhập gần nhất |
| Mục nhật ký QT03 (ghi) | Mã `TT-YYMM-NNNNNNN` | Theo R12 | QT03 sở hữu kho; CH01 ghi khi đổi mật khẩu |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| CH01.1 Đăng nhập | Email | Có | Email phiên trước khi chấm dứt (R09); trống khi vào mới | Định dạng email, bỏ khoảng trắng hai đầu (R01) |
| CH01.1 Đăng nhập | Mật khẩu | Có | Trống | Không kiểm tra độ mạnh khi đăng nhập |
| CH01.2 Tự đổi | Mật khẩu hiện tại | Có | Trống | Đúng mật khẩu hiện tại (R03, R05) |
| CH01.2 Cả hai chế độ | Mật khẩu mới | Có | Trống | 10 đến 128 ký tự, có chữ và số, không chứa phần trước @ của email, khác mật khẩu hiện tại (R05) |
| CH01.2 Cả hai chế độ | Nhập lại mật khẩu mới | Có | Trống | Khớp mật khẩu mới |
| CH01.2 chế độ bắt buộc | (không có Mật khẩu hiện tại) | — | — | Khác mật khẩu tạm (R05, R06) |

### 5.3. Dữ liệu gửi ra ngoài

CH01 **không gửi** email, tin nhắn hay tệp ra ngoài hệ thống (BOI-CANH; QT01 mục 5.3). Mật khẩu tạm do Quản trị chuyển qua kênh nội bộ ngoài hệ thống; CH01 không tham gia.

---

## 6. Tiêu chí nghiệm thu

Giờ trong cột điều kiện là giờ nguồn thời gian điều khiển được (R04). “Còn khóa” nghĩa là nhận M02. Mã test `T-CH01-nn` khớp số AC.

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được | Mã test |
|---|---|---|---|
| AC01 | Tài khoản ha.phan Đang hoạt động, mật khẩu chính thức; vào địa chỉ gốc, nhập đúng email và mật khẩu, Enter | Mở Việc của tôi; có phiên với hạn = giờ hiện tại + 7 ngày; Đăng nhập gần nhất = giờ hiện tại; bộ đếm = 0; không có mục QT03 nào (L1.1) | T-CH01-01 |
| AC02 | Nhập `  HA.Phan@CongTy.vn ` (hoa thường và khoảng trắng hai đầu) với mật khẩu đúng | Đăng nhập thành công như AC01 (R01) | T-CH01-02 |
| AC03 | Chưa đăng nhập, vào `/khach-hang?q=abc&trang=2`, đăng nhập đúng | Màn Đăng nhập không banner; sau đăng nhập mở đúng `/khach-hang?q=abc&trang=2` (R09) | T-CH01-03 |
| AC04 | Vào màn Đăng nhập với `next` là `//evil.example`, `http://evil.example`, `javascript:x`, hoặc chính màn Đăng nhập; đăng nhập đúng | Mọi trường hợp bỏ `next`, mở Việc của tôi (R09) | T-CH01-04 |
| AC05 | Đã có phiên hợp lệ, mở lại màn Đăng nhập | Chuyển ngay tới `next` hợp lệ hoặc Việc của tôi, không hiện form (E1.3) | T-CH01-05 |
| AC06 | Bỏ trống Email hoặc Mật khẩu, bấm Đăng nhập | Lỗi cạnh ô tương ứng; không gửi yêu cầu; bộ đếm không đổi (E1.1) | T-CH01-06 |
| AC07 | Nhập email `ha.phan` (thiếu @) | Lỗi cạnh ô “Email không hợp lệ”; không gửi; bộ đếm không đổi (E1.2) | T-CH01-07 |
| AC08 | Email có tài khoản, mật khẩu sai | M01 ở vùng trên form; Email giữ, ô mật khẩu xóa, con trỏ ở ô Mật khẩu; không có phiên; bộ đếm = 1 (L1.2) | T-CH01-08 |
| AC09 | Email chưa có tài khoản, mật khẩu bất kỳ | M01; phản hồi API có cùng mã trạng thái, phần thân giống từng byte và cùng độ dài với phản hồi ở AC08; M01 hiện cùng vị trí. Không đo thời gian (R02, R14) | T-CH01-09 |
| AC10 | Tài khoản Bị khóa, nhập đúng mật khẩu | M01 như AC08; không có phiên; không có dấu hiệu tài khoản Bị khóa trong phản hồi; bộ đếm tăng 1 (E2.1, R02) | T-CH01-10 |
| AC11 | Bỏ theo rà chéo 12/11/2026 (N4), cùng E1.7 | — | T-CH01-11 (không dùng) |
| AC12 | Nhập sai 4 lần liên tiếp rồi nhập đúng; sau đó nhập sai 4 lần liên tiếp | Lần đúng vào được, bộ đếm = 0; 4 lần sai tiếp theo chưa Tạm khóa (bộ đếm = 4) (E3.1, R03) | T-CH01-12 |
| AC13 | 09:00 nhập sai 5 lần liên tiếp cùng email | Lần thứ 1 đến 4 nhận M01; lần thứ 5 nhận M02 với giờ hết khóa “09:15”; ô mật khẩu xóa (L1.3) | T-CH01-13 |
| AC14 | Đang Tạm khóa, 09:05 nhập đúng mật khẩu | M02 “09:15”; không có phiên; bộ đếm và giờ hết khóa không đổi (R03) | T-CH01-14 |
| AC15 | Đang Tạm khóa, 09:14 nhập sai nhiều lần | Vẫn M02 “09:15”; giờ hết khóa không dời (không kéo dài) (R03) | T-CH01-15 |
| AC16 | Tiến giờ tới 09:14:59 rồi nhập đúng | Còn khóa, M02 (R03, R04) | T-CH01-16 |
| AC17 | Tiến giờ tới 09:15:00 rồi nhập đúng | Đăng nhập thành công; bộ đếm = 0 (L1.3 bước 3) | T-CH01-17 |
| AC18 | Sau 09:15 nhập sai một lần | M01 (không M02); bộ đếm = 1; cần thêm 4 lần sai mới Tạm khóa lại (L1.3) | T-CH01-18 |
| AC19 | Email chưa có tài khoản nhập sai 5 lần liên tiếp | Lần thứ 5 nhận M02 như tài khoản thật (E3.2, R02) | T-CH01-19 |
| AC20 | Tài khoản Bị khóa nhập 5 lần liên tiếp (đúng hay sai mật khẩu) | Lần thứ 5 nhận M02; Tạm khóa như tài khoản thường (E3.2) | T-CH01-20 |
| AC21 | Tài khoản A đang Tạm khóa; tài khoản B đăng nhập đúng | B vào được; bộ đếm A, B độc lập (E3.5) | T-CH01-21 |
| AC22 | Tài khoản Tạm khóa; Quản trị đặt lại mật khẩu rồi mở QT01 | QT01 hiện chỉ báo Tạm khóa đăng nhập tự hết lúc hh:mm, trạng thái vẫn Đang hoạt động, không nút mở sớm; đăng nhập bằng mật khẩu tạm mới vẫn M02 cho tới hết khóa (E3.3, R03) | T-CH01-22 |
| AC23 | Hai yêu cầu đăng nhập sai cùng email gửi đồng thời khi bộ đếm = 4 | Yêu cầu xử lý trước thành lần sai thứ 5 và nhận M02; yêu cầu sau gặp Tạm khóa và cũng nhận M02; bộ đếm không vượt 5, giờ hết khóa không đổi (E3.4, R16) | T-CH01-23 |
| AC24 | Tệp cấu hình không có thông tin liên hệ Quản trị; mở màn Đăng nhập, nhìn dòng dưới nút | Chỉ có dòng chữ cố định “Quên mật khẩu hoặc chưa có tài khoản? Liên hệ Quản trị hệ thống.”; không có liên kết quên mật khẩu, không ô nhập email đặt lại; không có email nào gửi đi (L1.5, R15) | T-CH01-24 |
| AC25 | Bấm Đăng nhập hai lần nhanh | Nút khóa lúc đang gửi; máy chủ nhận một yêu cầu (E1.5) | T-CH01-25 |
| AC26 | Ngắt mạng rồi bấm Đăng nhập | M09; giữ Email và mật khẩu; bộ đếm không đổi (E1.4) | T-CH01-26 |
| AC27 | Đăng nhập bằng mật khẩu tạm | Mở W03, không menu, không ô Mật khẩu hiện tại; chỉ có tên và Đăng xuất (L2.1, R06) | T-CH01-27 |
| AC28 | Ở W03 gõ địa chỉ `/khach-hang` hoặc gọi dữ liệu từ màn khác | Chuyển lại W03; yêu cầu dữ liệu bị từ chối bằng lỗi “cần đổi mật khẩu”; không dữ liệu nghiệp vụ nào được trả (E6.1) | T-CH01-28 |
| AC29 | Ở W03 đổi mật khẩu mới hợp lệ (có `next`) | Mở `next`; thông báo ngắn “Đã đổi mật khẩu”; QT01 hết chỉ báo Chờ đổi mật khẩu; đăng nhập bằng mật khẩu tạm cũ nhận M01; phiên hiện tại hết hạn chế (L2.1) | T-CH01-29 |
| AC30 | Sau AC29 xem QT03 | Một mục “Đổi mật khẩu tạm”, màn CH01.2, đối tượng là tài khoản đó, trường Mật khẩu: Trước “—”, Sau “đã đổi”, cờ ⚑; không có giá trị mật khẩu hay băm (R12) | T-CH01-30 |
| AC31 | Mật khẩu tạm tạo từ 12/10/2026, giờ 12/11/2026 (hơn 30 ngày), chưa đổi | Vẫn đăng nhập được bằng mật khẩu tạm, rồi bị bắt đổi (E6.5, QT01 AC15) | T-CH01-31 |
| AC32 | Ở W03 nhập mật khẩu mới trùng mật khẩu tạm | Lỗi cạnh ô Mật khẩu mới “Mật khẩu mới phải khác mật khẩu hiện tại”; không đổi (E6.2) | T-CH01-32 |
| AC33 | Ở W03 bấm Đăng xuất, đăng nhập lại bằng mật khẩu tạm | Về Đăng nhập (M08); đăng nhập lại vẫn bị bắt đổi (E6.4) | T-CH01-33 |
| AC34 | Mật khẩu mới 9 ký tự có chữ và số | Lỗi (R05); không đổi | T-CH01-34 |
| AC35 | Mật khẩu mới đúng 10 ký tự, có chữ và số (ví dụ `abcdefgh12`) | Đạt (biên 10) | T-CH01-35 |
| AC36 | Mật khẩu mới 10 chữ cái không số; rồi 10 chữ số không chữ | Cả hai lỗi, danh sách quy tắc đánh dấu mục chưa đạt (R05) | T-CH01-36 |
| AC37 | Mật khẩu mới 128 ký tự đạt; 129 ký tự | 128 đạt; 129 lỗi (R05) | T-CH01-37 |
| AC38 | Mật khẩu mới có khoảng trắng đầu cuối, có chữ và số | Đạt; sau khi đổi, đăng nhập phải gõ đúng khoảng trắng đó (R05) | T-CH01-38 |
| AC39 | Nhập lại không khớp | Lỗi cạnh ô Nhập lại “Mật khẩu nhập lại không khớp”; không đổi (E6.3) | T-CH01-39 |
| AC40 | Tự đổi: mật khẩu hiện tại đúng, mới hợp lệ | Thông báo ngắn “Đã đổi mật khẩu”; về trang trước đó; QT03 có mục “Đổi mật khẩu” ⚑ không chứa mật khẩu; đăng nhập bằng mật khẩu cũ nhận M01 (L2.2, R12) | T-CH01-40 |
| AC41 | Tự đổi khi tài khoản có phiên ở thiết bị khác | Phiên hiện tại giữ; thông báo ngắn ghi “Đã đăng xuất 1 phiên khác”; yêu cầu kế tiếp của phiên kia về Đăng nhập với M06 (R08, L3.4) | T-CH01-41 |
| AC42 | Tự đổi: mật khẩu hiện tại sai | Lỗi cạnh ô Mật khẩu hiện tại; không đổi; ô này xóa, hai ô còn lại giữ; bộ đếm tăng 1; không kiểm tra các ô khác (E7.1, R05) | T-CH01-42 |
| AC43 | Tự đổi: mới trùng hiện tại | Lỗi “Mật khẩu mới phải khác mật khẩu hiện tại”; không đổi (E7.4) | T-CH01-43 |
| AC44 | Bộ đếm = 4, tự đổi sai mật khẩu hiện tại lần 5 | M02 ở Đăng nhập; mọi phiên của tài khoản bị thu hồi; mật khẩu không đổi (E7.2, R03) | T-CH01-44 |
| AC45 | Tự đổi: gõ rồi bấm Hủy | Hộp thoại chặn rời trang W08; chưa gõ gì thì về ngay (E7.6) | T-CH01-45 |
| AC46 | Mất mạng sau khi bấm Đổi mật khẩu rồi bấm lại với cùng mã thao tác | Mật khẩu chỉ đổi một lần; tra thấy đã đổi thì báo “Mật khẩu đã được đổi” và đi tiếp; chỉ một mục QT03 (E6.7, R16) | T-CH01-46 |
| AC47 | Đăng nhập lúc 09:00 ngày D | Hạn phiên = 09:00 ngày D + 7 ngày (R07) | T-CH01-47 |
| AC48 | Ngày D+6 09:00 thao tác mở một màn | Hạn phiên = 09:00 ngày D+13 (gia hạn); đến ngày D+10 vẫn dùng được (L3.2) | T-CH01-48 |
| AC49 | Chỉ có yêu cầu nền (làm mới số thông báo) trong 7 ngày | Không gia hạn; sau 7 ngày thao tác thật bị từ chối (E9.1) | T-CH01-49 |
| AC50 | Không hoạt động đúng 7 ngày kể từ hoạt động cuối, rồi thao tác | Hạn phiên bằng giờ hiện tại nên coi là hết hạn; bị từ chối (E9.3); lệch trước 1 giây thì còn dùng được | T-CH01-50 |
| AC51 | Phiên hết hạn, trang không có thay đổi chưa lưu, bấm một liên kết | Chuyển Đăng nhập, banner M03, Email điền sẵn, `next` = trang đang làm; đăng nhập đúng thì về đúng trang cũ kèm truy vấn (L3.3, L1.4) | T-CH01-51 |
| AC52 | Phiên hết hạn, form khách hàng có thay đổi chưa lưu, bấm Lưu | Không chuyển trang; banner W07; dữ liệu giữ; liên kết Đăng nhập ở thẻ mới; đăng nhập xong quay lại Lưu thành công (L3.3 bước 3) | T-CH01-52 |
| AC53 | Như AC52, rồi đóng thẻ khi chưa lưu | Hộp thoại chặn rời trang W08 hiện; chọn Rời trang thì mất dữ liệu (R10) | T-CH01-53 |
| AC54 | Như AC52, đăng nhập ở thẻ mới bằng tài khoản khác rồi Lưu ở thẻ cũ | Lưu bị từ chối, banner “Trang này mở bằng tài khoản khác. Tải lại trang”; dữ liệu giữ trên form (E10.1) | T-CH01-54 |
| AC55 | Hai yêu cầu đồng thời gặp phiên hết hạn | Cả hai bị từ chối; client chuyển trang một lần (R16) | T-CH01-55 |
| AC56 | Menu tài khoản → Đăng xuất | Phiên hiện tại thu hồi; về Đăng nhập với M08; gọi lại bằng mã phiên cũ bị từ chối; Back không hiện dữ liệu cũ; không mục QT03 (L3.1, R14) | T-CH01-56 |
| AC57 | Đăng xuất rồi đăng nhập lại | Bộ lọc, dạng xem đã lưu của người dùng vẫn còn (U3, R11) | T-CH01-57 |
| AC58 | Đăng xuất khi trang có thay đổi chưa lưu | Hộp thoại W08; Ở lại thì không đăng xuất (E8.1) | T-CH01-58 |
| AC59 | Có hai phiên (máy A, máy B); đăng xuất ở A | Phiên B giữ nguyên, vẫn dùng được (R07, R11) | T-CH01-59 |
| AC60 | Đang đăng nhập; Quản trị khóa tài khoản; người dùng thao tác tiếp | Yêu cầu kế tiếp bị từ chối; về Đăng nhập với M04; không chặn rời trang kể cả có dữ liệu chưa lưu; đăng nhập sau đó nhận M01 (L3.4, R08, QT01 E5.6) | T-CH01-60 |
| AC61 | Bỏ theo rà chéo 12/11/2026 (N4), cùng M07 | — | T-CH01-61 (không dùng) |
| AC62 | Đang đăng nhập, Quản trị gỡ một trong hai vai trò | Phiên giữ; quyền mới áp từ yêu cầu kế tiếp; không về Đăng nhập (E11.1) | T-CH01-62 |
| AC63 | Đang đăng nhập; Quản trị đặt lại mật khẩu của người này; thao tác tiếp | Về Đăng nhập với M05; có dữ liệu chưa lưu thì W07 và W08; mật khẩu cũ nhận M01; mật khẩu tạm mới đăng nhập được và bị bắt đổi (L3.4) | T-CH01-63 |
| AC64 | Đang ở W03 (phiên hạn chế); Quản trị khóa tài khoản; thao tác tiếp | Về Đăng nhập với M04 (E6.6, E11.4) | T-CH01-64 |
| AC65 | Hai thẻ cùng ở W03; đổi mật khẩu ở thẻ 1; gửi ở thẻ 2 | Thẻ 2 báo “Mật khẩu đã được đổi” và đi tiếp `next` (E6.9) | T-CH01-65 |
| AC66 | Quản trị khóa tài khoản người đang có hai phiên | Cả hai phiên bị thu hồi ngay ở giao dịch khóa; cả hai nhận M04 ở yêu cầu kế tiếp (R08) | T-CH01-66 |
| AC67 | Đặt lại rồi khóa liên tiếp trước khi người dùng thao tác | Banner M04 (lý do sau cùng) (E11.5) | T-CH01-67 |
| AC68 | Quản trị đổi email đăng nhập của người đang đăng nhập | Phiên giữ; đăng nhập sau dùng email mới (E11.2) | T-CH01-68 |
| AC69 | (a) Tài khoản có mật khẩu chính thức bị khóa; mở khóa giữ tích Đặt mật khẩu tạm mới; đăng nhập bằng mật khẩu tạm. (b) Như (a) nhưng bỏ tích; đăng nhập bằng mật khẩu chính thức cũ. (c) Tài khoản Chờ đổi mật khẩu bị khóa; trong lúc khóa thử đăng nhập bằng mật khẩu tạm; mở khóa | (a) Đăng nhập được, bị bắt đổi (W03). (b) Đăng nhập được, vào Việc của tôi. (c) Lúc khóa nhận M01; ở hộp thoại mở khóa ô Đặt mật khẩu tạm mới tích sẵn và không bỏ được; sau mở khóa mật khẩu tạm cũ nhận M01, mật khẩu tạm mới đăng nhập được và bị bắt đổi (E11.3, R06) | T-CH01-69 |
| AC70 | Đang Tạm khóa; đồng hồ trình duyệt lệch 3 giờ so với máy chủ | Giờ trong M02 vẫn theo Asia/Ho_Chi_Minh của máy chủ (E1.8, R04) | T-CH01-70 |
| AC71 | Chạy AC01–AC46 với các mật khẩu thử đã biết (gồm mật khẩu sai, mật khẩu tạm, mật khẩu mới); sau đó tìm từng chuỗi mật khẩu đó trong bốn nơi: phần thân mọi phản hồi API đã ghi lại, kho nhật ký QT03, bảng thông báo (CH02), log ứng dụng của máy chủ (gồm URL truy cập) | 0 kết quả ở cả bốn nơi (R05, R14) | T-CH01-71 |
| AC72 | Đăng nhập lần lượt bằng tài khoản chỉ có Kinh doanh, chỉ có Kế toán, chỉ có Quản trị hệ thống; mở Menu tài khoản | Với cả ba, menu có mục Đổi mật khẩu và Đăng xuất; bấm Đổi mật khẩu mở W04 (R13; CGD K0.06) | T-CH01-72 |
| AC73 | Tự đổi với mật khẩu mới chỉ có chữ cái có dấu và số (ví dụ `Mậtkhẩu2026`) | Đạt (chữ có dấu tính là chữ cái) (R05) | T-CH01-73 |
| AC74 | Tài khoản ha.phan@congty.vn tự đổi với mật khẩu mới `Ha.Phan2026x`, rồi `xHA.PHAN2026`; Quản trị tự nhập mật khẩu tạm `ha.phan-2026` khi đặt lại mật khẩu ở QT01 | Cả ba lỗi “Mật khẩu không được chứa phần trước @ của email”, không đổi, không đặt lại; mật khẩu `Thuha2026xy` đạt (R05; QT01 R04) | T-CH01-74 |
| AC75 | Tệp cấu hình có thông tin liên hệ “Đỗ Quang Huy · máy lẻ 102”; mở màn Đăng nhập | Dưới dòng chữ cố định có dòng “Đỗ Quang Huy · máy lẻ 102”, dạng chữ, không phải liên kết; xóa cấu hình rồi tải lại thì dòng này không còn (R15, R17) | T-CH01-75 |
| AC76 | Ngô Thị Mai (chỉ HDV), mật khẩu chính thức; ở vùng hiển thị 390 × 844 vào địa chỉ gốc, đăng nhập đúng | Màn Đăng nhập bố cục điện thoại: không cuộn ngang, thẻ rộng hết màn trừ 16 px, ô Email mở bàn phím email; đăng nhập xong mở Tour của tôi (HD01); hạn phiên = giờ hiện tại + 7 ngày (L1.6, R18, R19) | T-CH01-76 |
| AC77 | Mai đăng nhập ở 1280 × 800 không có `next`; sau đó mở địa chỉ gốc `/` | Cả hai lần mở Tour của tôi (R18; CGD K0.07) | T-CH01-77 |
| AC78 | Tài khoản thử có Điều hành và HDV đăng nhập ở 390 × 844, rồi ở 1280 × 800 | Cả hai lần mở Việc của tôi; menu có mục Tour của tôi (E12.2, R18) | T-CH01-78 |
| AC79 | Mai Chờ đổi mật khẩu, đăng nhập ở 390 × 844 bằng mật khẩu tạm; đổi mật khẩu mới hợp lệ | W10 bố cục điện thoại, không có menu, chỉ tên và Đăng xuất; đổi xong mở Tour của tôi, thông báo ngắn “Đã đổi mật khẩu” ở đáy màn; QT03 có mục “Đổi mật khẩu tạm” (L2.1, E12.1, R12, R18) | T-CH01-79 |
| AC80 | Mai ở HD01 trên điện thoại: ☰ → Đổi mật khẩu, đổi hợp lệ; rồi ☰ → Đăng xuất | Mở W10 chế độ tự đổi; đổi xong về HD01; Đăng xuất về Đăng nhập với M08 (L2.2, L3.1, R19) | T-CH01-80 |
| AC81 | Mai chưa đăng nhập, vào `/dieu-hanh/ho-so` (DH07) rồi đăng nhập đúng | Sau đăng nhập hiện trang không có quyền (CGD K0.09), nút Về Tour của tôi; bấm nút mở HD01 (E4.2, R09) | T-CH01-81 |
| AC82 | Ở 390 × 844 nhập sai mật khẩu của Mai 5 lần liên tiếp lúc 09:00 | Lần thứ 5 nhận M02 “09:15” như AC13; QT01 hiện chỉ báo Tạm khóa đăng nhập (R03, R19) | T-CH01-82 |
| AC83 | Mai có 2 mục chưa gửi của HD01 trên máy (RSD HD01 AC30); ☰ → Đăng xuất, bấm Ở lại; ☰ → Đăng xuất lần nữa, bấm Vẫn đăng xuất | Lần 1: hộp thoại “Còn 2 mục chưa gửi · đăng xuất sẽ xóa các mục này khỏi máy”; Ở lại thì phiên còn, 2 mục còn. Lần 2: về Đăng nhập với M08; đăng nhập lại cùng tài khoản không còn mục chưa gửi nào. Tài khoản không có mục chưa gửi thì đăng xuất ngay, không hộp thoại (E8.6, R11; RSD HD01 E5.5) | T-CH01-83 |
