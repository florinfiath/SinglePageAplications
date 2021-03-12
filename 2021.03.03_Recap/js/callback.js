// ?synchronous and asynchronous code 
//?blocking and non-blocking

// console.log("start");

// function getName(rollnumber){
//     setTimeout(()=>{
//     //send tollnumber to server and against that rollnumber , get student name from server
//     let name = "first"
//         console.log(name)
//         setTimeout(()=>{
//             console.log("nestedtimout")
//         },2000);
//     },2000);

// }
// function getName1(rollnumber) {
//     setTimeout(() => {
//         //send tollnumber to server and against that rollnumber , get student name from server
//         let name = "second"
//         console.log(name)
//     }, 1000);

// }
// function getName2(rollnumber) {
//     setTimeout(() => {
//         //send tollnumber to server and against that rollnumber , get student name from server
//         let name = "third"
//         console.log(name)
//     },0);

// }

    


// getName(102);
// getName1(202)
// getName2(204)

// console.log("end")



//?callBack

console.log("start");

function getName(rollnumber, callback) {
    setTimeout(() => {
        //send tollnumber to server and against that rollnumber , get student name from server
        let name = "John";
        callback(name);
    }, 2000);

}
function getHobbies(name,callBack){
    setTimeout(()=>{
        //sending request to server to get student's hobbies
        let hobbies = ["reading","coding"];
        callBack(hobbies)
    },2000)
}

//callback hell
getName(203,(name)=>{
    console.log(name);
    getHobbies(name,(hobbies)=>{
        console.log(hobbies);
    
});
})

console.log("end")