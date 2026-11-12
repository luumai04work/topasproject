# Ghi chú làm việc · RSD KD05 v1.4

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## 12/11/2026 · v1.4 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-KD05-Danh-sach-yeu-cau-Tour-v1.4.md`; đã đổi tên md v1.3. Không đổi nghiệp vụ, không dựng lại hình.

- **R03.** Chuyển sang Điều hành ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking, không phải phiên bản số lớn nhất của yêu cầu, theo RSD KD08 R09 (rà soát lần hai). Câu cũ “ghi Chốt cho phiên bản mới nhất” dễ hiểu nhầm.
- **Ngừng hoạt động (2.2 cột Phụ trách, R08).** Theo thuật ngữ ở `BOI-CANH-DU-AN.md`: tài khoản bị khóa hoặc không còn vai trò Kinh doanh; trước đây chỉ ghi “tài khoản đã khóa”.
- **2.2 · lý do ẩn cột Trạng thái · Booking ở chip Đang xử lý.** Đổi “chưa có Booking” thành “không có Booking Hiệu lực”: yêu cầu Mở lại sau khi Booking bị hủy vẫn có Booking đã hủy.
- Cập nhật phiên bản RSD nguồn: KD03-KD04 v1.4, KD06 v1.5, KD08 v1.5.

## 12/11/2026 · v1.3 · đồng bộ sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-KD05-Danh-sach-yeu-cau-Tour-v1.3.md`; đã xóa md v1.2. Áp dụng quyết định Q1, Q2, Q4 của người dùng (12/11/2026, ghi ở `BOI-CANH-DU-AN.md`).

- **Q1 · Hủy Booking.** Đã có Booking chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu tự chuyển Đã hủy, lý do “Booking đã hủy” kèm mã Booking; khách đặt lại thì Mở lại yêu cầu ở KD06 → Đang xử lý → báo giá, tạo Booking mới (2.2, 2.4, R02, R13, E3.2, AC45, AC46). Thay thiết kế tự quyết số 16 bên dưới.
- **Booking tạo ở KD08** (không phải “KD06.3”); thao tác đổi nhóm thêm Mở lại yêu cầu (KD06) và Hủy Booking (KD08). Kết quả Chốt cũng do hệ thống ghi khi Chuyển sang Điều hành (2.4, R03).
- **Q2, Q4 · Người phụ trách.** Yêu cầu Đã có Booking không chuyển ở KD05, đổi theo Booking ở KD08 (RSD KD08 R11). Yêu cầu Đã hủy giữ người phụ trách, ngoại lệ Quản trị mở lại ở KD06 kèm chọn người phụ trách mới (RSD KD06 R22) (R08, E4.2, AC47). Thay thiết kế tự quyết số 8.
- **Quản trị mở KD08** từ mã Booking, chỉ xem; chuyển người phụ trách Booking theo KD08 (1.4, R01).
- **Thông báo giao việc** liệt kê mã yêu cầu; bấm mã mở KD06 của yêu cầu ở tab đích, thống nhất với RSD KD06 1.2 (1.2, R08, R12, AC32). Thay ý “lối vào từ thông báo luôn mở Bảng” ở mục v1.1. *Tự quyết, cần xác nhận:* vẫn một thông báo gộp cho nhiều yêu cầu, mỗi mã là một liên kết.
- **Wireframe.** W09 đổi TM-014 thành TM-005 (việc cần sửa ghi ở GHI-CHU KD06); đã dựng lại và xem W09. Dữ liệu minh họa không có yêu cầu nào chỉ có Booking đã hủy (mọi Booking trong `screens-kd05.js` là Hiệu lực), nên chip, Kanban, Lịch không đổi; không dựng lại hình khác.
- **Kiểm tra.** `sync-md.js` rồi `check-rsd.js --final`: 19 ảnh, 19 mã W, đạt.

## Cập nhật v1.2 (12/11/2026) · khung 6 mục

