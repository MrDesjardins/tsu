const TSU15_MAX_LENGTH = 10;
function executeTsu15_1(str: string, str2: string) {
  const x = "[" + executeTsu15_2(str) + "]";
  const y = "(" + executeTsu15_2(str2) + ")";
  const result = x + " " + y;
  return result;
}

function executeTsu15_2(str: string) {
  if (str.length > TSU15_MAX_LENGTH) {
    return str.substr(0, TSU15_MAX_LENGTH);
  }
  return str;
}

console.log(executeTsu15_1("Hello", "World"));
