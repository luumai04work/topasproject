# Ghi chú làm việc · RSD KD07 v1.4

## Cập nhật 12/11/2026 theo quyết định phase coding

Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md` (bản sửa 12/11/2026). Tệp đổi tên `RSD-KD07-Danh-sach-Booking-v1.4.md` bằng `git mv`.

**Đã sửa:**
- **Q1.** Bỏ phạm vi “Kinh doanh xem Booking mình phụ trách”: mọi vai trò có quyền xem KD07 thấy mọi Booking. Thêm chip Của tôi đầu hàng chip, bật sẵn với Kinh doanh (1.2, 1.4, 2.1, 2.3, R01, R07, R08, 5.2). Bộ lọc và cột Phụ trách có cho mọi vai trò; cột ẩn khi chip Của tôi bật (2.2, 2.7). 1.4 thành “Quyền mặc định theo vai trò”, cấu hình ở QT02. E1.1, E1.3 thay câu “Bạn chỉ thấy Booking mình phụ trách” bằng gợi ý Tắt Của tôi; E2.1 bỏ (giữ mã); E2.5 Tour Code dạng chữ khi không có quyền DH08 (U5). AC01, AC03, AC22, AC26, AC28 sửa; thêm AC50.
- **Q5.** Bỏ tình trạng Tạo lỗi, “—” và bộ lọc Hồ sơ Tour: mọi Booking đều có hồ sơ Tour (1.1, 1.3, 1.5, 2.2–2.6, L1.1, L4.1, R03, R07, R11, R13, 5.1, 5.2). Lịch ngày khởi hành: xanh lá Hiệu lực, xám Đã hủy. E1.8, AC48 bỏ (giữ mã).
- **Q3.** Bỏ nhãn “suy ra, chờ xác nhận” ở R03, R13 (cả hai câu đó bỏ theo Q5). Các mục “Suy ra, chờ xác nhận” ở dưới coi là chấp nhận mặc định (Q3), trừ hai mục về Tạo lỗi đã bỏ.
- **Q18.** R04: khoản phải thu phát sinh có loại tiền riêng; khác loại tiền Booking thì Còn phải thu hiện theo từng loại tiền, không cộng lẫn (theo RSD KT01 v1.6 R11).
- **Q6, Q7, U3, C2.** Tình trạng đợt tính lúc đọc (2.4, R04); mã Booking cho phép thủng số, YYMM theo giờ Asia/Ho_Chi_Minh (R10); nhớ bộ lọc cả sau khi đăng xuất (1.2, 5.1); ngưỡng Đến hạn ở QT05; giới hạn hàng và mục của Lịch ở tệp cấu hình (R11).

**Tự đơn giản hóa giao diện (U6):**
- Bỏ hẳn bộ lọc Hồ sơ Tour (không còn giá trị phân biệt); lọc theo trạng thái hồ sơ dùng bộ lọc cột chung (K2).
- Chip Của tôi tắt sẵn với Kế toán và Quản trị vì hai vai trò này không phụ trách Booking; bật sẵn thì danh sách rỗng (xem câu hỏi bên dưới).
- Chip Của tôi bật tương đương Phụ trách là mình; chọn người khác ở Phụ trách thì chip tắt.
- Giữ nút Thử lại khi lỗi tải danh sách hoặc số liệu KT01 (tải lại dữ liệu đọc, không phải Thử lại tạo hồ sơ đã bỏ).

**Hình chưa cập nhật:** mọi hình danh sách thiếu chip Của tôi và còn ô lọc Hồ sơ Tour; thanh bên còn mục Chăm sóc khách hàng (C3) — ghi một lần ở “Dữ liệu trên hình”. Ghi riêng dưới hình: W01, W05 (câu “Bạn chỉ thấy Booking mình phụ trách”), W06 (bộ lọc Tạo lỗi), W07, W12 (chú giải Tạo lỗi), W17 (Hanami “—”).

**Còn mở:** chip Của tôi mặc định tắt với Kế toán, Quản trị (BOI-CANH ghi “bật sẵn” chung); 20 dòng mỗi trang khác chuẩn K1 (50 dòng), để đặc tả chuẩn component quyết định.

## Cập nhật v1.3 (12/11/2026) · Rà soát mâu thuẫn lần ba

- Đổi tên tệp thành `RSD-KD07-Danh-sach-Booking-v1.3.md`, không còn md v1.2. Không đổi nghiệp vụ, không dựng lại hình.
- Cập nhật phiên bản RSD nguồn theo bảng phiên bản của đợt sửa: KD05 v1.4, KD06 v1.5, KD08 v1.5, KT01 v1.5, DH07 v1.7, DH08 v2.8 (đầu tài liệu và 1.5 Truy vết nguồn). Các quyết định A–F của rà soát lần ba không chạm KD07 (KD07 chỉ đọc Booking, đợt thanh toán, hồ sơ Tour).

## Cập nhật v1.2 (12/11/2026) · Hồ sơ Tour tự tạo khi lưu Booking

**Quyết định của người dùng (12/11/2026, yêu cầu riêng của doanh nghiệp):** (1) không có luồng duyệt; (2) Kế toán (KT01) không làm chốt chặn cho KD và DH. Hệ quả cho KD07: hồ sơ Tour tự tạo ngay khi Booking được lưu ở KD08, không chờ thanh toán (RSD DH07 v1.5 R01). Đóng Tour ở DH08 không cần quyết toán (KD07 không nhắc quyết toán, không phải sửa).

**Lý do sửa:** KD07 v1.1 hiện tình trạng Chờ đủ điều kiện (điều kiện Thu đủ đến đợt n, số còn thiếu đọc từ KT01) và chỉ báo Tạo sớm. Cả hai gắn hồ sơ Tour với thanh toán, trái quyết định (2).

**Đã làm:**
- [x] Tạo `RSD-KD07-Danh-sach-Booking-v1.2.md`, xóa v1.1. Nguồn: DH07 v1.5, DH08 v2.5, KD08 v1.3, KT01 v1.3.
- [x] Bỏ: điều kiện tạo hồ sơ, Chờ đủ điều kiện (nhãn vàng, số còn thiếu, “Chưa có lịch thanh toán” ở cột Hồ sơ Tour), Tạo sớm, KT01 ghi khoản thu làm hồ sơ được tạo. Sửa 1.1, 1.3, 1.4, 1.5, 2.2–2.6, L1.1, L4.1, E1.4, E1.8, R01, R03, R07, R11, R13, 5.1.
- [x] Cột Hồ sơ Tour còn: Tour Code + trạng thái hồ sơ; Tạo lỗi + “Điều hành đang xử lý”; “—” (Booking Đã hủy chưa có hồ sơ). Bộ lọc Hồ sơ Tour: Tất cả, Đã có hồ sơ, Tạo lỗi. Lịch ngày khởi hành: xanh lá Đã có hồ sơ, đỏ Tạo lỗi, xám Đã hủy.
- [x] Giữ nguyên các cột, bộ lọc thanh toán từ KT01 (còn phải thu, tình trạng đợt, Chưa có lịch thanh toán, Chưa có dữ liệu công nợ, Chờ điều chỉnh): chỉ để tham khảo.
- [x] AC: bỏ AC15, AC16 (không dùng lại mã); viết lại AC11, AC17, AC32; thêm AC48 (Tạo lỗi), AC49 (ghi khoản thu không đổi cột Hồ sơ Tour).
- [x] Wireframe: sửa `screens-kd07.js` (BK-2611-0155 → TP-2612-0009, BK-2611-0158 → TP-2703-0001, đều Mới tạo; bỏ `early` ở Lefebvre, Dupont; bỏ nhánh Chờ đủ điều kiện, thêm nhánh Tạo lỗi; W06 bộ lọc mẫu Hồ sơ Tour: Tạo lỗi; W12 chú giải Tạo lỗi, thanh Brown xanh lá; W13, W14 bỏ nhãn trong khay; W09 “Cách tạo: Tự động khi lưu Booking · 14/10/2026”; W16 bỏ dòng điều kiện tạo hồ sơ), `captions.js` W12. Dựng lại W01, W02, W04, W06, W08, W09, W10, W11, W12, W13, W14, W16, W17. Đã xem W01, W12, W13.
- [x] `sync-md.js`, `indent-images.js` (0 dòng), `check-rsd.js --final`: 17 ảnh, 17 mã W, exit 0.

**Suy ra, chờ xác nhận:**
- “—” ở cột Hồ sơ Tour chỉ còn cho Booking Đã hủy khi hồ sơ đang Tạo lỗi (DH07: hủy Booking lúc Tạo lỗi thì không tạo hồ sơ). Hanami BK-2611-0149 trên W17 vẫn “—”, nay hiểu theo trường hợp này.
- Thanh Tạo lỗi ở Lịch thêm “Điều hành đang xử lý” nếu đủ chỗ (R13).
- Tour Code TP-2612-0009 (Brown & Co), TP-2703-0001 (BK-2611-0158) đặt mới theo DH07 R02 (YYMM theo ngày khởi hành); cần khớp với dữ liệu DH07 v1.5, KD08 v1.3.

**Mâu thuẫn ngoài phạm vi (báo lại, không sửa):**
- DH07 `screens-dh07.js` dùng BK-2611-0149 cho Lindgren Resor (TP-2611-0055), trong khi KD06, KD07 dùng BK-2611-0149 cho Hanami Tours (đã hủy). Có từ trước v1.2.
- DH07 v1.4 (hình W08 bảng trượt Booking chờ) còn Brown & Co “Chưa có lịch thanh toán” kèm nút Tạo sớm; agent DH07 đang sửa.

## Cập nhật v1.1 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn

**Theo quyết định người dùng (BOI-CANH):** Q6 ngưỡng Đến hạn là tham số chung Quản trị cấu hình, mặc định 7 ngày, KD07 và KT01 cùng đọc (R04, R07, R11, 5.1, AC44). Q1 hủy Booking thì yêu cầu Tour tự chuyển Đã hủy, đặt lại bằng Mở lại yêu cầu (1.3).

**Việc “cần sửa” đã làm:**
- [x] R04, R11: ngưỡng Đến hạn là tham số chung.
- [x] R04, R07, 2.2: tình trạng đợt và dòng Booking đọc từ KT01 (RSD KT01 R03, cùng cách tính); nêu rõ còn phải thu > 0 dù mọi đợt đã thu đủ (khoản Phát sinh ngoài lịch), Tiền thừa (còn phải thu 0, chỉ báo), Cần hoàn (KT01 trả số âm, KD07 hiện nhãn Cần hoàn, không thuộc bộ lọc Còn phải thu). AC45, AC46 mới.
- [x] R03, 2.2, 5.1, AC16: chỉ báo Tạo sớm chỉ hiện khi Booking chưa đạt điều kiện, mất khi đạt (RSD DH07 R06). Hình W01 có Lefebvre, Dupont Tạo sớm, cả hai còn đợt 1 chưa thu nên đúng, không dựng lại.
- [x] 1.4, R01, AC47: Quản trị mở KD08 xem và chuyển người phụ trách Booking (RSD KD08 R11); DH08 xem theo phạm vi.
- [x] 1.3: ghi hủy Booking → yêu cầu Tour Đã hủy; Chuyển sang Điều hành, chuyển người phụ trách làm ở KD08.
- Mục 4 cũ “Tình trạng đợt và ngưỡng Đến hạn 7 ngày (Quản trị cấu hình)” nay là quyết định của người dùng (tham số chung), không còn tự quyết.
- Mục “Cân nhắc cách đổi người phụ trách Booking” ở phần Thay đổi cần làm ở màn khác: đã giải quyết bởi RSD KD08 R11.
- Wireframe: không có chữ trên hình phải đổi (nhãn “Cần thu trong 7 ngày” đúng với giá trị mặc định); không dựng lại.
- `check-rsd.js RSD-KD07-Danh-sach-Booking-v1.1.md --final`: sạch (17 ảnh, 17 mã W). Đã xóa tệp v1.0.

**Tự quyết, cần xác nhận:** Booking Hiệu lực có Tiền thừa hiện Đã thu đủ kèm chỉ báo Tiền thừa và khớp bộ lọc Đã thu đủ (ở KT01.1 Booking này thuộc chip Cần hoàn).

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD07 · Danh sách Booking; chưa có RSD nên viết mới ở `docs/rsd/KD07/`; bàn giao MD + PNG trong ZIP theo quy ước dự án | Toàn bộ tài liệu |
| Q1 (11/11/2026) | Dạng xem | Bảng (mặc định); Lịch mốc Ngày khởi hành (mặc định Kinh doanh) hoặc Hạn thanh toán (mặc định Kế toán; mỗi đợt một thẻ, màu theo còn hạn, đến hạn, quá hạn, đã thu đủ); không Kanban; không kéo thả | 2.6, R12–R14, L4.1–L4.3, W12–W15 |
| Q2 (12/11/2026) | Booking Đã hủy trên Lịch hạn thanh toán | Ẩn đợt của Booking Đã hủy; vẫn tra cứu Booking hủy ở Bảng | R14, E4.1, W15, W17, AC37, AC38 |
| Q3 (12/11/2026) | Nguồn số còn phải thu | Đọc từ KT01; thiếu thì ghi “Chưa có dữ liệu công nợ”, không coi là 0 | R04, R07, E1.4, E1.7, E4.5, W08, AC12, AC13, AC39 |

Đọc từ nguồn, không phải tự quyết: phạm vi Kinh doanh là Booking mình phụ trách (`BOI-CANH-DU-AN.md`, RSD DH08); Booking chỉ hai trạng thái; không có nút tạo; điều kiện tạo hồ sơ và tình trạng Chờ đủ điều kiện, Tạo lỗi theo RSD DH07; bộ lọc hồ sơ có “Chờ đủ điều kiện” theo GHI-CHU DH07.

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Quản trị hệ thống** xem mọi Booking, chỉ xem, có bộ lọc Phụ trách; mốc Lịch mặc định Ngày khởi hành. Điều hành không có mục KD07 (danh sách màn chỉ ghi Kinh doanh, Kế toán).
2. **Khởi hành mặc định** của Kinh doanh, Quản trị là Chưa kết thúc (ngày kết thúc ≥ hôm nay), vì Booking Hiệu lực không bao giờ đổi trạng thái sau Tour và sẽ dồn danh sách. Kế toán mặc định Tất cả vì còn thu sau Tour.
3. **Sắp xếp của Kế toán** theo hạn của đợt chưa thu sớm nhất (quá hạn lên đầu); Kinh doanh theo ngày khởi hành.
4. **Tình trạng đợt và ngưỡng Đến hạn 7 ngày** (Quản trị cấu hình). Đã thu đủ → Quá hạn → Đến hạn → Còn hạn. Đợt thu một phần vẫn tính theo hạn.
5. **Bộ lọc Thanh toán** có 6 giá trị (R07), gồm Cần thu trong 7 ngày (gồm quá hạn) để Kinh doanh nhắc khách.
6. **Hồ sơ Tour** hiện Tour Code (bấm mở DH08), trạng thái hồ sơ; Tạo lỗi kèm “Điều hành đang xử lý”, không có nút ở KD07. (v1.2: bỏ Tạo sớm, Chờ đủ điều kiện theo quyết định 12/11/2026.)
7. **Booking Đã hủy** ở cột Còn phải thu: số đã thu kèm Chờ điều chỉnh hoặc Đã điều chỉnh (kết quả từ KT01.1).
8. **Tab đích ở KD08**: Kinh doanh, Quản trị → KD08.1; Kế toán → KD08.2 tô đợt chưa thu sớm nhất; thẻ đợt trên Lịch → KD08.2 tô đúng đợt.
9. **Lịch ngày khởi hành tô màu theo hồ sơ Tour** (Đã có, Tạo lỗi; v1.2 bỏ màu vàng Chờ đủ điều kiện) thay vì theo trạng thái Booking, vì Hiệu lực chiếm gần hết; Đã hủy xám gạch ngang.
10. **Lịch hạn thanh toán**: bộ lọc lọc Booking, vẽ mọi đợt của Booking khớp (kể cả đã thu đủ); khay Chưa có lịch thanh toán; thẻ ghi tên khách và số tiền, đợt và mã Booking khi di chuột; trong ngày xếp Quá hạn → Đến hạn → Còn hạn → Đã thu đủ. Khi KT01 lỗi, thẻ xám.
11. **Không có xuất Excel, không có thao tác hàng loạt** (nguồn không yêu cầu; tổng hợp phải thu xem ở KT01). Không có dòng tổng tiền vì nhiều loại tiền.
12. **Tiền** ở cột Còn phải thu theo loại tiền của lịch thanh toán, không quy đổi.
13. **Cột** gộp số khách vào dòng dưới cột Khởi hành; nhãn loại khách ẩn ở góc nhìn có cột Phụ trách để dòng không xuống hàng.
14. **Trạng thái rỗng** có nút Mở danh sách yêu cầu Tour; tiêu đề ghi Booking tạo từ phiên bản Chốt.
15. **Ghi nhớ** dạng xem, mốc, Tháng hay Tuần theo người dùng qua các phiên; lần đầu là Bảng.
16. **Màn hẹp** dưới 1100 px: Lịch chuyển Tuần, khay xuống dưới lưới. Giới hạn vẽ 500 mục, 3 hàng mỗi tuần (như KD05).

## Thay đổi cần làm ở màn khác

- **RSD KD08 (chưa có).**
  - Nhận tab đích từ KD07: KD08.1 (Kinh doanh), KD08.2 kèm tham số đợt cần tô (Kế toán, thẻ đợt). Trả về KD07 giữ ngữ cảnh.
  - Từ chối mở khi người dùng ngoài phạm vi, kèm thông báo (E2.1).
  - Chốt quy tắc mã `BK-YYMM-NNNN`; loại tiền của lịch thanh toán (giả định cùng loại tiền Booking).
  - Cân nhắc cách đổi người phụ trách Booking (KD05 R08 không đổi người phụ trách Booking; chưa có nơi nào chuyển Booking khi Kinh doanh nghỉ).
- **KT01.** Cung cấp theo lô cho một trang Booking: đã thu theo đợt, tổng đã thu, còn phải thu, tình trạng điều chỉnh sau hủy và kết quả. Phân biệt “không có bản ghi” với “bằng 0”.
- **DH07.** Cung cấp tình trạng Tạo lỗi cho KD07 (v1.2: không còn Chờ đủ điều kiện, số còn thiếu).
- **DH08.** Phần đầu DH08 ghi “Phải thu còn 152.400.000 ₫” cho TP-2611-0042 (VND), trong khi KD07 ghi 26.894 EUR theo loại tiền lịch thanh toán của BK-2610-0137. Cần thống nhất DH08 hiện theo loại tiền gốc hay quy đổi VND.
- **Danh sách màn (KD07).** Bỏ chữ “Đề xuất, ngoài Level 1 (DX01)” khi người dùng duyệt RSD; thêm Quản trị hệ thống (xem); ghi bộ lọc Hồ sơ Tour có Đã có hồ sơ, Tạo lỗi; bộ lọc Thanh toán theo R07.
- **QT02.** Quyền xem KD07 cho Kế toán, Quản trị; phạm vi Booking của Kinh doanh.
- **Quản trị.** Cấu hình ngưỡng Đến hạn của đợt thanh toán (mặc định 7 ngày).

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy chỉ có bí danh Python của Microsoft Store nên chưa chạy `check-rsd.py`): 17 tham chiếu ảnh, 17 mã W, exit 0, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E. Không còn nhãn “Đề xuất”, “Chờ đặc tả”, “TBD”.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`.
- Đã xem trực quan: W01, W02, W03, W07, W08, W09, W11, W12, W13, W14, W15, W16, W17. Đã sửa: W11 (nhãn loại khách làm dòng xuống hàng; ô Khởi hành bị tô như đang lọc dù là mặc định của Kế toán), W13 (nhãn thẻ bị cắt mất số tiền: bỏ “Đn”, thu hẹp khay), W14 (bảng nhỏ tràn đáy), W03 (bảng chọn lệch vị trí). Chưa mở lại W04, W05, W06, W10 (cùng khung với W01, W07 đã xem).
- Trạng thái không có ảnh riêng, chỉ mô tả bằng chữ: Tạo lỗi (E1.8), một Booking thiếu số liệu (E1.7), lỗi khoảng ngày (E1.5), dạng Tuần, tháng rỗng (E4.2), thẻ xám khi KT01 lỗi ở mốc Hạn thanh toán (E4.5), Tour Code khóa (E2.5).
- Số liệu đã đối chiếu: Của tôi, Chưa kết thúc: Hiệu lực 12 + Đã hủy 2 = 14; sau khi hủy BK-2611-0140: 11 + 3 = 14. Cần thu trong 7 ngày (12/11–19/11): Tanaka (quá 5 ngày), Lefebvre (quá 2 ngày), Müller BK-2610-0137 (13/11), Sunrise (17/11), Dupont (18/11) = 5. Müller: 4 Booking của Nam (BK-2602-0021, BK-2609-0102, BK-2610-0137, BK-2611-0158), khớp KD05 (BK-2509-0058 do Lê Thu Hà phụ trách nên không hiện) và KD06 W42 (BK-2611-0158 từ v3 50.750 EUR; đợt 1 30% = 15.225 EUR). BK-2610-0137: 38.420 = 11.526 + 26.894 EUR. Lịch 12/2026: 6 Booking khởi hành (Kyoto, Kim, Rossi, Les Amis, Brown, Sunrise). Lịch hạn 11/2026: 21 đợt = 3 quá hạn (Tanaka 07/11, Lefebvre 10/11, Wagner 10/11) + 5 đến hạn (13, 14, 15, 17, 18/11) + 4 đã thu đủ (Nordic 01/11, Green Path 03/11, Kim 10/11, Rossi 11/11) + 9 còn hạn (Kyoto 21/11, Kim 25/11, Müller 25/11, Rossi 28/11, 5 đợt ngày 30/11). Tour Code, Booking chờ khớp DH07 (Lefebvre TP-2611-0052 tạo sớm; Brown & Co chưa có lịch thanh toán; Smith TP-2611-0049 Booking đã hủy); BK-2611-0149 Hanami đã hủy 10/11 khớp KD06 W47.

