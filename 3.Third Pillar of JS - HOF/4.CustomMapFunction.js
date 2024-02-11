
const arr = [9,8,7,6,5];

function print(element, idx){
	return `Element at index ${idx} is ${element}`;
}

function customMapper(arr, func) {
	let resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		resultArr.push(func(arr[i], i));
	}

	return resultArr;
}

const value = customMapper(arr, print);
console.log(value);