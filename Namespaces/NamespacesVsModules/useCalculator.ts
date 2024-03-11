
// / <reference path="calculator.ts" />

import { Calculator } from "./calculator";

const calc = new Calculator.BasicCalculator();
const result = calc.add(5).multiply(2).divide(10).getValue();
console.log(result); // Output: 1
