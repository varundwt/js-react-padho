map, filter, and reduce are essential JavaScript array methods for manipulating arrays. Each method serves a different purpose:

1. map:
Purpose: Transforms each element of an array and returns a new array with the results.
Return Value: A new array where each element is the result of applying the callback function to each element of the original array.
Usage: Use when you want to modify each element of an array and obtain a new array.
Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

2. filter:
Purpose: Creates a new array with all elements that pass a test implemented by the callback function.
Return Value: A new array containing only the elements that satisfy the condition.
Usage: Use when you need to remove elements that don’t meet certain criteria and keep only the desired elements.
Example:
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

3. reduce:
Purpose: Applies a function to accumulate a single result from all elements of an array.
Return Value: A single value (the result of the accumulation) derived from processing each element of the array.
Usage: Use when you need to combine all elements into a single value, such as calculating a sum or concatenating values.
Example:
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10

Summary:
Method	    Purpose					                            Return Value			                      Usage						                                      Example
map	        Transforms elements				                  New array with transformed elements     Modify each element and return a new array	          numbers.map(num => num * 2)
filter	    Filters elements based on a condition	      New array with filtered elements        Keep only elements that meet a condition		          numbers.filter(num => num % 2 === 0)
reduce	    Reduces array to a single value		          Single accumulated value	              Combine all elements into one value, like a sum	      numbers.reduce((total, num)=>total+num,0)

In summary, use map to transform each element, filter to select elements based on a condition, and reduce to accumulate a single result from all elements.