Sắp xếp lại theo khung 6 mục, không đổi nghiệp vụ. Mục 8 cũ gộp vào bước luồng; mục 6 cũ (Wireframe) bỏ; 8.1 và 4.3 cũ thành mục 2.7; Quy tắc R thành mục 4; Dữ liệu (4.1, 4.2, 8.7 cũ) thành mục 5; Tiêu chí nghiệm thu thành mục 6. Bảng Sự kiện tự động (8.6 cũ) bỏ; phần chưa có thêm vào R03 (KD06 đổi báo giá thì cột đổi ở lần tải lại) và R08 (không tự chuyển, không tự hủy, không nhắc; tài khoản bị khóa không đổi gì). Mục 2.1–2.6 giữ số nên tham chiếu “RSD KD05 R02 và 2.4” ở GHI-CHU của KD06 vẫn đúng.

**Kiểm tra v1.2:** `check-rsd.js --final` exit 0: 19 tham chiếu ảnh, 19 mã W, không cảnh báo. Tập ảnh và mã L, E, R, AC khớp v1.1.

## Bổ sung ở v1.1 · Dạng xem Bảng, Kanban, Lịch (11/11/2026)

**Đã chốt với người dùng:** KD05 có thêm Kanban và Lịch; Kanban chia cột theo đúng ba trạng thái Đang xử lý, Đã có Booking, Đã hủy; không kéo thả ở bất kỳ dạng xem nào.

**Tự quyết, cần xác nhận:**
- Cột Đã có Booking, Đã hủy chỉ tải yêu cầu cập nhật trong 90 ngày (đổi được ở đầu cột: 30 ngày, 90 ngày, 12 tháng, Tất cả); số đếm cột vẫn là tổng. Lý do: hai cột này chỉ tăng theo thời gian, sẽ lấn át cột Đang xử lý.
- Hàng chip ẩn ở Kanban (cột thay chip); giữ ở Lịch. Lịch dùng chip để lọc trạng thái.
- Lịch theo thời gian đi (ngày đi → ngày về); yêu cầu chưa chốt ngày ở khay riêng theo tháng dự kiến. Tháng tối đa 3 hàng thanh mỗi tuần, còn lại “+n”; giới hạn vẽ 500 yêu cầu.
- Nhớ dạng xem dùng lần cuối theo người dùng, qua các phiên. Riêng lối vào từ thông báo “Bạn được giao n yêu cầu” luôn mở Bảng.
- Chuyển phụ trách chỉ ở Bảng; Kanban, Lịch không có ô chọn.
- Xuất Excel ở Lịch không giới hạn theo tháng; ở Kanban theo ba cột đang tính.
- Màn hẹp dưới 1100 px: Kanban cuộn ngang, Lịch chuyển Tuần.

