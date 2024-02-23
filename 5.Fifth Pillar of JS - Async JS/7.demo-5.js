console.log("Hi")

for (let i = 0; i < 3; i++) {
	setTimeout(function exec() {
		console.log("Time done ", i);
	}, 10);
}

for (let index = 0; index < 10000000000; index++) {
	// some task
}

console.log("end");
