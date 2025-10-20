// console.log("Hello, World!");
// const burger = ["🍔", "🍟", "🥤"];
// const stringburger = JSON.stringify(burger);
// localStorage.setItem("meal", stringburger);
// console.log(stringburger);

// const session = "test@me.com";

// sessionStorage.setItem

// const toggleTheme = () => {
//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// };

// window.addEventListener("load", () => {
//   const theme = localStorage.getItem("theme") === "dark";
//   if (theme === "dark") {
//     document.body.classList.add("dark");
//   }
// });

// const form = document.querySelector("form");
// const input = document.querySelector("#username");

// input.value = sessionStorage.getItem("username") || "";

// input.addEventListener("input", () => {
//   sessionStorage.setItem("username", input.value);
// });

// window.addEventListener("storage", (event) => {
//   console.log("Key changed:", event.key);
//   console.log("New value:", event.newValue);
// });

const personName = "Nirari";
localStorage.setItem("name", personName);
const nameshow = document.getElementById("namecontent");
nameshow.textContent = personName;
removebtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  nameshow.textContent = " ";
});
nameshow.style.fontFamily = "monospace";
