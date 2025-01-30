{/* <h1 id = "one" class = "two" name = "nm">Hello </h1>
    <ul>
        <li class = "fr" name = 'fruit'>Apple</li>
        <li class = "fr" name = 'fruit'>Banana</li>
        <li class = "fr" name = 'fruit'>Grapes</li>
        <li class = "fr" name = 'fruit'>Mango</li>
        <li class = "fr" name = 'fruit'>Papaya</li>
    </ul> */}


let byElement = document.querySelector('#one')
let byElementID = document.getElementById('one')
console.log(byElement)
console.log(byElementID)

 /*Class  ---------------------------------------------*/   
let byClass = document.querySelector('.fr') // one element
console.log(byClass)

// nodeList
let allEByClassNameFr = document.querySelectorAll('.fr') // multiple- nodeList
for(let i = 0 ; i < allEByClassNameFr.length ; i++){
let allEByClassNameFr = document.querySelectorAll('.fr')
    console.log(allEByClassNameFr[i].textContent)
    //allEByClassNameFr[i].style.color = "green"
}
console.log(allEByClassNameFr)
// htmlCollection 
let htmlC = document.getElementsByClassName('fr')
console.log(htmlC)
