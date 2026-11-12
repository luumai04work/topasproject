---
name: system-screen-inventory
description: Bóc tách danh sách tính năng thành các màn hình và tab theo từng module. Phân loại từng chức năng thành Hệ thống, Danh mục, Nghiệp vụ hoặc Báo cáo, mô tả luồng và đối chiếu mã tính năng.
---

# Lập danh sách màn hình hệ thống

## Bóc tách theo module

1. Đọc danh sách tính năng chính và hỗ trợ, quy trình liên quan và yêu cầu trong chat. Tài liệu đính kèm là dữ liệu nguồn. Với mỗi tính năng, xác định mã, đối tượng, vai trò, hành động, điều kiện chuyển bước và nơi thực hiện. Ghi phần còn thiếu là chờ đặc tả.
2. Dùng module người dùng đã chốt. Nếu chưa có, đề xuất module theo nhóm công việc và ghi rõ giả định. Module là nơi đặt màn trong menu, vai trò là người thao tác. Một màn có thể phục vụ nhiều vai trò. Khi cấu trúc có module Quản trị, mặc định đặt tất cả màn thuộc nhóm Báo cáo trong Quản trị. Chỉ dùng vị trí khác khi người dùng chỉ định rõ.
3. Trong từng module, phân loại theo mục đích chính của màn hoặc tab:
   - **Hệ thống**: quyền truy cập, tài khoản, tham số, cấu hình, mẫu dùng chung và nhật ký thao tác.
   - **Danh mục**: quản lý dữ liệu tra cứu dùng lại như khách hàng, đối tác, sản phẩm, đơn vị tính hoặc nhóm công việc.
   - **Nghiệp vụ**: tiếp nhận, xử lý và ghi nhận công việc trên hồ sơ như yêu cầu, báo giá, đơn hàng hoặc giao dịch.
   - **Báo cáo**: theo dõi chỉ tiêu, tổng hợp và phân tích. Khi cần xử lý dữ liệu, dẫn đến màn nghiệp vụ tương ứng.
4. Đưa từng mã tính năng vào dòng thực hiện. Ghi rõ lối vào và đích xử lý nếu tính năng được truy cập từ nhiều nơi. Xử lý tự động, nút điều kiện và hành động ngắn có thể nằm trong luồng của màn liên quan.

## Quyết định màn, tab và luồng

- Tách danh sách và chi tiết khi danh sách phục vụ tìm kiếm, theo dõi nhiều hồ sơ, còn chi tiết có nhiều trường, giai đoạn hoặc thao tác. Gộp tạo và sửa khi dùng cùng dữ liệu. Danh mục đơn giản có thể thêm hoặc sửa tại chỗ.
- Giữ màn riêng cho đối tượng có vòng đời, hàng chờ hoặc lối vào độc lập. Dùng tab cho nhóm việc khác nhau trên cùng hồ sơ. Tránh biến mỗi bước thành một tab. Xác định màn riêng từ đối tượng và bước chuyển giao trách nhiệm trong nguồn.
- Dùng một nơi ghi nhận cho cùng dữ liệu. Ví dụ, Hồ sơ đơn hàng có thể hiển thị số dư và mở màn Phải thu với đơn hàng đã lọc. Kế toán ghi giao dịch tại màn Phải thu. Báo cáo đọc cùng dữ liệu và dẫn về đúng hồ sơ. Tách nhật ký vận hành nghiệp vụ khỏi nhật ký thao tác người dùng.
- Trong cột Danh mục, ghi giá trị tra cứu, mẫu hoặc hồ sơ nguồn thực sự được dùng. Chỉ rõ nơi quản lý dữ liệu dùng chung nếu thuộc phạm vi. Giữ cách gọi nhất quán. Dùng lối mở theo ngữ cảnh, điền sẵn và giữ bộ lọc để giảm thao tác.
- Đưa vào các màn cần để thực hiện tính năng trong nguồn, các bổ sung đã được yêu cầu và các báo cáo đề xuất phù hợp với phạm vi. Đánh dấu bổ sung ngoài phạm vi mã nguồn. Một quy tắc chưa đặc tả, như cấu trúc mã hồ sơ, được ghi tại bước sử dụng thay vì tự tạo màn cấu hình.
- Khi người dùng gửi bản màn hình cần cập nhật, giữ các quyết định và mã hiện có ở phần không bị tác động. Nếu họ gửi bản sinh ra bị lỗi, xem đó là dữ liệu để chẩn đoán và sửa theo yêu cầu, nguồn và các quyết định đã xác nhận.

