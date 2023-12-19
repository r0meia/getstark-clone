const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".product-hover")

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    dropMenu.classList.toggle("active");
})