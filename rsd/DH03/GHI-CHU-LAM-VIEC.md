# Ghi chú làm việc · RSD DH03 v1.5

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q1 | Phạm vi tài liệu | DH03 (3 tab) và bảng trượt DH05 trong cùng một RSD | Mục 3.5, 3.6; W24–W42a |
| Q2 | Ngưỡng Sắp hết hạn; kỳ hiệu lực chồng lấn; xóa hợp đồng | 30 ngày (cấu hình được); **chặn** chồng lấn; chỉ xóa hợp đồng chưa dùng | R01, R06, R13; W16, W21, W21a; AC05, AC19, AC33, AC34 |
| Q3 | Kinh doanh xem thông tin thanh toán? Tắt NCC/dịch vụ ảnh hưởng gì? | Kinh doanh không thấy thông tin và điều khoản thanh toán; tắt chỉ chặn chọn mới, dữ liệu đã có giữ nguyên, hộp thoại nêu số Tour đang dùng | 1.4, R04, R05; W08, W43, W44; AC10, AC35, AC59 |
| Q4 | Nhập file Excel bảng giá (nguồn ghi đề xuất) | Có, kèm xem trước; chỉ đưa dòng hợp lệ vào lưới, người dùng vẫn bấm Lưu | L6.5, R16; W34–W36; AC51–AC53 |
| Q5 | Hợp đồng mới chưa có điều khoản thanh toán thì sao | “Điều khoản thanh toán theo hợp đồng, nên Điều hành nhập luôn” | L4.6, R10, 1.4; W15, W23 |
| Q6 | Xóa dịch vụ, dòng giá | Xóa dịch vụ khi chưa dùng, đã dùng thì tắt; dòng giá xóa được trong lưới | L5.5, R13; W42, W42a |

## Đồng bộ với RSD DH02, DH04 viết cùng ngày

Trong lúc viết DH03, dự án có thêm RSD DH01, DH02, DH04 và `BOI-CANH-DU-AN.md` được bổ sung. Bản DH03 đã chỉnh để khớp, thay cho thiết kế ban đầu:

| Điểm | Thiết kế ban đầu | Sau khi đồng bộ | Nguồn |
|---|---|---|---|
| Nhãn trạng thái NCC, dịch vụ | Cho phép sử dụng, Không cho phép | Đang dùng, Ngừng sử dụng | Thuật ngữ dự án; RSD DH02 R04 |
| Tắt NCC | Luôn hỏi, bắt buộc lý do | Không đang dùng ở đâu thì lưu ngay; đang dùng thì xác nhận, không lý do; Hoàn tác 10 giây; báo Điều hành phụ trách | RSD DH02 R04, R05 |
| Tình trạng hợp đồng ở phần đầu | Theo từng hợp đồng | Theo cấp NCC của DH02 (có “HĐ kế tiếp từ dd/mm”); từng dòng ở DH03.2 vẫn có Sắp áp dụng | RSD DH02 R01 |
| Nhắc hợp đồng sắp hết hạn | Không có thông báo | Thông báo 08:00 theo DH02, mở DH03.2 | RSD DH02 R08 |
| Tab đích khi mở từ DH02 | DH03.1 | Theo R09 của DH02 | RSD DH02 R09 |
| Tên NCC trùng | Chỉ cảnh báo | Trùng hẳn sau chuẩn hóa thì chặn (cùng cách nhập Excel); gần giống thì cảnh báo | RSD DH02 R07 |
| Trường địa chỉ | Tỉnh/thành | Địa điểm; tên 2–200 ký tự | RSD DH02 R07 |
| Kinh doanh vào DH03 | Từ DH02 | Từ DH04; Kinh doanh không xem DH02 | RSD DH02 E1.2, RSD DH04 |

## Thiết kế do người viết tự quyết, cần xác nhận (đã chấp nhận theo Q3, 12/11/2026)

