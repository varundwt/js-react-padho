//The .some() method checks if at least one element in an array satisfies a given condition and returns a boolean (true or false).
//array.some(callback(element, index, array), thisArg);

const numbers = [1, 3, 5, 7, 8];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 8 is even)

const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.some(fruit => fruit === "banana");
console.log(hasBanana); // true


//The .every() method checks if all elements in an array satisfy a given condition and returns a boolean (true or false).
//array.every(callback(element, index, array), thisArg);

const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true (because all numbers are even)

const nums = [2, 4, 6, 7, 8];
const allEven = nums.every(num => {
  console.log("Checking:", num);
  return num % 2 === 0;
});
console.log(allEven);
