function add(num1, num2) {
  //console.log(arguments); // array like object
  // console.log(...arguments); // spread out the (array like object) values
  console.log([...arguments]); // converts the object into a real array
  return num1 + num2; // now we can use for loop to get the array sum
}
const result = add(5, 2, 7, 6, 5);
console.log(result);
