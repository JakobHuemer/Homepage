const button = document.querySelector(".mode-switcher");
const root = document.querySelector(":root");
var mode;
console.log(!document.cookie.split(";")[0].split("=")[1]);
console.log(!document.cookie.split(";")[0].split("=")[1] == "false")
console.log(document.cookie)


if(!document.cookie.split("; ").find((row) => row.startsWith("onlyOnce"))){
    document.cookie = "onlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=none; Secure";
    document.cookie = "mode=dark";
    mode = document.cookie.split("; ").find((row) => row.startsWith("mode=")).split("=")[1];
} else {
    console.log(document.cookie.split("; "))
    mode = document.cookie.split("; ").find((row) => row.startsWith("mode=")).split("=")[1];
}


const dark_btn = document.querySelector('.mode-switcher .indicator-dark');
const light_btn = document.querySelector('.mode-switcher .indicator-light');

if(mode === "light"){
    light_on();
} else {
    dark_on();
}

button.addEventListener("click" ,async () => {
    if (mode === "dark") {
        light_on();
        mode = "light";
        document.cookie = "mode=light";
        console.log("CHANGING MODE: " + document.cookie.split("; ").find((row) => row.startsWith("mode=")).split("=")[1]);
    } else {
        dark_on();
        mode = "dark";
        document.cookie = "mode=dark";
        console.log("CHANGING MODE: " + document.cookie.split("; ").find((row) => row.startsWith("mode=")).split("=")[1]);
    }
});


function dark_on(){
    dark_btn.classList.add("on");
    dark_btn.classList.remove("off");
    light_btn.classList.add("off");
    light_btn.classList.remove("on");
    setProp("--bg-primary", "rgb(15, 15, 15)");
    setProp("--bg-primary-op", "15, 15, 15"); 
    setProp("--bg-secondary", "rgb(2, 2, 2)");
    setProp("--bg-secondary-op", "2, 2, 2");
    setProp("--font-clr-primary", "rgb(255, 255, 255)");
    setProp("--font-clr-secondary", "rgb(253, 253, 253)");
    setProp("--neutral-primary", "rgb(255, 255, 255)");
    setProp("--neutral-secondary", "rgba(192, 192, 192, .1)");
    //alert("Dark on!");
}

function light_on(){
    dark_btn.classList.add("off");
    dark_btn.classList.remove("on");
    light_btn.classList.add("on");
    light_btn.classList.remove("off");
    setProp("--bg-primary", "rgb(255, 255, 255)");
    setProp("--bg-primary-op", "255, 255, 255");
    setProp("--bg-secondary", "rgb(240, 240, 240)");
    setProp("--bg-secondary-op", "240, 240, 240");
    setProp("--font-clr-primary", "rgb(0, 0, 0)");
    setProp("--font-clr-secondary", "rgb(4, 4, 4)");
    setProp("--neutral-primary", "rgb(11, 11, 11)");
    setProp("--neutral-secondary", "rgba(20, 20, 20, .1)");
    //alert("Light on!")
}

function setProp(name, prop){
    root.style.setProperty(`${name}`, `${prop}`);
}