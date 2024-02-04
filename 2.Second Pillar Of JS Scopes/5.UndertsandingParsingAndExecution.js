

var teacher = "abhishek";
function fun(){
	var teacher = "rannvijay";
	content = "JS"; // autoglobals. Will first try to find it in fun scope, then ultimately gives it global scope. At the Execution phase this all will happen.
	console.log(teacher);
}

function gun(){
	var student = "skand";
	console.log(student);
}

fun();
gun();
console.log(content);
console.log(teacher);