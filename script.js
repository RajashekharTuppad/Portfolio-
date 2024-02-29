// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Event listener for logo click to open menu
logo.onclick = () => {
    // Check screen size before opening the menu
    if (window.innerWidth <= 768) {
        menuIcon.classList.add('bx-x');
        navbar.classList.add('active');
    }
};

// Event listener for window resize to close menu
window.onresize = () => {
    // Check screen size before closing the menu
    if (window.innerWidth > 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Update navbar links
            if (navLinks.length > 0) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
