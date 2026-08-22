// Inferred Null and Take a closer look at Type narrowing

const inputEl = document.getElementById("user-name")

if(!inputEl){
    throw new Error("Element not found!")
}

console.log(inputEl?.value)