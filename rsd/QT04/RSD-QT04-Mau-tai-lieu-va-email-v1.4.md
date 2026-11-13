# RSD QT04 · Mẫu tài liệu và email

- **Module.** Quản trị (menu Quản trị → Mẫu tài liệu). Màn QT04 chỉ còn nhóm QT04.2 Điều hành · Email đặt dịch vụ, Pax list, Rooming list; nhóm QT04.1 của Kinh doanh đã bỏ khỏi phạm vi (C3).
- **Phiên bản.** v1.4 · 12/11/2026.
- **Nguồn nghiệp vụ.** `docs/flows/danh-sach-man-hinh-level1.md` (QT04, QT04.2), `docs/flows/danh-sach-tinh-nang-ho-tro-level1.md` (CNHT05.01, CNHT05.02, CNHT05.03; DX03, DX07), `docs/flows/level 1/luonghotro.md` (HT05.01–HT05.05), RSD DH08 v2.8 (R04 khóa gộp email, R06 yêu cầu riêng, mục 4 cấu hình phụ thuộc, 5.3 dữ liệu gửi ra ngoài; ghi chú làm việc: trường `{yeu_cau_rieng}`, mẫu email hủy và cập nhật, tập cột Pax list theo loại NCC), RSD DH03 v1.4 (trường Ngôn ngữ giao dịch của NCC), RSD QT05 v1.2 (danh mục Ngôn ngữ, Loại dịch vụ), RSD KD06 v1.5 (R18 proposal), RSD DH01 v1.4 (cách làm phiên bản mẫu), `docs/rsd/BOI-CANH-DU-AN.md`, `docs/QUYET-DINH-PHASE-CODING.md` và các quyết định người dùng chốt ngày 12/11/2026 (Q1 quyền, Q2 proposal, Q3 phiên bản, Q4 KD06 dùng mẫu proposal riêng không cấu hình, Q5 DH08 tự khớp mẫu).
- **Thay đổi so với nguồn.**
  - Proposal báo giá **không cấu hình ở QT04**: hệ thống tự dựng theo wireframe W33 của RSD KD06 (quyết định 12/11/2026, Q22). Nhóm “báo giá” của nguồn được bỏ.
  - “Xem trước với dữ liệu mẫu (đề xuất)” được làm thành xem trước với dữ liệu thật của một hồ sơ Tour hoặc khách, không ghi gì (R13).
  - Mẫu email đặt dịch vụ có ba mục đích (Đặt dịch vụ, Điều chỉnh, Hủy) để đáp ứng email hủy và cập nhật của RSD DH08. Email gửi kèm Pax list, Rooming list nằm trong chính mẫu tài liệu đó.
- **Thay đổi ở v1.4 (12/11/2026).** Cập nhật theo quyết định phase coding (`docs/QUYET-DINH-PHASE-CODING.md`): bỏ trọn nhóm QT04.1 (mẫu Survey, email chăm sóc của Kinh doanh), bỏ thanh tab, mọi tham chiếu KD09, KD10, chiến dịch, Remarketing, hủy nhận (C3; 1.1–1.5, 2.1–2.6, L1.1, L6.1, 3.4, 3.5, 3.8, R01–R07, R09, R10–R13, R15, 5.1–5.3, AC02, AC07, AC31–AC39); bỏ nhúng hình W02, W21–W27 (tệp PNG giữ nguyên). Mục 1.4 viết lại thành quyền mặc định theo vai trò: Điều hành sửa, Kinh doanh và Quản trị xem, Kế toán không có (Q1, Q25; R01); không có quyền thì ẩn nút, trường chỉ đọc hiện dạng chữ (U5; L1.3, AC05). Cột Pax list gửi NCC là hợp các cột của mọi loại dịch vụ có trong email hoặc tài liệu (Q17; L3.1, R08, AC25). Xung đột khi lưu chỉ có nút Tải lại (Q8; E2.3, R14, AC21). Gửi thử và dựng PDF đi qua hàng đợi (Q5; R13, 5.3); xem trước email ghi CC người thao tác (G2; L2.1). Hộp thư chung, logo, tên công ty ở tệp cấu hình hoặc dữ liệu khởi tạo (C2; 1.3, R08, R15). Bỏ nhãn “suy ra, chờ xác nhận” (Q3; E8.5). Bảng trượt theo cỡ 1100 px (K5). Bộ lọc nhớ theo người dùng (U3; 2.3, L1.2, 5.1). Mã Q, U, G, C, K trong dòng này là mã quyết định phase coding; các mã Q1–Q5 ở Nguồn nghiệp vụ, 1.5, R01, R07 là quyết định cũ ngày 12/11/2026 của QT04, giữ nghĩa cũ. Không dựng lại wireframe; hình chưa cập nhật có ghi chú.
- **Thay đổi ở v1.4 (bổ sung 12/11/2026 · dịch vụ đi kèm).** Theo quyết định của người dùng ngày 12/11/2026 (BOI-CANH-DU-AN, thuật ngữ Dịch vụ đi kèm, Giường phụ; RSD DH08 R21): dịch vụ đi kèm chung hạng mục với dịch vụ chính, nên trường `{ds_dich_vu}` liệt kê đi kèm của từng hạng mục ngay dưới dòng hạng mục (tên đi kèm, số lượng và đơn vị, ngày dùng), theo ngôn ngữ của bản; không thêm trường mới, mẫu đang dùng không phải sửa. Cột Ghi chú của Rooming list lấy ghi chú phòng của DH08.4, gồm “Giường phụ”. Sửa R04, R08; thêm AC57. Không dựng lại wireframe.
- **Thay đổi ở v1.3 (12/11/2026).** Bổ sung sau kiểm tra chéo cuối đợt: R13 trường {Yêu cầu riêng}: bỏ “theo nhãn”, theo hai ô Ăn uống, Phòng nhập tự do của RSD DH08 v2.8 R06. Theo rà soát mâu thuẫn lần ba và quyết định của người dùng về mẫu email chiến dịch (theo RSD KD10, nơi sở hữu chiến dịch): mẫu Survey được chụp phiên bản hiện hành khi bật lần đầu, chặn bật nếu mẫu đã ngừng dùng, bật lại sau Tạm dừng không tự lấy bản mới; mẫu email chăm sóc được điền và chụp vào bước Remarketing lúc soạn hoặc lưu bước, sửa được, ngừng dùng mẫu không chặn bật (1.2, 2.5, E4.5, L5.1 kết quả, L6.1, 3.8, R09, R11, R12). Sửa dẫn chiếu KD10 L2.1 thành L2.2 (L5.1, 3.8). Bỏ KD09 khỏi nơi hiện điểm tổng thể (R09; KD09 không hiện điểm). Cập nhật phiên bản dẫn chiếu ở Nguồn nghiệp vụ và 1.5. Dựng lại W21–W24 (ô thông tin bản chụp ở cột trái; ghi chú mẫu GR-01 bỏ KD09).
- **Thay đổi ở v1.2 (12/11/2026).** Theo rà soát lần hai và quyết định của người dùng “luôn một email cho mỗi (NCC, loại việc)”: email gộp chứa dịch vụ của nhiều loại dịch vụ của cùng NCC thì dùng mẫu dự phòng Mọi loại dịch vụ của mục đích đó; email một loại dịch vụ dùng mẫu khớp theo (mục đích, loại dịch vụ), không có thì mẫu Mọi loại dịch vụ; không bao giờ tách email theo mẫu hay loại dịch vụ (R07, 3.8). Ngôn ngữ email lấy từ trường Ngôn ngữ giao dịch của NCC nay đã có ở RSD DH03 v1.3 (bỏ chữ “trường cần bổ sung”) (R03, R07, E8.4). Pax list, Rooming list giữ nguyên: DH08 không cho chọn mẫu, mỗi loại một mẫu Đang dùng. Thêm E8.5, AC55, AC56; sửa 3.8, E6.1, E8.4, R03, R07. Không dựng lại wireframe (giao diện QT04 không đổi).
- **Thay đổi ở v1.1 (12/11/2026).** Theo quyết định “DH08, hệ thống tự khớp mẫu”: bỏ khái niệm Chọn sẵn và ô chọn mẫu ở DH08; mỗi phạm vi khớp (mục đích, loại dịch vụ; Pax list; Rooming list) chỉ có một mẫu Đang dùng, mẫu Mọi loại dịch vụ là dự phòng (R07). Tạo mẫu trùng phạm vi thì mẫu ở Ngừng dùng để soạn trước (L2.3, W12); bật mẫu thay mẫu đang dùng bằng một hộp thoại (L6.3, W28a mới); tắt mẫu email chỉ nêu hệ quả, không phải chọn mẫu thay (L6.2, W28); mẫu Pax list, Rooming list đang dùng không tắt trực tiếp (E3.5). Ngôn ngữ email NCC tự khớp theo ngôn ngữ giao dịch của NCC (R03, R07). Thêm E2.11, E6.6a, E6.7, AC42a, AC42b, AC53, AC54; sửa 1.2, 1.3, 1.4, 2.2, 2.4, 2.5, 2.6, 3.8, R11, R12, R14, R16, 5.1, 5.2, AC01, AC16, AC19, AC20, AC40–AC43, AC49. Dựng lại W01–W32 (PL-02 nay Ngừng dùng; bỏ nhãn Chọn sẵn).
- **Thay đổi ở v1.0.** Bản đầu, viết mới từ danh sách màn.

**Cách đọc.** Mục 3 là luồng theo nhóm mẫu. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác và phản hồi của hệ thống; hình nằm ngay dưới bước. Mục 4 là quy tắc (mã R), luồng chỉ dẫn mã R. Ảnh 1280 × 800, dữ liệu trên ảnh là minh họa (hôm nay 12/11/2026, 10:15; hồ sơ TP-2611-0042 khớp RSD DH08). Chụp lại: `node wireframes-src/build.js [Wxx …]`; xem tất cả ở `wireframes/index.html`.

**Hình chưa cập nhật (mọi hình):** thanh tab còn tab “Kinh doanh · Survey và email chăm sóc” (bỏ theo C3; nay không có thanh tab); bảng trượt vẽ rộng 1060 px (nay 1100 px, K5). Khác biệt riêng của từng hình ghi ngay dưới hình. Hình W02, W21–W27 chỉ minh họa QT04.1 nên không còn nhúng.

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác kèm wireframe
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

QT04 là nơi Điều hành khai báo một lần các mẫu nội dung mà hệ thống dùng để soạn sẵn email và tài liệu gửi NCC: mẫu email đặt dịch vụ, Pax list, Rooming list cho DH08. Người dùng ở DH08 không phải soạn lại nội dung. Mục tiêu thiết kế:

- **Biết mẫu nào đang được dùng ở đâu.** Danh sách cho thấy loại dịch vụ áp dụng, mẫu nào DH08 đang tự khớp, phiên bản và số lần đã dùng; bảng trượt nêu màn đang dùng mẫu.
- **Ít nhập lại.** Tạo mẫu bằng cách sao chép mẫu có sẵn (mọi ngôn ngữ); mã mẫu gợi ý; trường tự điền chèn từ menu, không gõ tay.
- **Thấy kết quả trước khi lưu.** Xem trước bằng dữ liệu thật của một hồ sơ Tour hoặc khách; gửi thử tới email của chính mình.
- **Không gửi sai.** Kiểm tra trường tự điền, tiêu đề, bản dịch khi lưu; cụm tùy chọn để email không còn câu cụt khi dữ liệu trống.
- **An toàn khi sửa.** Lưu là áp dụng ngay cho lần soạn sau, mỗi lần lưu một phiên bản; email đã gửi, tài liệu đã tạo giữ nguyên nội dung; khôi phục được phiên bản cũ.

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Menu Quản trị → Mẫu tài liệu | Mở QT04 ở danh sách mẫu của Điều hành (W01); không còn thanh tab (C3). |
| QT04 → bảng trượt mẫu | Bấm một dòng để mở bảng trượt của mẫu (W11). Bấm + Tạo mẫu để mở bảng trượt tạo mẫu (W06). |
| DH08.3 → QT04.2 (đọc) | Khi soạn email đặt, đặt lại, điều chỉnh, hủy, DH08 tự khớp mẫu theo R07 và trộn trường theo R04, R05. |
| DH08.4 → QT04.2 (đọc) | Khi xem, tải, gửi Pax list hoặc Rooming list, DH08 tự dùng mẫu Pax list, Rooming list đang dùng (R07), tập cột theo R08. |
| DH08 E3.1 → QT04.2 | Khi thiếu mẫu cho loại dịch vụ, người có quyền thấy liên kết Mở mẫu tài liệu, mở QT04.2 ở chip Email đặt dịch vụ. |
| QT05 → QT04 | Danh mục Loại dịch vụ và Ngôn ngữ cung cấp giá trị cho Áp dụng cho loại dịch vụ, cột của Pax list và thẻ ngôn ngữ. |

