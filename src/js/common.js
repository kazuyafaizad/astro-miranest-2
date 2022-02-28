import AOS from 'aos';

AOS.init({ mirror: true});

let scrolldiv = document.createElement("div");
scrolldiv.classList.add("scrolldown");
scrolldiv.innerHTML = "SCROLL";
document.querySelector("main").prepend(scrolldiv);

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {

    document.querySelector(".scrolldown").classList.remove("transition", "ease-in-out","duration-1000","opacity-100");
    document.querySelector(".scrolldown").classList.add("transition", "ease-in-out","duration-1000","opacity-0");
    } else {

        document.querySelector(".scrolldown").classList.remove("transition", "ease-in-out","duration-1000","opacity-0");
    document.querySelector(".scrolldown").classList.add("transition", "ease-in-out","duration-1000","opacity-100");
    }
});
