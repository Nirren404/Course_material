console.log("Hello, World!");

const isLoggedIn = true;
const userName = "JohnDoe";
const notWelcome = () => console.log(`you  need to be logged in boayyy`);
const welcome = (name = "Guest") => {
  console.log(`Welcome, ${name} to the dashboard!`);
};
const logIn = (cb) => {
  if (isLoggedIn) {
    cb(userName);
  } else {
    cb();
  }
};

logIn(welcome, notWelcome);

const makemultiplication = (factor) => {
  return (number) => {};
};

// * 1
const square = (x) => {
  return x * x;
};

// * 2
function doHomework(subject, callback) {
  console.log(`Finished my ${subject} homework`);
  callback();
}
function callMessage() {
  console.log("All done!");
}

doHomework("SO", callMessage);

// * 3

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(4));
console.log(multiply(4, 5));

// * 4
function maxNumber(...nums) {
  return Math.max(...nums);
}
console.log(maxNumber(1, 2, 3, 4, 5, 6, 7, 8, 30));

// * 5
const fruitBowl = ["Dragonfruit", "Mango", "Pineapple"];
const extraFruit = [...fruitBowl, "Pear", "watermelon"];
console.log(fruitBowl, extraFruit);