### 1.3. Ranh giới

- QT04 **sở hữu**: mẫu (mã, tên, loại, mục đích, loại dịch vụ áp dụng, Đang dùng), nội dung theo ngôn ngữ, tập cột Pax list và Rooming list, các phiên bản và lịch sử của mẫu.
- QT04 **không sở hữu** và chỉ đọc: danh mục loại dịch vụ, ngôn ngữ (QT05); hồ sơ Tour, khách đoàn, hạng mục dịch vụ, phân phòng (DH08) để xem trước; email đã gửi và tài liệu đã tạo (DH08) để đếm Đã dùng; hộp thư chung (kết nối một lần bằng lệnh CLI, G2), logo và tên công ty (tệp cấu hình hoặc dữ liệu khởi tạo, C2).
- **Không thuộc QT04:** mẫu proposal báo giá (hệ thống dựng theo W33 của RSD KD06, RSD KD06 R18; quyết định 12/11/2026, Q22); mẫu checklist (DH01); mẫu Survey và email chăm sóc (bỏ theo C3).
- Việc **soạn và gửi** thuộc DH08 (email NCC, Pax list, Rooming list). QT04 chỉ quy định nội dung và cách tự khớp mẫu. QT04 không gửi gì ra ngoài, trừ Gửi thử tới email của chính người dùng (R13).

### 1.4. Quyền mặc định theo vai trò

Quyền là cặp (màn hoặc phần của màn, thao tác), gán cho vai trò ở QT02; bảng dưới là giá trị mặc định, Quản trị đổi được ở QT02 (Q1). Các chữ “Điều hành”, “Kinh doanh”, “Kế toán” ở điều kiện luồng, ngoại lệ và AC của tài liệu này là vai trò có quyền theo mặc định.

| Phần × thao tác | Điều hành | Kinh doanh | Kế toán | Quản trị hệ thống |
|---|---|---|---|---|
| Xem QT04.2: danh sách, mở mẫu, lịch sử phiên bản | Có | Có | Không | Có |
| **Quản lý mẫu Điều hành**: tạo, sửa, lưu, bật tắt, xóa, khôi phục, xem trước, gửi thử, tải thử | Có | Không | Không | Không |

- **Nguồn.** Quyết định cũ Q1 ngày 12/11/2026 (Điều hành sửa, bộ phận khác xem) và BOI-CANH mục Điều hành (C3, Q1). Quản trị hệ thống xem được mọi màn (Q25); chỉ sửa khi được cấp Quản lý mẫu Điều hành ở QT02 (R01).
- **Không có phạm vi bản ghi.** Người có Quản lý mẫu Điều hành sửa được mọi mẫu của nhóm (R01).
- **Ẩn và chỉ đọc (U5).** Người chỉ xem không thấy + Tạo mẫu; cột Đang dùng hiện chữ Đang dùng hoặc Ngừng dùng thay cho công tắc (W04); bảng trượt hiện mọi trường dạng chữ, không có thẻ Xem trước, không có Lưu, Xóa (W32).
- **Kiểm tra lúc ghi.** Máy chủ kiểm tra quyền và phiên bản mẫu khi lưu, bật tắt, xóa (R14).
- **Dữ liệu cá nhân.** Mẫu không chứa dữ liệu cá nhân. Xem trước đọc dữ liệu thật nhưng che số hộ chiếu (giữ 4 ký tự đầu và 2 ký tự cuối, như danh sách DH08); tải thử cũng che (R13).

### 1.5. Truy vết nguồn

| Mã nguồn | Nội dung | Luồng, quy tắc |
|---|---|---|
| CNHT05.01 · HT05.01 | Xem, tìm, chọn mẫu Pax list, Rooming list, email đặt dịch vụ theo phạm vi công việc (mẫu báo giá không cấu hình, Q22; các mẫu khác của Kinh doanh bỏ theo C3) | L1.1, L1.2, L1.3 |
| HT05.02 | Chọn nhóm mẫu theo bộ phận: chỉ còn nhóm hồ sơ Tour, đặt dịch vụ → HT05.04; nhóm của Kinh doanh (HT05.03) bỏ theo C3 | L1.1, R01, R02 |
| CNHT05.02 · HT05.03 | Mẫu của Kinh doanh: bỏ theo C3 | — |
| CNHT05.03 · HT05.04 | Tạo, cập nhật mẫu Pax list, Rooming list, email đặt dịch vụ, trường tự điền từ Tour, khách, dịch vụ, NCC; Điều hành | L2.1–L2.3, L3.1, L3.2, R04, R07, R08 |
| HT05.05 | Hệ thống lấy mẫu để xuất tài liệu hoặc soạn nội dung ở SYS03, SYS06, SYS07, SYS10 | 3.8, R07, R11 |
| QT04 (danh sách màn) · đề xuất | Xem trước với dữ liệu mẫu | L2.1 bước 4, R13 |
| DX03, DX07 | Mẫu email đặt dịch vụ; mẫu tài liệu xuất Pax list, Rooming list (báo giá: không cấu hình, Q2) | L2.1, L3.1, L3.2 |
| RSD DH08 v2.8 · R06, ghi chú làm việc | Trường `{yeu_cau_rieng}`; mẫu email hủy và cập nhật; tập cột Pax list theo loại NCC | R04, R05, R07, R08 |
| Quyết định 12/11/2026 (mã cũ) | Q1 Điều hành sửa nhóm mẫu của mình, bộ phận khác xem; Q2, Q4 proposal dùng mẫu riêng của công ty, không cấu hình; Q3 lưu là áp dụng, có phiên bản, không duyệt; Q5 DH08 tự khớp mẫu | R01, 1.3, R11, R07 |
| Quyết định phase coding C3, Q1, Q5, Q8, Q17, G2, U5 | Bỏ QT04.1; quyền mặc định theo vai trò; gửi thử, PDF qua hàng đợi; chỉ Tải lại khi xung đột; cột Pax list là hợp các loại dịch vụ trong tài liệu; CC người thao tác; trường chỉ đọc dạng chữ | 1.4, R01, R08, R13, R14, E2.3, L2.1 |

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. Bố cục danh sách (W01, W02)

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Tiêu đề | Mẫu tài liệu và email · Điều hành (n mẫu Đang dùng); nút + Tạo mẫu ở bên phải (chỉ người có Quản lý mẫu Điều hành). Người chỉ xem thấy chữ “Chỉ xem nhóm mẫu này”. Không có thanh tab (C3) | R01, R02 |
| Thanh lọc | Ô tìm; bộ chọn Trạng thái (Đang dùng, Ngừng dùng, Tất cả); liên kết Xóa bộ lọc khi khác mặc định; chip loại mẫu ở bên phải | 2.3 |
| Bảng | Các cột ở mục 2.2. Không phân trang (thường dưới 50 mẫu mỗi nhóm) | — |

- Tổng các chip loại bằng chip Tất cả, cùng bộ lọc Trạng thái và ô tìm.
- Sắp xếp: theo loại mẫu (thứ tự chip), rồi mục đích (Đặt dịch vụ, Điều chỉnh, Hủy), rồi mã tăng dần.
- **Dạng xem:** chỉ Bảng. Mẫu là đối tượng cấu hình, chỉ có cờ Đang dùng, không có ngày nghiệp vụ, nên không có Kanban, Lịch (quy tắc dạng xem của dự án).

### 2.2. Cột của bảng

| Cột | Nội dung |
|---|---|
| Mẫu | Mã · tên (đậm, màu liên kết); mờ khi Ngừng dùng |
| Loại · mục đích | Email đặt dịch vụ · Đặt dịch vụ, Điều chỉnh hoặc Hủy; Pax list; Rooming list |
| Áp dụng cho | Loại dịch vụ hoặc “Mọi loại dịch vụ”; Pax list: số loại dịch vụ có tập cột riêng. “Mọi loại dịch vụ” là mẫu dự phòng của mục đích đó (R07) |
| Ngôn ngữ | Mã ngôn ngữ của các bản nội dung (VI, EN…) |
| Phiên bản hiện hành | vN · ngày lưu · người lưu |
| Đã dùng | Số email đã gửi (email đặt dịch vụ) hoặc số tài liệu đã tải, gửi (Pax list, Rooming list), mọi phiên bản; 0 thì “Chưa dùng” |
| Đang dùng | Công tắc tại chỗ (R12); người chỉ xem thấy chữ Đang dùng hoặc Ngừng dùng (U5) |

### 2.3. Tìm, lọc

| Bộ lọc | Giá trị | Mặc định |
|---|---|---|
| Tìm | Mã, tên mẫu, tên loại dịch vụ áp dụng, nội dung tiêu đề và thân email của phiên bản hiện hành (mọi ngôn ngữ); chuỗi con, không phân biệt hoa thường và dấu | Trống |
| Trạng thái | Đang dùng, Ngừng dùng, Tất cả | Đang dùng |
| Chip loại | Tất cả, Email đặt dịch vụ, Pax list, Rooming list | Tất cả |

Bộ lọc áp dụng ngay, nhớ theo người dùng kể cả sau khi đăng xuất (U3), kể cả khi mở rồi đóng bảng trượt. Lối vào từ DH08 E3.1 mở QT04.2 với chip Email đặt dịch vụ.

### 2.4. Bảng trượt mẫu (W06, W11)

Bảng trượt bên phải, rộng 1100 px (cỡ lớn theo K5), dùng chung cho tạo mới, sửa và chỉ xem.

| Vùng | Nội dung |
|---|---|
| Tiêu đề | Tạo mới: “Tạo mẫu · {loại mẫu}”, dòng dưới ghi nhóm. Sửa: mã · tên và nhãn phiên bản hiện hành; dòng dưới ghi loại, áp dụng cho, Đang dùng, lần lưu cuối |
| Cột trái | Bắt đầu từ (chỉ khi tạo), Mã mẫu, Tên mẫu, Loại mẫu, Mục đích (email đặt dịch vụ), Áp dụng cho loại dịch vụ (kèm dòng cho biết DH08 đang khớp mẫu nào), các thiết lập riêng của loại mẫu, Ghi chú nội bộ, Dùng ở |
| Cột phải | Thẻ con theo loại mẫu (bảng dưới); thẻ ngôn ngữ ngay dưới thẻ con với các thẻ có nội dung theo ngôn ngữ |
| Chân | Trái: Xóa mẫu (chỉ khi sửa; khóa kèm lý do nếu đã dùng) hoặc câu nêu hậu quả khi tạo; Gửi thử ở thẻ Xem trước. Phải: số thay đổi chưa lưu, Hủy hoặc Đóng, nút chính (Tạo mẫu hoặc Lưu phiên bản vN+1) |

| Loại mẫu | Thẻ con |
|---|---|
| Email đặt dịch vụ | Nội dung · Xem trước · Lịch sử phiên bản |
| Pax list | Cột theo loại dịch vụ · Email gửi kèm · Xem trước · Lịch sử phiên bản |
| Rooming list | Cột và bố cục · Email gửi kèm · Xem trước · Lịch sử phiên bản |

Khi tạo mới chưa có thẻ Lịch sử phiên bản. Công tắc Đang dùng chỉ ở dòng danh sách, không lặp trong bảng trượt.

### 2.5. Trạng thái và vòng đời của mẫu

