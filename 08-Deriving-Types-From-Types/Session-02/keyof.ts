// keyof keyword (it should be followed by another type , unlike typeof)

type User = {
    name : string,
    age : number
}

type UserKeys = keyof User


let validKey : UserKeys

validKey = "name"
validKey = "age"

function getProp<T extends object , U extends keyof T> (obj:T , key : U){
    const val = obj[key]

    if(val === undefined || val === null){
        throw new Error("Accessing undefined or null value")
    }

    return val
}

const data = {id : 1 , isStored : false , values : [-1 , 3 , 15]}
const isStored = getProp(data , "isStored")

const user = {name : "Amir" , age : 21}

const val = getProp(user , "age")