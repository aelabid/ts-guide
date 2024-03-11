function identity<T>(arg: T): T {
    console.log(typeof(arg));
  return arg;
}

console.log(identity([1, 2, 3]));
console.log(identity("Hello everyone"));
console.log(identity(true));
