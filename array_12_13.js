// 12******************8


var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
    if (!list2.includes(i)){
        elements.push(i)
    }
}
console.log(elements);


// 13*******************8


var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
    ];
    var sum=0;
    for(var i of marks){
    for(var j of i){
    sum+=j
    }
    }
    console.log(sum);


