In JavaScript, a prototype is an object from which other objects inherit properties 
and methods. It's a core concept that allows JavaScript to implement inheritance and 
reuse functionality.

Key Concepts of Prototypes:

- Prototype Object:
Every JavaScript object has a special property called prototype, which is itself an 
object. This prototype object can have properties and methods that are shared across 
all instances of the object.
For example, when you create a function or an object, JavaScript automatically 
associates a prototype object with it, which other instances can inherit from.

- Prototypal Inheritance:
Objects in JavaScript can inherit properties and methods from another object. When 
you try to access a property or method on an object, if it's not found, JavaScript 
will look for it in the object's prototype chain. This is called prototypal 
inheritance.
Example:
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const varun = new Person('Varun');
  varun.greet(); // "Hello, my name is Varun"

In this example, the greet method is defined on the Person.prototype, so all instances 
of Person (like varun) have access to it.

- Prototype Chain:
When a property or method is not found on an object, JavaScript looks up the prototype 
chain to find it. The chain starts at the object itself, moves to its prototype, and 
continues up the chain until null is reached (the top of the chain).
For example:
  const obj = {};
  console.log(obj.toString()); // Inherited from Object.prototype
  __proto__ Property:

- The __proto__ property is a reference to the object's prototype. It allows you to 
access the prototype of an object, although it's recommended to use Object.getPrototypeOf() 
for a safer approach.
  const obj = {};
  console.log(obj.__proto__ === Object.prototype); // true

- Constructor and Prototype:
When a function is used as a constructor (with the new keyword), it assigns the prototype
property of the constructor function to the newly created object’s internal __proto__.
  function Car(model) {
    this.model = model;
  }
  const car1 = new Car("Tesla");
  console.log(car1.__proto__ === Car.prototype); // true

- Modifying Prototypes:
You can add or modify methods and properties in the prototype of an object to share 
behavior across instances.
  Car.prototype.drive = function() {
    console.log(this.model + " is driving");
  };
  const car2 = new Car("BMW");
  car2.drive(); // "BMW is driving"
Example:
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  };
  
  const dog = new Animal("Dog");
  dog.speak(); // "Dog makes a sound"

- Prototype Chain Example:
  const animal = {
    eats: true
  };
  
  const dog = {
    barks: true
  };
  
  dog.__proto__ = animal; // Dog inherits from animal
  console.log(dog.eats);  // true (inherited)

Summary:
Prototype: An object from which other objects inherit properties and methods.
Prototypal Inheritance: A mechanism in JavaScript where an object can inherit 
properties from another object via its prototype.
Prototype Chain: The chain of objects that JavaScript traverses to look for 
properties and methods.
Constructor Functions: Use prototypes to assign shared behavior across instances 
created with the new keyword.
In modern JavaScript, classes are often used, but under the hood, they are just 
syntactic sugar for prototypes.
