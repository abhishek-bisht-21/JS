function fetchData(url){
	return new Promise(function(res, rej){
		console.log("Started Downloading from", url);
		setTimeout(function processDownloading(){
			let data = "Dummy Data";
			res(data);
			console.log("Download completed");
		}, 7000)
	})
}

console.log("Start")

let promiseObj = fetchData("sdhkjhsdfakj");
promiseObj.then(function exec(value){
	console.log("Value is", value);
})

console.log("end");

/**
 Output:
Start
Started Downloading from wGKSAdgJKHKJHSDAK
end...........
Download completed
value is Dummy Data
 */