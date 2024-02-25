function createPromise(){
	return new Promise(function exec(res, rej){
		setTimeout(function(){
			console.log("Rejecting the promise");
			rej("done");
		}, 1000);
	})
}

let p = createPromise();

p.then(function fullfillHandler1(value){
	console.log("We fullfill1 with a value", value);
}, function rejectHandler1(value){
	console.log("We reject1 with a value ", value);
})

p.then(function fullfillHandler2(value){
	console.log("We fullfill2 with a value", value);
}, function rejectHandler2(value){
	console.log("We reject2 with a value ", value);
})

for(let i=0;i<1000000000;i++){

}

console.log("ending-----------")

/***
 * 
 * OutPut:
ending-----------
Rejecting the promise
We reject1 with a value  done
We reject2 with a value  done
 */