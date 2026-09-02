"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Amir", "Max"];
let store = {};
store.name = "Amir";
store.isInstructor = true;
let nameStore = {};
// Generic functions and Inferencing --- more than one parameter
function merge(a, b) {
    return [a, b];
}
// Inference
const ids = merge(1, "Amir");
// Generics and constraints
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ userName: "Amir" }, { age: 21 });
console.log(merged);
// Generic classes
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
const user = new User("u1");
//# sourceMappingURL=generics.js.map