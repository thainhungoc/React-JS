let arr=[1, 2,3,4,5,6,7,8,9,10];
arr.forEach((number, index)=>
{
    let a=Math.floor(Math.random()*100)
    arr[index]= a;
} )
console.log(arr);

// Map: duyet qua lần lượt các phần tử và trả về một mảng khác 
// dựa trên điều kiện của hàm callback
let num = [3, 5, 7, 9]
let array = num.map((number, index)=>  Math.pow(number, 3)) 
console.log(array);

let a =10;
a = array.map


