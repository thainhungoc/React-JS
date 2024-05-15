function allNumbersDivisibleBy(array, a) {
    return array.every(number => number % a === 0);
}
let numbers = [10, 20, 30, 40, 50];
let soChia = 10;
console.log(allNumbersDivisibleBy(numbers, soChia)); 

numbers = [10, 21, 30, 40, 50];
console.log(allNumbersDivisibleBy(numbers, soChia)); 

