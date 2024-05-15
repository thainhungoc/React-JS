// some : kiểm tra xem có ít nhất 1 phần tử thỏa mãn điều kiện
let arr = [3,8,9,12];
let check = arr.some((element)=> element % 3 == 0);
console.log(check)