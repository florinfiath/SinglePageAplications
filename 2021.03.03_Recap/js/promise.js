// ?What is a promise
 
// ?there are three states of promise 
  //1.pending (initial state)
  //2.fulfill(resolve)
  //3.Reject

// console.log("start")
//   let promise = new Promise((resolve,reject)=>{
//       // fetching data from server
//       let data = true;
    
//       if(data ===true){
//           resolve(["item1","item2","item3"])
//       }else{
//           reject("received error while fetching")
//       }
//   })

// promise
// .then((text)=>text)
// .then(forwardedText=>console.log(forwardedText))
// .catch(err=>console.log(err))


// console.log("end")


//? converting callback hell into promises 

console.log("start");

function getName(rollnumber) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //send tollnumber to server and against that rollnumber , get student name from server
            let name = "John";
            resolve(name);
        }, 2000);

    })
    
}
function getHobbies(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //sending request to server to get student's hobbies
            let hobbies = ["reading", "coding"];
            resolve(hobbies)
        }, 2000)
    })
    
}

//?callBack to  Promise


// callback hell
// getName(203, (name) => {
//     console.log(name);
//     getHobbies(name, (hobbies) => {
//         console.log(hobbies);

//     });
// })


//Promise
getName(192)
.then(name=>getHobbies(name))
.then(hobbies=>console.log(hobbies))


console.log("end")