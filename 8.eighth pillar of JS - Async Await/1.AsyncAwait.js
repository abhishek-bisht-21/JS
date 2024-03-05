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

async function steps(){
	const downloadedData = await download("www.xyz.com");
	console.log("data downloaded is", downloadedData);
	const fileWritten = await writeFile(downloadedData);
	console.log("file written is", fileWritten);
	const uploadResponse = await uploadData(fileWritten, "www.abc.com");
	console.log("Upload Response is", uploadResponse);
	return uploadResponse;
}

steps();

