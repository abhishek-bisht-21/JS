/*  Javascript has 2 phases of execution
    1) PARSING	-> Scope resolution
    2) EXECUTION
    Types of Scopes: Global, function, block

*/
var teacher = "abhishek";
function fun(){
	var teacher = "rannvijay";
	console.log(teacher);
}

function gun(){
	var student = "skand";
	console.log(student);
}

fun();
gun();
console.log(teacher)