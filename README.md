# Mini-Project: Ứng dụng tính lương nhân viên cơ bản

Ứng dụng JavaScript này là một mini-project nhỏ được xây dựng để thực hành các kiến thức cơ bản về ngôn ngữ, bao gồm: khai báo biến, các loại dữ liệu, hàm, toán tử, cấu trúc điều khiển và xử lý đầu vào từ người dùng.

---

### Chức năng chính

Chương trình thực hiện các tác vụ sau:

- **Thu thập dữ liệu:** Sử dụng hàm `prompt()` để yêu cầu người dùng nhập các thông tin sau:
  - Tên nhân viên (`name`)
  - Lương cơ bản (`baseSalary`)
  - Mức thưởng (`bonusRate`) (là một số thập phân từ 0 đến 1)
  - Số giờ làm thêm (`overtimeHours`)
- **Xác thực dữ liệu (Validation):**
  - Kiểm tra để đảm bảo tên nhân viên không được để trống.
  - Xác thực các giá trị lương, mức thưởng và giờ làm thêm phải là số.
  - Đảm bảo mức thưởng nằm trong khoảng hợp lệ từ 0 đến 1.
- **Tính toán:** Tính toán tổng lương thực nhận của nhân viên theo công thức:
  - `Tổng lương = Lương cơ bản + (Lương cơ bản * Mức thưởng) + (Số giờ làm thêm * 50000)`
- **Làm tròn:** Tổng lương được làm tròn đến số nguyên gần nhất (0 chữ số thập phân).
- **Hiển thị:** In ra một biên lai lương chi tiết, trình bày rõ ràng trên giao diện console.

---

### Cách sử dụng

1. Mở trình duyệt web của bạn (ví dụ: Chrome, Firefox).
2. Mở Developer Tools (Công cụ dành cho nhà phát triển) bằng cách nhấn `F12` hoặc `Ctrl+Shift+I` (trên Windows/Linux) hoặc `Cmd+Option+I` (trên macOS).
3. Vào tab **Console**.
4. Copy và dán toàn bộ mã nguồn vào Console và nhấn `Enter`.
5. Các hộp thoại `prompt` sẽ lần lượt xuất hiện để bạn nhập thông tin.
6. Sau khi hoàn tất, kết quả (biên lai lương) sẽ được in ra trên Console.

---

### Công nghệ sử dụng

- **JavaScript (ES6):** Ngôn ngữ chính để xây dựng ứng dụng.
- **Các hàm dựng sẵn của trình duyệt:** `prompt()`, `console.log()`.
- **Các hàm toán học:** `Math.round()`, `isNaN()`.
- **Template Literals:** Dùng để tạo chuỗi biên lai đa dòng một cách dễ dàng và rõ ràng.

---

### Thông tin liên hệ

Nếu có bất kỳ câu hỏi nào về dự án này, vui lòng liên hệ:

- **Họ và tên:** Võ Quang Dũng
- **Email:** vqd2k6@gmail.com