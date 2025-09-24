document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//! Task 1
const box = document.getElementById("box");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "white";
box.style.transition = "ease, 2s";
box.style.border = "1px solid black";
box.style.justifyContent = "center";
box.style.display = "flex";
box.style.alignItems = "center";

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "white";
});

//! Task 2
const input = document.getElementById("input");
const log = document.getElementById("log");

input.addEventListener("keydown", (event) => {
  log.textContent = `key pressed: ${event.key}`;
});

input.addEventListener("keyup", () => {
  log.textContent = "Key released!";
});

input.addEventListener("input", (event) => {
  console.log(input.value.length);
  if (event.target.value.length === 10) input.value = "";
});

//! Task 3

const button = document.getElementById("btnSub");
const input2 = document.getElementById("inputText");

button.addEventListener("click", (event) => {
  if (input2.value.length === 0) {
    event.preventDefault();
    alert("IT´S EMPTY");
  }
});

//! Task 4
const progress = document.getElementById("scrollBehave");
progress.style.backgroundColor = "cyan";
progress.style.width = "10%";
progress.style.height = "15px";
progress.style.border = "2px solid red";
progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";

window.addEventListener("scroll", () => {
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  const percentage = (window.scrollY / maxHeight) * 100;
  progress.style.width = percentage + "%";
});

//! Task 5
const msgSize = document.getElementById("size");
window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    msgSize.textContent = "smaller than 600px";
  } else {
    msgSize.textContent = "bigger than 600px";
  }
});