## Sửa sau rà chéo 12/11/2026

- **Bộ lọc Yêu cầu đổi lịch trình** (người dùng chốt 12/11/2026, để RSD CH03 có thẻ VT-KD-06): Tất cả, Đang chờ, Quá hạn phản hồi; chọn một giá trị, mặc định Tất cả. Đang chờ = Booking có yêu cầu Chờ Kinh doanh (RSD DH08 2.3, R18; KD08 R13). Quá hạn phản hồi = trong đó có yêu cầu mà hôm nay sau ngày hạn phản hồi, cùng cách tính với chỉ báo Quá hạn phản hồi (RSD DH08 E3.11), tính lúc đọc (Q6). Sửa 1.5, 2.1, 2.3, R07 (kể cả tên mục), 5.1, 5.2; thêm AC51, AC52.
- **Tự quyết:** bộ lọc thả xuống trên thanh lọc như Thanh toán, không thêm cột hay chỉ báo trên dòng (banner yêu cầu đã có ở KD08 khi mở dòng). Không đổi luồng, trạng thái, quyền.
- Hình chưa dựng lại: thanh lọc trên W01–W17 chưa có ô Yêu cầu đổi lịch trình.
- **Kiểm tra.** `check-rsd.py`: 17 ảnh, 17 mã W, không lỗi.

