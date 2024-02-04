
// Lexical Scoping is when in the parsing phase we assign scopes to formal declarations (variables, function)
var teacher = "Abhishek"; // Teacher -> Global scope
function ask(question){ // ask -> Global scope
	console.log(teacher, question);
}

function fun(){ // fun -> Global scope
	var teacher = "Rannvijay"; // teacher -> fun scope
	ask("why?");
}

fun();

// In case of JS bcoz it follows lexical scoping we get answer -> Abhishek why?
// Incase of dynamic scoping answer -> Rannvijay why? 