| Từ | Đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|---|
| (chưa có) | Đang dùng · v1 | Người có quyền bấm Tạo mẫu (L2.1, W06 → W10) | Qua kiểm tra R06; không trùng phạm vi khớp với mẫu Đang dùng (R07) | DH08 tự khớp được ngay | Lỗi kiểm tra: W13 |
| (chưa có) | Ngừng dùng · v1 | Như trên (L2.3, W12) | Trùng phạm vi khớp với mẫu Đang dùng | Mẫu được soạn trước, chưa được dùng | — |
| Đang dùng · vN | Đang dùng · vN+1 | Bấm Lưu phiên bản (L2.2, W11 → W11a) | Có thay đổi; phiên bản trên máy chủ vẫn là vN | Lần soạn, xuất sau dùng vN+1; email đã gửi, tài liệu đã tạo giữ nguyên (R11) | Phiên bản đã đổi: W14 |
| Ngừng dùng · vN | Ngừng dùng · vN+1 | Như trên | Như trên | Chỉ đổi nội dung; vẫn không được dùng | — |
| Đang dùng | Ngừng dùng | Tắt công tắc, xác nhận (L6.2; W28) | Không phải mẫu Pax list, Rooming list duy nhất đang dùng (E3.5) | Mẫu không còn được khớp; loại dịch vụ chuyển sang mẫu dự phòng nếu có (R07) | Lỗi lưu: công tắc trở về cũ |
| Ngừng dùng | Đang dùng | Bật công tắc (L6.3; W28a khi trùng phạm vi) | Mẫu trùng phạm vi chỉ áp dụng trong phạm vi của mẫu được bật (R07) | Được khớp ngay; mẫu trùng phạm vi tự chuyển Ngừng dùng trong cùng giao dịch | Trùng một phần: E6.7 |
| Đang dùng hoặc Ngừng dùng | (đã xóa) | Bấm Xóa mẫu, xác nhận (L6.4, W29) | Đã dùng bằng 0 | Xóa mẫu và mọi phiên bản | Vừa được dùng: E6.4 |

- **Đang dùng**, **Ngừng dùng** là trạng thái người dùng chọn. Mẫu Đang dùng là mẫu DH08 tự khớp; không có hai mẫu Đang dùng cùng phạm vi khớp (R07). **Đã dùng** là số tính từ dữ liệu nơi dùng, quyết định có xóa được hay không (R12).
- Mẫu không có trạng thái nháp và không có bước duyệt (quyết định 12/11/2026).

### 2.6. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác.**
  - *Trên bảng:* lọc, mở mẫu. Bấm bất kỳ đâu trên dòng, trừ công tắc, để mở bảng trượt.
  - *Ô chọn tại chỗ:* công tắc Đang dùng. Bật lưu ngay; tắt mở hộp thoại xác nhận (W28) và lưu sau khi xác nhận; lỗi thì công tắc trở về giá trị cũ.
  - *Bảng trượt* (1100 px): tạo, sửa, xem trước, lịch sử của một mẫu. Một nút Lưu cho cả mẫu, mọi ngôn ngữ, mọi thẻ.
  - *Hộp thoại:* chỉ cho ngừng dùng, xóa và đóng bảng trượt khi còn thay đổi chưa lưu.
- **Một thao tác, một chỗ bấm.** Mở mẫu bằng dòng. Bật tắt bằng công tắc trên dòng. Xóa chỉ ở chân bảng trượt. Tạo mẫu từ mẫu có sẵn dùng ô Bắt đầu từ, không có nút Nhân bản trên dòng. Chèn trường chỉ bằng menu Chèn trường trên thanh công cụ. Thông tin ở tiêu đề bảng trượt (loại, áp dụng, lần lưu cuối) không lặp trong các thẻ.
- **Nút bị khóa có lý do.** Xóa mẫu khóa thì ghi lý do ngay cạnh (đã dùng cho n email hoặc n tài liệu). Lưu khóa khi chưa có thay đổi.
- **Trường tự điền** hiện thành nhãn vàng `{Tên trường}` trong khung soạn; không gõ tay được dấu ngoặc nhọn thành trường. **Cụm tùy chọn** hiện trong ngoặc vuông, gạch chân nét đứt (R05).
- **Trường điền sẵn** có nhãn nhỏ xanh ngọc (Gợi ý, Đã sao chép, Từ nhóm). Trường chỉ đọc hiện dạng chữ (U5).
- **Thay đổi chưa lưu.** Dòng hoặc ô thay đổi nền xanh lá nhạt; thẻ ngôn ngữ có thay đổi có dấu •; chân bảng trượt đếm số thay đổi. Thẻ ngôn ngữ hoặc thẻ con có lỗi có số đỏ.
- **Tải.** Danh sách tải một lần. Bảng trượt tải phiên bản hiện hành khi mở; Xem trước và Lịch sử tải khi bấm vào thẻ. Đang tải: khung xám. Lỗi tải: dòng lỗi trong vùng tương ứng kèm Thử lại; vùng khác vẫn dùng được.
- **Rỗng.** Nhóm chưa có mẫu nào: “Chưa có mẫu {loại}” kèm nút + Tạo mẫu (người có quyền). Không khớp bộ lọc: W05.
- **Lưu.** Một giao dịch: thành công hết hoặc không đổi gì; gửi kèm số phiên bản đang sửa (R14). Lỗi thì giữ nguyên nội dung đang soạn, lỗi hiện cạnh trường.
- **Rời khi chưa lưu.** Đóng bảng trượt, rời trang khi còn thay đổi: hộp thoại W15.
- **Giữ ngữ cảnh.** Sau khi lưu, bảng trượt ở lại đúng thẻ và ngôn ngữ đang mở; danh sách giữ bộ lọc; dòng ra khỏi bộ lọc thì mờ tại chỗ kèm chú thích cho tới khi tải lại (L6.2).
- **Thông báo ngắn** ở góc phải dưới 5 giây; thông báo có Hoàn tác 10 giây.
- **Ngày giờ.** dd/mm/yyyy, múi giờ Asia/Ho_Chi_Minh.

---

## 3. Luồng thao tác kèm wireframe

Mỗi luồng có mã L, ngoại lệ có mã E. Lỗi tải, lưu, bảng rỗng đã quy định một lần ở mục 2.6.

### 3.1. Xem, tìm và chọn nhóm mẫu (CNHT05.01 · HT05.01, HT05.02)

**L1.1 Mở QT04.** *Điều kiện:* người có quyền xem QT04.2 (mặc định Điều hành, Kinh doanh, Quản trị hệ thống).

1. **W01 · Menu Quản trị → Mẫu tài liệu (Điều hành).** Màn mở danh sách mẫu của Điều hành (không còn thanh tab), chip Tất cả, Trạng thái Đang dùng. Bảng nêu từng mẫu email đặt dịch vụ theo mục đích và loại dịch vụ; mỗi mẫu Đang dùng là mẫu DH08 tự khớp cho phạm vi đó, mẫu “Mọi loại dịch vụ” là dự phòng (R07); Pax list, Rooming list (mỗi loại một mẫu Đang dùng) ở cuối. Số ở tiêu đề và trên chip đếm mẫu Đang dùng.

   ![W01 · Danh sách mẫu của Điều hành](wireframes/W01.png)

2. **W02 · (Bỏ theo C3).** Danh sách mẫu của Kinh doanh không còn.

*Kết quả:* người dùng thấy các mẫu của Điều hành và mẫu nào DH08 đang tự khớp.

**L1.2 Tìm và lọc.**

1. **W03 · Ô tìm và bộ chọn Trạng thái.** Người dùng gõ “khách sạn” và chọn Trạng thái: Tất cả. Bảng lọc ngay; mẫu Ngừng dùng DV-08 hiện mờ; chip đếm lại theo bộ lọc; liên kết Xóa bộ lọc xuất hiện. Bấm chip loại để thu hẹp thêm.

   ![W03 · Tìm mẫu, gồm cả mẫu ngừng dùng](wireframes/W03.png)

*Kết quả:* bộ lọc được nhớ theo người dùng (U3).

**L1.3 Xem mẫu khi chỉ có quyền xem.** *Điều kiện:* người dùng không có Quản lý mẫu Điều hành (R01), ví dụ Kinh doanh.

1. **W04 · Menu Quản trị → Mẫu tài liệu (Kinh doanh).** Tiêu đề ghi “Chỉ xem nhóm mẫu này”, không có + Tạo mẫu; cột Đang dùng hiện chữ thay cho công tắc (U5); dòng chú thích dưới bảng nêu ai quản lý nhóm.

   ![W04 · Xem nhóm mẫu của bộ phận khác](wireframes/W04.png)

   > Hình chưa cập nhật: công tắc còn vẽ mờ; nay hiện chữ Đang dùng hoặc Ngừng dùng (U5). Thanh tab đang chọn tab Điều hành (nay không có tab).

2. **W32 · Bấm một dòng.** Bảng trượt chỉ đọc: mọi trường hiện dạng chữ (U5), chỉ có thẻ Nội dung và Lịch sử phiên bản, chân chỉ có Đóng và câu nêu quyền.

   ![W32 · Mở mẫu của bộ phận khác](wireframes/W32.png)

   > Hình chưa cập nhật: trường chỉ đọc còn vẽ viền nét đứt; nay hiện dạng chữ (U5).

*Kết quả:* Kinh doanh biết nội dung Điều hành gửi NCC, không sửa được.

**Ngoại lệ**

- **E1.1 · W05.** Không có mẫu khớp tìm kiếm hoặc bộ lọc: bảng rỗng ghi rõ chuỗi tìm và trạng thái đang lọc, gợi ý chọn Trạng thái: Tất cả, nút Xóa bộ lọc.

  ![W05 · Không có mẫu khớp bộ lọc](wireframes/W05.png)

- **E1.2.** Nhóm chưa có mẫu nào (dự án mới): bảng rỗng “Chưa có mẫu …” kèm nút + Tạo mẫu cho người có quyền; người chỉ xem thấy “Điều hành chưa tạo mẫu”.
- **E1.3.** Người không có quyền xem QT04 (mặc định Kế toán) mở QT04 bằng đường dẫn: trang “Bạn không có quyền xem Mẫu tài liệu và email” kèm liên kết về trang chủ; không lộ tên mẫu.
- **E1.4.** Mẫu bị xóa ở phiên khác khi người dùng bấm dòng: thông báo ngắn “Mẫu … đã bị xóa”, dòng biến mất, số chip cập nhật.
- **E1.5.** Quyền bị thu hồi ở QT02 khi đang mở màn: thao tác ghi tiếp theo bị máy chủ từ chối (R14), màn tải lại ở chế độ chỉ xem; nội dung đang soạn được giữ trong bảng trượt để sao chép.

### 3.2. Mẫu email đặt dịch vụ (CNHT05.03 · HT05.04)

**L2.1 Tạo mẫu email đặt dịch vụ.** *Điều kiện:* Điều hành có quyền quản lý mẫu Điều hành, đang ở QT04.2.

1. **W06 · Nút + Tạo mẫu → chọn Email đặt dịch vụ → bảng trượt.** Ô Bắt đầu từ cho chọn một mẫu email đặt dịch vụ có sẵn (mặc định: mẫu dự phòng Mọi loại dịch vụ của mục đích Đặt dịch vụ); nội dung mọi ngôn ngữ, mục đích được sao chép, nền xanh ngọc. Mã gợi ý theo tiền tố của mẫu nguồn (DV-09, R02). Điều hành nhập tên, chọn loại dịch vụ áp dụng; dòng gợi ý dưới ô cho biết loại dịch vụ đó hiện được khớp mẫu nào (R07). Chọn “Trống” ở Bắt đầu từ thì khung soạn trống, chỉ có bản Tiếng Việt.

   ![W06 · Tạo mẫu email từ mẫu có sẵn](wireframes/W06.png)

2. **W07 · Nút Chèn trường trên thanh công cụ.** Menu liệt kê các trường của loại mẫu và mục đích đang chọn, nhóm Tour, NCC và dịch vụ, Người gửi; trường có thể trống ghi chú bên phải (R04). Bấm một trường để chèn tại con trỏ, thành nhãn vàng.

   ![W07 · Chèn trường tự điền](wireframes/W07.png)

