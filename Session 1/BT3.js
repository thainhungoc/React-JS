let array = [1, -4, 5.5, 0, -10, '7', 12, 'Hello', 9];

let integers = array.filter(item => {
  return Number.innteger(item) && item > 0;
});

console.log(integers); 
