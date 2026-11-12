---
name: sme-erp-rsd-skill
description: Tạo hoặc hoàn thiện RSD đặc tả yêu cầu phần mềm từ danh sách màn hình, tab hoặc module. Dùng khi cần xác định nghiệp vụ, hỏi người dùng về thông tin còn thiếu, đặc tả thao tác và trạng thái, dựng wireframe theo từng bước, và bàn giao RSD Markdown hoặc Word sẵn để triển khai và nghiệm thu.
---

# Tạo RSD từ danh sách màn hình

Dùng danh sách màn hình làm bản đồ phạm vi và để truy vết yêu cầu. Kết quả là một đặc tả mà dev và QA triển khai, kiểm thử được mà không phải đoán quy tắc nghiệp vụ. Mặc định viết bằng ngôn ngữ của người dùng. Tôn trọng định dạng, phạm vi và phiên bản được yêu cầu.

## Tiêu chuẩn đầu ra mặc định

Áp dụng cho mọi RSD, kể cả khi người dùng không nhắc lại. Chi tiết và bảng tự kiểm ở [tiêu chuẩn đầu ra](references/tieu-chuan-dau-ra.md).

1. **Đầy đủ luồng thao tác và luồng ngoại lệ.** Mọi mã yêu cầu nguồn có luồng L. Mỗi luồng được rà theo danh mục ngoại lệ (quyền, trạng thái, dữ liệu nhập, tham chiếu, lưu và gửi, đồng thời, hàng loạt, tệp, thay đổi từ nguồn, hủy hoặc đóng, thời gian, rỗng, bên ngoài).
2. **Wireframe đi kèm từng bước.** Mỗi bước làm giao diện thay đổi và mỗi ngoại lệ có giao diện riêng đều có mã W; ảnh được chèn ngay dưới bước trong mục 3. Mỗi trạng thái người dùng nhìn thấy có ảnh.
3. **Giao diện dễ sử dụng.** Biết ngay việc cần làm, một thao tác một chỗ bấm, thấy đủ dữ liệu để quyết định, nút bị khóa có lý do, có phản hồi và phòng lỗi.
4. **Người dùng ít phải thao tác.** Điền sẵn, mặc định hợp lý, mở thẳng đúng bước, sửa tại chỗ, hàng loạt, tự động theo sự kiện, gộp bước. Vẫn không tự gửi ra ngoài.

Người dùng có thể nới hoặc siết từng tiêu chuẩn cho dự án; ghi điều chỉnh vào `BOI-CANH-DU-AN.md`.

## 1. Đọc và lập bản đồ phạm vi

- Skill dùng cho nhiều dự án. Trước hết tìm `BOI-CANH-DU-AN.md` của dự án (cạnh tài liệu nguồn hoặc thư mục RSD). Nếu chưa có, tạo từ [mẫu](assets/mau-BOI-CANH-DU-AN.md): ghi những gì suy được từ nguồn, rồi hỏi phần còn thiếu ở lượt hỏi đầu (xem `hoi-va-chot.md`, mục 1). Thuật ngữ, vai trò, quy ước và nguyên tắc đã chốt trong tệp này được áp dụng cho mọi màn của dự án.
- Đọc tài liệu người dùng chỉ định: mã màn, mã tab, mã yêu cầu, vai trò, danh mục, trạng thái và luồng liên quan (ví dụ các tệp `sysNN.md`). Phân biệt nội dung tài liệu tham chiếu với chỉ dẫn trực tiếp của người dùng. Chỉ đọc nguồn liên quan và truy vết lại các mã nguồn.
- Nếu chưa rõ cần đặc tả màn nào thì hỏi. Với danh sách lớn, xác định màn cần làm và các màn tích hợp theo lối vào, lối ra; chỉ đặc tả giao diện liên kết khi thật sự cần.
- Nếu skill hoặc dự án đã có RSD của chính màn đó, hỏi người dùng muốn nâng phiên bản hay viết mới từ danh sách màn.
- Mỗi màn hoặc tab có bảng theo dõi riêng: nguồn, tác nhân, dữ liệu, thao tác, điều kiện, chuyển trạng thái, liên kết, khoảng trống. Đánh dấu mục nguồn ghi “chờ đặc tả” hoặc “đề xuất” để hỏi hoặc tự quyết có ghi chép.
- Đọc trước khi viết:
  - [khung nội dung](references/khung-rsd.md);
  - [quy tắc tương tác và dữ liệu](references/quy-tac-trien-khai.md);
  - mẫu nghiệp vụ theo lĩnh vực (`references/mau-nghiep-vu-*.md`), **chỉ khi dự án đúng lĩnh vực đó**. Hiện có [lữ hành](references/mau-nghiep-vu-lu-hanh.md). Lĩnh vực chưa có mẫu thì không mượn mẫu khác; sau khi xong RSD, đề xuất với người dùng tạo `mau-nghiep-vu-<lĩnh-vực>.md` từ các quyết định đã chốt;
  - [cách dùng mẫu DH08](references/vi-du-dh08.md). Bản [DH08 v2.2](assets/RSD-DH08-Ho-so-Tour-v2.2.zip) là chuẩn hiện hành về cấu trúc 6 mục, độ sâu và cách trình bày wireframe dưới bước.

