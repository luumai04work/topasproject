# Ghi chú làm việc · RSD QT04 · Mẫu tài liệu và email

Không thuộc bản phát hành. Ngày 12/11/2026. Bản hiện hành: v1.3.

## 12/11/2026 · rà soát mâu thuẫn lần ba (v1.3)

- **Quyết định D (người dùng chốt): mẫu email chiến dịch theo KD10, nơi sở hữu chiến dịch.** Trước đây QT04 nói chung “chiến dịch chụp nội dung khi bật” và “Nháp, Tạm dừng phải chọn mẫu khác trước khi bật” cho mọi mẫu QT04.1, lệch KD10 L2.2 (bước Remarketing điền nội dung mẫu lúc soạn) và R04 (Remarketing không xét mẫu khi bật). Nay tách: Survey chụp bản hiện hành khi bật lần đầu, chặn bật nếu mẫu ngừng dùng, bật lại không tự lấy bản mới (muốn dùng thì tạm dừng, chọn lại); email chăm sóc điền và chụp vào bước lúc soạn hoặc lưu bước, sửa được, ngừng dùng mẫu không chặn bật. Sửa 1.2, 2.5, E4.5, kết quả L5.1, L6.1 (bước 1, 2), 3.8, R09, R11, R12. Đối chiếu KD10 v1.2 R04, R10, E1.3, E3.3.
- **Dẫn chiếu sai:** “RSD KD10 L2.1 bước 2” (soạn bước) và “L1.1, L2.1” ở 3.8 sửa thành L2.2 (L2.1 là chọn nhóm khách).
- **R09:** bỏ KD09 khỏi nơi hiện điểm tổng thể; KD09 2.2, R03 chỉ có số gửi, phản hồi, hủy nhận, không có điểm. Ghi chú nội bộ mẫu GR-01 trên W21–W24 cũng bỏ KD09.
- **Hình:** W21–W24 dùng chung cột trái mẫu Survey; dựng lại vì ô thông tin bản chụp và ghi chú đổi. W26 (mẫu Survey GR-01, chiến dịch Đang chạy và Nháp) vẫn đúng, không dựng lại.
- Phiên bản dẫn chiếu: DH08 v2.8, QT05 v1.2, KD10 v1.2, KD09 v1.3, KD06 v1.5, DH01 v1.4; DH03 v1.3 giữ (không có trong bảng phiên bản mới).
- `check-rsd.js RSD-QT04-Mau-tai-lieu-va-email-v1.3.md --final`: 34 ảnh, 34 mã W, không cảnh báo.

## 12/11/2026 · rà soát lần hai (v1.2)

- **Một email cho mỗi (NCC, loại việc)** (người dùng chốt): trước đây khóa gộp ở DH08 gồm cả mẫu, nên NCC có nhiều loại dịch vụ với mẫu riêng khác nhau sẽ bị tách email, trái quyết định. Nay gộp email trước, khớp mẫu sau: email một loại dịch vụ dùng mẫu khớp (mục đích, loại dịch vụ), không có thì mẫu Mọi loại dịch vụ; email nhiều loại dịch vụ luôn dùng mẫu Mọi loại dịch vụ (R07, 3.8, AC55, AC56).
- **Suy ra, chờ xác nhận:** email gộp nhiều loại mà không có mẫu Mọi loại dịch vụ Đang dùng thì vẫn một email, DH08 báo thiếu mẫu, Soạn không theo mẫu (E8.5); cảnh báo E6.1 nhắc thêm hệ quả này.
- **Ngôn ngữ giao dịch:** DH03 v1.3 đã có trường Ngôn ngữ giao dịch (mặc định Tiếng Việt); bỏ chữ “trường cần bổ sung” ở R03, nguồn dẫn DH03 v1.3. Mục 3 “Thiết kế tự quyết” bên dưới không còn đúng phần “DH03 chưa có trường”.
- Pax list, Rooming list giữ nguyên (DH08 không cho chọn mẫu, mỗi loại một mẫu Đang dùng).
- Giao diện QT04 không đổi, không dựng lại ảnh. `node wireframes-src/check-rsd.js RSD-QT04-Mau-tai-lieu-va-email-v1.2.md --final`: 34 ảnh, 34 mã W, không cảnh báo.

## Quyết định đã chốt

