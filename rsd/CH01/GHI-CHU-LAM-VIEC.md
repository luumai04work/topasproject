# Ghi chú làm việc · RSD CH01 Đăng nhập và mật khẩu (v1.0, 12/11/2026)

Tài liệu đi kèm, không thuộc bản phát hành.

## 1. Quyết định đã chốt (nguồn)

| Nguồn | Nội dung | Tác động ở RSD |
|---|---|---|
| Q24, BOI-CANH · Đăng nhập | Phiên 7 ngày, gia hạn theo hoạt động; tạm khóa 15 phút sau 5 lần sai; mật khẩu ít nhất 10 ký tự, có chữ và số; bắt đổi mật khẩu tạm ở lần đầu; có màn Đổi mật khẩu | L1.3, L2.1, L2.2, L3.2; R03, R05, R06, R07 |
| Q2 | Chỉ làm Đăng nhập (kèm bắt đổi mật khẩu lần đầu, Đổi mật khẩu) và thông báo in-app; bỏ email nội bộ | R15, mục 5.3 |
| BOI-CANH · Mặc định áp sau khi sửa RSD | Tạm khóa đăng nhập tự hết sau 15 phút, không nút mở sớm | E3.3; R03 |
| BOI-CANH · Tài khoản, Mật khẩu tạm | Không email mật khẩu, không link đặt lại; mật khẩu tạm không hết hạn | L1.5; R06, R15 |
| QT01 R04, R06, E5.6 | Đặt lại mật khẩu, khóa thì thu hồi mọi phiên; thông báo khóa “Tài khoản đã bị khóa. Liên hệ Quản trị hệ thống.”; dữ liệu chưa lưu mất khi bị khóa | L3.4; R08, R10; M04 |
| QT03 R01 | Không ghi đăng nhập, đăng xuất | R12 |
| U2, U3 | Không hộp thoại xác nhận thừa; nhớ bộ lọc, dạng xem sau đăng xuất | R11 |

## 2. Thiết kế tự quyết (U6, Q3; người dùng đổi được bất cứ lúc nào)

