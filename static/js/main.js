function navBar(){
    let nav_bar_open = false;
    let nav_menu = document.querySelector(".menu");
    let nav_links = document.querySelector(".nav_links");

    nav_menu.addEventListener("click", () => {
        if(nav_bar_open === false){
            nav_links.style.top = "60px";
            nav_bar_open = true;

        }
        else if(nav_bar_open === true){
            nav_links.style.top = "-200px";
            nav_bar_open = false;

        }
    })
}
// Window on load

// After effect
window.addEventListener("mousemove", AfterEffects)
function AfterEffects(){
    // Hero Section
    let heroContent = document.querySelector(".heroSection .container .ContentSection");
    let heroImg = document.querySelector(".heroSection .container .imgSection img");

    heroContent.addEventListener('mousemove', (e) => {
        let x = -e.clientX / 20 ;
        let y = -e.clientY / 8 + 10;

        heroImg.style.left = x + 'px';
        heroImg.style.top = y + 'px';

    })
    heroContent.addEventListener('mouseleave', (e) => {
        let x = e.clientX / 30 ;
        let y = e.clientY / 30;

        heroImg.style.left = 0 + 'px';
        heroImg.style.top = 0 + 'px';

    })
}

function projectsSlide(){
    let leftBtn = document.querySelector(".projects .container .TitleSection .buttons .leftBtn");
    let rightBtn = document.querySelector(".projects .container .TitleSection .buttons .rightBtn");

    let projectContainer = document.querySelector(".ProjectSection .ProjectsContainer");
    slide = 0;
    slideBy = 100;

    leftBtn.addEventListener("click", () => {
        if(slide <= -300){
            slide = -300
        }
        else{
            projectContainer.style.left = slide + "%";

            slide -= slideBy;

        }


        
    })
    
    rightBtn.addEventListener("click", () => {
        if(slide >= 0){
            slide = 0;
        }
        else{
            slide += slideBy;
            projectContainer.style.left = slide + "%";
            
        }

        
    })
    


}
function allFunction(){
    navBar();
    projectsSlide();
}

allFunction();