# Ghi chú làm việc · RSD QT03 v1.0

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | QT03 · Nhật ký thao tác người dùng; chưa có RSD nên viết mới; bàn giao MD + PNG trong `docs/rsd/QT03/` theo BOI-CANH | Toàn bộ tài liệu |
| Q1 | Nhật ký ghi những gì | Chỉ thao tác ghi dữ liệu; không ghi đăng nhập, không ghi lượt xem | 1.3, R01, AC05 |
| Q2 | Ai xem QT03 | Chỉ Quản trị hệ thống; người dùng nghiệp vụ xem lịch sử trong hồ sơ | 1.4, E1.7, W16, AC02 |
| Q4 | Lịch sử nhân sự (DH06) và Tour mẫu (KD01-KD02) vốn ghi “xem ở QT03” | Chỉ Quản trị xem; không thêm lịch sử trong DH06, KD02 | Đã ghi câu chốt vào RSD DH06 R09 và RSD KD01-KD02 R09; BOI-CANH |
| Q3 | Lưu, che, xuất | Giữ 24 tháng rồi tự xóa; không ai sửa, xóa nhật ký; che giá trị nhạy cảm; xuất Excel theo bộ lọc, lần xuất được ghi nhật ký; xóa khách thì nhật ký cũ bỏ giá trị cá nhân | R05–R08, R14, L3.1, W06, W07, W11, W12, W15 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Ghi trong cùng giao dịch** (R05): ghi nhật ký lỗi thì thao tác nghiệp vụ không lưu. Phương án khác là ghi bất đồng bộ (thao tác vẫn lưu, nhật ký có thể thiếu).
2. **Tác động kèm theo** (R03): thay đổi hệ thống tự làm do thao tác người dùng gây ra ghi chung một mục; việc chạy theo lịch (gửi chiến dịch, tự xóa nhật ký) không ghi QT03.
3. **Thao tác hàng loạt là một mục** trên danh sách, chi tiết từng bản ghi trong bảng trượt; Excel tách từng bản ghi (R04).
4. **Danh sách thao tác nhạy cảm** (R13): Xóa, Hủy, Mở lại, Chuyển phụ trách, Xuất tệp, Publish/Thu hồi link, mọi thao tác trên Người dùng, Vai trò, Cấu hình.
5. **Cách che từng loại trường** (R07): hộ chiếu 4 đầu + 2 cuối; email 2 ký tự đầu + tên miền; điện thoại mã quốc gia + 3 số cuối; ngày sinh chỉ năm; địa chỉ chỉ thành phố, quốc gia; số tài khoản NCC 4 số cuối; mật khẩu, khóa API chỉ ghi “đã đổi”. Không có nút xem bản đầy đủ.
6. **Không che tên** khách, người liên hệ, quốc gia (cần để tìm); khi xóa khách thì bỏ giá trị cá nhân, giữ mã, tên (khớp RSD KD03-KD04).
7. **Mặc định 7 ngày qua**, 50 dòng mỗi trang, sắp theo thời điểm giảm dần, chỉ sắp được theo thời điểm.
8. **Tìm từ 3 ký tự**, chỉ trong mã và tên đối tượng; không tìm trong giá trị trước, sau.
9. **Giới hạn xuất 20.000 mục**; tên tệp `QT03_<từ>_<đến>.xlsx`; không lưu tệp.
10. **Tự xóa hằng ngày lúc 02:00**; thời gian lưu không cấu hình trên giao diện.
11. **Mã thao tác `TT-YYMM-NNNNNNN`.**
12. **Mở bản ghi** chỉ ở chân bảng trượt (không ở mã trên dòng), mở bản hiện tại, theo quyền Quản trị ở QT02; khóa kèm lý do khi bản ghi đã xóa hoặc không có quyền.
13. **Lọc theo một bản ghi** gồm cả đối tượng liên quan, tác động kèm theo, bản ghi trong lô; Thời gian tự đổi thành Toàn bộ.
14. **Chỉ Bảng**, không Kanban, Lịch (mục nhật ký không có trạng thái, không có ngày nghiệp vụ).
15. **Không lưu thân email, tệp đính kèm, tệp xuất** trong nhật ký; chỉ người nhận, tiêu đề, mã lần gửi, tên tệp.
16. **Bảng trượt hiện tối đa 50 trường**, giá trị dài quá 300 ký tự cắt ngắn.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (QT03).** Bỏ “Đề xuất”: ghi chỉ Quản trị hệ thống; chỉ thao tác ghi; giữ 24 tháng; che giá trị nhạy cảm; xuất Excel; chip Thao tác nhạy cảm; lọc theo bản ghi.
- **RSD DH06** (dòng “Lịch sử xem ở QT03, lọc theo đối tượng Nhân sự”) và **RSD KD01-KD02** (“Lịch sử xem ở QT03, lọc theo đối tượng Tour mẫu”): đã xử lý theo Q4 (chỉ Quản trị xem), đã ghi vào hai RSD.
- **QT01 (chưa có RSD).** Liên kết “Xem nhật ký thao tác” ở hồ sơ người dùng mở QT03 lọc theo người đó, 30 ngày qua; mọi thao tác trên tài khoản ghi QT03 (nhạy cảm); mật khẩu chỉ ghi “đã đổi”.
- **QT02 (chưa có RSD).** Quyền xem QT03 chỉ cho Quản trị hệ thống; quyền xem từng màn nguồn của Quản trị quyết định nút Mở bản ghi; mọi thao tác ghi nhạy cảm.
- **QT04, QT05 (chưa có RSD).** Khai sự kiện ghi QT03.
- **Mọi màn có dữ liệu cá nhân** (KD04, DH08.4, DH06, DH03): gắn cờ trường nhạy cảm theo R07 để kho nhật ký che khi ghi.
- **KD03-KD04.** Xóa khách thì bỏ giá trị cá nhân trong mọi mục QT03 cũ của khách (R08), không chỉ mục Xóa.
- **Menu.** Nhóm Quản trị thêm mục Nhật ký thao tác.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy không có Python nên chưa chạy `check-rsd.py`): 16 tham chiếu ảnh, 16 mã W, không cảnh báo.
- `sync-md.js` đã đồng bộ tên hình với `captions.js`; `indent-images.js` không phải sửa dòng nào.
- Đã xem trực quan sau lần chụp cuối: W01, W02, W04, W05, W06, W07, W08, W09, W10, W12, W13, W15. Chưa mở: W03, W11, W14, W16 (cùng khung với W01, W13).
- Số liệu đã đối chiếu: 7 ngày qua Tất cả 1.284, Nhạy cảm 37 (W01, W04, W11). Lê Thu Hà + Khách hàng: 4 mục, 1 nhạy cảm (KH-00412). BK-2610-0137: 19.200 EUR = đợt 1 6.000 + đợt 2 10.200 + đợt 3 3.000; đã thu 6.000 (02/11) + 3.000 (11/11) = 9.000 (W05, W08, W10). Lô chuyển phụ trách: 12 = 11 Đã chuyển + 1 Bỏ qua (W01, W09).
- `docs/rsd/BOI-CANH-DU-AN.md` đã thêm thuật ngữ, chủ sở hữu dữ liệu nhật ký và nguyên tắc đã chốt (sửa trực tiếp, không sao lưu).

