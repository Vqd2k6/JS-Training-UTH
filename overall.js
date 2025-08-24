//                           Week 02 - JS_Basic_1
//
//                       =============================
// 
//                      Control flow end errol handling 
//
//                        *****IF ELSE STATEMENT, TRY-CATCH-FINALLY-THROW*****
//
// if (condition) {
//     statement1;
// } else {
//     statement2;
// }

// if (condition1) {
//   statement1;
// } else if (condition2) {
//   statement2;
// } else if (conditionN) {
//   statementN;
// } else {
//   statementLast;
// }

//          Không nên nhầm lẫn giữa boolean value và object boolean 
// const b = new Boolean(false);
// if (b) {
//   // this condition evaluates to true
// }
// if (b == true) {
//   // this condition evaluates to false
// }

// FOR EXAMPLE: 
// function checkData(string) {
//   if (string.length === 3) {
//     return true;
//   }
//   alert(
//     `Enter exactly three characters. ${string} is not valid.`,
//   );
//   return false;
// }
// checkData("Hello");

//                  Switch statement

// const fruitType = "Apples";
// switch (fruitType) {            // fruitType là giá trị cần khớp
//     case "Oranges":           // các case là các khớp để kiểm tra 
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");       // case này thoã nên console sẽ in ra 
//         break;            // break để ngắt switch, tránh các câu lệnh sau thực thi vì witch đang trạng thái true từ case Apples
//     case "Bananas":
//         console.log("Bananas are $0.48 a pound.");
//         break;
//     case "Cherries":
//         console.log("Cherries are $3.00 a pound.");
//         break;
//     case "Mangoes":
//         console.log("Mangoes are $0.56 a pound.");
//         break;
//     case "Papayas":
//         console.log("Papayas are $2.79 a pound.");
//         break;
//     default:          // các câu lệnh sẽ được thực thi nếu không có case nào thoã, nó ko nhất thiết phải đặt cuối cùng
//         console.log(`Sorry, we are out of ${fruitType}.`);
// }
// console.log("Is there anything else you'd like?");

//                                  try -- catch -- finally 

// function f() {
//   try {             // nơi kiểm tra và gán lỗi
//     console.log(0);
//     throw "bogus";          // gán lỗi bằng throw
//   } catch (e) {     // e đây chính là lỗi được gán trước đó bằng throw , nếu không có lỗi thì e không tồn tại và catch sẽ không chạy 
//     console.log(e)
//     console.log(1);
//       // This return statement is suspended
//     // until finally block has completed
//     return true;
//     console.log(2); // not reachable
//   } finally {               // finally sẽ luôn chạy kể cả try hay catch có chạy hay không và mặc kệ đã có return trước đó hay chưa
//     console.log(3);
//     return false; // overwrites the previous "return"        // return của finally là return cuối cùng, hàm sẽ nhận nó
//     // `f` exits here
//     console.log(4); // not reachable   
//   }
//   console.log(5); // not reachable          // đã return nên lệnh không chạy nữa
// }
// console.log(f()); // 0, bogus, 1, 3, false


//                                      Nâng cao hơn về luồng throw 
// function f() {
//   try {
//     throw "bogus";
//   } catch (e) {   // bắt throw "bogus" và sử lý trong catch
//     console.log('caught inner "bogus"');
//     // This throw statement is suspended until
//     // finally block has completed
//     throw e;  // ném ra 1 throw khác 
//   } finally {
//     return false; // overwrites the previous "throw"   // vì có return nên throw ở catch bên trên bị đè , xem như không tồn tại 
//                                     // Nếu không có return thì throw e vẫn tồn tại , khối lệnh catch bao lấy nó sẽ bắt lỗi
//     // `f` exits here
//   }
// }

// try {
//   console.log(f());
// } catch (e) {    // do f() đang trả vè false nên không có e nào ở đây để bắt 
//   // this is never reached!
//   // while f() executes, the `finally` block returns false,
//   // which overwrites the `throw` inside the above `catch`
//   console.log('caught outer "bogus"');
// }


//           *****FOR, WHILE, DO-WHILE, BREAK, CONTINUTE, FOR IN-OF, FOREACH, METHOD FOR ITORATOR *****

// FOR SYNTAX:
// for (initialization; condition; afterthought)
//   statement

// DO - WHILE: 
// do
//   statement
// while (condition);

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// WHILE: 
// while (condition)
//   statement

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }
// console.log("N value:", n)
// console.log("X value:",x)

// BREAK LABLE 
// let text = "";
// loop1: for (let j = 1; j < 5; j++) {
//     loop2: for (let i = 1; i < 5; i++) {
//         if (i === 3) { break loop1; }
//         text += i;
//     }
// }
// console.log(text)    // 12

// let x = 0;
// let z = 0;
// labelCancelLoops: 
// while (true) {
//     console.log("Outer loops:", x);
//     x += 1;
//     z = 1;
//     while (true) {
//         console.log("Inner loops:", z);
//         z += 1;
//         if (z === 10 && x === 10) {
//             break labelCancelLoops;
//         } else if (z === 10) {
//             break;
//         }
//     }
// }

