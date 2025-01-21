// <h1 id = "one" class="two" name="nm">Chinmay</h1>
// selecting the element
// byTagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// byClass
let byClassName = document.querySelector(".two")
console.log(byClassName)
// byId
let byId = document.querySelector('#one')
console.log(byId)
// byAttr
let byAttr  = document.querySelector("h1[name='nm']")
console.log(byAttr)


byAttr.addEventListener('click',function(){
    byAttr.style.color = "green"
    byAttr.style.backgroundColor  = "yellow"
})


// let info = {
//     fullName:"chinmay deshpabde",
//     parents:{
//         mother:"kanchan deshpande",
//         father:"shirish deshpande"
//     }
// }

// console.log(info.parents.mother)
// info.parents.mother = "kanchan s deshpande"