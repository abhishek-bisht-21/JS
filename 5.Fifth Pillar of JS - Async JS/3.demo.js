/**
 * Functions native to js is given higher priority.
 * Event loop Responsibility: Monitor if no global piece of code is left and call stack is empty.
 * When Above 2 criterias are met Event queue functions are executed
 * timeConsumingFeature not native to JS are given to run time to be executed.
 */

function timeConsumingByLoop(){
	console.log("Loop starts");
	for(let i=0;i<1000000000;i++){
		// some task
	}
	console.log("loop ends");
}

function timeConsumingByRunTimeFeature(){
	console.log("Starting timer");
	setTimeout(function exec(){
		console.log("Completed the timer");
	}, 6000);
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();
console.log("Bye");