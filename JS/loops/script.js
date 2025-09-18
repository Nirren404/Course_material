console.log("Hello, World!");

// * for loop
for (let i = 1; i <= 5; i++) {
  console.log(`interation number ${i}`);
}

// * while loops

//let count = 1;
//while (count <= 20) {
// console.log(` the count is ${count}`);
//  count++;
//}

// * do while loops

let num = 6;
do {
  console.log(`code will run at least once ${num}`);
  num++;
} while (num <= 5);

//  * for of loop

const items = ["Mango", "Pineapple", "watermelon", "Banana", "Apple"];
for (const item of items) {
  console.log(`My favorite fruit is ${item}`);
}

// * Excercise

// 1
for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}

// 2
let count = 10;
while (count >= 1) {
  console.log(` the count is ${count}`);
  count--;
}

//3
let sum = null;
let number = 1;

do {
  sum = sum + number;
  console.log(`sum is ${sum}`);
} while (sum <= 20);

//4

const elev = ["Mango", "Pineapple", "watermelon", "Banana", "Apple"];
for (const item of items) {
  console.log(`My favorite fruit is ${item}`);
}
