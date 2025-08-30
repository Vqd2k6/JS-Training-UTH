# Week 03 - JS_Advanced_1

### Giới thiệu chung
Đây là tập hợp các bài tập thực hành về các khái niệm JavaScript nâng cao, bao gồm 8 bài tập nhỏ và một dự án mini về quản lý giỏ hàng. Mã nguồn được viết trong file `exercise.js` và có thể chạy trực tiếp trên môi trường Node.js hoặc trình duyệt web.

### Cách chạy chương trình
Để chạy các bài tập này, bạn có thể sử dụng Node.js hoặc trình duyệt web với các bước sau:

**Cách 1: Sử dụng Node.js**
1.  Mở Terminal hoặc Command Prompt.
2.  Di chuyển đến thư mục chứa file `exercise.js`.
3.  Chạy lệnh: `node exercise.js`
4.  Kết quả sẽ được in ra trên Terminal.

**Cách 2: Sử dụng Trình duyệt**
1.  Mở file `exercise.js` trong trình duyệt web của bạn.
2.  Mở **Bảng điều khiển (Console)** của trình duyệt (thường là F12 hoặc Ctrl+Shift+I).
3.  Kết quả của các hàm `console.log()` sẽ được hiển thị ở đây.

### Nội dung các bài tập

#### 1. Bài tập (8 bài)
Các bài tập sử dụng các phương thức và khái niệm JavaScript nâng cao:
-   **Bài 1**: Lọc và tạo mảng tên người dùng từ 18 tuổi trở lên bằng `filter` và `map`.
-   **Bài 2**: Dùng `reduce` để tính tổng tiền và tổng số lượng sản phẩm trong giỏ hàng.
-   **Bài 3**: Sử dụng `closure` để tạo một hàm đếm (counter) có chức năng `next()` và `reset()`.
-   **Bài 4**: Sắp xếp một mảng các đối tượng sản phẩm theo giá và tên bằng hàm `sort()`.
-   **Bài 5**: Chuyển đổi giữa định dạng mảng key-value và object bằng `Object.fromEntries()` và `Object.entries()`.
-   **Bài 6**: Viết hàm `groupBy()` để nhóm các phần tử trong một mảng thành một object dựa trên một thuộc tính nhất định.
-   **Bài 7**: Sử dụng `bind()` để cố định giá trị của `this` cho một method trong object.
-   **Bài 8**: Chuyển đổi object thành chuỗi JSON và phân tích lại, sau đó kiểm tra sự khác biệt giữa hai object.

#### 2. Dự án Mini - Quản lý Giỏ hàng
-   **Chức năng**: Xây dựng một module quản lý giỏ hàng với các chức năng chính:
    -   Thêm sản phẩm.
    -   Xóa sản phẩm.
    -   Cập nhật số lượng sản phẩm.
    -   Tính tổng tiền (có áp dụng mã giảm giá).
-   **Kiểm tra (Test Cases)**: Cuối file mã nguồn có các test case được viết sẵn để chứng minh các chức năng hoạt động đúng.

### Tác giả
-   Võ Quang Dũng 
-   vqd2k6@gmail.com