1. **Thông báo lỗi an toàn (R02).** Một thông báo M01 cho: email không có, sai mật khẩu, tài khoản Bị khóa (cả khi mật khẩu đúng). Cùng mã trạng thái, nội dung, vị trí; máy chủ băm giả để thời gian tương đương (kiểm khi rà mã, không có AC đo thời gian, mục 5). Không hiện số lần còn lại.
2. **Tạm khóa áp như nhau cho mọi email (R03).** Bộ đếm theo email chuẩn hóa, kể cả email chưa có tài khoản và tài khoản Bị khóa, để người ngoài không phân biệt được bằng cách đếm. Lần thử vào tài khoản Bị khóa tính là một lần sai dù mật khẩu đúng. Hệ quả: BOI-CANH ghi “đếm theo tài khoản”, RSD đếm theo email (tương đương với tài khoản có thật; đổi email ở QT01 thì bộ đếm cũ gắn email cũ).
3. **Hạn mức đếm không tự phai.** Chỉ reset khi đăng nhập đúng hoặc hết khóa, đúng chữ của yêu cầu; 4 sai rồi nghỉ lâu thì lần sai kế tiếp vẫn là lần 5.
4. **Lần thứ 5 nhận M02 ngay** (không chờ lần thứ 6). Trong khóa: không so mật khẩu, không đếm, không kéo dài. Đúng giờ hết khóa là đăng nhập được.
5. **Đặt lại mật khẩu, mở khóa tài khoản không xóa Tạm khóa** (đúng “không có nút mở sớm”).
6. **Sai Mật khẩu hiện tại ở màn Đổi mật khẩu tính vào cùng bộ đếm**; đủ 5 thì Tạm khóa và mọi phiên của tài khoản bị thu hồi. Lý do: chặn dò mật khẩu bằng phiên đã có. Mặc định Q3 (người điều phối ghi vào BOI-CANH).
7. **Chế độ bắt buộc không có ô Mật khẩu hiện tại** (người dùng vừa xác thực bằng chính mật khẩu tạm), mới phải khác mật khẩu tạm. Giảm một thao tác.
8. **Quy tắc mật khẩu bổ sung:** tối đa 128 ký tự; chữ cái gồm chữ có dấu; không cắt khoảng trắng; mới khác hiện tại (phân biệt hoa thường). Thứ tự kiểm tra: hiện tại đúng, quy tắc, khác hiện tại, khớp nhập lại.
9. **Đổi mật khẩu thành công thu hồi mọi phiên khác** của tài khoản, giữ phiên đang đổi (M06 ở các phiên kia). QT01 chỉ nêu thu hồi khi đặt lại; thêm ở đây vì mật khẩu cũ có thể đã lộ. Mặc định Q3.
10. **Chấm dứt phiên có hiệu lực ở yêu cầu kế tiếp** (không đẩy tức thì); lý do lưu trên phiên và hiện đúng M03 đến M06 (M07 bỏ, mục 5); lý do sau cùng thắng, thu hồi thắng hết hạn.
11. **Gia hạn chỉ theo thao tác của người dùng**, không theo yêu cầu nền (làm mới thông báo); không có hạn tuyệt đối tối đa.
12. **“Mất vai trò”:** bỏ ở rà chéo 12/11/2026 (xem mục 5). Đổi vai trò giữ phiên, quyền đổi từ yêu cầu kế tiếp.
13. **Dữ liệu chưa lưu khi phiên chấm dứt (R10):** hết hạn, đặt lại, đổi mật khẩu ở phiên khác (đăng nhập lại được) thì không tự chuyển trang, hiện banner W07 để đăng nhập ở thẻ mới rồi Lưu, rời trang thì hộp thoại chặn rời trang; bị khóa (không đăng nhập lại được) thì chuyển ngay và mất dữ liệu, khớp QT01 E5.6. Trang giữ mã tài khoản lúc mở; Lưu bằng phiên tài khoản khác bị từ chối.
14. **Đường dẫn quay lại:** tham số `next` chỉ nhận đường dẫn nội bộ (bắt đầu một `/`, không `//`, không lược đồ, tối đa 2.000 ký tự, không trỏ màn Đăng nhập); không hợp lệ thì Việc của tôi. Email điền sẵn chỉ khi phiên chấm dứt.
15. **Ghi QT03 khi đổi mật khẩu** (R12): một mục cho mỗi lần thành công, nhãn “Đổi mật khẩu tạm” hoặc “Đổi mật khẩu”, mã màn CH01.2, trường Mật khẩu Sau “đã đổi”, cờ ⚑ (thao tác trên Người dùng, QT03 R13), cùng giao dịch với thu hồi phiên (Q5). Không ghi: đăng nhập, đăng xuất, sai, Tạm khóa, hết hạn.
16. **Mọi người dùng dùng được CH01**, không qua ma trận QT02 (nhất quán Q24); phiên hạn chế khi Chờ đổi mật khẩu tính lúc đọc từ loại mật khẩu, không lưu trên phiên.
17. **Màn Đăng nhập hiện thông tin liên hệ Quản trị lấy từ tệp cấu hình nếu có**, không có thì chỉ dòng chữ cố định; không đọc dữ liệu tài khoản (người chưa đăng nhập không đọc dữ liệu người dùng). Mặc định Q3.
18. **Menu người dùng** (Đổi mật khẩu, Đăng xuất) thuộc khung ứng dụng; CH01 chỉ quy định hai mục. Sau tự đổi về trang trước đó; sau chế độ bắt buộc về `next` hoặc Việc của tôi.
19. **Nhiều phiên cùng lúc** được phép; Đăng xuất chỉ thu hồi phiên hiện tại. Số 5, 15 phút, 7 ngày, 10 ký tự cố định trong mã, không có màn cấu hình (C2).
20. **Nguồn thời gian máy chủ duy nhất, thay được trong kiểm thử** (R04) để viết test hết khóa, hết hạn phiên mà không chờ thật.
21. **Dọn bộ đếm của email chưa có tài khoản** (tránh phình bảng) thuộc triển khai, không đặc tả; nên dọn sau khi hết khóa mà không đổi hành vi nhìn thấy được.
22. **Không dựng wireframe**; mã W01 đến W08 giữ chỗ. check-rsd chạy với 0 ảnh, không còn cảnh báo bước thiếu W.

