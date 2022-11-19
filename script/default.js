const navBar = document.querySelector(".second-nav");
const menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn)
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


