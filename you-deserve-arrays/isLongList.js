// isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

const prompt = require('prompt-sync')({ sigint: true });

const input = JSON.parse(prompt('Enter an array: '));

let minLength = false;

if (input.length > 9) {
    minLength = true;
}

console.log("Array length is at least 10:", minLength)