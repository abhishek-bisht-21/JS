function fun() { // fun -> Global scope
	var x = 10; // x -> fun scope
	function gun() { // gun -> fun scope
		var y = 10; // y -> gun scope
		console.log(x); // 10
		console.log(y); // 20
	}
	gun();
	console.log(x); // 10
	console.log(y); // Throw an error. y is not defined.
}

fun();