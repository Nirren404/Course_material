// console.log("Hello, World!");

// const divide = (a, b) => {
//   try {
//     if (b === 0) throw new Error("Cannot divide by zero");
//     console.log(a / b);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };
// divide(2, 5);

// * Write a function that multiplies two numbers.
// * If one is not a number, throw an error.
//  *Call the function inside a try...catch and log either the result or the error.

// * 1 A B
const multiply = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    console.log(a * b);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

multiply(8, 4);

// * Create a function getUserAge(obj) that reads obj.age. If obj has no age, throw an error. Handle it with try...catch and log a message.
const getUserAge = (obj) => {
  try {
    if (!obj.age) throw new Error("User age is not defined");
    console.log("User age is:", obj.age);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
// getUserAge({ name: "John" });
getUserAge({ name: "Jane", age: 30 });

// * Use finally to always log "Done checking user" whether or not an error happened.
const getUserAgeWithFinally = (obj) => {
  try {
    if (!obj.age) throw new Error("User age is not defined");
    console.log("User age is:", obj.age);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Done checking user");
  }
};

// getUserAgeWithFinally({ name: "John" });
getUserAgeWithFinally({ name: "Jane", age: 30 });