## 12/11/2026 · v1.1 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-QT03-Nhat-ky-thao-tac-nguoi-dung-v1.1.md` (đã xóa v1.0).
- **R15.** Thêm dòng QT06–QT12 theo RSD QT06-QT12 R13 (Xuất tệp, đối tượng “Báo cáo QTxx”). Dòng KT01 lấy đủ sự kiện từ RSD KT01 2.4 (Lịch sử), R06 (Dùng tiền thừa ghi lịch sử), R07, R09, R11, R12 (sửa ngày chứng từ, tệp, ghi chú). Câu “thay đổi cần làm khi viết RSD” chỉ còn cho QT02 (chưa có RSD QT02); QT01 (R09), QT04 (R16), QT05 (R19) có dòng riêng theo RSD của các màn đó.
- **R12.** Bộ lọc Đối tượng thêm nhóm Báo cáo (Báo cáo QT06 … QT12). Không có hình nào hiện danh sách Đối tượng nên không dựng lại hình.
- **1.2.** Thêm QT05 → QT03 (RSD QT05 1.3: menu ⋯ → Lịch sử thay đổi, chỉ Quản trị). Sửa thêm dòng QT01 → QT03: RSD QT01 1.2 đã có liên kết “Xem thao tác của người này” ở tab Lịch sử, nên bỏ “thay đổi cần làm ở QT01” và dùng đúng nhãn của QT01 (ngoài danh sách việc được giao, sửa vì cùng mục 1.2 và đã lỗi thời).
- Dòng nguồn ghi phiên bản các RSD đã đối chiếu: KT01 v1.5, QT01 v1.2, QT04 v1.3, QT05 v1.2, QT06-QT12 v1.2.
- `check-rsd.js --final`: 16 ảnh, 16 mã W, đạt.

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-QT03-Nhat-ky-thao-tac-nguoi-dung-v1.2.md` (`git mv` từ v1.1). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `BOI-CANH-DU-AN.md` bản sửa 12/11/2026.

**Thay đổi**

- **Q1.** “Chỉ Quản trị hệ thống xem QT03” thành quyền mặc định, cấu hình ở QT02. Mục 1.4 đổi thành “Quyền mặc định theo vai trò” (QT03 · thao tác). E1.7, R14, R16, AC02 ghi theo quyền thay vì vai trò.
- **Q25.** Quản trị xem được mọi màn: Mở bản ghi theo quyền của người xem ở màn nguồn (1.2, L2.1, R10). E2.4 và AC26 viết lại cho trường hợp QT02 cấp quyền xem QT03 cho vai trò khác không xem được màn nguồn; với Quản trị không xảy ra. Giữ số E2.4, AC26.
- **C3.** Bỏ lịch sử chiến dịch KD10 (1.3), việc gửi chiến dịch theo lịch (1.3), “số ghi nhận chăm sóc” ở mục Xóa khách (L2.3, R08), “chiến dịch Nháp” (E2.3), đối tượng Chiến dịch chăm sóc (R12), dòng KD09, KD10 ở R15. Báo cáo còn QT07–QT12; tên RSD báo cáo đổi thành QT07-QT12 (nguồn, R12, R15).
- **Q5.** Nhật ký ghi trong cùng giao dịch (1.1, R05); dòng DH07 ở R15 bỏ “thử lại khi tạo lỗi”, ghi tạo hồ sơ là tác động kèm theo của lưu Booking.
- **Q6.** 1.3: trạng thái theo thời gian tính lúc đọc nên không có gì để ghi; việc theo lịch còn lại là tự xóa nhật ký và tạo thông báo.
- **Q7.** R02: mã `TT-YYMM-NNNNNNN` YYMM theo giờ Asia/Ho_Chi_Minh, cho phép thủng số.
- **U3.** Bộ lọc nhớ theo người dùng, cả sau khi đăng xuất (1.2, R11, AC01). Trang, vị trí cuộn, dòng đang chọn vẫn giữ trong phiên.
- **C2.** R07 bỏ “khóa API (cấu hình AI)”: cấu hình AI nằm ở tệp, không có thao tác ghi trên giao diện.
- **Thuật ngữ.** R15 dòng DH02: “cho phép sử dụng” đổi thành “công tắc Đang dùng” (từ cấm ở BOI-CANH).
- **Q3.** Mục “Thiết kế do người viết tự quyết, cần xác nhận” (16 mục ở trên) coi như đã chốt: chấp nhận mặc định (Q3).
- 1.5: dòng quyền trỏ R14 (xuất Excel) thay cho R04 (thao tác hàng loạt), vì R04 không nói về quyền.

**Tự đơn giản hóa giao diện (U6)**

- Nhãn Xóa, Hủy đổi từ đỏ sang xám (K6: đỏ chỉ cho việc phải xử lý); Gọi AI đổi sang xám nhạt để khác hai nhãn này. Thao tác rủi ro vẫn nhận ra bằng cờ ⚑ Nhạy cảm (2.3).

**Hình chưa cập nhật** (đã ghi dòng ngay dưới hình)

- Mọi hình: mục menu Chăm sóc khách hàng; danh sách nền ở các hình bảng trượt (W05–W10) còn nhãn Xóa, Hủy màu đỏ và dòng KH-00412 “2 ghi nhận chăm sóc” (ghi chung một lần ở phần Dữ liệu trên hình).
- W01, W03, W04: nhãn Xóa, Hủy màu đỏ; dòng KH-00412 “2 ghi nhận chăm sóc”.
- W07: dòng “Ghi nhận chăm sóc · 2 ghi nhận”.
- W16: câu “chỉ dành cho Quản trị hệ thống”; menu trái còn hiện các mục Quản trị cho người dùng Kinh doanh (U5 ẩn).

**Kiểm tra**

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py`: 16 ảnh, 16 mã W, không lỗi.
- `grep` từ cấm: chỉ còn ở lịch sử phiên bản, ghi chú hình, “Thử lại” khi lỗi tải hoặc mất mạng, và “trong phiên” cho trang, vị trí cuộn.

