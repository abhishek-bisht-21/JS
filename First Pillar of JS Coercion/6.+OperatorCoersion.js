console.log(typeof +"100") // Unary + operator calls ToNumber

let obj = {}
console.log(120 + obj) // ToPrimitive on Both Operands -> toString method return [object Object]
// Hence Output: 120[object Object]