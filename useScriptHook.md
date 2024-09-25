The useScript hook is a custom React hook for dynamically loading external scripts into a React application. It handles:

Asynchronous Loading: Scripts are loaded asynchronously to improve performance.
Error Handling: Provides feedback if the script fails to load.
Cleanup: Removes the script from the DOM when the component unmounts or the URL changes.

Basic Usage
Implementation: Creates a <script> element, appends it to the document, and handles loading and error states.
Use in Component: Import and use useScript to manage script loading and display loading or error messages.

Example:
function MyComponent() {
  const { isLoaded, isError } = useScript('https://example.com/script.js');

  if (isError) return <div>Error loading script</div>;
  if (!isLoaded) return <div>Loading script...</div>;
  return <div>Script loaded successfully!</div>;
}

This hook simplifies integrating external scripts and managing their lifecycle in React components.


