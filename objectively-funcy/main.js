// Your code here.

function getFirstName(obj) {
  return obj.firstName
}

function getLastName(obj) {
  return obj.lastName
}

function getFullName(obj) {
  return obj.firstName + " " + obj.lastName
}

function setFirstName(obj, newName) {
  obj.firstName = newName
}

function setAge(obj, newAge) {
  obj.age = newAge
}

function giveBirthday(obj) {
  'age' in obj ? obj.age++ : obj.age = 1
}

function marry(person1, person2) {
  person1.married = true;
  person1.spouseName = getFullName(person2)
  person2.married = true;
  person2.spouseName = getFullName(person1)
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName
  delete person2.spouseName
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
