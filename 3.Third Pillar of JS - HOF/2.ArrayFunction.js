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
 * 
 * Every element of the original array is one by one passed to teh argument function 'f'.
 * Whatever is the output for each individual element, we populate that output in an array.
 * 
 * Map internally iterates/loop over every element of the original array pass that element in the arugment function f and 
 * then stores the returned value inside an array.
 */

function square(el){ // return square
	return el*el;
}

function cube(el){
	return el*el*el;
}

const arr = [1,2,3,4,5]; // original

const res = arr.map(square); // sqaure is function passed as an argument
const cubeArr = arr.map(cube);
console.log("Array arr: ", arr);
console.log("Array res: ", res); // [1,4,9,16,25]
console.log("Array cubeArr: ", cubeArr); // [1,8,27,64,125]



