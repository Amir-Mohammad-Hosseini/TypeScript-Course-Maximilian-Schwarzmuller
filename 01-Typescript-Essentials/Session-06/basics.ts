// Object

let userDatas: {
  name: string;
  age: number;
  isAdmin: boolean;
  hobbies: Array<string>;
  address: {
    country : string,
    city : string
  }
} = {
  name: "Amir",
  age: 21,
  isAdmin: false,
  hobbies: ["Cooking", "Playing", "Programming"],
  address : {
    country : "Iran",
    city : "Tehran"
  }
};

console.log(userDatas);

// Object type's bug (must not be null or undefined)

let productDatas : {} = "Iphone 17 Pro Max"

productDatas = 21 // !!!

productDatas = ["p1" , "p2" , "p3"] // !!!

console.log(productDatas)

// Record type, A flexible object

let cartDatas : Record<string , number | string>

cartDatas = {
    itemsCount : 5,
    itemsName : "Cart Items..."
}

console.log(cartDatas)