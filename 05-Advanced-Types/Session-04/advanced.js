"use strict";
// Index types
Object.defineProperty(exports, "__esModule", { value: true });
// Flash back to Recort type
let someObj;
//...
let store = {};
store.id = 5;
store.isOpen = false;
// Constant types with as const => the variable will be readonly
let roles = ["admin", "guest", "editor"];
//! roles.push("user")
const firstRole = roles[0];
// satisfies keyword
//satisfies takes a look at variable to check the actual value of variable
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
};
//...
//! dataEntries.entry3
//# sourceMappingURL=advanced.js.map