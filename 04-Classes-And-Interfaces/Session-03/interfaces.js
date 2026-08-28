"use strict";
// Interface is all about define shape of something . That does not contain any value or logic
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = {
    email: "example@gmail.com",
    password: "amir1234",
    role: "USER",
    login() {
        console.log("Logged in");
    },
    logout() {
        console.log("Logged out!");
    },
};
// Use Interfaces in conjunctions with classes
class AuthenticatableUser {
    userName;
    email;
    password;
    role;
    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    login() { }
    logout() { }
}
// warranty the types with interfaces
function authenticate(user) {
    user.login();
}
//# sourceMappingURL=interfaces.js.map