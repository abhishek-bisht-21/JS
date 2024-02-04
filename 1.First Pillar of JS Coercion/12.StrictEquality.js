console.log(NaN === NaN); // false (NaN is the only number which is not equal to itself)
console.log(-0 === +0); // true
console.log("9" === 9); // false

let obj = {x: 10, valueOf(){return 100}};
console.log(99 == obj);// false
console.log(100 == obj); // true ToPrimitive(obj, hint: number)




let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {x:10};

console.log(obj1 === obj2); // false (Even though the key-value pairs are same but they are present at diff memory location in memory they are not equal)
console.log(obj1 === obj3); // false
console.log(obj1 === obj1); // true
console.log({x:10} === {x:10});