function fetchData(url){
	return new Promise(function (res, rej){
		console.log("Started Downloading from", url);
		setTimeout(function processingDownload(){
			let data = "Dummy Data";
			console.log("Download completed");
			res(data);
		}, 7000)
	})
}

console.log("Start");

let promiseObj = fetchData("wGKSAdgJKHKJHSDAK");
promiseObj.then(function A(value){
	console.log("value is", value); // fullfillment Handler
})

console.log("end...........")

/**
 Output:
 Start
Started Downloading from wGKSAdgJKHKJHSDAK
end...........
Download completed
value is Dummy Data
 */