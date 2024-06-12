// Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

// If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

// If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.

const prompt = require('prompt-sync')()
const inputType = prompt("Please 'combine' or 'deconstruct': ")
const inputType = prompt("Please 'combine' or 'deconstruct': ")

var output = ""

if (inputType === "combine") {

    const color1 = prompt('Please enter a color: ')
    const color2 = prompt('Please enter another color: ')

    if (color1 === "red" && color2 === "blue") {
        output = 'purple'
    }
    else if (color1 === 'red' && color2 === 'yellow') {
        output = 'orange'
    }
    else if (color1 === 'blue' && color2 === 'yellow') {
        output = 'green'
    }
    else {
        output = 'error'
    }

}

else if (inputType === 'deconstruct') {

    const color1 = prompt('Please enter a color: ')

    if (color1 === 'purple') {
        output = 'red + blue'
    }
    else if (color1 === 'orange') {
        output = 'red + yellow'
    }
    else if (color1 === 'green') {
        output = 'blue + yellow'
    }
    else {
        output = 'error'
    }
}

console.log(output)