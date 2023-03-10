const prompt = require("prompt-sync")();
let num = prompt("Enter number: ");
var sum = 0;
while(num>0){
    m = num%10;
    sum = sum + m;
    num = Math.floor(num/10);

}
console.log(sum);