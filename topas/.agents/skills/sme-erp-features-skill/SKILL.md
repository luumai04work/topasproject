---
name: level1-feature-list
description: Trích xuất, cập nhật và rà soát danh sách tính năng phần mềm từ sơ đồ luồng nghiệp vụ Level 1 trong nhiều lĩnh vực. Dùng khi cần lập bảng tính năng có vai trò, loại, mô tả và mã bước, gộp trùng, đối chiếu Mermaid/tài liệu nghiệp vụ, kiểm tra danh sách có sẵn với luồng và xuất Markdown. Thích nghi theo thuật ngữ, vai trò, mã và phạm vi của từng dự án, không mặc định quy tắc chuyên ngành.
---

# Danh sách tính năng từ sơ đồ Level 1

## Mục tiêu

Tạo hoặc cập nhật bảng tính năng có căn cứ từ luồng nghiệp vụ, không trùng chức năng và đối chiếu được với bước nguồn. Tái sử dụng cho nhiều dự án/lĩnh vực: không mang vai trò, số tính năng, mã hay quy tắc của dự án trước sang dự án mới.

Mặc định xuất Markdown có liên kết tải về. Chỉ tạo thêm Excel/CSV khi có yêu cầu hoặc phải đồng bộ các file thuộc phạm vi cập nhật.

## Tài liệu đi kèm

Chỉ đọc khi file tồn tại trong thư mục skill; nếu không có thì dùng hướng dẫn trong file này, không báo lỗi thay người dùng.

- Đọc [cách thích nghi theo dự án](references/domain-adaptation.md) khi xác định nguồn, thuật ngữ và quy tắc.
- Đọc [mẫu đầu ra](references/output-template.md) khi xuất bảng hoặc gói tài liệu.
- Đọc [ví dụ nhiều lĩnh vực](references/examples.md) khi cần phân biệt gộp trùng với các chức năng khác nhau.

## 1. Xác định đầu vào và nguồn chuẩn

1. Đọc sơ đồ, bảng mô tả và danh sách tính năng người dùng cung cấp. Chuẩn hóa định dạng khi đọc nhưng không sửa ý nghĩa.
2. Xác định lĩnh vực, thuật ngữ, vai trò, phạm vi hệ thống, phiên bản và quy ước mã từ đầu vào hiện tại. Không suy đoán từ thư mục hoặc tên mã.
3. Ưu tiên nội dung người dùng xác nhận hoặc sửa mới nhất cho từng luồng. Không thay luồng vừa sửa bằng bản tự sinh cũ.
4. Nếu có danh sách tính năng đã chốt, dùng làm bản gốc. Không tự giảm số tính năng, gộp hoặc đánh lại mã ngoài phạm vi yêu cầu.
5. Xác định có được sửa luồng, thêm hỗ trợ, gộp tính năng hay đánh lại số hay không. Dùng chỉ dẫn đã có, không hỏi lại điều đã được xác nhận.
6. Nếu nguồn mâu thuẫn, xử lý phần có căn cứ và chỉ rõ phần chưa thống nhất. Chỉ hỏi khi thiếu thông tin cản trở kết quả; không tự đặt quy tắc nghiệp vụ để lấp chỗ trống.
7. Đọc đủ mọi phần của từng file luồng: phạm vi/quy ước, sơ đồ, bảng mô tả và **ghi chú nghiệp vụ**. Ghi chú thường chứa quyết định làm rõ điểm tưởng như chưa thống nhất (ví dụ dữ liệu dùng chung, không tạo sổ riêng); không liệt kê là "chưa thống nhất" điều nguồn đã trả lời, chỉ nêu phần còn thiếu.
8. Đọc toàn bộ nội dung file, không dựa vào output bị cắt. Nếu công cụ lược bớt nội dung, đọc lại phần bị lược trước khi kết luận.
9. Ghi nhận các tham chiếu chéo trong nguồn (tên file, số phiên bản bảng tính năng, mã phân hệ). Nếu lệch với tài liệu đang lập, nêu rõ file và dòng lệch.

