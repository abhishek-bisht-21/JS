
function timeConsumingByLoop(){
	console.log("Loop starts");
	for(let i=0;i<1000000000;i++){
		// some task
	}
	console.log("loop ends");
}

function timeConsumingByRunTimeFeature0(){
	console.log("Starting timer0");
	setTimeout(function exec(){
		for(let i =0;i<1000000000;i++){
			//some task
		}
		console.log("Completed the timer0");
	}, 5000); //5 sec
}

function timeConsumingByRunTimeFeature1(){
	console.log("Starting timer1");
	setTimeout(function exec(){
		console.log("Completed the timer1");
	}, 0); // 0s timer
}

function timeConsumingByRunTimeFeature2(){
	console.log("Starting timer2");
	setTimeout(function exec(){
		console.log("Completed the timer2");
	}, 200); // 200ms timer
}

console.log("Hi");
timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();
console.log("Bye");