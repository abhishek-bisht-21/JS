console.log("hi");
setTimeout(function () { console.log("time done");}, 5000); // JS is not waiting on this line. 
// Bcoz this setTimeout is not native to JS. This is provided by runtime
console.log("Bye");

/**
 * Output: 
 * hi
 * Bye
 * time done
 * 
 * Async Programming Capability of JS is provided by the Runtime - browser, Node.
 */