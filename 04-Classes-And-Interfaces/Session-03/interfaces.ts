// Interface is all about define shape of something . That does not contain any value or logic

interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// Declaration Merging
interface Authenticatable {
  role: string;
}

let user: Authenticatable;

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

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public role : string
  ) {}

  login() {}
  logout() {}
}

// warranty the types with interfaces

function authenticate(user: Authenticatable) {
  user.login();
}

// Extend an interface

interface AuthenticatableAdmin extends Authenticatable {
    role : "admin" | "super admin"
}