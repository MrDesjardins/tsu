let tsu14_1 = 1;
console.log(tsu14_1);
{
  // console.log(tsu14_1); // Error cause defined next line
  let tsu14_1 = 2;
  console.log(tsu14_1);
}
console.log(tsu14_1);
{
  tsu14_1 = 2; // Change global scope
}
console.log(tsu14_1);
