console.log("Hello, World!");

let age = 18;
let hasTicket = true;
console.log(typeof age); // string

if (age >= 18 && hasTicket) {
  console.log("welcome");
} else if (!hasTicket && age >= 18) {
  console.log("go buy a ticket");
} else {
  console.log("go home sleep my booy");
}

let color = "green";

switch (color) {
  case "green":
    console.log("Drive");
    break;
  case "yellow":
    console.log("pay attention");
    break;
  case "red":
    console.log("STOP");
  default:
    console.log("drive");
    break;
}

let secretNumber = 4;
let userGuess = 15;

if (userGuess === secretNumber) {
  console.log("Correct");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else if (userGuess < secretNumber) {
  console.log("Too low");
} else if (userGuess < 0 || userGuess > 10) {
  console.log("Invalid guess");
}

let totalSpend = 150;
let discount = null;
let totalToPay = null;

if (totalSpend >= 100) {
  discount = totalSpend * 0.2;
  totalToPay = totalSpend - discount;
  console.log(
    `You get a 20% discount. Total discount is ${discount}$, The total is ${totalToPay}$`
  );
} else if (totalSpend >= 50 && totalSpend < 100) {
  discount = totalSpend * 0.1;
  totalToPay = totalSpend - discount;
  console.log(
    `You get a 10% discount. Totalt discount is ${discount}$ ,  The total is ${totalToPay}$`
  );
} else if (totalSpend < 50) {
  console.log("No discount");
}

// Create bmi calc
const myWeight = 89;
const myHeight = 1.85;

const myBMI = myWeight / myHeight ** 2;
console.log(myBMI);
