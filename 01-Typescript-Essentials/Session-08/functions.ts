// Function return type . In the following example , add function returns a number

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(18 , 19)
console.log(result)

// Void type

function logger(message: string) {
  console.log("Message is : ", message);
}
logger("void type")

// Never type . This type means that function never returns anything

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
// logAndThrow("never type")

// Functions as types

const logMsg = (message : string) => {
    console.log(message)
}

function performJob (cb : (msg:string) => void){
    cb("Job done!")
}

performJob(logMsg)

type User= {
    name : string ,
    age : number,
    greet : () => string
}

let user : User = {
    name : "Amir",
    age : 21,
    greet() {
        console.log("Hello there!")
        return this.name
    },
}

console.log(user)

const userGreet = user.greet()
console.log(userGreet)