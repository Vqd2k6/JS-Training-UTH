//                  Week 01 - JS_Basic_1
//
//              =============================
//
//
//                          Nội dung:
//
//  1) Bài tập (8 bài)
//  2) Mini Project
//
//
//              =============================

//                      1) Bài tập (8 bài)
//
/*
1. Khai báo 3 biến let/const lưu: ten (string), tuoi (number), laSinhVien (boolean). In ra câu: "Xin chào, tôi là <tên>, <tuổi> tuổi, sinh viên: <true/false>".
 */

// const name = "Võ Quang Dũng";
// const tuoi = 19 ;
// const laSinhVien = true ;

// console.log(`Xin chào, tôi là ${name}, ${tuoi} tuổi, sinh viên: ${laSinhVien}`)   // có thể sử dụng dấu backtick để gọn hơn



/*
2. Tính chu vi và diện tích hình chữ nhật từ width, height (number). Ép kiểu từ string sang number trước khi tính (gợi ý: Number()).
 */

// const width = "2";
// const height = '5';
// const area = Number(width) * Number(height);
// const perimeter = (Number(width) + Number(height)) * 2;
// console.log(`Area of rectangle: ${area}`);
// console.log(`Perimeter of rectangle: ${perimeter}`);



/*
3. Viết hàm sum(a, b) trả về tổng; kiểm tra kiểu a, b là number, nếu không trả về 'Invalid input'.
*/

// function sum(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Invalid input";
//     }
//     return a + b;
// }

// const a = 2;
// const b = 5;
// const result = sum(a, b);
// console.log(result);



/*
4. Viết hàm isEven(n) trả về true nếu n chẵn, ngược lại false. Test với một số giá trị.
 */

// function isEven(n) {
//     if (typeof n !== "number") {
//         return false;
//     }
//     return n % 2 === 0;
// }

// console.log(isEven(3));  // false
// console.log(isEven(4));  // true
// console.log(isEven("Hello"));   // false    Ko thể convert "Hello" thành Number => NaN % 2 ==> NaN ===> false 
// console.log(isEven(NaN));       // false    NaN % 2 === NaN , NaN !== 0 => false  



/*
5. Viết hàm greet(name = 'bạn') trả về 'Hello, <name>!'. So sánh function declaration và arrow function.
 */

// console.log(greet());     // Hoisting 
// function greet(name = "Dũng") {
//     return `Hello, ${name}!`;
// }

// console.log(greet());     // Not Hoisting 
// const greet = (name = "Dũng") => {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Quang Dũng"));


//                   So sánh function declaration và arrow function.
//              1, Cú pháp arrow ngắn gọn hơn declaration: có thể không cần {} và return nếu code ngắn 
//                        const sum = (a, b) => a + b;  
//              2, Qua hàm 'greet' chúng ta đã có thể thấy được Hoisting
//              3, Arguments: Declaration có    ><    Arrow không 


// function moiPhuHuynh() {
//     let danhSach = "";   // sử dụng let vì chúng ta còn thực hiện phép gán giá trị cho nó
//     for (let i = 0; i < arguments.length; i++) {
//         danhSach += `${arguments[i]}, `;
//     }
//     return `Bạn ${danhSach}ngày mai đi cùng phụ huynh lên phòng hội đồng gặp tôi!`;
// }
// console.log(moiPhuHuynh("Thịnh", "Dũng", "Toàn"));


// const moiPhuHuynh = () => {
//     let danhSach = "";
//     for (let i = 0; i < arguments.length; i++) {
//         danhSach += `${arguments[i]}, `;
//     }
//     return `Bạn ${danhSach}ngày mai đi cùng phụ huynh lên phòng hội đồng gặp tôi!`;
// }
// console.log(moiPhuHuynh("Thịnh", "Dũng", "Toàn"));     // Error !!!

//              4, Một số nội dung như this , constructor ,... Ở phần sau em sẽ tìm hiểu kĩ hơn để tránh bị hiểu sai ạ.



/*
6. Tạo biến points (number). Dùng toán tử 3 ngôi để phân loại: points >= 90: 'A', 70–89: 'B', 50–69: 'C', < 50: 'D'.
*/

