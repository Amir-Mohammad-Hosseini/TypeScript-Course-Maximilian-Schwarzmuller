"use strict";
// Type guards
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    type: "file",
    path: "some/path/to/file.csv",
};
const dbSource = {
    type: "db",
    connectionUrl: "some-connection-url",
};
// Type predicates
function isFile(source) {
    return source.type === "file";
}
function loadData(source) {
    /*
      //* Type guard is this
  
      if ("path" in source) {
        //source.path; => use that to open the file
        
        return;
        }
        //   source.connectionUrl; => to reach out to database
        
        */
    // Discriminated unions pattern (we should add type property to FileSource and DBSource)
    if (isFile(source)) {
        //source.path; => use that to open the file
        return;
    }
    //   source.connectionUrl; => to reach out to database
}
// Type guards from instanceof
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        //...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        //...
    }
}
const user = new User('Max');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    // instanceof keyword is specific for vanilla js
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
//# sourceMappingURL=guards.js.map