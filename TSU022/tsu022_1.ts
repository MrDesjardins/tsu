namespace tsu022 {
  let x = 1;
  printAndType(x);

  let x1: number;
  x1 = 1;
  printAndType(x1);

  let x2: number = 1;
  printAndType(x2);

  let x3; // Any type
  printAndType(x3); // Undefined becaues never initialized

  let x4 = 1;
  printAndType(x4);

  const x5 = 1;
  printAndType(x5);

  const x6: number = 1;
  printAndType(x6);

  function printAndType(v: any): void {
    console.log(v);
    console.log(typeof v);
  }
}
