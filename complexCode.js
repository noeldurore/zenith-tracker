// Filename: complexCode.js
// Content: Complex code example demonstrating advanced JavaScript concepts and functionality

// Class representing a person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create two person objects
const person1 = new Person("John Doe", 35, "Doctor");
const person2 = new Person("Jane Smith", 28, "Engineer");

// Prototype inheritance example
Person.prototype.introduceProfession = function() {
  console.log(`I'm a ${this.profession}.`);
};

// Create an array of person objects
const people = [person1, person2];

// Loop through the array and call methods on each person
people.forEach(person => {
  person.greet();
  person.introduceProfession();
});

// Async/await example
function fetchPersonData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "Bob", age: 42, profession: "Writer" });
    }, 2000);
  });
}

async function processPersonData() {
  const personData = await fetchPersonData();
  const newPerson = new Person(personData.name, personData.age, personData.profession);
  newPerson.greet();
  newPerson.introduceProfession();
}

processPersonData();

// Higher-order function example
function applyMultiplier(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    };
  };
}

const result = applyMultiplier(2)(3)(4);
console.log(`Result: ${result}`);

// Functional programming example
const numbers = [1, 2, 3, 4, 5, 6];
const doubledEvenNumbers = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2);

console.log("Doubled even numbers:", doubledEvenNumbers);

// ES6 module example
import { sum, subtract } from './mathOperations.js';

console.log("Sum:", sum(5, 3));
console.log("Difference:", subtract(10, 2));

// Event-driven programming example
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("#myButton");
  button.addEventListener("click", function() {
    console.log("Button clicked!");
  });
});

// DOM manipulation example
document.getElementById("title").innerHTML = "Complex Code Example";

// Regular expression example
const text = "Complex code example demonstrating advanced JavaScript concepts.";
const regex = /example/g;
const occurrences = text.match(regex).length;

console.log(`Occurrences of "example": ${occurrences}`);

// ... continued (200+ lines)