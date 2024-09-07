Pure Functions are functions that always produce the same output for the same input and
do not cause side effects (i.e., they don’t modify external state). They are predictable 
and easy to test.
Example of a Pure Function:
  function add(a, b) {
    return a + b; // Always returns the same result for the same inputs
  }

Impure Functions may produce different outputs for the same inputs because they depend 
on or modify external state. They can have side effects like altering global variables 
or performing I/O operations.
Example of an Impure Function:
  let count = 0;
  function increment() {
    count += 1; // Modifies external state (count)
    return count;
  }

Key Differences:
Pure Functions: Consistent output, no side effects.
Impure Functions: Output can vary, may have side effects.
