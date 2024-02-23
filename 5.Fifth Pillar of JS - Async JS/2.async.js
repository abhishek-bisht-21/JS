console.log("hi");
setTimeout(function () { console.log("time done");}, 5000); // JS is not waiting on this line
console.log("Bye");

/**
 * Output: 
 * hi
 * Bye
 * time done
 */