1. **Kế toán vẫn sửa được điều khoản thanh toán** sau Q5 (nguồn ghi Kế toán sở hữu phần này). Nếu chỉ Điều hành sửa, bỏ W23 và cột Kế toán ở 1.4.
2. **Chỉ báo Sắp áp dụng** cho từng hợp đồng có kỳ bắt đầu sau hôm nay. Nguồn chỉ có Còn hiệu lực, Sắp hết hạn, Hết hạn; thiếu giá trị này thì dòng hợp đồng gia hạn không có tình trạng đúng. Cấp NCC vẫn theo R01 của DH02.
3. *(Bỏ: đã theo thông báo nhắc của RSD DH02 R08.)*
4. **Không xóa NCC**, chỉ tắt (nguồn không có xóa NCC).
5. **Mã NCC `NCC-NNNN`**; email đặt dịch vụ trùng thì cảnh báo; mã số thuế trùng thì chặn (R19).
6. **Tắt dịch vụ** lưu ngay, không hỏi, Hoàn tác 10 giây (không kiểm tra nơi đang dùng như NCC).
7. **Kế toán và Kinh doanh không tạo NCC**; Kinh doanh không có nút Xem công nợ.
8. **Việc cần xử lý thứ 3 “Thiếu email đặt dịch vụ”** (nguồn chỉ có 3 việc ở DH02). Thiếu email thì DH08.3 không soạn được email.
9. **Mặc định hợp đồng đầu tiên:** kỳ từ hôm nay 12 tháng; cuối tuần Thứ Bảy, Chủ nhật; mùa Cả kỳ hợp đồng. Hợp đồng tiếp theo lấy nguồn là hợp đồng kết thúc muộn nhất, kỳ dài bằng kỳ nguồn (tối đa 12 tháng).
10. **Gia hạn:** chỉ trên hợp đồng kết thúc muộn nhất; điều chỉnh −50% đến +100%; làm tròn nửa lên, mặc định 1.000 ₫; sao chép cả dịch vụ đang ngừng; giá trẻ em và phụ thu kiểu tỷ lệ giữ nguyên tỷ lệ.
11. **Mùa âm lịch do người dùng đánh dấu** (cột Theo âm lịch). Hệ thống không tự tính lịch âm, chỉ gắn nhãn Cần kiểm tra ngày khi dời ngày.
12. **Đổi loại tiền của hợp đồng có dòng giá:** hỏi có đổi mã tiền của dòng giá không; không quy đổi số.
13. **Điều khoản thanh toán:** đợt Tỷ lệ, Số tiền hoặc Phần còn lại; mọi đợt là tỷ lệ thì tổng 100%; có đợt số tiền thì phải có đúng một đợt Phần còn lại.
14. **Gợi ý phí hủy (R08):** số ngày tính từ ngày ghi yêu cầu hủy; căn cứ giá là giá NCC xác nhận, nếu chưa có thì giá tham chiếu. Điểm này chạm tiền và thuộc DH08.3, cần chốt cùng RSD DH08.
15. **Tuổi trẻ em tính tại ngày sử dụng đầu tiên** của dịch vụ; dịch vụ qua hai hợp đồng thì chính sách lấy theo hợp đồng của ngày đầu (R02).
16. **Tên dịch vụ không trùng trong cùng NCC** (chặn). Cột Hạng phòng chỉ có với loại lưu trú.
17. **Giới hạn tệp:** file hợp đồng PDF, JPG, PNG ≤ 20 MB, tối đa 5 file; file Excel .xlsx ≤ 5 MB, ≤ 2.000 dòng.
18. **Hợp đồng hết hạn vẫn sửa được bảng giá**, có banner nhắc không ảnh hưởng dữ liệu đã lưu.
19. **NCC đang tắt** không có việc cần xử lý về hợp đồng và thanh toán.
20. **Bố cục:** bảng trượt hợp đồng 880 px với thanh mục lục năm phần; DH05 1.060 px; thanh lưu dính dưới DH03.1; Kế toán thấy phần mình sửa được đặt lên đầu.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (`docs/flows/danh-sach-man-hinh-level1.md`).**
  - DH03, DH03.2: điều khoản thanh toán do Điều hành nhập, Kế toán sửa được; kỳ hiệu lực chồng lấn **chặn** (bỏ “cảnh báo … (đề xuất)”); thêm xóa hợp đồng và dịch vụ chưa dùng.
  - DH05.2: bỏ “(đề xuất)” ở nhập file Excel.
  - Vòng đời Hợp đồng NCC: thêm Sắp áp dụng; ngưỡng 30 ngày đã chốt (bỏ “số ngày chờ đặc tả”).
  - Vòng đời NCC: bỏ “(đề xuất)” ở câu NCC đã tắt không hiện khi chọn mới.
