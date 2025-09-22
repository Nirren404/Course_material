console.log("Hello, World!");
const car = {
  model: "Rs6",
  maker: "Audi",
  horsepower: 500,
  fuel: "Bensin",
  year: 2025,
};

console.log(car);
console.log(car.maker, car.model);

const person = new Object();
person.name = "hasse milano";
person.age = 19;
person.profession = "Student";

console.log(person);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log([0]);

const school = {
  name: "NTI",
  address: {
    street: "Sveavägen 20",
    municipality: "Huddinge",
    city: "Stockholm",
    zip: 14152,
  },

  classes: {
    name: "Te4-25",
    students: 10,
  },
};

// * exercise 1 A
const book = {
  title: "Adventure forest",
  author: "Hasse ranold",
  year: 2025,
};
book.publisher = "hasse ranold ";
book.pages = 300;
console.log(book);

// * exercise B 1
const user = {
  username: "Hasse",
  city: "Fokushima",
};
console.log(`Hi, I'm ${user.username} and am from ${user.city}`);

// * exercise B 2
const arrayBooks = [
  {
    title: ["Adventure forest", "Hasse ranold", 2025],
  },
  {
    title: ["The secret", "Mr Armstrong", 2025],
  },
  {
    title: ["The alchemist", "Paulo Coelho", 1988],
  },
];

console.log(arrayBooks[1].title);

// * exercise C 1
const classroom = {
  teacher: {
    name: "Arnold",
    subject: "HackerCYB",
  },
  students: [
    {
      name: "Bosse",
      age: 19,
    },

    {
      name: "agnota",
      age: 99,
    },

    {
      name: "Walter jr",
      age: 1,
    },
  ],
};

for (const student of classroom.students) {
  console.log(`Hello my name is ${student.name} am ${student.age}`);
}
