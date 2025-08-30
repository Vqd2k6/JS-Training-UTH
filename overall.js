// // <<<<<<<<<<<<<<<<<<<<<< Operator: ??= >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    
// /* argu1 ??= argu2 , nó sẽ kiểm tra xem argu1 có null or undefined không, nếu có thì argu1 sẽ được gán argu2*/

// // var x = null
// // var y = 5

// // console.log(x ??= y) // => 5
// // console.log(x = (x ?? y)) // => 5 

// //<<<<<<<<<<<<<<<<

// // function gameSettingsWithNullish(options) {   // argu là 1 object 
// //   options.gameSpeed ??= 1           // options chưa có gameSpeed nên nó null , => giá trị 1 sẽ được gán vào 
// //   options.gameDiff ??= 'easy'       // ở đây cũng tương tự 
// //   return options        // trả về 1 đối tượng, nếu như ban đầu options đã có sẵn thì hàm này sẽ không làm thay đổi nó 
// // }                                   // ngược lại , nếu chưa có speed và diff thì sẽ dược tạo và gán 2 attribute mới

// // function gameSettingsWithDefaultParams(gameSpeed = 1, gameDiff = 'easy') {  // ở đây ta khởi tạo giá trị mặc định cho 2 attribute
// //   return { gameSpeed, gameDiff }
// // }

// // const var1 = gameSettingsWithNullish({ gameSpeed: null, gameDiff: null }) // => { gameSpeed: 1, gameDiff: 'easy' }
// // const var2 = gameSettingsWithDefaultParams(null) // => { gameSpeed: null, gameDiff: 'easy' }

// // <<<<<<<<<<<<<<<<<<<<<<<<<< Toán tử: ?. >>>>>>>>>>>>>>>>>>>>>>>.
// /*   Nó kiểm tra xem vế bên trái có phải là null hoặc undefined không. Nếu không sẽ truy cập tiếp, ngược lại luôn trả về undefined:
//   Truy cập thuộc tính: obj?.prop
//   Truy cập phần tử mảng: arr?.[index]
//   Gọi phương thức: obj.method?.() 
// */

// //  var travelPlans  = {
// //   destination: 'DC',
// //   monday: {
// //     location: 'National Mall',
// //     budget: 200
// //   }
// // };

// // const tuesdayPlans = travelPlans?.tuesday?.location;
// // console.log(tuesdayPlans) // => undefined

// //<<<<<<<<<<<<<<<<<<<<<<<<<, 

// var travelPlans = {
//   destination: 'DC',
//   monday: {
//     location: 'National Mall',
//     budget: 200
//   }
// };

// const tuesdayPlans = travelPlans?.tuesday?.location;
// console.log(tuesdayPlans) // => undefined
// function addPlansWhenUndefined(plans, location, budget) {
//   if (plans?.tuesday?.location == undefined) {
//     var newPlans = {
//       ...plans,
//       tuesday: { location: location ?? "Park", budget: budget ?? 200 }
//     };
//   } else {
//     console.log(newPlans);
//     newPlans ??= plans; //will only override if newPlans is undefined
//     console.log("Plans have already been added!");
//   }
//   return newPlans;
// }

// var newPlans = addPlansWhenUndefined(travelPlans, "Ford Theatre", null);
// console.log(newPlans) 
// => { destination: 'DC',
// monday: { location: 'National Mall', budget: 200 } ,
// tuesday: { location: 'Ford Theatre', budget: 200 } }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< String and method >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// <<<<< length, charAt(), slice(), substring(), toLowerCase(), toUpperCase(), trim(), indexOf(), lastIndexOf(), includes()
// const s1 = "Hello";

// console.log(s1.length); // 5    - length là thuộc tính không phải chuỗi

// console.log(s1.charAt(1)); // "e"     - Trả về ký tự tại một chỉ mục (index) cụ thể.
// // Lưu ý: Bạn cũng có thể truy cập bằng s[1], nhưng charAt() được dùng để đảm bảo tương thích tốt hơn với các trình duyệt cũ.

// const s2 = "JavaScript";
// console.log(s2.slice(0, 4));      // "Java"
// console.log(s2.substring(4, 10)); // "Script"
// console.log(s2.slice(-6));        // "Script" (bắt đầu từ vị trí thứ 6 từ cuối) - substring không làm được điều này 

// console.log(s2.toLowerCase()); // "hello world"
// console.log(s2.toUpperCase()); // "HELLO WORLD"

// const s3 = "  JavaScript cơ bản  ";
// console.log(s3.trim()); // "JavaScript cơ bản"

// const s4 = "abcabc";
// console.log(s1.indexOf("b"));     // 1
// console.log(s1.lastIndexOf("b")); // 4
// console.log(s1.indexOf("z"));     // -1

// const s5 = "hello world";
// console.log(s5.includes("world")); // true
// console.log(s5.includes("earth")); // false


// // <<<<<<<<<<<<<<<<<<<<<< Array and Method with Array >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    
//<<<toString(), join(), pop(), push(), shift(), unshift() <---> forEach(), every(), some(), find(), filter(), map(), reduce()