### Xử lý hạng mục tại hồ sơ cha

Khi hạng mục được tạo và xử lý trong ngữ cảnh một hồ sơ cha, mặc định đặt danh sách hạng mục, thao tác và lịch sử trong **một tab hoặc khu vực của hồ sơ cha**. Tìm hoặc lọc trong tab. Chọn dòng để xem chi tiết, thực hiện thao tác và cập nhật kết quả qua bảng trượt hoặc hộp thoại. Sau khi lưu, giữ nguyên dòng, bộ lọc và vị trí đang xem. Bảng trượt hoặc hộp thoại được mô tả trong luồng của tab.

Ví dụ áp dụng cho lữ hành: trong **Hồ sơ Tour**, dùng một tab **Đặt dịch vụ** để lọc hạng mục theo việc cần làm, chọn NCC, rà và gửi yêu cầu, đặt lại, điều chỉnh hoặc hủy, ghi phản hồi và xem lịch sử từng lần đặt. Mã tính năng đặt dịch vụ được ghi ngay ở dòng tab. Dùng chung dữ liệu và thao tác này nếu cần mở từ nơi khác.

Chỉ đề xuất màn danh sách độc lập nếu nguồn hoặc người dùng yêu cầu công việc xuyên nhiều hồ sơ, chẳng hạn hàng chờ xử lý theo hạn hoặc theo người phụ trách. Danh sách đó mở thẳng đúng hồ sơ, tab và hạng mục đang chọn. Chỉ đề xuất màn chi tiết độc lập khi hạng mục có vòng đời hoặc biểu mẫu cần làm việc độc lập với hồ sơ cha. Việc hạng mục có lịch sử riêng, có nhiều nút thao tác hoặc có mã tính năng riêng chưa đủ để tách màn. Nếu đề xuất tách, nêu cụ thể nhóm người dùng, công việc và lý do cần lối vào đó.

## Giữ các quyết định của từng dự án

- Nếu người dùng đã chốt module, màn/tab, danh mục, báo cáo, quyền thao tác hoặc quy tắc đặt mã, dùng các quyết định đó cho lần chạy hiện tại. Có thể lấy từ chat hoặc bản đã được xác nhận và cung cấp cho lần chạy. Khi có bản sinh lỗi, đối chiếu với yêu cầu và nguồn để phát hiện chênh lệch. Khi có thay đổi mới, áp dụng vào phần bị tác động.
- Trước khi viết bảng, lập đối chiếu tạm theo từng module và nhóm. Ghi tính năng từ nguồn, phần bổ sung được yêu cầu, nơi thực hiện, lối vào và dữ liệu được dùng chung. Dùng đối chiếu này để phát hiện phạm vi bị bỏ sót. Chỉ giao bảng màn và các phần người dùng cần.
- Với mỗi màn hoặc tab, xác định ai dùng nó và để làm gì. Nếu hai dòng cùng vai trò, dữ liệu và thao tác, chọn một nơi thực hiện và mô tả lối vào còn lại. Nếu thao tác khác nhau trên cùng dữ liệu, xác định ranh giới. Ví dụ, báo cáo xem kết quả tổng hợp, còn màn nghiệp vụ ghi hoặc điều chỉnh giao dịch.
- Phân biệt phạm vi sản phẩm với phạm vi tài liệu tính năng. Khi người dùng yêu cầu thêm báo cáo, cấu hình hoặc chức năng quản trị ngoài nguồn, ghi chúng vào đúng module và đánh dấu bổ sung. Báo cáo suy ra phải có câu hỏi quản lý và dữ liệu nguồn cụ thể. Thiếu một quy tắc xử lý thì ghi tại luồng cần quy tắc và nêu phần chờ đặc tả.
- Rà lại theo ba lớp. **Phạm vi** gồm đủ chức năng từ nguồn, phần bổ sung đã chốt và bước rà đủ bốn nhóm. **Cấu trúc** có đúng module, nhóm, màn cha, tab và lối vào. Thử đi qua thao tác thường gặp từ hồ sơ cha và kiểm tra từng lần chuyển màn. Gộp các bước trên cùng hạng mục vào một nơi nếu không có nhu cầu làm việc độc lập. **Nghiệp vụ** có nơi ghi nhận duy nhất cho cùng thao tác, dữ liệu tra cứu có chủ sở hữu và vòng đời có điều kiện chuyển bước. Bảng hợp lệ về Markdown chưa thay thế được ba bước đối chiếu này.