## Cách hiểu đã chọn khi làm danh sách dạng Bảng (ticket 53, 17/11/2026)

- **Mặc định theo vai trò (R01, R08, 2.3).** Màn ghi mặc định lên URL khi mở không có tham số; API không áp mặc định. Vai trò thuộc phòng Kinh doanh (kể cả khi có thêm vai trò khác): Của tôi bật, Khởi hành Chưa kết thúc, chip Hiệu lực, sắp theo ngày khởi hành. Kế toán: Của tôi tắt, Khởi hành Tất cả, chip Hiệu lực, sắp theo hạn đợt chưa thu. Quản trị hệ thống (không có vai trò Kinh doanh): Của tôi tắt (R01) và Khởi hành Chưa kết thúc, sắp theo ngày khởi hành như Kinh doanh (2.3, R08), theo chữ RSD thay cho câu “others like Accounting” của hợp đồng scenario.
- **Tab đích (R09).** Kinh doanh, Quản trị: KD08.1. Kế toán: KD08.2 với `?installment=<số>` của đợt đang hiện trên dòng; dòng đó được tô (`aria-current`).
- **Trạng thái rỗng (E1.1, E1.3).** `emptyReason`: `NO_OWN_BOOKINGS` khi Của tôi bật mà người dùng không phụ trách Booking nào (W07); `MINE_FILTER` khi Của tôi bật mà không khớp (W05 kèm “Đang lọc Booking của tôi · Tắt Của tôi”); `NO_MATCH` khi Của tôi tắt; thêm `NO_BOOKINGS` khi hệ thống chưa có Booking nào (“Chưa có Booking nào”, E1.3 câu cuối).
- **Sắp xếp.** Tham số `sort=DEPARTURE|NEXT_DUE|CREATED`, thêm `:desc` khi bấm tiêu đề lần hai; ba cột sắp được: Booking (ngày tạo), Khởi hành, Còn phải thu (hạn đợt chưa thu; Booking không có đợt chưa thu xếp sau theo ngày khởi hành).
- **Không lấy được số liệu KT01 (E1.4).** Dùng bước lỗi `bookings.readReceivables` như KD08: danh sách vẫn tải, cột Còn phải thu ghi “Chưa có dữ liệu công nợ”, Booking chưa có lịch thanh toán vẫn ghi “— Chưa có lịch thanh toán”, banner vàng có Thử lại.
- Bộ lọc Thanh toán, Yêu cầu đổi lịch trình, dạng Lịch là của ticket 54, 55; ngày hủy, lý do hủy trên dòng là của ticket 69 (Hủy Booking); kết quả điều chỉnh sau hủy của ticket 79–80.

