Type conversion and type coercion in JavaScript both involve changing the type of a value, but they differ in how this change happens:

1. Type Conversion (Explicit)
Definition: Type conversion is when you explicitly change the type of a value using built-in functions or syntax.

How: This is done deliberately by the programmer using methods like String(), Number(), or Boolean().

Example:
  let num = 42;
  let str = String(num); // Explicitly converts number to string
  console.log(typeof str); // "string"
Key Point: The programmer has control over when and how the conversion occurs.

2. Type Coercion (Implicit)
Definition: Type coercion is when JavaScript automatically converts one data type to another behind the scenes during operations or comparisons.

How: This happens automatically when you perform operations like comparisons (==), string concatenation, or arithmetic with mixed data types.

Example:
  let num = 42;
  let str = "The answer is " + num; // Implicitly coerces number to string
  console.log(str); // "The answer is 42"
Key Point: Coercion happens implicitly, and the type change may not always be obvious, leading to potential unexpected behavior.

Key Differences:
  Type Conversion: Controlled by the programmer, deliberate, and explicit.
  Type Coercion: Automatic by JavaScript, implicit, and can sometimes lead to unexpected results.
Example:
// Type Conversion (Explicit)
  let num = "123";
  let convertedNum = Number(num); // Explicitly converts string to number
  console.log(convertedNum); // 123

// Type Coercion (Implicit)
  let implicitNum = "5" * 2; // JavaScript implicitly coerces string to number
  console.log(implicitNum); // 10
  
In summary, type conversion is a manual and intentional process, while type coercion is automatic and happens behind the scenes based on JavaScript's type handling rules.
