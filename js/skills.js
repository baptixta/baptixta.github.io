// Identificando a página principal
let page = document.querySelector('#experience-skills');

// Identificando os "buttons"
let development = document.querySelector('#development');
let portfolio = document.querySelector('#portfolio');
let educacao = document.querySelector('#educacao');
let habilidades = document.querySelector('#habilidades');

// Identificando as "pages"
let pages = document.querySelectorAll('.pages');
let developmentPage = document.querySelector('.development-page');
let portfolioPage = document.querySelector('.portfolio-page');
let educacaoPage = document.querySelector('.education-page');
let habilidadesPage = document.querySelector('.skills-page');

//Identificando o Botão Voltar
let voltar = document.querySelectorAll('.fa-angle-double-left');

// Deixando as "pages" invisíveis
developmentPage.style.display = "none";
portfolioPage.style.display = "none";
educacaoPage.style.display = "none";
habilidadesPage.style.display = "none";


// Faz a página Development aparecer
development.addEventListener('click', () => {
  page.style.display = "none";
  developmentPage.style.display= "flex";
});

// Faz a página Portfolio aparecer
portfolio.addEventListener('click', () => {
  page.style.display = "none";
  portfolioPage.style.display = "flex";
});

// Faz a página Educação aparecer
educacao.addEventListener('click', () => {
  page.style.display = "none";
  educacaoPage.style.display = "flex";
});

// Faz a página Skills aparecer
habilidades.addEventListener('click', () => {
  page.style.display = "none";
  habilidadesPage.style.display = "flex";
});

// Faz o menu Skills voltar
voltar.forEach((el, idx) => {
  el.addEventListener('click', () => {
    pages.forEach((el, idx) => {
      el.style.display = "none";
    })
    page.style.display = "flex";
  })
});
