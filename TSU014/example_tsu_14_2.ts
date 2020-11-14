function varLetFunction() {
  var myStringValue = "varStringValue";
  let myStringValueLet = "letStringValue";
  if (true) {
    var myStringValue = 123; // Error here
    let myStringValueLet = 12345;
  }
}