- **`docs/flows/level 1/luonghotro.md`.** HT01.04: vai trò nhập điều khoản thanh toán là Điều hành (Kế toán sửa được).
- **RSD DH02.** ~~R01 chỉ cảnh báo kỳ chồng lấn~~: đã sửa ngày 11/11/2026 (xem mục Thống nhất 4 RSD). R07 đã ghi cấp mã `NCC-NNNN` theo R19.
- **RSD DH04.** Đã thống nhất ngày 11/11/2026 (xem mục Thống nhất 4 RSD): R02 không còn câu kỳ chồng lấn, Giá từ và tính theo đêm dẫn về R14 của DH03, chế độ chỉ xem của DH05 do DH04 đặc tả.
- **DH08.3 (RSD DH08).** Gợi ý phí hủy theo R08; NCC thiếu email thì không soạn email, có liên kết sang DH03.1; chỉ báo NCC ngừng sử dụng khi đặt mới hoặc đặt lại.
- **KD02.2, KD06.3.** Ẩn NCC và dịch vụ ngừng sử dụng khi chọn mới; dùng R02 (hợp đồng theo ngày sử dụng), R07 (loại ngày theo đêm), R09 (tuổi), R14, R15; báo thiếu giá, không dùng giá 0.
- **KT01.2.** Lịch trả theo R10, gồm loại Phần còn lại; vẫn ghi phải trả và chi trả cho NCC đã tắt; thông báo khi số tài khoản NCC đổi (E3.4).
- **Quản trị.** Cấu hình ngưỡng Sắp hết hạn, đơn vị làm tròn theo loại tiền, loại dịch vụ lưu trú, danh mục hạng phòng, ngân hàng; phân quyền theo phần ở R04.

## Kiểm tra đã thực hiện

- Sau khi đồng bộ với DH02, DH04: dựng lại toàn bộ 48 ảnh; xem lại W08, W20, W21. Tìm sót: không còn “Không cho phép”, “Đã có HĐ kế tiếp”, “lý do ngừng”, “tỉnh/thành”, “Hoàn tác 5 giây”.
- `node check-rsd.js RSD-DH03-Ho-so-nha-cung-cap-v1.0.md --final` (bản trong skill; máy không có Python nên chưa chạy `check-rsd.py`): 95 tham chiếu ảnh, 48 mã W, không lỗi bảng hay đường dẫn, không còn nhãn chưa chốt; mọi bước ở mục 3 có mã W, mọi mục con có ngoại lệ mã E.
- Tên ảnh ở mục 3 và mục 6 sinh từ `captions.js` bằng `wireframes-src/expand-md.js` (bản nguồn `wireframes-src/rsd-src.md`), nên tên và mục đích khớp nhau (v1.0). Từ v1.1, bộ sinh này đã xóa; RSD sửa trực tiếp, tên ảnh đồng bộ bằng `sync-md.js`.
- Đã xem trực quan: W04, W10, W12, W14, W18, W19, W21a, W24, W30, W32, W33, W35, W44. Đã sửa sau khi xem: thanh lưu bị khuất (chuyển thành thanh dính dưới màn), chữ đỏ trên nền xanh ở mục lục bảng trượt, nút ✕ đè nút chuyển dịch vụ, nút ✕ xóa dòng còn hiện ở chế độ chỉ đọc, số mùa giá 4 → 3, liên kết hợp đồng ở phần đầu (lặp chỗ bấm với dòng ở DH03.2), menu W21a có mục lặp với bấm dòng.
- Chưa mở xem từng ảnh: W01–W03, W05–W07, W09, W11, W13, W15–W17, W22, W23, W25–W29, W31, W34, W36–W43, W45 (dựng từ cùng thành phần với các ảnh đã xem).
- Số liệu đã đối chiếu: 6 dịch vụ = chip Tất cả; Thiếu giá 2 = số trên tab DH03.3; Ngừng 1, 5 đang dùng; 10 dòng giá của 5 dịch vụ (4 + 2 + 0 + 2 + 1 + 1) dùng ở W18–W21; mùa Tết có giá ở 9 dòng của 4 dịch vụ (W22); kỳ 365 ngày = 75 + 9 + 67 + 123 + 91; 1.650.000 × 1,05 = 1.732.500 → 1.733.000.

## Thống nhất 4 RSD DH01–DH04 (11/11/2026)

Sau khi rà chồng chéo giữa bốn RSD, các điểm dưới đã được sửa thẳng trong RSD (không đổi số phiên bản). Bản trước khi sửa và ZIP cũ ở `docs/rsd/_backup-20261111-truoc-thong-nhat-DH01-DH04/`.

