//                  Week 02 - JS_Basic_1
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
// 1)	Viết chương trình phân loại tuổi: <6 (mầm non), 6–11 (tiểu học), 12–15 (THCS), 16–18 (THPT), >18 (khác).

// let age = Number(prompt("Vui lòng nhập tuổi:  "));
// while (isNaN(age) || age <= 0) {
//     age = Number(prompt("Tuổi không hợp lệ, vui lòng nhập lại: "));
// }
// if (age < 6) {
//     console.log("Mầm non");
// } else if (age <= 11) {
//     console.log("Tiểu học");
// } else if (age <= 15) {
//     console.log("THCS");
// } else if (age <= 18) {
//     console.log("THPT");
// } else {
//     console.log("Khác");
// }

//          *******************

// 2)	Tính tổng số từ 1..n (n nhập vào). In thêm tổng các số chẵn và lẻ.

// let number = Number(prompt("Vui lòng nhập số:  "));
// while (isNaN(number) || number < 1) {
//     number = Number(prompt("Số hợp lệ phải lớn hơn 1, vui lòng nhập lại: "));
// }
// let sum = 0 ;
// let sumEven = 0 ;
// let sumOdd = 0 ;
// for(let i = 1 ; i <= number ; i ++ ){
//     sum += i ; 
//     if (i%2===0){
//         sumEven += i ; 
//     }else{
//         sumOdd += i ; 
//     }
// }
// console.log(`- Tổng số từ 1 đến ${number}: ${sum}
// - Tổng số "chẵn" từ 1 đến ${number}: ${sumEven}
// - Tổng số "lẻ" từ 1 đến ${number}: ${sumOdd}`);

//          *******************

// 3)	Tạo mảng scores. Tính min, max, average thủ công bằng vòng lặp.

