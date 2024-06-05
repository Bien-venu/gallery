function transformString(input) {
  const length = input.length;
  let output = "";

  if (length % 15 === 0) {
    output = input
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    output = input.split("").reverse().join("");
  } else if (length % 5 === 0) {
    output = input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else {
    output = input;
  }

  return output;
}

console.log("The output of Coding Challenge 2: String Transformation are ");
console.log('1 '+transformString("Hamburger"));
console.log("2 " + transformString("Pizza"));
console.log("3 " + transformString("Chocolate Chip Cookie"));
