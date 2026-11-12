# Ghi chú làm việc · RSD DH04 v1.3

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết | DH04 · Tra cứu dịch vụ và bảng giá, viết mới từ danh sách màn; bàn giao MD + PNG trong ZIP theo `BOI-CANH-DU-AN.md` | Toàn bộ tài liệu |
| Q1 | Đầu vào của Giá áp dụng | Khoảng ngày (từ–đến) + số khách người lớn. Không tính trẻ em ở DH04; giá trẻ em xem trong DH05, tính đầy đủ ở KD06.3 | L2.1, R03, R04, AC07–AC13, W02, W03 |
| Q2 | Hiển thị giá khác loại tiền | Giữ loại tiền gốc, không quy đổi | R07, AC15 |
| Q3 | Xem thêm dịch vụ bị ẩn | Mọi vai trò bật được công tắc | L1.3, R01, AC06, W10 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Hợp đồng “còn hiệu lực” cho bộ lọc mặc định** = có ngày kết thúc từ hôm nay trở đi, gồm cả hợp đồng kỳ sau chưa bắt đầu (R01). Xét theo hôm nay, không theo ngày sử dụng, để dịch vụ thiếu hợp đồng cho ngày đi vẫn hiện kèm chỉ báo.
2. **Dịch vụ tính theo đêm** khi căn cứ tính có đơn vị đêm; còn lại tính theo ngày, tính cả hai đầu khoảng (R03). Chỉ dịch vụ tính theo đêm có tổng tiền.
3. **Dòng giá chính** trong ô Giá áp dụng là dòng có căn cứ trùng đơn vị tính, thứ tự nhỏ nhất; thêm giường, trẻ em, phụ thu không vào ô (R04). Nhiều hạng phòng khi chưa lọc: hiện mức thấp nhất kèm “+ n hạng khác”.
4. **Phụ thu cộng thêm** hiện thành dòng riêng, không cộng vào giá và tổng (R06). Phụ thu thay thế thì thay giá của ngày đó.
5. **Không hiện tổng** khi có phần thiếu; vẫn hiện phần có giá (R08).
6. **Khoảng tối đa 31 ngày**; số khách 1–999 (E2.1).
7. **Bảng trượt mở mặc định ở tab Bảng giá và phụ thu** (không phải tab Thông tin như thứ tự DH05), vì đây là màn tra giá.
8. **Chip loại dịch vụ thay cho bộ chọn Loại dịch vụ** (một thao tác một chỗ bấm).
9. **Sắp xếp mặc định NCC, dịch vụ**; thêm Giá thấp → cao, Giá cao → thấp, Hợp đồng hết hạn sớm nhất. Sắp theo giá nhóm theo loại tiền, VND trước.
10. **Ghi bộ lọc, ngày, số khách vào đường dẫn** để chia sẻ (R09).
11. **Kế toán không có quyền xem DH04 mặc định** (nguồn không ghi Kế toán); Quản trị cấp ở QT02 nếu cần.
12. **Kiểm tra dữ liệu cũ của bảng trượt** khi chuyển tab, đổi hợp đồng, chuyển dịch vụ và mỗi 60 giây (E3.1, W15).
13. **Phân trang 50 dòng**; tính giá sau khi ngừng gõ 400 ms.
14. **Không có xuất Excel** (nguồn không yêu cầu).
15. **Hợp đồng kế tiếp trên cột Hợp đồng.** Hợp đồng hiện hành theo R01 của RSD DH02; riêng DH04, khi hợp đồng hiện hành đã hết hạn mà có hợp đồng kế tiếp thì hiện hợp đồng kế tiếp “từ dd/mm/yyyy” và Giá từ theo hợp đồng đó (R02). Ngưỡng Sắp hết hạn 30 ngày đã chốt ở RSD DH02.

## Thay đổi cần làm ở màn khác

