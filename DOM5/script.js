{/* <h1 id = "one" class = "two" name = "nm">Heading</h1>
<ul>
    <li class="fr" name="fruit">Apple</li>
    <li class="fr" name="fruit">Mango</li>
    <li class="fr" name="fruit">Banana</li>
    <li class="fr" name="fruit">Grapes</li>
    <li class="fr" name="fruit">Chikoo</li>
</ul> */}


// let idN = document.querySelector('#one')
// let idQ = document.getElementById('one')
// console.log(idN)
// console.log(idQ)

// // class 
// let firstE = document.querySelector('.fr')
// let listA = document.querySelectorAll('.fr') // nodeList
// console.log(firstE)
// console.log(listA)  // nodeList
// let listE = document.getElementsByClassName('fr') // htmlcollection
// console.log(listE)

// // name 
// let firstEN = document.querySelector('[name="fruit"]')
// let listAN = document.querySelectorAll('[name="fruit"]')
// let byName = document.getElementsByName('fruit')

// console.log(firstEN)
// console.log(listAN)
// console.log(byName)

// // tagName 
// let liE = document.querySelector('li') // firstElement
// let allLi = document.querySelectorAll('li') // nodeList
// let allLHtmlc = document.getElementsByTagName(li) // htmlCollection

// JS -- retrive , add , update , delete 
//?? retrive

//<h1 id = "one" class = "two three" name = "nm">Heading</h1>

let headOneE = document.querySelector('h1')
console.log(headOneE.className)
// headOneE.classList.add('four')
// headOneE.classList.remove('four')
// headOneE.classList.toggle('four')
// headOneE.classList.toggle('four')
headOneE.addEventListener('click',function(){
    headOneE.classList.toggle('four')
})

// add
headOneE.setAttribute('data',"cy-cc")
// update
headOneE.setAttribute('data',"cy-cd")
// retrive
console.log(headOneE.getAttribute('data'))
// delete
headOneE.removeAttribute('data')
console.log(headOneE)
















// different

// JS  -- retrive , update , add , delete
// JS  element - attribute - retrive, update delete , add