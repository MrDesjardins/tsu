namespace tsu023_1 {
  let x: number = 17;
  console.log("Base 10");
  console.log(x);
  x = parseInt("17");
  console.log(x);
  x = parseInt("17", 10);
  console.log(x);
  console.log("Base 8");
  x = 0o17;
  console.log(x);
  x = parseInt("17", 8);
  console.log(x);
  console.log("Base 16");
  x = 0x17;
  console.log(x);
  x = parseInt("17", 16);
  console.log(x);
  console.log("Base 2");
  x = 0b111;
  console.log(x);
  x = parseInt("111", 2);
  console.log(x);
}