- **(Đã làm 11/11/2026, dùng danh mục điểm đến thay cho tỉnh, thành)** **DH03.1.** Trường Địa điểm của NCC đã có ở RSD DH02 (chữ tự do, tối đa 100 ký tự). Đề nghị chọn từ danh sách tỉnh, thành (có giá trị Toàn quốc) để bộ lọc Địa điểm của DH04 không bị trùng do cách viết khác nhau.
- **DH03.3 và DH05.** Nhận tham số mở thẳng: ID NCC, ID dịch vụ, ID hợp đồng, tab; mở bảng trượt DH05 ở chế độ sửa. Hiện banner “Mở từ Tra cứu dịch vụ và bảng giá” kèm liên kết Về Tra cứu dịch vụ (W08).
- **DH03.2.** Nhận tham số mở thẳng tới bảng trượt của một hợp đồng (liên kết Xem hợp đồng và chính sách); Kinh doanh xem ở chế độ chỉ đọc.
- **(Đã làm 11/11/2026: DH03 dẫn sang mục 2.5 của DH04)** **DH05 (bảng trượt).** Thêm chế độ chỉ xem (không ô nhập, không Lưu, có nhãn Chỉ xem) và ô Giá áp dụng tô xanh ô được dùng khi mở từ DH04 có ngày, số khách. Mỗi dịch vụ cần số phiên bản để phát hiện dữ liệu cũ (E3.1).
- **(Đã làm 11/11/2026: cờ theo đêm của đơn vị tính, R14 của DH03)** **DH05.2.** Căn cứ tính cần phân biệt được đơn vị “đêm” để DH04 tính theo đêm (R03).
- **QT02.** Quyền xem DH04 cho Điều hành và Kinh doanh; tùy chọn cho Kế toán.
- **Quản trị.** Cấu hình ngưỡng Sắp hết hạn của hợp đồng (dùng chung DH02, DH03, DH04); danh mục hạng phòng, loại dịch vụ.
- **Danh sách màn (DH04).** Có thể ghi thêm: khoảng ngày (không chỉ một ngày), số khách là người lớn, giữ loại tiền gốc, công tắc xem thêm cho mọi vai trò.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy không có Python): 30 tham chiếu ảnh, 15 mã W, không lỗi bảng hay đường dẫn, không còn nhãn chưa chốt. Mọi bước ở mục 3 có mã W; mọi mục con có ngoại lệ mã E.
- Đã xem trực quan 13/15 ảnh (W02–W13, W15). W01 và W14 chưa mở riêng; W01 cùng bố cục và dữ liệu với W12 (trừ thanh nhập), W14 là khung lỗi đơn giản giống DH07.
- Đã sửa sau khi xem: khung giá từng đêm ở W03 che ô giá và tràn mép phải; danh sách hợp đồng ở W07 đè lên ô chọn.
- Số liệu đã đối chiếu: chip W01 128 = 46 + 22 + 25 + 18 + 7 + 10; W10 141 = 51 + 24 + 28 + 19 + 8 + 11 (13 dịch vụ ẩn); W11 4 = 3 + 1; W04 3. Deluxe Garden View 2.800.000 × 2 + 2.400.000 + 3.500.000 = 11.500.000 ₫ (W02, W03, W05, W15); Superior 2.300.000 × 2 + 2.000.000 + 3.000.000 = 9.600.000 ₫. 18/12/2026 là thứ Sáu; 18/12 – 22/12 là 4 đêm, 5 ngày. Vị trí 6 / 128 khớp thứ tự dòng ở W02, W09.
- ZIP `rsd/DH04-RSD-v1.0.zip` (RSD, `wireframes/` gồm 15 PNG và `index.html`) đã được giải nén thử và chạy lại `check-rsd --final`: mọi ảnh mở được.
- Đã đối chiếu với RSD DH02: định nghĩa Hợp đồng hiện hành (R01), ngưỡng 30 ngày, trường Địa điểm, nhãn Ngừng sử dụng.
- v1.1 (12/11/2026, chuyển sang khung 6 mục, không đổi nghiệp vụ): `indent-images.js`, `sync-md.js`, `check-rsd.js --final` bản mới của skill; 15 ảnh, 15 mã W, mỗi ảnh nhúng một lần, không cảnh báo. Tập ảnh và tập mã L, E, R, AC giống hệt v1.0. Mục 2.1–2.5 giữ số cũ, nên các dẫn chiếu “mục 2.5” từ RSD DH03 vẫn đúng.

## Thống nhất 4 RSD DH01–DH04 (11/11/2026)

Sau khi rà chồng chéo giữa bốn RSD, các điểm dưới đã được sửa thẳng trong RSD (không đổi số phiên bản). Bản trước khi sửa và ZIP cũ ở `rsd/_backup-20261111-truoc-thong-nhat-DH01-DH04/`.

