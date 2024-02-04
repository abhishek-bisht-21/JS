//  var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.


var x = 1;

if(x === 1){
	var x = 2;
	console.log(x); // output : 2
}

console.log(x); // output : 2

// let declaration declares a block-scoped local variable, optionally initializing it to a value.

let x = 1;
if(x === 1){
	let x = 2;
	console.log(x); // Output: 2
}
console.log(x); // Output: 1