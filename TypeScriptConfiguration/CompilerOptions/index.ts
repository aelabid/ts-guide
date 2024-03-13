function greet(name: string | null) {
    return "Hello, " + name;
}

// this didn't work till add | null to the greet function
const result = greet(null)
console.log(result);