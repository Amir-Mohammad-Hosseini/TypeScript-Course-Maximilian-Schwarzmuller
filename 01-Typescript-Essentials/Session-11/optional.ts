// Optional Type

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("An error occurred")

type User = {
    name : string,
    age : number ,
    role ?: "admin" | "guest"
}

// Nullish Coalescing

let input = null

// If input variable equals null or undefined, right side (false here) vill be store in the constant

const didProvideInput = input ?? false