## 2. Trích xuất cấu trúc luồng

Ghi nhận mỗi nút: luồng, mã bước, nhãn, vai trò, loại nút, dữ liệu đầu vào, kết quả và nhánh chuyển tiếp.

| Loại nút | Cách trích xuất |
| --- | --- |
| Thao tác người dùng | Nhập, cập nhật, cấu hình, xem, tìm kiếm, gửi, xuất hoặc hủy trên hệ thống có thể trở thành tính năng. |
| Xử lý tự động | Tính toán, sinh dữ liệu, gửi thông tin theo cấu hình là tính năng tự động hoặc phần tự động của thao tác kết hợp. |
| Điều kiện | Thường chỉ phân nhánh; không tạo tính năng riêng và không ghi vào cột Bước luồng. Liệt kê **tất cả** nút điều kiện trong danh sách "bước không tạo tính năng". Nếu nút điều kiện hàm ý thao tác thật (ví dụ "Đã có hồ sơ?" dựa trên tìm kiếm) và được gắn vào tính năng, ghi rõ là ngoại lệ kèm lý do. |
| Điểm đầu/cuối | Chỉ trích xuất nếu chính nội dung là chức năng, ví dụ mở danh sách. Điểm đầu kiểu "Mở X hiện có" cần màn hình chọn X; nếu chưa có tính năng danh sách X thì ghi đề xuất bổ sung. |
| Liên kết luồng | Dùng lại tính năng liên quan, không thêm dòng trùng chỉ vì điểm vào khác nhau. Chọn **một** quy ước gắn nút liên kết (mặc định: gắn vào tính năng tiếp nhận = tính năng chứa bước đầu tiên được mở ở luồng đích, xác định theo mô tả của nút) và áp cho mọi nút liên kết; ghi quy ước này trong phần quy ước của tài liệu. |
| Công việc ngoài hệ thống/chờ thuần túy | Không tính là chức năng phần mềm. Nếu có ghi nhận, nhắc việc hoặc hẹn lịch thực sự trên hệ thống, chỉ trích xuất phần đó theo nguồn. |
| Phê duyệt | Theo phạm vi dự án: bỏ nếu người dùng yêu cầu bỏ; giữ nếu là thao tác trên hệ thống thuộc phạm vi. Không áp quy tắc của dự án trước. |

Không suy luận rằng bước *mở chi tiết một đối tượng* đã bao gồm màn hình danh sách. Khi nguồn **có** bước mở/hiển thị danh sách đối tượng thì đặt tính năng theo quy ước *Quản lý danh sách* (mục 3 — Đặt tên); nếu chưa có danh sách thì ghi đề xuất bổ sung.

## 3. Chọn và gộp tính năng

- Gộp các thao tác cùng mục đích, cùng đối tượng dữ liệu và cùng bước nghiệp vụ đã gộp; giữ đầy đủ nội dung thành phần trong mô tả.
- Xử lý tự động thuộc cùng thao tác có thể nằm trong tính năng loại Kết hợp; không cần một dòng riêng cho mỗi xử lý kỹ thuật.
- Không gộp chỉ vì cùng vai trò, cùng màn hình hoặc tên gần giống nhau. Phân biệt danh mục với giao dịch, kế hoạch với thực tế và các đối tượng có kết quả nghiệp vụ riêng.
- Một hành vi dùng lại ở nhiều luồng được định nghĩa một lần và liệt kê tất cả bước liên quan.
- Nếu được yêu cầu gộp cả danh sách, không giữ các dòng thành phần có cùng phạm vi với dòng tổng hợp đã gộp.
- Nếu danh sách chi tiết đã chốt và chỉ cập nhật tham chiếu, giữ danh sách: một bước tổng hợp được phép bao phủ nhiều tính năng.
- Gộp theo ý nghĩa và dữ liệu, không chỉ so khớp tên.

### Đặt tên

