const title = document.querySelectorAll('.me > div > h1');
const text = document.querySelectorAll('.me > div > p');
const socialMedia = document.querySelectorAll('.social-media > a');

// Animation - Timeline (Desktop)
const tl = new TimelineMax();
tl.fromTo(title, .6, {opacity:0, y: -25}, {opacity:1, y: 0}, 0);
tl.staggerFromTo(text, .4, {opacity: 0, x: -5}, {opacity: 1, x: 0, delay: .4}, .2, 0)
tl.staggerFromTo(socialMedia, .5, {opacity:0, x: -8}, {opacity:1, x: 0, delay: .7}, .15, 0); 

// Animation - Timeline (Mobile)