// ToString -> "" + value

console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); // {} -> [object Object]

console.log("" + [1,2,3]); // 1,2,3


console.log("" + [null, undefined]); // ,


// ToNumber
console.log(0 - "010"); // get converted to decimal number
console.log(0 - "O10");
console.log(0 - 010); // gets converted to Octal Number
console.log(0 - "0xb") // gets converted to hexadecimal
console.log([] - 1); // Empty array gets converted to 0
console.log([""] - 1); // Empty array with string gets converted to 0
