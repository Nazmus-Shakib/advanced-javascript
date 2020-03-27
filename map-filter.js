const number = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   const result = element * element;
//   output.push(result);
// }

// number.map(function(element, index, array) {
//   console.log(element, index, array); // we can define three parameter in map
// });

// const result = number.map(function(element) {
//   return element * element;
// }); // no.1 function

// const square = element => element * element; // short way to write no.1 function

const result = number.map(x => x * x); // proper way to write map function in short way
console.log(result);

const bigger = number.filter(x => x > 8);
console.log(bigger);

const isThere = number.find(x => x > 5);
console.log(isThere);