// let arr = [1,2,3]
// console.log(arr.toString())    // 1,2,3
// console.log(arr.join(", "))    // 1, 2, 3
// console.log(arr.pop())    // 3 -- xoá element ở cuối và trả về element đã xoá // nếu mảng trống thì return undefined 
// console.log(arr.push("Helo"))    // 3 -- push vào 1 hoặc nhiều element và cuối và trả về số lượng phần tử hiện tại sau push  
// console.log(arr)   // [ 1, 2, 'Helo' ]   
// console.log(arr.shift())   // 1 -  xoá phần tử ở đầu mảng và trả về phần tử vừa xoá, nếu rỗng return undefined 
// console.log(arr)  // [ 2, 'Helo' ] 
// console.log(arr.unshift("Start"))  // 3 -- thêm 1 hoặc nhiều element vào đầu array và trả về số lượng element hiện tại 
// console.log(arr)

//<<<<<<<<<<<<<<<<<<<<<<<<< splice(start , countDelete,insert)
// let array = [0,1,2,4,5,6,7,8,9,10]
// array.splice(5,5);    // bắt đầu tử index số 5 xoá 5 elem ở phía sau 
// console.log(array);  // [ 0, 1, 2, 4, 5 ]  -- đã xoá 5 elem ở cuối 

// // tại index số 5 , xoá 0 elem và chèn elem mới 
// array.splice(5,0,6)
// console.log(array)   // [ 0, 1, 2, 4, 5, 6 ]

//<<<<<<<<<<<<<<<<<<<<<<<<< argu1.concat(argu2) , slice(start,end)

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7];
// console.log(arr1.concat(arr2));  // [1, 2, 3, 4, 5, 6, 7]

// let array = [0,1,2,4,5,6,7,8,9,10]
// console.log(array.slice(2 ,3))   // [2]



//<<<<<<<<<<<<<<<<<<forEach(), every(), some(), find(), filter(), map(), reduce()>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<< Tự built function và test với bài tập >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Array.prototype.myForEach = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             callBack(this[index], index, this)
//         }
//     }
// }

// Array.prototype.myEvery = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!callBack(this[index], index, this)) {
//                 return false;
//             }
//         } else { break; }
//     }
//     return true;
// }

// Array.prototype.mySome = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 return true;
//             }
//         } else { break; }
//     }
//     return false;
// }

// Array.prototype.myFind = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 return this[index];
//             }
//         } else { break; }
//     }
//     return undefined;
// }

// Array.prototype.myFilter = function (callBack) {
//     let result = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 result.push(this[index])
//             }
//         } else { break; }
//     }
//     return result;
// }

// Array.prototype.myMap = function (callBack) {
//     let result = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             result.push(callBack(this[index], index, this))
//         } else { break; }
//     }
//     return result;
// }

// Array.prototype.myReduce = function (callBack, initialValue) {
//     let i = 0;
//     if (this.length < 2) {
//         i++;
//         initialValue = this[0];
//     }
//     let len = this.length;
//     let result = initialValue;
//     for (; i < len; i++) {
//         result = callBack(result, this[i], i, this)
//     }
//     return result;
// }


/*
Bài 1: Quản lý danh sách sản phẩm
Bạn có một mảng các đối tượng sản phẩm. Mỗi đối tượng có các thuộc tính: id (string), name (string), price (number), inStock (boolean).
*/
// const products = [
//     { id: 'p1', name: 'Laptop', price: 15000000, inStock: true },
//     { id: 'p2', name: 'Mouse', price: 350000, inStock: false },
//     { id: 'p3', name: 'Keyboard', price: 750000, inStock: true },
//     { id: 'p4', name: 'Monitor', price: 4500000, inStock: true },
//     { id: 'p5', name: 'USB-C Cable', price: 120000, inStock: true }
// ];

// console.log("Viết một hàm để kiểm tra xem tất cả sản phẩm trong mảng có còn hàng không.");
// function isInStock(arr) {
//     return arr.myFind((cur) => { return cur.inStock })
// }
// console.log(isInStock(products))

// console.log("Tìm sản phẩm đầu tiên có giá nhỏ hơn 500.000 VNĐ.")
// function isCheap(arr) {
//     return arr.myFind((cur) => { return cur.price < 500000 })
// }
// console.log(isCheap(products))

// console.log("Tạo một mảng mới chỉ chứa các sản phẩm còn hàng (inStock là true).")
// const newProducts = products.filter((cur) => { return cur.inStock === true; });
// console.log(newProducts);

// console.log("Tính tổng giá của tất cả các sản phẩm còn hàng.")
// const sumProductInStock = products.myReduce((pre, cur) => { cur.inStock ? pre += cur.price : pre += 0; return pre; }, 0);
// console.log(sumProductInStock);

// console.log("Tạo một mảng mới chứa các đối tượng có cấu trúc đơn giản hơn, chỉ gồm name và price.")
// const newArrayProducts = products.reduce((pre, cur) => {
//     pre.push({ "name": cur.name, "price": cur.price })
//     return pre;
// }, [])
// console.log(newArrayProducts)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,,


