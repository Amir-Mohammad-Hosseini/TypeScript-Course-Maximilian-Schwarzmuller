// Function overloading

function getLength (val: string) : string
function getLength (val: any[]) : number

function getLength (val : string | any[]){
    if(typeof val === "string"){
        const numberOfWords = val.split(" ").length
        return `${numberOfWords} word${numberOfWords > 1 ? "s" : ""}`
    }
    return val.length
}

const numOfWords = getLength("does this work?")
const numOfArray = getLength(["Sports" , "Cookies"])