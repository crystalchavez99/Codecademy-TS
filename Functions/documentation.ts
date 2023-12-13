/*
TS recognizes JS comment syntax.

It's useful for documenting functions, use special tags to highlight certain aspects.
@param to describe each of the function’s parameters, and
we can use @returns to describe what the function returns
*/

/**
* This is a documentation comment
*/

  /**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
  function getSum(x: number, y: number): number {
    return x + y;
  }