## 3. Thay đổi cần làm ở màn khác

| Màn | Thay đổi |
|---|---|
| QT01 v1.3 R03, mục 2.1 (cột Trạng thái hoặc chỉ báo) | Thêm chỉ báo phụ **Tạm khóa đăng nhập, tự hết lúc hh:mm** khi tài khoản có giờ hết khóa lớn hơn hiện tại, đọc từ CH01 R03. QT01 v1.3 R03 mới nêu khái niệm, chưa có chỉ báo trong bảng chỉ báo mục 2.1 và bảng vòng đời; BOI-CANH đã ghi QT01 hiện chỉ báo, không có nút mở sớm. Thêm AC |
| QT01 R04, R09 | Thêm sự kiện lịch sử “Đổi mật khẩu” (tự đổi, không chỉ “Đổi mật khẩu tạm”) và nói rõ ghi từ CH01 R12; dẫn CH01 cho quy tắc mật khẩu thay vì lặp “ít nhất 10 ký tự, có chữ và số” |
| QT01 R04, mục 5.1, bảng Mật khẩu và Phiên | Ghi rõ CH01 sở hữu phiên và bộ đếm; “Quản trị đặt lại mật khẩu đăng xuất mọi phiên” dẫn CH01 R08 |
| QT01 E3.2 (hình W13), L5.1, E5.6 | Dẫn CH01 L3.4 (M04); không đổi nội dung |
| QT01 R03 | Câu “Tạm khóa đăng nhập do màn Đăng nhập xử lý” dẫn CH01 R03; nêu hệ quả đặt lại mật khẩu, mở khóa không xóa Tạm khóa |
| QT03 R15 (bảng sự kiện theo màn), mục 2.3 (bộ lọc Màn) | Thêm dòng **CH01 · Đổi mật khẩu, Đổi mật khẩu tạm** (mục có cờ ⚑, mật khẩu chỉ “đã đổi”); thêm CH01.2 vào danh sách mã màn lọc |
| QT02 | Mọi vai trò dùng được CH01, không cần quyền (QT02 R04 đã ghi). Đề nghị chặn hoặc cảnh báo khi vai trò duy nhất bị ngừng dùng hoặc xóa: không còn cần, vì QT02 R01, R10 không để tài khoản mất vai trò có hiệu lực |
| CH03 (Việc của tôi) | Đích mặc định sau đăng nhập; khi vai trò không có thẻ nào vẫn là trang đứng được (CH03 E1.5, CH01 R17) |
| Khung ứng dụng, chuẩn K1–K6 | Menu tài khoản có Đổi mật khẩu, Đăng xuất; hộp thoại chặn rời trang W08 dùng chung; không hiện menu ở CH01.1 và CH01.2 chế độ bắt buộc |
| Thông báo in-app | Làm mới số thông báo là yêu cầu nền, không gia hạn phiên (CH01 R07) |
| Mọi màn có form | Giữ mã tài khoản lúc mở trang để từ chối Lưu bằng phiên tài khoản khác (CH01 R10); gỡ trình chặn rời trang khi bị khóa |