| Mã | Câu hỏi | Trả lời (12/11/2026) | Tác động |
|---|---|---|---|
| Q1 | Ai tạo, sửa mẫu | Mỗi bộ phận sửa nhóm của mình: Kinh doanh QT04.1, Điều hành QT04.2; bên kia chỉ xem; Kế toán không có menu; quyền cấp theo vai trò, Quản trị thu hồi, cấp ở QT02 | 1.4, R01, L1.3, W04, W32, AC05–AC07 |
| Q2 | QT04.1 làm gì với mẫu proposal | Kinh doanh không cần làm gì, hệ thống tự dựng | Bỏ nhóm báo giá khỏi QT04.1; dòng chỉ dẫn ở W02; 1.3; AC02 |
| Q3 | Bản sửa có hiệu lực khi nào | Lưu là áp dụng, có phiên bản, không duyệt | 2.5, R11, L2.2, L7.1, W11a, W30, W31 |
| Q4 | KD06: nguồn mẫu proposal, mục mặc định bao gồm, không bao gồm | Có mẫu proposal riêng, không cần cấu hình | RSD KD06 v1.3 (1.3, L5.1, R18, cấu hình phụ thuộc, W32) |
| Q5 | DH08: người dùng có chọn mẫu không | Hệ thống tự khớp mẫu | QT04 v1.1: bỏ Chọn sẵn; mỗi phạm vi khớp một mẫu Đang dùng; R07, L2.3, L6.2, L6.3, E3.5, E2.11, E6.7, W12, W28, W28a |

## Thiết kế tự quyết cần xác nhận

1. **Phạm vi khớp và mẫu dự phòng (theo Q5).** Email đặt dịch vụ khớp theo (mục đích, loại dịch vụ); mẫu Mọi loại dịch vụ là dự phòng; Pax list, Rooming list mỗi loại đúng một mẫu Đang dùng. Hai mẫu Đang dùng không chung phạm vi (R07).
2. **Thay mẫu không gián đoạn.** Tạo mẫu trùng phạm vi thì mẫu ở Ngừng dùng để soạn trước; bật mẫu đó là một hộp thoại, mẫu cũ tự ngừng dùng (W12, W28a). Trùng một phần thì chặn (E6.7). Mẫu Pax list, Rooming list đang dùng không tắt trực tiếp (E3.5).
3. **Ngôn ngữ email NCC tự khớp** theo ngôn ngữ giao dịch của NCC; DH03 chưa có trường này nên hiện mọi email là Tiếng Việt (R03, R07). Cần bổ sung trường ở DH03 nếu muốn dùng bản English.
4. **Email đặt dịch vụ có ba mục đích** Đặt dịch vụ (cả đặt lại, đặt phần thiếu), Điều chỉnh, Hủy.
5. **Ngôn ngữ bắt buộc:** English cho mẫu QT04.1; Tiếng Việt cho email đặt dịch vụ và email gửi kèm. Pax list, Rooming list một ngôn ngữ tài liệu mỗi mẫu (R03).
6. **Email gửi kèm Pax list, Rooming list nằm trong mẫu tài liệu** (thẻ Email gửi kèm).
7. **Tập cột Pax list dạng ma trận trường × loại dịch vụ**, NCC nhận hợp cột của các loại mình có; loại không tích ô nào dùng tập mặc định Họ tên, Giới tính, Quốc tịch (R08).
8. **Rooming list:** ba cột bắt buộc Phòng, Hạng phòng, Họ tên; tiêu đề cột do hệ thống đặt theo ngôn ngữ.
9. **Cụm tùy chọn** để bỏ cả câu khi trường trống; trường có thể trống ngoài cụm chỉ cảnh báo (R05, R06). DH08 để chỗ trống tô đỏ; KD10 thay chuỗi rỗng.
10. **Kiểm tra chặn:** tiêu đề email NCC phải có {Tour Code}; email đặt phải có {Danh sách dịch vụ}; Điều chỉnh phải có {Bảng thay đổi}; Survey 1–15 câu, tối đa một câu Điểm 0–10; giới hạn 150 ký tự tiêu đề, 20.000 ký tự nội dung (R06, R09).
11. **Mã mẫu** người dùng nhập, có gợi ý, duy nhất toàn QT04, sửa được (R02).
12. **Xem trước bằng dữ liệu thật**, che số hộ chiếu, kể cả tệp tải thử; gửi thử chỉ tới email của chính mình, tối đa 10 lần mỗi giờ (R13).
13. **Đang dùng không thuộc phiên bản**; khôi phục phiên bản cũ là nạp vào khung soạn rồi lưu thành phiên bản mới (R11).
14. **Xung đột khi lưu:** không ghi đè, không gộp tự động (E2.3).
15. **Ngừng dùng mẫu được chiến dịch Nháp, Tạm dừng dùng** thì báo người phụ trách chiến dịch (L6.1).
16. **Email chăm sóc** chỉ văn bản định dạng và liên kết https; chưa chèn ảnh.
17. Màn danh sách chỉ dạng Bảng (đối tượng cấu hình). KD10 vẫn cho người phụ trách chọn mẫu (không thuộc Q5).

