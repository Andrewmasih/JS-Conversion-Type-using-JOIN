/* this example of converting arrays to string using join method take 'seperator as an argument, it is the character that will seperate item in the newly created string, it can be a comma,dot,or even a word or a number' */

let colours = ["red", "blue", "yellow", "black", "white"];

let noDelimiter = colours.join("");

let withComma = colours.join(",");

let withSpace = colours.join("  ");

let withNumber = colours.join("1");

let withWord = colours.join("and");

console.log("without a delimiter: " + noDelimiter);
console.log("with a comma: " + withComma);
console.log("with a space: " + withSpace);
console.log("with a number: " + withNumber);
console.log("with a word: " + withWord);
console.log(colours);

