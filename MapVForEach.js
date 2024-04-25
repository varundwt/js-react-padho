let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr);


//ForEach doesnt return anything
let forEach = arr.forEach((item)=>{
    return item+6;
    });

//It returns undefined.
console.log(forEach);
//Also the original array is unaffected.
console.log(arr);


//Map updates the value the and returns a new array
let gggg = arr.map((item)=>{
    return item+3;
});

console.log(gggg);
