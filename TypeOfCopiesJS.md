Shallow Copy:
A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied,
while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object,
those changes will reflect in the other because they share the same memory reference.
Ways to Shallow Copy:
  let object2 = Object.assign(object1);
  let object2 = {...object1};


Deep Copy:
A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays.
This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location,
making them entirely independent.
  Ways to Deep Copy:
    let object2 = JSON.parse(JSON.stringify(object1);
    
Limitations of JSON.parse() and JSON.stringify() - 
  While the JSON approach is simple, it has its limitations:
    1. Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
    2. Objects with circular references (an object that refers to itself in a property using this keyword) will cause JSON.stringify() to throw an error.
    3. Dates are converted to strings during the process, losing their original type.

Lodash To Deep Copy:
Lodash is a JavaScript library that provides multiple utility functions and one of the most commonly
used functions of the Lodash library is the cloneDeep() method. This method helps in the deep cloning
of an object and also clones the non-serializable properties which were a limitation in the JSON.stringify() approach.
Ways to Lodash a Deep Copy:
  const lodash = require('lodash');
  let deepCopy = lodash.cloneDeep(employee);