| # | Điểm | Chốt | Nơi sửa |
|---|---|---|---|
| 1 | Kỳ hiệu lực chồng lấn | Chặn (theo Q2 của DH03); bỏ câu “chỉ cảnh báo” và cách chọn khi chồng lấn | DH02 R01; DH04 R02 |
| 2 | Hợp đồng hiện hành và hợp đồng mặc định khi xem giá | Giữ định nghĩa **hợp đồng hiện hành** của DH02 R01 (hết hạn thì lấy hợp đồng hết hạn gần nhất). Thêm khái niệm **hợp đồng để xem giá**: chứa hôm nay → bắt đầu sớm nhất sau hôm nay → hợp đồng hiện hành. DH03.3 (ô chọn mặc định, số trên tab) và DH04 (cột Hợp đồng, Giá từ, bộ lọc Loại tiền) dùng chung. Việc 1 ở DH03 R03 đổi điều kiện thành “không có hợp đồng chứa hôm nay”. **Do người viết tự chọn, cần xác nhận** | DH02 R01; DH03 2.2, 2.4, L5.1, R03 (gồm bảng sự kiện tự động 8.6 cũ); DH04 2.2, L3.1, R02, R05, R07 |
| 3 | Nhãn “Hợp đồng hết hạn” ở DH04 khác nghĩa “Hết hạn” của DH02 | Đổi thành **Không còn hợp đồng**, ghi rõ khác biệt | DH04 2.4; W10 |
| 4 | Sắp hết hạn ở DH04 | Theo R01 của DH02: 0 ≤ n ≤ N và chưa có hợp đồng kế tiếp; có hợp đồng kế tiếp thì ghi “HĐ kế tiếp từ dd/mm”. Ví dụ Hải Vân (HVT-2027 nối tiếp) sửa lại | DH04 2.2, 2.4, AC02; W01, W02, W04, W10… (dựng lại 15 ảnh) |
| 5 | DH05 chỉ xem mở từ DH04 đặc tả hai lần | Chỉ DH04 mục 2.5 đặc tả; DH03 L6.1, L7.1, 2.5 dẫn sang | DH03 |
| 6 | Hai công thức Giá từ | Một công thức ở DH03 R14: giá nhỏ nhất của **dòng chính** (căn cứ tính trùng căn cứ mặc định theo đơn vị tính), mọi mùa, mọi loại ngày; DH04 R04, R05 dẫn về | DH03 R14, L5.1; DH04 R04, R05 |
| 7 | Tính theo đêm | Cờ “theo đêm” của đơn vị tính ở QT05 (DH03 R14, R21); DH04 R03 dẫn về | DH03 R14, R21; DH04 R03 |
| 8 | Địa điểm NCC | Chọn từ **danh mục địa điểm (điểm đến, có Toàn quốc)** do Quản trị quản lý, thay chữ tự do. Dùng điểm đến (Hạ Long, Sa Pa, Hội An…) thay cho tỉnh, thành để khớp dữ liệu trên hình. **Cần xác nhận** | DH02 R07, R10; DH03 5.2, R21, W01 (gợi ý ô); DH04 2.3, R11 |
| 9 | Nút hộp thoại ngừng sử dụng NCC | “Giữ đang dùng” ở cả DH02 và DH03 | DH02 L2.2, AC19, 8.3; W07, W11 |
| 10 | Chủ sở hữu danh mục Loại dịch vụ (QT05) | Quản trị hệ thống, Điều hành | DH01 R11; DH03 R21; DH04 R11 |
| 11 | Banner Về Tra cứu dịch vụ | Nằm trong bảng trượt DH05 chế độ sửa (khớp W08 của DH04) | DH03 1.2 |
| 12 | Nguồn lịch sử cho phép sử dụng | Thêm hàng loạt, Hoàn tác, nhập NCC từ Excel ở DH02 | DH03 R20 |
| 13 | Sự kiện lưu email ở DH03 | Thiếu email không thuộc Cần xử lý của DH02 | DH03 R03 |
| 14 | Ngưỡng Sắp hết hạn | Khai ở DH02 R10; DH03 R21, DH04 R11 ghi dẫn chiếu | DH03, DH04 |
| 15 | Mã NCC khi nhập Excel | DH02 R07 ghi cấp mã `NCC-NNNN` theo R19 của DH03 | DH02 R07 |

Kiểm tra sau khi sửa: DH03 dựng lại từ `wireframes-src/rsd-src.md` bằng `expand-md.js`; dựng lại ảnh DH02 (W07, W11), DH03 (48 ảnh), DH04 (15 ảnh); `check-rsd.js --final` đạt cho cả bốn RSD; đã xem W07 của DH02, W01 và W10 của DH04; đóng lại bốn ZIP và giải nén thử ZIP DH04.

## Cập nhật v1.2 (12/11/2026) · sửa sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-DH03-Ho-so-nha-cung-cap-v1.2.md`, đã xóa bản v1.1. Không thêm mã L, E, R, W, AC.

