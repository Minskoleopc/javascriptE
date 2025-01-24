// String , Array , Object , new , Map, Set

let buttonOne = document.querySelector('#one')
let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')

buttonOne.addEventListener('click', function () {
    let text = inputT.value
    let newL = document.createElement('li') // <li></li>
    newL.textContent = text // <li>Papaya</li>
    inputT.value = ""
    createButtons(newL)
    ulList.appendChild(newL)
})

ulList.addEventListener('click', function (event) {
    //console.log(event.target) element
    // console.log(event.target.tagName)
    //console.log(event.target.className)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
        }
        else if (event.target.className == "up") {
        }
        else if (event.target.className == "down") {
        }
    }

})


{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}


function createButtons(li) {
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" //<button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up<button>
    u.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}