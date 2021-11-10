// 20************


 var m = require("readline-sync");
 var char = m.question("any words you can add__");
 v = [];
 for (var i of char){
     if (!v.includes(i)){
         v.push(i)
}
}
console.log(v);

for (var j of v){
    count = 0;
    for (var k of char){
        if (j === k){
        count+=1
    }
}
console.log(j,"=",count,"times")
}