- **R13, 1.3, 5.1.** Điều kiện “đã dùng” của dịch vụ thêm hành trình yêu cầu Tour (KD06.2), khớp L2.2 và nguyên tắc ở `BOI-CANH-DU-AN.md`.
- **Nút Gia hạn.** Thống nhất theo R12: nút trên dòng khi hợp đồng có Hiệu lực đến muộn nhất Sắp hết hạn hoặc Hết hạn; trong menu ⋯ khi Còn hiệu lực hoặc Sắp áp dụng. Sửa mục 2.5, L4.1, AC09. Hình W10, W20 đã đúng quy tắc này nên không dựng lại vì lý do này.
- **L4.4.** Ngày cuối tuần mặc định theo R11 (Thứ Bảy, Chủ nhật; hợp đồng sau sao chép từ hợp đồng nguồn), bỏ câu “mặc định Thứ Sáu, Thứ Bảy cho khách sạn”.
- **Thứ tự dòng giá (R14, 5.1, 5.2).** Thêm trường Thứ tự (vị trí dòng trong lưới DH05.2, hệ thống tự cấp, kéo dòng để đổi) vì RSD DH04 R04 và KD06.3 lấy dòng chính có thứ tự nhỏ nhất. Cách đổi thứ tự (kéo dòng) do người viết tự chọn, chưa vẽ trên W30.
- **Loại tiền dòng giá (R14, E4.9; quyết định Q5 12/11/2026).** Mỗi dòng giá có loại tiền riêng, mặc định loại tiền hợp đồng, được khác hợp đồng; là loại tiền điền sẵn khi đặt dịch vụ ở DH08.3, Điều hành sửa được khi ghi giá xác nhận hoặc phí hủy.
- **E3.4.** Bỏ “lệnh chi” (KT01 không có lệnh chi), thay bằng “khoản phải trả còn số chưa trả ở KT01.2”.
- **R02.** Câu báo thiếu hợp đồng thống nhất “Không có hợp đồng cho …” như RSD DH04 R08.
- **R05, L2.2, AC10.** Thêm DH08.2 (thêm dịch vụ của hồ sơ Tour) vào nơi ẩn NCC, dịch vụ ngừng sử dụng khi chọn mới; nêu yêu cầu Tour đang dở bị khóa Tính giá ở KD06 tới khi đổi dịch vụ (RSD KD06 R10).
- **AC36.** “Hợp đồng để xem giá” thay “hợp đồng hiện hành”.
- **Giữ nguyên.** Tuổi trẻ em tính tại ngày sử dụng đầu tiên (R09); KD06 sẽ theo.
- **Hình.** Sửa nhãn “Có HĐ kế tiếp từ 01/12/2026” thành “HĐ kế tiếp từ 01/12” ở phần đầu của W20, W21, W21a cho khớp R01; đã dựng lại ba ảnh, xem lại W20.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH03-Ho-so-nha-cung-cap-v1.2.md --final`: 48 tham chiếu ảnh, 48 mã W, không lỗi.

## Cập nhật v1.3 (12/11/2026) · rà soát lần hai

Tệp mới `RSD-DH03-Ho-so-nha-cung-cap-v1.3.md`, đã xóa bản v1.2.

- **Lý do.** RSD QT04 R07 tự khớp bản ngôn ngữ của mẫu email đặt dịch vụ theo “ngôn ngữ giao dịch của NCC”, nhưng DH03 chưa có trường này nên mọi email NCC chỉ ra Tiếng Việt. Thêm trường **Ngôn ngữ giao dịch** ở phần Thông tin chung: Điều hành nhập, danh mục Ngôn ngữ QT05, mặc định Tiếng Việt, không bắt buộc (R22; L1.1, L3.1; R21; 5.1, 5.2; AC63).
- **Suy ra, chờ xác nhận (đã chấp nhận theo Q3).** Ngôn ngữ bị tắt ở QT05 thì NCC giữ giá trị, sửa thì phải chọn ngôn ngữ đang dùng (R22). NCC nhập Excel ở DH02 nhận mặc định Tiếng Việt (DH02 chưa có cột này; không sửa DH02).
- **Hình.** Form Thông tin chung thêm ô Ngôn ngữ giao dịch cạnh Địa chỉ (`formGeneral` trong `screens-a.js`). Dựng lại W01, W02, W04, W05, W06, W07, W08, W09, W43; đã xem W02, W04.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH03-Ho-so-nha-cung-cap-v1.3.md --final`: 48 tham chiếu ảnh, 48 mã W, không lỗi.

## Cập nhật v1.4 (12/11/2026) · rà soát mâu thuẫn lần ba

Tệp mới `RSD-DH03-Ho-so-nha-cung-cap-v1.4.md`, đã xóa bản v1.3 (đổi tên bằng `mv`). Không thêm mã mới.