3. **W08 · Thẻ ngôn ngữ English.** Điều hành mở bản English (đã sao chép ở bước 1) hoặc + Thêm ngôn ngữ (chọn từ danh mục ngôn ngữ QT05; bản mới sao chép cấu trúc trường từ bản Tiếng Việt để dịch). Chọn đoạn chứa trường có thể trống rồi bấm Cụm tùy chọn: đoạn được đóng ngoặc vuông; ô chú thích dưới khung giải thích (R05).

   ![W08 · Bản English và cụm tùy chọn](wireframes/W08.png)

4. **W09 · Thẻ Xem trước.** Hệ thống gợi ý hồ sơ Tour chưa đóng có hạng mục cùng loại dịch vụ, khởi hành gần hôm nay nhất, và hạng mục đầu tiên của loại đó; người dùng đổi được hồ sơ, hạng mục, ngôn ngữ. Email hiện đúng như DH08 sẽ soạn: người gửi là hộp thư chung, người nhận lấy từ DH03, CC người thao tác (G2), phần trộn tô vàng, cụm tùy chọn trống bị bỏ (R13). Bấm Gửi thử tới email của tôi: hệ thống đưa bản trộn vào hàng đợi gửi email tới email tài khoản (Q5), tiêu đề có “[Gửi thử]”, thông báo ngắn “Đã gửi thử tới …”.

   ![W09 · Xem trước email với hồ sơ thật](wireframes/W09.png)

   > Hình chưa cập nhật: chưa có dòng CC người thao tác (G2).

5. **W10 · Nút Tạo mẫu.** Hệ thống kiểm tra theo R06; hợp lệ thì tạo mẫu Đang dùng v1 (loại dịch vụ chưa có mẫu riêng Đang dùng, R07), đóng bảng trượt. Dòng mới nền xanh, số ở tiêu đề và trên chip tăng; thông báo ngắn nêu từ nay DH08 tự khớp mẫu khi đặt loại dịch vụ đó, kèm liên kết Mở mẫu.

   ![W10 · Mẫu mới trong danh sách](wireframes/W10.png)

*Kết quả:* mẫu DV-09 Đang dùng v1; DH08 tự khớp cho Tham quan từ lần soạn tiếp theo.

**L2.2 Sửa mẫu và lưu phiên bản mới.** *Điều kiện:* như L2.1; mẫu bất kỳ trạng thái.

1. **W11 · Bấm dòng DV-01 → bảng trượt.** Bảng trượt mở ở thẻ Nội dung, bản Tiếng Việt. Điều hành sửa nội dung (ví dụ thêm cụm Yêu cầu riêng). Đoạn thay đổi nền xanh lá, thẻ ngôn ngữ có dấu •, chân đếm “1 thay đổi chưa lưu”; nút chính ghi số phiên bản sắp tạo. Xóa mẫu khóa kèm lý do vì mẫu đã dùng.

   ![W11 · Sửa mẫu email đang dùng](wireframes/W11.png)

2. **W11a · Nút Lưu phiên bản v7.** Hệ thống kiểm tra R06, R14, ghi v7 cùng danh sách thay đổi (R11). Bảng trượt ở lại đúng thẻ; tiêu đề lên v7, dòng dưới ghi lần lưu mới; Lưu khóa đến khi có sửa mới; dòng danh sách cập nhật cột Phiên bản. Thông báo ngắn: email soạn từ nay dùng v7, email đã gửi giữ nguyên, kèm liên kết Xem lịch sử.

   ![W11a · Đã lưu phiên bản mới](wireframes/W11a.png)

*Kết quả:* DV-01 v7 là phiên bản hiện hành. Email DH08 đang soạn dở (đã mở bảng trượt) giữ nội dung đã soạn; lần soạn sau dùng v7.

**L2.3 Soạn trước mẫu thay thế cho loại dịch vụ đã có mẫu.** *Điều kiện:* cùng mục đích, loại dịch vụ đã có mẫu Đang dùng.

1. **W12 · Ô Áp dụng cho loại dịch vụ trong bảng trượt tạo mẫu.** Khi Điều hành chọn loại dịch vụ đã có mẫu Đang dùng cùng mục đích, dưới ô hiện thông báo xanh nêu mẫu đang dùng và cho biết mẫu mới sẽ được tạo ở Ngừng dùng; câu ở chân bảng trượt đổi theo. Bấm Tạo mẫu: mẫu được tạo ở Ngừng dùng · v1, DH08 vẫn khớp mẫu cũ. Điều hành sửa, xem trước thoải mái, rồi bật khi muốn thay (L6.3, W28a).

   ![W12 · Tạo mẫu cho loại dịch vụ đã có mẫu đang dùng](wireframes/W12.png)

*Kết quả:* mỗi cặp (mục đích, loại dịch vụ) luôn có tối đa một mẫu Đang dùng; DH08 không bao giờ phải chọn giữa hai mẫu.

**Ngoại lệ**

- **E2.1 · W13.** Lưu khi vi phạm kiểm tra chặn (R06): banner đỏ đếm số lỗi, lỗi ghi cạnh trường; thẻ ngôn ngữ có lỗi có số đỏ; nội dung giữ nguyên. Ví dụ: mã trùng, tiêu đề thiếu {Tour Code}, `{…}` không có trong danh sách trường của loại mẫu, thiếu bản Tiếng Việt, không chọn loại dịch vụ.

  ![W13 · Lỗi khi lưu mẫu email](wireframes/W13.png)

- **E2.2 · W13.** Trường có thể trống nằm ngoài cụm tùy chọn: cảnh báo vàng, không chặn; liên kết Đặt thành cụm tùy chọn bao câu chứa trường đó. Không có lỗi chặn thì mẫu vẫn được lưu.
- **E2.3 · W14.** Người khác đã lưu phiên bản mới sau khi người dùng mở mẫu: không ghi đè, không có nút ghi đè (Q8). Banner nêu người, giờ lưu; bảng so sánh phần nào mỗi bên đã đổi; nút Tải lại nạp v7 (bỏ thay đổi chưa lưu của tôi); bảng so sánh giữ lại để sao chép phần của mình vào v7 rồi lưu thành v8 (R14).

  ![W14 · Mẫu đã được lưu ở phiên khác](wireframes/W14.png)

  > Hình chưa cập nhật: nút còn ghi “Tải v7 (bỏ thay đổi của tôi)”; nay là “Tải lại” (Q8).

- **E2.4 · W15.** Đóng bảng trượt hoặc rời trang khi còn thay đổi chưa lưu: hộp thoại nêu số thay đổi và bản ngôn ngữ bị ảnh hưởng; Tiếp tục sửa hoặc Bỏ thay đổi và đóng.

  ![W15 · Đóng bảng trượt khi chưa lưu](wireframes/W15.png)

- **E2.5.** Loại dịch vụ áp dụng bị tắt ở QT05: thẻ loại dịch vụ hiện gạch ngang kèm “Đã tắt ở QT05”; mẫu vẫn dùng cho hạng mục cũ của loại đó; khi tạo mẫu mới không chọn được loại đã tắt.
- **E2.6.** Không có hồ sơ chưa đóng có hạng mục cùng loại dịch vụ để xem trước: Xem trước dùng dữ liệu minh họa của hệ thống, nhãn “Dữ liệu minh họa”; người dùng vẫn chọn được hồ sơ khác.
- **E2.7.** Gửi thử lỗi (dịch vụ email không sẵn sàng, chưa kết nối hộp thư chung, G2) hoặc vượt giới hạn gửi thử (R13): thông báo đỏ nêu lý do; không thử lại tự động.
- **E2.8.** Bấm Lưu hoặc Tạo mẫu lặp: nút chuyển trạng thái đang lưu và khóa; máy chủ chỉ tạo một phiên bản cho cùng số phiên bản gốc (R14).
- **E2.9.** Sao chép từ mẫu có ngôn ngữ đã tắt ở QT05: bản ngôn ngữ đó không được sao chép; ghi chú dưới ô Bắt đầu từ nêu ngôn ngữ bị bỏ.
- **E2.10.** Nội dung vượt giới hạn (tiêu đề 150 ký tự, thân 20.000 ký tự): bộ đếm dưới khung chuyển đỏ, lỗi chặn lưu (R06).
- **E2.11.** Thêm loại dịch vụ vào mẫu Đang dùng mà loại đó đã có mẫu Đang dùng khác cùng mục đích: lỗi dưới ô Áp dụng cho loại dịch vụ “Khách sạn đang dùng DV-01; bỏ Khách sạn hoặc tạo mẫu mới rồi bật để thay”; chặn lưu (R07).

### 3.3. Mẫu Pax list và Rooming list (CNHT05.03 · HT05.04)

**L3.1 Cấu hình Pax list.** *Điều kiện:* Điều hành có quyền quản lý mẫu Điều hành. Tạo mẫu Pax list mới theo L2.1 bước 1 với Loại mẫu Pax list (Bắt đầu từ sao chép tập cột và email gửi kèm của mẫu nguồn).

1. **W16 · Bấm dòng PL-01 → thẻ Cột theo loại dịch vụ.** Cột trái: ngôn ngữ tài liệu (tiêu đề cột theo ngôn ngữ này), tiêu đề tài liệu có trường tự điền, sắp xếp khách, định dạng ngày, dòng cho biết DH08.4 đang dùng mẫu này. Cột phải: ma trận trường × loại dịch vụ đang dùng ở QT05; tích ô để tài liệu có loại dịch vụ đó nhận cột; kéo ⋮⋮ để đổi thứ tự cột; cột # luôn có; cột Loại khác chỉ đọc, là tập mặc định (R08). Ô thông tin nhắc số hộ chiếu là dữ liệu cá nhân.

   ![W16 · Pax list: cột theo loại dịch vụ](wireframes/W16.png)

2. **W17 · Thẻ Xem trước.** Hệ thống gợi ý hồ sơ chưa đóng có khởi hành gần nhất; người dùng chọn “Xem như NCC loại” để thấy đúng tập cột NCC loại đó nhận. Tài liệu dựng từ khách đã lưu ở DH08.4, che số hộ chiếu (R13). Tải Excel thử, Tải PDF thử tạo tệp cùng nội dung xem trước, không ghi vào hồ sơ.

   ![W17 · Xem trước Pax list](wireframes/W17.png)

3. **W18 · Thẻ Email gửi kèm.** Tiêu đề và nội dung email DH08 soạn sẵn khi gửi Pax list cho NCC, theo ngôn ngữ (Tiếng Việt bắt buộc); trường tự điền như email đặt dịch vụ, không có trường dịch vụ và giá. Tệp đính kèm do hệ thống sinh theo tập cột của NCC, tên tệp cố định. Lưu như L2.2 bước 2.

   ![W18 · Email gửi kèm Pax list](wireframes/W18.png)

*Kết quả:* DH08.4 gửi mỗi NCC một Pax list có tập cột là hợp các cột của mọi loại dịch vụ có trong email hoặc tài liệu đó (Q17; RSD DH08 L4.6).

**L3.2 Cấu hình Rooming list.**

1. **W19 · Bấm dòng RL-01 → thẻ Xem trước.** Cột trái: ngôn ngữ tài liệu, tiêu đề tài liệu, danh sách cột có tích chọn và kéo đổi thứ tự; ba cột Phòng, Hạng phòng, Họ tên bắt buộc (ô khóa). Xem trước theo một đợt lưu trú thật của DH08.4, mỗi phòng một nhóm dòng. Thẻ Email gửi kèm như W18. Lưu như L2.2 bước 2.

   ![W19 · Rooming list: cột và xem trước](wireframes/W19.png)

*Kết quả:* DH08.4 dựng Rooming list của từng khách sạn, du thuyền theo mẫu đã chọn.

**Ngoại lệ**

- **E3.1 · W20.** Một loại dịch vụ có cột riêng mà không có Họ tên: banner đỏ, cột của loại đó tô đỏ, lỗi nêu hai cách sửa (tích lại Họ tên, hoặc bỏ hết ô để dùng tập mặc định); chặn lưu, giữ thay đổi.

  ![W20 · Lỗi tập cột Pax list](wireframes/W20.png)

