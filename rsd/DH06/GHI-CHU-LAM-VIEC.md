# Ghi chú làm việc · RSD DH06 v1.2

Tài liệu này không thuộc bản RSD. Nó ghi các quyết định đã chốt, các thiết kế do người viết tự quyết (cần người dùng xác nhận) và các thay đổi cần làm ở màn khác.

Từ v1.1, file RSD trong thư mục là bản nguồn và được sửa trực tiếp. Bộ sinh cũ (`rsd-src.md`, `expand-md.js`) đã xóa vì dựng ra khung 8 mục. Tên ảnh đồng bộ bằng `node wireframes-src/sync-md.js <RSD>.md`.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | DH06 · Danh mục nhân sự; viết mới từ danh sách màn (chưa có RSD); bàn giao MD + PNG trong ZIP theo `BOI-CANH-DU-AN.md` | Toàn bộ tài liệu |
| Q1 | Danh mục gồm những ai | Nhân viên nội bộ và cộng tác viên (HDV, trưởng đoàn tự do); trường Loại; chỉ Nội bộ được liên kết tài khoản QT01 | R01, R03; cột Tài khoản; W05, W08; AC12–AC14, AC17 |
| Q2 | Tắt Nhận phân công khi người đó đang được giao việc | Cảnh báo, liệt kê nơi đang giao, rồi cho tắt; phân công đã có giữ nguyên; người đó chỉ bị ẩn khi chọn mới; gắn chỉ báo để giao lại | L4.2, R05; W12, W13; AC20–AC25 |
| Q3 | Nghiệp vụ bổ sung | Chỉ thêm Xem lịch phân công (tab chỉ xem). Không làm: thẻ HDV và hạn thẻ, lịch bận và nghỉ phép, nhập Excel | L1.2, R04; W10; AC05, AC06 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Ai được chọn ở đâu (R03).**
   - Phụ trách hồ sơ: nhóm Điều hành, Nội bộ, có tài khoản đang hoạt động (giữ như RSD DH07 R08).
   - Người thực hiện công việc checklist: chỉ Nội bộ.
   - Phục vụ Tour: theo nhóm công việc; Nội bộ hay Cộng tác viên đều được.
   - Người nhận thông báo của nhóm Điều hành phải đang nhận phân công.
2. **Nhóm công việc khai vai trò phục vụ Tour ở QT05.** Ví dụ Hướng dẫn viên nhận HDV chính, HDV điểm; Trưởng đoàn nhận Trưởng đoàn. Nhóm Điều hành là giá trị hệ thống, không tắt được.
3. **Ngôn ngữ phục vụ bắt buộc với nhóm Hướng dẫn viên**, lấy cùng danh mục với ngôn ngữ phục vụ của Booking.
4. **Thêm trường Khu vực phục vụ**, chọn nhiều, mặc định Toàn quốc, dùng danh mục địa điểm (điểm đến) chung với NCC. DH08.5 hiện khu vực trong danh sách chọn.
5. **Điện thoại bắt buộc và không được trùng (chặn)**; trùng họ tên hoặc email chỉ cảnh báo. Mã nhân sự `NS-NNN`.
6. **Thông báo và chỉ báo sau khi tắt chỉ phát sinh khi hết 10 giây Hoàn tác**, để tránh báo nhầm khi người dùng hoàn tác.
7. **Thông báo khi tắt.** Gửi cho nhóm Điều hành (về hồ sơ người đó phụ trách) và cho Điều hành phụ trách từng hồ sơ có công việc hoặc lịch phục vụ của người đó; gộp theo người nhận.
8. **Bỏ nhóm công việc hoặc đổi Nội bộ sang Cộng tác viên khi đang được giao việc:** cảnh báo rồi cho lưu (cùng tinh thần Q2), không gắn chỉ báo. Đổi sang Cộng tác viên khi đã liên kết tài khoản thì chặn.
9. **Có xóa nhân sự**, nhưng chỉ khi chưa từng được dùng và chưa liên kết tài khoản. Đã dùng thì chỉ tắt (theo nguyên tắc danh mục của dự án).
10. **Không có thao tác hàng loạt và không xuất Excel**, vì danh mục nhỏ và mỗi lần tắt cần xem việc của từng người.
11. **Quyền mặc định chỉ Điều hành.** Kinh doanh, Kế toán không có menu DH06; Quản trị cấp thêm ở QT02 nếu cần.
12. **DH06 không lưu số giấy tờ tùy thân** của nhân sự.
13. **Bố cục.** Bảng trượt rộng 760 px, hai tab Thông tin và Lịch phân công; công tắc Nhận phân công ở phần đầu bảng trượt; Xóa ở góc trái chân bảng trượt; tab Lịch phân công hiện 5 việc có hạn gần nhất.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (DH06).** Ghi thêm: gồm Nội bộ và Cộng tác viên; trường Ngôn ngữ phục vụ, Khu vực phục vụ; cảnh báo khi tắt người đang được giao việc; tab Lịch phân công; xóa nhân sự chưa dùng.
- **QT05.**
  - Nhóm công việc có thuộc tính vai trò phục vụ Tour; nhóm Điều hành là giá trị hệ thống.
  - Có danh mục Ngôn ngữ phục vụ (dùng chung với Booking), nếu chưa có.
  - Danh mục địa điểm dùng cho cả Khu vực phục vụ của nhân sự.
