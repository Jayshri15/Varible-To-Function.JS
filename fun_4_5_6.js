// 4________

var num = function(a,b){
    console.log(a === b)
}
num("peacock","peacock")


// 5_______


function getfullname(firstName,lastName){
    console.log(firstName + "" +lastName)
}
getfullname("kumar","raja")


// _________(ReferenceError will bbe showing)


// 6________

function getResult(num1,num2,num3,num4){
    console.log(num1-num2+num3-num4)
}
getResult(3,6,7,8)