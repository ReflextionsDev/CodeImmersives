// Create a new file, custom-roll.js, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.

const prompt = require('prompt-sync')()
const sides = prompt('Enter how many faces the dice has: ')

let roll = Math.round(Math.ceil((Math.random()*10))/(10/sides))

console.log(roll)