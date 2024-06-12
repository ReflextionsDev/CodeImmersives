// In a file called number-summer.js file, write a program that continually prompts the user for numbers until the user enters the keyword "done" at which point the sum of all the inputted numbers is logged out.

const prompt = require('prompt-sync')({ sigint: true })

console.log("Enter some numbers (type 'done' when complete)")

let input = (prompt())
let total = 0

while (input !== 'done') {

    if (isNaN(Number(input)) == 0) {
        total += Number(input)
    }
    input = prompt('')
}

console.log("Those numbers sum to", total)