// Write a program called bill-splitter.js that prompts the user for how much Person 1 paid, then for how much Person 2 paid. 
// It should then log out the message, 'Person 1 owes $' or 'Person 2 owes $' depending on who owes who.


const prompt = require('prompt-sync')()

const payment1 = Number(prompt('How much did person 1 pay? '))
const payment2 = Number(prompt('How much did person 2 pay? '))

const split = (payment1 + payment2) / 2;

if (payment1 > split){
    console.log("Person 2 owes $", (payment1 - split))
} else if (payment1 < split){
    console.log("Person 1 owes $", (payment2 - split))
} else if (payment1 === split){
    console.log("Bill is already equal!")
} else {
    console.log("Unsure...")
}