function sum(numbersArray) {
    return numbersArray.reduce((total, currentNumber) => total + currentNumber, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers)); 

numbers = [10, 20, 30];
console.log(sum(numbers));
