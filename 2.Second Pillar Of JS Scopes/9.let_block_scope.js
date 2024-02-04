var teacher = "Abhishek"; // global
function fun(){ // global
	console.log(teacher); // no error will be given
	console.log(content); // Throws error. (TDX -. Temporal Dead Zone)
	var teacher = "Rannvijay"; //scope of fun
	let content = "JS"; // content will be accessible only post declaration
	if(content == "JS"){
		let hours = "120+";
		console.log(hours); // We cannot access hours outside this block
	}

	console.log(teacher, content);
}

fun();
console.log(teacher);
//console.log(content);

// TDX -> The region before the declaration of a variable in a block scope made by let is called as TDZ.
// You cannot access a variable which is having a block scope before it has been declared