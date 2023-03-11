function sum(num1, num2){
    return num1 + num2;
}
const prompt = require("prompt-sync")();
a = parseInt(prompt("Enter first number: "));
b = parseInt(prompt("Enter second number: "));
console.log(sum(a,b));