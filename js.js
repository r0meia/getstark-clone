const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".product-hover")
const dropMenuHover = document.querySelectorAll(".product-hover.active")

menu.addEventListener("mouseenter", () => {
    dropMenu.classList.toggle("active");
})
dropMenuHover.addEventListener("mouseleave", () => {
    dropMenu.classList.remove("active");
})