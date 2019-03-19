// Identificando a página principal
let page = document.querySelector('#experience-skills');

// Identificando os "buttons"
let development = document.querySelector('#development');
let portfolio = document.querySelector('#portfolio');
let educacao = document.querySelector('#educacao');
let qualificacoes = document.querySelector('#qualificacoes');
let habilidades = document.querySelector('#habilidades');

// Identificando as "pages"
let developmentPage = document.querySelector('.development-page');
let portfolioPage = document.querySelector('.portfolio-page');
let educacaoPage = document.querySelector('.education-page');
let qualificacoesPage = document.querySelector('.qualification-page');
let habilidadesPage = document.querySelector('.skills-page');

// Deixando as "pages" invisíveis
developmentPage.style.display = "none";
portfolioPage.style.display = "none";
educacaoPage.style.display = "none";
qualificacoesPage.style.display = "none";
habilidadesPage.style.display = "none";


// Faz a página Development aparecer
development.addEventListener('click', () => {
  page.style.display = "none";
  developmentPage.style.display = "block";
});

// Faz a página Portfolio aparecer
portfolio.addEventListener('click', () => {
  page.style.display = "none";
  portfolioPage.style.display = "block";
});

// Faz a página Educação aparecer
educacao.addEventListener('click', () => {
  page.style.display = "none";
  educacaoPage.style.display = "block";
});

// Faz a página Qualificações aparecer
qualificacoes.addEventListener('click', () => {
  page.style.display = "none";
  qualificacoesPage.style.display = "block";
});

// Faz a página Skills aparecer
habilidades.addEventListener('click', () => {
  page.style.display = "none";
  habilidadesPage.style.display = "block";
});
