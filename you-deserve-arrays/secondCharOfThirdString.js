// prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead

const prompt = require('prompt-sync')({ sigint: true });

const input = JSON.parse(prompt('Enter an array: '));
const output = input[2]

if (typeof(output) === "string") {
    console.log(output[1])
} else {
    console.log('ERROR!')
}