ASYNC/DEFER:
async and defer are attributes used in the <script> tag to control the loading and execution of JavaScript files in HTML.

async:
- Purpose: Loads the script asynchronously while the HTML document continues to be parsed. The script will be executed as soon as it’s loaded.
- Usage: Ideal for scripts that don’t depend on other scripts or the DOM being fully loaded.
- Behavior: The script is fetched in parallel with HTML parsing. Once loaded, it interrupts the HTML parsing to execute. It doesn't guarantee the order of execution if multiple async scripts are used.
    <script src="script.js" async></script>

defer:
- Purpose: Loads the script asynchronously, but defers its execution until after the HTML document has been fully parsed.
- Usage: Ideal for scripts that need to interact with the DOM and should be executed in order.
- Behavior: The script is fetched in parallel with HTML parsing but is executed in the order it appears in the document after parsing is complete.
<    script src="script.js" defer></script>

Summary:
async: Loads and executes the script asynchronously, potentially out of order, as soon as it’s available.
defer: Loads the script asynchronously but executes it in order after the HTML document has been fully parsed.
Use async for independent scripts and defer for scripts that depend on DOM being ready and need to execute in sequence.
