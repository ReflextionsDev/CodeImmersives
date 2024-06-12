// Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array

const prompt = require('prompt-sync')({ sigint: true });

const input = JSON.parse(prompt('Enter an array: '));

console.log(input[input.length -1]);