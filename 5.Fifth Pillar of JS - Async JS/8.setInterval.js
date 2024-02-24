let x = setInterval(function exec(){
	console.log("first one");
}, 1000);

setTimeout(function Clear_setInterval(){
	clearInterval(x);
},5000);

/**
 * 
 * Output:
 * first one
 * first one
 * first one
 * first one
 */