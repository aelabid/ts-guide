function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const result = originalMethod.apply(this);
        return result.toUpperCase();
    };
}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}

const greet = new Greeter("asmaa");
console.log(greet.greet())

