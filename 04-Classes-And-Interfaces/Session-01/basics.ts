// Define Class

class User {
  name: string;
  age: number;

  constructor(userName: string, userAge: number) {
    this.name = userName;
    this.age = userAge;
  }
}

const amirUser = new User("Amir", 21);
console.log(amirUser);

// A shortcut of defining a class

class Product {
  colors: string[] = [];

  constructor(
    private readonly title: string,
    public price: number,
  ) {}

  showTitle() {
    console.log(this.title);
  }
}

const samsungS20Ultra = new Product("Samsung Galaxy S20 Ultra", 20_000_000);
const iphone14ProMax = new Product("IPhone 14 Pro Max", 120_000_000);

samsungS20Ultra.price = 67_000_000;

console.log(samsungS20Ultra, iphone14ProMax);
