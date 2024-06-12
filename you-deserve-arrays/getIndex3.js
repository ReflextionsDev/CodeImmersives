// Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. 
// If there are not four items (i.e., if there is no index 3), it logs out the value at the last index


const prompt = require('prompt-sync')({ sigint: true });

const input = JSON.parse(prompt('Enter an array: '));

if (input.length > 3) {
    console.log(input[2])
} else {
    console.log(input[input.length - 1])
}