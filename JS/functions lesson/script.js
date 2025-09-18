// * Function
//Hoisted
function greet(name, age) {
  return `Hello, my name is ${name} am ${age} years old`;
}

console.log(greet("honda", 20));

// Not hoisted
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10));

// calculate bmi - name, weight, height
const calcBmi = function calculateBMI(name, weight, height) {
  const bmi = weight / height ** 2;
  return `${name}'s BMI is ${bmi}}`;
};

console.log(calculateBMI("John", 80, 1.8));

// Arrow function not hoisted
const subtract = (a, b) => a - b;

function calculateArea(width, height) {}
