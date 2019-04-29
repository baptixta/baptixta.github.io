// logo and arrow animation
document.querySelector('.baptixta').style.opacity = 0;
document.querySelector('#first-arrow').style.opacity = 0;
function Aparecer() {
  document.querySelector('.baptixta').style.opacity = 1;
  document.querySelector('#first-arrow').style.opacity = 1;
}
setTimeout(Aparecer, 285);

// Icons animation
// let icons = document.querySelectorAll('.icons');
// for (var i = 0; i < icons.length; i++) {
//   icons[i].style.opacity = "1";
// }


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

console.log(window.pageYOffset);
