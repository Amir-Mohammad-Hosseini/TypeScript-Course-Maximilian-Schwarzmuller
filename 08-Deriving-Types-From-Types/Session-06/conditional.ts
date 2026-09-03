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