**17/11/2026 · ticket 54 (cách hiểu đã chọn, số liệu thanh toán).**
- **Bộ lọc Thanh toán (R07).** Tham số `payment=ALL|OUTSTANDING|DUE_SOON|OVERDUE|PAID|NO_SCHEDULE|NO_DATA`, lọc trước khi đếm chip (AC14). Còn phải thu: số KT01 > 0 (Booking Đã hủy chỉ khớp khi KT01 trả nghĩa vụ còn lại, đến với ticket 79–80). Cần thu trong n ngày, Có đợt quá hạn: Booking Hiệu lực có đợt chưa thu sớm nhất Đến hạn hoặc Quá hạn (đợt chưa thu sớm nhất là đợt có hạn sớm nhất nên đủ để biết có đợt quá hạn). Chưa có lịch thanh toán chỉ Booking Hiệu lực.
- **KT01 không trả số liệu (E1.4).** API không áp bộ lọc Thanh toán (`applied.payment = ALL`, `paymentFilterAvailable: false`); ô lọc xám, khóa, banner thêm “Bộ lọc Thanh toán đang chọn đã về Tất cả” khi URL đang có giá trị lọc. “Chưa có lịch thanh toán” đọc từ lịch của KD08.2, nên vẫn đúng khi KT01 lỗi (AC12).
- **Thiếu số liệu của một Booking (E1.7).** Booking có lịch mà KT01 không có bản ghi công nợ, hoặc bước lỗi `bookings.readReceivables:<mã Booking>`: dòng đó Chưa có dữ liệu công nợ, chỉ khớp bộ lọc Chưa có dữ liệu công nợ.
- **CGD-AC12 ở KD07.** KD07 không có dòng tổng: mỗi dòng một Booking, một loại tiền của lịch thanh toán, không cộng giữa các Booking (R04). Còn phải thu nhiều loại tiền của khoản Phát sinh (Q18) đến với ticket 79.

