const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = num.slice(2, 5);
// console.log(part);
// console.log(num);

const part1 = num.splice(2, 4, 66, 77, 88, 99);
// console.log(part1);
// console.log(num);

const together = num.join(",");
console.log(together);
