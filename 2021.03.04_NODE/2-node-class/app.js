// const John = {
//     firstName: "john",
//     middleName: "mathias",
//     lastName: "merkel",
//     age: 40,
//     married: true

// }

// const Marius = {
//     firstName: "marius",
//     middleName: "";
//     lastName: "Schroder",
//     age:36,
//     married: false
// }


import Person from "./person.js";

const john = new Person("john","mathias","merkel",40,true);
const marius = new Person("marius","","schroder",36,false);


// !!how to use prototype
Person.prototype.birthYear = function(){
    return 2021 - this.age;
}

console.log(john.birthYear())

// console.log(john)
console.log(john.fullName());
// console.log(marius.age);


marius.status = function(){
    return `${this.firstName} is ${this.married ? "married" : "not married"} and is ${this.age} years old`;
}
console.log(marius.status())