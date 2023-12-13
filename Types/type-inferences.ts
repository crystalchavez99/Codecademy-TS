// JS allows us to assign any val to any variable
/* In TS when we declare a variable with an initial value, the variable
can never be reassigned a value of a different data type (This is type inference)
*/

/*TypeScript expects the data type of the variable to match the type of
the value initially assigned to it at declaration
If we try to reassign a variable to a value of a different type,
TypeScript will surface an error.
*/

/* Running code with changing data types will result in error,
variables can only be assigned the types expect */

let aged = true;
let realAge = 0;
if(aged){
    realAge = 4;
}
let dogAge = realAge * 7;
console.log(`${dogAge} years old`)
