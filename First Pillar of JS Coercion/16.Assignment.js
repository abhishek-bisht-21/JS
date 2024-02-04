function ToDoApp(){
	this.tasks = [];
}

ToDoApp.prototype.addTask = function(task){
	if(task != null && typeof task === 'object'){
		this.tasks.push(task["text"]);
	}else{
		this.tasks.push(task);
	}
}

ToDoApp.prototype.displayTasks = function(){
	this.tasks.forEach(function(task, index){
		console.log(index + ': ' + task);
	});
}


// usage
var myToDo = new ToDoApp();
myToDo.addTask({text: "Buy groceries"});
myToDo.addTask("Attend meetings at 10AM");
myToDo.addTask(["Call John", "Pay Bills"]);
myToDo.displayTasks();




