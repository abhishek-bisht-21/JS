// Overridding the default toString method of an object.
// default toString method return [object Object]

// Example1
let obj = {
	toString(){
		return "Let's Learn Javascript";
	}
};
console.log(obj.toString());


// Example2
let obj1 = {
	toString(){
		return 10;
	}
};

console.log(typeof obj1.toString());


// By Default valueOf returns the same object but we can override it.

// Example3
let obj2 = {x: 10}
console.log(obj2.valueOf());


// Example4
let obj3 = {x:10, valueOf(){
	return "Yo";
}}
console.log(obj3.valueOf());