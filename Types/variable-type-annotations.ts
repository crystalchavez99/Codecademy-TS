/*
You can declare a variable without a initial value while
ensuring it can be assigned to only a certain type.

Tell the type of something is by using type annotation.

Variables can have type annoations added just after the name, append
by a colon followed by the type.
*/

let mustBeAString : string;
mustBeAString = 'Catdog';

// mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
/*
We declare the variable above to be a type string without assigning
initial value, when we assign a number later it gives an error

*/

let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}
