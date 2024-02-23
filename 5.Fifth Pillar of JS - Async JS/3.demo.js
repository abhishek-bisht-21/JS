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