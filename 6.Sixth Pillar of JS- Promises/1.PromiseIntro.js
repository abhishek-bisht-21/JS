function getRandomInt(num) {
	return Math.floor(Math.random() * num);
}

function createPromiseWithLoop() {
	return new Promise(function executor(res, rej) {
		for (let i = 0; i < 10000000; i++) {
			let num = getRandomInt(10);
			if (num % 2 == 0) {
				res(num);
			} else {
				rej(num);
			}
		}
	})
}

function createPromiseWithTimer() {
	return new Promise(function executor(res, rej) {
		setTimeout(function () {
			let num = getRandomInt(10);
			if (num % 2 == 0) {
				res(num);
			} else {
				rej(num);
			}
		}, 10000)
	})
}

let y = createPromiseWithLoop();
console.log(y);
let x = createPromiseWithTimer();
console.log(x);