// Index types

type DataStore = {
    [prop : string] : number | boolean
}

// Flash back to Recort type

let someObj : Record<string , number | boolean>

//...

let store : DataStore = {}

store.id = 5
store.isOpen = false

// Constant types with as const => the variable will be readonly

let roles = ["admin" , "guest" , "editor"] as const
//! roles.push("user")

const firstRole = roles[0]

// satisfies keyword

//satisfies takes a look at variable to check the actual value of variable

const dataEntries = {
    entry1 : 0.51,
    entry2 : -1.23
} satisfies Record<string , number>

//...

//! dataEntries.entry3