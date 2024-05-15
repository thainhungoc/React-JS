const sum = (arr) =>{
    let total = 0;
    for(let number of arr){
        if(number % 2 ==0){
            total += number;
        }
    }
    return total;
};
let num = [1,2,3,4,5,6];
console.log(sum(num));