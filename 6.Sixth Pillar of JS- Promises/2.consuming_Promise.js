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
p.then(
	function fullfilHandler(value){console.log("Inside fulfill handler with value", value);}, 
	function rejectionHandler(value){console.log("Inside rejection handler with value", value);}
)