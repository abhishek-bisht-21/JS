function getRandomInt(num) {
	return Math.floor(Math.random() * num);
}

function createPromiseWithTimer() {
	return new Promise(function executor(res, rej) {
		console.log("Entering the executor callback in promise cnstructor");

		setTimeout(function () {
			let num = getRandomInt(10);
			if (num % 2 == 0) {
				// If the number is even we fullfil
				res(num);
			} else {
				// If the number is odd we reject
				rej(num);
			}
		}, 10000)

		console.log("Existing the executor callback in promise constructor")
	})
}

console.log("Starting....");
const p = createPromiseWithTimer();
console.log("We are now waiting for the promise to complete");
console.log("currently my promise object is like ....", p);

console.log("Going to register my 1st set of Handlers");

p.then(
	function fullfilHandler(value) {
		console.log("Inside fulfill handler 1 with value", value);
		console.log("Promise after fulfillment is ", p);

	},
	function rejectionHandler(value) {
		console.log("Inside rejection handler 1 with value", value);
		console.log("Promise after rejection is ", p);
	}
)

console.log("Going to register my 2nd set of Handlers");

p.then(
	function fullfilHandler(value) {
		console.log("Inside fulfill handler 2 with value", value);
		console.log("Promise after fulfillment is ", p);

	},
	function rejectionHandler(value) {
		console.log("Inside rejection handler 2 with value", value);
		console.log("Promise after rejection is ", p);
	}
)

console.log("Ending............")