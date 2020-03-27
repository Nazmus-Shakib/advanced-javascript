// where we can get output as undefined:
//1. let num;
//2. if no return value in function
// function add(num1, num2) {
//   console.log(num1 + num2);
//   return;
// }
// const result = add(5, 7);
// console.log(result);

//3. if one or both parameter value is missing in function
// function add(num1, num2) {
//   console.log(num1, num2);
// }
// const result = add(5);
// console.log(result);

//4. object parameter missing
// const student = { id: 1, name: "Shakib" };
// console.log(student.age);

//5. let fun = undefined;
// console.log(fun);

let age = [2, 3, 4];
console.log(age[11]);
