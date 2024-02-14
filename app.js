// // Function Declarations

// function sayHello(name, age) {
//     console.log(`Hello ${name}, you are ${age} years old`);
// };
// sayHello("Michael", 22) // call the function

// // Function Expression

// const sayGoodbye = function(name) {
//     console.log(`Goodbye ${name}`);
// };
// sayGoodbye("Ann");

// const sayHowdy = (name) => {
//     console.log(`Howdy ${name}`);
// };
// sayHowdy("DeMarcus");

// // Exercise

// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
// };

// // Practice Activity 1: Write a Function Declaration

// function areaOfaRectangle(height, width) {
//     const area = height * width;
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
// }
// console.log(areaOfaRectangle(12, 3));

// // Practice Activity 2: Write a Function Expression

// const planetHasWater = function(planet) {
//     // const normalCasePlanet = 
//     if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars")
//         return true;
//     else 
//         return false;
// }
// console.log(planetHasWater("eArTh"));

// // Practice Activity 3: Area of a Triangle (Extra)

// function areaOfaTriangle(height, base) {
//     // area = 0.5 * height * base;
//     area = (height * base) / 2; 
//     return area;
// }
// console.log(areaOfaTriangle(3, 4))

// function getDevObject(name) {
//     let skills =[];
//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }
//     return {
//         devName: name,
//         jobSkills: skills
//     };
// }
// console.log(getDevObject("Michael", "Python", "C++", "HTML"))

// function getDevObject(name, ...skills) {
//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }
// console.log(getDevObject("Michael", "Python", "C++", "HTML"))


// var a = ["red", "green", "blue"];

// // 1
// function anotherFunction(color) {
//     console.log(color);
// }
// a.forEach(anotherFunction);

// // 2
// a.forEach(function(color){
//     console.log(color)
// })

// // 3
// a.forEach(color => console.log(color))

// // IIFE - Immediately Invoked Function Expression

// (function () {
//     // ..
// })();

// (() => {
//     // ..
// })();

// (async() => {
//     // ..
// })();

// function hoist() {
//     console.log(x); // outputs undefined, not a ReferenceError
//     var x = 25;
//     console.log(x) // outputs 25
// }
// hoist()

// function hoist() {
//     console.log(x); // outputs ReferenceError
//     let x = 25;
//     console.log(x); //
// }

// let x = 5;

// {
//     let y = 6;
//     console.log(x);
// }

// console.log(y); // ReferenceError: y is not defined

// let x = 5;

// {
//     console.log(x);
//     let x = 6; // ReferenceError: Cannot access 'x' before initialization
// }

// // Pass by Value
// let myVar = 20;

// function passBy(myVar) {
//     myVar *= 10;
//     return myVar; // take it out and you get undefined
// }

// console.log(myVar); // 20
// console.log(passBy( myVar)); // 200
// console.log(myVar); // 20

// let myVar = {
//     value: 20,
//     type: "Number"
// }

// // Pass by Reference
// function passby(x) {
//     x.value = x.value * 20;
// }

// console.log(myVar); // 20
// passby(myVar);
// console.log(myVar); // 400 
// passby(myVar);
// console.log(myVar); // 8000

// let numArray = [10, 20, 0, -10 , -15, 8, -1000, 42, 7];

// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray); // (9) [10, 20, 0, -10, -15, 8, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray); // (7) [10, 20, 0, -10, 8, -1000, 42]
// console.log(numArray); // (7) [10, 20, 0, -10, 8, -1000, 42]

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray); // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray); // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray); // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]


let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

let ourArray = returnEven(numArray);
console.log(numArray);
console.log(ourArray);


/* ourArray = [
    { value: 10 }, // 0 
    { value: 20 }, // 1
    { value: 0 }, // 2
    { value: -10 }, // 3
    { value: 28 },  // 4 
    { value: -1000 }, // 5
    { value: 42 }, // 6
] */

// ourArray[0].value += 10;

/* ourArray = [
    { value: 20 }, // 0 
    { value: 20 }, // 1
    { value: 0 }, // 2
    { value: -10 }, // 3
    { value: 28 },  // 4 
    { value: -1000 }, // 5
    { value: 42 }, // 6
] */

numArray[3].value = 67;

let myEvenValue = ourArray[1].value;
myEvenValue /= 2;
