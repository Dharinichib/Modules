const prompt = require("prompt-sync")();
let day =prompt("ENTER THE DAY");
switch(day){
           case "monday":
            console.log("today is monday")
            
            break;

            case "tuesday":
            console.log("today is tuesday")
            break;

            case "wednesday":
            console.log("today is wednesday")
            break;

            case "thursday":
            console.log("today is thursday")
            break;

            case "friday":
            console.log("today is friday")
            break;

            case "saturday":
            console.log("Today is saturday")
            break;
            
            default:
            console.log("today is sunday")
            break;
}
