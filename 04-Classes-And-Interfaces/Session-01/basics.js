"use strict";
// Define Class
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    }
}
const amirUser = new User("Amir", 21);
console.log(amirUser);
// A shortcut of defining a class
class Product {
    title;
    price;
    colors = [];
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    showTitle() {
        console.log(this.title);
    }
}
const samsungS20Ultra = new Product("Samsung Galaxy S20 Ultra", 20_000_000);
const iphone14ProMax = new Product("IPhone 14 Pro Max", 120_000_000);
samsungS20Ultra.price = 67_000_000;
console.log(samsungS20Ultra, iphone14ProMax);
//# sourceMappingURL=basics.js.map