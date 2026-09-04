// Decorators : Decorators are things you have written that can be attached to our code to manipulate how that code works.
// TS supports 2 kinds of decorators : ECMAScript and Experimental

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log("logger decorator");
  console.log("target", target);
  console.log("ctx", ctx);

  return class extends target {
    constructor(...args : any[]){
        super(...args)
        console.log("class constructor")
        console.log(this)
    }

  };
}

@logger
class Person {
  name = "Amir";

  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const amir = new Person()
const ava = new Person()