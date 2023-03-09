const prompt = require("prompt-sync")();
var f = prompt("enter the temperature in fahrenheit:");
var c = (32*f - 32)*5/9;
console.log(c);