//Enums

enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

let userRole: Role = 0; // 0 equals Admin

userRole = Role.Guest;

console.log(userRole);

// Literal type

let orderStatus: "not paid" | "paid" | "delivered" = "paid";

orderStatus = "delivered";

let possibleResults = [-1 | 1, 2 | -2];

possibleResults = [1, -2];

console.log(orderStatus , possibleResults)

//Type Aliases

type ProductStatus = "in stock" | "not in stock" | "out of stock"


let product : ProductStatus = "in stock"

function accessStatus (role : ProductStatus){
  //...
}