const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav-content");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("btn-open");
        navBar.classList.add("nav-open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("btn-open");
        navBar.classList.remove("nav-open");
        menuOpen = false;
    }
})
;


