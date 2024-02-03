let obj = {};

// ToNumber called on both operand -> ToPrimitive(obj, hint: number) -> OrdinaryToPrimitive(obj, hint: number) -> ["valueOf", "string"]
console.log(10 - obj); // NaN