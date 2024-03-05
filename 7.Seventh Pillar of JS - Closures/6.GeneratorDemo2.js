function* fetchNextElement() {
	console.log("Inside generator")
	const x = 10;
	yield 11;
	console.log("Entering after a yield");
	const y = x + (yield 30);
	console.log("Value of y is", y);
}

console.log("start")
const iter = fetchNextElement();
console.log("called Generator")
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next(17));

