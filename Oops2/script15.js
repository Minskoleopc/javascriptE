// // call bind and apply
// let info = {
//     firstName:"chinmay",
//     lastName:'deshpande',
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }

// }


// let info2 = {
//     firstName:"amol",
//     lastName:'rao',
    
// }

// info2.displayName = info.displayName
// info2.displayName()

// let info3 = {
//     firstName:"sarika",
//     lastName:'pansare',
// }

// let info4 = {
//     firstName:"ramesh",
//     lastName:'joshi',
// }



//info.displayName()
// program 2

// let dispName = function(){
//     console.log(this.firstName+this.lastName)
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// dispName = dispName.bind(chinmay)
// dispName()
// // function(){
// //     console.log(chinmay.firstName+chinmay.lastName)
// // }

// let ram = {
//     firstName:"ram",
//     lastName:"dani"
// }
// a = dispName.bind('ram')
// a()

// let satish = {
//     firstName:"satish",
//     lastName:"dani"
// }



let dispName = function(word,word2){
    console.log(this.firstName+this.lastName)
    console.log(word,word2)
}

// e = dispName.bind(ram)
// e("a","b")



ram = {
    firstName:"ram",
    lastName:"dani"
}
dispName.call(ram,"hello","bye")

satish = {
    firstName:"satish",
    lastName:"dani"
}
dispName.call(satish,"hi","bye")


ram = {
    firstName:"ram",
    lastName:"dani"
}

// let nume = [11,22,33,3,44,5,6,7,8,9,]
dispName.apply(ram,["hello","hi"])


satish = {
    firstName:"satish",
    lastName:"dani"
}

dispName.apply(ram,["he","ha"])
// bind call apply







// bind -- function ---- functionCall
// call - passing arguments
// apply  arrays

