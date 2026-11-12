# Ghi chú làm việc · RSD KD01, KD02 v1.2

Tài liệu này không thuộc bản RSD. Nó ghi các quyết định đã chốt, các thiết kế do người viết tự quyết (cần người dùng xác nhận) và các thay đổi cần làm ở màn khác.

Từ v1.1, file RSD trong thư mục là bản nguồn và được sửa trực tiếp. Bộ sinh cũ (`rsd-src.md`, `expand-md.js`) đã xóa vì dựng ra khung 8 mục. Tên ảnh đồng bộ bằng `node wireframes-src/sync-md.js <RSD>.md`.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD01 · Danh sách Tour mẫu và KD02 · Hồ sơ Tour mẫu (KD02.1, KD02.2), viết mới từ danh sách màn (chưa có RSD); bàn giao MD + PNG trong ZIP theo `BOI-CANH-DU-AN.md` | Toàn bộ tài liệu |
| Q1 | Quyền | Mọi Kinh doanh xem, tạo, sửa, bật/tắt mọi Tour mẫu (danh mục dùng chung); Điều hành chỉ xem; Kế toán không có menu | 1.4, R01; L1.2; W08, W24; AC07, AC08 |
| Q2 | Điều kiện bật Cho phép sử dụng | Mới tạo mặc định Không cho phép. Chỉ bật khi có ít nhất 1 ngày và mọi ngày có nội dung lịch trình. Dịch vụ, NCC ngừng sử dụng chỉ cảnh báo, không chặn | 2.4, R02; L6.1, L6.2, E4.1; W05, W06, W20; AC22, AC23, AC32, AC33 |
| Q3 | Nghiệp vụ bổ sung | Chỉ thêm Giá vốn tham khảo ở KD02.2. Không làm: nhân bản Tour mẫu, xóa Tour mẫu, số lần dùng | L5.1, R07; W14; AC28–AC31. Không có nút Xóa, Nhân bản Tour mẫu |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Mã Tour mẫu `TM-NNN`**, chặn trùng tên sau khi chuẩn hóa (R03). Tên là thứ Kinh doanh nhìn khi chọn mẫu ở KD06.2 nên không để trùng.
2. **Trường thông tin chung:** Tên, Loại Tour (QT05), Điểm đến (chọn nhiều, danh mục địa điểm chung với NCC), Mô tả (hiện khi chọn mẫu ở KD06.2), Ghi chú nội bộ. Số ngày chỉ nhập khi tạo; sau đó là số ngày của lịch trình.
3. **Tạo mới: “Lưu và nhập lịch trình”** tạo sẵn n ngày trống và mở thẳng KD02.2 (gộp bước).
4. **Bố cục KD02.2:** danh sách ngày bên trái, một ngày bên phải; một nút Lưu lịch trình cho cả lịch trình. Menu ⋯ của ngày: Thêm ngày phía sau, Nhân bản ngày, Chuyển lên/xuống, Xóa ngày; kéo ⋮⋮ để sắp xếp. Xóa ngày, xóa dịch vụ không hỏi (chưa ghi tới khi lưu), có Hoàn tác.
5. **Ngày có Tiêu đề (không bắt buộc) và Nội dung lịch trình.** Không có trường bữa ăn riêng (bữa ăn là dịch vụ nhà hàng).
6. **Dòng dịch vụ có Cách tính số lượng** (Theo số khách, Theo số phòng, Cố định) thay cho một số cố định, để mẫu dùng được cho mọi cỡ đoàn; mặc định theo đơn vị tính (R05). Cách tính được sao chép sang KD06.2. Theo số phòng = làm tròn lên số khách ÷ 2 (phòng đôi), chỉ dùng cho giá tham khảo.
7. **Chọn dịch vụ bằng bảng trượt**, chọn nhiều dịch vụ và nhiều ngày một lần (khách sạn nhiều đêm). Lọc sẵn Địa điểm theo Điểm đến của Tour mẫu. Không cho trùng dịch vụ trong một ngày.
8. **Giá vốn tham khảo (R07):** ngày khởi hành + số khách người lớn; mỗi dòng phòng là một đêm của ngày đó; không tính trẻ em, phòng đơn, tỷ giá, Markup; giữ loại tiền gốc, tổng theo từng loại tiền; dòng thiếu giá và ngừng sử dụng không vào tổng, ghi “chưa gồm n dịch vụ”. Ngày và số khách nhớ theo người dùng và Tour mẫu; lần đầu hôm nay + 30 ngày, 10 khách. Làm tròn VND đến 1.000 ₫ khi chia theo khách.
9. **Số trên tab KD02.2** = ngày chưa có nội dung + dòng dịch vụ ngừng sử dụng. Thiếu giá không tính vì phụ thuộc ngày tham khảo.
10. **Mở Tour mẫu từ KD01** vào thẳng KD02.2 tại ngày đầu tiên có việc cần làm; không có thì Ngày 1.
11. **Dịch vụ ngừng sử dụng** trong mẫu: giữ dòng, nhãn vàng, không tính giá, có Đổi dịch vụ giữ số lượng và ghi chú (R06). Lưu lịch trình chặn dòng **mới thêm** nếu dịch vụ vừa bị ngừng (E4.4).
12. **Đang cho phép sử dụng thì không lưu được lịch trình có ngày trống nội dung** (R02, E4.1), để mẫu đang cho dùng luôn đủ nội dung.
13. **Bật, tắt không hộp thoại, có Hoàn tác 10 giây** (cùng cách DH06). Tắt không cần hỏi vì không đổi dữ liệu đã dùng.
14. **KD01 mặc định chip Tất cả**, sắp theo cập nhật mới nhất; lọc Loại Tour, Điểm đến, Số ngày (1–3, 4–6, 7–10, trên 10), Dịch vụ (Có dịch vụ ngừng sử dụng). Không có hàng loạt, không xuất Excel.
15. **Giới hạn:** 1–30 ngày; tên 3–150 ký tự; nội dung ngày 3.000 ký tự; ghi chú dòng 200 ký tự; số lượng cố định 1–999.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (KD01, KD02).** Ghi thêm: Điều hành xem; điều kiện bật; giá vốn tham khảo ở KD02.2; không xóa, không nhân bản Tour mẫu; KD01 lọc thêm Loại Tour, Điểm đến, dịch vụ ngừng sử dụng. Bỏ chữ “(đề xuất)” ở KD02.2 vì đã chốt theo RSD DH02, DH03.
- **RSD KD06 (KD06.2).** Chỉ liệt kê Tour mẫu Cho phép sử dụng, kiểm tra lại khi sao chép (E6.6); sao chép cả cách tính số lượng và ghi chú của dòng; dòng dịch vụ ngừng sử dụng sao chép kèm nhãn để đổi; lưu mã Tour mẫu nguồn để QT08 báo cáo cách tạo hành trình (R10).
- **QT05.** Danh mục Loại Tour (đã có từ RSD DH01) và danh mục địa điểm dùng thêm cho Tour mẫu. Đơn vị tính cần khai căn cứ mặc định (khách, phòng, đoàn/đơn vị) để KD02.2 điền cách tính số lượng.
- **QT02.** Quyền mặc định KD01, KD02: Kinh doanh đủ quyền; Điều hành chỉ xem; Kế toán không có.
- **RSD DH02, DH03.** Không cần sửa: R04, R05 của DH02 và R05, R13 của DH03 đã nêu Tour mẫu giữ dòng khi NCC, dịch vụ ngừng và không xóa dịch vụ đã dùng. DH03 nên cung cấp người và ngày tắt cho banner của KD02.2 (W21).

