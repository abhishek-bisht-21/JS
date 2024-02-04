console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));


let x = NaN;
console.log(x == NaN); // false;

console.log(isNaN(x));
console.log(isNaN("abhishek")); //isNaN first performs ToNumber abstarct operation. Therefore returns true