// const number = 91;
// const points = number >= 90 ? "A" :
//     number >= 70 ? "B" :
//         number >= 50 ? "C" : "D";
// console.log(points);



/*
7. Tạo biến a = '10', b = 10. So sánh a == b và a === b, giải thích khác biệt và in kết quả.
*/
// const a = "10";
// const b = 10;
// console.log(a == b);   // true : == so sánh lỏng, chỉ so sánh giá trị :: js sẽ tự chuyển a thành 10 , lúc này 10 bằng 10 => true 
// console.log(a === b);  // false : === so sánh chặt , so sánh cả giá trị và data type , string khác number => false 

/*
8. Viết hàm toBoolean(x) chuyển mọi giá trị về boolean theo JavaScript truthy/falsy và in kết quả với: 0, 1, '', '0', ' ', null, undefined, [], {}, NaN.
*/

// function toBoolean(x) {
//     return !!x;
// }
// console.log(toBoolean(0));            // false 
// console.log(toBoolean(1));            // true
// console.log(toBoolean(""));           // false 
// console.log(toBoolean("0"));          // true
// console.log(toBoolean(" "));          // true                  // Có 6 giá trị nếu là nó thì sẽ trả về false trong js: 
// console.log(toBoolean(null));         // false                  // false , "" , 0 , NaN , undefined , null 
// console.log(toBoolean(undefined));    // false
// console.log(toBoolean([]));           // true
// console.log(toBoolean({}));           // true
// console.log(toBoolean(NaN));          // false


//              =============================


//                           2) Mini Project
// Xây dựng chương trình tính lương nhân viên: nhập name, baseSalary, bonusRate (0–1), overtimeHours. 
// Tính tổng lương = baseSalary + baseSalary*bonusRate + overtimeHours*50000. 
// In biên lai dạng nhiều dòng (template string). 
// Yêu cầu: validate kiểu dữ liệu, làm tròn 0 chữ số.


// const person = {
//     name: (() => {
//         let input = prompt("Tên: ");        // chúng ta sử dụng let thay vì const để trường hợp input không chính xác chúng ta có thể gán lại giá trị cho nó
//         while (!input) {                    // giúp tránh trường hợp "" khi người dùng vô tình enter 
//             input = prompt("Tên không hợp lệ, vui lòng nhập lại: ");
//         }
//         return input;
//     })(),
//     baseSalary: (() => {
//         let input = Number(prompt("Lương cơ bản: "));       // ép sang number để phục vụ cho kiểm tra và return 
//         while (isNaN(input)) {          // nếu không phải số thì ép sẽ trả về NaN, tại đây check sẽ phát hiện và yêu cầu người dùng nhập lại      
//             input = Number(prompt("Lương cơ bản không hợp lệ, vui lòng nhập lại: "));
//         }
//         return input;
//     })(),
//     bonusRate: (() => {
//         let input = Number(prompt("Mức thưởng: "));
//         while (isNaN(input) || input < 0 || input > 1) {            // tương tự như baseSalary nhưng kiểm tra cả khoảng giá trị 0-1. Chỉ cần 1 trong 3 true, nghĩa là giá trị lỗi sẽ yêu cầu nhập lại 
//             input = Number(prompt("Mức thưởng không hợp lệ, vui lòng nhập lại: "));
//         }
//         return input;
//     })(),
//     overtimeHours: (() => {
//         let input = Number(prompt("Số giờ làm thêm: "));
//         while (isNaN(input)) {
//             input = Number(prompt("Số giờ làm thêm không hợp lệ, vui lòng nhập lại: "));
//         }
//         return input;
//     })()
// }
// person.total = Math.round(person.baseSalary + person.baseSalary * person.bonusRate + person.overtimeHours * 50000);    // chúng ta không thể truy cập các giá trị của object khi object chưa được khởi tạo xong 

// console.log(`Tên: ${person.name}
// Lương cơ bản: ${person.baseSalary}
// Mức thưởng: ${person.bonusRate}
// Số giờ làm thêm: ${person.overtimeHours}
// Lương thực nhận: ${person.total}`
// );