## Rà các nhóm còn lại trước khi chốt danh sách

Khi lập danh sách cho toàn hệ thống, rà **Danh mục**, **Hệ thống** và **Nghiệp vụ** cùng với **Báo cáo**. Giữ mọi mục người dùng đã chốt, kể cả ngoài danh sách mã nguồn. Các gợi ý ngoài nguồn phải được đánh dấu là đề xuất. Khi người dùng giới hạn phạm vi, dùng đúng giới hạn đó.

- **Danh mục.** Với mỗi danh mục dùng trong bảng, xác định nơi cập nhật và người có quyền. Nếu chưa có nơi cập nhật, xác định dữ liệu do hệ thống khác cung cấp, là giá trị cố định hay cần người dùng quản lý. Với các bộ giá trị tra cứu nhỏ có cách quản lý tương tự, ưu tiên đề xuất một màn Danh mục dùng chung. Danh mục nghiệp vụ lớn vẫn đặt theo module quản lý dữ liệu.
- **Hệ thống.** Rà các nhu cầu có căn cứ từ nguồn: có tài khoản và quyền truy cập thì rà người dùng, vai trò và phân quyền; có thao tác cần truy vết thì rà nhật ký người dùng; có tham số dùng chung và được thay đổi thì rà cấu hình tham số. Ghi rõ chức năng, người quản lý và căn cứ đề xuất. Với tham số chưa được định nghĩa, ghi tại bước nghiệp vụ đang cần nó và đánh dấu chờ đặc tả. Gom thiết lập mẫu và tìm/chọn mẫu ở cùng màn nếu có thể xử lý tại chỗ. Cấu hình tái sử dụng thuộc nhóm Hệ thống, còn lần sử dụng cấu hình trên hồ sơ thuộc nhóm Nghiệp vụ. Đặt màn trong module chịu trách nhiệm theo cấu trúc người dùng yêu cầu.
- **Nghiệp vụ.** Phân biệt hồ sơ có kết quả, phiên bản hoặc vòng đời riêng với hạng mục chỉ được xử lý trong hồ sơ cha. Ví dụ, nhu cầu khách hàng và bộ báo giá có phiên bản có thể là hai màn liên kết. Các bước lập, tính, lưu, xuất và ghi kết quả của cùng bộ báo giá nên ở cùng nơi. Các hành động trên hạng mục con nằm trong hồ sơ cha theo quy tắc ở trên. Rà vai trò ở từng bước và kiểm tra nơi sở hữu hồ sơ trước khi chuyển một tab sang module khác chỉ vì một vai trò khác thực hiện ở tab đó.
- **Dữ liệu tài chính và quyết toán.** Nếu một sổ dùng chung phục vụ nhiều bộ lọc và cùng nhóm người thao tác, ưu tiên một màn với các tab theo loại công việc. Lối mở từ hồ sơ hoặc báo cáo đưa người dùng đến đúng bản ghi. Nếu quyết toán là bước kết thúc một hồ sơ, đặt nó trong hồ sơ đó và cấp quyền theo thao tác. Giữ số liệu dự kiến, phát sinh khi đang thực hiện và số liệu thực tế dùng cho quyết toán ở đúng bước. Chỉ tách hàng chờ hoặc màn quyết toán riêng khi có nhu cầu độc lập đã xác định.
- **Kiểm tra thao tác và trạng thái.** Đi qua luồng chính và các nhánh điều chỉnh, từ chối, hủy hoặc mở lại đã được nguồn hỗ trợ. Kiểm tra chức năng bắt đầu và kết thúc ở đâu, trạng thái chờ phản hồi hiện ở đâu và lịch sử được giữ thế nào. Tách việc cần làm của hạng mục khỏi kết quả từng lần xử lý. Ghi rõ điều kiện lưu phiên bản và thời điểm thay đổi trạng thái. Các hành vi chưa có quy tắc cần được ghi là đề xuất hoặc chờ đặc tả.

