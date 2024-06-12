// Write a program called lock-box.js that stores the pin code to the lock box in a variable at the top of your program (i.e.: const pinCode = '1234';).

// After that, use prompt-sync to prompt the user for the passcode. If the user gets the passcode exactly correct, log a success message containing the word, "success". If not, log a failure message containing the word, "failure".

// Note: In this assignment, the node_modules folder containing the prompt-sync dependency does not already exist. To add it to this project, navigate to this repository using the command line then install it using the Node Package Manager with npm install prompt-sync.

const prompt = require('prompt-sync')();
const pinCode = '117'
const password = prompt('Please enter the password: ');

if (password === pinCode) {
    console.log("Success!")
} else {
    console.log("Failure :(")
}