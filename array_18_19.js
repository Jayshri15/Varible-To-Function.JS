// 18*******************8

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
for(var i of elements){
if(i%2 ===0){
sum_even_numbers+=i;
count_even_numbers+=1;
}
else{
sum_odd_numbers+=i;
count_odd_numbers+=1;
}
}
console.log((("avrage."),sum_even_numbers+sum_odd_numbers)/2);
console.log(("odd no counting.."),count_odd_numbers);
console.log(("even no counting..."),count_even_numbers);
console.log(("odd sum...."),sum_odd_numbers);
console.log(("even sum....."),sum_even_numbers);


// 19*****************


var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 
5600000, 690909090, 31010101, 532010, 510, 4100]
var count_of_crorepati=0;
var count_of_lakhpati=0;
var count_of_dilwale=0;
for( var  i of kitna_paisa_hai){
    if(i>= 10000000){
        count_of_crorepati+=1
    }
    else if(i>=100000){
        count_of_lakhpati+=1
    }
    else{
        count_of_dilwale+=1
    }
}
console.log("crorepati is*_",count_of_crorepati);
console.log("lakhpati is**__",count_of_lakhpati);
console.log("dilwale is***___",count_of_dilwale);



