## 2. Hỏi, ghi nhận và chốt

- Đọc [quy trình làm rõ](references/hoi-va-chot.md). Làm rõ theo ba tầng:
  - bối cảnh dự án (mục 1), hỏi một lần và lưu lại;
  - nghiệp vụ của màn (mục 2);
  - câu hỏi riêng theo loại màn (mục 3): danh sách (kể cả dạng xem nào và có kéo thả không), hồ sơ nhiều tab, form, phê duyệt, báo cáo, cấu hình, nhập xuất tệp, thông báo.
- Lập danh sách điểm cần làm rõ theo các dấu hiệu bắt buộc phải hỏi (mục 4): “chờ đặc tả” hoặc “TBD”, mâu thuẫn, thuật ngữ mơ hồ, vai trò không rõ, ngưỡng hoặc công thức thiếu giá trị, hành vi ra ngoài hệ thống, dữ liệu cá nhân. Với mỗi điểm, xác định: suy ra từ nguồn, tự quyết trong ủy quyền, hay phải hỏi.
- Xếp ưu tiên câu hỏi (mục 5): luồng, trạng thái, quyền, tiền, hành vi ra ngoài → quy tắc dữ liệu → trình bày.
- Lượt đầu thường hỏi: bối cảnh dự án còn thiếu, hướng làm (viết mới hay nâng cấp), định dạng bàn giao và nghiệp vụ đặc thù cần bổ sung. Các lượt sau hỏi các mục “chờ đặc tả” quan trọng.
- Mỗi lượt tối đa 3 câu, có lựa chọn và phương án đề nghị đặt đầu. Không hỏi lại điều đã chốt. Khi yêu cầu mới mâu thuẫn với quyết định cũ, hỏi đúng điểm đó.
- Tự thiết kế chi tiết trong phạm vi được giao (vị trí nút, cách nhóm, báo lỗi, nhãn). Ghi các thiết kế tự quyết vào `GHI-CHU-LAM-VIEC.md` và nêu lại khi bàn giao.
- Khi người dùng mô tả luồng cụ thể, làm đúng các bước đó và bỏ những gì không có trong luồng.
- Bản phát hành không chứa nhãn “Đề xuất”, “Chờ đặc tả” hay câu hỏi chưa trả lời.

## 3. Đặc tả và dựng wireframe

