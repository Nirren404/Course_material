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

// ! A-1-2
const personName = "Nirari";
localStorage.setItem("name", personName);
const nameshow = document.getElementById("namecontent");
nameshow.textContent = personName;
removebtn.addEventListener("click", () => {
  localStorage.removeItem("name");
  nameshow.textContent = " ";
});
nameshow.style.fontFamily = "monospace";

// ! B-1

const themeToggleBtn = document.getElementById("toggleTheme");
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// ! C-1-2

const todoForm = document.querySelector("form");
const todoInput = document.querySelector("#todo");
const todoList = document.createElement("ul");
document.body.appendChild(todoList);

// Restore tasks from localStorage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => {
  const li = document.createElement("li");
  li.textContent = task;
  todoList.appendChild(li);
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value;
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);

    // Save to localStorage
    savedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    todoInput.value = "";
  }
});
