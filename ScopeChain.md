In JavaScript, the scope chain is a fundamental concept that describes how variable names are resolved within nested functions and blocks. It determines the accessibility of variables and functions at different levels of nesting.

Key Concepts of Scope Chain

Scope:
Global Scope: The outermost scope, accessible from any part of the code.
Local Scope: Created within functions or blocks (using let, const, or var inside a function or block).

Lexical Scoping:
JavaScript uses lexical scoping, meaning the scope of a variable is determined by its position in the source code. A variable is accessible within the block of code where it is defined and in all nested blocks.

Scope Chain:
The scope chain is a hierarchy of scopes used to resolve variable names. It starts with the innermost scope and goes outward, looking up the chain until it finds the variable or reaches the global scope.
When a variable is referenced, JavaScript looks for it in the current scope. If it's not found, it looks in the outer (parent) scope, and continues this process until it reaches the global scope.
Example:
const globalVar = 'I am global';

function outerFunction() {
  const outerVar = 'I am outer';

  function innerFunction() {
    const innerVar = 'I am inner';
    console.log(innerVar); // 'I am inner' - found in the local scope of innerFunction
    console.log(outerVar); // 'I am outer' - found in the outer scope of outerFunction
    console.log(globalVar); // 'I am global' - found in the global scope
  }

  innerFunction();
}

outerFunction();

How It Works:
Inner Function: When innerFunction is called, it first checks its own local scope for innerVar, outerVar, and globalVar.
Outer Function: If innerVar is not found, it looks in outerFunction's scope for outerVar.
Global Scope: If not found in outerFunction, it finally checks the global scope for globalVar.

Closure:
A closure is a feature of JavaScript that allows functions to retain access to variables from their outer (enclosing) scope even after the outer function has finished executing.
Closures make use of the scope chain and are commonly used for data encapsulation and maintaining state.
Example of Closure:
function makeCounter() {
  let count = 0; // `count` is in the outer function's scope

  return function() {
    count += 1; // Inner function has access to `count`
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

Summary:
Scope Chain: The mechanism by which JavaScript resolves variable names through nested scopes.
Scope: Includes global and local scopes, with lexical scoping determining visibility.
Closure: A feature that retains access to variables from an outer scope even after the outer function has finished executing.
