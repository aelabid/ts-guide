class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    getName(): string{
        return this.name;
    }
}

let person = new Person("asmaa");
//error
// console.log(person.name);
console.log(person.getName());