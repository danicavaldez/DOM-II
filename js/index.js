// Your code goes here
const funBus = document.querySelector(".logo-heading");
const navItems = document.querySelectorAll("nav a");
const navigationBar = document.querySelector(".main-navigation");
const intro = document.querySelector(".intro h2");
const button = document.querySelector(".btn");
const signMeUp = document.querySelector(".content-pick");

funBus.addEventListener("mouseover", () => {
  funBus.classList.add("uppercase");
});

window.addEventListener("scroll", () => {
  console.log("Scrolling, scrolling, scrolling.")
});

navigationBar.addEventListener("dblclick", () => {
  navigationBar.style.backgroundColor = "peachpuff";
});

navItems.forEach((link) =>
  link.addEventListener('click', () => {
    link.preventDefault;
    console.log('Default prevented!');
  })
);

intro.addEventListener("wheel", () => {
  intro.style.fontSize = "8.5rem";
  intro.style.color = "gold"
});

signMeUp.addEventListener("click", () => {
  signMeUp.style.backgroundColor = "palevioletred";
})

button.addEventListener("click", () => {
  button.style.backgroundColor = "lavender";
  event.stopPropagation();
});
