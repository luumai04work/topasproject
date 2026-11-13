# Ghi chú làm việc · RSD DH07 v1.8

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Cập nhật 12/11/2026 theo quyết định phase coding

**Tệp:** `git mv` v1.7 → `RSD-DH07-Danh-sach-ho-so-Tour-v1.8.md`. Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md` (bản sửa 12/11/2026), ADR 0001, 0002, 0006. Không đánh số lại L, E, R, W, AC; mục bỏ để lại dòng “Bỏ theo Q5/Q1”.

**Đã sửa:**
- *Q5:* hồ sơ tạo trong cùng giao dịch lưu Booking; lỗi thì Booking không được lưu, KD08 báo lỗi. Bỏ tình trạng Tạo lỗi, tự thử lại 3 lần, nút Thử lại, dải và bảng trượt Booking chờ (W08), trường cách tạo, bảng Lần tạo lỗi, số đã thu (chỉ dùng ở W08), lối DH07 → KD08 qua W08. Bỏ L2.1, L2.3, E1.3, E2.2, E2.6–E2.9, AC07, AC15, AC43. Viết lại 1.1, 1.2, 1.3, 2.1, 2.5 (đổi tên “Tạo hồ sơ cùng Booking”), 2.7, L1.1, E1.1, E1.2, R01, R05, R09 (bỏ dòng Tạo lỗi), R11 (gộp hai dòng nhóm Tạo lỗi), 5.1, AC01, AC06, AC08.
- *Q1:* 1.4 thành “Quyền mặc định theo vai trò”, cấu hình ở QT02; Kinh doanh, Kế toán, Quản trị xem mọi hồ sơ, chỉ xem; giao người phụ trách là thao tác Chuyển phụ trách ở QT02, mặc định Điều hành. Bộ lọc Phụ trách mặc định Của tôi (2.3). Bỏ E3.3. Mở lại Tour theo quyền, có thể chọn người phụ trách mới (E4.5, R08, AC46; RSD DH08 v2.9 R16). Sửa 1.2, 2.1, 2.2, L3.1, L3.4, L5.4, R10, AC16, AC25, AC34, AC38, AC45.
- *Q7:* R02 cho phép thủng số; tiền tố là tham số chung QT05, mặc định TP; R12.
- *Q2, C2:* “thông báo nội bộ” → thông báo trong ứng dụng (1.3, L1.1, 5.3); số hàng tối đa ở Lịch, số hồ sơ tối đa vẽ trên Lịch chuyển sang tệp cấu hình hoặc dữ liệu khởi tạo (R12).
- *Q3:* bỏ “suy ra, chờ xác nhận” ở R10, AC44. Các mục “Tự quyết, cần xác nhận” bên dưới coi là **chấp nhận mặc định (Q3)**.
- *U3:* bộ lọc nhớ theo người dùng, cả sau khi đăng xuất (1.2, 2.3, R10, 5.1). *U2:* giao người làm ngay, thông báo ngắn có Hoàn tác (2.7). *Q8:* không có nút ghi đè (2.7). *K6:* “NCC ngừng sử dụng” → “NCC ngừng dùng” (E1.4, R03, 5.1, AC13).

**Tự đơn giản hóa giao diện (U6):**
- Bộ lọc Phụ trách mặc định Của tôi chỉ với vai trò có hồ sơ mình phụ trách ở màn này (Điều hành; Kinh doanh theo Booking); Kế toán, Quản trị mặc định Tất cả, vì Của tôi với họ luôn rỗng.
- Nút Thử lại khi lỗi tải danh sách hoặc cột Kanban đổi thành Tải lại (E3.1, E5.2, AC27). Giữ “Thử lại” ở E4.4 (lỗi lưu tại chỗ), vì không phải nút Thử lại tạo hồ sơ của Q5.
- Tiêu đề “Chỉ xem” hiện theo quyền, không theo tên vai trò (2.1).

**Hình chưa cập nhật (đã ghi dưới hình):** W01 (dải Booking chờ, bộ lọc Phụ trách Tất cả), W02–W07, W13, W15–W17 (dải Booking chờ; W13 còn câu nhắc mục Booking chờ), W14 (nút Thử lại). W08 không còn được nhúng trong RSD; tệp `wireframes/W08.png` và `wireframes-src/html/W08.html` vẫn còn vì không sửa wireframe trong lượt này.

**Câu hỏi cho người dùng:**
- W08 (bảng trượt Booking chờ) không còn dùng: có xóa tệp ảnh và khóa W08 trong `captions.js`, `screens-dh07.js` khi dựng lại wireframe không (mã W08 không dùng lại).
- Bộ lọc Phụ trách mặc định Của tôi làm Điều hành mở DH07 không thấy hồ sơ chưa giao (trước đây mặc định Tất cả). Lối vào từ thông báo vẫn lọc Chưa có người phụ trách. Có muốn Điều hành mặc định Tất cả hoặc Của tôi + Chưa có người phụ trách không (đổi luồng làm việc hằng ngày nên không tự quyết).

## Bổ sung ở v1.2 · Dạng xem Bảng, Kanban, Lịch (11/11/2026)

**Đã chốt với người dùng:** DH07 có thêm Kanban và Lịch; không kéo thả ở bất kỳ dạng xem nào.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):**
- Kanban bốn cột theo trạng thái hồ sơ; Đã đóng thu gọn mặc định (38 hồ sơ sẽ lấn át ba cột còn lại).
- Điều hành vẫn giao người phụ trách tại chỗ trên thẻ Kanban (cùng R08, không phải kéo thả). Giao hàng loạt chỉ ở Bảng.
- Lịch có hai chế độ: Theo người phụ trách (dòng thời gian, mặc định của Điều hành) và Tháng (mặc định của Kinh doanh, Kế toán). Dòng thời gian không có thao tác giao.
- Thứ tự hàng ở dòng thời gian: Chưa có người phụ trách, người đang thao tác, rồi theo số hồ sơ đang mở giảm dần.
- Lối vào từ thông báo luôn mở Bảng.
- Bổ sung dữ liệu minh họa hai hồ sơ Mới tạo không hiện ở trang 1 của Bảng: TP-2611-0055 Lindgren Resor (Lê Quang Huy), TP-2612-0006 Park Family (Đỗ Văn Khoa), để khớp tải 13 hồ sơ đang mở ghi ở đầu `screens-dh07.js`.

**Kiểm tra v1.2:** `check-rsd.js --final`: 38 tham chiếu ảnh, 19 mã W, không cảnh báo. Đã chụp lại W01–W18 (W01–W14 có thêm bộ chuyển dạng xem); đã xem W15–W18. Số liệu: Kanban 9 + 2 + 2 = 13 = chip Đang mở; Đã đóng 38. Dòng thời gian: chưa giao 4 (3 trong khoảng + Almeida 12/12), Trần Minh Anh 3, Lê Quang Huy 3, Phạm Thu Hà 2, Đỗ Văn Khoa 1, khớp W04. W18: 4 hồ sơ của Kinh doanh khớp W12. Chưa có ảnh riêng cho cột Đã đóng mở rộng, lỗi một cột, dòng thời gian rỗng (mô tả bằng chữ).

**Màn khác:** RSD DH08 không cần đổi. RSD KD05 v1.1 dùng cùng bộ thành phần `wireframes-src/views.js`.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết | Người dùng ghi “HD07”; danh sách màn không có mã này, nên người viết hiểu là DH07 · Danh sách hồ sơ Tour. Viết mới; bàn giao MD + PNG trong ZIP như DH08 | Toàn bộ tài liệu |
| Q1 | Quy tắc sinh Tour Code (DX04) | Tiền tố + YYMM + STT | R02, AC05 |
| Q2 | Cách tạo hồ sơ | Hệ thống tự tạo hồ sơ khi Booking được tạo và đáp ứng điều kiện thanh toán (nếu có). **Thay cho** nút Tạo từ Booking và câu “không yêu cầu thanh toán” của nguồn | L1.1, R01, R05, AC01–AC08 |
| Q3 | Điều kiện thanh toán | Theo từng Booking, thiết lập ở KD08.2 (đợt phải thu đủ, hoặc Không chờ thanh toán) | R01 |
| Q4 | Booking chưa đủ điều kiện | Hiện ở DH07 và cho Tạo sớm, lý do bắt buộc | L2.1, L2.2, R06, W08–W10 |
| Q5 | Người phụ trách hồ sơ tự tạo | Để trống; giao tại DH07 (tại chỗ hoặc hàng loạt), có thông báo | L4.1–L4.3, R08, R09 |

## Thiết kế do người viết tự quyết, cần xác nhận (chấp nhận mặc định, Q3)

1. **Dạng Tour Code `TP-YYMM-NNNN`.** Khi hỏi, ví dụ ghi STT 3 chữ số (`TP2612-001`). Bản này dùng dấu gạch nối và 4 chữ số để khớp ảnh và dữ liệu của RSD DH08 (`TP-2611-0042`). YYMM là tháng **khởi hành**; STT đếm lại mỗi tháng; Tour Code không đổi khi ngày khởi hành đổi. *Đã đóng (12/11/2026):* 4 chữ số đã chốt 11/11/2026, ghi ở `BOI-CANH-DU-AN.md` (thuật ngữ Tour Code); không còn hỏi.
2. **Điều kiện mặc định cho Booking mới là Thu đủ đến đợt 1**, Quản trị đổi được. Lý do: Booking được tạo trước khi Kinh doanh lập lịch thanh toán (SYS04.02 rồi SYS04.03). Nếu mặc định là “không có điều kiện”, hồ sơ sẽ luôn được tạo ngay khi tạo Booking và điều kiện thanh toán không bao giờ có tác dụng. Booking chưa có lịch thanh toán thì chờ.
3. **“Thu đủ đến đợt n” tính lũy kế** từ đợt 1 đến đợt n, theo khoản thu có liên kết đợt ở KT01.1.
4. **Hồ sơ không bị xóa** khi giao dịch thu bị hủy sau khi tạo (E1.6; từ v1.4, KT01 không cho sửa số tiền, xóa giao dịch).
5. **Tự thử lại 3 lần** (1, 5, 15 phút) khi tạo lỗi, rồi đưa vào nhóm Tạo lỗi. Bỏ theo Q5 ở v1.8.
6. **Hạng mục của NCC đã tắt** vẫn được tạo, để trống NCC (E1.4). Không có mẫu checklist thì checklist rỗng (E1.5).
7. **Chip Đang mở là mặc định**, gồm Mới tạo, Đang diễn ra, Đã kết thúc; Đã đóng tách riêng.
8. **Tab đích khi mở từ DH07** theo trạng thái: Đã kết thúc mở DH08.8 cho mọi vai trò (R10).
9. **Cột Cần xử lý** dùng R01 của DH08 cho hồ sơ Mới tạo (R07).
10. **Danh sách người được giao** xếp người khớp ngôn ngữ trước, rồi theo số hồ sơ đang mở; chỉ gợi ý, không tự giao.
11. **Ngưỡng nhắc chưa giao 7 ngày**, nhắc 08:00 mỗi ngày cho đến khi được giao.
12. **Thông báo tạo sớm** gửi Kinh doanh phụ trách Booking và nhóm Kế toán. Chỉ báo Tạo sớm tự mất khi Booking đạt điều kiện.
13. **Tạo sớm điền sẵn người thao tác làm phụ trách**; đổi được hoặc để trống.
14. **Kinh doanh và Kế toán không thấy dải Booking chờ** trên DH07.
15. **Không có xuất Excel** danh sách (nguồn không yêu cầu).

## Thay đổi cần làm ở màn khác

- **Danh sách màn (DH07, TN05.02).** Bỏ nút “Tạo từ Booking” và câu “Không yêu cầu Booking đã thanh toán đủ”; thay bằng tự tạo theo điều kiện thanh toán và Tạo sớm. DX04 đã có quy tắc.
- **KD08.2.** Thêm trường **Điều kiện tạo hồ sơ Tour** (Không chờ thanh toán / Thu đủ đến đợt n), mặc định theo cấu hình. Lưu trường này phát sự kiện kiểm tra R01.
- **KD08.1.** Khi chưa có hồ sơ: thay “Điều hành tạo tại DH07” bằng “Hồ sơ Tour tự tạo khi thu đủ đợt n · còn thiếu …”, hoặc “Đã tạo sớm …”. Kinh doanh nhận thông báo khi hồ sơ được tạo.
- **KD07.** Bộ lọc “đã có hồ sơ Tour” thêm giá trị “Chờ đủ điều kiện”.
- **KT01.1.** Lưu, sửa, xóa khoản thu có liên kết đợt phát sự kiện kiểm tra R01. Kế toán nhận thông báo hồ sơ tạo sớm.
- **RSD DH08 v2.0.**
  - Mục 1.2 và 2.4: tác nhân tạo hồ sơ đổi thành “Hệ thống tự tạo (R01 của DH07) hoặc Điều hành Tạo sớm”.
  - Header: Điều hành phụ trách có thể trống, hiện “Chưa có”.
  - Lịch sử: hiện cách tạo và lý do tạo sớm.
  - Mục 4.1: thêm trường cách tạo.
- **DH06.** Trường Ngôn ngữ (đã ghi ở DH08) và liên kết tài khoản (QT01) dùng cho danh sách giao người.
- **DH01.** Hạn công việc theo khoảng ngày so với ngày khởi hành (R04).
- **Quản trị.** Cấu hình tiền tố Tour Code, điều kiện mặc định cho Booking mới, ngưỡng nhắc hồ sơ chưa giao. Phân quyền QT02 thêm thao tác Tạo sớm và Giao người phụ trách.
- **Trung tâm thông báo.** Bốn loại thông báo ở R09.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node của `check-rsd.py`; chưa chạy bản Python): 30 tham chiếu ảnh, 15 mã W, không lỗi bảng hay đường dẫn, không còn nhãn chưa chốt. Mọi bước ở mục 3 có mã W; mọi mục con có ngoại lệ.
- Đã xem trực quan 13/15 ảnh (W01, W02, W04–W13). Chưa mở W03 (cùng bố cục với W04, không có danh sách thả xuống) và W14 (khung lỗi đơn giản).
- ZIP `docs/rsd/DH07-RSD-v1.0.zip` (RSD và thư mục `wireframes/`, đường dẫn dùng `/`) đã được giải nén thử và chạy lại `check-rsd`: mọi ảnh mở được.
- Đã sửa: Xóa bộ lọc bị lặp (thanh lọc và vùng bảng rỗng) ở W07, W13; W09 và W09a vẽ hộp thoại trên bảng trượt W08 cho đúng ngữ cảnh.
- Số liệu đã đối chiếu: Đang mở 13 = 9 + 2 + 2; Chưa có người phụ trách 4; số hồ sơ đang mở trên W04 khớp danh sách; sau tạo sớm 14 = 10 + 2 + 2; dải Booking chờ 4 → 3.

## Cập nhật v1.1 (11/11/2026) · đồng bộ RSD DH01 v1.0

- Đổi tên tệp thành `RSD-DH07-Danh-sach-ho-so-Tour-v1.1.md`; bản v1.0 sao lưu ở `docs/rsd/_backup-20261111-truoc-dong-bo-DH01/`.
- R04 viết lại: một mẫu theo loại Tour, rơi về Mẫu mặc định; không gộp mẫu; ghi phiên bản mẫu; hạn theo ba mốc của DH01.
- E1.5, AC14: thay checklist rỗng bằng Mẫu mặc định.
- Mục 4.1 (từ v1.3 là mục 5.1): công việc checklist thêm phiên bản mẫu, ID công việc mẫu, ID hạng mục, hướng dẫn, người thực hiện.
- R08, L4.1, AC29 (mới): giao người phụ trách lần đầu điền người thực hiện cho việc có Giao người phụ trách.
- R12: dòng Mẫu checklist thêm loại Tour của Booking; khi thiếu dùng Mẫu mặc định.
- W09, W09a: ví dụ đổi thành 15 công việc từ mẫu Customized riêng tư v2 (Lefebvre Famille là Booking Customized trong DH01 W12). Đã chụp lại và xem W09.
- Mục “Thay đổi cần làm ở màn khác” → DH01: đã đáp ứng trong RSD DH01 (R03).
- `check-rsd.js --final`: 30 tham chiếu ảnh, 15 mã W, đạt.

## Cập nhật v1.3 (12/11/2026) · khung 6 mục

- Tệp mới `RSD-DH07-Danh-sach-ho-so-Tour-v1.3.md`; bản v1.2 nằm trong ZIP đã bàn giao, đã xóa md cũ. Không đổi nghiệp vụ.
- Số mục mới: quy ước dùng chung là mục 2.7 (gộp 8.1 và 4.3 cũ); quy tắc R là mục 4 (mục 7 cũ); dữ liệu là mục 5 (4.1, 4.2 cũ → 5.1, 5.2; 8.6 cũ → 5.3); nghiệm thu là mục 6 (mục 5 cũ). Bỏ mục 6 Wireframe và 8 Đặc tả thao tác cũ; nội dung gộp vào bước luồng.
- `check-rsd.js --final`: 19 ảnh, 19 mã W, đạt; tập ảnh và mã L, E, R, AC khớp bản v1.2.

## 12/11/2026 · v1.4 · đồng bộ sau rà soát mâu thuẫn giữa các RSD

- Tệp mới `RSD-DH07-Danh-sach-ho-so-Tour-v1.4.md`; đã xóa md v1.3. Không đổi wireframe (không hình nào có chữ đổi); không thêm, bỏ mã R, W, AC.
- Mục 1.2, R01, E1.6: sự kiện kiểm tra điều kiện tạo hồ sơ là lưu hoặc hủy giao dịch thu, phân bổ lại, Dùng tiền thừa ở KT01 (RSD KT01 R06, R12 không cho sửa số tiền, xóa giao dịch) và sửa lịch thanh toán ở KD08.2.
- R03, R07, mục 5.1: phiên bản chương trình ban đầu mang số phiên bản báo giá của Booking (không phải v1); “Xem thay đổi chương trình vN” dùng số phiên bản báo giá mới.
- R07, AC28: “Gửi hủy n NCC” khi hồ sơ Đang diễn ra chỉ tính dịch vụ chưa dùng (theo RSD DH08 R14 bản v2.4 đang sửa song song; cần đối chiếu câu chữ khi DH08 v2.4 xong).
- Mục 1.3, R11: thay đổi Booking diễn đạt theo quyết định Q2 (tính giá lại ở KD06 chế độ điều chỉnh, Chuyển sang Điều hành ở KD08); bỏ “sửa hành trình, số khách, ngày” trực tiếp ở KD08.
- Mục 1.4, R09, E5.7: người nhận thông báo nhóm Điều hành theo RSD DH06 R03 (Đang nhận phân công, tài khoản liên kết đang hoạt động); nhãn “Không nhận phân công”.
- Mục 1.4, R10, R13: thêm cột Quản trị hệ thống: xem mọi hồ sơ, chỉ xem, mở DH08 theo phạm vi DH08; Lịch mặc định Tháng. *Tự quyết, cần xác nhận* (như KD07); thay bằng Q1, Q25 ở v1.8.
- Mục 2.4, nguồn nghiệp vụ: tham chiếu RSD DH08 v2.4, DH01 v1.2, DH06 v1.2, KD08 v1.2, KT01 v1.2. Mục 2.5, L1.1: Booking tạo ở KD08 (thay “KD06.3”).
- Câu hỏi 3 hay 4 chữ số Tour Code: đã đóng (mục Thiết kế tự quyết, số 1).
- Mục “Thiết kế tự quyết” số 4: sửa thành giao dịch thu bị hủy (E1.6).
- `check-rsd.js --final`: 19 ảnh, 19 mã W, đạt.

## 12/11/2026 · v1.5 · tự tạo hồ sơ khi lưu Booking, bỏ Tạo sớm, quyết toán không chặn Đóng Tour

**Quyết định của người dùng (12/11/2026), yêu cầu riêng của doanh nghiệp:** (1) không có luồng duyệt; (2) Kế toán không làm chốt chặn cho Kinh doanh và Điều hành. Hệ quả cho DH07:
- Hồ sơ Tour tự tạo ngay khi Booking được lưu ở KD08 (Booking Hiệu lực), không chờ thanh toán. **Thay** Q2, Q3, Q4 ở bảng quyết định 11/11/2026 (tự tạo theo điều kiện thanh toán, điều kiện theo từng Booking ở KD08.2, Tạo sớm). Các mục 2, 3, 12, 13 của “Thiết kế do người viết tự quyết” và các dòng KD08.2, KD08.1, KD07, KT01.1 ở “Thay đổi cần làm ở màn khác” không còn hiệu lực.
- Đóng Tour chỉ cần hồ sơ Đã kết thúc; quyết toán lưu được khi Đã kết thúc hoặc Đã đóng (RSD DH08 v2.5 R16). Ở DH07: Cần xử lý của hồ sơ Đã kết thúc là “Chờ đóng Tour”; “Chưa quyết toán” thành chỉ báo riêng.

**Đã sửa (tệp mới `RSD-DH07-Danh-sach-ho-so-Tour-v1.5.md`, đã xóa v1.4):**
- R01 viết lại: tạo ngay khi lưu Booking, giao dịch riêng, không xét thanh toán; KT01 và KD08.2 không kích hoạt tạo. R12 bỏ dòng điều kiện mặc định. Mục 5.1 bỏ “Điều kiện tạo hồ sơ (đọc)”; “Số đã thu của Booking (đọc)” chỉ để tham khảo ở W08.
- Bỏ Tạo sớm: L2.2, E2.1, E2.3, E2.4, E2.5, R06, AC09–AC12, W09, W09a, W10 (PNG và HTML đã xóa, bỏ khỏi `captions.js`). Mã bỏ giữ dòng “Bỏ ở v1.5” để không dùng lại.
- Dải và bảng trượt W08 chỉ còn nhóm Tạo lỗi; giữ đường Tạo lỗi + Thử lại (E1.1, L2.3, R05). E2.2, E2.6, E2.7, E2.8 đổi sang ngữ cảnh Thử lại; thêm E2.9, AC43 (Thử lại khi Booking vừa có hồ sơ).
- AC01, AC02, AC08, AC15 viết lại; AC03, AC04 bỏ.
- Quyết toán: R07 (Đã kết thúc → “Chờ đóng Tour”), mục 2.4 thêm chỉ báo Chưa quyết toán, mục 2.3 bộ lọc Quyết toán xét cả Đã đóng, L3.3 thêm bước 3, AC42.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):**
- R10, AC44: Kế toán bấm hồ sơ Đã đóng chưa quyết toán thì mở thẳng DH08.8 (vai trò khác vẫn mở DH08.1 chỉ đọc). Ghi “suy ra, chờ xác nhận” trong RSD.
- Giữ cả chỉ báo Đã quyết toán và Chưa quyết toán (mỗi hồ sơ Đã kết thúc, Đã đóng có đúng một trong hai).
- R01: tạo hồ sơ chạy trong giao dịch riêng sau khi Booking đã lưu, lỗi không làm hỏng việc lưu Booking (giữ cách cũ của E1.1). Trong 3 lần tự thử lại, Booking chưa hiện ở W08.
- W08 giữ cột “Đã thu (tham khảo)” theo yêu cầu “tình trạng thu tiền đang hiện thì giữ”.
- Dữ liệu minh họa: Booking tạo lỗi đổi mã thành BK-2611-0157 (trước trùng mã BK-2611-0150 với hồ sơ Park Family); bỏ chỉ báo Tạo sớm ở Lefebvre, Dupont; Wagner Gruppe có Cần xử lý “Chờ đóng Tour” và chỉ báo Chưa quyết toán.

**Wireframe:** sửa `screens-dh07.js` (dải, W02, W08, W13, dữ liệu Wagner; bỏ W09, W09a, W10), `captions.js` (W01, W02, W08). Dựng lại W01–W08, W11, W13, W15, W16, W17 bằng `node build.js …`; đã xem W01, W08, W11. Chạy `sync-md.js`, `indent-images.js`.

**Kiểm tra:** `check-rsd.js --final`: 16 ảnh, 16 mã W, đạt; cảnh báo “W cited without image: W09, W09A, W10” chỉ do các dòng lịch sử thay đổi (v1.1, v1.5) nhắc mã đã bỏ.

**Ngoài phạm vi, cần đồng bộ:** RSD DH02 v1.2, DH06 v1.2, QT04 v1.0 (và GHI-CHU DH02, DH06) còn dẫn DH07 v1.4, DH08 v2.4, DH01 v1.2.

## 12/11/2026 · v1.6 · rà soát lần hai

**Đã sửa (tệp mới `RSD-DH07-Danh-sach-ho-so-Tour-v1.6.md`, đã xóa v1.5):**
- Đóng Tour và Mở lại Tour là nút ở header DH08 (RSD DH08 R16), không còn ở tab DH08.8: sửa E4.5, E5.1, R14, nguồn chỉ báo Đã mở lại ở mục 2.4. Lý do: DH08 v2.5 đã chuyển Đóng Tour thành nút ở header; DH07 còn ghi cũ.
- Tab đích khi mở hồ sơ: mục 1.2, L3.2, AC19 trước ghi “Đã đóng → DH08.1” cho mọi vai trò, lệch R10 và AC44 (Kế toán mở hồ sơ Đã đóng chưa quyết toán → DH08.8). Thống nhất theo R10; trường hợp khác giữ nguyên.
- Người phụ trách ngừng hoạt động (RSD QT01 R03; BOI-CANH “Ngừng hoạt động”): ô Phụ trách hiện tên kèm “(ngừng hoạt động)” (mục 2.2, R08). Hồ sơ chưa đóng: Điều hành giao lại ở DH07 như hiện có. Hồ sơ Đã đóng: không giao lại ở DH07; Quản trị hệ thống Mở lại Tour ở DH08 kèm chọn người phụ trách mới (người dùng chốt, rà soát lần hai; RSD DH08 R16). Quản trị vẫn chỉ xem ở DH07. Sửa E4.5, R08; thêm AC45, AC46.
- Mục 5.1: cách tạo (Tự động hoặc Thử lại) và người bấm Thử lại giữ; ghi là dữ liệu của hồ sơ do DH08 sở hữu (DH08 v2.6 thêm lại vào DH08 5.1), DH07 ghi khi tạo.
- R09, R12: ngưỡng nhắc hồ sơ chưa giao là tham số chung QT05 (RSD QT05 R17), thay “Quản trị”.
- W08 giữ cột số đã thu (tham khảo); KT01 v1.4 thêm lại DH07 vào danh sách màn đọc số liệu.
- Nguồn nghiệp vụ: DH08 v2.6, KD08 v1.4, KT01 v1.4, thêm QT01 v1.1, QT05 v1.1.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):** nhãn “(ngừng hoạt động)” áp cả trên thẻ Kanban và hàng của người đó ở Lịch theo người phụ trách (R08), theo nguyên tắc “các màn hiện tên kèm (ngừng hoạt động)” ở BOI-CANH.

**Wireframe:** không dựng lại (giao diện không đổi; nhãn “(ngừng hoạt động)” không có trên hình hiện tại).

## 12/11/2026 · v1.7 · rà soát lần ba

- **E4.5, R08 (giao người cho hồ sơ Đã kết thúc).** Bản cũ ghi “giao ở DH07 hoặc DH08.1” cho cả hồ sơ vừa Mở lại Tour (về Đã kết thúc) và mọi hồ sơ chưa đóng. Đã kiểm tra RSD DH08: header ở Đã kết thúc chỉ có Đóng Tour, Thông tin điều hành chỉ có ở Mới tạo và Đang diễn ra; DH08 không có lối nào khác để đổi người phụ trách ở Đã kết thúc (W78 chỉ dùng cho hồ sơ Đã đóng). Sửa: hồ sơ Đã kết thúc chỉ giao ở DH07; DH08.1 cho Mới tạo, Đang diễn ra.
- **Mục 2.2, 2.6, AC47 (chỉ báo Không nhận phân công).** Theo RSD DH06 R05 (dòng “chỉ báo vàng Không nhận phân công ở DH07 cột Phụ trách”) và DH06 AC21. Trước đây DH07 chỉ có chỉ báo này ở hàng Lịch (E5.7). Thêm vào cột Phụ trách và ô Phụ trách trên thẻ Kanban.
- **R08, mục 5.2.** Điều kiện danh sách chọn người phụ trách ghi đủ “tài khoản liên kết đang hoạt động và có vai trò Điều hành” theo RSD DH06 v1.3 R03 (rà soát lần ba), khớp định nghĩa ngừng hoạt động ở RSD QT01 R03.
- **Quyết định A của người dùng (thời gian, số khách đổi khi Điều hành Áp dụng ở DH08).** Kiểm tra R03 (sao chép từ Booking khi tạo) và R11 (thời gian trên dòng đổi sau khi Điều hành áp dụng): đã khớp, giữ nguyên. Cột Khách và Thời gian ở mục 2.2 ghi nguồn “Từ Booking” có thể hiểu là đọc Booking trực tiếp; đổi sang “Hồ sơ Tour” để khớp R11 và RSD DH08 v2.8.
- **Phiên bản.** Nguồn nghiệp vụ dẫn DH08 v2.8, DH01 v1.4, DH06 v1.3, KD07 v1.3, KD08 v1.5, KT01 v1.5, QT01 v1.2, QT05 v1.2; mục 2.4 dẫn RSD DH08 v2.8 mục 2.2. Dẫn phiên bản trong các mục “Thay đổi ở v1.5, v1.1” là lịch sử, giữ nguyên.

**Wireframe:** không dựng lại (không hình nào hiện người phụ trách Không nhận phân công; giao diện khác không đổi).

**Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH07-Danh-sach-ho-so-Tour-v1.7.md --final`: không lỗi.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** 1.4, R09: người nhận thông báo nhóm Điều hành có vai trò Điều hành (RSD DH06 v1.3 R03).

