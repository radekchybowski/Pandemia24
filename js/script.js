const navSlide = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.top-nav');
    const navLinks = document.querySelectorAll('.nav-list li');
    //toggle nav

    burgerMenu.addEventListener('click',()=>{
        nav.classList.toggle('top-nav-active')
        
        //links animation
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `burgerAnimation 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();

