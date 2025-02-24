//The .some() method checks if at least one element in an array satisfies a given condition and returns a boolean (true or false).

//array.some(callback(element, index, array), thisArg);

const numbers = [1, 3, 5, 7, 8];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 8 is even)

const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.some(fruit => fruit === "banana");
console.log(hasBanana); // true