// let input = prompt("Nhập mảng điểm các môn của bạn: ").trim().split(" ");    // tạo mạng điểm đầu vào, nó đang dạng string
// let scores = [];   // mảng để chứa điểm sau khi convert và check hợp lệ 
// let flag = true ;
// while (flag) {           // khi all phần tử đều hợp lệ thì ngưng, ngược lại sẽ yêu cầu nhập lại mảng điểm
//     flag = false;
//     for (let i = 0; i < input.length; i++) {     // duyệt qua từng phần tử của input ban đầu
//         if(input[i] === ""){    // tránh trường hợp space liên tiếp "0   0 0 0    0"
//             continue ;
//         }else if (!isNaN(Number(input[i]))) {  // ép kiểu kiểm tra xem có phải number không
//             scores.push(Number(input[i]));    // đúng thì push vào mảng scores 
//         } else {         // khi xuất hiện lỗi input 
//             scores = [] ; // reset lại về rỗng 
//             flag = true;         // để while lặp lại 
//             input = prompt("Điểm bạn nhập không hợp lệ, vui lòng nhập lại: ").trim().split(" ");
//             break;   // kết thúc for và while sẽ chạy 
//         }
//     }
// }
// let min = scores[0];
// let max = scores[0];
// let average = 0;
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > max) {
//         max = scores[i];
//     }
//     if (scores[i] < min) {
//         min = scores[i];
//     }
//     sum += scores[i];
// }
// average = sum / scores.length;
// console.log(`Scores: ${scores}
// Min: ${min}
// Max: ${max}
// Average: ${average}`);


// Ở đây mảng có sẵn không cần convert input nên ngắn hơn

// const scores = [1, 0, 2, 4, 5, 0, -3, 2, -4, 2];
// let min = scores[0];
// let max = scores[0];
// let average = 0;
// let sum = 0;
// for (const score of scores) {
//     if (score > max) {
//         max = score;
//     }
//     if (score < min) {
//         min = score;
//     }
//     sum += score;
// }
// average = sum / scores.length;
// console.log(`Scores: ${scores}
// Min: ${min}
// Max: ${max}
// Average: ${average}`)

//          *******************

// 4)	Đảo ngược chuỗi s (vd: 'hello' -> 'olleh') không dùng hàm reverse sẵn cho array.

// let input = prompt("Nhập chuỗi: ").trim();
// let result = "";
// for (let char of input ){
//     result = char + result ;   // duyệt theo chiều xuôi nhưng cộng ngược
// }
// console.log(result);



// const input = prompt("Nhập chuỗi: ").trim().split("");     // input phải là 1 iterable mới sd reduce được
// const result = input.reduce(function reverse(previousValue, currentValue) {
//     return  currentValue +  previousValue ;
// })
// console.log(result);

//          *******************


// 5)	Đếm số nguyên tố trong mảng numbers (gợi ý: viết hàm isPrime).

// function isPrime(number) {
//     if (number < 2) {  // Không có số nguyên tố nào bé hơn 2
//         return false;
//     }
//     else if (number <= 3) {  // vì 2 & 3 là số nguyên tố
//         return true;
//     }
//     if (number % 2 == 0 || number % 3 == 0) {  // 2 & 3 đã xét ở trên , nên chỉ có thể chia hết cho 1 và chính nó, nếu thoã nó là false
//         return false;
//     }
//     let i = 5  // Các số nguyên tố lớn hơn 3 đều có dạng 6k +- 1                5 7 11 13 17 19 .......
//     while (i ** 2 <= number) {
//         if (number % i == 0 || number % (i + 2) == 0) {
//             return false;
//         }
//         i += 6;
//     }
//     return true;
// }
// function countPrime(numbers) {
//     let count = 0;
//     for(const number of numbers ) {
//         if (isPrime(number)) {
//             count++;
//         }
//     }
//     return count;
// }
// const numbers = [1, 3, 4, 5, 6, 7, 12, 13, 14, 20, 21, 23, 70];
// console.log(numbers);
// console.log(`Số lượng số nguyên tố có trong mảng là: ${countPrime(numbers)}`);

//          *******************

// 6	Tìm phần tử xuất hiện nhiều nhất trong mảng (mode) và số lần xuất hiện.

// const numbers = [1, 5, 2, 8, 2, 5, 5, 1, 8, 8, 8, 8];
// const dictObject = numbers.reduce(function myFilter(previousValue, currentValue) {    //đưa về dạng array object, key là giá trị và value là số lần xuất hiện 
//     if (previousValue[currentValue]) {      // key và value đã tồn tại , chỉ cần tăng value lên 1
//         ++previousValue[currentValue]   
//     } else {
//         previousValue[currentValue] = 1;      // khởi tạo thuộc tính mới và ban đầu mang giá trị 1 
//     }
//     return previousValue;     
// },{});
// let compare = dictObject[numbers[0]];       // compare lưu số lần xuất hiện , dùng để xem cái nào xuất hiện nhiều nhất 
// let result = numbers[0] ;   // nó là giá trị cần tìm 
// for (const [key, val] of Object.entries(dictObject)) {       // entry trả về cặp key và value  
//     if(val > compare){
//         result = key ;
//         compare = val ;
//     }
// }
// console.log(`Numbers: ${numbers}`);
// console.log("Array object:" , dictObject);
// console.log(`Mode in numbers: ${result}`);

//          *******************

// 7)	Tạo mảng todo (chuỗi). Viết menu (switch) để: thêm, xóa theo chỉ số, in danh sách.
// Bài này giải theo hướng sử dụng của sổ pop-up là thông báo hiển thị là chính

// let toDo = ["Danh sách công việc: \n"];
// const menu = `Menu: 
// 1, Xem danh sách.
// 2, Thêm.
// 3, Xoá.
// 0, Thoát.`;
// // có thể sử dụng flag và while, em mới đọc thấy lable nên muốn thực hành để rõ hơn.
// lableStart: while(true){        // sử dụng lable và while ý đồ muốn người dùng thao tác mãi trên pop-up
// let input = prompt(menu);
// switch (input){
//     case ("1"):
//         toDoOut = toDo[0] ;
//         for(let i = 1 ; i < toDo.length ; i ++){
//             toDoOut +=  i + ", " + toDo[i];
//         }
//         alert(toDoOut);
//         continue lableStart ; 
//     case ("2"):
//         input = (prompt("Nhập công việc cần thêm: ").trim() + "\n");
//         input = input.charAt(0).toUpperCase() + input.slice(1);
//         if(input !== ""){
//             toDo.push(input)
//             alert("Đã thêm thành công.");
//         }
//         else {
//             alert("Thêm không thành công!");
//         }
//         continue lableStart ; 
//     case ("3"):
//         let index = Number(prompt("Nhập số thứ thự công việc cần xoá: "));
//         if( isNaN(index)|| index > toDo.length -1 || index < 1){
//             alert("Số vừa nhập không hợp lệ, vui lòng thử lại sau.");
//         }else{
//             toDo = toDo.slice(0 , index ).concat(toDo.slice(index+1));
//             alert("Đã xoá thành công.");
//         }
//         continue lableStart;
//     case ("0"):
//         alert("Thoát thành công.")
//         break lableStart ;   // chỉ khi thực sự out mới out 
//     default:
//         alert("Vui lòng chọn lại")
//         continue lableStart;
//     }
// }

//          *******************

// 8	Viết trò chơi đoán số từ 1..100 (random). Gợi ý lớn/nhỏ cho đến khi đoán đúng, đếm số lần đoán.


// function getRandomInt() {
//   return Math.floor(Math.random() * 100) + 1;   // Math.random sinh ra 0-0.9999 // *100 và floor làm tròn xuống sẽ sinh ra 0-99 , +1 để trở thành 1-100
// }
// const secret = getRandomInt(1, 100);
// let count = 0 ;
// while (true) {
//     count ++ ;
//     let guess = parseInt(prompt("Nhập số: "));
//     if (guess === secret){
//         alert("Đúng.")
//         break;
//     }
//     if(guess > secret){
//         alert("Bé hơn.")
//     }else{    // else được vì trường hợp === đã được xử lý
//         alert("Lớn hơn.")
//     }
// }
// const result = `Số lần bạn đã đoán là: ${count}`
// alert(result);

//              =============================

/*3) Mini Project
Viết chương trình quản lý học sinh đơn giản: 
nhập danh sách điểm (array), in bảng xếp loại theo thang A/B/C/D, 
tính điểm trung bình, điểm cao nhất, thấp nhất; kèm menu thao tác (thêm/xóa/in).
// */

// let listScores = ["Danh sách điểm: \n"];
// const menu = `Menu: 
// 1, Xem danh sách điểm.
// 2, Thêm.
// 3, Xoá.
// 4, Điểm TB, max & min.
// 0, Thoát.`;

// function convertScore(score) {
//     if (score > 8) {
//         return "A";
//     } else if (score > 6) {
//         return "B";
//     } else if (score > 4) {
//         return "C";
//     } else {
//         return "D";
//     }
// }
// let scores = [];
// let flagAverageMaxMin = false;

// lableStart: while (true) {
//     let input = prompt(menu);
//     switch (input) {
//         case ("1"):
//             toDoOut = listScores[0];
//             for (let i = 1; i < listScores.length; i++) {
//                 toDoOut += i + ", " + listScores[i];
//             }
//             alert(toDoOut);
//             continue lableStart;
//         case ("2"):
//             input = (prompt("Điểm muốn thêm: ").trim().split(" "));
//             let countNo = 0;
//             let countYes = 0;
//             for (let score of input) {
//                 score = Number(score)
//                 if (score !== "") {
//                     if (isNaN(score) || score < 0 || score > 10) {
//                         countNo++;
//                     } else {
//                         scores.push(score);
//                         countYes++;
//                         listScores.push(convertScore(score) + "\n");
//                     }
//                 }

//             }
//             if (countNo) {
//                 alert("Xuất hiện " + countNo + " điểm không hợp lệ, " + countNo + " điểm sẽ không được thêm vào!");
//             }
//             alert("Đã thêm thành công " + countYes + " điểm.");
//             continue lableStart;
//         case ("3"):
//             let index = Number(prompt("Nhập số thứ thự điểm cần xoá: "));
//             if (isNaN(index) || index > listScores.length - 1 || index < 1) {
//                 alert("Số vừa nhập không hợp lệ, vui lòng thử lại sau.");
//             } else {
//                 scores = scores.slice(0, index - 1).concat(scores.slice(index));
//                 listScores = listScores.slice(0, index).concat(listScores.slice(index + 1));
//                 alert("Đã xoá thành công.")
//             }
//             continue lableStart;
//         case ("4"):        // sử dụng average , max , min chung 1 lần vì có thể tính 3 giá trị trong 1 lần lặp
//             let max = 0;
//             let min = 10;
//             let sum = 0;
//             for (const score of scores) {
//                 if (score > max) {
//                     max = score;
//                 }
//                 if (score < min) {
//                     min = score;
//                 }
//                 sum += score;
//             }

//             let result = "Average: " + sum / scores.length + "\nMax: " + max + "\nMin: " + min + "\n";
//             alert(result);
//             continue lableStart;
//         case ("0"):
//             alert("Thoát thành công.");
//             break lableStart;
//         default:
//             alter("Vui lòng chọn lại");
//             continue lableStart;
//     }
// }