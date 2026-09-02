"use strict";
// Function overloading
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(val) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} word${numberOfWords > 1 ? "s" : ""}`;
    }
    return val.length;
}
const numOfWords = getLength("does this work?");
const numOfArray = getLength(["Sports", "Cookies"]);
//# sourceMappingURL=functions.js.map