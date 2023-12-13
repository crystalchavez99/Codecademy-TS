/*
To be explicit about what type the function returns
add the type annotation after close parenthesis of the function.

It will produce the error if return type is not the same.
*/
function createGreeting(name?: string): string {
    if (name) {
      return `Hello, ${name}!`;
    }

    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
  };
