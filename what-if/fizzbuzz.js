// This is a classic interview question. Write a program that asks the user for a number. If the number is divisible by 3, the program logs "fizz". If the number is divisible by 5, log "buzz". If the number is divisible by 3 and 5, log "fizzbuzz".

const prompt = require('prompt-sync')();
const num = Number(prompt('Please enter a number: '));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz")
} 

else if (num % 3 === 0) {
    console.log("fizz")
}

else if (num % 5 === 0) {
    console.log("buzz")
}