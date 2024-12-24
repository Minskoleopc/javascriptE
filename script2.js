// while loop 

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }


// intilization 
// while(condition){
//     // statement
//     // increment / decrement
// }

// program 1

let i1 = 1
while(i1 <= 3){
    console.log(i1) //1 // 2 // 3
    i1  = i1 + 1 // 2 // 3 // 4
}

// program 2
// print the value from 1 to 5
let i2 = 1
while(i2 <= 5){
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2  = i2 + 1 // 2 // 3 // 4 // 5 // 6
}
// program 3
// print "hello" 3 times
let i3 = 1
while(i3 <= 3){
    console.log("hello")
    i3 = i3 + 1
}

// program 4
// table of 2
let i4 = 1
while(i4 <= 10){
    console.log(i4 * 2)
    i4 = i4 + 1
}

let i5 = 2
while(i5 <= 20){
    console.log(i5)
    i5 = i5 + 2
}

// program 5
// table of 5 in reverse

let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6 -5
}

// program 6
//table of 3 in reverse 

let i7 = 30
while(i7 >= 3){
    console.log(i7)
    i7 = i7 - 3
}
// program 7
// print 5 to 1 
let i8 = 5 
while(i8 >= 1){
    console.log(i8)
    i8 = i8 - 1
}

// program 8

let i9 = 5 
while(i9 >= 1){
    console.log(i9) // 5 // 4 // 3
    if(i9 == 3){
        break
    }
    i9 = i9 - 1 // 4 // 3
}


let i10 = 5 
while(i10 >= 1){
    if(i10 == 3){
        break
    }
    console.log(i10) 
    i10 = i10 - 1 
    
}

let s1 = 1
while(s1 <= 5){
    console.log(s1)
    if(s1 == 3){
        break
    }
    s1 = s1 + 1
}

// program 9
// continue with while loop

let s2 = 1 
while(s2 <= 5){
    if(s2 == 3){
        s2 = s2 +1 // 4
        continue
    }
    console.log(s2) // 1  // 2 // 4 // 5
    s2 = s2 + 1 // 2  // 3 // 5 // 6
}





