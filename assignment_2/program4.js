let sum = function(n1, n2)
{
    let res = n1 + n2;
    return res;
}
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("ENTER NUMBER 1: "));
let num2 = parseInt(prompt("Enter number 2: "));
console.log(sum(num1,num2));