## Bổ sung vai trò HDV 12/11/2026 (giữ v1.2)

- **R15:** thêm dòng HD01: HDV thêm, sửa, xóa mục nhật ký, sự cố, chi phí phát sinh, chi phí thực tế (kèm tệp chứng từ); ghi như DH08 (đối tượng Hồ sơ Tour, nhãn Tạo, Sửa, Xóa; Xóa có cờ nhạy cảm như mọi Xóa).
- **Tự quyết (U6):** Mở bản ghi của mục HD01 mở DH08 ở tab tương ứng (R10), vì HD01 chỉ hiện Tour mà chính người xem được phân công (RSD QT02 R16); người xem QT03 mặc định là Quản trị, có `DH08.xem`.
- **Bộ lọc Màn:** yêu cầu bổ sung ghi “bộ lọc Màn thêm HD01”, nhưng QT03 v1.2 không có bộ lọc theo màn (R12 chỉ có Thời gian, Người dùng, Đối tượng, Thao tác; Màn là cột). Lượt này chỉ thêm HD01 vào ví dụ của cột Màn; mục HD01 lọc được bằng Đối tượng Hồ sơ Tour, Người dùng, thẻ Bản ghi. Không tự thêm bộ lọc mới (xem câu hỏi).
- Thêm AC36, AC37. `check-rsd.py` mã thoát 0.

