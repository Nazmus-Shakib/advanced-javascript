// if we call or return one function from another function, then it will create a closed environment and will work only inside it according to the scope rules and if we assign it in different variable to call, they will keep their own values as much as we call it and keep an external variable. this is called closure.

function stopWatch() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());
console.log(clock2());
