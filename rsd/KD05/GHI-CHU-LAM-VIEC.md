# Ghi chú làm việc · RSD KD05 v1.5

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết. Theo Q3 (12/11/2026), mọi mục “tự quyết, cần xác nhận” ở các phần dưới coi là đã chốt (chấp nhận mặc định, Q3), trừ chỗ đã bị quyết định phase coding thay. Mã Q1–Q4 ở các phần cũ là mã câu hỏi của RSD này, không phải mã quyết định phase coding.

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-KD05-Danh-sach-yeu-cau-Tour-v1.5.md` (`git mv` từ v1.4). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md`, ADR 0001.

**Thay đổi chính**

- **Q1 phân quyền.** 1.4 viết lại thành quyền mặc định theo vai trò (thao tác × vai trò), cấu hình ở QT02. R01 bỏ “chỉ người phụ trách được sửa…” và phạm vi Booking. KD06 mở được và sửa theo quyền của KD06, không có chế độ chỉ đọc cho người không phụ trách (L3.1, E3.1, AC18).
- **Chuyển phụ trách theo quyền (R08, L4.1, L4.2).** Người có quyền Chuyển người phụ trách (mặc định Kinh doanh, Quản trị) chuyển được mọi yêu cầu Đang xử lý, kể cả của người khác; người nhận khác người đang phụ trách các dòng đã chọn (trước đây quy tắc này chỉ áp cho Quản trị). Người cũ vẫn sửa được sau khi chuyển (AC23). E4.3, E4.6, AC20, AC21, AC47 sửa theo. Thông báo người cũ khi người chuyển không phải người phụ trách cũ (trước: khi Quản trị chuyển).
- **Chip Của tôi (Q1).** “Của tôi” chuyển từ giá trị mặc định của ô Phụ trách thành chip bật sẵn, tắt được, đầu hàng chip (2.1, 2.2, 2.3, 2.6, 2.7, L1.1–L1.3, E1.3, L6.3, 5.2, AC01, AC05, AC27, AC30, AC32). Ô Phụ trách còn Tất cả và từng người. Thay thiết kế tự quyết số 1 bên dưới.
- **Mã Booking (1.2, 2.2, E3.5, R01, R11, AC08).** Bấm được theo quyền xem KD08; không có quyền thì hiện dạng chữ. Bỏ khóa 🔒 “do … phụ trách”.
- **U5.** Bỏ dòng “Quản trị · chỉ xem và chuyển người phụ trách” ở tiêu đề; nút không có quyền thì ẩn (2.1, E2.2).
- **Q2, Q5.** Thông báo giao việc là thông báo in-app, ghi cùng giao dịch với lần chuyển (R08, 5.3).
- **Q7.** R10 ghi YYMM theo giờ Asia/Ho_Chi_Minh, cho phép thủng số.
- **C2.** Giới hạn xuất Excel, khoảng cập nhật Kanban, giới hạn Lịch ở tệp cấu hình hoặc dữ liệu khởi tạo, không còn “Quản trị hệ thống” (R11).
- Các nút “Thử lại” còn lại (E1.2, E5.3, E6.1, AC13, AC41) là tải lại khi lỗi mạng, không phải trạng thái “Tạo lỗi”; giữ nguyên.

**Tự đơn giản hóa giao diện (U6):** chip Của tôi và ô Phụ trách loại trừ nhau (chọn một người thì chip tắt, bật chip thì ô về Tất cả). Quản trị mở lần đầu với chip Của tôi tắt, giữ hành vi cũ (Quản trị không phụ trách yêu cầu nên chip bật sẽ luôn rỗng).

**Hình chưa cập nhật:** mọi hình còn mục Chăm sóc khách hàng ở thanh bên và “Của tôi” là giá trị ô Phụ trách (ghi một lần ở đầu RSD); W02 (mã Booking khóa 🔒 “do … phụ trách”), W13 (dòng “Quản trị · chỉ xem và chuyển người phụ trách”).

