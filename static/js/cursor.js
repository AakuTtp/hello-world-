let mouseCursor = document.querySelector(".cursor");
let nav_links = document.querySelectorAll("nav .container .nav_links ul li");
window.addEventListener("mousemove", cursor);


function cursor(e){
    let X = e.clientX;
    let Y = e.clientY;
    mouseCursor.style.top = Y + 'px';
    mouseCursor.style.left = X + 'px';

}

nav_links.forEach(link => {

    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");

    })
})