const hbBtnElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hbBtnElement.addEventListener("click", event =>{
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event=>{
    drawerElement.classList.remove("open");
    event.stopPropagation();
});