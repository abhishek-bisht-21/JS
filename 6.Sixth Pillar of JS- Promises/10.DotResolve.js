/**
 * If you want to mimick already resolved promise then this can be used.
 * This is a shorthand syntax to write a already resolved promise.
 */

// dot resolve
let x = Promise.resolve("Abhishek's promise");
x.then(function processPromise(value){
	console.log("Whose promise?", value);
})



// It is equivalent to something like this.
function f(){
	return new Promise(function(res, rej){
		res("Abhishek's Promise");
	})
}
let y = f();
y.then(function processPromise(value){
	console.log("Whose promise?", value);
})

// Output:
/**
Whose promise? Abhishek's promise
Whose promise? Abhishek's Promise
 */