- **E3.2 · W20.** Loại dịch vụ mới thêm ở QT05 chưa có cột riêng: cảnh báo vàng nêu loại đó dùng tập mặc định; liên kết Thêm cột cho … cuộn tới cột của loại đó trong ma trận.
- **E3.3.** Hồ sơ xem trước chưa có khách: tài liệu chỉ có tiêu đề, dòng “Hồ sơ chưa có khách”; Rooming list của đợt còn khách chưa xếp: xem trước vẫn dựng phần đã xếp và liệt kê khách chưa xếp (ở DH08 Rooming list chỉ tạo được khi đã xếp đủ, RSD DH08 E4.5).
- **E3.4.** Tải thử lỗi: thông báo đỏ, nút Thử lại; không ghi gì.
- **E3.5.** Tắt mẫu Pax list hoặc Rooming list đang dùng: không tắt trực tiếp được vì DH08.4 luôn cần một mẫu (công tắc khóa kèm lý do “Mẫu Pax list đang dùng · bật mẫu khác để thay”). Muốn thay thì bật mẫu khác cùng loại: hộp thoại như W28a, mẫu cũ tự ngừng dùng. Mẫu Pax list, Rooming list mới tạo khi đã có mẫu Đang dùng thì ở Ngừng dùng (như L2.3).
- **E3.6.** Bỏ cột Số hộ chiếu của loại dịch vụ đang có Pax list gửi dở ở DH08: tài liệu đã gửi giữ nguyên; lần tạo sau dùng tập cột mới.

### 3.4. Mẫu Survey (Bỏ theo C3)

Nhóm QT04.1 đã bỏ khỏi phạm vi (C3). Luồng L4.1–L4.3, ngoại lệ E4.1–E4.6 và hình W21–W24 không còn.

### 3.5. Mẫu email chăm sóc (Bỏ theo C3)

Như 3.4: luồng L5.1, ngoại lệ E5.1–E5.4 và hình W25 không còn.

### 3.6. Ngừng dùng, dùng lại và xóa mẫu

**L6.1 (Bỏ theo C3).** Ngừng dùng mẫu QT04.1 không còn; hình W26, W27 không còn nhúng.

**L6.2 Ngừng dùng mẫu email đặt dịch vụ.** *Điều kiện:* người có quyền quản lý nhóm Điều hành. Mẫu Pax list, Rooming list đang dùng không tắt trực tiếp (E3.5).

1. **W28 · Tắt công tắc → hộp thoại.** Hộp thoại nêu từng loại dịch vụ mẫu đang được khớp và mẫu DH08 sẽ khớp thay theo R07 (mẫu dự phòng Mọi loại dịch vụ cùng mục đích, hoặc “Không có mẫu”: DH08 báo thiếu mẫu, RSD DH08 E3.1). Người dùng không phải chọn gì. Bấm Ngừng dùng: hệ thống lưu (R12), dòng mờ tại chỗ kèm chú thích “không còn khớp bộ lọc Đang dùng”, số trên chip giảm; thông báo ngắn có Hoàn tác 10 giây.

   ![W28 · Ngừng dùng mẫu đang được DH08 tự khớp](wireframes/W28.png)

*Kết quả:* mẫu Ngừng dùng; loại dịch vụ chuyển sang mẫu dự phòng.

**L6.3 Bật mẫu.** *Điều kiện:* mẫu đang Ngừng dùng.

1. **W03 · Bật công tắc khi phạm vi khớp của mẫu chưa có mẫu Đang dùng.** Lưu ngay, không hộp thoại; dòng hết mờ, số chip tăng; thông báo ngắn có Hoàn tác.
2. **W28a · Bật công tắc khi phạm vi khớp đã có mẫu Đang dùng → hộp thoại.** Bảng nêu từng phạm vi (mục đích · loại dịch vụ, hoặc Pax list, Rooming list), mẫu đang dùng và mẫu sau khi bật; câu dưới nêu mẫu cũ sẽ chuyển Ngừng dùng. Bấm Bật …, ngừng dùng …: một giao dịch (R07, R14); danh sách cập nhật cả hai dòng, thông báo ngắn nêu hai mẫu.

   ![W28a · Bật mẫu thay mẫu đang dùng](wireframes/W28a.png)

*Kết quả:* DH08 khớp mẫu vừa bật từ lần soạn sau; mẫu cũ Ngừng dùng, bật lại được để quay về.

**L6.4 Xóa mẫu chưa dùng.** *Điều kiện:* Đã dùng bằng 0 (R12).

1. **W29 · Nút Xóa mẫu ở chân bảng trượt → hộp thoại.** Hộp thoại nêu mẫu chưa dùng, xóa hẳn mọi phiên bản, không hoàn tác. Bấm Xóa mẫu: hệ thống kiểm tra lại điều kiện, xóa, đóng bảng trượt; dòng biến mất; thông báo ngắn “Đã xóa …”; nhật ký QT03 giữ mã, tên, người xóa.

   ![W29 · Xóa mẫu chưa dùng](wireframes/W29.png)

*Kết quả:* mẫu không còn ở danh sách và các ô chọn mẫu.

**Ngoại lệ**

- **E6.1.** Tắt mẫu dự phòng Mọi loại dịch vụ của một mục đích: hộp thoại W28 có cảnh báo đỏ liệt kê các loại dịch vụ chưa có mẫu riêng (DH08 sẽ báo thiếu mẫu khi đặt các loại đó, và khi soạn email gộp nhiều loại dịch vụ của cùng NCC, R07); vẫn cho ngừng dùng.
- **E6.2.** Lưu công tắc lỗi: công tắc trở về giá trị cũ, thông báo đỏ kèm Thử lại.
- **E6.3.** Bấm Hoàn tác sau khi đã có mẫu khác được bật cùng phạm vi: Hoàn tác bị từ chối, thông báo nêu mẫu đang dùng phạm vi đó.
- **E6.4.** Mẫu vừa được dùng ở phiên khác (email gửi, tài liệu tạo) khi bấm Xóa: máy chủ từ chối, hộp thoại đóng, thông báo “Mẫu vừa được dùng, không xóa được; hãy ngừng dùng”; nút Xóa chuyển khóa kèm lý do.
- **E6.5.** Xóa mẫu Pax list, Rooming list đang dùng: nút Xóa khóa kèm lý do như E3.5 (thực tế mẫu đang dùng đã có tài liệu nên Đã dùng lớn hơn 0).
- **E6.6a.** Bật mẫu mà mẫu đang dùng cùng phạm vi đã bị người khác tắt hoặc thay: máy chủ kiểm tra lại lúc lưu; hộp thoại W28a không còn đúng thì đóng, thông báo, danh sách tải lại.
- **E6.7.** Bật mẫu trùng **một phần** phạm vi với mẫu đang dùng (ví dụ mẫu đang dùng áp dụng Khách sạn, Du thuyền; mẫu được bật chỉ Khách sạn): không bật được; công tắc trở về, thông báo nêu loại dịch vụ trùng và hai cách sửa: thêm Du thuyền vào mẫu được bật, hoặc bỏ Khách sạn khỏi mẫu đang dùng.
- **E6.6.** Hai người cùng tắt một mẫu: lần thứ hai không đổi gì, thông báo “Mẫu đã Ngừng dùng”.

### 3.7. Lịch sử phiên bản và khôi phục

**L7.1 Xem lịch sử và khôi phục nội dung cũ.** *Điều kiện:* người xem được nhóm mẫu; khôi phục cần quyền quản lý.

1. **W30 · Thẻ Lịch sử phiên bản.** Danh sách phiên bản mới nhất ở trên: số, tóm tắt thay đổi (R11), thời điểm, người lưu; phiên bản hiện hành có nhãn. Bấm một phiên bản: bên phải hiện thay đổi so với phiên bản trước (tô xanh thêm, đỏ bỏ), nội dung đầy đủ của phiên bản đó và số lần đã dùng của từng phiên bản. Nút Khôi phục nội dung vN chỉ hiện với người có quyền quản lý và phiên bản khác hiện hành.

   ![W30 · Lịch sử phiên bản](wireframes/W30.png)

2. **W31 · Nút Khôi phục nội dung v4.** Hệ thống nạp nội dung v4 (mọi thẻ, mọi ngôn ngữ, trừ Đang dùng) vào khung soạn như thay đổi chưa lưu; banner xanh nêu cách áp dụng; ghi chú nếu khôi phục làm bỏ một ngôn ngữ. Bấm Lưu phiên bản v7 như L2.2 bước 2; bấm Hủy giữ nguyên v6.

   ![W31 · Khôi phục nội dung phiên bản cũ](wireframes/W31.png)

*Kết quả:* phiên bản mới v7 có nội dung của v4; v5, v6 vẫn trong lịch sử.

**Ngoại lệ**

- **E7.1.** Nội dung phiên bản cũ dùng trường đã bị bỏ khỏi danh sách trường, hoặc loại dịch vụ, ngôn ngữ đã tắt ở QT05: khi lưu, lỗi E2.1 hoặc ghi chú E2.5, E2.9 áp dụng như với nội dung mới.
- **E7.2.** Phiên bản hiện hành đổi trong lúc đang xem lịch sử rồi khôi phục: lưu bị từ chối như E2.3.
- **E7.3.** Lịch sử lỗi tải: dòng lỗi trong thẻ kèm Thử lại; thẻ Nội dung vẫn dùng được.

### 3.8. Hệ thống dùng mẫu ở màn khác (HT05.05)

Phần này không có giao diện ở QT04; giao diện thuộc RSD của màn dùng mẫu.

- **DH08.3 soạn email đặt, đặt lại, đặt phần thiếu, điều chỉnh, hủy** (RSD DH08 tab Đặt dịch vụ): hệ thống gộp dịch vụ thành một email cho mỗi (NCC, loại việc) (RSD DH08 R04), rồi tự khớp mẫu và bản ngôn ngữ theo R07 cho từng email: email chỉ có một loại dịch vụ dùng mẫu khớp của loại đó, email có nhiều loại dịch vụ dùng mẫu dự phòng Mọi loại dịch vụ; trộn trường theo R04, R05; người dùng không chọn mẫu, chỉ sửa nội dung đã soạn trước khi gửi. Không tách email theo mẫu hay loại dịch vụ. Email đã gửi ghi ID mẫu và số phiên bản (R11).
- **DH08.4 xem, tải, gửi Pax list và Rooming list** (RSD DH08 L4.6): hệ thống dùng mẫu Đang dùng duy nhất của loại tài liệu (R07), không có ô chọn mẫu; tập cột theo R08; email gửi kèm theo thẻ Email gửi kèm của mẫu. Tài liệu đã tải, đã gửi ghi ID mẫu và số phiên bản.

**Ngoại lệ**

- **E8.1.** Không có mẫu cho loại dịch vụ và mục đích (không có mẫu riêng, không có mẫu Mọi loại dịch vụ): DH08 E3.1, có nút Soạn không theo mẫu.
- **E8.2.** Mẫu bị ngừng dùng hoặc bị thay sau khi người dùng DH08 đã mở bảng trượt soạn: nội dung đã soạn giữ nguyên, gửi được; lần soạn sau dùng mẫu được khớp mới.
- **E8.3.** Dữ liệu của trường bắt buộc không có (ví dụ NCC chưa có tên đầu mối khi {Đầu mối NCC} ngoài cụm tùy chọn): DH08 hiện chỗ trống tô đỏ trong email soạn sẵn để Điều hành sửa trước khi gửi (R05).
- **E8.4.** NCC có ngôn ngữ giao dịch (RSD DH03 v1.4) mà mẫu khớp không có bản ngôn ngữ đó: dùng bản Tiếng Việt (R03).
- **E8.5.** Email gộp có nhiều loại dịch vụ mà mục đích đó không có mẫu dự phòng Mọi loại dịch vụ Đang dùng: vẫn một email, DH08 báo thiếu mẫu và cho Soạn không theo mẫu (RSD DH08 E3.1), không lấy mẫu riêng của một loại dịch vụ trong email (chấp nhận mặc định, Q3).

---

## 4. Quy tắc triển khai chi tiết

### R01. Quyền (quyết định 12/11/2026)

