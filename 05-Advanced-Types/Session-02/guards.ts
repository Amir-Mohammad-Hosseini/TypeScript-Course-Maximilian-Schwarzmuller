// Type guards

type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};
type Source = FileSource | DBSource;

// Type predicates
function isFile (source : Source){
    return source.type === "file"
}

function loadData(source: Source) {
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
  constructor(public name: string) {}
  join() {
    //...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    //...
  }
}


const user = new User('Max');
const admin = new Admin( ['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {

    // instanceof keyword is specific for vanilla js
    if(entity instanceof User){
        entity.join()
        return
    }

    entity.scan()
}