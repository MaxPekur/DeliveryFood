
const links = document.querySelectorAll('.navigation-link')
const mobileAppClose = document.querySelector('.mobile-app__close')
const mobileApp = document.querySelector('.mobile-app')

const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

ScrollReveal().reveal('.footer-img__wrapper', { 
    origin: 'bottom', 
    distance: '300px', 
    duration: 1500
});


window.addEventListener('scroll', navbarSticky)

function navbarSticky() {

    const navbar = document.querySelector('.navbar')

    if (window.pageYOffset >= 70) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}


/*=============== SHOW MENU ===============*/
const toggleLink = document.querySelector('.toggle-link'),
      toggleMenu = document.querySelector('.toggle-menu'),
      toogleMenuClose = document.querySelector('.toogle-menu__close')

if(toggleMenu){
    toggleLink.addEventListener('click', () =>{
        toggleMenu.style.left = "0"
    })
}

if(toggleMenu){
    toogleMenuClose.addEventListener('click', () =>{
        toggleMenu.style.left = "-150%"
    })
}


links.forEach(link => {
    link.addEventListener('click', activeLink)
})

function activeLink() {
    links.forEach(item => {
        item.classList.remove('active-link')
    })
    this.classList.add('active-link')
}

mobileAppClose.addEventListener('click', () => {
    mobileApp.style.display = 'none'
})



	
