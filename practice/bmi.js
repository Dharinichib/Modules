const prompt = require("prompt-sync")();
var h = prompt("Enter height: ");
var wt = prompt("Enter weight: ");
var bmi = wt/(h**2);
var output ="";
function bmiCal(bmi){
   
    if(bmi>25 && bmi<29)
    {
       output = "over weight"; 
    }
    else if(bmi>18.5 && bmi<24.9)
    {
       output = "average weight";
    }
    else if(bmi<18.5){
        output = "under weight";
    }
    else if(bmi>10||bmi<15){
        output ="11";
    }
    else if(bmi>10&&bmi<15){
        output ="11";}
    return output;
}
console.log(bmiCal(bmi));
