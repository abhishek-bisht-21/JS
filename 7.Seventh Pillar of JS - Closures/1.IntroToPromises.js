function process(){
	let i=0;
	function innerProcess(){
		i+=1;
		return i;
	}

	return innerProcess;
}

let res = process(); //calls the function, which returns another function
console.log(res);
console.log("first time calling res", res()); //1
console.log("second time calling res", res()); //2
console.log("third time calling res", res()); //3


/**
 * Remembering Lexical Scope Means:
 * Remembering the variables, values and all the memories, that were associated to you
 * Even if you are executing outside of your enclosing scope.
 */

/**
 * When parsing goes on we know that 'i' is coming from the scope of scope of cuntion process.
 * Due to Closure property 'i' is accesible to innerProcess function even though prcoess function is
 * no longer in the CallStack. Because of Closure it knows the exact memory Location of any variable
 * who is used in the inner functions. The Same variable 'i' is getting updated.
 */