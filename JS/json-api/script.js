"use strict";

console.log("Hello, World!");

// ! Parsed
//const jsonstring = `{
//  "name": "John",
//"age": 30,
//"school": "NTI"
//}`;

//localStorage.setItem("person", jsonstring);
//const dataFromLocalStorage = localStorage.getItem("person");
//const parsedLocal = JSON.parse(dataFromLocalStorage);

//console.log(parsedLocal);

// ! Stringify
//const classObj = {
//name: "Te4",
//course: "JavaScript",
//students: [
//{
// name: "Alice",
//age: 25,
//},
//{
// name: "Bob",
//age: 22,
//},
//],
//};

//console.log(classObj);
//const jsonClass = JSON.stringify(classObj);
//console.log(jsonClass);

// const postsList = document.getElementById("posts");

// const fetchposts = async () => {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5"
//   );
//   const data = await response.json();
//   console.log(data);

//   data.forEach((item) => {
//     const listItem = document.createElement("li");
//     const postTitle = document.createElement("h2");
//     const postBody = document.createElement("p");

//     postTitle.textContent = item.title;
//     postBody.textContent = item.body;

//     listItem.appendChild(postTitle);
//     listItem.appendChild(postBody);

//     postsList.style.width = "300px";
//     postsList.style.height = "300px";

//     postsList.appendChild(listItem);
//   });
// };
// fetchposts();

// * A 1

const studentJSON = '{"name":"Liam","grade":4,"passed":true}';
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
// * Klar

// * B 1
const usersList = document.getElementById("users-list");
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};
fetchUsers();
// * Klar

// * C 1

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.background = "linear-gradient(135deg, #f5f7fa, #0b2042ff)";

const quoteButton = document.getElementById("new-quote-button");
const quoteDisplay = document.getElementById("quote-display");
quoteDisplay.style.fontFamily = "nuntio, sans-serif";
quoteDisplay.style.fontSize = "20px";
quoteDisplay.style.fontStyle = "italic";

const fetchQuote = async () => {
  try {
    const response = await fetch("http://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    quoteDisplay.textContent = `"${data.content}" `;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteDisplay.textContent =
      "⚠️Failed to fetch quote. Sorry we will fix this soon be patient.";
  }
};

quoteButton.addEventListener("click", fetchQuote);

quoteDisplay.style.maxWidth = "600px";
quoteDisplay.style.padding = "30px 40px";
quoteDisplay.style.borderRadius = "10px";
quoteDisplay.style.background = "#fffdf7"; // slightly warm white
quoteDisplay.style.boxShadow =
  "0 8px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)";
quoteDisplay.style.border = "1px solid #e0e0e0";
quoteDisplay.style.textAlign = "center";
quoteDisplay.style.fontSize = "22px";
quoteDisplay.style.fontStyle = "italic";
quoteDisplay.style.color = "#444";
quoteDisplay.style.transition = "all 0.5s ease";
quoteDisplay.style.lineHeight = "1.6";
quoteDisplay.style.transform = "rotate(-0.3deg)";

// * Klar
