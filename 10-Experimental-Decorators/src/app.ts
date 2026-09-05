function Logger (logString : string) {

    return function (constructor : Function){
        console.log(logString)
        console.log(constructor)

    }
}

function WithTemplate(template :string , hookId : string){
    return function (constructor : any){
        console.log("Rendering template...")
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector("h1")!.textContent = p.name
        }

    }
}

@Logger("LOGGING - PERSON") // It executes after @WithTemplate
@WithTemplate("<h1>My Person Object</h1>" , "app") // It executes first
class Person {
    name = "Amir"
    constructor (){
        console.log("Creating person object...")
    }
}

const person = new Person()
console.log(person)