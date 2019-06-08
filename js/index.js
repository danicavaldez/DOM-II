// Your code goes here
const funBus = document.querySelector(".logo-heading");
const navItems = document.querySelectorAll("nav a");
const navigationBar = document.querySelector(".main-navigation");

funBus.addEventListener("mouseover", () => {
  funBus.classList.add("uppercase");
});

window.addEventListener("scroll", () => {
  console.log("Scrolling, scrolling, scrolling.")
})

navigationBar.addEventListener("dblclick", () => {
  navigationBar.style.backgroundColor = "peachpuff";
});

navItems.forEach((link) =>
  link.addEventListener('click', () => {
    link.preventDefault;
    console.log('Default prevented!');
  })
);