## Thay đổi cần làm ở màn khác

- **Danh sách màn (QT04, QT04.1).** QT04: bỏ “báo giá” khỏi nhóm mẫu. QT04.1: đổi thành “Mẫu Survey và email chăm sóc”; bỏ “Xem trước với dữ liệu mẫu (đề xuất)”; bỏ KD06.3 khỏi “Mẫu được chọn ở”. KD06.3 cột Danh mục: bỏ “mẫu báo giá (QT04.1)”.
- **RSD KD06.** Đã làm ở v1.3 (Q4).
- **RSD DH08 (hiện v2.5, đang được sửa ở phiên khác nên chưa đụng tới).**
  - L4.6 bước 1, W47: bỏ “chọn mẫu” và ô “Mẫu: Pax list – EN”; DH08.4 dùng mẫu Đang dùng duy nhất (QT04 R07).
  - Bảng trượt Đặt dịch vụ: giữ “mẫu tự chọn”, không thêm ô chọn mẫu; ngôn ngữ tự khớp theo NCC.
  - Email gửi ra ngoài, tài liệu Pax list, Rooming list ghi thêm ID mẫu và số phiên bản.
  - Trường thiếu dữ liệu ngoài cụm tùy chọn hiện chỗ trống tô đỏ (QT04 R05).
  - Mục 4 dòng “Mẫu email theo loại dịch vụ và ngôn ngữ”: hành vi khi thiếu theo QT04 R07 (mẫu dự phòng trước, rồi E3.1).
  - W48: Indochine Palace Huế và Lotus Hanoi (cùng loại khách sạn) ghi tập cột khác nhau; theo QT04 R08 phải giống nhau.
- **RSD DH03.** Trường Ngôn ngữ giao dịch của NCC (mặc định Tiếng Việt) để tự khớp bản ngôn ngữ email.
- **RSD KD10.** W08 chọn mẫu “nhóm email chăm sóc hoặc remarketing” nay là một loại Email chăm sóc; thông báo khi mẫu của chiến dịch Nháp, Tạm dừng bị ngừng dùng.
- **QT02.** Hai quyền Quản lý mẫu Kinh doanh, Quản lý mẫu Điều hành.
- **QT05.** Danh mục Ngôn ngữ dùng cho thẻ ngôn ngữ mẫu.
- **Cấu hình chung.** Logo, tên công ty cho tài liệu Pax list, Rooming list.

## Kiểm tra đã chạy

- v1.1: `node wireframes-src/check-rsd.js RSD-QT04-Mau-tai-lieu-va-email-v1.1.md --final`: 34 ảnh, 34 mã W, không cảnh báo. Không còn chữ “Chọn sẵn” ngoài dòng Thay đổi ở v1.1. Dựng lại toàn bộ W01–W32 và W28a; đã xem W12, W28, W28a.
- v1.0: đã xem W01, W09, W11, W13, W16, W17, W19, W21, W22, W27, W29, W30.
- Số liệu đối chiếu v1.1: chip W01 7 + 1 + 1 = 9; W10 8 + 1 + 1 = 10; W27 3 + 3 = 6; số dùng theo phiên bản ở W30 cộng 214 = Đã dùng của DV-01.
- KD06 v1.3: dựng lại và xem W32.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** R13 trường {Yêu cầu riêng}: bỏ “theo nhãn”, theo hai ô Ăn uống, Phòng nhập tự do của RSD DH08 v2.8 R06.
