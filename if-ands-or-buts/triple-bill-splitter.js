// Write a new program that expands on bill-splitter.js this program should be able to split a bill between three people! 
// Once again, prompt the user for how much each person paid. Then, log out messages indicating who needs to pay who.

const prompt = require('prompt-sync')()

const payment1 = Number(prompt('How much did person 1 pay? '))
const payment2 = Number(prompt('How much did person 2 pay? '))
const payment3 = Number(prompt('How much did person 3 pay? '))

const split = (payment1 + payment2 + payment3) / 3;

let owed1 = split - payment1
let owed2 = split - payment2
let owed3 = split - payment3

let debtors = 0
let creditor1 = ''
let creditor1Share = 0
let creditor2 = ''
let creditor2Share = 0

if (owed1 > 0) {
    debtors++
}
else if (owed1 < 0) {
    if (creditor1 === '') {
        creditor1 = 'Person1'
        creditor1Share = -owed1 / split
    } else {
        creditor2 = 'Person1'
        creditor2Share = -owed1 / split
    }
}

if (owed2 > 0) {
    debtors++
}
else if (owed2 < 0) {
    if (creditor1 === '') {
        creditor1 = 'Person2'
        creditor1Share = -owed2 / split
    } else {
        creditor2 = 'Person2'
        creditor2Share = -owed2 / split
    }
}

if (owed3 > 0) {
    debtors++
}
else if (owed3 < 0) {
    if (creditor1 === '') {
        creditor1 = 'Person3'
        creditor1Share = -owed3 / split
    } else {
        creditor2 = 'Person3'
        creditor2Share = -owed3 / split
    }
}

if (debtors === 1) {

    let debtor = ''

    if (owed1 > 0) {
        debtor = 'Person1'
    }

    if (owed2 > 0) {
        debtor = 'Person2'
    }

    if (owed3 > 0) {
        debtor = 'Person3'
    }

    console.log(debtor, 'owes', creditor1, '$', creditor1Share * split, 'and', creditor2, '$', creditor2Share * split)

}
else if (debtors === 2) {
    if (owed1 > 0) {
        console.log("Person1 owes", creditor1, "$", owed1)
    }

    if (owed2 > 0) {
        console.log("Person2 owes", creditor1, "$", owed2)
    }

    if (owed3 > 0) {
        console.log("Person3 owes", creditor1, "$", owed3)
    }
}
else {
    console.log("Error")
}