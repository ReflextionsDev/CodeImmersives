const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function addToX(a, b) {
  return x + a + b
}

console.log(addToX(2, 2))

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const addToX2 = (a, b) => {
  return x + a + b
}

console.log(addToX2(3, 3))

// 9. Write a function that returns another function. (use arrow functions please)

const returnAddToX = () => {
  return addToX()
}

console.log(returnAddToX)

// 10. given the following code:


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.
//  Because Y is defined in the parent function, so it is included by closure

// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {

  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return 'success'
}

function checkForError(callback) {

  try {
    console.log(callback())    
  } catch (error) {
    console.log('Error!')
  }
}

checkForError(couldThrowError)