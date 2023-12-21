const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".product-hover")
const resources = document.querySelector(".resources")
const resourcesActive = document.querySelector(".resources-inside")

menu.addEventListener("mouseover", () => {
    dropMenu.classList.add("active");
})
dropMenu.addEventListener("mouseleave", () => {
    dropMenu.classList.remove("active");
})
dropMenu.addEventListener("mouseenter", () => {
    dropMenu.classList.add("active");
})
menu.addEventListener("mouseleave", () => {
    dropMenu.classList.remove("active");
})
resources.addEventListener("mouseover", () => {
    resourcesActive.classList.add("active");
})
resourcesActive.addEventListener("mouseenter", () => {
    resourcesActive.classList.add("active");
})
resourcesActive.addEventListener("mouseleave", () => {
    resourcesActive.classList.remove("active");
})
resources.addEventListener("mouseleave", () => {
    resourcesActive.classList.remove("active");
})