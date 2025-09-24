console.log("Hello, World!");

const h1 = document.getElementById("heading1");
h1.innerText = "Welcome to our JS Dom basics class";
console.log(h1.innerText);

const msg = document.querySelector("paragraph1");
console.log();

const headings = document.querySelectorAll(".item");
for (const heading of headings) {
  heading.style.color = "red";
  console.log(heading.textContent);
}

const button = document.createElement("button");
button.innerText = "Click me!";
button.style.backgroundColor = "blue";

const body = document.querySelector("body");
body.appendChild(button);

button.addEventListener("click", () => {
  console.log("Click");
  window.alert("You got hacked");
  button.style.width = "300px";
});

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "white";
box.style.transition = "ease, 2s";

body.appendChild(box);

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "white";
});

const para = document.getElementById("log");
document.getElementById("input").addEventListener("keydown", (event) => {
  para.textContent = `key pressed: ${event.key}`;
});

const input = document.getElementById("input");
const log = document.getElementById("log");

input.addEventListener("keydown", (event) => {
  log.textContent = `Key pressed: ${event.key}`;
});
input.addEventListener("keyup", (event) => {
  log.textContent = `Key released: ${event.key}`;
});
