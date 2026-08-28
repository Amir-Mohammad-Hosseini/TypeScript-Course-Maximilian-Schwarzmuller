// Getters and Setters

class UserDatas {
    protected _firstName : string  = ""
     private _lastName : string = ""

     set firstName (name : string){
        if(name.trim() === ""){
            throw new Error("Invalid name.")
        }
        this._firstName = name
     }

     set lastName (name : string){
        if(name.trim() === ""){
            throw new Error("Invalid name.")
        }
        this._lastName = name
     }

    get fullName (){
        return this._firstName + " " + this._lastName
    }

    static eid = "USER"

    static greet (){
        console.log("Hello!")
    }

}

const amirDatas = new UserDatas()


amirDatas.firstName ="Amirmohammad"
amirDatas.lastName ="Hosseini"



console.log(UserDatas.eid)
UserDatas.greet()
console.log(amirDatas.fullName)

class Employee extends UserDatas {
    constructor (public jobTitle :string){
        super()
        // super.firstName = "Amir"
    }

    work (){
        console.log(this._firstName)
    }
}

abstract class UIElement {
    constructor(public identifier : string) {
        
    }

    clone (targetLocation : string){
        // Logic to duplicate the ui element
    }
}

//! let uiElement = new UIElement 

class SideDrawerElement extends UIElement {
    constructor ( public identifier : string , public position : "left" | "tight"){
        super(identifier)
    }

    //...
}