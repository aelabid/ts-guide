function logged<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
      constructor(...args: any[]) {
          super(...args);
          console.log(`New instance of ${constructor.name} created.`);
      }
  };
}

@logged
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

const greet1 = new Greeter("asmaa");
const greet2 = new Greeter("ali");