**17/11/2026 · ticket 79 (cách hiểu đã chọn, nhiều loại tiền và tiền thừa).**
- **Còn phải thu theo loại tiền (R04, Q18).** Dòng `payment.outstandingByCurrency` liệt kê mỗi loại tiền còn phải thu (đợt và khoản Phát sinh), không cộng lẫn; `outstanding` là dòng loại tiền Booking, không còn thì dòng đầu. Đợt hiện trên dòng là đợt hoặc khoản Phát sinh chưa thu đủ có hạn sớm nhất (`installment.kind: 'EXTRA'`, ghi “Phát sinh · hạn …”).
- **Tiền thừa.** Đã thu đủ kèm chỉ báo “Tiền thừa …” theo từng loại tiền (`payment.overpayment`), không ghi số âm. “Đã điều chỉnh · Cần hoàn …” là của ticket 80.

**17/11/2026 · ticket 55 (cách hiểu đã chọn, dạng Lịch).**
- **Ghi nhớ (R12, U3).** Dạng xem, mốc và Tháng/Tuần nhớ chung một lựa chọn `calendar` của màn KD07 theo người dùng, lưu ngay khi đổi (không gom một giây), để đăng xuất ngay sau đó vẫn giữ. Mở KD07 từ menu (không tham số) thì mở lại dạng và mốc dùng lần cuối; mở bằng đường dẫn có tham số thì theo đường dẫn. URL Lịch: `?view=calendar&anchor=DEPARTURE|DUE_DATE&month=YYYY-MM` (tháng bỏ trống là tháng hiện tại, hoặc tháng đầu của khoảng Khởi hành đang lọc).
- **API.** `GET /api/bookings/calendar?<bộ lọc của danh sách>&anchor=&month=` trả các ngày của lưới tháng (tuần từ Thứ 2). Mốc Hạn thanh toán: số tiền, hạn của đợt đọc từ lịch thanh toán KD08.2, tình trạng và đã thu từ KT01; KT01 lỗi (bước lỗi `bookings.readReceivables`) thì thẻ `NO_DATA` màu xám, banner vàng có Thử lại. Giới hạn hàng mỗi tuần và số mục tối đa là `limits.bookingCalendarRowsPerWeek` (3), `limits.bookingCalendarMaxItems` (500) của tệp cấu hình (C2).
- **“+n” ở mốc Hạn thanh toán.** Mỗi ô ngày hiện tối đa 3 thẻ (thẻ không vắt qua ngày nên “tối đa 3 hàng mỗi tuần” tính theo ô ngày); bảng nhỏ liệt kê mọi đợt của ngày.
- **Chữ.** Nút mốc hiện “Ngày khởi hành”, “Hạn thanh toán” như hình, tên cho trình đọc màn hình “Theo ngày khởi hành”, “Theo hạn thanh toán”. Nút ở W15 ghi “Xem Booking Đã hủy ở Bảng” (không kèm số; số Booking Đã hủy ở ngay chip). Chân khay Chưa có lịch thanh toán không lặp câu “Booking Đã hủy không hiện ở mốc này” (ghi chú cạnh chip đã nói khi chip là Tất cả).
- **Quay lại từ KD08 (E4.7).** Thanh vừa mở mà không còn khớp chip (vừa hủy) vẫn vẽ tại chỗ, mờ, xám gạch ngang, kèm “Không còn khớp bộ lọc”, tới lần tải lại kế tiếp.
- **Bộ chuyển dạng xem khi đang chọn dòng (CGD K1.14, K3.09, AC109).** Thanh hàng loạt thay hàng chip nên bộ chuyển dạng xem đứng ở cuối thanh hàng loạt; đổi dạng thì bỏ lựa chọn. Áp cho KD05 (KD07 không có ô chọn).

