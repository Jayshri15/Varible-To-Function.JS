// 8*********************

var numbers=[50, 40, 23, 70, 36, 12, 5, 10, 7];
var max_num=0;
var i = 0;
while (i<numbers.length){
    if (numbers[i]>max_num){
        max_num=numbers[i];
    }
    i++
}
console.log(max_num);


// 9************************

var arr = [50, 40, 23, 70, 56, 12, 5, 10, 7];
var highest = 0, second_Highest = 0;

for(var i=0; i<arr.length; i++){
  if(arr[i] > highest){
    second_Highest = highest;
    highest = arr[i]; 
  }

  if(arr[i] < highest && arr[i] > second_Highest){
    second_Highest = arr[i];
  }
}
console.log('second Highest number : ',second_Highest); 

