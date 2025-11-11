console.log("Hello TS");

// ! Strings

let firstName: string = "Sarah";
firstName = "Anna";
let age = 35;
let greeting: string = `Hello ${firstName} you are ${age} years old.`;

console.log(greeting);

//! Numbers
const priceFromDB = "289";
let personsAge: number = 28;
let price: number = 49.5;
let hexValue: number = 0xf00d;
let itemQuantity: number = 5;

let totalCost: number = itemQuantity \* Number(priceFromDB);

console.log(totalCost);

// !Booleans

let isLoggedIn: boolean = true;
let isError: boolean = false;
let isLoading: boolean = true;

// ! Arrays
let users: string[] = ["Frank", "Ingela", "Alex", "Panes"];
let points: number[] = [1, 2, 3, 4, 5, 6, 7];

users.map((u) => {
console.log(u);
});

// ! Objects

type Point = {
x: number;
y: number;
// label?: string;
label: string;
};

let p1: Point = {
x: 100,
y: 200,
label: "something else",
};

let p2: Point = {
x: 10,
y: 20,
label: "Something",
};

console.log(p1);

// ! Tuples
type RGB = [number, number, number];
let primaryColor: RGB = [255, 0, 255];

// ! Enums
enum Direction {
Up,
Down,
Left,
Right,
}

let playerDirection: Direction = Direction.Up;
if (playerDirection === Direction.Up) {
console.log(`Moving ${playerDirection}`);
}

// ! Null
let studentName: string | null = null;

studentName = "Manhal";
studentName = null;

// ! Functions

const logMessage = (name: string): void => {
const message = `Heeeellllooo my name is ${name}`;
console.log(message);
};

logMessage("Michel");

const calculateArea = (length: number, width: number): number => {
return length \* width;
};

console.log(calculateArea(3, 100));

// ! Unknown
let data: unknown = 25;
// console.log(data.toUpperCase()); // TS doesnt know the type of data!
if (typeof data === "string") console.log(data.toUpperCase());
if (typeof data === "number") console.log(data + 50);

// ! union - types
let userId: string | number | null = null;
// userId = "userid-temp";
userId = 85957;
// userId = false

const showUserId = (id: number | string): void => {
if (typeof id === "number") {
console.log(id.toFixed());
} else {
console.log(id.toUpperCase());
}
};

showUserId(userId);