// Bài 2: Phân tích kết quả học tập
// Bạn có một mảng các đối tượng sinh viên. Mỗi đối tượng có các thuộc tính: name (string), grades (array of numbers), và isPassed (boolean).

// Array.prototype.myForEach = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             callBack(this[index], index, this)
//         }
//     }
// }

// Array.prototype.myEvery = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!callBack(this[index], index, this)) {
//                 return false;
//             }
//         } else { break; }
//     }
//     return true;
// }

// Array.prototype.mySome = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 return true;
//             }
//         } else { break; }
//     }
//     return false;
// }

// Array.prototype.myFind = function (callBack) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 return this[index];
//             }
//         } else { break; }
//     }
//     return undefined;
// }

// Array.prototype.myFilter = function (callBack) {
//     let result = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callBack(this[index], index, this)) {
//                 result.push(this[index])
//             }
//         } else { break; }
//     }
//     return result;
// }

// Array.prototype.myMap = function (callBack) {
//     let result = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             result.push(callBack(this[index], index, this))
//         } else { break; }
//     }
//     return result;
// }

// Array.prototype.myReduce = function (callBack, initialValue) {
//     let i = 0;
//     if (this.length < 2) {
//         i++;
//         initialValue = this[0];
//     }
//     let len = this.length;
//     let result = initialValue;
//     for (; i < len; i++) {
//         result = callBack(result, this[i], i, this)
//     }
//     return result;
// }

// const students = [
//     { name: 'Alice', grades: [8, 7.5, 9.5], isPassed: false },
//     { name: 'Bob', grades: [6.5, 5, 7], isPassed: false },
//     { name: 'Charlie', grades: [9, 10, 8.5], isPassed: false },
//     { name: 'David', grades: [7, 6.5, 8], isPassed: false }
// ];

// console.log("Cập nhật trạng thái đỗ: Tính điểm trung bình của mỗi sinh viên. Sau đó, cập nhật thuộc tính isPassed thành true nếu điểm trung bình lớn hơn hoặc bằng 7, ngược lại là false.");
// const studentsCopy = [...students] ;
// const studentsAfter = studentsCopy.reduce( (pre , cur) =>{
//     let sum = 0 ; 
//     let arrScores = [...cur.grades]
//     for(let score of arrScores){
//         sum += score; 
//     }
//     if(sum/arrScores.length >= 7 ){
//         cur.isPassed = true ;
//     }
//     pre.push(cur) ; 
//     return pre ; 
// } , []);
// console.log(studentsAfter);

// console.log("Kiểm tra xem có bất kỳ sinh viên nào đạt điểm 10 hay không.")
// const result = students.find((cur)=>{
//     for(let score of cur.grades){
//         if(score === 10){return true;}
//     }
// });
// if(result){
//     console.log("Có ít nhất 1 bạn đã đạt điểm 10.")
// }else{
//     console.log("Không có bạn nào đạt điểm 10.")
// }

// console.log("Tìm sinh viên đầu tiên có điểm trung bình trên 9.")

// const firstStudent = students.myReduce((pre,cur)=>{
//     let sum = 0 ; 
//     let arrScores = [...cur.grades]
//     for(let score of arrScores){
//         sum += score; 
//     }
//     if(sum/arrScores.length > 9 ){
//        pre.push(cur) ;
//     } 
//     return pre ;
// } , []);
// if(firstStudent.length >= 1){
//     console.log(firstStudent[0]);
// }else{
//     console.log("Không có sinh viên nào có điểm trung bình lớn hơn 9.")
// }

// console.log("Tính tổng điểm của tất cả các bài kiểm tra của tất cả các sinh viên trong mảng.")
// const sumScore = students.myReduce((pre , cur)=>{
//     let sum = 0 ; 
//     let arrScores = [...cur.grades]
//     for(let score of arrScores){
//         sum += score; 
//     }
//     return pre + sum ;
// } , 0 );
// console.log("Tổng điểm của all học sinh: " , sumScore );

// console.log("Tạo một mảng mới chỉ chứa tên của những sinh viên có điểm trung bình dưới 7.")
// const failStudents = students.myFilter((cur)=>{
//     let sum = 0 ; 
//     let arrScores = [...cur.grades]
//     for(let score of arrScores){
//         sum += score; 
//     }
//     return sum/arrScores.length < 7 ;
// });
// const resultFailStudents = failStudents.map((cur)=>{
//     return cur.name ;
// })
// console.log(resultFailStudents);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Destructuring >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const user = { name: 'An', age: 25 };

// // Cách thông thường
// // const name = user.name;
// // const age = user.age;

// // Cách dùng Destructuring
// const { name, age } = user;
// console.log(name); // "An"
// console.log(age);  // 25

// const product = { id: 101, productName: 'Laptop' };

// // Đổi tên biến productName thành name
// const { productName: name, price = 0 } = product;
// console.log(name);  // "Laptop"
// console.log(price); // 0 (đặt giá trị mặc định vì price không tồn tại)
// console.log(product.productName)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Nested Detructuring >>>>>>>>>>>>>>>>>

