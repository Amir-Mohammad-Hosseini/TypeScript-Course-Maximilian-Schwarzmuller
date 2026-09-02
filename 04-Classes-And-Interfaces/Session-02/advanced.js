"use strict";
// Getters and Setters
Object.defineProperty(exports, "__esModule", { value: true });
class UserDatas {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello!");
    }
}
const amirDatas = new UserDatas();
amirDatas.firstName = "Amirmohammad";
amirDatas.lastName = "Hosseini";
console.log(UserDatas.eid);
UserDatas.greet();
console.log(amirDatas.fullName);
class Employee extends UserDatas {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = "Amir"
    }
    work() {
        console.log(this._firstName);
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // Logic to duplicate the ui element
    }
}
//! let uiElement = new UIElement 
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
//# sourceMappingURL=advanced.js.map