function download(url, cb){
	console.log("Started downloading from url", url);
	setTimeout(function exec(){
		console.log("Completed downloading after 5s");
		const content = "ABCDEF";
		cb(content); // What if don't call/invoke our callback function the manner which is required.
	}, 5000);
}


download("www.xyz.com", function processDownload(data){
	console.log("download data is", data);
})