- **QT01.** Chỉ liệt kê nhân sự Nội bộ chưa liên kết khi liên kết tài khoản; một tài khoản liên kết tối đa một nhân sự.
- **RSD DH07.** (đã giao trong đợt sửa sau rà soát mâu thuẫn 12/11/2026, xem mục Cập nhật v1.2)
  - R08: thêm chỉ báo “Không nhận phân công” cạnh người phụ trách.
  - Bộ lọc Phụ trách nên có thêm giá trị “Người không nhận phân công” để tìm hồ sơ cần giao lại.
  - Người nhận thông báo nhóm Điều hành theo R03 của DH06.
- **RSD DH08.** (đã giao trong đợt sửa 12/11/2026, xem mục Cập nhật v1.2)
  - DH08.1, DH08.2, DH08.5 hiện chỉ báo “Không nhận phân công”.
  - DH08.2: danh sách người thực hiện chỉ gồm nhân sự Nội bộ.
  - DH08.5: danh sách chọn lọc theo nhóm công việc nhận vai trò đã chọn và hiện khu vực phục vụ.
  - Câu “DH06 cần thêm trường Ngôn ngữ” ở R12 đã được đáp ứng.
- **RSD DH02, DH03.** Người nhận nhắc hợp đồng (nhóm Điều hành) lấy theo R03 của DH06, tức phải đang nhận phân công. Đã giao trong đợt 12/11/2026: RSD DH02 v1.2 đã sửa (mục 1.4, E3.6, R08, R10); DH03 dẫn về RSD DH02 R08 nên không cần sửa riêng.
- **Trung tâm thông báo.** Thêm loại thông báo “Nhân sự không nhận phân công” (R05).

## Kiểm tra đã thực hiện

- `node wireframes-src/check-rsd.js RSD-DH06-Danh-muc-nhan-su-v1.0.md --final`: 32 tham chiếu ảnh, 16 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E. Máy không có Python nên chưa chạy `check-rsd.py`.
- Đã xem trực quan W01, W05, W06, W08, W09, W10, W12, W13, W15, W15a sau lần chụp cuối. Đã sửa:
  - chân bảng trượt bị chật chữ ở W15a;
  - ngày tạo của Phan Thu Hà lệch với ghi chú ở W08;
  - ghi chú đã nhập bị mất ở W06.
- Chưa mở xem riêng W02, W03, W04, W07, W11, W14. Các ảnh này dựng từ cùng thành phần với các ảnh đã xem.
- Số liệu đã đối chiếu:
  - chip: W01 24 + 3 = 27; W02 3/0/3; W07 25 + 3 = 28; W13 23 + 4 = 27; W14 25 + 2 = 27; AC28 24 + 3 = 27;
  - Trần Minh Anh: 6 hồ sơ, 9 việc (W01, W10);
  - Lê Quang Huy: 2 hồ sơ, 3 việc (W01, W12, W13);
  - Đỗ Văn Khải: 2 Tour từ 18/11 (W01, W09).
