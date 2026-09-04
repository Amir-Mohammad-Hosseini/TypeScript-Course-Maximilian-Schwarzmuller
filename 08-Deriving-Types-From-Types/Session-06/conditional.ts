// conditional types

type StringArray = string[];

// type ElementType<T extends any[]> =  T[number]

// type Example1 = ElementType<StringArray>

let text = 1;

// type Example2 = ElementType<typeof text>


// conditional types by ternary expression
type GetElementType<T> = T extends any[] ? T[number] : T;

type Example1 = GetElementType<StringArray>;

type Example2 = GetElementType<typeof text>;


type FullNamePerson = {firstName : string , lastName : string}
type FullNameOrNothing<T> = T extends FullNamePerson ?string : never

function getFullName<T extends object> (person : T)  {
    if("firstName" in person && "lastName" in person && person.firstName && person.lastName){
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>
    }

    throw new Error("No first name or last name found")
}

const name1 = getFullName({})
const name2 = getFullName({firstName : "Amir" , lastName : "Hosseini"})