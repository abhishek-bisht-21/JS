//  If a variable is not going to be used outside the block, then it is better to use "let".
//  let does not allow you redecalaration. var allows redeclaration

function fun(){
	for(let i=0;i<5;i++){
		// do something
	}
	console.log(i); // i is not accessible here.
}