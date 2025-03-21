Debouncing
Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed. This is useful if you have a frequently used function—say, a scroll or resize event listener—and don’t want to trigger it too frequently because that might slow down the browser.

Throttling
Throttling is a similar technique to debouncing, but instead of delaying the execution of a function, it limits the rate at which a function. This is useful when a function, such as a mousemove or keydown event listener, may be called repeatedly but need not be run each time.
