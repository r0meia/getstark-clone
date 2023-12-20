const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".product-hover")
const logo = document.querySelector(".logo")
const pricing = document.querySelector(".pricing")
const resources = document.querySelector(".resources")

menu.addEventListener("mouseenter", () => {
    dropMenu.classList.add("active");
})
dropMenu.addEventListener("mouseleave", () => {
    dropMenu.classList.remove("active");
})
logo.addEventListener("mouseleave", () => {
    dropMenu.classList.remove("active");
})
pricing.addEventListener("mouseenter", () => {
    dropMenu.classList.remove("active")
})
