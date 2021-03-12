// async await ( the way of handling promises )


// fetching real data from external API with async await 
// !! async function always returns a promise
//! we need to use try and catch , try to check our code , and not to beak the app when we have an error
 export async function fetchData(){
      try{

          let response = await fetch("https://reqres.in/api/users?page=2");
          let result = await response.json();

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
      } catch(err){console.log(err)}
      return "done"
  }
    
fetchData()



