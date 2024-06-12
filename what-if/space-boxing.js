const prompt = require('prompt-sync')();

const weight = Number(prompt('Please enter your earth weight: '));
const planetNum = Number(prompt("Please enter the number of the planet you want to fight on: "));

var weightMP = 1;
var planetName

if (planetNum === 1) {
    weightMP = 0.78;
    planetName = "Venus";
}

else if (planetNum === 2) {
    weightMP = 0.39;
    planetName = "Mars";
}

else if (planetNum === 3) {
    weightMP = 2.65;
    planetName = "Jupiter";
}

else if (planetNum === 4) {
    weightMP = 1.17;
    planetName = "Saturn";
}

else if (planetNum === 5) {
    weightMP = 1.05;
    planetName = "Uranus";
}

else if (planetNum === 6) {
    weightMP = 1.23;
    planetName = "Neptune";
}

const result = weight * weightMP;

console.log("Your weight on", planetName, "is", result);