- Hai thao tác cấp theo vai trò ở QT02: **Xem QT04.2** và **Quản lý mẫu Điều hành**. Mặc định Điều hành có cả hai; Kinh doanh, Quản trị hệ thống chỉ có Xem; Kế toán không có, không thấy menu (mục 1.4, Q1, Q25). Quản trị hệ thống chỉ sửa khi được cấp Quản lý mẫu Điều hành. Quyền Quản lý mẫu Kinh doanh bỏ cùng QT04.1 (C3).
- Mọi người có Quản lý mẫu Điều hành sửa được mọi mẫu của nhóm; không có người phụ trách mẫu, không có bước duyệt.

### R02. Loại mẫu, nhóm và mã mẫu

| Nhóm | Loại mẫu | Thuộc tính riêng | Dùng ở |
|---|---|---|---|
| QT04.2 Điều hành | Email đặt dịch vụ | Mục đích: Đặt dịch vụ (đặt, đặt lại, đặt phần thiếu), Điều chỉnh (Cần điều chỉnh), Hủy (Cần hủy, hủy theo Booking); loại dịch vụ áp dụng hoặc Mọi loại dịch vụ | DH08.3 |
| QT04.2 Điều hành | Pax list | Ngôn ngữ tài liệu, tiêu đề, sắp xếp, định dạng ngày, tập cột theo loại dịch vụ, email gửi kèm | DH08.4 |
| QT04.2 Điều hành | Rooming list | Ngôn ngữ tài liệu, tiêu đề, cột, email gửi kèm | DH08.4 |

- **Loại mẫu, mục đích** chọn khi tạo, không đổi sau khi tạo (muốn đổi thì tạo mẫu mới bằng Bắt đầu từ).
- **Mã mẫu:** bắt buộc; 2–10 ký tự gồm chữ in hoa, số, gạch ngang; duy nhất trong toàn QT04; sửa được. Gợi ý khi tạo: tiền tố của mẫu nguồn (phần trước số cuối) và số tiếp theo chưa dùng; không có mẫu nguồn thì tiền tố theo loại: DV (Email đặt dịch vụ), PL (Pax list), RL (Rooming list). Nơi dùng tham chiếu ID mẫu, không tham chiếu mã.
- **Tên mẫu:** bắt buộc, 3–100 ký tự, duy nhất trong cùng loại mẫu.

### R03. Ngôn ngữ của mẫu

- Danh sách ngôn ngữ lấy từ danh mục Ngôn ngữ ở QT05.
- **Bắt buộc:** Tiếng Việt cho email đặt dịch vụ và email gửi kèm Pax list, Rooming list. Bản bắt buộc không bỏ được.
- Mỗi ngôn ngữ một bản đầy đủ: tiêu đề, nội dung. Cấu trúc (tập cột) dùng chung.
- Pax list, Rooming list: **ngôn ngữ tài liệu** là một ngôn ngữ (English hoặc Tiếng Việt) quyết định tiêu đề cột và định dạng tiêu đề; muốn hai ngôn ngữ thì hai mẫu.
- Chọn bản ngôn ngữ khi dùng: DH08 tự khớp theo trường Ngôn ngữ giao dịch của NCC (RSD DH03 v1.4; mặc định Tiếng Việt), mẫu không có bản đó hoặc NCC chưa khai thì Tiếng Việt (R07).

### R04. Trường tự điền

Chỉ chèn được trường thuộc loại mẫu và mục đích đang sửa. Cột “Có thể trống” quyết định cảnh báo ở R05.

| Trường | Mã | Loại mẫu, mục đích | Nội dung khi trộn | Có thể trống |
|---|---|---|---|---|
| {Tour Code} | `tour_code` | Email đặt dịch vụ, email gửi kèm, tài liệu | Tour Code của hồ sơ | Không |
| {Tên đoàn} | `ten_doan` | Email đặt dịch vụ, email gửi kèm, tài liệu | Tên khách của Booking (doanh nghiệp: tên doanh nghiệp) | Không |
| {Số khách} | `so_khach` | Email đặt dịch vụ, email gửi kèm, tài liệu | Số khách của hồ sơ | Không |
| {Ngày khởi hành}, {Ngày kết thúc} | `ngay_khoi_hanh`, `ngay_ket_thuc` | Email đặt dịch vụ, email gửi kèm, tài liệu | dd/mm/yyyy | Không |
| {Ngôn ngữ phục vụ} | `ngon_ngu_phuc_vu` | Email đặt dịch vụ | Ngôn ngữ phục vụ của đoàn | Không |
| {Tên NCC} | `ten_ncc` | Email đặt dịch vụ, email gửi kèm | Tên NCC (DH03) | Không |
| {Đầu mối NCC} | `dau_moi_ncc` | Email đặt dịch vụ, email gửi kèm | Tên đầu mối nhận đặt dịch vụ (DH03) | Có |
| {Danh sách dịch vụ} | `ds_dich_vu` | Email đặt dịch vụ | Mỗi hạng mục trong email một dòng: số thứ tự, ngày sử dụng, tên dịch vụ, số lượng và đơn vị, yêu cầu dịch vụ; hạng mục có dịch vụ đi kèm thì ngay dưới là mỗi đi kèm một dòng thụt lề “kèm: tên đi kèm, số lượng và đơn vị, ngày dùng” (bổ sung 12/11/2026; RSD DH08 R21); nhãn theo ngôn ngữ của bản (English: “with: …”) | Không |
| {Ngày sử dụng} | `ngay_su_dung` | Email đặt dịch vụ | Ngày, hoặc ngày đầu – ngày cuối của các hạng mục trong email | Không |
| {Yêu cầu riêng} | `yeu_cau_rieng` | Email đặt dịch vụ, email gửi kèm Pax list | Câu tổng hợp yêu cầu riêng của khách: ô Ăn uống cho email nhà hàng, ô Phòng cho email lưu trú (nhập tự do, RSD DH08 R06) | Có |
| {Giá tham chiếu} | `gia_tham_chieu` | Email đặt dịch vụ · Đặt dịch vụ | Giá tham chiếu theo hợp đồng áp dụng, loại tiền gốc | Có |
| {Mã xác nhận} | `ma_xac_nhan` | Email đặt dịch vụ · Điều chỉnh, Hủy | Mã xác nhận của lần đặt được điều chỉnh, hủy | Có |
| {Bảng thay đổi} | `bang_thay_doi` | Email đặt dịch vụ · Điều chỉnh | Bảng: mục, bản cũ, bản mới (RSD DH08) | Không |
| {Lý do hủy} | `ly_do_huy` | Email đặt dịch vụ · Hủy | Lý do từ nguồn thay đổi hoặc người dùng nhập | Có |
| {Tên khách sạn}, {Đợt lưu trú} | `ten_khach_san`, `dot_luu_tru` | Rooming list (tiêu đề tài liệu, email gửi kèm) | Tên NCC lưu trú; ngày nhận – ngày trả | Không |
| {Người gửi}, {Email người gửi} | `nguoi_gui`, `email_nguoi_gui` | Email đặt dịch vụ, email gửi kèm | Người bấm Gửi ở DH08 | Không |
| {Điện thoại người gửi} | `dien_thoai_nguoi_gui` | Email đặt dịch vụ, email gửi kèm | Điện thoại công việc của người gửi (DH06) | Có |

- Trường thêm mới chỉ do RSD của màn dùng mẫu đề xuất và bổ sung vào bảng này.
- Trong khung soạn, trường là một khối không tách được; xóa bằng một lần Backspace. Gõ tay `{…}` không thành trường và bị kiểm tra ở R06.

### R05. Cụm tùy chọn và trường trống

- Cụm tùy chọn là một đoạn văn bản (trong một đoạn văn) chứa ít nhất một trường. Khi trộn, nếu **bất kỳ** trường nào trong cụm không có dữ liệu thì bỏ cả cụm, kể cả dấu cách và xuống dòng thừa ngay sau cụm.
- Trường có thể trống nằm ngoài cụm và không có dữ liệu: DH08 để chỗ trống tô đỏ trong email soạn sẵn, Điều hành sửa trước khi gửi (E8.3). Không bao giờ gửi chuỗi `{…}`.
- {Yêu cầu riêng}: khi mẫu email đặt dịch vụ không có trường này, DH08 chèn câu tổng hợp trước lời kết (RSD DH08 R06).

### R06. Kiểm tra khi lưu

| Kiểm tra | Mức |
|---|---|
| Mã, tên mẫu thiếu, sai định dạng, trùng (R02) | Chặn |
| Email đặt dịch vụ không có loại dịch vụ áp dụng | Chặn |
| Thiếu bản ngôn ngữ bắt buộc (R03); bản đã thêm thiếu tiêu đề, nội dung | Chặn |
| `{…}` không có trong danh sách trường của loại mẫu, mục đích | Chặn |
| Tiêu đề email đặt dịch vụ, email gửi kèm không có {Tour Code} (RSD DH08 5.2) | Chặn |
| Email đặt dịch vụ không có {Danh sách dịch vụ}; mục đích Điều chỉnh không có {Bảng thay đổi} | Chặn |
| Pax list: loại dịch vụ có cột riêng mà thiếu Họ tên; Rooming list thiếu ba cột bắt buộc | Chặn |
| Tiêu đề quá 150 ký tự; nội dung quá 20.000 ký tự; liên kết không phải https hợp lệ | Chặn |
| Trường có thể trống nằm ngoài cụm tùy chọn | Cảnh báo, cho lưu |

Kiểm tra chạy ở trình duyệt khi rời ô và ở máy chủ khi lưu. Lỗi chặn đếm trên banner và thẻ.

### R07. Hệ thống tự khớp mẫu (quyết định 12/11/2026)

DH08 không cho người dùng chọn mẫu; hệ thống tự khớp. Vì vậy QT04 bảo đảm mỗi phạm vi khớp chỉ có một mẫu Đang dùng.

- **Phạm vi khớp:**
  - email đặt dịch vụ: cặp (mục đích, loại dịch vụ) cho mỗi loại dịch vụ mẫu áp dụng; mẫu áp dụng Mọi loại dịch vụ có phạm vi (mục đích, Mọi loại) và là **mẫu dự phòng** của mục đích đó;
  - Pax list: cả loại tài liệu; Rooming list: cả loại tài liệu.
- **Không trùng:** hai mẫu Đang dùng không có chung phạm vi khớp. Máy chủ kiểm tra khi tạo, khi lưu đổi loại dịch vụ áp dụng, khi bật.
  - Tạo mẫu trùng phạm vi: mẫu được tạo ở Ngừng dùng (L2.3, W12).
  - Sửa loại dịch vụ áp dụng của mẫu Đang dùng làm trùng với mẫu Đang dùng khác: chặn lưu, lỗi nêu mẫu và loại trùng.
  - Bật mẫu trùng phạm vi: nếu mọi phạm vi của mẫu đang dùng bị trùng đều nằm trong phạm vi của mẫu được bật thì xác nhận một lần (W28a), mẫu cũ chuyển Ngừng dùng trong cùng giao dịch; nếu mẫu cũ còn phạm vi ngoài mẫu được bật thì chặn (E6.7).
- **Một email cho mỗi (NCC, loại việc) (người dùng chốt 12/11/2026, rà soát lần hai).** DH08 gộp dịch vụ thành email trước, rồi mới khớp mẫu cho từng email; mẫu không bao giờ làm tách email (RSD DH08 R04). Mục đích M của email là loại việc: Đặt dịch vụ (đặt, đặt lại, đặt phần thiếu), Điều chỉnh, Hủy.
- **Thứ tự DH08 khớp** cho một email mục đích M:
  1. mọi dịch vụ trong email cùng một loại dịch vụ L: mẫu Đang dùng có phạm vi (M, L); không có thì mẫu dự phòng Đang dùng của M;
  2. email có dịch vụ của từ hai loại dịch vụ trở lên (gộp nhiều loại của cùng NCC): mẫu dự phòng Mọi loại dịch vụ Đang dùng của M, kể cả khi từng loại có mẫu riêng;
  3. không có mẫu theo bước 1 hoặc 2: RSD DH08 E3.1, vẫn một email (E8.5).
