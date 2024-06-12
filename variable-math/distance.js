const x1 = 1
const x2 = 7
const y1 = 3
const y2 = 6

const distance = (((x2 - x1)*(x2 - x1)) + ((y2 - y1)*(y2 - y1))) ** 0.5

console.log("The distance between (" + x1 + "," + y1 + ")" + " and " + "(" + x2 + "," + y2 + ")" + "is " + distance)