**Kiểm tra v1.1:** `check-rsd.js --final`: 38 tham chiếu ảnh, 19 mã W, không cảnh báo. Đã chụp lại toàn bộ W01–W19 (W01–W15 có thêm bộ chuyển dạng xem); đã xem W13, W16–W19. Số liệu: Kanban 12 / 23 / 7 khớp chip W01; cột Đã có Booking 6 thẻ trong 90 ngày, Đã hủy 2 thẻ. W17: 6 yêu cầu đi trong tháng 12/2026 (Kyoto, David, Les Amis, Bella Italia, Hanami, Sunrise) + 1 chưa chốt ngày (YC-2606-0015, khớp dữ liệu W02). W18: ngày 11/12 có 5 yêu cầu Đang xử lý; tháng 12 có 7. Chưa có ảnh riêng cho dạng Tuần, các trạng thái E6.3–E6.5, E6.7, E6.8 (mô tả bằng chữ).

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD05 · Danh sách yêu cầu Tour; chưa có RSD nên viết mới ở `rsd/KD05/`; bàn giao MD + PNG trong ZIP như các RSD trước (người viết theo quy ước dự án, không hỏi lại) | Toàn bộ tài liệu |
| Q1 | Ai xem, ai sửa yêu cầu | Xem chung; chỉ người phụ trách yêu cầu sửa, báo giá, hủy; mặc định lọc yêu cầu của tôi | R01, 1.4, E3.1, AC18, AC23 |
| Q2 | Trạng thái hiển thị | Đúng nguồn: Đang xử lý, Đã có Booking, Đã hủy và kết quả báo giá mới nhất (Chốt, Cần điều chỉnh, Không chốt, Chưa có). Không thêm giai đoạn, không nhắc theo dõi | R02, R03, 1.3, R08 (không tự chuyển, không nhắc) |
| Q3 | Hàng loạt và xuất tệp | Chuyển phụ trách hàng loạt (người phụ trách với yêu cầu của mình; Quản trị với mọi yêu cầu) và Xuất Excel theo bộ lọc. Hủy vẫn làm từng yêu cầu ở KD06 | R08, R09, L4.1, L4.2, L5.1 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Phụ trách là ô chọn thả xuống, chip là trạng thái.** Câu Q1 ghi “chip mặc định Của tôi”; bản này đặt Của tôi làm giá trị mặc định của ô Phụ trách để chỉ có một hàng chip (theo trạng thái). Hành vi giống nhau.
2. **Sắp xếp mặc định.** Chip Đang xử lý theo ngày đi gần nhất (chưa chốt ngày xếp cuối); các chip khác theo ngày tạo mới nhất.
3. **Cột hiển thị.** Booking gộp vào cột Trạng thái · Booking và chỉ hiện ở chip Đã có Booking, Đã hủy, Tất cả; cột Phụ trách chỉ hiện khi không lọc Của tôi. Có cột Cập nhật (ngày đổi gần nhất).
4. **Giá bán của báo giá mới nhất** hiện trên dòng, theo loại tiền của phiên bản, không quy đổi, không có tổng.
5. **Bộ lọc Thời gian đi** có chọn nhanh Đã qua, Tháng này, Tháng sau, 3 tháng tới và khoảng ngày tùy chọn. “Đã qua” chỉ là bộ lọc, không phải nhắc.
6. **Yêu cầu chưa chốt ngày** (chỉ có tháng dự kiến) được hiển thị và lọc theo tháng. Giả định KD06 cho nhập tháng dự kiến, như dữ liệu minh họa ở RSD KD03-KD04 (YC-2606-0015 “12/2026”).
7. **Tab đích ở KD06** theo tiến độ: có báo giá → Báo giá; có hành trình → Hành trình; còn lại → Thông tin yêu cầu (R07).
8. **Chỉ chuyển yêu cầu Đang xử lý.** Đã có Booking và Đã hủy giữ người phụ trách cũ để QT08 đếm đúng người đã xử lý. *Sửa ở v1.3:* Đã có Booking đổi theo Booking ở KD08; Đã hủy đổi khi Quản trị mở lại ở KD06.
9. **Danh sách người nhận** kèm số yêu cầu đang xử lý của từng người; không hiện người đang chuyển và tài khoản đã khóa.
10. **Chuyển phụ trách không đổi** người phụ trách khách hàng, Booking, hồ sơ Tour; thông báo gộp cho người nhận, thông báo người cũ khi Quản trị chuyển; nhãn Mới giao tới hết ngày.
11. **Chuyển một yêu cầu** cũng làm bằng cách chọn một dòng ở KD05. Có đặt thêm nút Chuyển phụ trách ở phần đầu KD06 hay không do RSD KD06 quyết định.
12. **Xuất Excel**: ẩn khi đang chọn dòng; tối đa 5.000 dòng; cột theo R09, không có email, điện thoại; ghi QT03; không lưu tệp.
13. **Quản trị hệ thống** xem mọi yêu cầu, chuyển phụ trách, xuất Excel; không tạo, không sửa (giống KD03).
14. **Điều hành, Kế toán không vào KD05** (danh sách màn chỉ ghi Kinh doanh).
15. **Mã yêu cầu `YC-YYMM-NNNN`** lấy theo dữ liệu minh họa của RSD KD03-KD04; quy tắc cấp mã thuộc RSD KD06.
16. ~~**Booking đã hủy** vẫn giữ yêu cầu ở nhóm Đã có Booking (R02), khớp R08 của RSD KD03-KD04.~~ Bỏ ở v1.3: người dùng chốt 12/11/2026 hủy Booking thì yêu cầu Đã hủy.
17. **Danh sách không tự làm mới** theo thời gian thực; tải lại khi quay lại hoặc đổi bộ lọc.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (KD05).** Thêm: bộ lọc Phụ trách mặc định Của tôi; chuyển phụ trách hàng loạt (người phụ trách và Quản trị hệ thống); Xuất Excel theo bộ lọc. Cột Vai trò thêm Quản trị hệ thống (xem, chuyển phụ trách, xuất).
- **Danh sách màn (vòng đời Yêu cầu Tour, Phiên bản báo giá).** Bỏ nhãn “đề xuất” của Đang xử lý và của Chốt, Cần điều chỉnh, Không chốt (người dùng đã chọn 11/11/2026).
- **RSD KD06.**
  - Quyền: chỉ người phụ trách yêu cầu sửa, lập báo giá, ghi kết quả, tạo Booking, hủy; người khác và Quản trị mở chỉ đọc (R01).
  - Nhận tab đích từ KD05 (R07); trả về KD05 giữ ngữ cảnh.
  - Ghi người phụ trách (mặc định người tạo), lịch sử chuyển phụ trách; cân nhắc nút Chuyển phụ trách ở phần đầu.
  - Chốt quy tắc mã `YC-YYMM-NNNN` và việc cho nhập tháng dự kiến khi chưa chốt ngày.
  - Danh sách giá trị kết quả báo giá là Chốt, Cần điều chỉnh, Không chốt.
