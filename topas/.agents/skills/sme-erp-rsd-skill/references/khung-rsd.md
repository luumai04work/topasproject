# Khung RSD triển khai

Điều chỉnh quy mô theo màn và yêu cầu người dùng. Giữ nguyên mã màn, mã tab, mã yêu cầu nguồn và tên nghiệp vụ. Chỉ giữ mục có nội dung áp dụng.

**Nguyên tắc chính: mỗi nội dung chỉ viết ở một nơi.** Wireframe nằm ngay dưới bước luồng. Vị trí bấm, thao tác và phản hồi giao diện viết trong chính bước đó, không có bảng thao tác hay mục wireframe riêng. Quy tắc chuẩn viết một lần ở mục 4; luồng và bảng khác chỉ dẫn mã R.

## Đầu tài liệu

- Gồm tên màn, module, phiên bản, ngày và nguồn nghiệp vụ (tệp, mã luồng, ngày chốt quyết định).
- Mỗi phiên bản có một dòng “Thay đổi ở vX”.
- Kèm hướng dẫn đọc: mục 3 là luồng theo tab, mỗi bước có mã W, chỗ bấm, thao tác, phản hồi và hình ngay dưới; mục 4 là quy tắc (mã R).
- Ghi kích thước ảnh, cách chụp lại, và chú thích dữ liệu trên hình là minh họa.

## Sáu mục

1. **Phạm vi và quyền.**
   - Mục tiêu thiết kế (ví dụ: biết ngay việc cần làm, ít nhập lại, hàng loạt khi lặp, nghiệp vụ đặc thù).
   - Bảng lối vào và lối ra.
   - Ranh giới: dữ liệu nào màn **không sở hữu** và chỉ đọc hoặc mở màn nguồn; thay đổi từ module khác đi vào bằng cách nào.
   - Bảng quyền theo khu vực × vai trò; phạm vi bản ghi; chế độ chỉ đọc; dữ liệu cá nhân.
2. **Khung màn, trạng thái và quy ước giao diện.**
   - Header (bảng vùng, nội dung, nguồn) và số trên tab (công thức, màu).
   - Nút theo trạng thái: một đoạn ngắn ngay dưới header, không lập bảng riêng nếu bảng vòng đời đã nêu nút gây chuyển trạng thái.
   - Banner cấp hồ sơ: một câu nêu banner nào hiện ở đâu và dẫn tới luồng L. Nội dung và thao tác của banner viết trong luồng.
   - Màn danh sách: bảng **Dạng xem** (dạng, dùng khi, cách trình bày, khác với Bảng) theo `quy-tac-trien-khai.md` mục 12.
   - Bảng vòng đời gồm các cột: từ → đến, sự kiện và tác nhân, điều kiện, tác động, ngoại lệ.
   - Bảng trạng thái của các đối tượng con, kèm chỉ báo phụ.
   - **Quy ước giao diện và xử lý dùng chung:** kiểu thao tác (trên bảng, bảng trượt, form tại tab, hộp thoại), “một thao tác, một chỗ bấm”, nhãn điền sẵn và trường chỉ đọc, tải, bảng rỗng, lưu và thông báo ngắn, cập nhật đồng thời, tiền và ngày, lịch sử. Ngoại lệ chung (bảng rỗng, dòng ra khỏi bộ lọc, lưu lỗi) viết ở đây một lần, không lặp ở từng tab.
   - Bố cục tab tổng quan **không** mô tả ở mục 2; mô tả trong bước luồng mở tab đó.
3. **Luồng thao tác kèm wireframe.**
   - Nhóm theo tab. Mỗi luồng có mã L, điều kiện, các bước đánh số và kết quả. Ngoại lệ có mã E, đặt cuối mỗi tab.
   - Mỗi bước viết theo mẫu ở dưới: mã W và chỗ bấm, thao tác của người dùng, phản hồi của hệ thống. Ảnh nằm ngay dưới bước, thụt lề trong danh sách đánh số.
   - **Mỗi hình chỉ nhúng một lần**, ở bước đầu tiên hiện màn đó. Bước khác dùng lại màn thì dẫn mã W, không nhúng lại.
   - Ngoại lệ có giao diện riêng thì nhúng ảnh ngay dưới ngoại lệ đó.
   - Luồng xuyên nhiều tab đặt ở tab nơi luồng bắt đầu, theo đúng thứ tự bước; tab khác dẫn mã L.
   - Không viết dòng mô tả dưới ảnh, vì bước đã mô tả màn. Tên màn nằm trong alt của ảnh.
   - Bước không chép lại nội dung quy tắc: chỉ nêu điều người dùng thấy và dẫn mã R.
   - Ghi rõ màn nào sở hữu thao tác, dữ liệu và bản ghi liên kết.