// CONTINUTE 
// let i = 0;
// let j = 10;
// while (i < 4) {
//     console.log(i);
//     i += 1;
//     while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if (j % 2 === 0) {
//             continue;
//         }
//         console.log(j, "is odd.");
//     }
//     console.log("i =", i);
//     console.log("j =", j);
// }

// FOR IN:
// for (variable in object)
//   statement

// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }
// const car = {
//   make: "Ford",
//   model: "Mustang"
// };
// console.log(dumpProps(car,"nameCar"))   //nameCar.make = Ford<br>nameCar.model = Mustang<br><hr>

// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x];
// }
// console.log(text);

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }
// console.log(txt);

//FOREACH:
//                 array.forEach(function(currentValue, index, arr), thisValue)

// const numbers = [10, 20, 30];

// // Khởi tạo một đối tượng có thuộc tính multiplier
// const myObject = {
//   multiplier: 2
// };

// // Sử dụng forEach với tất cả các tham số
// numbers.forEach(function(currentValue, index, arr) {
//   // `this` ở đây sẽ tham chiếu đến `myObject`
//   const product = currentValue * this.multiplier;

//   console.log(`Phần tử: ${currentValue} (vị trí ${index})`);
//   console.log(`Tích của phần tử với multiplier (${this.multiplier}) là: ${product}`);
//   console.log(`Mảng ban đầu: [${arr.join(', ')}]`);
//   console.log('--------------------');
// }, myObject); // Tham số `thisValue` được truyền vào đây

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction); // Gọi forEach(), truyền vào hàm myFunction
// function myFunction(value, index, array) {
//   txt += value; // Nối giá trị của từng phần tử vào biến txt
// }
// console.log(txt);

// const fruits = ["Apple", "Banana", "Orange"];
// let listItems = "";
// fruits.forEach(myFunction);
// console.log(listItems);
// function myFunction(value, index) {
//   // index ở đây sẽ là 0, 1, 2
//   listItems += `${index + 1}. ${value}\n`;
// }

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


// FOR OF:
// for (variable of iterable)
//   statement

// const arr = [3, 5, 7];
// arr.foo = "hello";
// console.log(arr);
// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// Logs: 3 5 7


// const obj = { foo: 1, bar: 2 };
// for (const [key, val] of Object.entries(obj)) {
//   console.log(key, val);
// }
// "foo" 1
// "bar" 2

// let language = "JavaScript";
// let text = "";
// for (const x in language) {
// text += x;
// }
// console.log(text)


//METHOD FOR ITERATOR :
//      from() // tạo 1 đối tượng lặp từ 1 đối tượng có thể lặp 

// // Create an iterator
// const myIterator = Iterator.from([1, 2, 3]);         
// // Iterate over the elements
// let text = "";
// for (const x of myIterator) {
//   text += x;
// }
// console.log(text);

//        filter() // lọc các phần tử thoã mãn điều kiện lọc   
// // Create an iterator
// const myIterator = Iterator.from([32, 33, 16, 40]);

// // Filter the iterator
// const filteredIterator = myIterator.filter(x => x > 18);

//          map() // trả về đối tượng lặp mới với các ptử được ánh xạ từ đối tượng lặp cũ 
// Create an iterator
// const myIterator = Iterator.from("123456789");

// // Now you can use the map method
// const mappedIterator = myIterator.map(x => x * 2);
// for (const x of mappedIterator){
//     console.log(x)
// }

// flatMap()     // // trả về một trình lặp mới bằng cách ánh xạ từng phần tử và sau đó 
// làm phẳng kết quả thành một trình lặp duy nhất.
// Create an iterator
// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

// Map the Iterator   
// const mappedIterator = myIterator.flatMap(x => [x, x * 10]);   // trả về arr 2 phần tử 
// for(const num of mappedIterator){    // trở thành arr đơn phần tử
//     console.log(num)
// }

//              take()             //trả về một trình lặp mới tạo ra nhiều nhất một số lượng phần tử được chỉ định.
// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);
// // Take the first five elements
// const firstFive = myIterator.take(5);
// for(const num of firstFive){  
//     console.log(num)
// }

//      find()    // trả về phần tử đầu tiên thoã mản điều kiện kiểm tra 
// Create an iterator
// const myIterator = Iterator.from([3, 10, 18, 30, 20]);

// // Find first greater than 18
// let result = myIterator.find(x => x > 18);
// console.log(result)

//     reduce()  trả về 1 iterator xếp giảm dần 
// Tạo một hàm để thực hiện phép trừ
// function myFunc(total, num) {
//   return total - num;
// }

// // Tạo một Iterator
// const myIterator = Iterator.from([175, 50, 25]);

// // "Thu gọn" Iterator bằng cách dùng hàm myFunc
// let result = myIterator.reduce(myFunc);

// // In kết quả trực tiếp
// console.log(result); // In ra 100

