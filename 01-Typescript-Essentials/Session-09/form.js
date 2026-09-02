"use strict";
// Inferred Null and Take a closer look at Type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
const inputEl = document.getElementById("user-name");
if (!inputEl) {
    throw new Error("Element not found!");
}
/*

We get error here

console.log(inputEl?.value)
*/
// Type Casting
const inputElement = document.querySelector("#user-name");
if (!inputElement) {
    throw new Error("Element not found!");
}
console.log(inputElement?.value);
//# sourceMappingURL=form.js.map