// const student = {
//   id: 1,
//   name: 'Binh',
//   info: {
//     school: 'Bach Khoa',
//     major: 'IT'
//   }
// };

// // Lấy major từ object info
// const { info: { majorj } } = student;
// console.log(majorj); // "IT"

// // Lấy cả info và major
// const { info, info: { school } } = student;
// console.log(info);   // { school: 'Bach Khoa', major: 'IT' }
// console.log(school); // "Bach Khoa"

//  <<<<<<<<<<<<<<<<<<<<<<<<<

// const user = {
//     id: 42,
//     name: {
//         first: 'John',
//         last: 'Doe'
//     },
//     location: {
//         city: 'New York'
//     },
//     contact: {
//         email: 'john.doe@example.com'
//     }
// };

// // Sử dụng Destructuring để trích xuất và đổi tên thuộc tính
// const {
//     id,                                     // Trích xuất 'id'
//     name: { first: firstName },             // Trích xuất 'first' từ 'name' và đổi tên thành 'firstName'
//     location: { country = 'USA' },          // Trích xuất 'country' từ 'location' và gán mặc định
//     contact: { phone = 'N/A' }              // Trích xuất 'phone' từ 'contact' và gán mặc định
// } = user;

// console.log(id);        // 42
// console.log(firstName); // 'John'
// console.log(country);   // 'USA' (vì user.location không có thuộc tính country)
// console.log(phone);     // 'N/A' (vì user.contact không có thuộc tính phone)


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,

// const userProfile = {
//     id: 'user_123',
//     username: 'js_master',
//     profile: {
//         firstName: 'Duy',
//         lastName: 'Nguyen',
//         contact: {
//             email: 'duy.nguyen@example.com',
//             phone: null
//         }
//     },
//     permissions: ['read', 'write', 'delete'],
//     status: 'active'
// };
// // Sử dụng một câu lệnh Destructuring để:

// console.log("Trích xuất và đổi tên id thành userId.")
// const {id: userId } = userProfile ;
// console.log(userId);

// console.log("Trích xuất và đổi tên username thành accountName.")
// const { username: accountName} = userProfile;
// console.log(accountName);

// console.log("Trích xuất firstName từ đối tượng profile.")
// const { profile:{firstName}} = userProfile;
// console.log(firstName); 

// console.log("Trích xuất email từ đối tượng contact lồng nhau.")
// const { profile:{contact:{email}}} = userProfile;
// console.log(email); 

// console.log("Trích xuất phone từ contact và gán giá trị mặc định là 'Not provided' nếu nó là null hoặc undefined.")
// const { profile:{contact:{phone = undefined}}} = userProfile;
// console.log(phone);

// console.log("Trích xuất phần tử đầu tiên của mảng permissions và gán nó cho biến readPermission.")
// const { permissions : [...readPermission] } = userProfile;
// console.log(readPermission);

// // ALL IN ONE :
// const {
//     id: userId,
//     username: accountName,
//     profile: {
//         firstName,
//         contact: {
//             email,
//             phone = 'Not provided'
//         }
//     },
//     permissions: [readPermission]
// } = userProfile;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< ... Rest Syntax >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*Khi dấu ba chấm ... được đặt ở phía bên trái của một phép gán, trong quá trình Destructuring,
nó được gọi là Rest Syntax. Nó sẽ gom tất cả các thuộc tính hoặc phần tử còn lại vào một đối tượng hoặc mảng mới.*/
// const product = { name: 'Laptop', price: 1000, brand: 'Dell', color: 'Black' };

// // Bóc tách 'name' và gom phần còn lại vào biến 'details'
// const { name, ...details } = product;

// console.log(name);    // 'Laptop'
// console.log(details); // { price: 1000, brand: 'Dell', color: 'Black' }

// const numbers = [1, 2, 3, 4, 5];

// const [first, ...rest] = numbers;

// console.log(first); // 1
// console.log(rest);  // [2, 3, 4, 5]

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Spread Syntax ... >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*Dấu ba chấm ... khi đặt ở phía bên phải của một phép gán (ví dụ: ...myObject) được gọi là Spread Syntax.
 Nó dùng để "trải" các thuộc tính của một đối tượng hoặc các phần tử của một mảng.
 Mục đích chính là để tạo bản sao hoặc kết hợp các đối tượng/mảng.*/
// const user = { id: 1, name: 'An', role: 'user' };

// // Tạo bản sao mới và ghi đè thuộc tính 'role'
// const updatedUser = { ...user, role : 'admin' };

// console.log(updatedUser); // { id: 1, name: 'An', role: 'admin' }
// console.log(user);        // { id: 1, name: 'An', role: 'user' }

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr); // [1, 2, 3, 4]

//<<<<<<<<<<<<<<<<<<<< Immutability >>>>>>>>>>>>>>>

// const user = { name: 'An', address: { city: 'Hanoi' } };
// const updatedUser = { ...user }; // Sao chép nông

