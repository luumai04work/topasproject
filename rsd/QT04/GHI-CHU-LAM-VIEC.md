# Ghi chú làm việc · RSD QT04 · Mẫu tài liệu và email

Không thuộc bản phát hành. Ngày 12/11/2026. Bản hiện hành: v1.4.

## 19/11/2026 · Khung email và chữ mẫu khởi tạo theo mẫu mail của topas-crm (người dùng yêu cầu)

- **Khung HTML.** Mọi email gửi qua Gmail (email đặt dịch vụ, email gửi kèm Pax list / Rooming list, gửi thử) đi dạng multipart/alternative: bản chữ thuần như cũ (là nội dung người dùng duyệt, lưu và scenario đọc) và bản HTML dựng từ chính chữ đó theo mẫu mail của topas-crm (`addons/topas/data/mail_template_data.xml`, `tour_supplier_email_templates.xml`), đặt trong khung thiết kế (người dùng yêu cầu thêm cùng ngày: “mẫu HTML đẹp, CSS đẹp”): thẻ trắng 640 px giữa nền xám, dải đầu màu xanh của app có logo TOPAS (quả địa cầu, ảnh thương hiệu TOPAS của topas-crm `static/src/img/brand/favicon.png`, thu về 96 px ở `apps/api/assets/email/topas-logo.png`, gửi kèm dạng ảnh inline `cid:` trong multipart/related vì ứng dụng email chặn ảnh từ xa và data URI), chữ “TOPAS” (`app.name`), tên công ty (cấu hình `companyName`) bên dưới và tiêu đề email, chân thẻ ghi tên công ty và địa chỉ hộp thư chung. Trong thân: dòng đầu là lời chào; `{Danh sách dịch vụ}` thành bảng (#, Ngày, Dịch vụ, Số lượng, Yêu cầu; dòng đi kèm nằm ngay dưới dòng hạng mục), `{Bảng thay đổi}` thành bảng (Thay đổi, Trước gạch đỏ, Sau xanh); dòng ngắn “Nhãn: giá trị” (Yêu cầu riêng, Lý do, Lưu ý) thành ô ghi chú; câu kết (dòng ngắn kết thúc bằng dấu phẩy ở cuối thư) và các dòng sau nó là chữ ký. Tiêu đề cột theo ngôn ngữ của email; gửi thử và email gửi kèm không có bảng nên không cần. **Lệch R10 theo yêu cầu người dùng:** dải đầu và chân thẻ là khối cố định, nhưng chỉ chứa tên công ty, tiêu đề và địa chỉ gửi (không thêm câu chữ); chữ ký vẫn là nội dung của mẫu. Chỉ dùng style inline và bảng (ứng dụng email bỏ `<style>`, flexbox). Xem trước W09 vẫn hiện bản chữ.
- **Chữ mẫu khởi tạo DV-05, DV-06, DV-07 (R07)** lấy câu chữ của mẫu NCC Đặt dịch vụ / Sửa đổi / Huỷ của topas-crm (bản VI và EN), giữ trường tự điền và cụm tùy chọn của QT04; bỏ dòng “Hạn phản hồi” (QT04 không có trường này) và chữ ký tên công ty (giữ `{Người gửi}`, R10). Chỉ áp cho cài đặt mới (bảng mẫu trống), mẫu đã có không đổi. PL-01, RL-01 giữ nguyên (topas-crm không có mẫu tương ứng).

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

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-QT04-Mau-tai-lieu-va-email-v1.4.md` (`git mv` từ v1.3). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, BOI-CANH bản 12/11/2026. Các mục cũ bên dưới (Q1–Q5, thiết kế tự quyết, việc ở màn khác) là lịch sử; phần nói về QT04.1, KD09, KD10 không còn áp dụng.

- **C3.** Bỏ trọn QT04.1: mẫu Survey, email chăm sóc, quyền Quản lý mẫu Kinh doanh, khối cố định Survey và hủy nhận, trường {Danh xưng}, {Tên khách}, {Thời gian Tour}, {Tuyến Tour}, {Tour gần nhất}, {Người phụ trách}, mã gợi ý SV, RM, mọi chỗ chiến dịch giữ bản đã dùng, Đã dùng theo chiến dịch, lối vào từ KD09, KD10. Mục 3.4, 3.5, L6.1, R09 giữ tiêu đề kèm “(Bỏ theo C3)”; AC31–AC39 ghi “Bỏ theo C3”. AC02, AC07 viết lại cho QT04.2.
- **Q1, Q25, U5.** Mục 1.4 viết lại thành quyền mặc định theo vai trò: hai thao tác Xem QT04.2 và Quản lý mẫu Điều hành; mặc định Điều hành sửa; Kinh doanh, Quản trị xem; Kế toán không có. Người chỉ xem thấy chữ thay cho công tắc, bảng trượt hiện dạng chữ (L1.3, AC05).
- **Q17.** Pax list gửi NCC có tập cột là hợp các cột của mọi loại dịch vụ có trong email hoặc tài liệu (L3.1, R08, AC25).
- **Q8.** Xung đột khi lưu: nút Tải lại, không có nút ghi đè (E2.3, R14, AC21).
- **Q5, G2, C2.** Gửi thử qua hàng đợi gửi email, người gửi là hộp thư chung; tải PDF thử qua hàng đợi; xem trước email ghi CC người thao tác; hộp thư chung, logo, tên công ty ở tệp cấu hình hoặc dữ liệu khởi tạo (L2.1, R08, R13, R15, 5.3, AC15).
- **Q3.** E8.5 bỏ nhãn “suy ra, chờ xác nhận”.
- **U3, K5, Q22.** Bộ lọc nhớ theo người dùng; bảng trượt 1100 px; proposal theo W33 của KD06.

**Tự đơn giản hóa giao diện (U6).**
- Chỉ còn một nhóm mẫu nên bỏ thanh tab; số mẫu Đang dùng đưa lên tiêu đề (2.1, L1.1). Kinh doanh mở thẳng danh sách của Điều hành ở chế độ chỉ xem (L1.3).
- Bảng cột ở 2.2 gộp còn một cột nội dung; cột “Đã dùng / Dùng ở” còn “Đã dùng”.

**Hình chưa cập nhật** (không dựng lại).
- Mọi hình: thanh tab còn tab “Kinh doanh · Survey và email chăm sóc”; bảng trượt 1060 px.
- W04: công tắc vẽ mờ (nay hiện chữ). W09: chưa có CC người thao tác. W14: nút “Tải v7 (bỏ thay đổi của tôi)” (nay Tải lại). W32: trường viền nét đứt (nay dạng chữ).
- Bỏ nhúng W02, W21–W27 (chỉ minh họa QT04.1); tệp PNG và nguồn trong `wireframes-src/` giữ nguyên.

**Câu hỏi cho người dùng.**
- Hộp thoại W28 khi tắt mẫu email đặt dịch vụ (L6.2, 2.5, 2.6, R12): tắt là hoàn tác được, theo U2 lẽ ra làm ngay kèm Hoàn tác; hộp thoại có giá trị vì báo loại dịch vụ nào chuyển sang mẫu dự phòng hoặc không còn mẫu. Giữ nguyên.

**Kiểm tra.** `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py --final`: 26 ảnh, 26 mã W, không lỗi.

## Dịch vụ đi kèm 12/11/2026

Sửa tại chỗ `RSD-QT04-Mau-tai-lieu-va-email-v1.4.md`, dòng “Thay đổi ở v1.4 (bổ sung 12/11/2026 · dịch vụ đi kèm)”. R04: trường `{ds_dich_vu}` liệt kê đi kèm của từng hạng mục ngay dưới dòng hạng mục (“kèm: tên, số lượng và đơn vị, ngày”; English “with: …”); không thêm trường mới, mẫu đang dùng không phải sửa. R08: cột Ghi chú của Rooming list lấy ghi chú phòng của DH08.4, gồm “Giường phụ” (English “Extra bed”); mẫu không chọn cột Ghi chú thì không có ghi chú. Thêm AC57.

**Tự quyết:** mở rộng `{ds_dich_vu}` thay vì thêm trường `{dich_vu_di_kem}`, để email gộp nhiều hạng mục vẫn đặt đi kèm đúng dưới hạng mục của nó. Tên đi kèm trong bản English là tên tiếng Việt vì DH03 không có tên tiếng Anh của dịch vụ (như tên dịch vụ chính hiện nay).

**Kiểm tra.** `check-rsd.py`: 26 ảnh, 26 mã W, không lỗi.

## Cách hiểu đã chọn khi làm xem trước, gửi thử (ticket 58, 17/11/2026)

- **Người nhận khi xem trước (W09, G2).** Đến: email đặt dịch vụ của NCC (DH03), NCC chưa khai thì email người liên hệ chính; CC: các email CC của NCC (DH03) và email người đang xem; Từ: hộp thư chung. Đây cũng là cách DH08 soạn (ticket 60 dùng lại `booking-email-data.ts`).
- **Ngôn ngữ (R03, R07).** Mặc định là ngôn ngữ giao dịch của NCC khi mẫu có bản đó, không thì Tiếng Việt; người dùng đổi bằng chip ngôn ngữ.
- **Trường chưa có nguồn.** {Yêu cầu riêng} (ô Ăn uống, Phòng của DH08 R06), {Mã xác nhận}, {Bảng thay đổi}, {Lý do hủy} lấy từ DH08 (ticket 59–63); tới lúc đó trống khi xem trước nên cụm tùy chọn chứa chúng bị bỏ, ngoài cụm thì để trống (không bao giờ hiện `{…}`). Gợi ý dữ liệu của mục đích Điều chỉnh, Hủy (“hạng mục đã có lần đặt”) dùng cùng cách của Đặt dịch vụ cho tới khi DH08 có lần đặt.
- **Xem trước nội dung đang soạn (R13).** Màn gửi kèm tiêu đề, nội dung của bản ngôn ngữ đang có thay đổi chưa lưu; gửi thử khi đó ghi QT03 phiên bản “chưa lưu”. Gửi thử từ bảng trượt tạo mẫu (W09 trên màn tạo) ghi QT03 theo mã mẫu đang gõ.
- **Giới hạn 10 lần mỗi giờ (R13, E2.7).** Tính mọi lần gửi thử đã vào hàng đợi của người đó trong 60 phút gần nhất (kể cả lần Gmail từ chối sau đó); lần bị từ chối ngay (quá giới hạn, chưa kết nối hộp thư chung `MAILBOX_NOT_CONNECTED`) không tính. Tiền tố “[Gửi thử]” giữ nguyên với mọi ngôn ngữ của mẫu.
- **Kết quả gửi thử (E2.7).** Màn hỏi lại lần gửi cho tới khi Gmail nhận (“Đã gửi thử tới …”) hoặc lỗi (thông báo đỏ nêu lý do: dịch vụ email không sẵn sàng, Gmail không trả lời kịp, chưa kết nối hộp thư chung); không thử lại tự động. Lịch sử của mẫu (W30) có dòng gửi thử (email nhận, phiên bản), vì R16 ghi rõ “Lịch sử của mẫu: các phiên bản (R11) và sự kiện không đánh số: bật, tắt (kèm mẫu thay thế hoặc bị thay, nếu có), gửi thử”; W30 (“Danh sách phiên bản”) chỉ vẽ phiên bản, nên dòng gửi thử là sự kiện không đánh số xếp theo thời gian giữa các phiên bản, như dòng bật, tắt, và không có số phiên bản riêng (rà soát 17/11/2026 giữ nguyên, ghi câu nguồn).
- **Thẻ Xem trước chỉ cho người sửa (R13 “Người chỉ xem không có thẻ Xem trước”)**; API xem trước theo hợp đồng nhận QT04.xem.
- **Kết nối hộp thư chung (C2, G2, user story 184; sửa 19/11/2026, ticket 98, ADR 0004 mục “Sửa 19/11/2026”).** Cả hệ thống có **một** hộp thư gửi chung (bản ghi `mailbox_connections` duy nhất); email gửi NCC của mọi người dùng đi từ hộp thư này, CC người thao tác. Chỉ Quản trị hệ thống kết nối, trên trang “Hộp thư gửi chung của hệ thống” (`/shared-mailbox`, mục cùng tên ở menu tài khoản, chỉ hiện khi có QT01.xem); kết nối mới thay kết nối cũ (tài khoản Google khác thì token cũ bị thu hồi). Luồng OAuth: `POST /api/system/mailbox/connect` → trang đồng ý của Google (scope `openid email gmail.send`, offline, consent, PKCE S256, `state` dùng một lần, hạn 10 phút, lưu DB) → `GET /api/system/mailbox/oauth2callback` (công khai; cần đúng `state` và phiên đăng nhập của chính tài khoản đã bấm Kết nối trên trình duyệt đó, không thì từ chối và thu hồi quyền vừa cấp) → về trang với `?result=`. Địa chỉ gửi là tài khoản vừa đồng ý (`id_token`, `email_verified`); `gmail.address` của cấu hình tùy chọn, có thì chỉ tài khoản đó. Refresh token mã hóa AES-256-GCM bằng `gmail.tokenKey`, không in ra, không ghi log, không trả qua API, không vào QT03. Lệnh CLI `connect-gmail` đã bỏ.
  - **Chữ của trang (chưa có trong RSD; cách hiểu đã chọn 19/11/2026, ticket 98).** Tiêu đề và mục menu: “Hộp thư gửi chung của hệ thống”. Dòng phụ: “Một hộp thư Gmail duy nhất của công ty: email gửi NCC của mọi người dùng đều đi từ hộp thư này (người thao tác được CC).” Trạng thái (nhãn K6): “Chưa kết nối” (xám) kèm “Chưa gửi được email NCC cho tới khi Quản trị hệ thống kết nối hộp thư gửi chung.”; “Đã kết nối” (xanh lá) kèm “Đã kết nối {địa chỉ} lúc {dd/mm/yyyy hh:mm} bởi {người}”; “Cần kết nối lại” (đỏ) kèm “Google không còn chấp nhận quyền gửi của {địa chỉ} (đã bị thu hồi hoặc hết hạn). Email gửi NCC báo chưa kết nối hộp thư chung cho tới khi kết nối lại.” “Redirect URI đang dùng” + “Phải trùng với Authorized redirect URI của OAuth client trên Google Cloud.”; khi cấu hình có `gmail.address`: “Tài khoản được phép” + “Chỉ kết nối được {địa chỉ} (theo tệp cấu hình).” Nút: “Kết nối Gmail” (chưa kết nối), “Kết nối lại” và “Ngắt kết nối” (đã kết nối hoặc cần kết nối lại). Hỏi xác nhận: “Ngắt kết nối hộp thư {địa chỉ}?”, “Hệ thống thu hồi quyền gửi ở Google. Email gửi NCC của mọi người dùng sẽ không gửi được cho tới khi kết nối lại.”, nút “Quay lại”, “Ngắt kết nối”; xong: thông báo “Đã ngắt kết nối hộp thư gửi chung”. Sau khi Google quay về: thành công là thông báo “Đã kết nối hộp thư gửi chung {địa chỉ}”; từ chối là dải báo đỏ ở đầu trang: STATE_INVALID “Lần kết nối không hợp lệ hoặc đã dùng. Hãy bấm Kết nối Gmail lại.”, SESSION_MISMATCH “Trình duyệt này không đăng nhập bằng tài khoản Quản trị đã bấm Kết nối. Chưa kết nối; hãy đăng nhập đúng tài khoản rồi bấm Kết nối Gmail lại.”, STATE_EXPIRED “Lần kết nối đã quá 10 phút. Hãy bấm Kết nối Gmail lại.”, ACCESS_DENIED “Tài khoản Google đã từ chối cho phép gửi email. Chưa kết nối.”, GOOGLE_ERROR “Google báo lỗi khi kết nối. Hãy thử lại.”, SCOPE_MISSING “Chưa cho phép gửi email thay bạn. Hãy kết nối lại và đánh dấu quyền gửi email.”, SCOPE_EXTRA “Google cấp nhiều quyền hơn quyền gửi email và địa chỉ email. Hệ thống không lưu kết nối này.”, NO_REFRESH_TOKEN “Google không cấp quyền dùng lâu dài. Hãy gỡ TOPAS khỏi quyền truy cập của bên thứ ba trong tài khoản Google rồi kết nối lại.”, ID_TOKEN_INVALID “Google trả thông tin tài khoản không dành cho TOPAS. Chưa kết nối.”, EMAIL_UNVERIFIED “Không đọc được địa chỉ email đã xác minh của tài khoản Google. Chưa kết nối.”, ADDRESS_MISMATCH “Chỉ kết nối được tài khoản {địa chỉ}. Hãy chọn đúng tài khoản ở Google.”, FORBIDDEN “Tài khoản bấm Kết nối không còn là Quản trị hệ thống. Chưa kết nối.”, NOT_CONFIGURED “Tệp cấu hình chưa có mục gmail. Chưa kết nối.”, FAILED “Kết nối không thành công, chưa lưu gì. Hãy thử lại.”
  - **Cần kết nối lại.** Google trả `invalid_grant` (hoặc `unauthorized_client`) khi lấy access token: bản ghi được đánh dấu (`needs_reconnect_at`), lần gửi đó kết thúc lỗi “chưa kết nối hộp thư chung” (NOT_CONNECTED, không phải lỗi chung), các lần gửi sau bị từ chối ngay `MAILBOX_NOT_CONNECTED`; kết nối lại xóa dấu. Mục QT03: hành động Sửa trên đối tượng Cấu hình “Hộp thư gửi chung của hệ thống” (`SETTING SHARED_MAILBOX`, màn `MAILBOX`), trường “Hộp thư gửi chung” trước → sau (che như email).
  - **Lỗi cấu hình Google báo khi gửi (cách hiểu đã chọn 19/11/2026, ticket 98b).** Khi Gmail (`users.messages.send`) hoặc điểm lấy token của Google trả lỗi, log ghi mã HTTP, `error.status`, các lý do (`errors[].reason`, `details[].reason`) và `error.message` (hoặc `error_description`) cắt còn 300 ký tự; không ghi token, header Authorization, thân yêu cầu hay nội dung email. Ba lỗi cấu hình được nhận ra và lưu trên bản ghi hộp thư (`problem_code`, `problem_at` theo `CLOCK`): `API_DISABLED` (lý do `SERVICE_DISABLED` hoặc `accessNotConfigured`), `SCOPE_MISSING` (`ACCESS_TOKEN_SCOPE_INSUFFICIENT` hoặc `insufficientPermissions`), `CLIENT_INVALID` (điểm lấy token trả `invalid_client` hoặc `deleted_client`). `invalid_grant`/`unauthorized_client` vẫn là “Cần kết nối lại” như trên, không thêm lỗi cấu hình. Lần gửi đó vẫn kết thúc lỗi chung (ERROR); hộp thư vẫn “Đã kết nối”. Lỗi lưu lại tới lần gửi thành công kế tiếp hoặc lần kết nối lại (ngắt kết nối xóa luôn bản ghi). `GET /api/system/mailbox` trả thêm `problem: { code, at } | null`. Trang hiện dải báo đỏ dưới dòng trạng thái: API_DISABLED “Gmail API chưa được bật trong project Google Cloud của OAuth client. Bật Gmail API rồi gửi lại.”; SCOPE_MISSING “Kết nối hiện tại không có quyền gửi email (gmail.send). Bấm Kết nối lại và cho phép gửi email thay bạn.”; CLIENT_INVALID “Google không chấp nhận OAuth client trong tệp cấu hình (clientId hoặc clientSecret sai, hoặc client đã bị xóa). Sửa mục gmail của tệp cấu hình rồi khởi động lại hệ thống.”; dòng dưới: “Google báo lỗi này lúc {dd/mm/yyyy hh:mm}. Thông báo tự hết khi gửi email thành công hoặc kết nối lại.”

## Ticket 63 (17/11/2026): dòng đi kèm của `{ds_dich_vu}` và Ghi chú của Rooming list — cách hiểu đã chọn

- **“Số lượng và đơn vị” của dòng đi kèm (R04, AC57).** Đi kèm có dấu Giường phụ ghi số giường theo ngôn ngữ của bản: “1 giường” (Tiếng Việt), “1 bed” / “2 beds” (English), không dùng tên đơn vị tính QT05 (“Giường/đêm”, chỉ có tiếng Việt, và ngày dùng đã nằm trên dòng). Đi kèm khác ghi số lượng và tên đơn vị tính QT05 như dòng hạng mục.
- **Ngôn ngữ chữ “Giường phụ” của Rooming list (R03, R08, AC57 “bản English”).** Theo ngôn ngữ tài liệu của mẫu Rooming list (một ngôn ngữ mỗi mẫu, mặc định English), không theo ngôn ngữ giao dịch của NCC (ngôn ngữ giao dịch chỉ chọn bản email). Mẫu RL-01 khởi tạo giữ cột như cũ (không có Ghi chú): “muốn NCC thấy giường phụ thì Điều hành thêm cột Ghi chú vào mẫu”.
