const prompt = require('prompt-sync')();

const students = Number(prompt('Please enter the class size: '));

var go3 = 0;
var go2 = 0;

if (students < 3) {
    console.log("Error: must be at least 3.");
}

else if (students % 3 === 0) {
    go3 = students / 3;
}

else if (students % 3 === 2) {
    go3 = (students - 2) / 3;
    go2 = 1;
}

else if (students % 3 === 1) {
    go3 = (students - 4) / 3;
    go2 = 2;
}

console.log("Groups of 3:", go3)
console.log("Groups of 2:", go2)