// Function Currying creates a chain of functions,
// where each function returns another function
// until the final result is achieved.

function functionCurrying(entry1) {
  return function first(entry2) {
    return function second(entry3) {
      return entry1 + (entry2 - entry3);
    };
  };
}

console.log(functionCurrying(10)(8)(3));
