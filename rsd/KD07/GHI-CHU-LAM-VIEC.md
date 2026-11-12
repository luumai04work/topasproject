# Ghi chú làm việc · RSD KD07 v1.3

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
| Q0 | Màn cần viết, hướng làm | KD07 · Danh sách Booking; chưa có RSD nên viết mới ở `rsd/KD07/`; bàn giao MD + PNG trong ZIP theo quy ước dự án | Toàn bộ tài liệu |
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
