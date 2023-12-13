/*
TS gives error if we don't provide value for all args in function.

We want to skip some values to pass in, so we have to indicate
it as intentionally optional by adding a "?" after the name, it tells
TS it is allowed to be undefined if not provided
*/
// function greet(name: string) {
//     console.log(`Hello, ${name || 'Anonymous'}!`);
//   }

//   greet('Anders'); // Prints: Hello, Anders!
//   greet(); // TypeScript Error: Expected 1 arguments, but got 0

  function greet(name?: string) {
    console.log(`Hello, ${name|| 'Anonymous'}!`);
  }

  greet(); // Prints: Hello, Anonymous!