## Kiểm tra đã thực hiện

- `node wireframes-src/check-rsd.js RSD-KD01-KD02-Tour-mau-v1.0.md --final`: 48 tham chiếu ảnh, 24 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con của mục 3 có ngoại lệ mã E. Máy không có Python nên chưa chạy `check-rsd.py`.
- Đã xem trực quan sau lần chụp cuối: W01, W05, W06, W09, W10, W12, W14, W15, W16, W17, W18, W19, W20, W21, W22, W24. Đã sửa: thanh lưu lệch trái; danh sách ngày tràn che nút Thêm ngày; chân bảng trượt bị thanh lưu che; thông báo ngắn che nút Lưu; chế độ chỉ xem còn tay kéo.
- Chưa mở xem riêng W02, W03, W04, W07, W08, W11, W13, W23. Các ảnh này dựng từ cùng thành phần với ảnh đã xem.
- Số liệu đã đối chiếu:
  - chip: W01 9 + 3 = 12; W02 3 + 1 = 4; W06 10 + 2 = 12; W07 8 + 4 = 12;
  - TM-008 (08/12/2026, 12 khách): số dịch vụ theo ngày 2 + 2 + 3 + 3 + 5 + 3 + 2 + 1 = 21; Ngày 5: 2.600.000 + 1.300.000 + 4.200.000 + 16.800.000 = 24.900.000 ₫ ÷ 12 = 2.075.000 ₫; Ngày 6: 1.200.000 + 4.200.000 + 14.400.000 = 19.800.000 ₫ ÷ 12 = 1.650.000 ₫; Ngày 7 bị xóa: 14.400.000 + 4.200.000 = 18.600.000 ₫ ÷ 12 = 1.550.000 ₫, nên tổng 9.865.000 → 8.315.000 ₫ mỗi khách (W19); Ngày 4: 14.500.000 ÷ 12 ≈ 1.208.000 ₫;
  - TM-012 (11/12/2026, 10 khách): Ngày 1 = 3.500.000 + 14.000.000 = 17.500.000 ₫ ÷ 10 = 1.750.000 ₫; Ngày 2 (12/12) cùng giá; cả Tour 3.500.000 ₫ mỗi khách; 4 dịch vụ, Ngày 3, 4 trống (W05, W17);
  - 12/12/2026 là thứ Bảy; 08/12/2026 thứ Ba; 11/12/2026 thứ Sáu; 13/12 Chủ nhật; 15/12 thứ Ba.