- **E3.5.** Câu cũ “DH08.3 không soạn được email cho NCC này cho tới khi có email” mâu thuẫn RSD DH08 E3.1. Sửa theo DH08: người dùng nhập email cho lần gửi đó, DH08 không ghi email vào DH03, có liên kết mở DH03.1.
- **R14 Thứ tự (quyết định người dùng 12/11/2026).** Thứ tự chỉ áp trong cùng hạng phòng; khác hạng phòng thì DH04 hiện mức thấp nhất kèm “+ n hạng khác” (GHI-CHU DH04 mục 3), KD06.3 tính theo hạng phòng của hành trình.
- **R10 đợt Số tiền (quyết định người dùng 12/11/2026).** Khoản phải trả khác loại tiền hợp đồng thì KT01.2 không điền sẵn số tiền đợt Số tiền, Kế toán nhập, có cảnh báo; đợt Tỷ lệ vẫn điền sẵn. Dẫn RSD KT01 R08, R11 (KT01 v1.5 ghi sửa ở hai quy tắc này).
- **Số lẻ thập phân (2.5, 5.2).** Theo RSD QT05 R11: VND, JPY 0; ngoại tệ khác 2. QT05 R11 và KT01 dẫn ngược về DH03 mục 2.5 nên câu cũ “ngoại tệ 2 chữ số thập phân” sai với JPY.
- **Chủ sở hữu danh mục (1.3, R21).** Theo RSD QT05 mục 1.5 và BOI-CANH: Điều hành sửa Loại dịch vụ, Đơn vị tính, Địa điểm, Hạng phòng, Thẻ, Ngôn ngữ; Kế toán sửa Loại tiền, Ngân hàng. Câu báo thiếu loại dịch vụ đổi thành thêm ở QT05 kèm liên kết, bỏ “liên hệ Quản trị”. Hàng “Danh mục loại tiền, đơn vị làm tròn” đổi thành “loại tiền, số lẻ thập phân”; làm tròn khi gia hạn là giá trị mặc định của hộp thoại (5.2), không phải bội số làm tròn giá bán của QT05.
- **2.4.** Chuyển Còn hiệu lực → Sắp hết hạn thêm điều kiện không có hợp đồng kế tiếp, khớp R01.
- **E4.16.** Theo R03 (“Chỉ tính khi NCC Đang dùng”): NCC Ngừng sử dụng thì không hiện việc cần xử lý nào, không chỉ việc về hợp đồng.
- **L5.5, W42a, W42.** Đối tượng “đã dùng” theo R13: thêm hành trình yêu cầu Tour và Booking. Sửa `screens-b.js` (menu W42a: 2 Tour mẫu, 5 hành trình yêu cầu Tour, 11 báo giá, 3 Booking, 3 hồ sơ Tour; hộp thoại W42 thêm hành trình yêu cầu Tour). W42 ngoài phạm vi yêu cầu ban đầu nhưng cùng lỗi nên sửa luôn. Số liệu trên hình là minh họa, không có AC dẫn số này.
- **Nguồn nghiệp vụ.** Dẫn DH02 v1.3, DH04 v1.3, DH08 v2.8, KT01 v1.5, QT04 v1.3, QT05 v1.2.
- **Hình.** `node build.js W42 W42a`, `node sync-md.js`; đã xem W42a.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH03-Ho-so-nha-cung-cap-v1.4.md --final`: 48 tham chiếu ảnh, 48 mã W, không lỗi.

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-DH03-Ho-so-nha-cung-cap-v1.5.md` (đổi tên bằng `git mv`). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md`. Không đổi số hiệu L, E, R, W, AC; không thêm mã mới.

**Thay đổi**

- **Q1 phân quyền.** Mục 1.4 thành bảng quyền mặc định theo vai trò (phần × thao tác), thêm cột Quản trị, ghi rõ cấu hình ở QT02. Thông tin nhận thanh toán và điều khoản thanh toán gom vào thao tác riêng **Xem thông tin thanh toán NCC** (mặc định Điều hành, Kế toán, Quản trị; không cấp cho Kinh doanh); sửa từng phần là thao tác riêng. R04, R20, E1.5, E2.5, E5.8, E7.1, L2.3, L4.6, L7.1, AC35, AC59 nói theo quyền thay vì theo vai trò cứng. Bỏ câu “phạm vi bản ghi”.
- **U5.** Trường chỉ đọc hiện dạng chữ (2.5, 1.4, L3.1, L3.2, L4.6, L7.1, AC12, AC29), thay viền nét đứt.
- **K6.** “Cho phép sử dụng”, “Ngừng sử dụng” đổi thành công tắc **Đang dùng / Ngừng dùng** trong toàn bộ thân RSD (lịch sử phiên bản giữ nguyên chữ cũ). Tiêu đề R05 đổi theo.
- **Q2, Q5.** Thông báo cho Điều hành phụ trách khi ngừng dùng NCC là thông báo in-app, ghi cùng giao dịch với thao tác tắt (L2.2 bước 3, R03, R05, AC10).
- **Q6.** Tình trạng hợp đồng, việc cần xử lý, số trên tab tính lúc đọc; bỏ “Hệ thống, 00:00” ở 2.4 và “cập nhật lúc 00:00” ở R01, R03. Thông báo nhắc 08:00 (RSD DH02 R08) giữ vì gây ra hành động.
- **Q8.** Lưu bị từ chối vì phiên khác chỉ có nút Tải lại, không ghi đè (E3.1, E4.14, E6.8, R04, AC14).
- **Q11, Q12, Q14, Q15.** R09: bộ tính giá dùng chung dùng tuổi nhập cho từng trẻ, mỗi dòng áp nhóm tuổi của hợp đồng của chính dòng; trẻ nhỏ nhất được miễn trước; giá trẻ tỷ lệ tính trên giá mỗi người lớn của cùng dòng. R15: thêm cách kết hợp (Thay thế lấy mức cao nhất, rồi cộng mọi Cộng dồn), bỏ trường quy tắc ưu tiên (L6.4, 5.1); phòng đơn = giá phòng + phụ thu đã khai, phần vượt nửa giá phòng đôi chỉ để hiển thị. L4.5, L6.6 nói “bộ tính giá dùng chung” thay cho chỉ KD06.3.
- **Q19.** Tệp đính kèm hợp đồng: PDF, JPG, PNG, XLSX, DOCX; 20 MB mỗi tệp; tối đa 10 tệp (5.2, E4.13). Giới hạn nhập file bảng giá (.xlsx ≤ 5 MB, ≤ 2.000 dòng) giữ nguyên vì là nhập dữ liệu, không phải đính kèm.
- **Q7, Q9, Q3.** Mã NCC được phép thủng số (R19); làm tròn khi gia hạn ghi rõ half-up (R12); R22 bỏ nhãn “suy ra, chờ xác nhận”. Các mục “cần xác nhận” trong ghi chú này coi là đã chấp nhận (Q3).
- **U2.** Mục 2.5 ghi rõ hộp thoại chỉ để nhập liệu ngắn hoặc xác nhận khi không hoàn tác được hoặc chạm tiền; danh sách hộp thoại xác nhận không đổi (ngừng dùng NCC đang được dùng vẫn cảnh báo nơi đang dùng theo BOI-CANH).

**Tự đơn giản hóa giao diện (U6):** không có. Giữ bố cục cũ; chỉ đổi cách hiện trường chỉ đọc theo U5.

**Giữ nguyên, đã rà:** các chữ “Thử lại” còn lại (E1.4, E2.4, E2.6, E3.7, E4.12, E4.13, E5.3, E5.5, E6.9, AC60) là thử lại khi lỗi mạng, lỗi tải hoặc tải tệp lên của chính thao tác, không phải trạng thái Tạo lỗi của tác động chéo module (Q5). Biểu tượng 🔒 ở 2.1 là tab khóa khi NCC chưa lưu (chế độ tạo), không liên quan người phụ trách. Câu “Kinh doanh không thấy thanh toán” ở 1.5 là truy vết quyết định 11/11/2026.

**Hình chưa cập nhật** (ghi chú ngay dưới hình): W04, W05, W06, W07, W09, W23, W43, W44 (viền nét đứt, “Chỉ đọc · … cập nhật”; W07 còn nút Xem bản mới); W08, W09 (“Ngừng sử dụng”); W24, W25, W26, W40, W42, W42a (cột “Cho phép sử dụng”, chip “Ngừng sử dụng”); W27, W28, W29 (nhãn công tắc “Cho phép sử dụng”); W33 (ô “Quy tắc kết hợp”). Bảng DH03.3 mờ phía sau các hình DH05 (W30–W39, W41) cũng còn cột “Cho phép sử dụng”, không ghi chú riêng. Chú thích ảnh W08 trong RSD đã đổi sang “Ngừng dùng” nhưng `wireframes-src/captions.js` chưa sửa, nên `sync-md.js` sẽ đưa lại chữ cũ khi chạy.

**Câu hỏi cho người dùng**

1. **Nghĩa của phụ thu Thay thế (R15, dòng 743–745).** RSD DH03, DH04 hiểu Thay thế là “dùng thay giá mùa ngày đó”; BOI-CANH định nghĩa phụ thu là “khoản cộng vào giá NCC”. Đã viết Q15 theo cách hiểu: ngày có nhiều phụ thu Thay thế thì lấy mức cao nhất thay giá mùa, rồi cộng mọi Cộng dồn. Cần xác nhận Thay thế thay giá mùa hay chỉ thay các phụ thu khác.
2. **Quản trị xem thông tin thanh toán NCC (1.4).** Đã cho Quản trị quyền xem theo Q25 (xem được mọi màn). Nếu thông tin ngân hàng cần ẩn với Quản trị thì sửa ở ma trận QT02.
3. **Phòng đơn “Giá phòng đơn trọn gói” (R15, dòng 744).** Q14 nói phòng đơn = giá phòng + phụ thu đã khai; RSD còn lựa chọn “Giá phòng đơn trọn gói”. Đã giữ lựa chọn này (coi như phụ thu bằng 0 trên giá phòng đơn). Cần xác nhận có bỏ lựa chọn này không.


## Dịch vụ đi kèm 12/11/2026

Sửa tại chỗ `RSD-DH03-Ho-so-nha-cung-cap-v1.5.md`, dòng “Thay đổi ở v1.5 (bổ sung 12/11/2026 · dịch vụ đi kèm)”. Nguồn: BOI-CANH (thuật ngữ Dịch vụ đi kèm, Giường phụ; Nền tảng “Phòng (Q13', Q14)”), `docs/QUYET-DINH-PHASE-CODING.md` Q13'. Giữ số hiệu; thêm L5.6, E5.9–E5.11, E6.13, R23, AC64–AC71.

**Thay đổi:** ô Đi kèm dịch vụ và dấu Giường phụ ở DH05.1; khối Dịch vụ đi kèm trong DH05.1 của dịch vụ chính; DH03.3 hiện đi kèm thụt lề; R05 (ngừng dùng), R12 (gia hạn), R13 (đã dùng, xóa kèm), R14 (thay ví dụ “thêm giường theo khách”; tên đi kèm chỉ không trùng trong cùng dịch vụ chính), R17 (nhân bản), R23 mới; 5.1, 5.2.

**Tự quyết (U6, ghi lại để người dùng đổi được):**
- “Cùng hợp đồng” hiểu là cùng NCC: dịch vụ thuộc NCC, hợp đồng thuộc NCC và không chồng kỳ, nên đi kèm và dịch vụ chính luôn dùng một hợp đồng áp dụng cho mỗi ngày. Quan hệ đi kèm là thuộc tính của dịch vụ, không lưu theo hợp đồng; gia hạn tự giữ quan hệ.
- Chỉ một tầng: dịch vụ chính phải là dịch vụ thường; dịch vụ đang có đi kèm không thành đi kèm.
- Dịch vụ chính Ngừng dùng: không tự tắt đi kèm; đi kèm không chọn được vì chỉ thêm kèm dịch vụ chính; bật lại dịch vụ chính thì đi kèm theo công tắc riêng. Đi kèm Ngừng dùng riêng: KD06 coi là việc cần xử lý, DH08 chỉ báo.
- Xóa dịch vụ chính chưa dùng thì xóa kèm các đi kèm (đi kèm không thể đã dùng khi dịch vụ chính chưa dùng). Đổi ô Đi kèm dịch vụ chỉ khi dịch vụ chưa dùng.
- Đi kèm không có cột Hạng phòng, không phụ thu phòng đơn; giường phụ không có cột trẻ em (trẻ em thêm giường theo chính sách trẻ em, quyết định 3).
- Giường phụ nhận biết bằng dấu Giường phụ trên đi kèm (chỉ khi dịch vụ chính thuộc loại lưu trú, tối đa một mỗi dịch vụ chính), không thêm cờ ở QT05.
- Loại dịch vụ của đi kèm chọn trong các loại của NCC, mặc định loại của dịch vụ chính; giường phụ khóa theo loại của dịch vụ chính (để Markup KD06 theo Lưu trú).
- Tên tiếng Anh: DH05.1 không có tên tiếng Anh cho dịch vụ thường, nên đi kèm cũng không có; proposal KD06 ghi giường phụ bằng chữ cố định theo ngôn ngữ.

**Hình chưa cập nhật:** W24 (dòng đi kèm), W27 (khối Dịch vụ đi kèm), W29 (ô Đi kèm dịch vụ, Giường phụ). L5.6 dùng lại W27, W29, W24, không thêm mã W.

**Kiểm tra.** `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py`: 48 ảnh, 48 mã W, không lỗi.

## Phụ thu lễ áp cho phòng đơn (13/11/2026)

Sửa tại chỗ `RSD-DH03-Ho-so-nha-cung-cap-v1.5.md` R15 (bullet Phụ thu phòng đơn). Người dùng chốt 13/11/2026: phụ thu lễ theo phòng áp cho mọi phòng của đêm, kể cả phòng đơn; giá phòng đơn kiểu Phụ thu thêm = giá phòng của đêm sau phụ thu lễ + phụ thu phòng đơn; phụ thu phòng đơn dạng tỷ lệ tính trên giá mùa của dòng, chưa gồm phụ thu lễ. Chỉ nêu nguồn dữ liệu cho bộ tính giá (RSD KD06 R13); không đổi màn hình hay trường.
