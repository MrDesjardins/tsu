let str = "Hello";
let str2 = "World";
let TSU15_MAX_LENGTH2 = 10;
if (str.length > TSU15_MAX_LENGTH2) {
  str = str.substr(0, TSU15_MAX_LENGTH2);
}
str = "[" + str + "]";
if (str2.length > TSU15_MAX_LENGTH2) {
  str2 = str2.substr(0, TSU15_MAX_LENGTH2);
}
str2 = "(" + str2 + ")";


console.log(str + " " + str2);