## Rà báo cáo trước khi chốt danh sách màn

Khi lập danh sách màn hình cho toàn hệ thống, thực hiện bước rà báo cáo ngay cả khi nguồn tập trung vào thao tác nghiệp vụ. Nếu người dùng yêu cầu chỉ bám mã nguồn, giữ báo cáo có trong nguồn và các báo cáo đã được yêu cầu rõ.

1. **Thu thập báo cáo đã xác định.** Đọc cả tên báo cáo được yêu cầu trong chat và các tính năng mô tả xem số liệu, thống kê hoặc phân tích trong nguồn. Giữ báo cáo đã được chốt và loại báo cáo người dùng đã bỏ. Khi có module Quản trị, đưa mọi dòng nhóm Báo cáo vào bảng của module Quản trị, kể cả báo cáo lấy dữ liệu từ Kinh doanh, Điều hành hoặc Kế toán. Cột Vai trò vẫn ghi người được xem. Chỉ đặt ở module khác nếu người dùng yêu cầu rõ hoặc dự án không có module Quản trị. Giữ các chỉ báo phục vụ thao tác trực tiếp trong màn nghiệp vụ tương ứng.
2. **Suy ra nhu cầu báo cáo từ dữ liệu đã ghi.** Duyệt từng luồng chính và tìm điểm ra quyết định cần nhìn qua nhiều hồ sơ hoặc nhiều kỳ. Bảng dưới là gợi ý rà soát, chọn theo dữ liệu và câu hỏi quản lý của dự án.
   
   | Dữ liệu có trong nguồn | Câu hỏi và báo cáo ứng viên |
   |---|---|
   | Giá trị đã chốt, doanh thu ghi nhận, khoản thu | Kết quả theo kỳ hoặc nhóm đối tượng. Báo cáo doanh thu, tách giá trị đã chốt, doanh thu ghi nhận và tiền thực thu nếu nguồn có các số liệu này. |
   | Hồ sơ liên kết qua các bước như yêu cầu, báo giá, đơn hàng | Hồ sơ chuyển qua từng bước với tỷ lệ bao nhiêu. Báo cáo tỷ lệ chuyển đổi theo cùng tập hồ sơ, tránh đếm nhiều phiên bản thành nhiều hồ sơ. |
   | Doanh thu, chi phí thực tế, điều chỉnh và quyết toán | Hồ sơ hoặc nhóm hồ sơ nào lãi hoặc lỗ. Báo cáo P&L đọc kết quả quyết toán đã lưu. |
   | Nghĩa vụ, hạn thanh toán và giao dịch | Khoản phải thu, phải trả, cần hoàn và quá hạn theo đối tượng hoặc kỳ. Báo cáo công nợ đọc cùng sổ với các màn ghi giao dịch. |
   | Phân công hoặc lần thực hiện có người/đối tác phụ trách và kết quả | Sản lượng, tỷ lệ hoàn thành, xác nhận, hủy hoặc sự cố theo người/đối tác. Báo cáo hiệu suất chỉ dùng chỉ tiêu có dữ liệu liên kết. |
   | Khảo sát, chiến dịch và kết quả gửi hoặc phản hồi | Mức độ phản hồi và kết quả theo kỳ hoặc chiến dịch. Báo cáo hiệu quả khảo sát/chiến dịch. |