**Câu hỏi cho người dùng**

1. Có cần thêm bộ lọc Màn cho QT03 (ví dụ để xem riêng mọi thao tác HDV ghi ở HD01) không? Hiện xem được bằng bộ lọc Người dùng hoặc Đối tượng.

## Bổ sung 12/11/2026 · HDV chốt thêm (giữ v1.2)

Nguồn: BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)”: HDV xem được số hộ chiếu đầy đủ ở HD01, mỗi lần hiện được ghi vào QT03; đây là ngoại lệ của quy tắc “QT03 không ghi lượt xem”. Điều hành sửa và xóa được mục Do HDV ghi, mỗi lần ghi QT03 (mặc định Q3 ngay sau đoạn đó).

**Đã sửa (dòng “Thay đổi ở v1.2 (bổ sung 12/11/2026 · HDV chốt thêm)”):** 1.3 (ngoại lệ duy nhất của “Không ghi”); 1.5 (dòng truy vết); 2.3 (nhóm thao tác Xem dữ liệu cá nhân, nhãn Hiện số hộ chiếu, màu vàng, nhạy cảm); R01 (ngoại lệ, nội dung mục, ghi trong giao dịch, ghi lỗi thì không trả số); R10 (Mở bản ghi của mục Hiện số mở DH08.4, của mục Xuất tệp PDF mở DH08.1); R13 (Hiện số hộ chiếu là thao tác nhạy cảm); R15 (dòng HD01 thêm Hiện số hộ chiếu, Xuất tệp PDF chương trình; dòng DH08 thêm Điều hành sửa, xóa mục Do HDV ghi, Bỏ số HDV); thêm AC38–AC40.

**Tự quyết (U6):**
- Nhóm thao tác riêng “Xem dữ liệu cá nhân” thay vì xếp vào Sửa hay Xuất tệp, để Quản trị lọc riêng các lượt hiện số và không lẫn với thao tác ghi dữ liệu. Màu vàng (không đỏ, K6).
- Mục Hiện số ghi trường Số hộ chiếu với giá trị đã che ở cột Sau (Trước “—”), theo R07 kho không giữ số đầy đủ; đối tượng chính Hồ sơ Tour, đối tượng liên quan là khách, để lọc theo Tour Code hoặc tìm theo tên khách.
- Tải PDF chương trình ở HD01 ghi như mọi lần xuất tệp (R01 đã có “xuất tệp”), không phải ngoại lệ thứ hai.

**Kiểm tra.** `check-rsd.py`: 16 ảnh, 16 mã W, không lỗi. W01 (bộ lọc Thao tác) chưa có nhóm mới trên hình; không dựng lại.

