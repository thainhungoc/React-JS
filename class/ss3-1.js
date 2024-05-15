let arr = [];

let form = document.getElementById("form");
form.addEventListener('submit',function (e) {
    // ngăn chặn load lại trang
    e.preventDefault();
    let valueInput = parseInt(document.getElementById("number").value); 
    // ép về số
    console.log(valueInput);
    // thêm vào mảng
    arr = [...arr,valueInput]; // spread operator
    // tính tông 
    let sum = arr.reduce((temp,a)=>temp+a,0);
    document.getElementById("result").innerText = sum;
    document.getElementById("arr").innerText = arr;
    document.getElementById("number").value = ""
})