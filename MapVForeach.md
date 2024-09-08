map and forEach are JavaScript array methods used for iteration, but they have different purposes:

map:
  Purpose: Transforms each element of an array and returns a new array with the results.
  Return Value: New array.
  Usage: Use when you need to create a new array from the original one.
  Example:
    const doubled = numbers.map(num => num * 2);

forEach:
  Purpose: Executes a function on each element without returning a new array.
  Return Value: undefined.
  Usage: Use for side effects, like logging or modifying external variables, without needing a new array.
  Example: 
    numbers.forEach(num => console.log(num * 2));

In summary, use map for transforming arrays and forEach for performing actions without creating a new array.
