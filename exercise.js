//                  Week 03 - JS_Advanced_1
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
//              ===================



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<  1) Bài tập (8 bài)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1)	Cho mảng users [{id, name, age}]. Tạo mảng tên những người >= 18 bằng filter+map.
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 17 },
  { id: 3, name: 'Charlie', age: 30 },
  { id: 4, name: 'David', age: 16 },
  { id: 5, name: 'Eve', age: 22 }
];

const usersFilter = users.filter((ele) => { return ele.age >= 18 })    // lọc các đối tượng >= 18 tuổi.
const usersMap = usersFilter.map((ele) => { return ele.name });          // chỉ giữ lại name.
console.log(usersMap)

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 2)	Tính tổng đơn hàng: carts [{name, price, qty}]. Dùng reduce để ra tổng tiền và số mặt hàng.

const carts = [
  { name: 'Sữa tươi', price: 20000, qty: 2 },
  { name: 'Bánh mì', price: 5000, qty: 5 },
  { name: 'Nước ngọt', price: 15000, qty: 1 }
];

const result = carts.reduce((pre, cur) => {
  pre.total += cur.price * cur.qty;
  pre.quantity += cur.qty;
  return pre;
}, { total: 0, quantity: 0 });   // initialValue là 1 object 2 thuộc tính để tiện lưu trữ giá trị

console.log(`Tổng tiền: ${result.total}\nSố mặt hàng: ${result.quantity}`);

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	3	Viết hàm counter() dùng closure: có next() trả về số tăng dần, reset().

function counter(starts) {
  let count = starts;
  return {
    next: function () {
      return ++count;
    },
    reset: function () {
      count = starts;
      return count;
    }
  }
}

const test = counter(98);
console.log(test.next())    // 99
console.log(test.next())    // 100
console.log(test.reset())   // 98

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	4	Sắp xếp mảng products theo price tăng/giảm; xử lý khi price bằng nhau theo name.

const iphones = [
  { name: 'iPhone 15 Pro', storage: '256GB', price: 29000000 },
  { name: 'iPhone 15', storage: '128GB', price: 22000000 },
  { name: 'iPhone 14', storage: '128GB', price: 18000000 },
  { name: 'iPhone 15 Pro Max', storage: '256GB', price: 34000000 },
  { name: 'iPhone 14 Pro', storage: '128GB', price: 25000000 },
  { name: 'iPhone 13', storage: '128GB', price: 18000000 }, // Cùng giá với iPhone 14
  { name: 'iPhone SE', storage: '64GB', price: 10000000 },
  { name: 'iPhone 15', storage: '128GB', price: 22000000 }  // Cùng giá và tên với phần tử thứ 2
];

const iphonesCopy = [...iphones];    // tránh mutate 
iphonesCopy.sort((a,b)=>{    // in-place function 
    return (a.price - b.price) || a.name.localeCompare(b.name) ;   // nếu chênh lệch giá = 0 thì kiểm tra name 
});
console.log(iphonesCopy);

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	5	Chuyển danh sách key-value thành object và ngược lại (entries <-> fromEntries).

const list = [
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'Hanoi'],
  ['isAdmin', false],
];

const fromEntries = Object.fromEntries(list);
console.log(fromEntries);    // { name: 'Alice', age: 30, city: 'Hanoi', isAdmin: false }

