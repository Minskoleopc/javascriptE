
let buttonE = document.querySelector('button')
let headingOne = document.querySelector('h1')
console.log(buttonE)
console.log(headingOne)
buttonE.addEventListener('click',function(){
    headingOne.style.color = "red";
    headingOne.textContent = "CHINMAY"
})