- Mã Tour, khách và ngày khớp dữ liệu minh họa của DH07, DH08: TP-2611-0042 Müller Reisen 18/11–25/11; TP-2611-0047 Dupont Voyages; TP-2612-0003 Kim Tours Korea 04/12.

## Cập nhật v1.2 (12/11/2026) · tham chiếu sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-DH06-Danh-muc-nhan-su-v1.2.md`, đã xóa bản v1.1. Chỉ đổi tham chiếu, không đổi nghiệp vụ, không dựng lại hình, không thêm mã.

- **Nguồn nghiệp vụ.** Dẫn RSD DH07 v1.4, DH08 v2.4, DH01 v1.2, DH02 v1.2 (trước đó DH07 v1.1, DH08 v2.1, DH01 v1.0, DH02 v1.0).
- **R03.** Thứ tự gợi ý nhân sự phục vụ Tour dẫn RSD DH08 L5.2 (bước chọn nhân sự, nơi ghi thứ tự khớp ngôn ngữ và trống lịch, khớp ngôn ngữ nhưng bận, còn lại) thay cho R12 (R12 chỉ ghi khoảng phân công, trùng lịch và lệch ngôn ngữ).
- **Việc ở màn khác.** Các mục “RSD DH07”, “RSD DH08”, “RSD DH02, DH03” trong phần Thay đổi cần làm ở màn khác đã được giao cho đợt sửa song song 12/11/2026 (DH07 v1.4, DH08 v2.4 do agent khác sửa; DH02 v1.2 đã sửa người nhận thông báo). Người viết DH06 không tự kiểm từng điểm trong DH07, DH08.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH06-Danh-muc-nhan-su-v1.2.md --final`: không lỗi.

## 12/11/2026 · v1.3 · rà soát lần ba

- **R03 · Người phụ trách hồ sơ.** Bản cũ chỉ ghi “tài khoản liên kết đang hoạt động”. Theo RSD QT01 R03 (ngừng hoạt động gồm cả tài khoản không còn vai trò Điều hành với hồ sơ Tour), R04, R06 và BOI-CANH-DU-AN “Ngừng hoạt động”, người phụ trách hồ sơ phải có tài khoản liên kết đang hoạt động **và có vai trò Điều hành**. Áp cùng điều kiện cho người nhận thông báo nhóm Điều hành (cùng nhóm người với người phụ trách; suy ra, chờ xác nhận).
- **R03 · Người thực hiện công việc checklist.** RSD QT01 R06: tài khoản bị khóa không có trong danh sách chọn người thực hiện ở mọi màn. Thêm điều kiện “không có tài khoản liên kết Bị khóa”; nhân sự Nội bộ chưa có tài khoản vẫn chọn được (người thực hiện không bắt buộc có tài khoản). Nhân sự phục vụ Tour (DH08.5) giữ nguyên, vì gồm cả Cộng tác viên không có tài khoản (không có trong yêu cầu sửa; ghi để xác nhận nếu cần loại cả người Nội bộ có tài khoản Bị khóa ở DH08.5).
- Sửa R10 (dòng Liên kết tài khoản và vai trò), kết quả L2.1, AC14; thêm AC33 (mất vai trò Điều hành), AC34 (người thực hiện: chưa có tài khoản được chọn, Bị khóa thì không).
- **Phiên bản.** Nguồn nghiệp vụ dẫn RSD DH07 v1.7, DH08 v2.8, DH01 v1.4, DH02 v1.3, thêm QT01 v1.2. Mục “Thay đổi ở v1.2” là lịch sử, giữ nguyên.
- **Wireframe:** không dựng lại (R03 là quy tắc của màn khác; hình DH06 không đổi).
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH06-Danh-muc-nhan-su-v1.3.md --final`: 16 tham chiếu ảnh, 16 mã W, không lỗi.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** E2.7: câu báo hướng thêm nhóm công việc ở QT05 (Điều hành sửa nhóm này), bỏ “liên hệ Quản trị”.
