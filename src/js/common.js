import AOS from 'aos';

AOS.init();


let scrolldiv = document.createElement("div");
scrolldiv.classList.add("scrolldown");
scrolldiv.innerHTML = "SCROLL";
document.querySelector("main").prepend(scrolldiv);

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
    document.querySelector(".scrolldown").classList.add("transition", "ease-in-out", "hidden","opacity-0");
    } else {
    document.querySelector(".scrolldown").classList.add("transition", "ease-in-out", "block","opacity-100");
    }
});
