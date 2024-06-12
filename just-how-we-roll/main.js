/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const D6 = document.querySelector('#d6-roll')
const doubleD6a = document.querySelector('#double-d6-roll-1')
const doubleD6b = document.querySelector('#double-d6-roll-2')
const D12 = document.querySelector('#d12-roll')
const D20 = document.querySelector('#d20-roll')
const resetBtn = document.querySelector('#reset-button')

const txt_meanD6 = document.querySelector('#d6-rolls-mean')
const txt_medianD6 = document.querySelector('#d6-rolls-median')
const txt_modeD6 = document.querySelector('#d6-rolls-mode')

const txt_meanDoubleD6 = document.querySelector('#double-d6-rolls-mean')
const txt_medianDoubleD6 = document.querySelector('#double-d6-rolls-median')
const txt_modeDoubleD6 = document.querySelector('#double-d6-rolls-mode')

const txt_meanD12 = document.querySelector('#d12-rolls-mean')
const txt_medianD12 = document.querySelector('#d12-rolls-median')
const txt_modeD12 = document.querySelector('#d12-rolls-mode')

const txt_meanD20 = document.querySelector('#d20-rolls-mean')
const txt_medianD20 = document.querySelector('#d20-rolls-median')
const txt_modeD20 = document.querySelector('#d20-rolls-mode')

function updateAverages() {
  txt_meanD6.innerHTML = getMean(sixes)
  txt_medianD6.innerHTML = getMedian(sixes)
  txt_modeD6.innerHTML = getMode(sixes)

  txt_meanDoubleD6.innerHTML = getMean(doubleSixes)
  txt_medianDoubleD6.innerHTML = getMedian(doubleSixes)
  txt_modeDoubleD6.innerHTML = getMode(doubleSixes)

  txt_meanD12.innerHTML = getMean(twelves)
  txt_medianD12.innerHTML = getMedian(twelves)
  txt_modeD12.innerHTML = getMode(twelves)

  txt_meanD20.innerHTML = getMean(twenties)
  txt_medianD20.innerHTML = getMedian(twenties)
  txt_modeD20.innerHTML = getMode(twenties)
}

resetAll()

/*******************
 * EVENT LISTENERS *
 *******************/

D6.addEventListener('click', roll('D6'))
doubleD6a.addEventListener('click', roll('D6D6'))
doubleD6b.addEventListener('click', roll('D6D6'))
D12.addEventListener('click', roll('D12'))
D20.addEventListener('click', roll('D20'))
resetBtn.addEventListener('click', resetAll)

/******************
 * RESET FUNCTION *
 ******************/

function resetAll() {
  resetDice()
  resetArrays()
  updateAverages()
}

function resetDice() {
  D6.src = './images/start/d6.png'
  doubleD6a.src = './images/start/d6.png'
  doubleD6b.src = './images/start/d6.png'
  D12.src = './images/start/d12.jpeg'
  D20.src = './images/start/d20.jpg'
}

function resetArrays() {
  sixes = []
  doubleSixes = []
  twelves = []
  twenties = []
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function roll(dice) {
  return function () {
    if (dice === 'D6') {

      let roll = getRandomNumber(6)
      D6.src = './images/d6/' + roll + '.png'
      sixes.push(roll)

    } else if (dice === 'D6D6') {

      let roll = getRandomNumber(6)
      doubleD6a.src = './images/d6/' + roll + '.png'
      doubleSixes.push(roll)

      roll = getRandomNumber(6)
      doubleD6b.src = './images/d6/' + roll + '.png'
      doubleSixes.push(roll)

    } else if (dice === 'D12') {

      let roll = getRandomNumber(12)
      D12.src = './images/numbers/' + roll + '.png'
      twelves.push(roll)

    } else if (dice === 'D20') {

      let roll = getRandomNumber(20)
      D20.src = './images/numbers/' + roll + '.png'
      twenties.push(roll)

    } else {
      console.warn("Called roll() without valid dice params!")
    }

    updateAverages()
  }
}



/****************
 * MATH SECTION *
 ****************/

function getMean(arr) {

  if (arr.length === 0) { return 'N/A' }

  return (arr.reduce((n, sum) => n + sum, 0) / arr.length).toFixed(2)
}

function getMedian(arr) {

  if (arr.length === 0) { return 'N/A' }

  arr = sortByNumber(arr)

  if (arr.length % 2 === 0) {
    const num1 = arr[arr.length / 2]
    const num2 = arr[arr.length / 2 - 1]
    return ((num1 + num2) / 2)
  } else {
    return arr[Math.floor(arr.length / 2)]
  }
}

function getMode(arr) {

  if (arr.length === 0) { return 'N/A' }

  let numCounts = []

  for (const i of arr) {
    if (numCounts[i] === undefined) {
      numCounts[i] = 0
    }
    numCounts[i] += 1
  }

  let highestIndex = 0
  let tied = false

  numCounts.reduce((previousValue, currentValue, index) => {
    if (currentValue > previousValue) {
      highestIndex = index
      tied = false
      return currentValue
    } else if (currentValue === previousValue) {
      tied = true
      return previousValue
    } else {
      return previousValue
    }
  }, 0)

  return tied ? 'N/A' : highestIndex
}