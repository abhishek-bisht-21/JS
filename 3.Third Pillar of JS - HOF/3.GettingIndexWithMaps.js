/**
 * If we are passing a function in an map, which takes 2 argument then
 * first argument is the element of the array and second argument is its index.
 */
const arr = [9,8,7,6,5];

function print(element, idx){
	return `Element at index ${idx} is ${element}`;
}

const res = arr.map(print);
console.log(res);