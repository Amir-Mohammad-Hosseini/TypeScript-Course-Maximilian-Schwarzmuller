"use strict";
function addNumbers(a, b = 9) {
    return a + b;
}
const result1 = addNumbers(10, 8);
const result2 = addNumbers(10);
console.log(result1, result2);
