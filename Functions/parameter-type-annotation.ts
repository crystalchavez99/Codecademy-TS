/*
In TS, function params can be given type annotations like variables
to ensure the parameters are of the correct type
*/
function greet(name: string) {
    console.log(`Hello, ${name}!`);
  }

  greet('Katz'); // Prints: Hello, Katz

  //greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'

/*
Just place the name of the parameter followed by the colon and data type.
It will accept or throw error if not the type passed in.

If we do not provide type annotations it will assumed "any"
*/
function printKeyValue(key: string, value) {
    console.log(`${key}: ${value}`);
  }

  printKeyValue('Courage', 1337); // Prints: Courage: 1337
  printKeyValue('Mood', 'scared'); // Prints: Mood: scared

  function triple(value: number) {
    return value * 3;
  }

  function greetTripled(greeting: string, value: number) {
    console.log(`${greeting}, ${triple(value)}!`);
  }

  greetTripled('Hiya',5);
