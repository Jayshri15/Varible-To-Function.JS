// 10__________

function isGreaterThan20(num){
    if(num>20){
        return true
    }
}
function students(list_of_marks){
    count=0
    for(var i of list_of_marks){
        var result= isGreaterThan20(i)
    if (result === true){
        count++
    }
}
    console.log(count);
    }
students([21,25,19,25,33,54])


// 11___________


function add_numbers(num1,num2){
    console.log(num1+num2)
}
add_numbers(5,9);


// 12_____


function a(num1,num2){
    console.log(num1 + num2);
    console.log("** ** ** ** ** **")
}
function ap (list1,list2){
    for(var i = 0;i<3;i++){
        a(list1[i],list2[i]);
    }
}
ap([50,60,10],[10,20,13]);