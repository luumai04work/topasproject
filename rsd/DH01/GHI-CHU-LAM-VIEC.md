# Ghi chú làm việc · RSD DH01 v1.2

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Cập nhật v1.1 (12/11/2026) · khung 6 mục

Sắp xếp lại theo khung 6 mục, không đổi nghiệp vụ. Mục 8 cũ gộp vào bước luồng; mục 6 cũ (Wireframe) bỏ, câu kích thước ảnh và cách chụp chuyển lên đầu tài liệu; 8.1 và 4.3 cũ thành mục 2.7; Quy tắc R thành mục 4; Dữ liệu (4.1, 4.2, 8.7 cũ) thành mục 5; Tiêu chí nghiệm thu thành mục 6. Bảng Sự kiện tự động (8.6 cũ) bỏ; hai dòng QT05 tắt hoặc thêm loại Tour thêm vào R01. Mục 2.1–2.6 giữ số. Tham chiếu “DH03 8.6”, “DH02 … 8.3” ở bảng dưới là của tài liệu khác, không đổi.

**Kiểm tra v1.1:** `check-rsd.js --final` exit 0: 20 tham chiếu ảnh, 20 mã W, không cảnh báo. Tập ảnh và mã L, E, R, AC khớp v1.0.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm, định dạng | DH01 · Mẫu checklist điều hành; viết mới từ danh sách màn (chưa có RSD cũ); MD + PNG trong ZIP theo `BOI-CANH-DU-AN.md` | Toàn bộ tài liệu |
| Q1 | Phạm vi của một mẫu (nguồn chưa định nghĩa “loại Tour”) | **Một mẫu cho mỗi loại Tour**; trong mẫu, từng công việc là việc cả hồ sơ hoặc lặp theo loại dịch vụ | R01, R02, R07, L2.1, L5.1, AC01, AC03, AC22 |
| Q2 | Sửa mẫu có đổi hồ sơ đã tạo không | Không đổi hồ sơ đã tạo; mẫu mới chỉ dùng cho hồ sơ tạo sau (theo đề xuất của nguồn) | R06, L3.1, AC10 |
| Q3 | Mẫu không dùng nữa | Ngừng dùng (bật/tắt); chỉ xóa được mẫu chưa dùng | R08, L4.1–L4.3, W12–W14a, AC15–AC21 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Mẫu mặc định.** Thêm một mẫu không gắn loại Tour, luôn Đang dùng, không xóa được, dùng khi Booking chưa có loại Tour hoặc loại Tour chưa có mẫu đang dùng. Lý do: Q1 quy định một mẫu cho mỗi loại Tour nhưng chưa nói hồ sơ thiếu mẫu thì sao; RSD DH07 E1.5 đang để checklist rỗng. Nếu không muốn, bỏ Mẫu mặc định và giữ checklist rỗng như DH07.
2. **Một loại Tour tối đa một mẫu kể cả mẫu ngừng dùng.** Muốn làm lại mẫu cho loại Tour đó thì sửa mẫu cũ (tạo phiên bản mới) hoặc xóa nếu chưa dùng.
3. **Danh mục Loại Tour đặt ở QT05** (nhóm mới), do Quản trị hệ thống và Kinh doanh quản lý; Booking có trường Loại Tour nhập ở KD06.1, kế thừa sang KD08. Giá trị minh họa: Inbound đoàn, Customized riêng tư, MICE, Tour Golf, Tour học sinh.
4. **Hạn theo ba mốc:** Khởi hành, Kết thúc, Ngày sử dụng (chỉ cho việc theo dịch vụ). RSD DH07 R04 mới ghi mốc Khởi hành.
5. **Giao người phụ trách** là thuộc tính của công việc mẫu; điền khi hồ sơ được giao người phụ trách lần đầu; đổi người phụ trách sau đó không tự đổi người thực hiện (R05).
6. **Hướng dẫn thực hiện** cho từng công việc, sao chép sang hồ sơ. Vùng mở rộng này chưa có wireframe riêng.
7. **Phiên bản hóa mẫu** (v1, v2…) với lịch sử và số hồ sơ theo phiên bản; việc sinh thêm khi thêm hạng mục dùng phiên bản hiện hành (L5.2).
8. **Không gộp mẫu**, không có mẫu riêng theo loại dịch vụ (thay R04 của DH07 vốn gộp nhiều mẫu và bỏ trùng).
9. **Không có Nhân bản trên dòng;** tạo mẫu từ mẫu có sẵn bằng ô Bắt đầu từ trong bảng trượt (một thao tác, một chỗ bấm).
10. **Xem trước** trên một hồ sơ thật, không áp dụng quy tắc hạn đã qua.
11. **Giới hạn:** tối đa 100 công việc mỗi mẫu; tên công việc 3–200 ký tự; số ngày 0–365; hạn mặc định của dòng mới 7 ngày trước Khởi hành (cả hồ sơ) và 3 ngày trước Ngày sử dụng (theo dịch vụ).
12. **Hoàn tác 10 giây** cho bỏ dòng, ngừng dùng và dùng lại; xóa không có hoàn tác.
13. **Quyền Quản lý mẫu checklist** cấp mặc định cho vai trò Điều hành; Kinh doanh và Kế toán không có menu DH01.
14. **Không gửi thông báo** khi mẫu thay đổi.