- **Ngôn ngữ khớp:** theo trường Ngôn ngữ giao dịch của NCC (RSD DH03 v1.4) nếu mẫu có bản đó; không có, hoặc NCC chưa khai, thì Tiếng Việt (R03). Mỗi email gửi một NCC nên dùng một bản ngôn ngữ.
- **Pax list, Rooming list:** DH08 không cho chọn mẫu; DH08.4 dùng mẫu Đang dùng duy nhất của loại tài liệu (mỗi loại một mẫu Đang dùng). Mẫu đó không tắt trực tiếp được; muốn thay thì bật mẫu khác (W28a, E3.5).
- Bật, tắt không tạo phiên bản (R11), chỉ ghi lịch sử sự kiện và nhật ký.

### R08. Tập cột Pax list và Rooming list

- **Pax list:** ma trận trường × loại dịch vụ đang dùng ở QT05. Trường: Họ tên, Giới tính, Ngày sinh, Quốc tịch, Số hộ chiếu, Ngày hết hạn hộ chiếu, Visa, Chuyến bay đến/về, Yêu cầu ăn uống, Yêu cầu phòng, Phòng. Cột # luôn có.
- Loại dịch vụ có ít nhất một ô tích là **có tập cột riêng** và phải có Họ tên. Loại không tích ô nào dùng **tập mặc định**: Họ tên, Giới tính, Quốc tịch (RSD DH08 mục 4), hiện ở cột Loại khác, không sửa.
- Pax list gửi NCC có tập cột là hợp các cột của mọi loại dịch vụ có trong email hoặc tài liệu đó (Q17); thứ tự cột theo thứ tự trường trong mẫu.
- Tiêu đề cột theo ngôn ngữ tài liệu, do hệ thống đặt. Số hộ chiếu in đầy đủ trong tệp gửi NCC (RSD DH08 1.4).
- Sắp xếp khách: Theo thứ tự ở DH08.4 (mặc định), Theo họ tên, Theo phòng. Định dạng ngày: dd/mm/yyyy (mặc định), yyyy-mm-dd, dd MMM yyyy.
- **Rooming list:** cột chọn từ Phòng, Hạng phòng, Họ tên, Giới tính, Quốc tịch, Ngày nhận phòng, Ngày trả phòng, Yêu cầu phòng, Số hộ chiếu, Ghi chú; ba cột đầu bắt buộc; mỗi phòng một nhóm dòng; dựng cho từng đợt lưu trú khách sạn hoặc du thuyền. Cột Ghi chú lấy ghi chú phòng ở DH08.4 (ví dụ “Tự xếp phòng đơn”, “Giường phụ”; bổ sung 12/11/2026, RSD DH08 L4.5); tiêu đề và chữ “Giường phụ” theo ngôn ngữ tài liệu (English: “Extra bed”). Mẫu không chọn cột Ghi chú thì tài liệu không có ghi chú phòng; muốn NCC thấy giường phụ thì Điều hành thêm cột Ghi chú vào mẫu.
- Tài liệu xuất Excel và PDF (PDF dựng qua hàng đợi, Q5, Q21); đầu tài liệu có logo, tên công ty (tệp cấu hình hoặc dữ liệu khởi tạo, C2), tiêu đề tài liệu, khoảng ngày, số khách.

### R09. (Bỏ theo C3)

Câu hỏi Survey thuộc QT04.1, đã bỏ.

### R10. Khối cố định

- Khối cố định của email mời Survey và email chăm sóc bỏ theo C3.
- Email đặt dịch vụ, email gửi kèm: không có khối cố định; chữ ký là nội dung của mẫu.

### R11. Phiên bản và bản chụp ở nơi dùng (quyết định 12/11/2026)

- Mỗi lần lưu có thay đổi nội dung tạo phiên bản mới, đánh số tăng từ v1. Phiên bản cũ không sửa, không xóa (trừ khi xóa cả mẫu chưa dùng).
- Nội dung phiên bản gồm: mã, tên, loại dịch vụ áp dụng, mọi bản ngôn ngữ, tập cột, thiết lập tài liệu, ghi chú. Đang dùng **không** thuộc phiên bản; đổi chúng ghi sự kiện trong lịch sử (không đánh số) và nhật ký QT03.
- Hệ thống so với bản trước để ghi danh sách thay đổi: đổi mã, tên, loại dịch vụ áp dụng; thêm, bỏ ngôn ngữ; sửa tiêu đề, nội dung theo ngôn ngữ; đổi tập cột; đổi thiết lập tài liệu.
- **Lưu là áp dụng ngay**: không nháp, không duyệt. Lần soạn email, xuất tài liệu sau thời điểm lưu dùng phiên bản mới.
- **Nơi dùng giữ bản chụp**: email đã gửi lưu nội dung đã gửi cùng ID mẫu và số phiên bản (RSD DH08 5.1); tài liệu đã tải, gửi ghi ID mẫu và số phiên bản. Sửa mẫu không đổi các bản này. Email đang soạn dở ở DH08 giữ nội dung đã soạn.
- Khôi phục (L7.1) là nạp nội dung cũ vào khung soạn; chỉ thành phiên bản khi bấm Lưu.

### R12. Đang dùng, ngừng dùng và xóa

- Ngừng dùng: DH08 không khớp mẫu; vẫn hiện trong danh sách với Trạng thái Ngừng dùng hoặc Tất cả; bảng trượt sửa được.
- Tắt cần xác nhận (W28); bật lưu ngay. Hoàn tác 10 giây chỉ đảo đúng thao tác vừa làm (E6.3).
- **Đã dùng** = email đã gửi (kết quả Đã gửi hoặc Đang gửi) có ID mẫu, cộng tài liệu đã tải hoặc gửi có ID mẫu.
- **Xóa** chỉ khi Đã dùng bằng 0; máy chủ kiểm tra lại lúc xóa (E6.4). Xóa là xóa hẳn mẫu và mọi phiên bản; nhật ký QT03 giữ mã, tên, người xóa. Mẫu đã dùng chỉ ngừng dùng (nguyên tắc dự án).

### R13. Xem trước, gửi thử, tải thử

- Xem trước dùng nội dung đang soạn (kể cả chưa lưu) và dữ liệu thật, không ghi gì. Dữ liệu gợi ý:
  - email đặt dịch vụ: hồ sơ chưa đóng có hạng mục cùng loại dịch vụ, khởi hành gần hôm nay nhất; mục đích Điều chỉnh, Hủy: hạng mục đã có lần đặt;
  - Pax list, Rooming list: hồ sơ chưa đóng có khởi hành gần nhất có khách (Rooming list: có đợt lưu trú đã phân phòng);
  - Không có dữ liệu phù hợp: dữ liệu minh họa của hệ thống, nhãn “Dữ liệu minh họa”.
- Xem trước và tải thử che số hộ chiếu (4 ký tự đầu, 2 ký tự cuối).
- Gửi thử: chỉ tới email tài khoản của người bấm; tiêu đề có tiền tố “[Gửi thử]”; người gửi là hộp thư chung (G2); đi qua hàng đợi gửi email (Q5); không tạo lần gửi, không ghi vào hồ sơ; tối đa 10 lần mỗi giờ mỗi người.
- Tải PDF thử dựng PDF qua hàng đợi (Q5, Q21).
- Người chỉ xem không có thẻ Xem trước.

### R14. Đồng thời và chống lặp

- Lưu gửi kèm số phiên bản đang sửa; máy chủ từ chối nếu phiên bản hiện hành đã khác (E2.3). Không ghi đè; chỉ có nút Tải lại (Q8).
- Bấm lặp Lưu, Tạo mẫu, Xóa, công tắc chỉ thực hiện một lần (khóa nút khi đang gửi; máy chủ kiểm tra khóa theo ID mẫu và số phiên bản).
- Bật một mẫu và tự ngừng dùng mẫu trùng phạm vi là một giao dịch; máy chủ kiểm tra lại phạm vi lúc lưu (E6.6a).
- Máy chủ kiểm tra quyền ở mọi thao tác ghi (E1.5).

### R15. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Hành vi khi thiếu |
|---|---|---|---|
| Danh mục Loại dịch vụ | QT05 | Áp dụng cho, ma trận Pax list | Loại đã tắt: E2.5; loại mới: E3.2 |
| Danh mục Ngôn ngữ | QT05 | Thẻ ngôn ngữ | Ngôn ngữ đã tắt: không thêm mới được, bản đã có giữ nguyên |
| Hộp thư chung đặt dịch vụ | Tệp cấu hình; kết nối Gmail một lần bằng lệnh CLI (C2, G2) | Xem trước, gửi thử | Gửi thử báo lỗi (E2.7) |
| Logo, tên công ty | Tệp cấu hình hoặc dữ liệu khởi tạo (C2) | Tài liệu Pax list, Rooming list | Chỉ in tên công ty |
| Hồ sơ Tour, khách đoàn, hạng mục, phân phòng | DH08 | Xem trước QT04.2 | Dữ liệu minh họa (E2.6) |
| Email đã gửi, tài liệu đã tạo | DH08 | Đã dùng | — |
| Quyền Xem QT04.2, Quản lý mẫu Điều hành | QT02 | R01 | Theo mặc định ở mục 1.4 |
| Hàng đợi gửi email qua Gmail API | Hệ thống (G1–G3, Q5) | Gửi thử | E2.7 |

### R16. Lịch sử và nhật ký

- Lịch sử của mẫu: các phiên bản (R11) và sự kiện không đánh số: bật, tắt (kèm mẫu thay thế hoặc bị thay, nếu có), gửi thử.
- Nhật ký QT03: mọi thao tác ghi ở QT04 (tạo, lưu, bật tắt kèm mẫu bị thay, khôi phục, xóa, gửi thử với email nhận, tải thử) kèm giá trị trước và sau.

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa và dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|
| Mẫu | ID; mã; tên; nhóm; loại mẫu; mục đích; loại dịch vụ áp dụng (danh sách ID loại hoặc Mọi loại); Đang dùng; số phiên bản hiện hành; người tạo; thời điểm tạo | QT04 tạo, sửa |
| Phiên bản mẫu | ID mẫu; số phiên bản; nội dung theo ngôn ngữ (mã ngôn ngữ, tiêu đề, nội dung có trường và cụm tùy chọn); tập cột; thiết lập tài liệu (ngôn ngữ, tiêu đề, sắp xếp, định dạng ngày); email gửi kèm; ghi chú; danh sách thay đổi; người lưu; thời điểm | Mỗi lần lưu (R11); không sửa |
| Sự kiện mẫu | ID mẫu; loại sự kiện; giá trị trước, sau; mẫu liên quan; người; thời điểm | R16 |
| Tham chiếu dùng mẫu | ID mẫu; số phiên bản; nơi dùng (email đã gửi, tài liệu) | Ghi ở DH08; QT04 đọc để đếm Đã dùng |
| Thiết lập lọc | Người dùng; bộ lọc dùng lần cuối, nhớ cả sau khi đăng xuất (U3) | 2.3 |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| Tạo mẫu | Bắt đầu từ | Không | Mẫu dự phòng Mọi loại dịch vụ (email đặt dịch vụ); mẫu đầu tiên cùng loại (loại khác) | Mẫu cùng loại mẫu |
| Mọi mẫu | Mã mẫu | Có | Gợi ý theo R02 | R02 |
| Mọi mẫu | Tên mẫu | Có | Sao chép từ mẫu nguồn kèm “(bản sao)” | R02 |
| Email đặt dịch vụ | Mục đích | Có, khi tạo | Theo mẫu nguồn | Không đổi sau khi tạo |
| Email đặt dịch vụ | Áp dụng cho loại dịch vụ | Có | Theo mẫu nguồn | Loại đang dùng ở QT05, hoặc Mọi loại dịch vụ (không kèm loại khác) |
| Email | Tiêu đề theo ngôn ngữ | Có | Sao chép | ≤ 150 ký tự; R06 |
| Email | Nội dung theo ngôn ngữ | Có | Sao chép | ≤ 20.000 ký tự; R04, R06 |
| Pax list, Rooming list | Ngôn ngữ tài liệu | Có | English | R03 |
| Pax list, Rooming list | Tiêu đề tài liệu | Có | “PAX LIST · {Tour Code} · {Tên đoàn}” / “ROOMING LIST · {Tên khách sạn} · {Tour Code}” | ≤ 150 ký tự |
| Pax list | Tập cột | Có | Sao chép | R08 |
| Mọi mẫu | Ghi chú nội bộ | Không | Trống | ≤ 1.000 ký tự |
| Xem trước | Hồ sơ, hạng mục, khách, ngôn ngữ | Có | Gợi ý theo R13 | Hồ sơ Tour có thật; không giới hạn theo người phụ trách (Q1) |

