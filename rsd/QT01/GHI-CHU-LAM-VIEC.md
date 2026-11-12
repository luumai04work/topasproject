# Ghi chú làm việc · RSD QT01 · Người dùng

Không thuộc bản phát hành. Tạo 12/11/2026 khi viết RSD QT01 v1.0.

## 1. Quyết định đã chốt

| Mã | Câu hỏi | Trả lời (người dùng, 12/11/2026) | Tác động |
|---|---|---|---|
| Q1 | Tài khoản mới và đặt lại mật khẩu xử lý thế nào (hành vi gửi ra ngoài) | Quản trị đặt mật khẩu tạm; hệ thống không gửi email; người dùng phải đổi ở lần đăng nhập đầu | R04, R07; L2.1, L4.1, L5.3; W08, W17, W22; mục 5.3; AC08, AC12, AC14, AC15, AC25, AC33, AC34, AC37 |
| Q2 | Một tài khoản mấy vai trò | Nhiều vai trò; quyền là hợp | R02; W02, W06, W10, W11, W13; AC03, AC16–AC18, AC20 |
| Q3 | Khóa tài khoản của người đang phụ trách bản ghi | Cảnh báo (liệt kê theo màn, có liên kết) rồi cho khóa; bản ghi giữ nguyên, Quản trị chuyển sau | R06; L5.1; W18, W19; AC27–AC29, AC31 |
| Q4 | Mật khẩu tạm có hết hạn không (thay đề xuất 72 giờ) | Không hết hạn; dùng được tới khi người dùng đổi, Quản trị đặt lại hoặc khóa | R03, R04, R07; mục 2.4, 2.5; L2.1, L4.1 (ví dụ đổi thành làm mất mật khẩu tạm), L5.3; bỏ chỉ báo Mật khẩu tạm hết hạn và dòng Hết hạn ở W08; dựng lại W01–W23; AC08, AC14, AC15, AC25 |

## 2. Thiết kế tự quyết cần xác nhận

1. Mật khẩu tự sinh 12 ký tự (bỏ ký tự dễ nhầm); mật khẩu tự nhập tối thiểu 10 ký tự, có chữ và số (R04). Hạn mật khẩu tạm: đã chốt Q4, không hết hạn.
2. **Không xóa tài khoản**, chỉ khóa (R01).
3. **Quyền QT01 gắn cố định với vai trò Quản trị hệ thống**; QT02 không cấp cho vai trò khác (mục 1.4).
4. **Lý do khóa bắt buộc** (R06).
5. **Mở khóa mặc định kèm đặt mật khẩu tạm mới**, bỏ tích được (R07).
6. **Bỏ vai trò khi đang phụ trách: cảnh báo rồi cho lưu**, cùng tinh thần Q3; người mất vai trò được các màn khác coi là “ngừng hoạt động” với bản ghi của vai trò đó (R03, R08, W12).
7. **Họ tên, điện thoại tài khoản độc lập với DH06:** điền sẵn khi tạo; khi liên kết sau thì có gợi ý “DH06: … · Dùng” nếu khác (R01, L3.2).
8. **Gợi ý vai trò theo nhóm công việc** của nhân sự (Kinh doanh, Điều hành, Kế toán) (R05).
9. **Chỉ dạng Bảng; không hàng loạt; không xuất tệp** (R10).
10. **Quản trị không tự đặt lại mật khẩu, không tự khóa mình**; luôn còn ít nhất một Quản trị hệ thống đang hoạt động (R02, R06, W13).
11. **Gỡ liên kết ghi ngay khi xác nhận** ở hộp thoại, không chờ nút Lưu (R05).
12. **Ô Đang phụ trách** trên bảng trượt và phép đếm R06 gồm cả hồ sơ Tour, công việc qua nhân sự liên kết.
13. Hệ quả của Q1: **màn Đăng nhập không có “Quên mật khẩu” tự phục vụ**; người dùng báo Quản trị để đặt lại (L4.1).
14. Đóng hộp thoại mật khẩu khi chưa sao chép thì cảnh báo một lần (E2.5).

## 3. Thay đổi cần làm ở màn khác

- **DH06.** Banner “chưa liên kết tài khoản” (RSD DH06 W08): với người có quyền QT01, câu “liên kết ở QT01” là liên kết mở QT01 Tạo tài khoản đã chọn sẵn nhân sự.
- **KD03-KD04, KD05, KD07, KD08, KD09, KD10, DH07.** Nhãn “(ngừng hoạt động)” áp dụng cả khi tài khoản **mất vai trò** cần cho bản ghi, không chỉ khi bị khóa (QT01 R03, R08). Bộ lọc Phụ trách nhận tham số trên đường dẫn để QT01 mở lọc sẵn; KD05 mở kèm chip Đang xử lý.
- **QT02.** Bốn vai trò mặc định Kinh doanh, Điều hành, Kế toán, Quản trị hệ thống; quyền QT01 không nằm trong ma trận cấp cho vai trò khác; mỗi tài khoản nhiều vai trò, quyền là hợp, phạm vi bản ghi lấy rộng nhất.
- **QT03.** Đã khớp RSD QT03 v1.0 (viết song song cùng ngày): thao tác QT01 ghi kho nhật ký với cờ nhạy cảm; mật khẩu chỉ ghi “đã đổi”; email, điện thoại che; không ghi đăng nhập. QT01 đã đổi theo: tab Lịch sử đọc kho QT03 (giá trị đã che), liên kết “Xem thao tác của người này” mở QT03 theo Người dùng, 30 ngày qua; bỏ mọi chỗ nói “nhật ký đăng nhập ở QT03”. QT03 cần thêm: cho tab Lịch sử của QT01 đọc theo đối tượng là tài khoản.
- **Màn Đăng nhập, Đổi mật khẩu, Tài khoản của tôi** (chưa có trong danh sách màn): theo QT01 R04 (bắt đổi mật khẩu tạm, quy tắc mật khẩu, thông báo tài khoản bị khóa; mật khẩu tạm không hết hạn, không có quên mật khẩu qua email). Đề xuất bổ sung vào danh sách màn.
- **Danh sách màn (`luồng/danh-sach-man-hinh-level1.md`).** Dòng QT01 còn ghi “Đề xuất, ngoài Level 1”; cập nhật theo Q1–Q3 nếu người dùng muốn.

