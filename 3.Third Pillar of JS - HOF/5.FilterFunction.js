/**
 * Filter function
 * Filter is also a higher order function. Filter also loops over the array element, there is a
 * one special thing about filter function i.e the argument function f will be converted to a boolean.
 * 
 * Filter loops over every element, passes that element in the argument function and if the output of this function call is
 * true, then it stores original element in the new array otherwise doesn't add the element to the array.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOddEven(x) {
	return (x % 2 == 0); // returns a boolean
}

const newArr = arr.filter(isOddEven);
console.log(newArr); // [2,4,6,8]