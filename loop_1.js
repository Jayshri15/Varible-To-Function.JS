for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
      
  break
  ;
    }
  }


for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
  }


// debugge*******************


let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var ascii_char=97+choose_ascii
for (var i=97;i<=ascii_char;i++) {
  console.log(chr(i),end="");
}
