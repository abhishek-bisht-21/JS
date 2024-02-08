// function fun is just accessible via f. It is accessible outside f or without f.
// Function expression gets the scope of tehre corresponding variable in which they are assigned.
const f = function fun(){
	console.log("How much func...!??");
}

f();
fun(); /// error