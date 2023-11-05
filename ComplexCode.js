/*
Filename: ComplexCode.js
Description: This code demonstrates a complex and sophisticated algorithm for solving a problem in data processing and analysis.
*/

// Define a function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Define a function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let fibPrev = 0;
  let fibCurr = 1;
  for (let i = 2; i <= n; i++) {
    let temp = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = temp;
  }
  return fibCurr;
}

// Generate a random array of numbers between 1 and 100
const generateRandomArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
};

// Sort an array using bubble sort algorithm
const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Calculate the sum and average of an array
const calculateSumAndAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return [sum, average];
};

// Perform matrix multiplication
const matrixMultiplication = (matrix1, matrix2) => {
  const rowsA = matrix1.length;
  const colsA = matrix1[0].length;
  const rowsB = matrix2.length;
  const colsB = matrix2[0].length;

  if (colsA !== rowsB) {
    throw new Error("Matrices cannot be multiplied!");
  }

  const result = new Array(rowsA);
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB);
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  return result;
};

// Generate a random array and perform various operations
const randomArray = generateRandomArray(10);
console.log("Generated Array:", randomArray);
const sortedArray = bubbleSort(randomArray);
console.log("Sorted Array:", sortedArray);
const [sum, average] = calculateSumAndAverage(sortedArray);
console.log("Sum:", sum);
console.log("Average:", average);

// Calculate factorial and Fibonacci sequence
const number = 7;
console.log(`Factorial of ${number}:`, factorial(number));
console.log(`Fibonacci number at position ${number}:`, fibonacci(number));

// Perform matrix multiplication
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
console.log("Matrix Multiplication:", matrixMultiplication(matrix1, matrix2));

// Other complex and sophisticated algorithms can be written below...
// ...
// ...

// End of code.