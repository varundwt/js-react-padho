//Call method calls a function from an object and uses the properties of another object to be passed as arguments.
//Call invokes immediately.

let call1 = {
    name:'Varun',
    age: 25,
    objectFunction: function(){
        console.log('CALL : ' + this.name + ' is ' + this.age + '.');
    }
}

let call2 = {
    name: 'Dheeraj',
    age: 22
}

call1.objectFunction.call(call2);


//Bind method also calls a function from an object and uses the properties of another object to be passed as arguments.
//unlike Call, Bind method doesnt get invoked immediately, we need to create an expression of the method and then call it.

let bind1 = {
    name:'Varun',
    age: 25,
    objectFunction: function(){
        console.log('BIND : ' + this.name + ' is ' + this.age + '.');
    }
}

let bind2 = {
    name: 'Dheeraj',
    age: 22
}

let bind = bind1.objectFunction.bind(bind2);
bind();


//Apply method also calls a function from an object and uses the properties of another object to be passed as arguments.
//It can also take multiple arguments inside an array and pass those arguments usinf REST parameters.
//Apply also gets invoked immediately.

let apply1 = {
    name:'Varun',
    age: 25,
    objectFunction: function(...hobby){
        console.log('APPLY : '+ this.name + ' is ' + this.age + '. He likes ' + hobby +'.');
    }
}

let apply2 = {
    name: 'Dheeraj',
    age: 22
}

apply1.objectFunction.apply(apply2, ['Football']);