**Ticket 66 (17/11/2026; rà soát 17/11/2026, điều phối chốt theo quy tắc tài liệu vênh) · Đóng Tour không nhạy cảm, Mở lại Tour nhạy cảm.** R13 và QT03-AC09 kể đích danh thao tác nhạy cảm (Xóa, Hủy, Mở lại, Chuyển phụ trách, Xuất tệp, Publish/Thu hồi link, Hiện số hộ chiếu, mọi thao tác trên Người dùng, Vai trò, Cấu hình); “Đóng” không có trong danh sách, còn DH08 R16 và QT03 R15 chỉ đòi ghi nhật ký khi Đóng Tour. Cách hiểu giữ mọi câu cùng đúng: nhãn Đóng (`CLOSE`, đối tượng Hồ sơ Tour, màn DH08) được ghi như mọi thao tác ghi, không có cờ ⚑ Nhạy cảm, thuộc nhóm lọc Sửa; Mở lại (`REOPEN`) có cờ. Tiêu chí “Đóng và Mở lại là thao tác nhạy cảm” của ticket 66 đọc theo cách hiểu này (ghi ở Comments của ticket); dòng hợp đồng API “close/reopen tour” và scenario đã sửa theo (`packages/shared/src/audit.ts`, `scenarios/contracts/bookings-operations.md`, scenario DH08 R16 audit ở `scenarios/dh08/log-costs-close.test.ts`).

**Ticket 78 (18/11/2026) · mục HD01 Hiện số hộ chiếu và Xuất tệp PDF chương trình.**
- Nhóm thao tác “Xem dữ liệu cá nhân” có mã `PERSONAL_DATA_VIEW` (bảng đối chiếu `docs/agents/code-glossary.md`); lọc bằng `?actionGroups=PERSONAL_DATA_VIEW` như mọi nhóm. Mỗi mục trả kèm `actionGroup` (nhóm của nhãn, 2.3) để màn khỏi tính lại.
- “Đối tượng liên quan” (R02) lưu cùng mục khi thao tác nêu một đối tượng: `related { type, name }`, tên lúc thao tác (Hiện số: khách, họ tên). Tìm kiếm (R12) không tìm theo tên này.
- Mục Xuất tệp trả `fileName` lấy từ trường Tên tệp của mục (R02 “Xuất tệp: tên tệp”).
- Mở bản ghi (R10) của mục HD01: Hiện số hộ chiếu → DH08.4 (`/tour-files/<Tour Code>?tab=guests`), Xuất tệp PDF chương trình → DH08.1 (`?tab=overview`), mục nhật ký, sự cố → DH08.6 (`?tab=log`), chi phí phát sinh → DH08.7 (`?tab=extra-costs`) (theo trường đổi đầu tiên của mục; sự cố kèm chi phí mở DH08.6), theo `DH08.xem` của người xem; chi phí thực tế (DH08.8) thêm cùng ticket 76; không có quyền thì `recordLink { path: null, lockedReason: 'NO_VIEW_PERMISSION' }` (E2.4). Các mục khác chưa có quy tắc thì chưa có `recordLink` (bảng quy tắc ở `apps/api/src/audit/record-links.ts`, các ticket sau thêm dòng).

## Khi code ticket 88 (18/11/2026): Mở bản ghi trên mọi màn, tìm theo mã thao tác