// // Thay đổi thuộc tính của object lồng nhau
// updatedUser.address.city = 'Ho Chi Minh';

// // Lỗi: Object gốc bị thay đổi vì cả hai biến cùng trỏ đến cùng một object address.
// console.log(user.address.city); // 'Ho Chi Minh'
// console.log(user.address === updatedUser.address); // true

// // Cách 1: Sử dụng JSON (đơn giản, nhưng có hạn chế)
// const updatedUserJSON = JSON.parse(JSON.stringify(user));
// updatedUserJSON.address.city = 'HCM';

// console.log(user.address.city);      // "HN" (object gốc không đổi)
// console.log(updatedUserJSON.address.city); // "HCM"
// console.log(user.address === updatedUserJSON.address); // false (hai đối tượng khác nhau)

//<<<<<<<<<<<<<<<<<<< JSON: stringify / parse; replacer / reviver; clone sâu >>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<< JSON.stringify(): Chuyển đổi một đối tượng hoặc mảng JavaScript thành một chuỗi JSON.
//<<<<<<<<<<<<<<<<<<<<<< JSON.parse(): Chuyển đổi một chuỗi JSON thành một đối tượng hoặc mảng JavaScript.

// const user = {
//   id: 1,
//   name: 'An',
//   role: 'user',
// };

// // Chuyển đối tượng JavaScript thành chuỗi JSON
// const jsonString = JSON.stringify(user);
// console.log(jsonString); // {"id":1,"name":"An","role":"user"}

// // Chuyển chuỗi JSON trở lại thành đối tượng JavaScript
// const parsedUser = JSON.parse(jsonString);
// console.log(parsedUser.name); // 'An'

//<<<<<<<<<<<<<<<<<<<<<< replacer in JSON.stringify()
// const user = {
//     id: 'user_123',
//     username: 'john.doe',
//     password: 'superSecretPassword',
//     email: 'john.doe@example.com',
//     pin: '1234'
// };

// function sanitizeData(key, value) {
//     if (key === 'password' || key === 'pin') {
//         return undefined; // Loại bỏ thuộc tính này
//     }
//     return value; // Giữ lại các thuộc tính khác
// }

// // Chuyển đổi đối tượng, loại bỏ mật khẩu và pin
// const safeJson = JSON.stringify(user, sanitizeData);

// console.log(safeJson);    // {"id":"user_123","username":"john.doe","email":"john.doe@example.com"}

//<<<<<<<<<<<<<<<<<<<<<<<<<<< 

// const products = [
//     { id: 'p1', name: 'Laptop', price: 1500, inStock: true, supplierId: 's1' },
//     { id: 'p2', name: 'Mouse', price: 25, inStock: false, supplierId: 's2' },
//     { id: 'p3', name: 'Keyboard', price: 75, inStock: true, supplierId: 's1' }
// ];

// // Chỉ lấy các thuộc tính 'id', 'name' và 'price'
// const reportFields = ['id', 'name', 'price'];

// // Lọc từng đối tượng trong mảng và tạo chuỗi JSON
// const productsReport = JSON.stringify(products, reportFields);

// console.log(productsReport);    // [{"id":"p1","name":"Laptop","price":1500},{"id":"p2","name":"Mouse","price":25},{"id":"p3","name":"Keyboard","price":75}]

// <<<<<<<<<<<<<<<<<<<<<< reviver in JSON.parse() 
// const event = {
//     eventName: 'Team Meeting',
//     eventDate: new Date() // JSON.stringify sẽ chuyển thành chuỗi
// };

// // Bước 1: Chuyển đổi đối tượng có Date thành chuỗi JSON
// const jsonString = JSON.stringify(event);
// console.log(jsonString); // {"eventName":"Team Meeting","eventDate":"2025-08-27T17:00:00.000Z"}

// // Bước 2: Phân tích cú pháp chuỗi JSON
// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.eventDate); // Kết quả: Một chuỗi, không phải đối tượng Date
// console.log(typeof parsedObject.eventDate); // "string"

// // Bước 3: Sử dụng reviver để khôi phục đối tượng Date
// const restoredObject = JSON.parse(jsonString, (key, value) => {
//     // Nếu khóa là 'eventDate' và giá trị là một chuỗi
//     if (key === 'eventDate' && typeof value === 'string') {
//         // Tạo một đối tượng Date mới từ chuỗi
//         return new Date(value);
//     }
//     // Giữ nguyên các giá trị khác
//     return value;
// });

// console.log(restoredObject.eventDate); // Kết quả: Đối tượng Date được khôi phục
// console.log(typeof restoredObject.eventDate); // "object"

//<<<<<<<<<<<<<<<<<<<<<<<<<<<< structuredClone() >>>>>>>>>>>>>>>>>>>>>>>>>....

// const event = {
//     eventName: 'Team Meeting',
//     eventDate: new Date() // JSON.stringify sẽ chuyển thành chuỗi
// };

// // Bước 1: Chuyển đổi đối tượng có Date thành chuỗi JSON
// const jsonString = JSON.stringify(event);
// console.log(jsonString); // {"eventName":"Team Meeting","eventDate":"2025-08-27T17:00:00.000Z"}

