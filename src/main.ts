function deco(value: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log(value);
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @deco("aaa")
    greet1() {
        return "Hello, " + this.greeting;
    }
    @deco("bbb")
    greet2() {
        return "Hello, " + this.greeting;
    }
}

const g = new Greeter('xxx');
console.log(g.greet1())
console.log(g.greet2())