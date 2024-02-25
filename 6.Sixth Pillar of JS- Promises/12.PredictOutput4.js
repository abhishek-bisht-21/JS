
function blockingForLoop(){
	for(let i=0;i<1000000000;i++){
		// something
	}
}
console.log("start of the file");

setTimeout(function timer1(){
	console.log("timer1 is done");
}, 0);

blockingForLoop();

let x = Promise.resolve("Abhishek's promise1");
x.then(function processPromise(value){
	console.log("Whose's promise ? ", value);
	blockingForLoop();
})

let y = Promise.resolve("Abhishek's promise2");
y.then(function processPromise(value){
	console.log("Whose's promise ? ", value);
	setTimeout(function(){console.log("ok done")}, 0)
})

let z = Promise.resolve("Abhishek's promise3");
z.then(function processPromise(value){
	console.log("Whose's promise ? ", value);
})

setTimeout(function timer2(){
	console.log("timer2 is done");
}, 0);

console.log("end of the file.");

// Outpur

/**
start of the file
end of the file.
Whose's promise ?  Abhishek's promise1
Whose's promise ?  Abhishek's promise2
Whose's promise ?  Abhishek's promise3
timer1 is done
timer2 is done
ok done
 */