
let obj={name:"John",age:29};
let jsondata = JSON.stringify(obj)
let originalObj = JSON.parse(jsondata)


// fetching real data from external API

fetch("https://reqres.in/api/users?page=2") // promise
.then(response=>response.json()) //Json data , response(parse data)
.then(result=>{
    console.log(result)
    let ul = document.querySelector("ul");
    result.data.map(user => {
        let firstname = document.createElement("h1")
        firstname.innerHTML = user.first_name

        let lastname = document.createElement("div")
        lastname.innerHTML = user.last_name
        let email = document.createElement("div")
        email.innerHTML = user.email
        let img = document.createElement("img")
        img.src = user.avatar
        let Card = document.createElement("div")
        Card.append(firstname, lastname, email, img)
        ul.append(Card)
    })
    
    })

