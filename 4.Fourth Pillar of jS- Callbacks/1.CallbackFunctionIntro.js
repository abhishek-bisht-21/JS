/**
 * function fun is a HOF cause it takes another function as an argument.
 * x -> number
 * fn -> function 
 */

function fum(x, fun){
	for(let i=0;i<x;i++){
		console.log(i);
	}

	fun();
}

fum(10, function exec() { // callback
	console.log("I am also executed");
});