- Dùng **Quản lý danh sách + đối tượng** cho mọi tính năng màn hình danh sách đối tượng, trừ khi dự án có chuẩn tên khác. Không dùng các tên lẻ như "Xem danh sách …", "Tìm kiếm, chọn và mở …".
  - Phạm vi chuẩn: xem danh sách, tìm kiếm, lọc, mở đối tượng và truy cập chức năng tạo mới/thao tác. Không gồm tạo, sửa, hủy — đó là tính năng riêng.
  - Áp dụng cả khi nguồn chỉ ghi "hiển thị danh sách"; ghi trong phần quy ước của tài liệu rằng tìm kiếm, lọc là chuẩn hóa của tài liệu, không phải của nguồn. Không tạo đề xuất bổ sung riêng cho tìm kiếm/lọc.
  - Bước chọn đối tượng hiện có trong luồng khác (ví dụ chọn khách hàng khi tạo yêu cầu) gắn vào tính năng Quản lý danh sách của đối tượng đó, không tạo tính năng tìm kiếm riêng.
  - Mô tả tính năng nêu rõ "tìm kiếm, lọc" và tiêu chí lọc đặc thù nếu nguồn có (ví dụ lọc khách hàng có Tour đã đóng).
  - Màn hình chủ yếu hiển thị số tổng hợp (đã thu, còn phải thu, đến hạn, quá hạn, tiến độ) dùng tên **Theo dõi …**, không đổi thành Quản lý danh sách.
- Dùng tên cụ thể như Tạo và cập nhật, Ghi nhận, Thiết lập, Theo dõi, Hủy theo hành vi.
- Không đổi mọi thao tác nhập/ghi nhận thành quản lý danh sách.
- Tên kết thúc/hủy/đóng phải đúng vòng đời của đối tượng; không mặc định mọi trường hợp dừng đều là hủy.
- Không tự thêm trạng thái vì thao tác lưu hoặc xử lý kỹ thuật. Không tự xóa các trạng thái chờ có ý nghĩa nghiệp vụ đã được nguồn xác định.

## 4. Vai trò và loại tính năng

Lấy vai trò từ sơ đồ hoặc tài liệu dự án. Không giới hạn số vai trò hay đặt sẵn tên. Nếu tác nhân chưa rõ quyền sử dụng, ghi nhận phần chưa xác định thay vì tự cấp quyền.

Nếu dự án chưa có hệ phân loại cột Loại, dùng mặc định:

| Loại | Ý nghĩa |
| --- | --- |
| Thao tác người dùng | Người dùng xem, tìm kiếm, nhập, sửa, cấu hình hoặc ghi nhận dữ liệu. |
| Xử lý tự động | Hệ thống thực hiện một xử lý độc lập đã được xác định trong luồng. |
| Kết hợp | Người dùng khởi tạo/cấu hình, hệ thống xử lý tự động trong cùng tính năng. |

Áp loại nhất quán cho các tính năng cùng dạng: ví dụ mọi tính năng ghi nhận giao dịch mà hệ thống tự cập nhật số dư/tổng hợp đều là Kết hợp, kể cả khi bảng mô tả của một luồng không nhắc lại phần tự động nhưng ghi chú nghiệp vụ xác định dữ liệu dùng chung.

Nếu người dùng có hệ phân loại khác, giữ quy ước đó. Không tự thêm vai trò người dùng Hệ thống hoặc AI. Với xử lý tự động, ghi bộ phận khởi tạo/sử dụng/phụ trách nếu nguồn xác định; nếu chưa có, ghi Chưa xác định. Phân biệt hệ thống ngoài/tác nhân kỹ thuật với vai trò người sử dụng.

## 5. Đối chiếu mã bước và mã tính năng

