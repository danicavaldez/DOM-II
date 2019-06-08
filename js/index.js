// Your code goes here
const funBus = document.querySelector(".logo-heading");
const navItems = document.querySelectorAll("nav a");
const navigationBar = document.querySelector(".main-navigation");
const intro = document.querySelector(".intro h2");
const button = document.querySelector(".btn");
const signMeUp = document.querySelector(".content-pick");
const bodyColor = document.querySelector("body")
const introParagraph = document.querySelector(".intro p")
const funBusPic = document.querySelector('.intro img');
const footer = document.querySelector(".footer ");
const destination = document.querySelector(".destination h4")

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

bodyColor.addEventListener("keydown", () =>{
  bodyColor.style.backgroundColor = "dodgerblue";
});

funBusPic.addEventListener("contextmenu", (event) => {
   funBusPic.style.display = 'none';
});

introParagraph.addEventListener("copy", () => {
  alert("Are you sure you want to copy that?");
})

window.addEventListener("load", () => { 
  alert("The page has loaded. Welcome to Fun Bus!");
})

window.addEventListener("resize", () => {
  alert("Let's resize the page!")
})