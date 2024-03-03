function* fetchNextElement(){
	console.log("I am inside the genrator function");
	yield 1;
	yield 2;
	console.log("somewhere in the middle");
	yield 3;
	yield 4;
}

const iter = fetchNextElement();

console.log("1st", iter.next());
console.log("2nd", iter.next());
console.log("3rd", iter.next());
console.log("4th", iter.next());
console.log("5th", iter.next());
console.log("6th", iter.next());

/**
 * Output:
 * 
I am inside the genrator function
1st { value: 1, done: false }
2nd { value: 2, done: false }
somewhere in the middle
3rd { value: 3, done: false }
4th { value: 4, done: false }
5th { value: undefined, done: true }
6th { value: undefined, done: true }
 */


