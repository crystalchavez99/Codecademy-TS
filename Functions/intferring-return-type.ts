/*
TypeScript can also infer the types of values returned by functions.
Based on function return value
*/
function ouncesToCups(ounces: number) {
    return `${ounces / 16} cups`;
  }

  const liquidAmount: string = ouncesToCups(3);
//   const liquidAmount: number = ouncesToCups(3);

  // Type 'string' is not assignable to type 'number'.
//  Here, TypeScript was able to infer that liquidAmount was being assigned a value of type string, despite it being declared as a variable of type number