## 4. Kiểm tra đã chạy

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py docs/rsd/CH01/RSD-CH01-Dang-nhap-va-mat-khau-v1.0.md`: không lỗi, không cảnh báo (0 ảnh theo quy ước đợt này).
- Số lượng: 11 luồng L, 62 ngoại lệ E, 17 quy tắc R, 73 AC (mỗi AC một mã test `T-CH01-nn`).
- Rà thuật ngữ theo BOI-CANH (Tài khoản, Mật khẩu tạm, Chờ đổi mật khẩu, Tạm khóa đăng nhập, Bị khóa, Quản trị hệ thống, Việc của tôi, Nhật ký thao tác QT03). Không dùng nhãn “chờ xác nhận”, “đề xuất”, “dự thảo”.
- Đối chiếu QT01: R03 (Tạm khóa khác Bị khóa), R04 (không hết hạn, không email, đăng xuất khi đặt lại), R06 (thu hồi khi khóa), E5.6 (thông báo M04, dữ liệu mất), R02 (đổi vai trò giữ phiên), R01 (đổi email giữ phiên). Chỉ các điểm ở mục 3 cần sửa phía QT01, QT03.

## 5. Sửa sau rà chéo 12/11/2026

Giữ số phiên bản 1.0. Số hiệu L, E, R, AC giữ nguyên; mục bỏ để lại dòng “Bỏ theo …”.

- **N4 · Bỏ tình huống “mất vai trò duy nhất”.** Không dựng được dữ liệu: QT01 R02 bắt tài khoản có ít nhất một vai trò; QT02 R01, R10 cho vai trò Ngừng dùng vẫn mang quyền và chỉ xóa vai trò chưa gán; vai trò hệ thống không xóa, không ngừng dùng (QT02 R03). Sửa: M07, E1.7, AC11, AC61 thành dòng “Bỏ”; L1.1 (điều kiện), L1.4, E4.4, L3.4, E11.1, 1.3, 1.4, R02, R08 (bỏ dòng bảng, sửa ý “mất vai trò”), R10, R17 (bỏ dòng cấu hình Vai trò đang có hiệu lực). Giữ trường hợp Bị khóa giữa phiên (M04, AC60, AC64, AC66).
- **T4 · Mở khóa và mật khẩu tạm.** Theo QT01 R04, R07 (sửa cùng đợt): khóa làm mật khẩu tạm mất hiệu lực; mở khóa tài khoản có mật khẩu tạm lúc khóa thì bắt đặt mật khẩu tạm mới. Sửa R06 (thêm ý), E11.3, AC69 (ba trường hợp a, b, c).
- **T5 · R05 là nguồn duy nhất của quy tắc mật khẩu.** Thêm “không chứa phần trước @ của email đăng nhập” (lấy từ QT01 R04 cũ), thứ tự kiểm tra, thông báo lỗi, mục 5.2; mật khẩu tạm tự nhập và tự sinh theo R05. Thêm AC74. **Tự quyết:** chỉ áp khi phần trước @ có từ 3 ký tự, so không phân biệt hoa thường và dấu (tránh chặn mọi mật khẩu có một chữ cái khi email kiểu a@…).
- **T13 · Ba điểm “cần xác nhận” thành mặc định Q3:** sai Mật khẩu hiện tại ở Đổi mật khẩu tính chung bộ đếm, đủ 5 thì Tạm khóa và thu hồi mọi phiên (mục 2 điểm 6, R03, E7.2, AC44); đổi mật khẩu thu hồi mọi phiên khác (điểm 9, R08); màn Đăng nhập hiện thông tin liên hệ Quản trị từ tệp cấu hình nếu có (điểm 17; sửa 2.1, L1.5, E5.1, R15, R17, AC24; thêm AC75). **Tự quyết:** thông tin liên hệ là chuỗi chữ tự do tối đa 200 ký tự, hiện nguyên văn, không thành liên kết.
- **N-3 · “Menu tài khoản”** thay “Menu người dùng” ở mọi chỗ (theo CGD K0.06). AC72 không khẳng định “đúng hai mục”: kiểm có Đổi mật khẩu và Đăng xuất với ba tài khoản một vai trò.
- **N-5 · R17:** bỏ phương án dự phòng “mở trang đầu tiên có quyền… Chưa có màn nào”; Việc của tôi luôn có, không thẻ thì câu theo CH03 E1.5.
- **N-8 · “Toast” → “thông báo ngắn”** (L2.1, L2.2, AC29, AC40, AC41).
- **AC không kiểm chứng được.** AC09 bỏ đo thời gian, kiểm mã trạng thái, phần thân giống từng byte, độ dài; R14 ghi băm giả là điều kiểm khi rà mã. AC71 giới hạn bốn nơi kiểm: phản hồi API, kho QT03, bảng thông báo, log ứng dụng (gồm URL truy cập).
- Số lượng sau sửa: 75 AC (AC11, AC61 không dùng; thêm AC74, AC75).
- **Kiểm tra:** `check-rsd.py` mã thoát 0, 0 ảnh (mã W giữ chỗ).

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **CH03:** không cần sửa vì CH01 (CH01 R17 dẫn CH03 E1.5 như hiện có).
- **QT03 R15:** dòng CH01 · Đổi mật khẩu, Đổi mật khẩu tạm (đã nêu ở mục 3) vẫn chưa có; lượt này không sửa QT03.

## 6. Bổ sung vai trò HDV 12/11/2026 (giữ v1.0)

Giữ số hiệu L, E, R, AC; thêm L1.6, E12.1–E12.6, R18, R19, W09, W10, AC76–AC82.

**Quyết định của người dùng:** thêm vai trò HDV; các màn của phòng HDV thiết kế cho điện thoại (BOI-CANH Nền tảng, “Vai trò HDV”). Yêu cầu bổ sung: Đăng nhập và Đổi mật khẩu dùng được trên điện thoại; sau đăng nhập, tài khoản chỉ có vai trò thuộc phòng HDV mở HD01, còn lại mở CH03.

**Tự quyết (U6)**

1. **Ngưỡng bố cục điện thoại 768 px** (CGD K7.01); dưới ngưỡng dùng K7, từ ngưỡng trở lên dùng bố cục máy tính hiện có. Không có bản riêng theo loại thiết bị.
2. **Trang mặc định tính theo phòng của vai trò, không theo quyền** (R18), để CH01 vẫn không đọc ma trận QT02. Tài khoản chỉ có vai trò phòng HDV mà bị tắt `HD01.xem` thì gặp trang không có quyền ở HD01, vẫn còn menu để Đổi mật khẩu, Đăng xuất.
3. **Câu “Việc của tôi” ở các đích sau đăng nhập** đọc là trang mặc định (R18) thay vì sửa mọi câu; đã sửa các chỗ chính (1.1–1.4, L1.1, E1.3, E1.6, E4.1, L2.1, L2.2, L3.3, R09). AC01, AC04, AC05 vẫn đúng vì tài khoản ví dụ (Phan Thu Hà) là Điều hành.
4. **Ô Email, Mật khẩu trên điện thoại** cho trình duyệt và trình quản lý mật khẩu điền sẵn; không tự viết hoa, không tự sửa chính tả (R19).
5. **W09, W10** là mã mới cho bố cục điện thoại của W01–W05; nội dung giống bản máy tính.

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **RSD HD01 (đang viết):** trang trống khi tài khoản không có Tour được phân công (E12.6).
- **BOI-CANH thuật ngữ “Việc của tôi”:** “Trang mặc định sau đăng nhập” nên ghi thêm “trừ tài khoản chỉ có vai trò thuộc phòng HDV (Tour của tôi)”.

## 7. Sửa sau rà soát HD01 12/11/2026 (giữ v1.0)

- **T2 · Đăng xuất khi HD01 còn bản chưa gửi.** Ngoại lệ của “không hộp thoại xác nhận” (U2): hộp thoại theo RSD HD01 E5.5, R08. Sửa L3.1, R11; thêm E8.6, AC83. CGD K0.11 sửa cùng đợt. **Tự quyết:** kiểm ở trình duyệt (bản chưa gửi chỉ có trên máy), áp ở mọi màn có menu tài khoản, không chỉ khi đang ở HD01, vì tài khoản có thêm vai trò khác có thể đăng xuất từ màn máy tính.
- RSD HD01 đã dẫn đúng R18 (trang mặc định) thay R09.
- **Kiểm tra:** `check-rsd.py` cho RSD CH01: mã thoát 0, 0 ảnh, không lỗi.