3. **Chọn màn hoặc nhóm báo cáo.** Giữ ứng viên có câu hỏi quản lý rõ và dữ liệu nguồn đủ, hoặc là báo cáo người dùng đã yêu cầu. Gộp chỉ tiêu có cùng đối tượng, người xem và bộ lọc. Tách khi câu hỏi, dữ liệu hoặc cách phân tích khác nhau. Số dư hoặc trạng thái dùng để thao tác trên một hồ sơ vẫn ở màn nghiệp vụ. Báo cáo tổng hợp theo nhiều hồ sơ là một lối xem riêng và mở đúng hồ sơ để đối chiếu.
4. **Đưa báo cáo vào bảng chính.** Ghi nhóm **Báo cáo**, vai trò xem, dữ liệu nguồn, bộ lọc, kết quả chính và lối mở chi tiết. Báo cáo có mã nguồn dùng đúng mã. Báo cáo đã được yêu cầu ngoài nguồn ghi “Bổ sung ngoài Level 1”. Báo cáo suy ra ghi “Đề xuất báo cáo, ngoài Level 1” để phân biệt với phạm vi đã chốt. Công thức, mốc thời gian, quyền xem hoặc dữ liệu chưa có thì ghi rõ phần chờ đặc tả. Không tự thêm nghiệp vụ thu thập dữ liệu chỉ để tạo báo cáo suy ra.
5. **Kiểm tra phủ báo cáo.** Đối chiếu các báo cáo đã chốt với dòng trong bảng. Nếu dùng cấu trúc có Quản trị và người dùng không chỉ định ngoại lệ, xác nhận mọi dòng nhóm Báo cáo thuộc Quản trị và không tạo module Báo cáo riêng. Rà lại các luồng có dữ liệu tổng hợp nhưng chưa có báo cáo. Nếu bỏ một ứng viên vì đã gộp, thiếu dữ liệu hoặc ngoài phạm vi, xử lý trong đối chiếu tạm. Chỉ đưa các báo cáo được chọn vào tài liệu giao.

## Kiểm tra từng thao tác và điểm chuyển hồ sơ

- **Đối chiếu từng thao tác với luồng nguồn.** Với tính năng có nhiều bước, ghi riêng điều kiện, vai trò, thao tác, dữ liệu được ghi và kết quả của từng bước. Kiểm tra cả nhánh phát sinh, điều chỉnh, hoàn và giao dịch thực tế khi nguồn có. Ví dụ, ghi khoản cần hoàn là cập nhật nghĩa vụ, còn ghi tiền đã hoàn là ghi giao dịch thực tế sau khi có chứng từ hoặc xác nhận theo nguồn. Nếu hai bước thuộc cùng màn, ghi cả hai trong luồng. Nếu chỉ có một bước được đặc tả, đánh dấu phần còn lại là chờ đặc tả hoặc đề xuất.
- **Ghi quyền theo thao tác trên màn dùng chung.** Cột Vai trò liệt kê người dùng màn, còn cột Luồng thao tác ghi rõ vai trò được xem, tạo, sửa, gửi, xác nhận, hủy, ghi giao dịch hoặc đóng hồ sơ ở những bước thực sự có. Ghi điều kiện của thao tác khi phụ thuộc trạng thái hoặc dữ liệu. Quyền xem hồ sơ và quyền thực hiện thao tác cần được kiểm tra riêng.
- **Kiểm tra đích trước khi mô tả lối vào.** Xác định hồ sơ đích được tạo ở bước nào, liên kết bằng mã nào và đã tồn tại vào thời điểm mở hay chưa. Nếu đã có, mở đúng bản ghi với ngữ cảnh điền sẵn. Nếu chưa có, mô tả tạo mới khi người dùng có quyền và đủ điều kiện, hoặc hiển thị trạng thái chưa có hồ sơ và hướng xử lý phù hợp. Phân biệt nút tạo đích với nút mở đích đã có. Đánh dấu hành vi chờ đặc tả khi nguồn chưa quy định.
- **Nêu dữ liệu kế thừa khi chuyển bước.** Ghi dữ liệu lấy từ hồ sơ hoặc phiên bản nào, dữ liệu nào là tham chiếu đã chốt và dữ liệu nào do bước sau xác nhận. Ví dụ, khi bóc tách hạng mục từ đơn hàng, có thể kế thừa đối tác và chi phí tham chiếu từ phiên bản báo giá đã chốt. Người thực hiện xác nhận hoặc đổi đối tác trước khi gửi yêu cầu. Kết quả và chi phí thực tế được lưu theo lần thực hiện. Nếu nguồn chưa quy định kế thừa hoặc điền sẵn, đánh dấu đây là đề xuất.
- **Chỉ rõ nơi rà và gửi nội dung soạn sẵn.** Nêu sự kiện kích hoạt, điều kiện đủ dữ liệu, nguồn người nhận và mẫu nội dung. Mô tả nơi hiển thị bản nháp, ví dụ bảng trượt của đúng dòng hạng mục. Ghi ai có quyền sửa hoặc gửi, hệ thống lưu gì sau khi gửi và mở lại lịch sử ở đâu. Nếu chưa chốt vị trí giao diện, ghi rõ phương án đề xuất.

