namespace tsu_18_1 {
  const MAX_LENGTH = 10;
  function execute(str: string, str2: string) {
    const x = "[" + shorten(str) + "]";
    const y = "(" + shorten(str2) + ")";
    const result = x + " " + y;
    return result;
  }

  function shorten(str: string) {
    if (str.length > MAX_LENGTH) {
      return str.substr(0, MAX_LENGTH);
    }
    return str;
  }

  console.log(execute("Hello", "World"));
}