1. Giữ cấu trúc và mã bước người dùng đã chốt; không tự thay số bước để phù hợp một bảng tự sinh trước đó.
2. Mỗi tính năng phải có mã bước tồn tại hoặc được đánh dấu rõ là đề xuất bổ sung. Không bịa mã nguồn.
3. Mỗi thao tác trong phạm vi phải được bao phủ bởi tính năng chính/dùng chung. Điều kiện và điều hướng thuần túy không cần tính năng riêng.
4. Cho phép một tính năng gắn nhiều bước hoặc một bước tổng hợp gắn nhiều tính năng; mô tả rõ phạm vi để không hiểu nhầm là trùng.
5. Nếu chưa có mã, tạo quy tắc trung tính phù hợp, nêu rõ đây là mã mới được bổ sung. Không ép mọi dự án dùng một tiền tố chuyên ngành.
6. Khi được yêu cầu đánh lại số, đánh liên tục trong từng nhóm/luồng và sửa đồng thời sơ đồ, bảng mô tả, bảng tính năng, tham chiếu chéo.
7. Khi gộp/đổi mã cũ, có đối chiếu mã cũ → mã mới/tính năng tiếp nhận để kiểm tra không mất phạm vi.

## 6. Nhận diện luồng hỗ trợ

Dựa trên dữ liệu/cấu hình nghiệp vụ chính sử dụng để phát hiện danh mục, dữ liệu nền, mẫu hoặc tích hợp cần thiết. Không áp một danh sách module hỗ trợ cố định cho tất cả lĩnh vực.

- Có trong nguồn: trích xuất và đối chiếu như luồng chính.
- Chưa có và chưa thuộc phạm vi mở rộng: ghi Đề xuất bổ sung, nêu bước cần dữ liệu, không coi là yêu cầu đã xác nhận.
- Được yêu cầu bổ sung: tạo mỗi luồng một file gồm sơ đồ và bảng mô tả, giữ mức Level 1 và gộp thao tác cùng mục đích.
- Phân biệt cấu hình/mẫu dùng chung với việc sử dụng trên từng giao dịch.
- Dấu hiệu cần dữ liệu hỗ trợ: bước "hệ thống tự sinh/tự tạo" (cần mẫu hoặc quy tắc sinh mã), bước "tự động gửi" (cần mẫu nội dung), bước "theo cấu hình/tiêu chí" (cần màn hình cấu hình), bước chọn đối tượng hiện có mà chưa có danh sách đối tượng đó.
- Tên đề xuất phải khớp đúng các bước được liệt kê; nếu gộp nhiều loại đối tượng (ví dụ nhân viên nội bộ và nhân sự phục vụ) thì nêu đủ trong tên.
- Phân quyền, quản trị và tích hợp chỉ bổ sung khi thuộc phạm vi; không tự thêm theo thông lệ.
- Nếu danh sách chính đã chốt, có thể tách hỗ trợ riêng và báo rõ số chính/bổ sung, không tự thay tổng số đã chốt.

## 7. Xuất tài liệu

Mặc định có bảng:

**Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả**

Nhóm theo phân hệ. Nếu xuất bảng phẳng/Excel/CSV, thêm cột phân hệ. Mô tả phải đủ dữ liệu đầu vào, hành vi/xử lý tự động và kết quả; không bổ sung công thức, mức giá hoặc quy tắc chưa có nguồn.

Nếu có sơ đồ trong phạm vi:

- Mỗi luồng một file Markdown có Mermaid, bảng mô tả và mã tính năng liên quan.
- Bảng mô tả gồm mã bước, vai trò, nội dung, mô tả, tính năng và chuyển tiếp.
- Đóng gói ZIP kèm README giải thích nguồn chuẩn, giả định và phiên bản khi có nhiều file.
- Khi chỉ yêu cầu lập bảng, không tự vẽ lại các sơ đồ đã chốt.
- Tạo tên file phân biệt phiên bản và liên kết tải file thực tế; không chỉ đưa đường dẫn văn bản khi người dùng cần tải về.
- Không suy đoán lỗi cache hoặc tuyên bố đã cài đặt, đăng ký hay kích hoạt skill/tài liệu khi chưa thực hiện.

