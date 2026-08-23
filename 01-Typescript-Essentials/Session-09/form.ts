// Inferred Null and Take a closer look at Type narrowing

const inputEl = document.getElementById("user-name")

if(!inputEl){
    throw new Error("Element not found!")
}

/*

We get error here

console.log(inputEl?.value)
*/

// Type Casting

const inputElement = document.querySelector("#user-name") as HTMLInputElement | null

if(!inputElement){
    throw new Error("Element not found!")
}

console.log(inputElement?.value)