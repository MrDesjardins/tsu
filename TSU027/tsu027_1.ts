namespace TSU027_1 {
  let hugeNumber = Number.MAX_SAFE_INTEGER + 1;
  console.log(hugeNumber);
  console.log(hugeNumber + 1);

  let hugeBigInt = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
  console.log(hugeBigInt);
  console.log(hugeBigInt + 1n);
}