4. **Quy tắc triển khai chi tiết** (mã R).
   - Gồm: cách tính trạng thái (danh sách ưu tiên), chống trùng, thời điểm ghi, phạm vi tự động, gộp email, cập nhật liên hệ nhiều hệ thống, hủy, đóng, mở lại, lịch sử.
   - Màn danh sách nhiều dạng xem: quy tắc Dạng xem và ghi nhớ, Kanban (cột, số đếm, kéo thả hay không, thứ tự thẻ, tải thêm), Lịch hoặc Dòng thời gian (mốc ngày, xếp thanh, “+n”, giới hạn).
   - Bảng cấu hình phụ thuộc gồm: cấu hình, chủ sở hữu, dùng ở đâu, hành vi khi thiếu.
   - Tự động theo sự kiện ghi trong quy tắc R gây ra nó hoặc trong bước luồng; không lập bảng sự kiện tự động riêng.
5. **Dữ liệu.**
   - Bảng đối tượng: khóa, dữ liệu chính, nguồn hoặc tác động.
   - Bảng trường nhập: form, trường, bắt buộc, mặc định hoặc điền sẵn, kiểm tra.
   - Bảng **Dữ liệu gửi ra ngoài** (tài liệu, người nhận, nội dung, lúc gửi thật, dữ liệu lưu lại), nếu màn có gửi ra ngoài.
6. **Tiêu chí nghiệm thu.** Mỗi AC có mã, điều kiện và thao tác, kết quả kiểm chứng được. Bao phủ:
   - quyền, luồng chính, chuyển trạng thái;
   - dữ liệu sai; lỗi tải, gửi, lưu;
   - thao tác lặp, hàng loạt, xung đột;
   - thay đổi từ module khác.

## Mẫu bước luồng

```markdown
**L2.3 Phân công và sửa công việc.** *Điều kiện:* …

1. **W12 · Bấm tên công việc → bảng trượt.** [Dữ liệu điền sẵn, trường chỉ đọc.] [Người dùng nhập gì, bấm nút nào.] [Hệ thống kiểm tra gì, ghi gì, màn hình hiện gì; lỗi thì phục hồi thế nào; dẫn mã R.]

   ![W12 · Chi tiết công việc](wireframes/W12.png)

2. **W12 → W10 · Nút Lưu.** … (màn đã có hình ở bước trước thì không nhúng lại)

*Kết quả:* trạng thái và dữ liệu sau luồng.
```

Ngoại lệ có giao diện riêng:

```markdown
- **E2.1 · W15.** [Điều kiện]: [hệ thống phản hồi], [cách phục hồi].

  ![W15 · Chặn bỏ dịch vụ đã đặt](wireframes/W15.png)
```

## Những chỗ hay bị lặp, cần tránh

| Lặp | Cách làm đúng |
|---|---|
| Mục wireframe riêng nhúng lại ảnh đã có trong luồng | Bỏ mục đó; ảnh chỉ ở dưới bước |
| Bảng thao tác theo mã W lặp các bước luồng | Gộp vị trí, thao tác, phản hồi vào câu của bước |
| Mô tả bố cục tab ở mục 2 rồi lặp ở bước mở tab | Chỉ mô tả trong bước |
| Bảng nút theo trạng thái và bảng vòng đời | Một đoạn ngắn ở header; vòng đời nêu nút chuyển trạng thái |
| Quy ước giao diện và xử lý dùng chung ở hai nơi | Một mục duy nhất ở mục 2 |
| Bảng sự kiện tự động lặp quy tắc R | Ghi ở quy tắc R hoặc bước gây ra sự kiện |
| Quy tắc R kể lại các bước luồng | R chỉ giữ quy tắc, dẫn mã L và E |
| Ngoại lệ chung (bảng rỗng, lưu lỗi) lặp ở từng tab | Viết một lần ở quy ước dùng chung |

## Lưu ý viết

- Với dữ liệu quan trọng, tách trường đọc từ nguồn, trường người dùng nhập, giá trị tính và bản chụp lưu khi gửi.
- Đánh số lại khi chèn hoặc bỏ bước, và kiểm tra lại các tham chiếu.

## Tài liệu đi kèm (không thuộc bản phát hành)

`GHI-CHU-LAM-VIEC.md` gồm:

- các quyết định đã chốt (mã Q, câu trả lời, tác động);
- các thiết kế tự quyết cần xác nhận;
- thay đổi cần làm ở màn khác;
- các kiểm tra đã chạy.
