# Bộ dựng wireframe (HTML → PNG)

1. Sao chép thư mục này vào `<thư mục RSD>/wireframes-src/`.
2. Sửa `lib.js`: thay `SIDE` (menu), `hdr` (header và tab), `STATUS`, `SVC` (màu nhãn trạng thái) theo màn đang đặc tả. Giữ các thành phần dùng chung.
3. Viết màn trong `screens-*.js` (xem `screens-mau.js`). Thêm tên và mục đích vào `captions.js`; thiếu tên thì `build.js` báo lỗi.
4. Chụp ảnh bằng `node build.js` (tất cả) hoặc `node build.js W10 W11` (chỉ các màn đó). Ảnh ra ở `../wireframes/`.
5. Trong RSD, ở mục 3, ghi `![Wxx · x](wireframes/Wxx.png)` ngay dưới bước (thụt lề trong danh sách), mỗi ảnh một lần. Chạy `node sync-md.js ../<RSD>.md` để điền tên theo `captions.js`.
6. Chạy `node check-rsd.js ../<RSD>.md --final` để kiểm tra. Ảnh còn sát lề trái sau bước đánh số hoặc gạch đầu dòng thì chạy `node indent-images.js ../<RSD>.md` để thụt lề cho đúng mục danh sách.
7. Màn danh sách có nhiều dạng xem: dùng `views.js` (`viewSwitch`, `kanban`, `calMonth`, `timeline`, `seg`). Gọi `setLinks({ table: 'W01.html', kanban: 'Wxx.html', cal: 'Wyy.html' })` để bấm Bảng · Kanban · Lịch chuyển giữa các trang HTML trong `html/`. Ví dụ ở W03–W05 của `screens-mau.js`; quy tắc ở `references/quy-tac-trien-khai.md` mục 12.

Luôn mở ảnh ra xem sau khi chụp. Xem danh sách lỗi hiển thị thường gặp ở `references/wireframe-va-ban-giao.md`.
