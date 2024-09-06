Class Components:
A class component requires you to extend from React. Component and create a render function that
returns a React element. It must have the render() method returning JSX (which is syntactically
similar to HTML). These are Stateful components, React lifecycle methods can be used inside class
components (for example, componentDidMount). It requires different syntax inside a class component
to implement hooks.

Functional Components:   
A functional component is just a plain JavaScript pure function that accepts props as an argument
and returns a React element(JSX). There is no render method used in it. These are Stateless components,
React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
Hooks can be easily used in functional components to make them Stateful.
