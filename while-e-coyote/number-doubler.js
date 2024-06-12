// Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

const prompt = require('prompt-sync')({ sigint: true })
console.log("Enter a number: ")

let num = (Number(prompt()))

while (num < 100) {
    num = num*2;
    console.log(num)
}