const left = document.querySelector(".left");

const right = document.querySelector(".right");

const container = document.querySelector(".container_landing");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

// ---------------------------------------------------------------------------------------------//
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container1 = document.getElementById("container1");

signUpButton.addEventListener("click", () => {
  container1.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container1.classList.remove("right-panel-active");
});
// ---------------------------------------------------------------------------------------------//
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});
