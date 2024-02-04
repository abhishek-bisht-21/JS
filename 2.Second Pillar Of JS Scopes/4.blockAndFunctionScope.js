{
	var x = 12; // Variable x is global scoped here. Var only supports function and global scope
}

console.log(x); // 12


{
	let y = 10;
}

console.log(y); // throws error. y is not visible/accessible  outside the block. Let creates a block-scope


function fun(){
	var z = 10;
}

console.log(z); // Throws error. Var is enclosed inside the function, therefore it is accesible only inside fun function


function gun(){
	console.log(a); // No error. Because of Hoisting. variable declared with var is available anywhere in the function, even before it is declared
	var a = 10;
}
gun();

function gun1(){
	console.log(b); //throws error
	let b = 10;
}
gun1()