**Lưu ý cho bước code (không sửa RSD):** chuẩn bảng K1 (50 dòng mỗi trang, phân trang máy chủ) và U3 (nhớ bộ lọc cả sau khi đăng xuất) thắng chỗ RSD ghi 20 dòng mỗi trang và giữ bộ lọc trong phiên; chưa sửa các số 20 dòng trong RSD và AC25 vì không thuộc danh sách quyết định được giao.

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
| Q0 | Màn cần viết, hướng làm | KD05 · Danh sách yêu cầu Tour; chưa có RSD nên viết mới ở `docs/rsd/KD05/`; bàn giao MD + PNG trong ZIP như các RSD trước (người viết theo quy ước dự án, không hỏi lại) | Toàn bộ tài liệu |
| Q1 | Ai xem, ai sửa yêu cầu | Xem chung; chỉ người phụ trách yêu cầu sửa, báo giá, hủy; mặc định lọc yêu cầu của tôi | R01, 1.4, E3.1, AC18, AC23 |
| Q2 | Trạng thái hiển thị | Đúng nguồn: Đang xử lý, Đã có Booking, Đã hủy và kết quả báo giá mới nhất (Chốt, Cần điều chỉnh, Không chốt, Chưa có). Không thêm giai đoạn, không nhắc theo dõi | R02, R03, 1.3, R08 (không tự chuyển, không nhắc) |
| Q3 | Hàng loạt và xuất tệp | Chuyển phụ trách hàng loạt (người phụ trách với yêu cầu của mình; Quản trị với mọi yêu cầu) và Xuất Excel theo bộ lọc. Hủy vẫn làm từng yêu cầu ở KD06 | R08, R09, L4.1, L4.2, L5.1 |

## Thiết kế do người viết tự quyết, cần xác nhận (chấp nhận mặc định, Q3; số 1, 9, 10, 13 đã thay ở v1.5 theo Q1)

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
  - [Thay theo Q1 phase coding: quyền theo vai trò] Quyền: chỉ người phụ trách yêu cầu sửa, lập báo giá, ghi kết quả, tạo Booking, hủy; người khác và Quản trị mở chỉ đọc (R01).
  - Nhận tab đích từ KD05 (R07); trả về KD05 giữ ngữ cảnh.
  - Ghi người phụ trách (mặc định người tạo), lịch sử chuyển phụ trách; cân nhắc nút Chuyển phụ trách ở phần đầu.
  - Chốt quy tắc mã `YC-YYMM-NNNN` và việc cho nhập tháng dự kiến khi chưa chốt ngày.
  - Danh sách giá trị kết quả báo giá là Chốt, Cần điều chỉnh, Không chốt.
