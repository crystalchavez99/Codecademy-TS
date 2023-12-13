/*
TS knows what types our objects are but it also knows the shapes.
The shape describes properties and method it does or doesnt have.

Built-In types in JS have known props and methods, the tsc command
will let ya know if the code tries to access them that don't exist
*/
var firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
