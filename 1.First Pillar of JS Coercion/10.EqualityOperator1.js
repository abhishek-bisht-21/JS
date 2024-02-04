//  Abstract Equality -> Checks the Type -> If Type Of both operand are same =>  Performs Strict Equality Comparison
// If the Type are not same and operands are (null and undefined) then it performs coercion


console.log(null == undefined); // true 
console.log(undefined == null) // true

console.log(9 == "9") // true ToNumber("9")
console.log(1 == true) // true toNumber(true)

console.log("0" == false); // true
