// console.log("Hello, World!");

// const car = {
//   brand1: "Audi",
//   model1: "RsQ8",
//   year1: 2025,
//   color1: "Black",

//   brand2: "BMW",
//   model2: "M5",
//   year2: 2025,
//   color2: "White",

//   brand3: "Porsche",
//   model3: "Panamera",
//   year3: 2025,
//   color3: "Dark Red",

//   chooseCar: function (choice) {
//     if (choice === "1") {
//       alert(
//         `You chose the ${this.brand1} ${this.model1}. It's a ${this.year1} model in ${this.color1}:Price: 3,5000000$;. You must be a luxury person!`
//       );
//     } else if (choice === "2") {
//       alert(
//         `You chose the ${this.brand2} ${this.model2}. It's a ${this.year2} model in ${this.color2}.:Price: 1,5000000$; You must be a sporty person!`
//       );
//     } else if (choice === "3") {
//       alert(
//         `You chose the ${this.brand3} ${this.model3}. It's a ${this.year3} model in ${this.color3}:Price: 4,5000000$;. You must be a adventure person!`
//       );
//     } else {
//       alert("Invalid choice.");
//     }
//   },
// };

// const userChoice = prompt(
//   "Choose a car:\n1. Audi RsQ8\n2. BMW M5\n3. Porsche Panamera\nEnter 1 or 2 or 3:"
// );
// car.chooseCar(userChoice);

// ! EXERCISE TIME

// * A-1-2
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Walter White", 30);
const person2 = new Person("Bob", 25);

person1.greet();
person2.greet();

// * B-1-2
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds for withdrawal.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }
  }
}

const account1 = new BankAccount("John Wick", 500);
account1.deposit(2000);
account1.withdraw(500);
account1.withdraw(10);

// * C-1-2-3
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

class Bird extends Animal {
  makeSound() {
    console.log("Chirp! Chirp!");
  }
}

const AnimalsNEW = [new Dog(), new Cat(), new Bird()];

AnimalsNEW.forEach((animal) => animal.makeSound());