const entries = Object.entries(fromEntries);
console.log(entries);
//[
//   [ 'name', 'Alice' ],
//   [ 'age', 30 ],
//   [ 'city', 'Hanoi' ],
//   [ 'isAdmin', false ]
// ]

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	6	Viết hàm groupBy(arr, keyFn) -> object nhóm phần tử theo giá trị key.
const employees = [
    { id: 1, name: 'Lê Văn A', position: 'DS', city: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Thị B', position: 'DEVops', city: 'TP. Hồ Chí Minh' },
    { id: 3, name: 'Trần Văn C', position: 'AI', city: 'Đà Nẵng' },
    { id: 4, name: 'Phạm Thị D', position: 'DS', city: 'Hà Nội' },
    { id: 5, name: 'Hoàng Văn E', position: 'DE', city: 'Hải Phòng' },
    { id: 6, name: 'Đỗ Thị F', position: 'DEVops', city: 'TP. Hồ Chí Minh' },
    { id: 7, name: 'Ngô Văn G', position: 'AI', city: 'Cần Thơ' },
    { id: 8, name: 'Vũ Thị H', position: 'DS', city: 'Hà Nội' },
    { id: 9, name: 'Bùi Văn I', position: 'DE', city: 'TP. Hồ Chí Minh' },
    { id: 10, name: 'Lý Thị K', position: 'AI', city: 'Đà Nẵng' },
    { id: 11, name: 'Dương Văn L', position: 'DS', city: 'Cần Thơ' },
    { id: 12, name: 'Đào Thị M', position: 'DE', city: 'Hà Nội' },
    { id: 13, name: 'Trần Văn N', position: 'DEVops', city: 'Hải Phòng' },
    { id: 14, name: 'Hoàng Thị O', position: 'AI', city: 'TP. Hồ Chí Minh' },
    { id: 15, name: 'Ngô Văn P', position: 'DE', city: 'Đà Nẵng' }
];

function groupBy(arr, key) {    // arr là mảng cần xếp, key là thuộc tính để sort 
    return arr.reduce((pre, cur) => {
        (pre[cur[key]] ||= []).push(cur);    // truy cập lấy value của thuộc tính keykiểm tra nó tồn tại trong previous chưa (...)
        return pre;           // (...) nếu chưa thì khởi tạo mảng rỗng và đưa cur vào, mảng rỗng thuộc value. nếu đã tồn tại thì push cur vào
    }, {});   // khởi tạo là 1 object rỗng
}
console.log(groupBy(employees, "position"));

// {
//   DS: [
//     { id: 1, name: 'Lê Văn A', position: 'DS', city: 'Hà Nội' },
//     { id: 4, name: 'Phạm Thị D', position: 'DS', city: 'Hà Nội' },
//     { id: 8, name: 'Vũ Thị H', position: 'DS', city: 'Hà Nội' },
//     { id: 11, name: 'Dương Văn L', position: 'DS', city: 'Cần Thơ' }
//   ],
//   DEVops: [
//     {
//       id: 2,
//       name: 'Nguyễn Thị B',
//       position: 'DEVops',
//       city: 'TP. Hồ Chí Minh'
//     },
//     {
//       id: 6,
//       name: 'Đỗ Thị F',
//       position: 'DEVops',
//       city: 'TP. Hồ Chí Minh'
//     },
//     {
//       id: 13,
//       name: 'Trần Văn N',
//       position: 'DEVops',
//       city: 'Hải Phòng'
//     }
//   ],
//   AI: [
//     { id: 3, name: 'Trần Văn C', position: 'AI', city: 'Đà Nẵng' },
//     { id: 7, name: 'Ngô Văn G', position: 'AI', city: 'Cần Thơ' },
//     { id: 10, name: 'Lý Thị K', position: 'AI', city: 'Đà Nẵng' },
//     {
//       id: 14,
//       name: 'Hoàng Thị O',
//       position: 'AI',
//       city: 'TP. Hồ Chí Minh'
//     }
//   ],
//   DE: [
//     { id: 5, name: 'Hoàng Văn E', position: 'DE', city: 'Hải Phòng' },
//     {
//       id: 9,
//       name: 'Bùi Văn I',
//       position: 'DE',
//       city: 'TP. Hồ Chí Minh'
//     },
//     { id: 12, name: 'Đào Thị M', position: 'DE', city: 'Hà Nội' },
//     { id: 15, name: 'Ngô Văn P', position: 'DE', city: 'Đà Nẵng' }
//   ]
// }

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	7	Dùng bind để cố định this cho method log của object logger.

const logger = {
    text : "Dùng bind để cố định this cho method log của object logger.",
    log : function( arg = this.text){   // nếu không có input thì nó sẽ in text của object
        console.log(arg);
    }
}
const myFunc = logger.log;
myFunc();   // undefined  --- do chưa cố định this 

const bindFunc = logger.log.bind(logger) ; // chỉ định object logger sẽ luôn là this khi bindFunc được gọi
bindFunc();  // Dùng bind để cố định this cho method log của object logger.

bindFunc("Code & Code & Code");  // Code & Code & Code

//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>

// 	8	Chuyển object với giá trị là số thành JSON và parse lại, kiểm tra bằng === (chú ý kiểu).

const object = {
    numbers : [1,2,3,4,5],
    13254 : "String"
}

const objectConvert = JSON.parse(JSON.stringify(object));

console.log(typeof object , object);                 //object { '13254': 'String', numbers: [ 1, 2, 3, 4, 5 ] }
console.log(typeof objectConvert, objectConvert);    //object { '13254': 'String', numbers: [ 1, 2, 3, 4, 5 ] }
console.log(object === objectConvert);  // false
//  Object, Array, Function là kiểu dữ liệu tham chiếu nên === sẽ so sánh bằng địa chỉ tham chiếu của chúng 


// 3) Mini Project
// Xây dựng module quản lý giỏ hàng: thêm/sửa/xóa sản phẩm, tính tổng tiền,
//  áp mã giảm giá %, export các hàm. Viết các test case ở cuối file để chứng minh chạy đúng.

const vouchers = {       // Đưa lên đầu để tránh hoisting.
    jh7w: 10,
    l03m: 30,
    u9r8: 50,
    g7t5: 0,
    x4c3: 100
};

function _addToCart(cart, product) {
    if (!cart[product.idProduct]) {      // Phủ định của undefined để thêm vào 
        cart[product.idProduct] = { ...product, quantity: 1 };   // copy product và thêm quantity
    } else {
        cart[product.idProduct].quantity++;   // Nếu đã tồn tại thì tăng quantity lên 1
    }
};
function _removeFromCart(cart, idProduct) {
    if (cart[idProduct]) {    // Nếu tồn tại sẽ cho ra truthy và xoá 
        delete cart[idProduct];
    }
};
function _updateQuantity(cart, idProduct, newQuantity) {
    if (cart[idProduct] ) {     // check xem product có trong cart không 
        if(newQuantity > 0){
            cart[idProduct].quantity = newQuantity;
        } else {
            delete cart[idProduct];     // xoá sản phẩn nếu quantity <= 0 ;
        }
    }
};
function _calculateTotal(cart, discount) {
    const total = Object.values(cart).reduce((sum, product) => {   // Object.values đưa value của cart về 1 array 
        sum += product.quantity * product.price;     // dùng reduce để sum trở thành biến tích luỹ
        return sum;
    }, 0);
    return total - total * discount / 100;              // tổng = tổng - tổng * giảm giá      ( discount từ myCart ) 
};

function _applyDiscount(voucher) {
    return vouchers[voucher] ?? 0;          // sử dụng nullish để kiểm tra, nếu không tồn tại trong vouchers sẽ gán = 0 
}


//<<<<<<<<<<<<<<<<<<<<< 
function CartManager() {
    const cart = {};
    let discount = 0;
    return {
        getCart: () => { return { ...cart } },
        addToCart: (product) => _addToCart(cart, product),
        removeFromCart: (idProduct) => _removeFromCart(cart, idProduct),
        updateQuantity: (idProduct, newQuantity) => _updateQuantity(cart, idProduct, newQuantity),
        calculateTotal: () => _calculateTotal(cart, discount),
        applyDiscount: (voucher) => discount = _applyDiscount(voucher)
    }
}

// =================== TEST CASE ===================
const product = { name: "Mouse", idProduct: "a3R6", price: 200 };
const product2 = { name: "Keyboard", idProduct: "b7h5", price: 50 };

const myCart = CartManager();

console.log('--- Test 1: Thêm sản phẩm ---');
myCart.addToCart(product);
myCart.addToCart(product);
myCart.addToCart(product2);
console.log(myCart.getCart());
// Expected: Msc x2, Keyboard x1

console.log('\n--- Test 2: Tính tổng ban đầu ---');
console.log(myCart.calculateTotal());
// Expected: 2*200 + 1*50 = 450

console.log('\n--- Test 3: Áp voucher jh7w (10%) ---');
myCart.applyDiscount('jh7w');
console.log(myCart.calculateTotal());
// Expected: 405

console.log('\n--- Test 4: Áp voucher l03m (30%) ---');
myCart.applyDiscount('l03m');
console.log(myCart.calculateTotal());
// Expected: 315

console.log('\n--- Test 5: Xóa sản phẩm a3R6 ---');
myCart.removeFromCart('a3R6');
console.log(myCart.getCart());
console.log(myCart.calculateTotal());
// Expected: Keyboard x1 → 50 * 0.7 = 35

console.log('\n--- Test 6: Cập nhật Keyboard lên 5 ---');
myCart.updateQuantity('b7h5', 5);
console.log(myCart.getCart());
console.log(myCart.calculateTotal());
// Expected: 250 * 0.7 = 175

console.log('\n--- Test 7: Voucher không tồn tại ---');
myCart.applyDiscount('xxxx');
console.log(myCart.calculateTotal());
// Expected: 250 vì discount = 0 

console.log('\n--- Test 8: Voucher 100% (x4c3) ---');
myCart.applyDiscount('x4c3');
console.log(myCart.calculateTotal());
// Expected: 0 (miễn phí hoàn toàn)

console.log('\n--- Test 9: Cập nhật Keyboard = 0 (tự động xóa) ---');
myCart.updateQuantity('b7h5', 0);
console.log(myCart.getCart());
// Expected: {}