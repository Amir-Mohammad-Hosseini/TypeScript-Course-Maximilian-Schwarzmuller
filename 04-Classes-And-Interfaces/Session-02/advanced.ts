// Getters and Setters

class UserDatas {
    private _firstName : string  = ""
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
        //...
    }
}