function download(url) {
	return new Promise(function exec(res, rej) {
		console.log("Promise: Started downloading from url", url);
		setTimeout(function () {
		console.log("Promise: Completed downloading after 5s");
		const content = "ABCDEF";
		res(content);	
		}, 5000);
	})
}

// Promise Chaining

// .then returns a New Promise Object
download("www.zyz.com")
.then(function fulfillHandler1(value){
	console.log("Fullfilled Handler1 called content downloaded is", value);
	return "New promise string"; //this return string is available to Next .then chain
}, function rejectionHandler(value){
	console.log("Rejection Handler with value", value)
})
.then(function newfulfillHandler(value){
	console.log("Value from Chained Then promise", value);
})
