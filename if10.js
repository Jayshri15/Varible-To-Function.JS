var r = require("readline-sync");
var varx=r.questionInt("enter a number");
var vary=r.questionInt("enter a number");
if(varx % vary === 0){
console.log("Divisible");
}
else{
console.log("Not Divisible");
}


// 11********************************


var m = require("readline-sync");
var num1=m.questionInt("enter a number");
var num2=m.questionInt("enter a number");
if(num1 > num2){
console.log("num1 is greater");
}
else{
console.log("num2 is greater");
}


// 12*************************************


var dic = require("readline-sync");
var num1=dic.questionInt("enter a number");
if(num1 % 5 === 0 && num1 % 15 === 0){
console.log("Divisible by both");
}
else{
console.log("Not divisible by both");
}



// 13*****************************


var sim = require("readline-sync");
var jayu = sim.questionInt("enter a number_");
if (jayu >= 5){
    console.log("can go to school.")
}
if (jayu >= 18){
    console.log("You can vote in elections.");
}
if (jayu >= 21){
    console.log("You can drive a car");
}
if (jayu >= 24){
    console.log("You can marry");  
}
if (jayu >= 25){
    console.log("You can drink")
}