### 5.3. Dữ liệu gửi ra ngoài

| Tài liệu | Người nhận | Nội dung | Lúc gửi thật | Dữ liệu lưu lại |
|---|---|---|---|---|
| Email gửi thử | Chỉ email tài khoản của người bấm | Nội dung đang soạn trộn dữ liệu xem trước, tiêu đề “[Gửi thử] …”; Pax list, Rooming list kèm tệp che số hộ chiếu | Khi bấm Gửi thử tới email của tôi; gửi qua hàng đợi (Q5) | Nhật ký QT03: người, thời điểm, email nhận, mẫu, phiên bản hoặc “chưa lưu” |

QT04 không gửi email hay tài liệu cho khách hoặc NCC. Email và tài liệu gửi thật thuộc DH08 (RSD DH08 5.3).

---

## 6. Tiêu chí nghiệm thu

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được |
|---|---|---|
| AC01 | Điều hành mở Quản trị → Mẫu tài liệu | Mở danh sách mẫu Điều hành, không có thanh tab, chip Tất cả 9, Trạng thái Đang dùng; mỗi cặp mục đích, loại dịch vụ chỉ có một mẫu (W01) |
| AC02 | Kinh doanh mở màn | Mở danh sách mẫu Điều hành ở chế độ chỉ xem; không có mẫu Survey, email chăm sóc, mẫu proposal (C3, W04) |
| AC03 | Tìm “khách sạn”, Trạng thái Tất cả | Còn DV-01 và DV-08 (mờ); chip Email đặt dịch vụ 2, Tất cả 2; có Xóa bộ lọc (W03) |
| AC04 | Tìm “visa” | Bảng rỗng ghi chuỗi tìm và trạng thái, nút Xóa bộ lọc (W05) |
| AC05 | Kinh doanh mở QT04, bấm DV-01 | Không có + Tạo mẫu; cột Đang dùng hiện chữ thay cho công tắc; bảng trượt hiện mọi trường dạng chữ, không có Xem trước, Lưu, Xóa (W04, W32, U5) |
| AC06 | Kế toán mở đường dẫn QT04 | Trang không có quyền; không lộ tên mẫu (E1.3) |
| AC07 | Kinh doanh gọi thẳng API lưu mẫu QT04.2 | Máy chủ từ chối; không tạo phiên bản (R01, R14) |
| AC08 | Tạo mẫu, Bắt đầu từ DV-05 | Nội dung VI, EN và mục đích được sao chép, nền xanh ngọc; mã gợi ý DV-09 (W06) |
| AC09 | Chèn trường ở mẫu mục đích Đặt dịch vụ | Menu có {Giá tham chiếu}, không có {Bảng thay đổi}; trường chèn thành nhãn vàng (W07, R04) |
| AC10 | Mẫu mục đích Điều chỉnh không có {Bảng thay đổi}, bấm Lưu | Chặn lưu, lỗi cạnh nội dung (R06) |
| AC11 | Tiêu đề thiếu {Tour Code}; nội dung có `{Tên điểm tham quan}`; mã DV-03 | Ba lỗi, banner đếm 3, mẫu không được tạo, nội dung giữ nguyên (W13) |
| AC12 | {Yêu cầu riêng} ngoài cụm tùy chọn, không có lỗi chặn | Cảnh báo vàng; Lưu vẫn tạo phiên bản (E2.2) |
| AC13 | Xem trước DV-09 với TP-2611-0042, dịch vụ không có giá tham chiếu | Email trộn đúng dữ liệu; cụm Giá tham chiếu bị bỏ; không ghi lần đặt (W09, R05, R13) |
| AC14 | Gửi thử lần thứ 11 trong một giờ | Bị chặn, thông báo nêu giới hạn (R13, E2.7) |
| AC15 | Gửi thử | Yêu cầu vào hàng đợi gửi email (Q5); email tới đúng email tài khoản, tiêu đề “[Gửi thử]”; nhật ký QT03 ghi email nhận; không có lần gửi ở DH08 |
| AC16 | Tạo DV-09 cho Tham quan (chưa có mẫu riêng) | DV-09 Đang dùng, nền xanh, Email đặt dịch vụ 8, Tất cả 10; DH08 đặt dịch vụ Tham quan tự khớp DV-09 (W10, R07) |
| AC17 | Sửa DV-01 v6, Lưu | Phiên bản v7, Lưu khóa, thông báo; email gửi trước đó vẫn hiện nội dung v6 ở DH08 (W11, W11a, R11) |
| AC18 | DH08 đang mở bảng trượt soạn email từ DV-01 v6; Điều hành khác lưu v7 | Email đang soạn giữ nội dung v6; email ghi số phiên bản v6 khi gửi; lần soạn sau dùng v7 (R11) |
| AC19 | Tạo DV-10 cho Khách sạn khi DV-01 đang dùng | Thông báo tại chỗ; DV-10 được tạo ở Ngừng dùng; DH08 vẫn khớp DV-01 (W12, R07) |
| AC20 | Hạng mục Spa không có mẫu riêng | DH08 tự khớp DV-05 (dự phòng Mọi loại dịch vụ) (R07) |
| AC21 | Hai người cùng mở DV-01 v6; A lưu v7, B lưu sau | B nhận W14; không có nút ghi đè, không có v8 nào bị tạo tự động; B bấm Tải lại thì nạp v7, mất thay đổi chưa lưu của B, bảng so sánh còn để sao chép (Q8) |
| AC22 | Đóng bảng trượt khi có 1 thay đổi chưa lưu | Hộp thoại W15; Tiếp tục sửa giữ nội dung |
| AC23 | Bấm Lưu hai lần liên tiếp | Chỉ một phiên bản mới (E2.8) |
| AC24 | Pax list PL-01, xem như NCC Khách sạn | Cột #, Full name, Gender, Nationality, Passport No. (che), Room theo đúng thứ tự mẫu (W16, W17) |
| AC25 | Pax list gửi một NCC có dịch vụ Khách sạn và Nhà hàng trong email đó | Tập cột là hợp các cột của hai loại (R08, Q17) |
| AC26 | Bỏ Họ tên của Nhà hàng, Lưu | Chặn lưu, cột Nhà hàng tô đỏ (W20) |
| AC27 | Loại Spa mới ở QT05 | Cảnh báo dùng tập mặc định; Pax list gửi NCC Spa có Họ tên, Giới tính, Quốc tịch (E3.2) |
| AC28 | Tải thử Pax list | Tệp che số hộ chiếu; nhật ký QT03 ghi tải thử (R13, R16) |
| AC29 | Rooming list RL-01, bỏ cột Hạng phòng | Ô khóa, không bỏ được (W19) |
| AC30 | Tắt RL-01 (mẫu Rooming list đang dùng) | Công tắc khóa kèm lý do (E3.5) |
| AC31 | Bỏ theo C3 | — |
| AC32 | Bỏ theo C3 | — |
| AC33 | Bỏ theo C3 | — |
| AC34 | Bỏ theo C3 | — |
| AC35 | Bỏ theo C3 | — |
| AC36 | Bỏ theo C3 | — |
| AC37 | Bỏ theo C3 | — |
| AC38 | Bỏ theo C3 | — |
| AC39 | Bỏ theo C3 | — |
| AC40 | Tắt DV-01, rồi bấm Hoàn tác trong 10 giây | Hộp thoại W28 nêu Khách sạn sẽ dùng DV-05; sau xác nhận DH08 khớp DV-05 cho Khách sạn; Hoàn tác đưa DV-01 về Đang dùng, số chip trở về |
| AC41 | Tắt DV-05 (dự phòng Đặt dịch vụ) | Hộp thoại cảnh báo đỏ liệt kê loại dịch vụ sẽ không còn mẫu (E6.1) |
| AC42 | Bật DV-08 khi DV-01 đang dùng cho Khách sạn | Hộp thoại W28a; sau xác nhận DV-08 Đang dùng, DV-01 Ngừng dùng trong cùng giao dịch; DH08 khớp DV-08 |
| AC42a | Bật mẫu chỉ Khách sạn khi mẫu đang dùng áp dụng Khách sạn, Du thuyền | Không bật được, thông báo nêu loại trùng (E6.7) |
| AC42b | Tắt PL-01 (mẫu Pax list duy nhất đang dùng) | Công tắc khóa kèm lý do (E3.5) |
| AC43 | Xóa PL-02 (Ngừng dùng, Chưa dùng) | Hộp thoại W29; sau xác nhận dòng biến mất; QT03 ghi xóa |
| AC44 | DV-01 đã dùng 214 email | Nút Xóa khóa kèm lý do (W11) |
| AC45 | Xóa mẫu vừa được dùng ở phiên khác | Máy chủ từ chối, thông báo E6.4 |
| AC46 | Lịch sử DV-01, chọn v4 | Thấy so với v3, nội dung v4, số lần dùng từng phiên bản (W30) |
| AC47 | Khôi phục v4 rồi Lưu | Tạo v7 có nội dung v4; bản English bị bỏ như ghi chú; v5, v6 còn trong lịch sử (W31) |
| AC48 | Khôi phục rồi Hủy | Mẫu giữ v6 |
| AC49 | Bật, tắt mẫu | Không tạo phiên bản; lịch sử có dòng sự kiện, QT03 ghi trước, sau (R11, R16) |
| AC50 | Loại dịch vụ Du thuyền bị tắt ở QT05 | DV-04 hiện thẻ Du thuyền gạch ngang “Đã tắt ở QT05”; mẫu vẫn dùng cho hạng mục cũ (E2.5) |
| AC51 | DH08 soạn email cho NCC chưa có đầu mối, mẫu có {Đầu mối NCC} ngoài cụm | Email soạn sẵn có chỗ trống tô đỏ; không gửi chuỗi `{…}` (E8.3) |
| AC52 | Quyền Quản lý mẫu Điều hành bị thu hồi khi Điều hành đang sửa | Lưu bị từ chối; màn chuyển chỉ xem; nội dung đang soạn còn để sao chép (E1.5) |
| AC53 | Thêm Khách sạn vào DV-02 (Đang dùng, Nhà hàng) khi DV-01 đang dùng cho Khách sạn | Chặn lưu, lỗi nêu DV-01 (E2.11) |
| AC54 | DH08 soạn email cho NCC có ngôn ngữ giao dịch English, mẫu khớp có bản EN; NCC khác chưa khai ngôn ngữ | Email thứ nhất dùng bản English, email thứ hai dùng bản Tiếng Việt; không có ô chọn mẫu ở DH08 (R07) |
| AC55 | DH08 soạn đặt dịch vụ cho một NCC có hạng mục Khách sạn và Nhà hàng chờ đặt; DV-01 đang dùng cho Khách sạn | Một email duy nhất cho NCC đó, dùng DV-05 (dự phòng Mọi loại dịch vụ của Đặt dịch vụ), không dùng DV-01, không tách hai email (R07) |
| AC56 | DH08 soạn đặt dịch vụ cho NCC chỉ có hạng mục Khách sạn chờ đặt | Một email dùng DV-01; NCC có Ngôn ngữ giao dịch English thì dùng bản EN của DV-01 (R07, RSD DH03 v1.4) |
| AC57 | DH08 soạn đặt Lotus Hanoi cho hạng mục Phòng nghỉ tiêu chuẩn 2 phòng 18/11 – 20/11 kèm Giường phụ 1; mẫu DV-01 bản Tiếng Việt có `{ds_dich_vu}`; sau đó tải Rooming list RL-01 (có cột Ghi chú) của đợt có một phòng 3 người ghi chú Giường phụ | Email có dòng hạng mục và ngay dưới dòng thụt lề “kèm: Giường phụ, 1 giường, 18/11 – 20/11”; bản English ghi “with: Giường phụ, 1 bed, 18/11 – 20/11”. Rooming list có “Giường phụ” ở cột Ghi chú của phòng đó (bản English “Extra bed”) (R04, R08; RSD DH08 R21) |
