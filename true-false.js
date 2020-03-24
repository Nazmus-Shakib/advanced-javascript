// where we can get false value in variable
// const age = 0;
// "", undefined, null, NaN

// where we can get true value in variable
// "0", " ", [], {},
let name = NaN;
console.log(name);
if (name) {
  console.log("It is true");
} else {
  console.log("It is false");
}
