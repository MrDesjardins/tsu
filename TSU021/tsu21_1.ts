namespace tsu21_1 {
  const var1: number = 100;
  const var2: string = "abc";
  const var3: boolean = true;
  const var4: number[] = [1, 3, 5];
  const var5: null = null;
  const var6: undefined = undefined;
  // const var7: never;
  const var8: [number, string] = [1, "2"];
  const var9: Symbol = Symbol("Var9");
  enum MyEnum {
    Val1,
    Val2,
  }
  const var10: MyEnum = MyEnum.Val1;
  const var11: void = (() => {})();
  const var11_1: void = undefined;
  const var12: unknown = 123;
  const var13: BigInt = BigInt(1);

  function printAndType(v: any): void {
    console.log(v);
    console.log(typeof v);
  }
  printAndType(var1);
  printAndType(var2);
  printAndType(var3);
  printAndType(var4);
  printAndType(var5);
  printAndType(var6);
  // printAndType(var7);
  printAndType(var8);
  printAndType(var9);
  printAndType(var10);
  printAndType(var11);
  printAndType(var11_1);
  printAndType(var12);
  printAndType(var13);
}