- **RSD KD03-KD04.** R08 đã giả định KD05, KD06 không giới hạn phạm vi; nay đã chốt, không cần sửa.
- **QT02.** Thêm quyền Chuyển phụ trách yêu cầu (Kinh doanh: yêu cầu của mình; Quản trị: mọi yêu cầu) và Xuất Excel yêu cầu Tour.
- **QT03.** Ghi chuyển phụ trách yêu cầu và lần xuất Excel.
- **QT08.** Đếm theo người phụ trách hiện tại của yêu cầu; yêu cầu đã chốt hoặc đã hủy không bị chuyển nên số của người cũ giữ nguyên.
- **Trung tâm thông báo.** Thông báo gộp “Bạn được giao n yêu cầu Tour từ …”.
- **Quản trị.** Cấu hình giới hạn số dòng xuất Excel (mặc định 5.000).

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node của skill; máy chưa có Python nên chưa chạy `check-rsd.py`): 30 tham chiếu ảnh, 15 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`.
- Đã xem trực quan sau lần chụp cuối: W01–W04, W06–W14. Đã sửa: W02 (gộp cột Booking vào Trạng thái để không xuống dòng), W05–W07 (Xuất Excel khóa kèm lý do khi không có dòng), W14 (ô Phụ trách bị cắt chữ; bỏ tên người nhận lặp với cột Phụ trách). W05, W15 cùng khung với ảnh đã xem.
- Trạng thái không có ảnh riêng, chỉ mô tả bằng chữ: liên kết “Chọn tất cả n yêu cầu khớp bộ lọc” (AC25), nhãn Mới giao (AC32), nút Xuất Excel khóa khi quá 5.000 dòng (E5.2), lỗi khoảng ngày (E1.4).
- Số liệu đã đối chiếu: Của tôi 12 + 23 + 7 = 42; sau khi hủy YC-2611-0028: 11 + 23 + 8 = 42; sau khi chuyển 3: 9 + 23 + 7 = 39. Toàn công ty Đang xử lý 37 = Nam 12 + Lê Thu Hà 9 + Trần Quốc Bảo 11 + Phạm Thanh Tùng 5 + Vũ Đức Minh 0. Trần Quốc Bảo 11 + 31 + 6 = 48; sau khi chuyển 0 + 32 + 6 = 38 (10 chuyển đi, 1 sang Đã có Booking). Müller Reisen GmbH 1 + 4 + 1 = 6, khớp RSD KD03-KD04 (W25, AC34). Cột Yêu cầu đang xử lý ở KD03 W01 khớp: Atlas 1, David 1, Hanami 2, Müller 1, Nordic 1, Van den Berg 1. Số ngày đêm khớp ngày đi, ngày về. W04: 3 tháng tới từ 11/11/2026 đến 10/02/2027 gồm David (06/12) và Hanami (08/02).
- `rsd/BOI-CANH-DU-AN.md` đã thêm vai trò, thuật ngữ, nguyên tắc của yêu cầu Tour; bản cũ sao lưu ở `BOI-CANH-DU-AN.md.bak-20261111-kd05`.
