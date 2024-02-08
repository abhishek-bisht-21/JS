
// Conditional Initialisation var can be used.
// Also in case of try catch block we can use var initialisation in the try or catch block, and that can be used outside the block as well.
function fun(x) {
	let i; // var i 
	if (x % 2 == 0) {
		i = 0;
	} else {
		i = 1;
	}
}

function gun(x) {
	if (x % 2 == 0) {
		var i = 0; // We can declare a variable like this. More clean implementation. i is available everywhere in gun function
	} else {
		var i = 1;
	}

	console.log(i);
}

gun(10);