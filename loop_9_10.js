// 9**************************

var sum = 0;
for (var i = 1; i <= 10; i++){
const input = require('readline-sync');
let number = input.questionInt('Enter the number');
sum = sum +number
};
console.log(sum);


var sum = 0,i = 0;
while (i<10){
    var pillu = require("readline-sync");
    var number = pillu.questionInt("enter the number***");
    sum +=number;
    i ++;
}
console.log(sum);



// 10***********************




var i = 0;
while(i<=10){
    if (i%2==0){
        console.log(-i);
    }
    else{
        console.log(i);
    }
    i++
}
