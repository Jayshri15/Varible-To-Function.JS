// 2****************************

let c=require("readline-sync");
let loop_time=c.question("enter loop time: ");
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
let num=c.question("enter number: ")
lis.push(num)
}
var maxi=lis[0];
for (let j=0;j<lis.length;j++) {
if (maxi<lis[j]) {
[maxi=lis[j]]
}
}
console.log(maxi)


//3*****************

 const result = {
    success: ["max-length", "no-amd","prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    };
    const success=result.success
    const store=success.length
    for(const value in success){
    console.log(store[value])
 }



 