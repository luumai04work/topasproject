# Ghi chú làm việc · RSD KD03-KD04 v1.4

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## 12/11/2026 · v1.2 · đồng bộ sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-KD03-KD04-Khach-hang-v1.2.md`; đã xóa md v1.1. Theo `BOI-CANH-DU-AN.md` (quyết định Q1 của người dùng 12/11/2026) và RSD KD05 v1.3, KD10 v1.1.

- **Nhóm yêu cầu (R08, 2.2, 2.6, AC44).** Đã có Booking chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu Đã hủy; cột Yêu cầu đang xử lý ở KD03 và số trên tab KD04.3 tính như KD05 R02. Dữ liệu minh họa không đổi: 4 Booking của Müller đều Hiệu lực.
- **Quản trị mở KD08, DH08 từ KD04, chỉ xem** (1.4, R03). Thay ý “Không” ở bảng quyền cũ.
- **Xóa khách (R05, 2.5, L5.1, E5.1, E5.2, AC27, AC28).** Điều kiện: chưa có yêu cầu Tour và chưa có lần gửi chiến dịch nào, kể cả Gửi lỗi; lý do chặn thêm “đã có n lần gửi chiến dịch”. Thiết kế tự quyết số 16 đọc theo câu mới.
- **Lịch sử Tour (R06, R07, L6.1, 2.2, AC44).** Hồ sơ kết thúc vì Booking đã hủy không ghi lịch sử, không tính Tour đã đi; Tour gần nhất và Cần chăm sóc sau Tour dùng ngày đóng lần đầu (thuật ngữ Ngày đóng Tour).
- **Lần gửi (2.6, R09, R11, AC42, AC45).** Kết quả Đang gửi, Đã gửi, Gửi lỗi; Survey thêm Hết hạn chưa phản hồi; chỉ báo Hủy nhận; khách tự hủy nhận ghi chiến dịch và lần gửi nguồn (RSD KD10 2.4, R12, R13).
- **Lối KD04.4 → KD10** mở tab Lịch sử gửi, ô tìm điền sẵn mã khách (1.2), khớp RSD KD10 1.2.
- **Tên tab** “Chăm sóc và phản hồi” (thay “Chăm sóc & phản hồi”) ở RSD và `screens-b-kd04.js`. Tab “Yêu cầu & Booking” giữ nguyên.
- **Wireframe.** Sửa `screens-b-kd04.js` (tên tab; hộp thoại W19 “chưa có lần gửi chiến dịch nào (kể cả Gửi lỗi)”; lý do W20 “6 yêu cầu Tour và 4 lần gửi chiến dịch”, Müller có 2 Survey + 2 email ở KD04.4) và `captions.js` (W19). Dựng lại W08–W26, W28–W31 (W27 là KD06, không có tab KD04). Đã xem W19, W20. Dòng thời gian W28–W31 không thêm ví dụ Đang gửi, Hết hạn chưa phản hồi, Hủy nhận (mô tả bằng chữ, AC45).
- **Kiểm tra.** `indent-images.js`, `sync-md.js`, `check-rsd.js --final`: 32 ảnh, 32 mã W, đạt.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD03 · Danh sách khách hàng và KD04 · Hồ sơ khách hàng; chưa có RSD nên viết mới; gộp một RSD ở `rsd/KD03-KD04/`; bàn giao MD + PNG trong ZIP như các RSD trước | Toàn bộ tài liệu |
| Q1 | Loại khách hàng | Hai loại: Cá nhân và Doanh nghiệp; doanh nghiệp có người liên hệ | R01, R02, W08, W09, W13 |
| Q2 | Hạng khách hàng (DX06) | Tạm bỏ qua | 1.3; bỏ lọc hạng ở KD03, hạng ở phần đầu KD04, tính hạng ở KD04.2 |
| Q3 | Quyền xem và sửa | Xem chung; chỉ người phụ trách sửa | R03, 1.4, W14, W31 |
| Q4 | Ai đổi người phụ trách | Người phụ trách hiện tại và Quản trị hệ thống; Quản trị đổi hàng loạt ở KD03 | R04, L4.1, L4.2, W06, W07, W17, W18 |
| Q5 | Khách không còn giao dịch hoặc tạo nhầm | Chỉ xóa hồ sơ chưa dùng; không có trạng thái ngừng giao dịch | R05, L5.1, W19, W20 |
| Q6 | Gửi Survey, Remarketing trên KD04 | Bỏ khỏi KD04; làm ở KD09, KD10 | 1.3, 2.4, KD04.4 chỉ xem lần gửi |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Trùng thì cảnh báo, cho lưu kèm lý do.** Nguồn ghi “cảnh báo trùng … trước khi lưu”; câu hỏi Q1 có phương án chặn nhưng người dùng chỉ trả lời phần loại khách. Tiêu chí trùng (R02): email hoặc điện thoại chuẩn hóa trùng với khách khác, kể cả người liên hệ của doanh nghiệp; doanh nghiệp thêm mã số thuế, hoặc tên chuẩn hóa cùng quốc gia. Không dùng tên khách cá nhân. Lý do tối thiểu 10 ký tự; cặp đã xác nhận không hỏi lại.
2. **Bỏ Xem thống kê khỏi KD04** cùng với Gửi Survey, Remarketing (Q6), vì QT06 là thống kê theo chiến dịch, không theo khách. KD04.4 đã hiện Survey và phản hồi của khách.
3. **Tạo yêu cầu Tour chỉ ở phần đầu hồ sơ.** Nguồn đặt thêm “Tạo yêu cầu mới” ở KD04.3; bỏ để giữ một thao tác một chỗ bấm. Trạng thái rỗng của KD04.3 chỉ tới nút ở phần đầu.
4. **Lịch sử Tour tự ghi, không có nút thường trực.** Theo RSD DH08 (đóng Tour ghi lịch sử ở KD04.2). Nút Cập nhật lịch sử của nguồn chỉ hiện khi có Tour đã đóng quá 5 phút chưa có mục (W23); đối soát hằng đêm.
5. **Chip Cần chăm sóc sau Tour** (thêm so với nguồn): Tour đóng gần nhất trong 30 ngày, chưa có ghi nhận chăm sóc thủ công từ ngày đóng lần đầu. 30 ngày do Quản trị cấu hình. Survey tự động không tính. Có số trên tab và banner ở KD04.4.
6. **Lịch sử Tour không hiện tiền** (giá trị Booking, doanh thu); chỉ Tour Code, Booking, thời gian, số khách, hành trình, dịch vụ đã sử dụng theo loại, ngày đóng.
7. **Trường của hồ sơ khách.** Chung: quốc gia hoặc quốc tịch, ngôn ngữ giao tiếp, nguồn khách, ghi chú và sở thích, nhận email chăm sóc, địa chỉ. Cá nhân: danh xưng, họ và tên, ngày sinh, email, điện thoại. Doanh nghiệp: tên, tên giao dịch, mã số thuế, website, email chung, điện thoại, bảng người liên hệ có đúng một liên hệ chính. Bắt buộc theo R01.
8. **Nhận email chăm sóc mặc định Không** (khách phải đồng ý); khách hủy nhận trong email KD10 thì tự chuyển Không (R11).
9. **Ngôn ngữ giao tiếp gợi ý theo quốc gia**, cần thêm cột ngôn ngữ mặc định ở danh mục quốc gia (QT05).
10. **Kết quả chăm sóc là danh mục QT05**: Hài lòng, Chưa hài lòng, Có nhu cầu Tour mới (giá trị hệ thống), Không liên lạc được, Khác. Kênh: Điện thoại, Email, Gặp trực tiếp, Tin nhắn, Khác. Kết quả Có nhu cầu Tour mới có nút Lưu và tạo yêu cầu Tour, điền Mong muốn bằng phản hồi của khách.
11. **Lưu và tạo yêu cầu Tour** khi tạo khách (gộp bước).
12. **Mã khách `KH-NNNNN`**, không dùng lại.
13. **Loại khách không đổi sau khi lưu**; đổi loại trong lúc tạo thì giữ các trường chung, email và điện thoại cá nhân thành người liên hệ đầu tiên.
14. **Quản trị hệ thống** xem KD03, KD04 chỉ đọc và chỉ chuyển phụ trách; không tạo, không sửa, không xóa.
15. **Chuyển phụ trách không đổi** người phụ trách của yêu cầu Tour, Booking, hồ sơ Tour; thông báo nội bộ cho người mới (gộp khi hàng loạt) và cho người cũ khi Quản trị chuyển. Hàng loạt có liên kết “Chọn tất cả n khách khớp bộ lọc”.
16. **Điều kiện “chưa dùng” để xóa**: không có yêu cầu Tour nào (kể cả đã hủy) và chưa có lần gửi chiến dịch nào ở KD10, kể cả Gửi lỗi (đã chốt, BOI-CANH; câu sửa ở v1.2). Xóa hẳn, nhật ký QT03 giữ mã, tên, người xóa.
17. **Ghi nhận chăm sóc**: người phụ trách hiện tại sửa, xóa mọi ghi nhận thủ công (kể cả do người phụ trách trước ghi); xóa có Hoàn tác 10 giây.
18. **Phạm vi mở liên kết**: mã yêu cầu luôn mở được (giả định KD05, KD06 không giới hạn theo người phụ trách); Booking và hồ sơ Tour ngoài phạm vi hiện khóa và tên người phụ trách.
19. **Tab đích**: từ chip Cần chăm sóc và từ KD10.2 mở KD04.4; còn lại KD04.1.
20. **Điều hành, Kế toán không truy cập KD03, KD04** (danh sách màn chỉ ghi Kinh doanh); thông tin khách họ cần đã có ở phần đầu KD08, DH08.
21. **Số trên tab**: Yêu cầu & Booking là số yêu cầu đang xử lý; Chăm sóc và phản hồi là 1 khi Cần chăm sóc. Lịch sử Tour không có số vì Tour đã đi đã ở phần đầu.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (KD03, KD04).** KD03: bỏ lọc theo hạng; thêm bộ lọc Loại, Quốc gia, Phụ trách, chip Khách của tôi và Cần chăm sóc sau Tour; thêm Quản trị hệ thống chuyển phụ trách hàng loạt. KD04: phần đầu bỏ hạng, Gửi Survey, Remarketing, Xem thống kê; thêm Chuyển phụ trách, Xóa khách hàng. KD04.1: ghi tiêu chí trùng (bỏ “chờ đặc tả”), hai loại khách, người liên hệ. KD04.2: đổi tên Lịch sử Tour, bỏ tính hạng, ghi tự ghi khi đóng Tour. KD04.3: bỏ nút Tạo yêu cầu mới (dùng nút ở phần đầu). KD04.4: bỏ câu Gửi Survey, Remarketing mở KD10. Cột Vai trò của KD03, KD04 thêm Quản trị hệ thống (chuyển phụ trách).
- **KD06, KD06.1.** Tạo nhanh khách dùng R01, R02 và hộp thoại trùng W11 của RSD này. Nhận điền sẵn khi mở từ KD04: khách hàng, người liên hệ (liên hệ chính), ngôn ngữ phục vụ (ngôn ngữ giao tiếp), Mong muốn (từ ghi nhận chăm sóc). Yêu cầu Tour cần trường Người liên hệ và Ngôn ngữ phục vụ, lưu tên người liên hệ tại thời điểm tạo. Bấm tên khách mở KD04.1. Xác nhận KD05, KD06 không giới hạn phạm vi theo người phụ trách.
- **KD09, KD10.** Chỉ gửi cho khách bật Nhận email chăm sóc; doanh nghiệp gửi tới email liên hệ chính; liên kết hủy nhận cập nhật trường này (R11). KD10.2 bấm khách mở KD04.4. KD10.1 phân nhóm không dùng hạng khách hàng (đã bỏ). Lần gửi và phản hồi Survey ghi theo mã khách để KD04.4 đọc.
- **DH08.** RSD DH08 v2.1 đã có ghi lịch sử khi đóng, mở lại Tour; bổ sung nội dung bản chụp theo R06 (số khách, dịch vụ không Đã hủy theo loại, không ghi giá) và việc ghi tự thử lại.
- **QT05.** Thêm danh mục Quốc gia (kèm ngôn ngữ mặc định), Nguồn khách, Kết quả chăm sóc (có giá trị hệ thống Có nhu cầu Tour mới).
- **QT02.** Thêm quyền Chuyển phụ trách khách (Kinh doanh: khách mình phụ trách; Quản trị: mọi khách, hàng loạt) và Xóa khách hàng.
- **QT01.** Tài khoản ngừng hoạt động vẫn hiện tên kèm “(ngừng hoạt động)” ở nơi đang là người phụ trách.
- **QT06.** Không còn mở từ KD04.
- **Quản trị.** Cấu hình cửa sổ chăm sóc sau Tour (mặc định 30 ngày).
- **Trung tâm thông báo.** Thông báo chuyển phụ trách (đơn và gộp).

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node của skill; máy chưa có Python nên chưa chạy `check-rsd.py`): 64 tham chiếu ảnh, 32 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`.
- Đã xem trực quan sau lần chụp cuối: W01, W03, W07, W12, W17, W23, W27, W31. Đã xem ở lần chụp đầu và sửa: W06, W07 (chip của Quản trị, số Tất cả sau khi chuyển), W13, W14, W16, W20 (header gọn một dòng, ô chọn chỉ đọc), W21 (số đêm khách sạn khớp 10N9Đ), W12, W19 (bỏ nhãn gợi ý sau khi lưu). Chưa mở lại sau lần chụp cuối: W02, W04, W05, W08–W11, W15, W18, W19a, W22, W24–W26, W28–W30 (cùng khung với ảnh đã xem).
- Số liệu đã đối chiếu: Khách của tôi 64, Tất cả 412, Cần chăm sóc 3 (Chen 30/10, Müller 05/11, Hanami 08/11; cùng nằm trong 30 ngày tính từ 11/11/2026); Van den Berg đóng 25/10 đã chăm sóc 27/10 nên không vào. Müller: 3 Tour đã đi; 6 yêu cầu = 1 Đang xử lý + 4 Đã có Booking + 1 Đã hủy (chip KD04.3, số trên tab, cột KD03, lý do không xóa ở W20); TP-2611-0042 và BK-2610-0137 khớp RSD DH08. KD04.4: 7 mục = 3 ghi nhận + 2 Survey + 2 email; sau khi lưu 8 = 4 + 2 + 2. Chuyển hàng loạt: 12 = 11 chuyển + 1 bỏ qua; sau đó Lê Thu Hà còn 0 khách. TP-2610-0031 10N9Đ: 3 + 2 + 3 đêm khách sạn + 1 đêm du thuyền = 9; 18 dịch vụ = 3 + 1 + 4 + 6 + 2 + 2.
- `rsd/BOI-CANH-DU-AN.md` đã thêm thuật ngữ, vai trò, chủ sở hữu dữ liệu khách hàng và các nguyên tắc đã chốt; bản cũ sao lưu ở `BOI-CANH-DU-AN.md.bak-20261111-kd03-kd04`.
- v1.1 (12/11/2026, chuyển sang khung 6 mục, không đổi nghiệp vụ): `indent-images.js`, `sync-md.js`, `check-rsd.js --final` bản mới của skill; 32 ảnh, 32 mã W, mỗi ảnh nhúng một lần, không cảnh báo. Tập ảnh và tập mã L, E, R, AC giống hệt v1.0.

## 12/11/2026 · v1.3 · rà soát lần hai

**Đã sửa (tệp mới `RSD-KD03-KD04-Khach-hang-v1.3.md`, đã xóa v1.2):**
- Đóng Tour là nút ở header DH08 (RSD DH08 R16), không còn ở tab DH08.8: sửa 1.2 (lối vào DH08 → KD04.2), 1.5 (truy vết SYS09.04), L6.1, AC30.
- R06: bỏ cụm “kể cả khi đóng sau quyết toán”, vì đóng Tour không cần quyết toán (RSD DH08 R16); quy tắc không ghi lịch sử cho hồ sơ kết thúc vì Booking đã hủy giữ nguyên.
- Nguồn nghiệp vụ: DH08 v2.6, KD08 v1.4. Không đổi nghiệp vụ khác, không đổi wireframe.

**Còn để nguyên, cần lưu ý:** 2.6, E6.1, R06, AC31 ghi “Điều hành mở lại Tour”; theo quyết định rà soát lần hai, Quản trị hệ thống cũng mở lại được khi hồ sơ không có người phụ trách hoặc người đó ngừng hoạt động (RSD DH08 R16). Tác động ở KD04 giống nhau nên chưa sửa.

## 12/11/2026 · v1.4 · rà soát mâu thuẫn lần ba

**Đã sửa (tệp mới `RSD-KD03-KD04-Khach-hang-v1.4.md`, đã xóa v1.3):**
- **Bảng quyền 1.4, dòng Mở DH08, KD08 từ KD04.** “Có, chỉ xem” lệch R03 (Quản trị chuyển người phụ trách Booking theo RSD KD08). Đối chiếu RSD KD08 v1.5 R11: người phụ trách hiện tại và Quản trị hệ thống chuyển được từng Booking. Sửa thành “Có, chỉ xem; chuyển người phụ trách Booking ở KD08”.
- **R13.** Danh mục quốc gia (kèm ngôn ngữ mặc định) thuộc Kinh doanh, danh mục ngôn ngữ thuộc Điều hành, theo RSD QT05 mục 1.5 và BOI-CANH (Quản trị sửa mọi nhóm). Trước ghi chủ sở hữu là Quản trị hệ thống.
- **5.2 thêm trường Ghi chú nguồn đồng ý.** R11 đã đòi ghi chú khi bật lại Nhận email chăm sóc sau khi khách tự hủy nhận nhưng 5.2 chưa có trường. Tự quyết: chỉ hiện và bắt buộc trong trường hợp đó, tối đa 300 ký tự, lưu vào lịch sử hồ sơ cùng lần bật. Không vẽ thêm hình (trường chỉ hiện có điều kiện; W hiện có không ở trạng thái này).
- **Mở lại Tour (2.6, E6.1, R06).** Mục “Còn để nguyên” ở v1.3 cho thấy giữ chữ “Điều hành mở lại Tour” là chủ ý cho ngắn, nhưng nay Quản trị hệ thống cũng mở lại được (RSD DH08 R16) nên chữ cũ dễ hiểu sai là chỉ Điều hành. Đổi thành “khi hồ sơ được mở lại ở DH08 (RSD DH08 R16)”. AC31 giữ “Điều hành mở lại” vì là kịch bản kiểm thử cụ thể; dữ liệu minh họa trên W22 (“Điều hành mở lại 10/11/2026”) giữ. Chú thích W22 ở `captions.js` đổi thành “Tour được mở lại ở DH08”; đã chạy `node build.js W22` và `sync-md.js`. Mục “Còn để nguyên” ở trên coi như đã xử lý.
- **Nguồn nghiệp vụ:** DH08 v2.8, KD05 v1.4, KD08 v1.5, KD10 v1.2; thêm QT05 v1.2. Dẫn chiếu phiên bản trong các mục “Thay đổi ở v1.2, v1.3” (DH08 v2.4, v2.7, KD05 v1.3, KD08 v1.4) là lịch sử, giữ nguyên.
- `check-rsd.js RSD-KD03-KD04-Khach-hang-v1.4.md --final`: 32 ảnh, 32 mã W, không cảnh báo.
