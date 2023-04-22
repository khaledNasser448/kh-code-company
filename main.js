// start nimate Width On Scrolling
let skillsSection = document.querySelector(".skills-container");
let spans = document.querySelectorAll(".progress span");

window.onscroll = () => {
    if(window.scrollY>= skillsSection.offsetTop-250){
        spans.forEach((spans) => { 
            spans.style.width = spans.dataset.width;
        })
}}
// end nimate Width On Scrolling