## 4. Kiểm tra đã chạy

- `node wireframes-src/check-rsd.js RSD-QT01-Nguoi-dung-v1.0.md --final`: 23 ảnh nhúng, 23 mã W, không cảnh báo. `check-rsd.py` chưa chạy được vì máy không có Python.
- Đã mở xem từng ảnh W01–W23: tiếng Việt hiển thị đúng; sửa thứ tự lịch sử ở W16, ngày cập nhật ở W21, nền danh sách của W08 (sau khi tạo), vị trí thông báo ở W11, đặt các hộp thoại W15, W17, W18, W20, W22 lên trên bảng trượt.
- Đối chiếu số liệu: W01 10 + 2 = 12; W02 4 + 1 = 5; W09 11 + 2 = 13; W19 9 + 3 = 12; W23 11 + 1 = 12. Sau Q4: không còn ngày hết hạn trên ảnh nào; Nguyễn Thị Hằng hiện Chờ đổi mật khẩu ở W01, W17, W20. Số đang phụ trách của Lê Thu Hà giống nhau ở W12 và W18. Nhân sự Nội bộ chưa có tài khoản ở W05 (NS-026, NS-011, NS-006) khớp RSD DH06.
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích của người dùng; số liệu của Nguyễn Hoàng Nam (64 khách, 12 yêu cầu) khớp KD03, KD05, còn 7 Booking và 2 chiến dịch là số minh họa mới.

## 12/11/2026 · rà soát lần hai (v1.1)

Tệp mới `RSD-QT01-Nguoi-dung-v1.1.md`, đã xóa bản v1.0.

- **Lý do.** R06 ghi “người mở là Quản trị nên thấy và chuyển được mọi bản ghi”, mâu thuẫn RSD DH07 (Quản trị chỉ xem, không giao người cho hồ sơ Tour) và quyết định “Mở lại hồ sơ Tour Đã đóng” ở `BOI-CANH-DU-AN.md`. Sửa theo dòng “Ngừng hoạt động”: hồ sơ Tour chưa đóng do Điều hành giao lại ở DH07 (liên kết trong hộp thoại mở DH07 lọc theo người đó, Quản trị chỉ xem); hồ sơ Đã đóng do Quản trị hệ thống Mở lại Tour ở DH08 kèm lý do và chọn người phụ trách mới (RSD DH08 R16). Khách hàng, yêu cầu Tour, Booking, chiến dịch giữ nguyên (Quản trị chuyển).
- **Đã sửa.** 1.2 (dòng QT01 → DH07), 1.3, L5.1 bước 2 và Kết quả, E3.1, R03, R06 (bảng đếm, ghi chú hồ sơ Đã đóng không đếm, câu liên kết), R08; thêm AC38, AC39.
- **Suy ra, chờ xác nhận.** Công việc chưa hoàn tất của người ngừng hoạt động do Điều hành giao lại ở DH08 (R06).
- **Hình.** Không đổi giao diện; W12, W18 minh họa Lê Thu Hà (Kinh doanh, không có hồ sơ Tour) nên không dựng lại.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-QT01-Nguoi-dung-v1.1.md --final`: 23 tham chiếu ảnh, 23 mã W, không lỗi.

## 12/11/2026 · v1.2 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-QT01-Nguoi-dung-v1.2.md` (đã xóa v1.1).
- **R06 (liên kết trong hộp thoại khóa).** Câu “Ở KD03, KD05, KD07, KD09 người mở là Quản trị nên thấy và chuyển được mọi bản ghi” sai với KD07: KD07 chỉ đọc, không thao tác ghi (RSD KD07 R01); chuyển người phụ trách Booking làm từng Booking ở KD08 (RSD KD08 R11). Tách KD07 ra: Quản trị xem mọi Booking của người đó, bấm dòng mở KD08 để chuyển. Ghi thêm KD05 chỉ chuyển yêu cầu Đang xử lý (RSD KD05 R08). Sửa cùng ý ở 1.2 (dòng QT01 → KD03…). Nhãn liên kết “Mở Booking → KD07” ở W18 giữ nguyên (vẫn đúng: mở KD07 lọc theo người), không dựng lại hình.
- Dẫn phiên bản dòng nguồn và R06 theo bảng phiên bản mới (DH06 v1.3, KD03-KD04 v1.4, KD07 v1.3, KD09 v1.3, KD10 v1.2, QT03 v1.1, DH07 v1.7, DH08 v2.8).
- `check-rsd.js --final`: 23 ảnh, 23 mã W, đạt.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** 1.5, R05: điều kiện chọn theo RSD DH06 v1.3 R03 (vai trò Điều hành; người thực hiện checklist không có tài khoản Bị khóa).
