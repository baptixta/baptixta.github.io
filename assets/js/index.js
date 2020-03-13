// side content
const title = document.querySelectorAll('.me > div > h1');
const text = document.querySelectorAll('.me > div > p');
const socialMedia = document.querySelectorAll('.social-media > a');

// main content
const portfolio = document.querySelector('.main-content > h2');
const portfolioTitle = document.querySelector('.portfolio > h2');
const portfolioDesc = document.querySelector('.portfolio > h3');

// Animation - Timeline (Desktop)
const tl = new TimelineMax({delay: .25});
tl.fromTo(title, .4, {opacity:0, y: -25}, {opacity:1, y: 0}, 0);
tl.staggerFromTo(text, .4, {opacity: 0, x: -5}, {opacity: 1, x: 0, delay: .4}, .2, 0)
tl.staggerFromTo(socialMedia, .3, {opacity:0, x: -8}, {opacity:1, x: 0, delay: .7}, .1, 0); 
tl.fromTo(portfolio, .4, {opacity: 0, x: -5}, {opacity: 1, x: 0}, 0);
tl.fromTo(portfolioTitle, .4, {opacity: 0, x: -15}, {opacity: 1, x: 0}, 0);
tl.fromTo(portfolioDesc, .4, {opacity: 0, x: -15}, {opacity: 1, x: 0}, 0);