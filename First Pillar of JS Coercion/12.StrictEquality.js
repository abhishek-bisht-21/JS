console.log(NaN === NaN); // false (NaN is the only number which is not equal to itself)
console.log(-0 === +0); // true
console.log("9" === 9); // false

let obj = {x: 10, valueOf(){return 100}};
console.log(99 == obj);// false
console.log(100 == obj); // true ToPrimitive(obj, hint: number)