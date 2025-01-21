let headOne = document.querySelector('h1')
let buttonOne =  document.querySelector('button')
let inputE = document.querySelector('input')

console.log(headOne)
console.log(buttonOne)
console.log(inputE)

buttonOne.addEventListener('click',function(){
    let text = inputE.value
    headOne.style.color = text
    inputE.value = ''

})

