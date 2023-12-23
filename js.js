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

const categories = document.querySelector(".a-categories")
const categoriesActive = document.querySelector(".categories")
const arrow = document.querySelector(".arrow")

categories.addEventListener("click", () => {
    categoriesActive.classList.toggle("active");
    arrow.classList.toggle("rotate");
})

const bCategories = document.getElementById("b-categories")
const bCategoriesActive = document.querySelector(".bcategories")
const bArrow = document.querySelector(".barrow")

bCategories.addEventListener("click", () => {
    bCategoriesActive.classList.toggle("active");
    bArrow.classList.toggle("brotate"); 
})