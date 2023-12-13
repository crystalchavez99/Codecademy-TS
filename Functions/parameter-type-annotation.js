/*
In TS, function params can be given type annotations like variables
to ensure the parameters are of the correct type
*/
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet('Katz'); // Prints: Hello, Katz
//greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
/*
Just place the name of the parameter followed by the colon and data type.
It will accept or throw error if not the type passed in.

If we do not provide type annotations it will assumed "any"
*/
function printKeyValue(key, value) {
    console.log("".concat(key, ": ").concat(value));
}
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
greetTripled('Hiya', 5);
