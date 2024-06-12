// Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

const prompt = require('prompt-sync')({ sigint: true })
console.log("Enter a string: ")

let string = (prompt())
let newstring = string

while (newstring.length < 10) {
    newstring = newstring + string
    console.log(newstring)
}