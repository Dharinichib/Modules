const prompt = require("prompt-sync")();
var radius = prompt("enter Radius ");
var area =  (22/7)*radius;
var perimeter = 2*(22/7)*radius;
console.log("Area of Circle ",area);
console.log("Perimeter of Circle ",perimeter);