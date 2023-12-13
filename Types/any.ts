/*
Some places TS will not try to infer what type a variable is declared
without being assigned an itial value. It will consider to be type of "any"

Type "any" can be assigned any value and won't give error if
reassigned to diff type
*/

let onOrOff;

onOrOff = 1;
onOrOff = false;

let guess;

guess = "red";

guess = 5;

// no errors occur when tsc ran
