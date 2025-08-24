//  TRANG NÀY ĐỂ NHÁP 


/*
Bài toán 1: Mức độ cơ bản
Bạn có một mảng chứa tên các thành phố. Hãy dùng forEach() để in ra màn hình
một câu chào cho mỗi thành phố.

Yêu cầu:

Tạo một mảng cities chứa 3-4 tên thành phố bất kỳ.

Sử dụng phương thức forEach() để duyệt qua mảng này.

Với mỗi phần tử, in ra console một câu có dạng: "Chào mừng đến với [tên thành phố]!" */

// const cities = ["Bình Định", "Hoài Ân", "Ân Tường Tây"];
// cities.forEach(function myfunction(namecity, index) {
//     console.log(`${index + 1}. Chào mừng đến với ${namecity}`);
// })

// console.log("======================================")


// ===========================================================

/*
Bài toán 2: Mức độ nâng cao
Bạn có một mảng chứa dữ liệu của các sản phẩm. Mỗi sản phẩm là một đối tượng có các 
thuộc tính: name, price, và inStock. Hãy dùng forEach() để tính tổng giá trị của tất cả các sản 
phẩm đang còn hàng.

Yêu cầu:

Tạo một mảng products gồm ít nhất 3 đối tượng, mỗi đối tượng có 3 thuộc tính như mô tả.

Tạo một biến totalValue ban đầu bằng 0.

Sử dụng phương thức forEach() để duyệt qua mảng products.

Bên trong hàm callback, kiểm tra nếu thuộc tính inStock của sản phẩm là true, 
thì cộng price của sản phẩm đó vào totalValue.

Sau vòng lặp, in ra console giá trị cuối cùng của totalValue.

Ví dụ đầu ra mong muốn:

Tổng giá trị của các sản phẩm còn hàng là: 12500000*/

// const products = [{ name: "name1", price: 2000, inStock: 5 },
// { name: "name2", price: 4000, inStock: 10 },
// { name: "name3", price: 1000, inStock: 0 }];
// let totalValue = 0 ;
// products.forEach( function(product){
//     if(product.inStock !== 0){
//         totalValue += product.price * product.inStock ;
//     }
// });
// console.log(`Total value in stock: ${totalValue}`);



// ================================================================


/*
Bài tập 1: Tính tổng giá trị sản phẩm
Bạn có một danh sách các sản phẩm, mỗi sản phẩm có tên và giá. Hãy sử dụng reduce()
để tính tổng giá trị của tất cả các sản phẩm.

Yêu cầu:

Cho mảng products dưới đây.

Sử dụng phương thức reduce() để duyệt qua mảng.

Tính tổng price của tất cả các đối tượng trong mảng.

In kết quả ra màn hình.
*/

// const products = [
//     { name: 'Laptop', price: 15000000 },
//     { name: 'Smartphone', price: 8000000 },
//     { name: 'Headphones', price: 1200000 },
//     { name: 'Keyboard', price: 600000 }
// ];

// const totalValue = products.reduce(function (accumulator, currentValue){
//     return accumulator += currentValue.price ; 
// },0);
// console.log(totalValue);


// ===============================================
/*Bài tập 2: Đếm số lần xuất hiện của các từ
Bạn có một chuỗi văn bản. Hãy sử dụng reduce() để tạo ra một đối tượng 
đếm số lần xuất hiện của mỗi từ trong chuỗi đó.

Yêu cầu:

Cho chuỗi text dưới đây.

Chuyển đổi chuỗi thành một mảng các từ.

Sử dụng phương thức reduce() để duyệt qua mảng từ.

Tạo một đối tượng để lưu trữ kết quả. Khóa của đối tượng là từ, và giá trị là số lần xuất hiện của từ đó.*/

// const text = "javascript is a programming language and javascript is also a language";

// const result = text.split("").reduce(function myFunction(previousValue, currentValue) {
//     if (previousValue[currentValue]) {
//         ++previousValue[currentValue]
//         console.log(6);
//     } else {
//         previousValue[currentValue] = 1;
//     }
//     return previousValue;
// },{});
// console.log(result);