| # | Điểm | Chốt | Nơi sửa |
|---|---|---|---|
| 1 | Kỳ hiệu lực chồng lấn | Chặn (theo Q2 của DH03); bỏ câu “chỉ cảnh báo” và cách chọn khi chồng lấn | DH02 R01; DH04 R02 |
| 2 | Hợp đồng hiện hành và hợp đồng mặc định khi xem giá | Giữ định nghĩa **hợp đồng hiện hành** của DH02 R01 (hết hạn thì lấy hợp đồng hết hạn gần nhất). Thêm khái niệm **hợp đồng để xem giá**: chứa hôm nay → bắt đầu sớm nhất sau hôm nay → hợp đồng hiện hành. DH03.3 (ô chọn mặc định, số trên tab) và DH04 (cột Hợp đồng, Giá từ, bộ lọc Loại tiền) dùng chung. Việc 1 ở DH03 R03 đổi điều kiện thành “không có hợp đồng chứa hôm nay”. **Do người viết tự chọn, cần xác nhận** | DH02 R01; DH03 2.2, 2.4, L5.1, R03; DH04 2.2, L3.1, R02, R05, R07 |
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

Tệp mới `RSD-DH04-Tra-cuu-dich-vu-va-bang-gia-v1.2.md`, đã xóa bản v1.1. Không thêm mã mới.

- **L1.1.** Cột Giá từ theo “hợp đồng để xem giá” (R02), thay “hợp đồng hiện hành”.
- **R06, 5.1.** Kiểu kết hợp phụ thu gọi đúng như RSD DH03 R15: Cộng dồn, Thay thế (bỏ “cộng thêm”). Mục 4 ở trên (quyết định người viết, 11/11) vẫn đúng về nghĩa.
- **E3.7 bỏ.** RSD DH03 bắt buộc khai ngày cuối tuần khi hợp đồng có mùa tách (mục 5.2; R11 điền sẵn Thứ Bảy, Chủ nhật) nên trường hợp này không xảy ra. Mã E3.7 không dùng lại; R11 (Cấu hình phụ thuộc) sửa cột Khi thiếu.
- **R04.** Dẫn trường Thứ tự của dòng giá mới thêm ở RSD DH03 R14, mục 5.2 (vị trí dòng trong lưới DH05.2).
- **Nguồn nghiệp vụ.** Dẫn RSD DH02 v1.2, DH03 v1.2.
- **Hình.** `screens-dh04.js`: bảng Phụ thu trong bảng trượt đổi tiêu đề cột “Cách áp” thành “Kết hợp”, giá trị “Cộng thêm” thành “Cộng dồn”; dựng lại W05, W07, W08, W09, W15; đã xem W05. Chạy `sync-md.js`, `indent-images.js`.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH04-Tra-cuu-dich-vu-va-bang-gia-v1.2.md --final`: 15 tham chiếu ảnh, 15 mã W, không lỗi.

## Cập nhật v1.3 (12/11/2026) · rà soát mâu thuẫn lần ba

Tệp mới `RSD-DH04-Tra-cuu-dich-vu-va-bang-gia-v1.3.md`, đã xóa bản v1.2 (đổi tên bằng `mv`). Không thêm mã mới, không dựng lại hình.

- **R04, E2.10 (quyết định người dùng 12/11/2026).** Thứ tự chỉ áp trong cùng hạng phòng; khác hạng phòng giữ cách hiện mức thấp nhất kèm “+ n hạng khác” (mục 3 ở trên). Khớp RSD DH03 v1.4 R14.
- **R04, E2.7.** RSD DH03 mục 5.2 bắt buộc khai khoảng số khách (mặc định 1 – không giới hạn), nên bỏ trường hợp “dòng giá không khai khoảng số khách”; thay bằng khoảng mặc định 1 – không giới hạn áp cho mọi số khách.
- **Loại tiền gốc (mục quyết định 11/11/2026 ở đầu tài liệu, 1.1).** “Loại tiền gốc của hợp đồng” sửa thành “của dòng giá”, khớp RSD DH03 R14 và R07 của DH04 (BOI-CANH đã chốt theo dòng giá).
- **Mục 2.6.** Số chữ số thập phân theo loại tiền (RSD QT05 R11): VND, JPY 0; ngoại tệ khác 2.
- **R11.** Chủ sở hữu Loại dịch vụ, Địa điểm, Hạng phòng là Điều hành (RSD QT05 mục 1.5).
- **Nguồn nghiệp vụ.** Dẫn DH02 v1.3, DH03 v1.4, QT05 v1.2.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH04-Tra-cuu-dich-vu-va-bang-gia-v1.3.md --final`: 15 tham chiếu ảnh, 15 mã W, không lỗi.
