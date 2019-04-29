// Check viewport
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// logo and arrow animation
document.querySelector('.baptixta').style.opacity = 0;
document.querySelector('#first-arrow').style.opacity = 0;

function Aparecer() {
  document.querySelector('.baptixta').style.opacity = 1;
  document.querySelector('#first-arrow').style.opacity = 1;
}

setTimeout(Aparecer, 285);


// função pra voltar pro topo da página
function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// // aparecer o ícone de subir pro topo da página
document.querySelector(".up").style.display = "none";
window.onscroll = function() {scrollFunction()};

function scrollFunction () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(".up").style.display = "block";
  } else {
    document.querySelector(".up").style.display = "none";
  }
}

// Animações da section #About
const about = document.querySelector('.about');
const aboutPos = about.offsetTop;
const picture = document.querySelector('.me');

// if (isInViewport (about)) {
//   TweenMax.fromTo();
// }
