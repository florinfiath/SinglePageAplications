// import Cryptr from "cryptr";

const Cryptr = require("cryptr")

const cryptr = new Cryptr("FBW43-2");

const encryptedWord = cryptr.encrypt("some word");

console.log(encryptedWord)


const originalWord = cryptr.decrypt(encryptedWord)

console.log(originalWord)