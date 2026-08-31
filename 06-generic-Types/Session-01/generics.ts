let names: Array<string> = ["Amir", "Max"];

// Own genric type

type DataStore<T> = {
  [key: string]: T;
};
let store: DataStore<string | boolean> = {};

store.name = "Amir";
store.isInstructor = true;

let nameStore : DataStore<string> = {}



// Generic functions and Inferencing --- more than one parameter

function merge<T,U> (a:T , b: U){
    return [a, b]
}


// Inference
const ids = merge(1 , "Amir")

// Generics and constraints

function mergeObj<T extends object, U extends object> (a:T, b:U){
    return {...a, ...b}
}

const merged = mergeObj({userName : "Amir"} , {age : 21})
console.log(merged)



// Generic classes

class User<T> {
     constructor ( public id : T){}
}

const user = new User("u1")
