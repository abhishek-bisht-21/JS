// Temporal deadzone exist in const as well
const x = 10;
x = 0; // gives error

const obj = {x:10};
obj.y = 9; // This is fine. cause no reassignment is there, we are simply adding new property.

obj =  {}; // error