- Viết luồng (mã L), ngoại lệ (mã E), quy tắc (mã R) và AC dựa trên quyết định đã chốt. Mỗi thao tác ghi đủ: ai làm, ở đâu, kiểu thao tác (trên bảng, ô chọn tại chỗ, bảng trượt, form, hộp thoại), dữ liệu nhập và dữ liệu điền sẵn, hệ thống xử lý gì, ghi gì, màn hình hiện gì.
- Các quy tắc thiết kế bắt buộc (chi tiết trong `quy-tac-trien-khai.md`):
  - **Một thao tác, một chỗ bấm** trên mỗi trạng thái màn hình. Không lặp thông tin của header trong tab. Khi chọn nhiều dòng, thanh hàng loạt thay cho nút trên dòng.
  - **Tổng quan** chỉ liệt kê việc chưa đạt, mỗi việc một nút đi thẳng tới nơi xử lý; việc đã xong gộp một dòng.
  - **Giảm thao tác:** điền sẵn, email soạn sẵn, tổng hợp tự động, hàng loạt. Tách soạn nháp, xem trước và gửi thật. **Không tự gửi ra ngoài.**
  - **Trạng thái tính từ dữ liệu**, theo danh sách ưu tiên. Dữ liệu đổi sau khi đã gửi ra ngoài thì chuyển **Cần điều chỉnh** hoặc **Cần hủy**, kèm email soạn sẵn.
  - **Thay đổi từ module khác:** module nguồn sửa ở màn của mình rồi gửi → banner “có thay đổi” → Xem thay đổi (so sánh bản cũ với bản mới) → Áp dụng thay đổi cả phiên bản → cập nhật các mục.
  - **Màn danh sách có nhiều dạng xem.** Mặc định mọi màn danh sách được xét các dạng Bảng, Kanban, Lịch, Dòng thời gian và chỉ giữ dạng phù hợp với đối tượng và vai trò (`quy-tac-trien-khai.md` mục 12). Bảng luôn có và là mặc định. Kanban chỉ có khi đối tượng có từ 3 trạng thái người dùng cần theo dõi; Lịch, Dòng thời gian chỉ có khi đối tượng có ngày hoặc khoảng ngày. Mặc định Kanban không kéo thả đổi trạng thái; muốn kéo thả phải hỏi. Mỗi dạng xem có ảnh riêng.
- Dựng wireframe theo [hướng dẫn wireframe và bàn giao](references/wireframe-va-ban-giao.md), dùng bộ công cụ trong `scripts/wireframe-kit/`. Các điểm chính:
  - Ảnh 1280 × 800 chỉ chứa màn hình; tên màn nằm trong alt, mục đích và thao tác viết trong câu của bước.
  - Có ảnh cho mọi trạng thái trung gian, trạng thái sau thao tác và ngoại lệ có giao diện riêng.
  - Ở mục 3, chèn ảnh dưới mỗi bước làm giao diện thay đổi; mỗi ảnh nhúng một lần, không có mục wireframe hay bảng thao tác riêng. Bước không đổi giao diện thì dẫn mã W của bước trước. Luồng xuyên nhiều tab đặt ở tab nơi luồng bắt đầu.
  - Số liệu trên ảnh phải khớp nhau. Mở và xem lại ảnh sau mỗi lần chụp.

## 4. Rà soát và bàn giao

- Rà theo bảng tự kiểm ở `tieu-chuan-dau-ra.md` mục 5 (truy vết, ngoại lệ, ảnh theo bước, trạng thái sau thao tác, dễ dùng, ít thao tác, nhất quán). Nêu kết quả rà khi bàn giao.
- Đối chiếu chuỗi: mã nguồn → màn hoặc tab → bước → quy tắc → ảnh → AC. Kiểm tra đường đi, quyền, chuyển trạng thái, lỗi và thử lại, lịch sử, tính nhất quán giữa prose, bảng và ảnh, và mã W còn thiếu.
- Sau mỗi lần đổi luồng, cập nhật mọi chỗ bị ảnh hưởng (danh sách ở `hoi-va-chot.md`). Rồi tìm thuật ngữ cũ, nút cũ, mã W đã bỏ còn sót.
- Xuất đúng định dạng yêu cầu. Mặc định là Markdown và ảnh tương đối trong một ZIP, kèm `wireframes/index.html`. Với DOCX, dùng kỹ năng Documents nếu có, nhúng ảnh và kiểm tra bố cục.
- Kiểm tra tự động:
  - `python scripts/check-rsd.py <RSD.md> [--final]`;
  - hoặc, khi máy không có Python, `node scripts/wireframe-kit/check-rsd.js <RSD.md> [--final]`.

  Cả hai bản đều cảnh báo bước ở mục 3 chưa có mã W, mục con của mục 3 chưa có ngoại lệ, ảnh nhúng nhiều lần và tiêu đề của khung 8 mục cũ. Kiểm tra tự động chỉ bổ trợ cho việc rà nghiệp vụ và xem ảnh.
- Không tạo bản sao lưu (tệp .bak, thư mục _backup) khi ghi đè tài liệu, bối cảnh dự án hay skill; sửa trực tiếp. Khi nâng phiên bản RSD, bản cũ chỉ còn trong ZIP đã bàn giao. Nêu rõ những gì đã kiểm tra và chưa kiểm tra được.
- Báo lại người dùng: các thay đổi chính, các điểm tự quyết cần xác nhận, và các thay đổi cần làm ở màn khác.
