function download(url) {
	return new Promise(function exec(res, rej) {
		console.log("Starting to Download data from", url);
		setTimeout(function down() {
			console.log("downloading completed");
			const content = "ABCDEF"; // assume dummy download content
			res(content);
		}, 4000)
	})
}

function writeFile(data) {
	return new Promise(function exec(res, rej) {
		console.log("started writing a file with", data);
		setTimeout(function write() {
			console.log("Completed writing the data in a file");
			const filename = "file.txt";
			res(filename);
		}, 5000)
	})
}

function uploadData(file, url) {
	return new Promise(function exec(res, rej) {
		console.log("Started uploading", file, "on", url);
		setTimeout(function up() {
			console.log("upload completed");
			const response = "SUCCESS";
			res(response);
		}, 2000)
	})
}

download("www.xyz.com")
.then(function processDownload(value){
	console.log("Dwonloading done with following value", value);
	return writeFile(value);
})
.then(function processWrite(value){
	console.log("data written in the file with name", value);
	return uploadData(value, "www.abc.com");
})
.then(function processUpload(value){
	console.log("we have uploaded with", value);
})