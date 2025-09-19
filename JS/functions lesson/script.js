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
  return `${name}'s BMI is ${bmi}`;
};

console.log(calcBmi("John", 80, 1.8));

// Arrow function not hoisted
const subtract = (a, b) => a - b;

function calculateArea(width, height) {}

//default parameter
const calculateAge = (birthYear, currentYear = 2025) => {
  const age = currentYear - birthYear;
  console.log(age);
};
calculateAge(2006, 2035);

//Early returns
const showTemp = (temp = 10) => {
  if (temp < 0) return `freezing`;
  if (temp < 20) return `cool`;
  if (temp > 20 && temp < 32) return `warm`;
  return `Hot`;
};
console.log(showTemp(2));

//Excercise
const calculateGrade = (name, score) => {
  if (score >= 90 && score <= 100)
    return `${name} got a A with score of ${score}`;
  if (score >= 80 && score <= 89) return `${name} got a B with score ${score}`;
  if (score >= 70 && score <= 79) return `${name} got a C with score ${score}`;
  if (score >= 60 && score <= 69) return `${name} got a D with score ${score}`;
  if (score < 60 && score >= 0) return `${name} got a F with score ${score}`;
  if (score < 0 || score > 100)
    return `${name} got an invalid score of ${score}`;
};
console.log(calculateGrade("Hasse", 95));
console.log(calculateGrade("bosse", 89));
console.log(calculateGrade("Gordon", 70));
console.log(calculateGrade("lolli", 60));
console.log(calculateGrade("bowli", 111));