## Thay đổi cần làm ở màn khác

**Tình trạng 11/11/2026:** đã cập nhật RSD DH07 (lên v1.1) và RSD DH08 (lên v2.1) theo các mục dưới; bản cũ sao lưu ở `rsd/_backup-20261111-truoc-dong-bo-DH01/`. Các mục còn lại (danh sách màn, KD06.1, KD08, QT05, QT02, khởi tạo dữ liệu) chưa làm vì chưa có RSD của các màn đó.


- **Danh sách màn (DH01).** Cột Danh mục: “Loại Tour (QT05), loại dịch vụ”. Luồng: một mẫu cho mỗi loại Tour, Mẫu mặc định, phiên bản, ngừng dùng và chỉ xóa mẫu chưa dùng; bỏ chữ “(đề xuất)” ở câu sửa mẫu.
- **RSD DH07 v1.0 → v1.1 (đã làm).**
  - R04 viết lại theo R01 và R07 của DH01: chọn **một** mẫu theo loại Tour, rơi về Mẫu mặc định; bỏ câu gộp nhiều mẫu và bỏ trùng.
  - E1.5 và AC14: không còn checklist rỗng vì luôn có Mẫu mặc định; thay bằng “Booking chưa có loại Tour hoặc loại Tour chưa có mẫu: dùng Mẫu mặc định, nhật ký ghi lý do”.
  - 4.1 Công việc checklist (khởi tạo): thêm số phiên bản mẫu, ID công việc mẫu, ID hạng mục liên kết, hướng dẫn.
  - R08 (giao người phụ trách): khi giao lần đầu, điền người phụ trách vào các việc có Giao người phụ trách (R05 của DH01).
  - R12: dòng Mẫu checklist (DH01) đổi “Khi thiếu” thành “Dùng Mẫu mặc định”.
- **RSD DH08 v2.0 → v2.1 (đã làm).**
  - L2.5 và R19 (Thêm dịch vụ): “công việc theo mẫu loại dịch vụ” đổi thành “việc theo dịch vụ của mẫu hồ sơ đã dùng, phiên bản hiện hành” (L5.2 của DH01).
  - 4.1 Công việc checklist: thêm số phiên bản mẫu, ID công việc mẫu, hướng dẫn.
  - W12 (chi tiết công việc): hiện hướng dẫn thực hiện.
  - DH08.1 giao người phụ trách lần đầu: áp dụng R05 của DH01.
- **KD06.1 và KD08.** Thêm trường **Loại Tour** (chọn từ QT05) ở yêu cầu Tour; Booking kế thừa, chỉ đọc ở KD08.
- **QT05.** Thêm nhóm danh mục **Loại Tour** (thêm, sửa, tắt; không xóa giá trị đã dùng).
- **QT02.** Thêm quyền “Quản lý mẫu checklist” cho DH01; mặc định cấp cho vai trò Điều hành.
- **Khởi tạo dữ liệu.** Tạo sẵn Mẫu mặc định với ít nhất một công việc khi cài đặt.

## Kiểm tra đã thực hiện

- Sau khi đồng bộ DH07, DH08: W09 đổi tên hạng mục cho khớp DH08 (Lotus Hanoi, Ngọc Trai Hạ Long, Hương Giang Riverside, Riverside Bloom Hội An, Hoàng Long); đã chụp lại và xem.

- `wireframes-src/check-rsd.js --final` (bản Node của `check-rsd.py`; máy không có Python): 40 tham chiếu ảnh, 20 mã W, không lỗi bảng hay đường dẫn, không còn nhãn chưa chốt. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E.
- Đã xem trực quan đủ 20/20 ảnh sau lần chụp cuối hoặc sau lần sửa của chính ảnh đó. Đã sửa: vị trí danh sách thả xuống ở W03, W06; thông báo che liên kết ở W06; số việc MICE ở W14 (15 việc); nút Lưu ở W15 khi chưa có thay đổi; dấu * ở lưới chỉ đọc W16; lớp phủ dưới hộp thoại W10.
- Số liệu đã đối chiếu: chip 4 + 1 = 5 (W01), 5 + 1 = 6 (W08), 3 + 2 = 5 (W13), 5 + 0 = 5 (W13a), 3 + 1 = 4 (W14a); Inbound tiêu chuẩn 13 = 8 + 5; xem trước TP-2611-0042 18 = 8 + (3 × 2 + 2 × 1 + 1 × 2); lịch sử 14 + 21 + 12 + 5 = 52; v1 12 việc → v2 (+1 −1) 12 → v4 (+1) 13; Tour học sinh 13 = 7 + 6.

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

