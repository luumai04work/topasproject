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
