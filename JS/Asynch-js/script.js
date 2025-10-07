"use strict";
console.log("Hello, World!");

/*const heading = document.querySelector("h1");

async function loadData() {
  const [users, posts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
  ]).then((response) => response.json());
  console.log(users, posts);
}
/*loadData();
/*const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.ok);
    if(!response.ok) return;
    const data = await response.json();
    console.log(data.title);
    heading.textContent = data.title;
  } catch (error) {
    console.log("Error:", error);
  }
};
fetchData();
*/

/*function logmessage(message) {
  console.log(message);
}

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(logmessage);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log("Promise resolved after 3 seconds"));
    reject(() => console.log("Promise rejected"));
  });
});

promise
  .then((result) => {
    return console.log(result());
  })
  .catch((error) => {
    console.log(error());
  })
  .finally(() => {
    console.log("Promise completed");
  });
*/

//Create a function greetLater() that waits 3 seconds and then logs "Hello, Async World!" using async/await.

/*async function greetLater(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
      console.log("Hello, ASYNC");
    });
  });
  
}
greetLater();*/

/*function greetLater(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function message() {
  console.log("Hello, ASYNC");
  await greetLater(3000);
}
greetLater();*/

async function greetLater() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Hello, Async World!");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
greetLater();

// Fetch both users and posts from the API and log them together using Promise.all().
