



var values = [34,2,45,67,2,8,9,10];
var odd_sum = 0;
var even_sum = 0;
for (var i of values){
    if (i%2==0){
        even_sum+=1
    }
    else{
        odd_sum+=1
}
}
console.log("ALL odd no sum",odd_sum)
console.log("All enen no sum",even_sum)




// 17*********************


var values = [23,7,45,23,0,14,9,8,49,36]
var odd_sum=0;
var even_sum=0;
for(var i of values){
    if(i%2 ===0){
        even_sum+=i
    }
    else{
        odd_sum+=i
}
}
console.log((odd_sum+even_sum)/2);


