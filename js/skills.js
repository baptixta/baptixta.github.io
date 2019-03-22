// Identificando a página principal
let page = document.querySelector('#experience-skills');

// Identificando os "buttons"
let development = document.querySelector('#development');
let portfolio = document.querySelector('#portfolio');
let educacao = document.querySelector('#educacao');
let habilidades = document.querySelector('#habilidades');

// Identificando as "pages"
let developmentPage = document.querySelector('.development-page');
let portfolioPage = document.querySelector('.portfolio-page');
let educacaoPage = document.querySelector('.education-page');
let habilidadesPage = document.querySelector('.skills-page');

// Deixando as "pages" invisíveis
developmentPage.style.opacity = "1";
portfolioPage.style.opacity = "1";
educacaoPage.style.opacity = "1";
habilidadesPage.style.opacity = "1";


// Faz a página Development aparecer
development.addEventListener('click', () => {
  page.style.opacity = "0";
  developmentPage.style.opacity= "1";
});

// Faz a página Portfolio aparecer
portfolio.addEventListener('click', () => {
  page.style.opacity = "0";
  portfolioPage.style.opacity = "1";
});

// Faz a página Educação aparecer
educacao.addEventListener('click', () => {
  page.style.opacity = "0";
  educacaoPage.style.display = "1";
});

// Faz a página Skills aparecer
habilidades.addEventListener('click', () => {
  page.style.opacity = "0";
  habilidadesPage.style.opacity = "1";
});

// ------------------------------------
// ------------------------------------
// Fazer o texto do Portfolio aparecer
