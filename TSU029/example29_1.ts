namespace tsu29_1{
  declare function getDataFromAPI(): any;
  const response:any = getDataFromAPI();
  const typedResponse = response as string;
  console.log(typedResponse);
}