**17/11/2026 · rà soát ticket 55 (cách hiểu đã chọn).**
- **Tháng mở đầu (R13, R14).** Mốc Ngày khởi hành: tháng hiện tại; đang lọc khoảng ngày khởi hành tự chọn thì tháng của ngày đầu khoảng; chọn nhanh “Tháng sau” thì tháng sau (khoảng bắt đầu ở đó); các chọn nhanh khác bắt đầu từ hôm nay nên là tháng hiện tại. Mốc Hạn thanh toán: luôn tháng hiện tại, bộ lọc ngày khởi hành không đổi tháng mở đầu. Tháng trên URL (`month=`, quay lại từ KD08) luôn thắng.
- **Màn hẹp (E4.8).** Cửa sổ dưới 1100 px: lưới luôn là Tuần (nút Tháng không bấm được, lựa chọn Tháng/Tuần đã nhớ giữ nguyên cho lúc cửa sổ rộng lại); khay Chưa có lịch thanh toán xuống dưới lưới, rộng bằng lưới.
- **Người phụ trách ngừng hoạt động** hiện “(ngừng hoạt động)” cả ở chú thích thanh, thẻ, bảng nhỏ “+n” và khay.

**19/11/2026 · ticket 92 (cách hiểu đã chọn, nhớ bộ lọc).**
- **Nhớ bộ lọc (1.2, 5.1, U3).** Của tôi, chip, Khởi hành (kể cả khoảng ngày), Thanh toán, Yêu cầu đổi lịch trình, Phụ trách, sắp xếp nhớ ở lựa chọn `list` của KD07 theo người dùng; ô tìm, trang, tháng của Lịch không nhớ. Mở từ menu (không tham số): bộ lọc đã nhớ, chưa có thì mặc định theo vai trò (W01, W11), cộng dạng và mốc của lựa chọn `calendar`. Liên kết ghi Của tôi và chip (thẻ Việc của tôi) mở đúng như liên kết và không ghi đè lựa chọn đã nhớ (U3.06).
