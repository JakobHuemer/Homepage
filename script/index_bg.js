window.addEventListener("DOMContentLoaded", scrollLoop, false);

const bgImage = document.querySelector("#background");

var xScrollPos;
var yScrollPos;

function scrollLoop(e){
    xScrollPos = window.scrollX;
    yScrollPos = window.scrollY;

    setTranslate(0, yScrollPos * -0.2, bgImage);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0";
}
