//  1) Readability of code increases
//  2) For recursive cases named function expression are also helpful.
//  3) For Debugging the stack trace. Debugging the logs

function fun(fn) {
	console.log("Welcome to fun");
	fn();
}

/*

fun(function(){
	console.log("Wow so much fun..!!");
})

*/

fun(function askingAboutFun() {
	console.log("Wow so much fun..!!");
})

// --------------------------------------------------x-------------------------------------------------------------
function factorial(n) {
	return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);

// --------------------------------------------------x-------------------------------------------------------------

// Why named function expr are needed

[1, 2, 3, 4, 5].map(function(n) {
	return n <= 1 ? 1 : /* what goes here*/ (n - 1) * n;
});


[1, 2, 3, 4, 5].map(function fact(n) {
	return n <= 1 ? 1 : fact(n - 1) * n;
});