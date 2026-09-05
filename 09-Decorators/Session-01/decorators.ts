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
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any){
    console.log("Executing original function")
    target.apply(this)
  }
}

function replacer<T> (initValue : T) {
  return function replacerDecorator (target :undefined , ctx : ClassFieldDecoratorContext){
    console.log(target)
    console.log(ctx)
  
    return (initialValue : any) => {
      console.log(initialValue)
      return initValue
    }
  }

}


@logger
class Person {
  @replacer("")
  name = "Amir";

  @autobind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const amir = new Person();
const ava = new Person();

const greet = amir.greet;

greet();