// // Bước 2: Phân tích cú pháp chuỗi JSON
// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.eventDate); // Kết quả: Một chuỗi, không phải đối tượng Date
// console.log(typeof parsedObject.eventDate); // "string"

// // Bước 3: Sử dụng reviver để khôi phục đối tượng Date
// const restoredObject = JSON.parse(jsonString, (key, value) => {
//     // Nếu khóa là 'eventDate' và giá trị là một chuỗi
//     if (key === 'eventDate' && typeof value === 'string') {
//         // Tạo một đối tượng Date mới từ chuỗi
//         return new Date(value);
//     }
//     // Giữ nguyên các giá trị khác
//     return value;
// });

// console.log(restoredObject.eventDate); // Kết quả: Đối tượng Date được khôi phục
// console.log(typeof restoredObject.eventDate); // "object"


// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<< sort() , localeCompare() , tie-breaker >>>>>>>>>>>>>>>>>>>>>
// const numbers = [2, 10, 5];
// numbers.sort(); // Chuyển sang string: ['2', '10', '5']
// console.log(numbers); // [10, 2, 5] (kết quả sai mong muốn)

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];

// // sort by value
// items.sort((a, b) => b.value - a.value);
// console.log(items);

// // sort by name
// items.sort((a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

// console.log(items);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const products = [
//   { name: 'Bút', price: 20000 },
//   { name: 'Vở', price: 10000 },
//   { name: 'Tẩy', price: 10000 },
// ];

// // Sắp xếp tăng dần theo giá (price), nếu giá bằng nhau (== 0), sắp xếp theo tên (name)
// products.sort((a, b) => {
//   // Tiêu chí 1: Sắp xếp theo giá
//   const priceDifference = a.price - b.price;

//   // Nếu giá bằng nhau, chuyển sang tiêu chí 2
//   if (priceDifference === 0) {
//     return a.name.localeCompare(b.name);
//   }
//   return priceDifference;
// });

// console.log(products);

// <<<<<<<<<<<<<<<<<<<<<<,,,,,

// const products = [
//   { name: 'Bút', price: 20000 },
//   { name: 'Vở', price: 10000 },
//   { name: 'Tẩy', price: 10000 },
// ];

// const productsCopy = [...products].sort((a,b)=>{
//     return a.price - b.price || a.name.localeCompare(b.name);
// })
// console.log(productsCopy);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Scope >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Global scope
// let globalMessage = 'Hello, world!';

// function outerFunction() {
//   // outerFunction's scope
//   let outerMessage = 'Hello from outer!';

//   function innerFunction() {
//     // innerFunction's scope
//     let innerMessage = 'Hello from inner!';
//     console.log(innerMessage); // OK: trong cùng scope
//     console.log(outerMessage); // OK: truy cập scope cha
//     console.log(globalMessage); // OK: truy cập global scope
//   }

//   innerFunction();
//   // console.log(innerMessage); // Lỗi: không thể truy cập scope con
// }
// outerFunction();

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Closure >>>>>>>>>>>>>>>>>>>>>>>

// function makeCounter(start) {
//   let c = start;

//   // Hàm này là closure
//   return {
//     next: function() {
//       // Truy cập và thay đổi biến 'c' từ phạm vi cha
//       return ++c; 
//     },
//     reset: function() {
//       // Truy cập và thay đổi biến 'c' từ phạm vi cha
//       c = start;
//     }
//   };
// }

// const counterA = makeCounter(5);
// console.log(counterA.next());   // 6
// console.log(counterA.next());   // 7
// counterA.reset();
// console.log(counterA.next());   // 6 (reset về 5 và tăng lên)

// // Tạo một instance độc lập khác
// const counterB = makeCounter(10);
// console.log(counterB.next());   // 11
// console.log(counterA.next());   // 8 (counterA vẫn độc lập)

// <<<<<<<<<<<<<<<<<<<<<<<< IIFE (Immediately Invoked Function Expression) - Phạm vi Cô lập >>>>>>>>>>>>>>>>>>>>>>>>

// const counter = (function() {
//   let count = 0; // biến private
//   return {
//     increment: function() {
//       count++;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// })();

// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 2
// // console.log(counter.count); // undefined - biến private


// <<<<<<<<<<<<<<<<<<<<< Group by, histogram, indexing  >>>>>>>>>>>>>>>>>>>>>>.
// <<<<<<<<<<<<<<<<<<<<<<<<< Group by:
// const orders = [
//   { id: 1, cat: 'A', amount: 100 },
//   { id: 2, cat: 'B', amount: 200 },
//   { id: 3, cat: 'A', amount: 150 },
// ];

// const byCat = orders.reduce((acc, o) => {
//   // Cách viết ngắn gọn với toán tử ||= (Nullish Coalescing Assignment)
//   // Nếu acc[o.cat] là null hoặc undefined, gán cho nó một mảng rỗng
//   (acc[o.cat] ||= []).push (o);
//   return acc;
// }, {});

