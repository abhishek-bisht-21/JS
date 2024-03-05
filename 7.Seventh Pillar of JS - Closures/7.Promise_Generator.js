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

function doAfterReceiving(value){
	let future = iter.next(value);
	if(future.done) return;
	future.value.then(doAfterReceiving);
}

function* steps(){
	const downloadedData = yield download("www.xyz.com");
	console.log("data downloaded is", downloadedData);
	const fileWritten = yield writeFile(downloadedData);
	console.log("file written is", fileWritten);
	const uploadResponse = yield uploadData(fileWritten, "www.abc.com");
	console.log("Upload Response is", uploadResponse);
	return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);