/**
 * 
 * 1) Inversion of Control 
 * 2) Callback Hell.  (Readability problem)
 * 
 * Inversion of Control is control is when we have passed the control of our written code/ logic to some different
 * function implemented by someone else. Now we are dependent on them to call our function correctly. By Usage of Callbacks
 * Problem of inversion of contyrol occurs
 */

let arr = [1, 10, 100, 9, 2, 3, 11];

arr.sort(function cmp(a, b) {
	return a - b;
})

console.log(arr);

function doTask(fn, x){
	// Whole implementation is done by team A

	fn(x*x);
} // Team A

// Here is team b tries to use it.
doTask(function exec(num){ // due to callbacks, I am passing control of how exec should be called to doTask
	console.log("Woah num is: ", num);
}, 9);