- **Mở bản ghi (R10) theo loại đối tượng của mục**, tab theo mã màn đã ghi khi mã màn nêu tab: Booking → KD08 (KD08.2 → tab Điều khoản và lịch thanh toán, `?tab=payments`); Hồ sơ Tour → DH08 tab theo DH08.1–DH08.8 (khác thì Tổng quan); Yêu cầu Tour → KD06 (KD06.2 Hành trình, KD06.3 Báo giá, khác thì Thông tin); Khách hàng → KD04; NCC → DH03; Tour mẫu → KD02 (quyền `KD01.xem`); Mẫu checklist → DH01; Mẫu tài liệu → QT04; Tài khoản → QT01; Vai trò → QT02; Giao dịch ghi ở KT01.1 → KT01 tab Phải thu tìm theo mã GD (quyền `KT01.xem-phai-thu`), ghi ở KT01.2 → tab Phải trả (quyền `KT01.xem-phai-tra`); mục khác ghi ở KT01 mở KT01 theo màn đã ghi (sửa sau review): điều chỉnh sau hủy (KT01.1, đối tượng Booking) → bảng trượt phải thu của Booking, ghi phải trả (KT01.2, đối tượng Hồ sơ Tour) → tab Phải trả tìm theo Tour Code, ghi công nợ phát sinh (KT01.3) → tab Công nợ theo Tour mở Tour đó, theo quyền xem của tab; Nhân sự → bảng trượt DH06 (tra id theo mã NS); Dịch vụ → DH05 trong DH03.3 của NCC (`?service=<id>`, quyền `DH03.xem`); Hợp đồng → DH03.2 với bảng trượt hợp đồng (NCC lấy từ lịch sử NCC mà thao tác ghi, vì số hợp đồng chỉ duy nhất trong một NCC); giá trị danh mục → nhóm QT05 của giá trị (`?value=<id>`); tham số chung, nhóm danh mục, tỷ giá (tháng của ngày), chính sách hoàn hủy, ngày nghỉ lễ → nhóm tương ứng của QT05. Mục HD01 giữ quy tắc của ticket 76, 78.
- **Mục danh sách và mục hàng loạt (sửa sau review, R10 “Khóa kèm lý do”):** nút “Mở bản ghi ↗” vẫn hiện, mờ, kèm lý do: mục Xuất tệp, báo cáo (đối tượng là danh sách) “Đối tượng là danh sách · không có bản ghi để mở”; mục hàng loạt “Thao tác hàng loạt · bấm mã từng bản ghi trong bảng để mở”. W09 ghi “không có nút Mở bản ghi chung”: đọc là không có nút *dùng được*; nút mờ có lý do giữ đúng R10. Bảng của W09: chip Tất cả, Đã chuyển (thao tác Chuyển phụ trách; thao tác hàng loạt khác “Đã áp dụng”), Bỏ qua kèm lý do (từ mã lý do API); mã bản ghi là liên kết tới hồ sơ theo quyền xem của người xem, không có quyền thì chữ thường (E2.4); dòng nhắc “Bấm mã để mở bản ghi.”. Mục của lô mà mã không phải mã bản ghi (lô ghi phải trả KT01.2 ghi “Tour Code · dịch vụ”) không có liên kết.
- **E2.4:** người xem không có quyền xem màn đích: `recordLink { screen, path: null, lockedReason: 'NO_VIEW_PERMISSION' }`; nút “Mở bản ghi ↗” mờ, bên trái ghi “Bạn không có quyền xem <mã màn> · giá trị trước và sau ở trên đã đủ để đối chiếu” (mã màn bỏ phần tab: KT01). 
- **E2.3 bản ghi đã xóa (sửa sau review):** quyết định theo nhật ký: đối tượng thuộc loại xóa được (khách hàng, NCC, hợp đồng, dịch vụ, mẫu checklist, nhân sự, giá trị danh mục) có mục Xóa chưa bị Hoàn tác, lúc xóa bằng hoặc sau mục đang xem: `recordLink { path: null, lockedReason: 'DELETED', deletedAt }`, nút mờ kèm “Bản ghi đã bị xóa lúc dd/mm/yyyy hh:mm” (W07). Mục Xóa ở DH08, HD01 xóa một phần của hồ sơ Tour, không phải hồ sơ, nên không tính. Mã đã xóa rồi được dùng lại (số hợp đồng) thì mục sau lần xóa không bị khóa.
- **Mã màn có tab của KD06 (sửa sau review, R02 “mã màn và tab”):** ghi hành trình (kể cả AI) ghi màn KD06.2; tạo phiên bản báo giá, ghi kết quả, Chốt tạo Booking, publish, gia hạn, thu hồi link ghi KD06.3; Mở bản ghi mở đúng tab đó.
- **R11 quay lại:** mở trong cùng tab trình duyệt; Back trả về đúng URL (bộ lọc, chip, trang, bảng trượt của mục) và vị trí cuộn lúc rời (giữ trong phiên trình duyệt, chỉ một lần).
- **Ô tìm khớp thêm mã thao tác** (cho “Xem tất cả” của nhóm Mục nhật ký ở Ctrl+K, CGD U1.04; sửa sau review): một quy tắc chung cho ô tìm QT03 và nhóm Mục nhật ký: so mã thao tác bỏ “-” và khoảng trắng, khớp chuỗi con như mọi mã (CGD U1.02: “0004812”, “2611 0004812”, “TT-2611-0004812”), ngoài các mục khớp mã, tên đối tượng như cũ. Mã đã bỏ dấu lưu ở cột `code_key` của mục (migration `t88_audit_code_key` điền cho mục cũ).

## Khi code ticket 96 (19/11/2026): R08 với mục có khách là đối tượng liên quan

