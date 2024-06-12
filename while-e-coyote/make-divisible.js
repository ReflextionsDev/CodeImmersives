// Write a program that prompts the user for two numbers, x and y. The program should add one to x until it is divisble by y.

const prompt = require('prompt-sync')({ sigint: true })

let x = prompt('Enter x: ')
let y = prompt('Enter y: ')

while (x % y != 0) {
    x++
    console.log(x)
}

console.log(x,'is divisible by',y)