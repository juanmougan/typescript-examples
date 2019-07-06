let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let thruths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
//               Annotation ........ = Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns 'any'
const json = '{"x": 10, "y": 20}';
// If I don't add this, type is Any
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2) When declare in one line initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// Trying TS synthax
words.forEach(word => {
  if (word == 'green') {
    foundWord = true;
  }
});

// 3) Variable whose type cannot be inferred
let numbers = [-10, -1, 14];
let numberAboveZero: boolean | number = false; // number OR boolean

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
