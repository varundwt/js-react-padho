JavaScript objects come with several built-in methods that are essential for working with and manipulating objects. Here’s a summary of the key object methods:

1. Object.keys(obj)
Purpose: Returns an array of a given object's own enumerable property names.
Usage:
  const obj = { a: 1, b: 2 };
  console.log(Object.keys(obj)); // ["a", "b"]

3. Object.values(obj)
Purpose: Returns an array of a given object's own enumerable property values.
Usage:
  const obj = { a: 1, b: 2 };
  console.log(Object.values(obj)); // [1, 2]

5. Object.entries(obj)
Purpose: Returns an array of a given object's own enumerable property [key, value] pairs.
Usage:
  const obj = { a: 1, b: 2 };
  console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]

7. Object.assign(target, ...sources)
Purpose: Copies all enumerable own properties from one or more source objects to a target object.
Usage:
  const target = { a: 1 };
  const source = { b: 2 };
  Object.assign(target, source);
  console.log(target); // { a: 1, b: 2 }

9. Object.freeze(obj)
Purpose: Freezes an object, preventing new properties from being added, existing properties from being removed, or existing properties from being modified.
Usage:
  const obj = { a: 1 };
  Object.freeze(obj);
  obj.a = 2; // No effect
  console.log(obj.a); // 1

11. Object.seal(obj)
Purpose: Seals an object, preventing new properties from being added and marking all existing properties as non-configurable, but allowing modification of existing properties.
Usage:
  const obj = { a: 1 };
  Object.seal(obj);
  obj.a = 2; // Allowed
  delete obj.a; // Not allowed
  console.log(obj.a); // 2

13. Object.create(proto, propertiesObject)
Purpose: Creates a new object with the specified prototype object and properties.
Usage:
  const proto = { a: 1 };
  const obj = Object.create(proto);
  console.log(obj.a); // 1

15. Object.getPrototypeOf(obj)
Purpose: Returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.
Usage:
  const obj = {};
  console.log(Object.getPrototypeOf(obj)); // [Object: null prototype] {}

17. Object.setPrototypeOf(obj, prototype)
Purpose: Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object.
Usage:
  const obj = {};
  const proto = { a: 1 };
  Object.setPrototypeOf(obj, proto);
  console.log(obj.a); // 1

19. Object.prototype.hasOwnProperty(prop)
Purpose: Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
Usage:
  const obj = { a: 1 };
  console.log(obj.hasOwnProperty('a')); // true
  console.log(obj.hasOwnProperty('b')); // false

Summary
  Object.keys(obj): Gets property names.
  Object.values(obj): Gets property values.
  Object.entries(obj): Gets [key, value] pairs.
  Object.assign(target, ...sources): Copies properties.
  Object.freeze(obj): Freezes object properties.
  Object.seal(obj): Seals object properties.
  Object.create(proto, propertiesObject): Creates object with prototype.
  Object.getPrototypeOf(obj): Gets prototype of an object.
  Object.setPrototypeOf(obj, prototype): Sets prototype of an object.
Object.prototype.hasOwnProperty(prop): Checks if object has own property.
