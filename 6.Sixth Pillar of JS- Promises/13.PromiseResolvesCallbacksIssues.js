// callback downloader dummy

function download(url, cb) {
	console.log("Started downloading from url", url);
	setTimeout(function exec() {
		console.log("Completed downloading after 5s");
		const content = "ABCDEF";
		cb(content); // What if don't call/invoke our callback function the manner which is required.
	}, 5000);
}


download("www.xyz.com", function processDownload(data) {
	console.log("download data is", data);
})

/*
OUTPUT:
Started downloading from url www.xyz.com
Completed downloading after 5s
download data is ABCDEF

*/

// Promise Download dummmy

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

let downloadCompleted = download("www.zyz.com");
downloadCompleted.then(function(value){
	console.log("Fullfilled Handler called content downloaded is", value);
})

/**
 * OUTPUT:
Promise: Started downloading from url www.zyz.com
Promise: Completed downloading after 5s
Fullfilled Handler called content downloaded is ABCDEF
 */