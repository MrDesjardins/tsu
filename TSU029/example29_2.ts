namespace tsu29_2{
  const initialVariable: number =1;
  //const converted = initialVariable as string; // Does not work
  const converted = initialVariable as any as string; // Work but not real
  console.log(converted); // Type string but really a number
}