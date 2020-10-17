const number = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// number.map(function(element, index, array) {
//   console.log(element, index, array); // we can define three parameter in map
// });

// const result = number.map(function(element) {
//   return element * element;
// }); // no.1 function

// const square = element => element * element; // short way to write no.1 function

const result = number.map(x => x * x); // map goes round to all elements to check and returns result in an array
console.log(result);

const bigger = number.filter(x => x > 5); // filter is used to select some element and returns result in an array
console.log(bigger);

const isThere = number.find(x => x > 5); // find returns only the first element of the result
console.log(isThere);

// const red = number.reduce(x => x > 5);
// console.log(red);

const forEach = number.forEach(x => console.log(x)); // to capture each element 
//console.log(forEach);