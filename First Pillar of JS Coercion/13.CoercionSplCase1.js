// ToString -> "" + value

console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); // {} -> [object Object]

console.log("" + [1,2,3]); // 1,2,3


console.log("" + [null, undefined]); // ,