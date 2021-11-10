// 10*******************


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]
for(var i=numbers.length-1; i>=0;i--){
reversedArray.push(numbers[i])
}
console.log(reversedArray);
console.log(typeof(numbers));


// 11***********************


var me = require("readline-sync");
var Name = me.question("any words_____");
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
new_array.push(Name[i]);
}
var count=0;
for (var j=0; j<Name.length; j++){
    if (new_array[j]===Name[j]){
        count++;
    }
}
if(count===Name.length){
    console.log("This is palindrome");
}else{
console.log("This is not a palindrome");
}

var me 













