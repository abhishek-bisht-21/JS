function createPromise() {
	return new Promise(function exec(resolve, reject) {
		console.log("Resolving the promise");
		resolve("Done");
	});
}

setTimeout(function promise() {
	console.log("Timer completed"); // Printed in the End Microtask queue priority >>>>> Callback queue
}, 0);

let p = createPromise();
p.then(function fulfillHandler(value) { console.log("We Fulfilled with a value", value) }, // .then Registers the both the Handlers
	function rejectHandler() { console.log("We Rejected with a value", value) }) // They are not immediately executed, even though promise is resolved

console.log("endingg.....") // fulfillment or rejection handlers are not executed till whole Global Code is not executed And CallStack is Empty.

/**
 * Output:
 * Resolving the promise
   endingg.....
    We Fulfilled with a value Done
    Timer completed
 * 
 */