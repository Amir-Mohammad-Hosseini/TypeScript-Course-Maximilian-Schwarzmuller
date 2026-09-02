"use strict";
// Optional Type
Object.defineProperty(exports, "__esModule", { value: true });
function generateError(msg) {
    throw new Error(msg);
}
generateError("An error occurred");
// Nullish Coalescing
let input = null;
// If input variable equals null or undefined, right side (false here) vill be store in the constant
const didProvideInput = input ?? false;
//# sourceMappingURL=optional.js.map