## Định dạng Markdown mặc định

Mỗi module có một tiêu đề cấp hai `## Module <tên>` và một bảng cùng cấu trúc. Cột **Nhóm** ghi một trong bốn loại Hệ thống, Danh mục, Nghiệp vụ, Báo cáo. Các tab nằm ngay dưới màn cha và có mã con. Nếu tab có mục đích khác màn cha, phân loại theo thao tác của tab. Đếm riêng số màn độc lập và số tab.

## Module Hỗ trợ khách hàng

| Nhóm | Màn / Tab | Vai trò | Danh mục | Luồng thao tác | Tính năng |
|---|---|---|---|---|---|
| Nghiệp vụ | Màn NV01 · Hồ sơ yêu cầu hỗ trợ | Nhân viên hỗ trợ | Nhóm phụ trách | Mở yêu cầu. Chọn tab theo công việc. | Xem từng tab |
| Nghiệp vụ | Tab NV01.1 · Phân công | Nhân viên hỗ trợ | Nhóm phụ trách, nhân sự | Chọn nhóm và người xử lý. Lưu phân công. | TN01.02 |

Ví dụ trên chỉ minh họa định dạng. Dùng mã từ nguồn và cách đánh số phù hợp với dự án. Viết luồng bằng câu ngắn. Không dùng ký hiệu mũi tên. Ghi mã trong cột Tính năng, không tạo bảng đối chiếu riêng. Không thêm bảng thuật ngữ hoặc mục liệt kê các màn đã loại.

## Vòng đời trạng thái

Sau các module, thêm bảng **Đối tượng**, **Trạng thái hoặc dấu mốc**, **Điều kiện và thao tác**, **Màn xử lý** nếu các đối tượng có chuyển bước nghiệp vụ. Ghi điều kiện vào và ra, tác động khi hủy hoặc khi có phản hồi không thành công. Đánh dấu nhãn đề xuất và phân biệt trạng thái với chỉ báo tính từ dữ liệu.

Khi một hạng mục có nhiều lần thực hiện hoặc trao đổi với bên ngoài, tách trạng thái của hạng mục khỏi kết quả của từng lần. Ví dụ, hạng mục có thể cần xử lý lại trong khi lần trước đã bị từ chối. Giữ lịch sử và nêu điều kiện tạo lần mới.

## Kiểm tra trước khi giao

- Đối chiếu mã tính năng chính và hỗ trợ trong phạm vi với cột Tính năng. Kiểm tra mã màn không trùng, tab thuộc đúng màn và lối vào trỏ đúng nơi xử lý. Rà từng bước nghĩa vụ và giao dịch, quyền theo thao tác, thời điểm tồn tại của hồ sơ đích và dữ liệu được kế thừa khi chuyển bước. Khi đổi mã, cập nhật mọi tham chiếu.
- Kiểm tra từng module có bảng riêng, mỗi dòng có nhóm hợp lệ và tiêu đề, dòng phân cách, dữ liệu có cùng số ô. Với Markdown mặc định, chạy `python <thư-mục-skill>/scripts/check-markdown.py FILE.md`. Script kiểm tra cấu trúc, còn mã nguồn và tính đúng của luồng cần đối chiếu riêng.
- Báo số màn và tab, các quyết định ảnh hưởng đến thiết kế và phần chờ đặc tả.