## 8. Kiểm tra trước khi giao

- Đếm dòng tính năng thực tế, không đếm tiêu đề hoặc dòng bảng đối chiếu.
- Mã tính năng duy nhất; mã bước có thật; tham chiếu không trỏ nhầm chức năng sau đổi số.
- Đối chiếu hai chiều: thao tác có tính năng, tính năng có nguồn; đề xuất và phần chưa rõ tách riêng.
- Nội dung đã gộp không còn liệt kê trùng, vẫn giữ đầy đủ yêu cầu.
- Vai trò, loại, vòng đời và xử lý phê duyệt đúng phạm vi dự án hiện tại.
- Không mang tên module, vai trò, số bước, số tính năng hoặc quy tắc giá/trạng thái từ dự án cũ.
- Nội dung giữa các định dạng khớp; ZIP chứa đúng bản mới nhất.
- Khi tìm dòng Markdown theo mã, khớp mã ở đầu dòng; tránh đếm nhầm mã trong cột chuyển tiếp.
- Kiểm tra bao phủ bằng script, không chỉ đọc mắt: lấy mọi mã bước trong sơ đồ nguồn (ví dụ `grep -ohE '\[[A-Z]+[0-9]+\.[0-9]+\]'`), so với tập mã trong cột Bước luồng cộng danh sách bước không tạo tính năng. Báo bước bị thiếu và bước gắn nhiều tính năng; chỉ chấp nhận gắn nhiều khi có chủ đích (bước tổng hợp, xử lý tự động dùng chung) và mô tả nêu rõ.
- Tài liệu tự tuân thủ quy ước của chính nó: với từng quy ước ghi trong phần đầu (nút điều kiện, nút liên kết, loại, vai trò), duyệt mọi dòng liên quan và sửa dòng vi phạm hoặc sửa câu quy ước.
- Tên tính năng danh sách thống nhất: mọi tính năng danh sách đối tượng dùng "Quản lý danh sách …"; không còn dòng "Xem danh sách …" hoặc đề xuất bổ sung chỉ để thêm tìm kiếm/lọc.
- Phát hiện cùng một dữ liệu được nhập ở nhiều bước/vai trò (ví dụ chi phí thực tế do hai bộ phận nhập) và ghi vào điểm chưa thống nhất: dùng lại số liệu hay nhập lại.
- Mô tả tính năng, câu ghi chú ngoài bảng và danh sách điểm chưa thống nhất phải cập nhật theo mọi thay đổi gắn bước; xóa câu trùng với cột Bước luồng.

## 9. Rà soát danh sách có sẵn

Khi người dùng nhờ kiểm tra danh sách tính năng đã lập:

1. Đọc toàn bộ file luồng nguồn (mục 1) và danh sách hiện có; không sửa file khi chưa được yêu cầu.
2. Lập bảng đối chiếu nội bộ: mỗi bước nguồn → tính năng/danh sách điều kiện; mỗi tính năng → bước nguồn. Chạy kiểm tra bao phủ ở mục 8.
3. Phân loại phát hiện theo mức: **lỗi cần sửa** (vi phạm quy ước, thiếu/sai bước, sai vai trò), **điểm chưa thống nhất nguồn đã trả lời/chưa trả lời**, **đề xuất bổ sung và sửa nhỏ**.
4. Với mỗi lỗi, ghi mã bước, giá trị hiện tại và giá trị đề xuất (dùng bảng khi có nhiều dòng cùng dạng); nêu đề xuất có làm đổi tổng số tính năng hay không.
5. Khi được yêu cầu sửa: sửa đúng phạm vi đã đề xuất, chạy lại kiểm tra bao phủ, báo kết quả kiểm tra và các file nguồn liên quan chưa sửa.

Trả kết quả ngắn gọn với thay đổi thực tế, số lượng đã kiểm tra và liên kết tải file. Không hứa xử lý tiếp thay cho hoàn thành phạm vi được yêu cầu.
