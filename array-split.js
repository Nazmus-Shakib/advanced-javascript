const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = num.slice(2, 5); // slice cuts a part of array, from the beginning till the previous index of the last index number but no changes in main array
// console.log(part);
// console.log(num);

//const removed = num.splice(2, 5); // splice cuts second parameter element number from the starting index and changes the main array
const removed = num.splice(2, 5, 66, 77, 88, 99, 101); // can add same number of new elements after removing previous elements
// console.log(removed);
// console.log(num);

const together = num.join(","); // to print together all elements after splice operation
console.log(together);
