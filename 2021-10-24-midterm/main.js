// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities(age) {

  let output = ''

  if (age < 16) {
    output = "You can't drive."
  } else if (age < 18) {
    output = "You can drive but not vote."
  } else if (age < 25) {
    output = "You can vote but not rent a car."
  } else {
    output = "You can do pretty much anything."
  }

  return output
}

function oddIndices(array) {

  let output = []

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      output.push(array[i])
    }
  }

  return output
}

function numOddValues(array) {

  let sum = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum++
    }
  }

  return sum
}

function averageStringLength(array) {

  let sum = array.reduce(((sum, word) => sum + word.length), 0)
  let values = array.length

  return (values > 0) ? sum / values : 0
}

function lastPunctuationIndex(str) {
  
  let output = -1
  let punctuation = ['.','?','!']

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (punctuation.includes(char)) {
      output = i
    }
    
  }

  return output
}

function incrementalCount(start, end, increment) {
  
  const output = []

  let currentValue = start
  output.push(currentValue)

  if (increment > 0) {
    while (currentValue < end) {
      currentValue += increment
      output.push(currentValue)
    }
  } else {
    while (currentValue > end) {
      currentValue += increment
      output.push(currentValue)
    }
  }

  return output
}

function multiplicationTable(rows, columns) {
  
  let table = []

  for (let row = 0; row < rows; row++) {
    
    let rowArray = []
  
    for (let column = 0; column < columns; column++) {
      rowArray.push(column * row)     
    }

    table.push(rowArray)
  }

  return table
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
  ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
  oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
  numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
  averageStringLength = undefined;
}
if (typeof lastPunctuationIndex === 'undefined') {
  lastPunctuationIndex = undefined;
}
if (typeof incrementalCount === 'undefined') {
  incrementalCount = undefined;
}
if (typeof multiplicationTable === 'undefined') {
  multiplicationTable = undefined;
}

module.exports = {
  ageToAbilities,
  oddIndices,
  numOddValues,
  averageStringLength,
  lastPunctuationIndex,
  incrementalCount,
  multiplicationTable
};
