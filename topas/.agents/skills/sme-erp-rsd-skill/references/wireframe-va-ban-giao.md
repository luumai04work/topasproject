# Wireframe và bàn giao

## 1. Lập danh sách mã W

- Lập bảng mã W theo luồng. Mỗi màn hoặc trạng thái có giao diện khác nhau có một ảnh:
  - màn xuất phát;
  - form, bảng trượt, hộp thoại;
  - chọn hàng loạt;
  - xem trước;
  - trạng thái **sau** thao tác (sau khi lưu, áp dụng, gửi);
  - các ngoại lệ có giao diện riêng: bị chặn, lỗi gửi, thiếu dữ liệu, kết quả một phần, chỉ đọc;
  - mỗi dạng xem của màn danh sách (Kanban, Lịch, Dòng thời gian), mặc định của từng vai trò nếu khác nhau, và ngoại lệ riêng của dạng xem (cột lỗi, ngày có “+n”).
- Với chuỗi thay đổi trạng thái (ví dụ Chờ → Cần đặt → Chờ kết quả), mỗi trạng thái mà người dùng cần nhìn thấy phải có ảnh. Nếu người dùng hỏi “dịch vụ đổi trạng thái chưa” mà không có ảnh để chỉ, nghĩa là đang thiếu ảnh.
- Mã W ổn định. Mã con dùng hậu tố chữ (W39a, W39b). Khi bỏ một màn, xóa ảnh, HTML và chú thích của mã đó, và không dùng lại mã cho nội dung khác.
- Dùng chung một khung khi giao diện thật sự giống nhau, và ghi rõ chỗ dùng lại (ví dụ “dùng bảng trượt W35”).

## 2. Dựng hình

- Dựng ở kích thước desktop 1280 × 800. Giữ tiêu đề, điều hướng, nhãn trạng thái, vị trí nút và thứ tự trường nhất quán giữa các ảnh.
- Mỗi ảnh có đủ dữ liệu để thấy vì sao một nút hiện hoặc bị khóa. Thể hiện rõ dữ liệu điền sẵn (nhãn nhỏ màu riêng) và trường chỉ đọc (viền nét đứt). Dùng dữ liệu minh họa.
- **Không in tên hoặc mã W lên ảnh.** Ảnh chỉ chứa màn hình. Tên màn và mục đích viết thành chữ trong RSD.
- Số liệu trên ảnh phải khớp nhau:
  - tổng các chip lọc bằng “Tất cả”;
  - số đếm cột Kanban và số thanh trên Lịch khớp số trên chip của ảnh Bảng cùng bộ lọc;
  - số trên tab bằng số mục trong chip tương ứng;
  - các tổng tiền và công thức trên ảnh tính đúng;
  - cùng một dữ liệu minh họa giống nhau giữa các ảnh.
- Kiểm tra trực quan sau mỗi lần dựng:
  - tiếng Việt hiển thị đúng;
  - chữ không tràn hoặc bị cắt;
  - nút không bị mất chữ (ví dụ nút chính chữ trắng trên thanh tối bị CSS phủ nền trắng);
  - chip không tràn hàng;
  - hộp thoại không che mất thông tin cần thấy.
- Sau mỗi lần sửa luồng, chụp lại các ảnh bị ảnh hưởng và xem lại.

## 3. Bộ công cụ dựng (`scripts/wireframe-kit/`)

