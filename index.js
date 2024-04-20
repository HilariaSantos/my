
/*---------------ÍCON DA BARRA DE NAVEGAÇÃO-------------------*/
let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
};

/*---------------LINKANDO---------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heifht = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + heifht){
            navLinks.forEach(Links =>{
                Links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }
    });

    /*---------------Barra de Navegação---------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY < 100);

    /*remove toggle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .Portfólio-box, .Contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Marketing Manager', 'Trade Manager', 'Graphic Design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})