function isEvenlyDivisible(num1, num2) {
  return (num1 % num2 === 0) ? true : false
}

function halfSquare(num) {
  return num ** 2 / 2
}

function isLong(str) {
  return (str.length >= 15) ? true : false
}

function exclaim(str) {

  let exclaimed = false
  let output = ''

  for (let i = 0; i < str.length; i++) {
    const elem = str[i];

    if (elem !== '!') {
      output += elem
    }
  }
  return output + '!'
}

function countWords(str) {
  return str.split(" ").length
}

function containsDigit(str) {

  let containsDigit = false;

  for (let i = 0; i < str.length; i++) {

    const element = str[i];

    if (!isNaN(element) && element !== ' ') {
      containsDigit = true;
    }
  }

  return containsDigit;
}

function containsLowerCase(str) {

  for (let i = 0; i < str.length; i++) {

    const element = str[i]

    if (element === element.toLowerCase() && element.toUpperCase() !== element.toLowerCase() && isNaN(element)) {
      return true
    }
  }

  return false
}

function containsUpperCase(str) {

  for (let i = 0; i < str.length; i++) {

    const element = str[i]

    if (element === element.toUpperCase() && element.toUpperCase() !== element.toLowerCase() && isNaN(element)) {
      return true
    }
  }

  return false
}

function containsNonAlphanumeric(str) {

  let output = false

  for (let i = 0; i < str.length; i++) {

    const element = str[i];

    if (element.toUpperCase() === element.toLowerCase() && isNaN(parseInt(element))) {
      output = true
    }
  }

  return output;
}

function containsSpace(str) {
  return (str.search(" ") === -1) ? false : true
}

function digits(num) {
  num = (Math.abs(num)).toString()
  let output = []

  for (let i = 0; i < num.length; i++) {
    const element = num[i];

    if (!isNaN(element) && element !== ' ') {
      output.push(Number(element))
    }
  }

  return output
}

function truncate(str) {

  let output = str

  if (str.length >= 15) {
    output = str.substring(0, 8) + '...'
  }

  return output
}

function isValidPassword(str) {

  return (!containsDigit(str) || !containsLowerCase(str) || !containsUpperCase(str) || !containsNonAlphanumeric(str) || containsSpace(str)) ? false : true

}

function onlyPunchy(arr) {

  let output = []

  for (let i = 0; i < arr.length; i++) {

    const element = arr[i];
    let title = exclaim(element)

    if (!isLong(title)) {
      output.push(title)
    }

  }

  return output
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}