// 21************

my_list = [3,67,12,5,8,9,20,20,3,5];
temp_list = [];
for (i in my_list){
    if (!temp_list.includes(my_list[i])){
        temp_list.push(my_list[i])
    }
}console.log("list after removing duplicates",temp_list);


// 22***************

var mainStr = "English is the most important language"
var subStr = "over";
var c = mainStr.split(" ");
output="";
for(var i of c){
    output=output+i+" "
}
console.log(output);