## Sửa sau rà chéo 12/11/2026

- **Bộ lọc Việc cần xử lý** (người dùng chốt 12/11/2026, để RSD CH03 có thẻ VT-DH-04 đến 06): chọn nhiều, mặc định Tất cả. Thay đổi chương trình = có thay đổi Chờ áp dụng (RSD DH08 2.3, R19); Đặt dịch vụ = số trên tab Đặt dịch vụ của DH08 > 0 (RSD DH08 2.1, R02); Chờ NCC phản hồi quá hạn = có chỉ báo “n ngày chưa phản hồi” (RSD DH08 2.3, R04), tính lúc đọc (Q6). Sửa 1.5, 2.1, 2.3, 5.2; thêm AC48, AC49.
- **T7 · R09 viết lại theo RSD CH02 R04:** nhắc hồ sơ chưa giao mỗi ngày trên cùng một dòng, mỗi ngày quay về Chưa đọc kể cả đã đọc; gồm hồ sơ đã qua ngày khởi hành; dừng khi có người phụ trách hoặc rời Mới tạo. Bỏ câu “Thông báo đã đọc không hiện lại”. Sửa L4.3.
- **T8 · giờ nhắc:** Giờ chạy nhắc hằng ngày là tham số chung QT05 R17, chung cho mọi loại nhắc định kỳ (RSD CH02 R09). R12 thêm dòng.
- Người nhận nhóm Điều hành ở R09 vẫn ghi “có vai trò Điều hành” theo RSD DH06 R03; RSD CH02 đã dùng “vai trò thuộc phòng Điều hành” theo quyết định 12/11/2026. Cần sửa DH06 R03 và câu này cùng lúc (câu hỏi cho người dùng).
- **Kiểm tra.** `check-rsd.py`: 15 ảnh, 15 mã W, không lỗi. AC48: 10/11 09:00 → 12/11 10:00 là 49 giờ; 10/11 11:00 → 12/11 11:01 là 48 giờ 1 phút (AC49).