- **RSD KD03-KD04.** R08 đã giả định KD05, KD06 không giới hạn phạm vi; nay đã chốt, không cần sửa.
- **QT02.** [Thay theo Q1 phase coding: Kinh doanh và Quản trị chuyển mọi yêu cầu Đang xử lý] Thêm quyền Chuyển phụ trách yêu cầu (Kinh doanh: yêu cầu của mình; Quản trị: mọi yêu cầu) và Xuất Excel yêu cầu Tour.
- **QT03.** Ghi chuyển phụ trách yêu cầu và lần xuất Excel.
- **QT08.** Đếm theo người phụ trách hiện tại của yêu cầu; yêu cầu đã chốt hoặc đã hủy không bị chuyển nên số của người cũ giữ nguyên.
- **Trung tâm thông báo.** Thông báo gộp “Bạn được giao n yêu cầu Tour từ …”.
- **Quản trị.** [Thay theo C2: ở tệp cấu hình] Cấu hình giới hạn số dòng xuất Excel (mặc định 5.000).

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node của skill; máy chưa có Python nên chưa chạy `check-rsd.py`): 30 tham chiếu ảnh, 15 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`.
- Đã xem trực quan sau lần chụp cuối: W01–W04, W06–W14. Đã sửa: W02 (gộp cột Booking vào Trạng thái để không xuống dòng), W05–W07 (Xuất Excel khóa kèm lý do khi không có dòng), W14 (ô Phụ trách bị cắt chữ; bỏ tên người nhận lặp với cột Phụ trách). W05, W15 cùng khung với ảnh đã xem.
- Trạng thái không có ảnh riêng, chỉ mô tả bằng chữ: liên kết “Chọn tất cả n yêu cầu khớp bộ lọc” (AC25), nhãn Mới giao (AC32), nút Xuất Excel khóa khi quá 5.000 dòng (E5.2), lỗi khoảng ngày (E1.4).
- Số liệu đã đối chiếu: Của tôi 12 + 23 + 7 = 42; sau khi hủy YC-2611-0028: 11 + 23 + 8 = 42; sau khi chuyển 3: 9 + 23 + 7 = 39. Toàn công ty Đang xử lý 37 = Nam 12 + Lê Thu Hà 9 + Trần Quốc Bảo 11 + Phạm Thanh Tùng 5 + Vũ Đức Minh 0. Trần Quốc Bảo 11 + 31 + 6 = 48; sau khi chuyển 0 + 32 + 6 = 38 (10 chuyển đi, 1 sang Đã có Booking). Müller Reisen GmbH 1 + 4 + 1 = 6, khớp RSD KD03-KD04 (W25, AC34). Cột Yêu cầu đang xử lý ở KD03 W01 khớp: Atlas 1, David 1, Hanami 2, Müller 1, Nordic 1, Van den Berg 1. Số ngày đêm khớp ngày đi, ngày về. W04: 3 tháng tới từ 11/11/2026 đến 10/02/2027 gồm David (06/12) và Hanami (08/02).
- `docs/rsd/BOI-CANH-DU-AN.md` đã thêm vai trò, thuật ngữ, nguyên tắc của yêu cầu Tour; bản cũ sao lưu ở `BOI-CANH-DU-AN.md.bak-20261111-kd05`.

## Quyết định rà soát 13/11/2026

- **Quyết định rà soát 13/11/2026 (Q-RS17).** Ghi Chốt ở KD06.3 là tạo Booking, nên không còn yêu cầu Đang xử lý có phiên bản Chốt. KD05 hiện “giá theo phiên bản của Booking”: cột Báo giá mới nhất đổi tên thành **Báo giá**, theo phiên bản hiện hành của Booking khi có Booking Hiệu lực, còn lại phiên bản mới nhất; bộ lọc Kết quả báo giá, thẻ Kanban, nhãn Lịch, Excel dùng cùng phiên bản (R03 viết lại). Sửa đầu tài liệu, 1.1, 1.3, 1.5, 2.2–2.4, 2.6, 2.7, L1.1, L1.3, R01, R02, R03, R09, R13, R14, 5.1; viết lại AC46; thêm AC48. Wireframe chưa vẽ lại: tiêu đề cột “Báo giá mới nhất” (W01–W15).
- **Quyết định rà soát 13/11/2026 (Q-RS18).** Yêu cầu Đã có Booking hiện thời gian đi, số khách, báo giá của Booking (R15 mới), vì thông tin yêu cầu có thể đã sửa ở chế độ điều chỉnh mà chưa Chuyển sang Điều hành. Bộ lọc, sắp xếp theo Thời gian đi, Số khách dùng cùng số. Thêm R15, AC49; sửa 2.2, R14, 5.1.
- **Quyết định rà soát 13/11/2026 (Q-RS24).** Chuyển phụ trách hàng loạt có Hoàn tác 10 giây trên banner kết quả (CGD U2.02, U2.06, U2.08): yêu cầu chưa bị đổi tiếp về người cũ, thông báo của lần chuyển bị gỡ hoặc dựng lại (RSD CH02 R05). Sửa L4.1, L4.2, R08; thêm E4.7, AC50, AC51. Wireframe W12, W14 chưa có nút Hoàn tác (chưa vẽ lại).
- **Bổ sung 13/11/2026 (người dùng trả lời Q-RS17).** Phiên bản của Booking đã hủy giữ Chốt, nên bộ lọc Chốt gồm cả yêu cầu có Booking đã hủy mà phiên bản mới nhất là phiên bản của Booking đó (R03). KD05 không có chuyển một yêu cầu qua hộp thoại (chuyển ở KD06 W46 có Hoàn tác theo RSD KD06 R23).

## Cách hiểu đã chọn khi code ticket 45 (17/11/2026)

Tài liệu chưa rõ hoặc vênh nhau; chọn cách hiểu để mọi câu cùng đúng (quy tắc người dùng chốt 16/11/2026).

- **Cột của tệp Excel (R09 với CGD K1.21).** Tệp lấy các cột đang hiện của bảng, đúng thứ tự (K1.21 thắng danh sách cố định của R09, như ticket đã ghi). Cột có dòng phụ tách thành cột “<cột> · <dòng phụ>”, đặt tên theo R09: Yêu cầu (mã) · Ngày tạo; Khách hàng (tên) · Mã khách hàng · Loại khách · Người liên hệ · Quốc gia; Thời gian đi (ngày đi, trống nếu chưa chốt ngày) · Ngày về · Tháng dự kiến · Số ngày đêm; Số khách; Báo giá (vN, hoặc “Chưa có báo giá”) · Kết quả báo giá · Giá bán (số) · Loại tiền · Ngày lưu báo giá; Phụ trách; Trạng thái · Booking (trạng thái) · Mã Booking · Lý do hủy; Cập nhật; Loại Tour, Quốc gia khi người dùng bật các cột ẩn này. Hạng phòng, Ngôn ngữ phục vụ của R09 không là cột của bảng nên chỉ có khi KD05 thêm cột tương ứng. API gọi không kèm danh sách cột thì lấy các cột người dùng đang hiện (lựa chọn đã nhớ, U3), bỏ cột bị ẩn theo ngữ cảnh (Phụ trách khi bật Của tôi, Trạng thái · Booking ở chip Đang xử lý).
- **QT03 của lần xuất.** Đối tượng là Yêu cầu Tour, mã “KD05”, tên “Danh sách” (QT03 2.2: xuất danh sách ghi “Danh sách”); thay đổi ghi bộ lọc, số dòng, tên tệp (R09).
- **Nút Xuất Excel khi đang tải.** Nút không khóa trong lúc tải danh sách; máy chủ kiểm lại không có dòng (E5.1) và vượt giới hạn (E5.2) khi bấm. Khi đã tải, nút khóa kèm lý do như E5.1, E5.2 (chữ CGD-AC83 “120 dòng, vượt giới hạn 100 dòng” kèm gợi ý thu hẹp bộ lọc).
- **Khoảng cập nhật mặc định của Kanban (R11).** Lấy từ cấu hình chung QT05 “Khoảng mặc định Kanban” (`KANBAN_DEFAULT_RANGE`, có sẵn ở QT05 R17), vì đó là chỗ dữ liệu khởi tạo của cấu hình. “90 ngày gần nhất” là hôm nay và 89 ngày trước theo ngày cập nhật (giờ Asia/Ho_Chi_Minh); “12 tháng” là từ ngày này năm trước cộng một ngày. Số hàng thanh mỗi tuần (3) và số yêu cầu tối đa vẽ trên Lịch (500) ở tệp cấu hình (`limits.tourRequestCalendarRowsPerWeek`, `limits.tourRequestCalendarMaxRequests`, ADR 0010).
- **Thứ tự xuất từ Kanban (R09).** Cột Đang xử lý, rồi Đã có Booking, rồi Đã hủy; trong cột theo thứ tự thẻ (R13), mỗi cột theo khoảng cập nhật đang chọn.
- **“n yêu cầu đi trong tháng” (R14, E6.5).** Đếm yêu cầu có thời gian đi giao với tháng đang xem (yêu cầu đi 27/12 về 03/01 tính cho cả tháng 12 và tháng 1, như thanh của nó hiện ở cả hai lịch). Giới hạn 500 của E6.5 đếm cùng cách.
- **“+n” (R14, L6.3, W18).** Mỗi ngày còn yêu cầu chưa hiện có “+n” riêng (W18 có “+2” ở ba ngày liền nhau); bấm mở bảng nhỏ liệt kê mọi yêu cầu có thời gian đi qua ngày đó. Scenario KD05-AC40 (5 yêu cầu đi 11/12 về 13/12) đã sửa thành ba “+2”.
- **Dạng Tuần.** Mở ở tuần có hôm nay khi hôm nay thuộc tháng đang xem, nếu không thì tuần đầu của tháng; ‹ › đổi một tuần; dòng ghi chú vẫn đếm theo tháng chứa tuần đó.
- **Ghi nhớ dạng xem (R12).** Dạng xem nhớ cùng các lựa chọn khác của danh sách; tháng của Lịch không nhớ (Lịch mở ở tháng hiện tại hoặc tháng đầu của bộ lọc Thời gian đi, R14). Khoảng cập nhật từng cột Kanban và lựa chọn Tháng/Tuần nhớ riêng theo người dùng.
- **Kanban ẩn cả chip Của tôi** (điều phối 13/11/2026, KD05-AC34): bộ lọc Của tôi vẫn áp dụng; dòng ghi chú và bộ chuyển dạng xem ở trên các cột.

## Bổ sung khi sửa theo rà soát code (17/11/2026)

- **Ngày cập nhật của yêu cầu (R03 “Lưu phiên bản báo giá, ghi kết quả ở KD06.3, … cập nhật báo giá hiển thị và ngày cập nhật của yêu cầu”).** Lưu phiên bản, ghi kết quả và ghi Chốt (tạo Booking) đặt ngày cập nhật và người cập nhật của yêu cầu theo đồng hồ chung, trong cùng giao dịch; số phiên bản bản ghi của yêu cầu không đổi (thông tin yêu cầu không đổi, người đang sửa KD06.1 không bị xung đột). Cột Cập nhật, khoảng cập nhật và thứ tự của cột Kanban Đã có Booking, Đã hủy (R13) đọc ngày này, nên yêu cầu vừa ghi Chốt hôm nay hiện đầu cột. Chuyển sang Điều hành, hủy Booking ở KD08 làm theo khi các ticket đó có.

## Cách hiểu đã chọn khi làm chuyển phụ trách hàng loạt (ticket 41, 17/11/2026)

- **“Chọn tất cả n yêu cầu khớp bộ lọc” (R08, CGD K1.13).** n là số yêu cầu Đang xử lý khớp tìm kiếm, bộ lọc và Của tôi (chip Tất cả cũng chỉ chọn dòng Đang xử lý, E4.6). Lúc chuyển, máy chủ đọc lại bộ lọc; yêu cầu Đang xử lý khớp lúc đó được chuyển. Khi số này ít hơn n trên thanh (`expectedTotal`), các yêu cầu thiếu là những yêu cầu cùng tìm kiếm, bộ lọc vừa rời Đang xử lý gần nhất (hủy, có Booking từ lúc tải): chúng được ghi bỏ qua với lý do “Không còn Đang xử lý” (E4.2) để banner nêu đúng số bỏ qua.
- **Lý do bỏ qua (E4.2, E4.3).** `NOT_IN_PROGRESS` (đã hủy, đã có Booking) hoặc `OWNER_CHANGED` (người phụ trách khác lúc tải, kể cả đã là người nhận); dòng bỏ qua ghi lý do dưới mã (W14), kèm tên người phụ trách hiện tại.
- **Nhãn Mới giao (R08).** Hiện trên dòng của yêu cầu mà lần đổi người phụ trách gần nhất (chuyển, chuyển hàng loạt, mở lại với người khác) đưa về người phụ trách hiện tại trong hôm nay (giờ Asia/Ho_Chi_Minh), với mọi người xem.
- **Quay lại sau khi hủy ở KD06 (L3.2, R07, W10).** Dòng (thẻ ở Kanban) của yêu cầu vừa mở, không còn khớp sau lần tải lại, giữ đúng chỗ, mờ, ghi nhãn trạng thái mới và “Không còn khớp bộ lọc”; dòng có thông báo ngắn “… không còn khớp bộ lọc” với liên kết “Xem ở chip <trạng thái>”. Dòng mờ không có ô chọn.
- **Thông báo TB-KD06-01 nhiều mã.** Bấm thân mở KD06 (tab đích) của yêu cầu đầu tiên; bấm một mã mở KD06 của mã đó ở tab đích tính lúc bấm (`POST /api/notifications/:id/open { ref }`). TB-KD06-02 không gửi khi người cũ là người thực hiện, đã ngừng hoạt động hoặc chính là người nhận.