## Cập nhật v1.2 (12/11/2026) · tham chiếu sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-DH01-Mau-checklist-dieu-hanh-v1.2.md`, đã xóa bản v1.1. Chỉ đổi tham chiếu và ghi chú, không đổi nghiệp vụ, không dựng lại hình, không thêm mã.

- **Nguồn nghiệp vụ, mục 1.5.** Dẫn RSD DH07 v1.4, RSD DH08 v2.4 (bảng truy vết trước đó ghi DH07 v1.0, DH08 v2.0), thêm RSD KD06 v1.2.
- **E5.1, R11, mục 5.1.** Loại Tour bắt buộc ở KD06.1 (RSD KD06 mục 5.2), Booking kế thừa; nhánh “Booking chưa có loại Tour” chỉ còn cho dữ liệu cũ hoặc Booking nhập ngoài, vẫn dùng Mẫu mặc định. Giữ dòng “Booking chưa có loại Tour” trong Đang áp dụng cho của Mẫu mặc định (R01, W01, AC01, AC23) vì nhánh này vẫn có thể xảy ra.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH01-Mau-checklist-dieu-hanh-v1.2.md --final`: 20 tham chiếu ảnh, 20 mã W, không lỗi.

## 12/11/2026 · v1.3 · bỏ Tạo sớm theo quyết định của người dùng

**Quyết định của người dùng (12/11/2026), yêu cầu riêng của doanh nghiệp:** không có luồng duyệt; Kế toán không làm chốt chặn cho Kinh doanh và Điều hành. Hệ quả: hồ sơ Tour tự tạo ngay khi Booking được lưu ở KD08, không chờ thanh toán; bỏ điều kiện tạo hồ sơ và Tạo sớm (RSD DH07 v1.5 R01; `BOI-CANH-DU-AN.md`, mục Nguyên tắc đã chốt).

Tệp mới `RSD-DH01-Mau-checklist-dieu-hanh-v1.3.md`, đã xóa bản v1.2. Không đổi nghiệp vụ của DH01, không dựng lại hình (không hình nào của DH01 có Tạo sớm), không thêm, bỏ mã.

- **L5.1.** Điều kiện: hệ thống tự tạo khi Booking được lưu (R01 của DH07) hoặc Điều hành bấm Thử lại khi tạo lỗi; bước 3 bỏ câu về hộp thoại Tạo sớm của DH07 (W09 của DH07 đã bỏ).
- **E5.4.** Trường hợp điển hình của hạn đã qua đổi thành hồ sơ tạo sát ngày khởi hành (vì Booking tạo sát ngày).
- **R05.** Giao người phụ trách lần đầu chỉ còn DH07 tại chỗ, hàng loạt, DH08.1.
- **AC24.** Viết lại: Kinh doanh lưu Booking khi còn 3 ngày tới khởi hành, hồ sơ tự tạo ngay; việc có hạn đã qua đặt hạn hôm nay, Quá hạn.
- **Nguồn nghiệp vụ, mục 1.5.** Dẫn RSD DH07 v1.5, RSD DH08 v2.5.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH01-Mau-checklist-dieu-hanh-v1.3.md --final`: 20 tham chiếu ảnh, 20 mã W, không lỗi.

## 12/11/2026 · v1.4 · rà soát lần ba

- **Bỏ “Booking đang chờ tạo hồ sơ”.** L4.1 bước 1, R08, AC15 và W12 còn nhắc Booking chờ tạo hồ sơ (dấu vết của điều kiện thanh toán đã bỏ). Theo RSD DH07 R01, hồ sơ tạo ngay khi Booking được lưu; Booking chưa có hồ sơ chỉ còn nhóm Tạo lỗi (RSD DH07 R05, mục 2.5). Hồ sơ tạo lại (tự thử lại hoặc Thử lại) dùng mẫu Đang dùng tại lúc giao dịch bắt đầu (RSD DH07 R04), nên Booking cùng loại Tour ở nhóm Tạo lỗi sẽ nhận Mẫu mặc định. Diễn đạt mới: “Booking cùng loại Tour ở nhóm Tạo lỗi, chưa có hồ sơ”. R08 thêm: không có Booking như vậy thì không hiện dòng này (tự quyết).
- **Wireframe.** Sửa `captions.js` (W12) và `screens-dh01.js` (W12); dựng lại W12, đã xem ảnh.
- **Phiên bản.** Nguồn nghiệp vụ và mục 1.5 dẫn RSD DH07 v1.7, RSD DH08 v2.8, RSD KD06 v1.5 (thêm R05 của DH07). Dẫn phiên bản trong các mục “Thay đổi ở v1.3, v1.2” là lịch sử, giữ nguyên.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH01-Mau-checklist-dieu-hanh-v1.4.md --final`: 20 tham chiếu ảnh, 20 mã W, không lỗi.
