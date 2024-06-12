// Write a program, fibonacci.js that accepts a number, n, from the user and consequently logs the first n values in the fibonacci sequence.
// The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:

const prompt = require('prompt-sync')({ sigint: true })
console.log("Enter a value for 'n': ")

const input = (Number(prompt()))
let count = 0
let v1 = 0
let v2 = 1

while (count < input) {
    if (count === 0) {
        console.log(v1)
        count++
    }
    else {
        let output = v2 + v1
        console.log(output)
        v2 = v1
        v1 = output
        count++
    }
}