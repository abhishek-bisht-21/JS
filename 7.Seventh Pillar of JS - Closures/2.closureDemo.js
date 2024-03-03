console.log("Start")
function DO(task){ // 
	setTimeout(function exec(){
		console.log("Task to do is", task);
	},2000)
}

DO('Studying');
console.log("End");

/**
 * It feels like task is local variable to DO and now when JS moves ahead and DO is out of memory[CallStack]
 * How can exec cb function can access it. This is Because of Closure.
 */

// OUTPUT:
/**
Start
End
Task to do is Studying
 */