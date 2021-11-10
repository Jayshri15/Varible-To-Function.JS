// 19______

function number(value){
    var sum = 0; i = 1
    while (i <= value){
        if (i%3 === 0){
            sum = sum + i
        }else if (i%5 === 0){
            sum = sum + i
        }
        i ++
    }console.log(sum)

}
number(10)


// 20_________

// 21


function b(st,vt){
    if (st.length === vt.length){
        console.log(st);
        console.log(vt);
    }
    else if (st.length > vt.length){
        console.log(st)
    }
    else{
        console.log(vt)
    }
    }
b("Jayshri","heyc")
b("Vaishu","mom")


// 22


function hey(nmo){
    var empty = {}
    var i=1;
    while (i <= nmo){
        empty[i] = i*i
        i++
    }
    console.log(empty);
}
hey(10);