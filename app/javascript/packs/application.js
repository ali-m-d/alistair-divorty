require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "stylesheets/application"

document.addEventListener('DOMContentLoaded', function() {
    let mouseCursor = document.querySelector('.cursor');
    let navLinks = document.querySelectorAll('.nav-links li');
    
    const cursor = (event) => {
        mouseCursor.style.top = event.pageY + 'px';
        mouseCursor.style.left = event.pageX + 'px';
    };
    
    window.addEventListener('mousemove', cursor)
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow'); 
            link.classList.add('hovered-link');
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow'); 
            link.classList.remove('hovered-link');
        });
    });
})