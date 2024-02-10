/**
 * Arrays are also custom objects in JS
 * index of the element is the key and the element it self is the value.
 * ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}
 */


// _________________________ MAP Function in Arrays __________________________________

/**
 * Map Function
 * Map is a higher order function available with arrays. It takes a function as an argument -> f
 * It returns an arrayin which every value is actually populated by calling a function f with original array element as argument.
 */

function square(el){
	return el*el;
}

const arr = [1,2,3,4,5];

const res = arr.map(square);
console.log("Array arr: ", arr);
console.log("Array res: ", res); // [1,4,9,16,25]


