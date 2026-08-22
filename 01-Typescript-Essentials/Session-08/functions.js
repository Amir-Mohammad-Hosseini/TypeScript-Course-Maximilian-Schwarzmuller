"use strict";
// Function return type . In the following example , add function returns a number
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(18, 19);
console.log(result);
// Void type
function logger(message) {
    console.log("Message is : ", message);
}
logger("void type");
// Never type . This type means that function never returns anything
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// logAndThrow("never type")
// Functions as types
const logMsg = (message) => {
    console.log(message);
};
function performJob(cb) {
    cb("Job done!");
}
performJob(logMsg);
let user = {
    name: "Amir",
    age: 21,
    greet() {
        console.log("Hello there!");
        return this.name;
    },
};
console.log(user);
const userGreet = user.greet();
console.log(userGreet);
