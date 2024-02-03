let obj = {};

// ToNumber called on both operand -> ToPrimitive(obj, hint: number) -> OrdinaryToPrimitive(obj, hint: number) -> ["valueOf", "string"]
console.log(10 - obj); // NaN

let obj1 = { x: 7, y: 8 };
console.log(100 - obj1); // NaN

let obj2 = { x: 7, valueOf() { return 99 } };
console.log(100 - obj2); // 1

let obj3 = { x: 9, valueOf() { return obj2 }, toString() { return "99" } };
console.log(100 - obj3); // 1

let obj4 = { x: 10, toString() { return {} } };
console.log(100 - obj4); // TypeErr