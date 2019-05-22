let accordion = document.querySelectorAll('.accordion');
let painel = document.querySelectorAll('.panel');

accordion.forEach((el, idx) => {
  accordion[idx].addEventListener('click', () => {
    painel[idx].classList.toggle('is-active');

    if (painel[idx].style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      painel[idx].style.maxHeight = painel[idx].scrollHeight + "px";
    }
  });
});
