var n = [30,31,32,33,35,36,37,39];
var number = 65;
empty = [];
for (var i of n){
    for (var j of n){
        if (i+j === number){
empty.push([i,j])
}
}
}
console.log(empty)

// 15****************


var num = [3,2,5,6,15,12,9];
var odd_numbers = 0;
var even_numbers = 0;
for (var i of num){
    if (i %2 === 0){
        even_numbers+=1;
    }
    else{
        odd_numbers+=1;
    }
}
console.log("odd no____",odd_numbers)
console.log("even no____",even_numbers)




















