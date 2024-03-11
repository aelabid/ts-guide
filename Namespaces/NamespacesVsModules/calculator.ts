/// <reference path="useCalculator.ts" />

namespace Calculator {
  export class BasicCalculator {
    constructor(private value: number = 0) {}

    add(num: number): this {
      this.value += num;
      return this;
    }

    subtract(num: number): this {
      this.value -= num;
      return this;
    }

    multiply(num: number): this {
      this.value *= num;
      return this;
    }

    divide(num: number): this {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.value /= num;
      return this;
    }

    getValue(): number {
      return this.value;
    }
  }
}

export { Calculator };
