const prompt = require("prompt-sync")();
var a = prompt("Enter value of a: ");
var b = prompt("Enter value of b: ");
var temp;
temp = a;
a = b;
b = temp;
console.log("After swapping a: "+a +"\n b: " +b);
