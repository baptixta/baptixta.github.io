let teste = document.querySelectorAll('.accordion');
let painel = document.querySelectorAll('.panel');

teste.forEach((el, idx) => {
  teste[idx].addEventListener('click', () => {
    painel[idx].classList.toggle('is-active');
  });
});
