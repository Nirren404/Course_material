console.log("Hello, World!");

const fruits = ["Mango", "watermelon", "Guava", "Pineapple"];
//fruits.push("Mango");
//fruits.push("Passionfruit");
//fruits.unshift("Blueberry");
//fruits.shift();

console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
  console.log("fruit number is: " + i);
}

console.log(fruits.length);

console.log(fruits.indexOf("Blueberry"));
console.log(fruits.includes("Guava"));
const favoriteFruits = fruits.slice(1, 3);
console.log(favoriteFruits);

fruits.splice(0, 2, "orange");

// * Exercise 1
const colours = ["red", "blue", "green"];
console.log(colours[0]);
console.log(colours[2]);

colours.push("yellow");
console.log(colours);

colours.shift([0]);
console.log(colours);

// * Exercise 2
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

for (const number of numbers) {
  console.log(number * 2);
}

// * Exercise 3
const shoppingCart = ["Milk", "Flour", "Mustard", "Icecream", "Fish"];

shoppingCart.unshift("Chicken");
shoppingCart.push("Salt");
shoppingCart.splice(2, 3);
console.log(shoppingCart.includes("Milk"));
console.log(shoppingCart);
