let x = 1;
let y = 2;
console.log(x); // Print 1
console.log(y); // Print 2
function func() {
  // console.log(x); // Error
  console.log(y); // Print 2
  let x = 3;
  console.log(x); // Print 3
}
console.log(x); // Print 1
func();
console.log(x); // Print 1