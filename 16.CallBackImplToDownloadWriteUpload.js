// Tasks: (Don't use promises only use callbacks)
// 1. Write a function to download data from a url
// 2. Write a function to save that Downloaded Data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl


function download(url, cb){
	/**
	 * Downloads content from the given url and passed the
	 * downlaoded content to the given callback cb
	 */
	console.log("Starting to download data from", url);
	setTimeout(function down(){
		console.log("downloading completed");
		const content = "ABCDEF"; // assume dummy download content
		cb(content);
	}, 4000)
}

function writeFile(data, cb){
	/**
	 * Writes the given data into a new file.
	 */
	console.log("Started writing a file with", data);
	setTimeout(function write(){
		console.log("Completed writing the data in a file");
		const filename = "file.txt";
		cb(filename);
	}, 5000)
}

function upload(url, file, cb){
	/**
	 * Uploads the data from a given file to a new url
	 */
	console.log("Started uploading", file, "on", url);
	setTimeout(function up(){
		console.log("upload completed");
		const response = "SUCCESS";
		cb(response);
	}, 2000)
}

// Since the whole flow of the JS would've been synchronous, then this below code would work.
// But since it is not, we have to manage a way in that actions are in this sequence Download -> Write -> Upload
// download("www.xyz.com", function process(content){
// 	console.log("Downloaded data is", content);
// })

// writeFile("abcdef", function process(name){
// 	console.log("file written with name", name);
// })

download("www.xyz.com", function processDwonload(content){
	console.log("We are now going to process the downloaded data");
	writeFile(content, function processWriteFile(filename){
		console.log("We have downloaded and written the file, now will start upload");
		upload("www.upload.com", filename, function processUpload(response){
			console.log("We have uploaded with", response);
		});
	});
});
