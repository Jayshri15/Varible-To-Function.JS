var  cv = require("readline-sync");
var water = cv.questionInt("enter the litter water...");
if (water<1){
    console.log("more water need to fill ");
}
else if (water>=1 && water<=10){
    console.log("no need to fill water.");
}
else{
    console.log("overflow.");
}
console.log(typeof(water));
