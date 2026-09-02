"use strict";
//Enums
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = 0; // 0 equals Admin
userRole = Role.Guest;
console.log(userRole);
// Literal type
let orderStatus = "paid";
orderStatus = "delivered";
let possibleResults = [-1 | 1, 2 | -2];
possibleResults = [1, -2];
console.log(orderStatus, possibleResults);
let product = "in stock";
function accessStatus(role) {
    //...
}
//# sourceMappingURL=choices.js.map