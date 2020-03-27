const student = [
  { id: 11, name: "Nazmus" },
  { id: 12, name: "Shakib" },
  { id: 14, name: "Sourav" }
];

// first way to get all the elements or part of element using for loop
// const stdRecord = [];
// for (let i = 0; i < student.length; i++) {
//   const element = student[i];
//   const stdName = element.name;
//   stdRecord.push(stdName);
// }
// console.log(stdRecord);

// second way to get all the elements or part of element using short line function
const names = student.map(element => element.name);
const ids = student.map(element => element.id);
const bigger = student.filter(element => element.id > 11);
const bigger1 = student.find(element => element.id > 11);
console.log(bigger1);
console.log(bigger);
console.log(ids);
console.log(names);
