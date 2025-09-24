document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const box = document.querySelector("div");
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
