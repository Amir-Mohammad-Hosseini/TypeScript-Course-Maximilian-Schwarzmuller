// Arrays

let hobbies : string [] = ["Backing" , "Cooking" , "Driving"]

hobbies.push("Playing")

console.log(hobbies)

// Union Arrays

let users : (string | number)[]

users = [21 , 18 , 19 , "Amir" , "Yazdan"]

console.log(users)

// Generic Array Type

let admins : Array<string|number> = ["AMIR" , "AVA" , "JERI" , 21 , 20 , 12]

console.log(admins)

// Tupples

let possibleResults : [number , number]

possibleResults = [1 , -1]

console.log(possibleResults)