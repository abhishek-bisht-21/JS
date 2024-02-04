
"use strict"; // Is a more restrictive mode in which we run JS. It is beneficial in cases which might create some issues, so it restricts them

var teacher = "abhishek";
function fun(){
	var teacher = "rannvijay";
	content = "JS"; // autoglobals will not work in strict mode.
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