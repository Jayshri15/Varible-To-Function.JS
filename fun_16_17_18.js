// 16_____

function perfect(num){
    sum = 0
    for(var i=1;i<num;i++){
        if(num%i === 0){
        sum += i
    }
}
    if(sum === num){
        console.log(num," is a perfect number");
    }
    else{
        console.log(num," is not a perfect number");
    }
}
perfect(18);


// 17______


function avrange(num1,num2,num3){
    console.log("sum of the this",num1+num2+num3)
    console.log("sum of the avrange ",(num1+num2+num3)/3);
}
   var num = require("readline-sync");
   var a_1 = num.questionInt("Enter the value_");
   var a_2 = num.questionInt("Enter the value_");
   var a_3 = num.questionInt("Enter the value_");
avrange(a_1,a_2,a_3);


// 18_________



function showNumbers(limit){
    for(i=0;i<=limit;i++){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
    }
}
showNumbers(10);

    














    
    
    
    
    
    
    