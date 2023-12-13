/*
When param is assigned default val, it will infer the variable
type as the default data type.

The example below can receive a string or undefined as the parameter

ut parameters with default values don’t need a ? after their name,
since assigning a default value already implies that they’re optional
parameters.
*/
function greet(name) {
    if (name === void 0) { name = 'Anonymous'; }
    console.log("Hello, ".concat(name, "!"));
}
function proclaim(status, repeat) {
    if (status === void 0) { status = "not ready..."; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
