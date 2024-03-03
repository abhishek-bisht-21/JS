/**
 * Types of Programming Languages:
 * 1) Imperative: We manually tell the program What to do and How to do.
 * 2) Declarative: 
 */


function fetchNextElement(array) {
	let idx = 0;
	function next() {
		if (idx == array.length) {
			return undefined;
		}
		const nextElement = array[idx];
		idx++;
		return nextElement;
	}
	return {next};
}

// Somewhere we consume it

// Custom Iterator
const automaticFetcher = fetchNextElement([99,11,12,13,0,1,2,3,4]); // Inside AutomaticFetcher variable we catch next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());

/*
In jS an iterator is an object which defines a sequence and potentially a return value upon its termination.
It is directly giving me what I want rather than me telling it how  to get it.
*/
 



