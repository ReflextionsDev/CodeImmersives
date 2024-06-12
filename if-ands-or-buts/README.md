# If, Ands, or Buts

> In this assignment, we'll be continuing to build programs with if statements. As usual, start off by forking then cloning this repository.

## `lock-box.js`

You've been contracted to write the software for a lock box. 

Write a program called `lock-box.js` that stores the pin code to the lock box in a variable at the top of your program (i.e.: `const pinCode = '1234';`). 

After that, use `prompt-sync` to prompt the user for the passcode. If the user gets the passcode exactly correct, log a success message containing the word, "success". If not, log a failure message containing the word, "failure".

**Note:** In this assignment, the `node_modules` folder containing the `prompt-sync` dependency does not already exist. To add it to this project, navigate to this repository using the command line then install it using the Node Package Manager with `npm install prompt-sync`.

## `bill-splitter.js`

You've once again been contracted to write a program, this time for an app that helps two people split a bill at a restaurant evenly.

Write a program called `bill-splitter.js` that prompts the user for how much Person 1 paid, then for how much Person 2 paid. It should then log out the message, 'Person 1 owes $_____' or 'Person 2 owes $_____' depending on who owes who.

## Extra Credit: `triple-bill-splitter.js`

Write a new program that expands on `bill-splitter.js` this program should be able to split a bill between three people! Once again, prompt the user for how much each person paid. Then, log out messages indicating who needs to pay who. 

You'll probably need to use a system of equations to solve this!
