# Roll the Dice

In this assignment, we're going to create a program that simulates a rolling dice.

Start by forking and cloning this repository as usual.

## `six-sided.js`

Create a file called `six-sided.js` that uses the `Math.random()` to simulate a random dice roll which is then logged out to the user.

The challenge here is transforming the random decimal (between 0 and 0.99999999...) into a number that's either 1, 2, 3, 4, 5, or 6. To do this you'll need to do some multiplying and some `Math.floor()`ing (or `Math.ceil()`ing).

## Stretch goals

* Create a new file, `custom-roll.js`, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.

* Create a new file, `rigged-dice.js`, which prompts the user first for a number of sides, then for a rigged number. The dice should roll the rigged number twice as frequently as the other numbers!
