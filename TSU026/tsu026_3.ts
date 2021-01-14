namespace tsu026_3 {
  console.log(Number("1"));
  console.log(Number(1));
  console.log(Number(true));
  console.log(Number(false));
  console.log(Number({ valueOf: () => 1 }));
  console.log(Number({ valueOf: () => true }));
}
