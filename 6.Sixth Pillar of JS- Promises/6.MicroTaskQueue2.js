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
p.then(function fulfillHandler1(value) { console.log("We Fulfilled1 with a value", value) }, // .then Registers the both the Handlers
	function rejectHandler1() { console.log("We Rejected1 with a value", value) }) // They are not immediately executed, even though promise is resolved

p.then(function fulfillHandler2(value) { console.log("We Fulfilled2 with a value", value) },
	function rejectHandler2() { console.log("We Rejected2 with a value", value) })

p.then(function fulfillHandler3(value) { console.log("We Fulfilled3 with a value", value) }, // .then Registers the both the Handlers
	function rejectHandler3() { console.log("We Rejected3 with a value", value) })

for(let i=0;i<1000000000;i++){}

console.log("endingg.....") 

/**
 * OutPut:
Resolving the promise
endingg.....
We Fulfilled1 with a value Done
We Fulfilled2 with a value Done
We Fulfilled3 with a value Done
Timer completed
 * 
 * 
 */