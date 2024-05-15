function allPositiveNumbers(numbersArray) {
    return numbersArray.every(number => number > 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(allPositiveNumbers(numbers)); 

numbers = [-1, 2, 3, 4, 5];
console.log(allPositiveNumbers(numbers)); 
