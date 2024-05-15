// từ khóa let 
//                              * phạm vi truy cập: trong block scope{}

// phạm vi truy cập của var là global trừ function
// phạm vi của let là local

//                              * phạm vi hoisting là gán giá trị trước khi khai báo
// var được phép gán giá trị trước khai báo(hoisting) còn let thì không


// const: khai báo hăng số - không cho phép gán lại giá trị cho biến
// khi khai báo const phải gán giá trị luôn


// 2. Template string
// cho phép khai báo và chỉnh sửa chuỗi 1 cách linh hoạt
// let stuName ="Ngọc"
// let class ="PTIT_HCM"
// let str = "chào bạn ${stuName} đến với lớp${class}";


// arrow function - hàm mũi tên
// const function = (params) => {statements}
// thành phần quan trọng nhất của hàm: params (tham số) và return (giá trị trả về) 

// bài toán : tạo hàm tính tổng hai số
// const sum = (a, b) => {return a+b;}

// rút gọn 
// nếu chỉ có một tham số thì không cần dấu ngoặc tròn - ex: const sum = a => {return Math.pow(a, 2);}
// nếu chỉ có một câu lệnh return thì có thể bỏ dấu block scope{} và từ khóa return


// Destructoring - phá vỡ cấu trúc áp dụng cho : array và object 
// array 
let arrInteger = [1, 2, 3, 4, 5];
// let [a,b] = arrInteger;
// console.log(a,b);
// object
let student = {
    "id": 1,
    name: "khánh sky",
    age: 18
}
let { name, age } = student;
console.log(name, age);

//   Rest Parameter -  tham số còn lại 
// tính tổng n số chưa biết 
const sum = (...param) => {  // 1,2,3,...
    // param là 1 array
    return param.reduce((temp, a) => temp + a, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
// chú ý : kết hợp với destructoring
let [a, b, ...param] = arrInteger;
console.log(param);

//  Spread operator : nhóm lại thành cấu trúc : array và object
let newArray = [2000, 1000, ...arrInteger, 100, 200]

let arrayInt = [1, 2, 3, 4, 5];
let insertArrray = [100, 99, 98];
// index = 2;
let arrA = arrayInt.slice(0, 2);
let arrB = arrayInt.slice(2, arrayInt.length)
console.log(arrA, arrB);

let result = [...arrA, ...insertArrray, ...arrB]
console.log(result);