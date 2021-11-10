// 1**************************


var n = require("readline-sync");
var name = n.question("enter name: ")
const store = name;
var string = ""
for (let i = name.length-1;i>=0;i--){
    string = string + name[i]
}
if (store === string){
    console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}


// 2*******************************

var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
var count=0;
while (i<num) {
       if (num%i===0) {
       count=count+1
       }
       i++;
}
if (count===0) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}


