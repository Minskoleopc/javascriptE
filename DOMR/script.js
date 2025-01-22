//<h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// cssSelector
// index.html
// ByTagName
// let headOne = document.querySelector('h1')
// // ById
// let byId = document.querySelector('#one')
// // ByClassName
// let byClassName = document.querySelector('.two')
// // ByAttribute
// let byName = document.querySelector('h1[name="nm"]')

// console.log(headOne)
// console.log(byId)
// console.log(byClassName)
// console.log(byName)

// headOne.addEventListener('click',function(){
//     headOne.style.color = "green"
//     headOne.style.backgroundColor =  "yellow"
// })

// let info = {
//     fullName:"chinmay deshpande",
//     parent:{
//         mother:"kanchan deshpande",
//         father:"shirish deshpande"
//     }
// }
// info.parent.mother = "kanchan s deshpande"

/// index2.html
// let buttonOne = document.querySelector('button')
// let headOne = document.querySelector('h1')
// console.log(headOne.textContent)

// buttonOne.addEventListener('click',function(){
// let headOne = document.querySelector('h1')
//     headOne.style.color = "green"
//     headOne.textContent =  headOne.textContent.toUpperCase()
// })

// index3.html

let headOne = document.querySelector('h1')
let inputOne = document.querySelector('input')
let buttonE = document.querySelector('button')

buttonE.addEventListener('click',function(){
    let color = inputOne.value
    headOne.style.color = color
    inputOne.value = ""
})