| Tệp | Vai trò |
|---|---|
| `lib.js` | CSS và thành phần dùng chung: `page`, `hdr`, `drawer`, `modal`, `f` (trường), `B` (nút), `bd` (nhãn), `sv`/`pg` (nhãn trạng thái), ô chọn tại chỗ `.isel`, thanh hàng loạt `.bulk`, banner, toast. `hdr` và `SIDE` là ví dụ của DH08; thay theo màn đang đặc tả. |
| `screens-*.js` | Mỗi tệp xuất một đối tượng `{ W01: html, … }`. Viết hàm dựng bảng có tham số (`rows`, `st`, `flag`, `act`, `extra`, `sel`) để tái dùng một bảng cho nhiều trạng thái. |
| `captions.js` | **Nguồn duy nhất** cho tên và mục đích: `{ Wxx: [vị trí, tên màn, màn này dùng để làm gì] }`. |
| `build.js` | Ghi `html/Wxx.html` và chụp `../wireframes/Wxx.png` bằng Edge hoặc Chrome headless. Không truyền tham số thì dựng tất cả; truyền mã W thì chỉ dựng các mã đó. Đồng thời tạo `wireframes/index.html` có mục lục theo tên. |
| `sync-md.js` | Đồng bộ tên hình trong RSD với `captions.js`: `![Wxx · tên](wireframes/Wxx.png)`, giữ thụt lề. Không chèn dòng mô tả; xóa dòng `*Wxx · …* — …` kiểu cũ nếu còn. |
| `check-rsd.js` | Bản Node của `check-rsd.py`, cho máy không có Python. Báo thêm mã W được nhắc nhưng chưa có hình. |
| `views.js` | Thành phần dạng xem: `viewSwitch` (bộ chuyển Bảng · Kanban · Lịch), `seg` (nhóm nút Tháng · Tuần), `kanban` (cột, thẻ, cột thu gọn, cột lỗi, cột rỗng), `calMonth` (lịch tháng có thanh vắt tuần, “+n”), `timeline` (dòng thời gian theo người), `setLinks` (gắn trang HTML cho từng dạng để bấm chuyển qua lại). `lib.js` nạp CSS `VCSS` vào mọi trang. |

Cách dùng:

- Sao chép bộ công cụ vào `<thư mục RSD>/wireframes-src/`.
- Chụp toàn bộ khá lâu (khoảng 3–4 giây mỗi ảnh). Khi chụp toàn bộ, chạy nền; khi chỉ sửa vài màn, truyền mã W.
- Trên Windows, Node không đọc được đường dẫn `/tmp`. Tạo tệp tạm trong thư mục làm việc, hoặc đổi đường dẫn bằng `cygpath -m`.

## 4. Trình bày trong RSD

- **Không có mục wireframe riêng.** Ảnh nằm trong mục 3, ngay dưới bước làm giao diện thay đổi (thụt lề trong danh sách đánh số), hoặc ngay dưới ngoại lệ có giao diện riêng. Câu của bước nêu chỗ bấm, thao tác và phản hồi (xem mẫu ở `khung-rsd.md`).
- **Mỗi ảnh nhúng một lần**, ở bước đầu tiên hiện màn đó. Bước khác dùng lại màn hoặc không đổi giao diện thì ghi mã W trong câu. `check-rsd` cảnh báo bước thiếu mã W và ảnh nhúng nhiều lần.
- Luồng xuyên nhiều tab (ví dụ thay đổi chương trình) đặt ở tab nơi luồng bắt đầu, theo đúng thứ tự bước; tab khác dẫn mã L.
- Mã W trong prose, bảng trạng thái và AC phải trỏ đúng hình.

## 5. Figma

- Chỉ dùng Figma khi được yêu cầu hoặc khi Figma đã là đích làm việc. Với tệp đã chỉ định, làm trong chính tệp đó.
- Nếu Figma bị giới hạn, thông báo tình trạng. Khi phù hợp, bàn giao wireframe HTML chụp ảnh thay thế và ghi rõ đã cập nhật ở kênh nào.

## 6. Bàn giao

- **Markdown** dùng đường dẫn tương đối (`wireframes/W01.png`). ZIP giữ thư mục ảnh cạnh tệp `.md`; kiểm tra đường dẫn còn mở được sau khi giải nén. Mỗi lần sửa, đóng gói lại ZIP.
- **DOCX** nhúng ảnh kèm tên có mã W (lấy từ alt), có mục lục, bảng có đầu cột, chú thích không tách khỏi hình.
- **Xem trước:** cung cấp `wireframes/index.html`.
- **Không sao lưu:** không tạo tệp .bak hay thư mục _backup khi ghi đè tài liệu hoặc skill; sửa trực tiếp.
- **Kiểm tra trước khi phát hành:**
  - chạy `check-rsd` ở chế độ `--final`;
  - tìm nhãn và thuật ngữ cũ còn sót sau mỗi lần đổi luồng (tên nút cũ, trạng thái cũ, mã W đã bỏ);
  - kiểm tra mã AC kiểm thử được, quy tắc thống nhất giữa ảnh, prose và bảng.
- Nếu không kiểm tra được bằng trình hiển thị đích, nêu rõ phần đã kiểm tra và phần chưa.
- **Ảnh cũ khi xem:** nếu người dùng báo không thấy thay đổi, kiểm tra thời gian sửa của tệp. Sau đó nhắc họ mở lại tệp, tải lại trang (Ctrl+F5) hoặc giải nén lại ZIP.
