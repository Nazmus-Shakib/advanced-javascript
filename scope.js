// we can't access to a value that is out of scope
// global variable can be access from anywhere
// if we declare a variable using let or const, we can't access it from outside of the scope or block({}) in a function & let and const can't hoist value.
// if we declare a variable using var, we can access it from outside of the scope or block({}) in a function & var can hoist value (pull up the declaration part only (var Name ) outside of a block, not value (= "Shakib")). var gives an undefined output if you call it before declaration.
let bonus = 20;

function sum(a, b) {
  let result = a + b + bonus;
  //console.log(bonus);
  if (result > 9) {
    var mood = "happy";
    mood = "sad";
    mood = "fishy";
    console.log(mood);
  }
  console.log(day); // const & let don't allow you to call it before declaration.
  let day = "friday";

  return result;
}

const total = sum(9, 8);
// console.log(bonus);
// console.log(total);
