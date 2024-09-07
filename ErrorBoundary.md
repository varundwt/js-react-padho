Error Boundary - 

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors,
and display a fallback UI instead of the component tree that crashed (in class-based components). Error boundaries catch errors
during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Error boundaries do not catch errors for -
-  Event handlers
-  Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
-  Server side rendering
-  Errors thrown in the error boundary itself (rather than its children)
