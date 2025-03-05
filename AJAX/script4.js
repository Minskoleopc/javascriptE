
async function getUsers(pageNo){
    let response = await fetch(`https://reqres.in/api/users?page=${pageNo}`)
    let body = await response.json()
    return body
    
}

async function getSingle(id){
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    let body = await response.json()
    return body
}

function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
}



async function getUserInfo(pageNo){
    let response = await getUsers(pageNo)
    console.log(response)
    let id = response.data[0].id
    console.log(id)
    let obj = await getSingle(id)
    obj = obj.data
    renderHtml(obj)
}
getUserInfo(2)





// getUsers(1)
// .then(function(body){
//     let id = body.data[0]['id']
//     return getSingle(id)
// })
// .then(function(body){
//     let obj = body.data
//     renderHtml(obj)
// })
// .catch(function(){
//     console.log("error occur")
// })
// .finally(function(){
//     console.log("i will always execute")
// })