- ZIP `rsd/KD01-KD02-RSD-v1.0.zip` (RSD, `wireframes/` gồm 24 PNG và `index.html`) đóng bằng `wireframes-src/zip.ps1` (đường dẫn dùng `/`). Đã giải nén thử và chạy lại `check-rsd --final`: mọi ảnh mở được.
- `BOI-CANH-DU-AN.md` đã bổ sung thuật ngữ Tour mẫu, Giá vốn tham khảo, nguồn dữ liệu và 3 nguyên tắc đã chốt; bản cũ ở `rsd/_backup-20261111-truoc-KD01-KD02/`.
- Giá và NCC lấy theo dữ liệu minh họa của RSD DH04: Deluxe Garden View 2.800.000 ₫ (Cao điểm, cuối tuần) và 2.400.000 ₫ (ngày thường); HDV tiếng Đức 1.300.000 ₫ (1–15 khách); Set menu Mỹ Sơn 350.000 ₫ (10–20 khách); Golden Lotus hết hợp đồng 30/09/2026; Đón tiễn Hải Vân 950.000 ₫ (HVT-2027, 10–14 khách); Xe 45 chỗ Hải Vân ngừng sử dụng; Ánh Dương Hotel NCC ngừng sử dụng. Hương Giang Hotel, Sơn Trà Limousine và xe Hội An – Mỹ Sơn của Hue Travel Car là dữ liệu minh họa mới.

## Cập nhật v1.2 (12/11/2026) · rà soát mâu thuẫn lần ba

Tệp mới `RSD-KD01-KD02-Tour-mau-v1.2.md`, đã xóa bản v1.1 (đổi tên bằng `mv`). Không thêm mã mới, không dựng lại hình (W10 không in câu báo E2.5).

- **R11, E2.5.** Theo RSD QT05 mục 1.5: Kinh doanh sửa Loại Tour, Điều hành sửa Địa điểm và Đơn vị tính. Câu báo E2.5 đổi thành “Chưa có loại Tour. Thêm loại Tour ở QT05.” kèm liên kết mở QT05 nhóm Loại Tour.
- **Mục 2.6.** Làm tròn theo số lẻ thập phân của loại tiền (RSD QT05 R11): VND, JPY 0; ngoại tệ khác 2. VND chia theo khách vẫn làm tròn 1.000 ₫.
- **R07.** Đã kiểm tra với quyết định người dùng 12/11/2026 về Thứ tự dòng giá: Tour mẫu không chọn hạng phòng, nên dẫn RSD DH04 R04 vẫn đúng (cùng hạng phòng lấy Thứ tự nhỏ nhất; khác hạng phòng lấy mức thấp nhất như DH04 khi chưa lọc). Ghi rõ vào bước 3 của R07.
- **Nguồn nghiệp vụ.** Dẫn DH02 v1.3, DH03 v1.4, DH04 v1.3 (thay v1.0), QT05 v1.2.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-KD01-KD02-Tour-mau-v1.2.md --final`: 24 tham chiếu ảnh, 24 mã W, không lỗi.