// console.log(byCat);
// // {
// //   A: [ { id: 1, cat: 'A', amount: 100 }, { id: 3, cat: 'A', amount: 150 } ],
// //   B: [ { id: 2, cat: 'B', amount: 200 } ]
// // }


// const people = [
//   {id: 1, name: 'An', city: 'HN'},
//   {id: 2, name: 'Bình', city: 'HCM'},
//   {id: 3, name: 'An', city: 'HN'}
// ];

// function groupBy(arr, keyFn) {
//     const result = arr.reduce(( acc , cur)=>{
//         const k = keyFn(cur);
//         (acc[k] ||= []).push(cur)
//         return acc ; 
//     },{})
//     return result ;
// };
// const out = groupBy(people , item => item.name )
// console.log(out) ; 


// <<<<<<<<<<<<<<<<<<<<<<<<< histogram :
// const products = ['apple', 'orange', 'apple', 'banana', 'orange', 'apple'];

// const count = products.reduce((acc, product) => {
//   acc[product] = (acc[product] ?? 0) + 1;
//   return acc;
// }, {});
// console.log(count); // { apple: 3, orange: 2, banana: 1 }

// <<<<<<<<<<<<<<<<<<<<<<<<<<  Indexing :
// const users = [
//   { id: 'u1', name: 'Alice' },
//   { id: 'u2', name: 'Bob' },
//   { id: 'u3', name: 'Charlie' }
// ];
// const userIndex = users.reduce((acc,cur)=>{
//     acc[cur.id] = cur ;
//     return acc ;
// },{})
// console.log(userIndex)

// <<<<<<<<<<<<<<<<<<<<<<<<<< This and method: call/apply/bind >>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<< This:
// const logger = {x
//   prefix: '[LOG]',
//   log(msg) {
//     console.log(this.prefix, msg);   // this trỏ đến đối tượng chứa nó, ở đấy là logger 
//   }
// };
// logger.log('hello'); // [LOG] hello  

// const logger = {
//   prefix: '[LOG]',
//   log(msg) { console.log(this.prefix, msg); }
// };

// const f = logger.log; // Gán phương thức 'log' cho biến 'f'
// try {
//   f('oops'); // Lỗi! this.prefix là undefined
// } catch (e) {
//   console.log('this lost: '); 
// }
// undefined oops

//TypeError không xuất hiện, trong một số môi trường, việc truy cập một thuộc tính của undefined sẽ trả về undefined một cách im lặng.
// undefined.f sẽ in ra oops 

// <<<<<<<<<<<<<<<<<<<<< apply: 
// fn.apply(null, args) === fn(...args)

// const numbers = [1,2,3,4,5]
// console.log(numbers.slice([2]))  // [ 3, 4, 5 ]

// const myObject = {
//   0: 'a',
//   1: 'b',
//   length: 2
// };

// // Vấn đề: myObject.slice() sẽ lỗi vì nó không phải mảng
// // const sliced = myObject.slice(1);

// // Giải pháp: Mượn phương thức slice từ Array.prototype
// const sliced = Array.prototype.slice.apply(myObject, [1]);
// console.log(sliced); // ['b']

// <<<<<<<<<<<<<<<<

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // Sử dụng apply để đẩy tất cả các phần tử của array2 vào array1
// Array.prototype.push.apply(array1, array2);
// console.log(array1); // [1, 2, 3, 4, 5, 6]

// <<<<<<<<<<<<<<<<<<<<<<<<<

// chia 1 mảng lớn ra thành nhiều phần nhỏ ra để tìm min tránh tình trạng over 
// function findMinNumbers ( numbers ) {
//     let min = Infinity ; 
//     const step = 56478 ; 
//     const lengthNumbers = numbers.length;
//     for(let i = 0 ; i < lengthNumbers ; i += step){
//         let submin = Math.min.apply(null, numbers.slice(i, Math.min(i + step, lengthNumbers)))
//         min = Math.min(min , submin) ; 
//     }
//     return min ;
// }
// numbers = [12,3,4,5,6,3,2,24,5,63,2,32]
// console.log(findMinNumbers(numbers))

// <<<<<<<<<<<<<<<<<<<<< bind: 
// const module = {
//   x: 42,
//   getX() {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;        // chỉ tham chiếu đến function 
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42

//<<<<<<<<<<<<<<

// "use strict"; // prevent `this` from being boxed into the wrapper object

// function log(...args) {
//   console.log(this, ...args);
// }
// const boundLog = log.bind("this value", 1, 2);
// const boundLog2 = boundLog.bind("new this value", 3, 4);
// boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6

// <<<<<<<<<<<<<<<<<<<<,,
// // Top-level 'this' is bound to 'globalThis' in scripts.
// this.x = 9;
// const module = {
//   x: 81,
//   getX() {
//     return this.x;
//   },
// };

// // The 'this' parameter of 'getX' is bound to 'module'.
// console.log(module.getX()); // 81

// const retrieveX = module.getX;
// // The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
// console.log(retrieveX()); // 9

// // Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
// const boundGetX = retrieveX.bind(module);
// console.log(boundGetX()); // 81

//<<<<<<<<<<<<<<<<<<<< 
// class LateBloomer {
//   constructor() {
//     this.petalCount = Math.floor(Math.random() * 12) + 1;
//   }
//   bloom() {
//     // Declare bloom after a delay of 1 second
//     setTimeout(this.declare.bind(this), 1000);
//   }
//   declare() {
//     console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
//   }
// }

// const flower = new LateBloomer();
// flower.bloom();
// // After 1 second, calls 'flower.declare()'

// <<<<<<<<<<<<<<<<<<<<

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function () {
//   return `${this.x},${this.y}`;
// };

// const p = new Point(1, 2);
// console.log(p.toString()); // '1,2'
// console.log(p)  // Point { x: 1, y: 2 }

// const z = new Point(1);
// console.log(z)

// // The thisArg's value doesn't matter because it's ignored
// const YAxisPoint = Point.bind(null, 0 /* x */);

// const axisPoint = new YAxisPoint(5);
// axisPoint.toString(); // '0,5'

// axisPoint instanceof Point; // true
// axisPoint instanceof YAxisPoint; // true
// new YAxisPoint(17, 42) instanceof Point; // true

//<<<<<<<<<<<<<< This in Arrow Function >>>>>>>>>>>>>>>>>>>>>>
// const obj = {
//   x: 10,

//   // Arrow function kế thừa this từ ngữ cảnh toàn cục (module/window)
//   // Không nên dùng làm method cho object
//   getXArrow: () => {
//     console.log('getXArrow this:', this);
//     return this.x; // this.x sẽ là undefined
//   },

//   // Phương thức thông thường
//   getX() {
//     console.log('getX this:', this); // this = obj
//     // Arrow function bên trong kế thừa this từ getX()
//     const inner = () => {
//       console.log('inner this:', this);
//       return this.x;
//     };
//     return inner();
//   }
// };

// obj.getX(); // in ra this là obj, trả về 10
// obj.getXArrow(); // in ra this là window/undefined, trả về undefined

//<<<<<<<<<<<<<<<<<<<<<<<<<<<,
// const globalVar = 'Tôi là biến toàn cục';

// // Đối tượng không tạo ra scope
// const obj = {
//   // Arrow function này không có scope riêng
//   arrowFunc: () => {
//     // Nó kế thừa scope từ cha, là scope toàn cục
//     console.log(globalVar); 
//     console.log(this); // this là window/globalThis
//   },

//   // Phương thức này tạo ra một scope mới
//   regularMethod: function() {
//     // Biến này chỉ tồn tại trong scope của regularMethod
//     const methodVar = 'Tôi là biến của phương thức';
//     console.log(globalVar); 
//     console.log(methodVar);
//     console.log(this); // this là obj
//   },
// };

// obj.arrowFunc(); // 'Tôi là biến toàn cục', window/globalThis
// obj.regularMethod(); // 'Tôi là biến toàn cục', 'Tôi là biến của phương thức', obj


//<<<<<<<<<<<<<<< Entries(). fromEntries() , uniqueBy(), groupBy() >>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<< Entries() :
// const user = { name: 'An', age: 25, city: 'Hanoi' };
// const userEntries = Object.entries(user);

// console.log(userEntries);
// // [ ["name", "An"], ["age", 25], ["city", "Hanoi"] ]

// // Ứng dụng: Lọc các thuộc tính của đối tượng
// const filteredEntries = userEntries.filter(([key, value]) => key !== 'age');
// console.log(filteredEntries);
// // [ ["name", "An"], ["city", "Hanoi"] ]

//<<<<<<<<<<<<<<<<<<<<< fromEntries()
// const filteredEntries = [ ["name", "An"], ["city", "Hanoi"] ];
// const newUser = Object.fromEntries(filteredEntries);

// console.log(newUser);
// // { name: "An", city: "Hanoi" }

// <<<<<<<<<<<<<<<<<<<< uniqueBy():
// const people = [
//   {id: 1, name: 'An', city: 'HN'},
//   {id: 2, name: 'Bình', city: 'HCM'},
//   {id: 3, name: 'An', city: 'HN'} // Trùng lặp theo tên 'An'
// ];

// function uniqueBy(arr, keyFn) {
//   const seen = new Set();   // set để kiểm tra trùng lặp
//   const out = [];   // lưu kết quả sau lọc 
//   for (const x of arr) {
//     const k = keyFn(x);    // trích xuất name
//     if (!seen.has(k)) {   // nếu name chưa tồn tại
//       seen.add(k);      // thêm vào seen để lần sau kiểm tra sẽ loại giá trị này
//       out.push(x);   // thêm vào out vì chưa từng xuất hiện trùng lặp
//     }
//   }
//   return out;
// }

// const uniqueByName = uniqueBy(people, p => p.name);

// console.log(uniqueByName);
// // [
// //   {id: 1, name: 'An', city: 'HN'},
// //   {id: 2, name: 'Bình', city: 'HCM'},
// // ]

