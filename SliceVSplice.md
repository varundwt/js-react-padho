In JavaScript, both slice() and splice() are array methods, but they differ in their functionality and use cases:

slice()

Purpose: Returns a shallow copy of a portion of an array without modifying the original array.
Parameters:
start: The index at which to begin extraction.
end (optional): The index before which to stop extraction (exclusive).
Return Value: A new array containing the extracted elements.
Doesn't modify the original array.

Example:
const fruits = ['apple', 'banana', 'orange', 'mango'];
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ['banana', 'orange']
console.log(fruits);       // Original array remains: ['apple', 'banana', 'orange', 'mango']

splice()

Purpose: Modifies the contents of an array by removing, replacing, or adding elements.
Parameters:
start: The index at which to start changes.
deleteCount (optional): Number of elements to be removed.
items (optional): Elements to add in place of the removed elements.
Return Value: An array containing the removed elements.
Modifies the original array.

Example:

const fruits = ['apple', 'banana', 'orange', 'mango'];
const splicedFruits = fruits.splice(1, 2, 'grape');

console.log(splicedFruits); // Output: ['banana', 'orange'] (removed elements)
console.log(fruits);        // Modified array: ['apple', 'grape', 'mango']

Key Differences:

slice() is non-destructive (does not modify the original array), while splice() alters the original array.
slice() is used for copying parts of the array, whereas splice() is used for adding/removing/replacing elements.


