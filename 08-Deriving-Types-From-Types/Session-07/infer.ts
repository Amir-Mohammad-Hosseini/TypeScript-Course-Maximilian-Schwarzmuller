// infer keyword => it needs to use with conditional types to extract some information

function add (a:number , b : number) {
    return a + b
}

type AddFn = typeof add
type ReturnValueType<T> = T extends (...args : any[]) => infer RV ? RV : never
type AddFnReturnValueType = ReturnValueType<AddFn>

