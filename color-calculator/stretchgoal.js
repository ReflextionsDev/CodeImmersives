
// Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

// If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

// If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.

const prompt = require('prompt-sync')()
const input = String(prompt("Please enter one or two colors (seperated by space): "))
var output = ""

if (input.includes(" ")) {

    const color1 = input.split(" ")[0]
    const color2 = input.split(" ")[1]

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
} else {

    const color1 = input.split(" ")[0]

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