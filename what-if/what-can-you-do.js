const prompt = require('prompt-sync')();

const age = prompt('Please enter your age: ');

if (age < 16) {
    console.log("You can't drive.");
}

else if (age < 18) {
    console.log("You can drive but not vote.");

}

else if (age < 25) {
    console.log("You can vote but not rent a car.");
}

else {
    console.log("You can do pretty much everything");
}