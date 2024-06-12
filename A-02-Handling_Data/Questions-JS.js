const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mappedData = userData.map(obj => {
  const newObj = {}
  newObj.id = obj.id
  newObj.favoriteFoods = obj.favorites.food.length
  return newObj
})

console.log(mappedData)

////////////////////
// EXTRA CREDIT:
///////////////////

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const reducedData = userData.reduce((returnArr, currentObj) => {

  if (currentObj.favorites.food.includes('pizza')) {
    returnArr.push(currentObj.name)
  }

  return returnArr

}, [])

console.log(reducedData)


// 7. Show us an example of a switch statement being used

let x = 'b'

switch (x) {
  case 'a':
    console.log("Alpha")
    break;
  case 'b':
    console.log("Beta")
    break;
  default:
    break;
}
