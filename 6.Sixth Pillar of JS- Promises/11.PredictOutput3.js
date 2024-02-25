console.log("start of the file");

setTimeout(function timer1(){
	console.log("timer1 is done");
}, 0);

for(let i=0;i<10000000;i++){
	//something
}

let x = Promise.resolve("Abhishek's promise");
x.then(function processPromise(value){
	console.log("Whose's promise", value);
})

setTimeout(function timer2(){
	console.log("timer2 is done");
}, 0);

console.log("end of the file.");

/**
 * Output:
start of the file
end of the file.
Whose's promise Abhishek's promise
timer1 is done
timer2 is done
 */