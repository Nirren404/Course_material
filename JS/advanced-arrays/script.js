console.log("Hello, World!");

const arr1 = [1, 2];
const arr2 = [3, 4];

// * 1. Combine two arrays using the spread operator and assign the result to a new array.
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

for (let i = 0; i < combinedArray.length; i++) {
  console.log(combinedArray[i] * i);
}

const multipliedNumbers = combinedArray.map((number, index) => number * index);
console.log(multipliedNumbers);

const tripledNumbers = combinedArray.forEach((number) => number * 3);
console.log(tripledNumbers);

const totals = [20];
const totalamount = totals.reduce((total, next) => total + next, 0);
console.log(totalamount);

const tripleArr = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

// * 1A Create an array of your 5 favourite movies and log the second one.
const favouriteMovies = [
  "Non stop",
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Tenet",
];
console.log(favouriteMovies[1]);

// * 1B Add a new movie to the end, then remove the first movie.
favouriteMovies.push("The Matrix");
favouriteMovies.shift();
console.log(favouriteMovies);

// * 2A You have an array [1, 2, 3, 4, 5]. Use .map() to create a new array where each number is squared.
const numbers = [1, 2, 3, 4, 5];
const squarednumbers = numbers.map((num) => num ** 2);
console.log(squarednumbers);

// * 2B Use .filter() to get only the odd numbers.
const oddsNumber = squarednumbers.filter((num) => num % 2 === 0);
console.log(oddsNumber);

// * 3A Create a 2D array representing a 3x3 tic-tac-toe board. Access the centre value.
const ticTacToe = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
console.log(ticTacToe[1][1]);

// * 3B Given [10, 20, 30, 40, 50], use .reduce() to calculate the total sum.
const arr = [10, 20, 30, 40, 50];
const sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);
