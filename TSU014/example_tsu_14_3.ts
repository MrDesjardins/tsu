// Global scope
let v1 = 1;
console.log(v1);
function functionWithTwoIfs() {
  // Function scope
  let v2 = 2;
  if (v1 === 1) {
    // First IF scope
    let v3 = 3;
    console.log(v1);
    console.log(v2);
    // Second If Scope
    if (v2 == 2) {
      let v4 = 4;
      console.log(v1); // Access to global
      console.log(v2); // Access to function
      console.log(v3); // Access first IF
      console.log(v4); // Access second IF
    }
  }
}