**Kết quả rà** mọi chỗ ghi mục QT03 có thể mang khách hoặc người liên hệ của khách (grep `related`, `op.object('CUSTOMER'`, `op.effect(`, `mask:` ở `apps/api/src`):

| Thao tác | Khách nằm ở đâu trong mục | R08 |
|---|---|---|
| KD04 tạo, sửa, xóa khách; sửa bảng người liên hệ | Đối tượng chính (người liên hệ là dòng thay đổi `ref` = tên người liên hệ) | Bỏ mọi giá trị cá nhân (đã có từ ticket 42) |
| KD04 chuyển phụ trách một khách, KD03 chuyển hàng loạt, Hoàn tác của hai thao tác này | Đối tượng chính, hoặc bản ghi trong lô (`records`) | Chỉ các dòng của khách (`ref` = mã khách); thao tác chuyển không có trường cá nhân |
| KD04 tạo hoặc lưu khách **vẫn lưu khi trùng** (KD03-KD04 R02, cả tạo nhanh ở KD06.1) | **Đối tượng liên quan**: các hồ sơ trùng (`duplicateOf`), khớp theo email, điện thoại của khách hoặc của người liên hệ, mã số thuế, tên doanh nghiệp | **Trước ticket 96 chưa ghi**: nay ghi mã các hồ sơ trùng vào cột `related_codes` (migration `t96_audit_related_codes` điền cho mục cũ từ dòng `duplicateOf`, và áp R08 luôn cho mục cũ có hồ sơ trùng đã bị xóa trước đó); xóa một hồ sơ trùng thì bỏ mọi giá trị cá nhân của mục đó |
| KD06 tạo, sửa yêu cầu Tour (đổi khách) | Tên đối tượng chính (yêu cầu Tour ghi tên khách, W01 “dòng dưới là tên … khách”) và dòng thay đổi Khách, Người liên hệ (mã · tên, họ tên; không lặp email, điện thoại) | Không có trường cá nhân (R07) để bỏ; mã, tên giữ nguyên theo R08. Không ghi thêm đối tượng liên quan |
| Booking, hồ sơ Tour, KT01, DH08, HD01 (Hiện số: `related { GUEST, tên }` là thành viên đoàn, không phải khách) | Qua yêu cầu Tour của khách | Khách có yêu cầu Tour (kể cả đã hủy) không xóa được (KD03-KD04 R05), nên không có mục nào cần bỏ |

**Cách hiểu đã chọn** (R08 “bỏ giá trị của các trường cá nhân (R07) trong mọi mục cũ có đối tượng chính hoặc liên quan là khách đó và người liên hệ của khách”):
- Mục có khách là **đối tượng liên quan** (hồ sơ khác vẫn lưu khi trùng với khách) bỏ **mọi** giá trị cá nhân của mục, đúng chữ “các trường cá nhân trong mọi mục”: mục đó giữ chính các giá trị đã khớp với khách bị xóa (email, điện thoại trùng). Hồ sơ còn lại vẫn giữ giá trị hiện tại; chỉ nhật ký cũ đổi. Mã (cả mã hồ sơ trùng trong dòng `duplicateOf`), tên, người thao tác, thời điểm, nhãn trường giữ nguyên.
- Mục hàng loạt chứa khách (R04) chỉ bỏ giá trị của dòng thuộc khách đó, vì các khách khác trong lô không phải đối tượng liên quan của nhau.
- Người liên hệ không có mã riêng: hồ sơ trùng theo người liên hệ ghi mã khách sở hữu người liên hệ, nên “liên quan là người liên hệ của khách” đi theo mã khách.
- Đối tượng liên quan theo mã cũng dùng cho R09 (lọc theo bản ghi khớp `related_codes`) và R12 (ô tìm khớp mã đối tượng liên quan, thêm vào `search_text`).
- R05 “ghi nhật ký kỹ thuật”: lần xóa khách ghi một dòng log máy chủ (`CustomerDeletion`: số mục đã bỏ giá trị, mã thao tác, mã khách), không ghi QT03.
- Tìm mục cần bỏ chỉ qua cột có chỉ mục (loại và mã đối tượng, GIN `records`, GIN `related_codes`), trong cùng giao dịch xóa; chỉ ghi lại mục có giá trị cần bỏ. Công tắc lỗi `customers.removePersonalValues` (ADR 0009) lỗi sau khi đã ghi lại các mục cũ, trước khi xóa khách.
