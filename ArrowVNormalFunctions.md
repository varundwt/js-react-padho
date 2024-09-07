Arrow functions in JavaScript offer a more concise syntax and are particularly useful for short, simple functions or callbacks. 
Unlike normal functions, they do not have their own this context; instead, they inherit this from the surrounding lexical scope, 
making them ideal for cases where you want to avoid this being dynamically re-bound. However, this can be a limitation when using 
arrow functions as object methods, where this often needs to refer to the object itself. Arrow functions also lack their own arguments 
object, requiring the use of rest parameters (...args) to access arguments, and they cannot be used as constructors with the new keyword. 
\In contrast, normal functions are more versatile, having their own this and arguments, making them better suited for complex use cases 
like object methods, constructors, and scenarios where this needs to be dynamically determined based on the function's caller.

Summary Table:
Feature	                Arrow Functions	            Normal Functions
this binding	          Lexically scoped	          Dynamically scoped
Syntax	                Shorter, more concise	      Uses function keyword
arguments object	      Does not have its own	      Has its own arguments
Can be used as new	    No	                        Yes
Object methods	        Not ideal for methods	      Suited for methods
