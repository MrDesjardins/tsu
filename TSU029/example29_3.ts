namespace tsu29_1 {
  interface MyObject {
    id: number;
    name: string;
  }

  // const obj2: MyObject = {id:1, id2:2} as MyObject; // Name is missing, id2 is additional
  const obj3: MyObject = ({
    id: 1,
    id2: 2,
  } as any) as MyObject;
  console.log(obj3);
}
