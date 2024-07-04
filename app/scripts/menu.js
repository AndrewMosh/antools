document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav-mobile");

    burger.addEventListener("click", () => {
        nav.classList.toggle("header__nav-mobile--active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".nav__item--dropdown");
    const nav = document.querySelector(".nav__dropped-menu");

    dropdown.addEventListener("click", (e) => {
        console.log(e.target);
        nav.classList.toggle("nav__active");
    });
});

document.addEventListener("click", (e) => {
    const nav = document.querySelector(".nav__dropped-menu");

    if (e.target.classList.value !== "nav__droppable" && e.target.classList.value !== "nav__link") {
        nav.classList.remove("nav__active");
    }
});
