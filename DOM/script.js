// document.querySelector('h1').addEventListener('mouseover',function(){
//     document.querySelector('h1').style.color = "green" 
// })

// document.querySelector('h1').addEventListener('mouseout',function(){
//     document.querySelector('h1').style.color = "red" 
// })

//<h3 id = "two" class = "three" name = "four" >Head3</h3>

// byTagName
let byTagName = document.querySelector('h3')
console.log(byTagName)

// byClass
byClassName = document.querySelector('.three')
console.log(byClassName)

// byID 
let byId = document.querySelector('#two')
console.log(byId)

// byAnyAttr
// tagName[attr = "value"]

let byAttr = document.querySelector('h3[name="four"]')
console.log(byAttr)