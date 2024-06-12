// prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

const prompt = require('prompt-sync')({ sigint: true });

const input = JSON.parse(prompt('Enter an array: '));

let firstItemIsNUmber = false;

if (typeof (input[0]) === "number") {
    firstItemIsNUmber = true;
}

console.log('First item is number:', firstItemIsNUmber)