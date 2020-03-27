const num1 = 2;
const num2 = "2";
// (==) don't check the type of the variable, only checks value. when it get two different type data type values, it converts the type of both values to nearby value, then it convert the value in same data type (according to some rules) and compare it and shows the output, shouldn't use it while comparison.
//(===) checks the type of the variable (strick check), checks both value and types.
if (num1 === num2) {
  console.log("Condition is True");
} else {
  console.log("Condition is False");
}
