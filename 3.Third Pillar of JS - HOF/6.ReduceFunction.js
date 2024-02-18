/**
 * Reduce Function:
 *  Reduce is also a HOF for Arrays. Reduce also takes a function f as an argument.
 * It goes one by one to every element in the array. Say the current element is arr[i], reduce
 * will pass this element to the function f, and accumulate the result of further function calls with
 * this particular result.
 */

const arr = [1, 2, 3, 4, 5, 6];

function sum(prevResult, currValue){
	return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result); // 21
