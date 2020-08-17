require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

require("trix");
import "stylesheets/application"
import "./projects.js"
// import "../css/application.css";
require("@rails/actiontext");


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const pill = document.querySelector('.pill');
    const gradients = [
        "linear-gradient(to top, #D9AFD9 0%, #97D9E1 100%)",
        "linear-gradient(to top, #F4D03F 0%, #D9AFD9 100%)",
        "linear-gradient(to top, #16A085 0%, #F4D03F 100%)"
    ];
    
    const options = {
        threshold: 0.4
    };
    
    let observer = new IntersectionObserver(navCheck, options);
    
    function navCheck(entries) {
       entries.forEach(entry => {
           const sectionId = entry.target.id;
           const activeAnchor = document.querySelector(`[data-page=${sectionId}]`)
           const gradientIndex = entry.target.getAttribute('data-index');
           const coords = activeAnchor.getBoundingClientRect();
           const directions = {
               height: coords.height,
               width: coords.width,
               top: coords.top,
               left: coords.left
           }
           
           if (entry.isIntersecting) {
               console.log("entry intersecting")
               pill.style.setProperty('left', `${directions.left}px`);
               pill.style.setProperty('top', `${directions.top}px`)
               pill.style.setProperty('width', `${directions.width}px`)
               pill.style.setProperty('height', `${directions.height}px`)
               pill.style.background = gradients[gradientIndex]
           }
       }) 
    }
    
    sections.forEach(section => {
        observer.observe(section);
    });
})
