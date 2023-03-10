const prompt = require("prompt-sync")();
var str = prompt("enter string"); 
var count = 0;
for(var i = 0; i<str.length-1; i++){
      //console.log(str.charAt(i));
       count++;
}
var spaceCount = (str.split(" ").length - 1);
console.log("space count ",spaceCount)
console.log("letter count ",count);  