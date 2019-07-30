const description = document.querySelector('.description');
const skillsTitle = document.querySelector('.skills');
const skillsList = document.querySelectorAll('.skills > ul > li');
const socialMedia = document.querySelectorAll('.social-media > a');

// Animation - Timeline (Desktop)
const tl = new TimelineMax();
tl.fromTo(description, .7, {opacity:0, x: -50}, {opacity:1, x: 0, ease: Back.easeOut.config(1.7,), delay: .4});
tl.fromTo(skillsTitle, .7, {opacity:0, y: -30}, {opacity:1, y: 0, ease: Circ.easeOut, delay: .2});
tl.staggerFromTo(skillsList, .2, {opacity:0, x: -5}, {opacity:1, x: 0}, .145); 
tl.staggerFromTo(socialMedia, .2, {opacity:0, x: -5, y: -12}, {opacity:1, x: 0, y: 0}, .145); 

// Animation - Timeline (Mobile)