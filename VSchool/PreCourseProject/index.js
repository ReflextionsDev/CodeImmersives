// if (5 > 3) {
//     console.log("is greater than");
// }

// if ("cat".length === 3) {
//     console.log("is the length");
// }

// if ("cat" === "dog") {
//     console.log("");
// } else {
//         console.log("not the same");
// }


// var person = {
//     name: "Bobby",
//     age: 12
// }

// if (person.age >= 18) {
//     console.log(person.name + " is allowed to go to the movie.");
// } else {
//     console.log(person.name + " is not allowed to go to the movie.");
// }
    
// if (person.name.charAt(0) === "B") {
//     console.log(person.name + " is allowed to go to the movie.");
// } else {
//     console.log(person.name + " is not allowed to go to the movie.");
// }
    
// if (person.age >= 18 && person.name.charAt(0) === "B") {
//     console.log(person.name + " is allowed to go to the movie.");
// } else {
//     console.log(person.name + " is not allowed to go to the movie.");
// }

// if (1 === "1") {
//     console.log("strict");
// } else if (1 == "1") {
//     console.log("loose");
// } else {
//     console.log("not equal at all");
// }

// if (1 >= 2 && 2 === 4) {
//     console.log("yes");
// }

// if (typeof "dog" === "string") {
//     console.log("Is a string!");

// }

// if (typeof "true" === "boolean") {
//     console.log("Is boolean");
// } else {
//     console.log("Is not a boolean");
// }

// if (typeof joe !== "undefined") {
//     console.log("Joe exists")
// } else {
//     console.log("Joe does not exist.")
// }

// if ("Z" > -35) {
//     console.log("greater");
// } else {
//     console.log("less");
// }

// var myNum = 151;

// (myNum % 2 == 0) ? console.log("even") : console.log("odd");

// (5 > 3) && console.log("is greater than");

// (typeof joe !== "undefined") ? console.log("Joe exists") : console.log("Joe does not exist.");


// (1 === "1") ? console.log("strict") : ((1 == "1") ? console.log("loose") : console.log("not equal at all"));

// for (var i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i +" is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var computers = 0

// for (var i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         computers++;
//     }

// }

// console.log("There are " + computers + " computers.")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 




// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let him in.");
//         } else {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let her in.");
//         }
//     } else {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let him in.");
//         } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let her in.");
//         }
//     }
// }


// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         var pronoun = "him";
//     } else {
//         var pronoun = "her";
//     }

//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let " + pronoun + " in.");
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Don't let " + pronoun + " in.");
//     }
// }

// var isLightOn = false;


// // if odd, the light change, if even it doesnt
// // add array, then check if odd or even


// var lightInstruction = [1, 4, 1, 1, 3];

// for (var i=0; i < (lightInstruction.length); i++) {
//     for (var j=0; j < lightInstruction[i]; j++) {
//         isLightOn = !isLightOn;
//         console.log("Light Switched");

//     }
// }

// if (isLightOn === true) {
//     console.log("The light is on")
//     } else {
//     console.log("The light is off")
// }

function println(data) {
    console.log(data);
}


// function getbiggest(num1,num2,num3) {

//     var args = [num1,num2,num3];
//     var biggest = 0;

//     for (i = 0; i < 3; i++) {
//        biggest = args[i] > biggest ? args[i] : biggest;

//     }
//     return biggest;
// }


// println(getbiggest(4,112,32));

// function stringit(mystring){
//   if (mystring.length <= 20) {
//     return mystring.concat(mystring);
//   } else {
//     return mystring.slice(0,mystring.length/2);
//   }
// }

// println(stringit("What up guys"));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )

// console.dir(document)   



// document.getElementById("yikes")
console.log('hi')


document.getElementById('feet').addEventListener('click',function (){
console.log('hello world')
})

const footer = document.getElementById('feet')
let i = 80



function bunk(){
var i = 12
}

var i = 2;

asdfasdfasdfsd = f;

