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
<<<<<<< HEAD
<<<<<<< HEAD
developmentPage.style.display = "none";
portfolioPage.style.display = "none";
educacaoPage.style.display = "none";
habilidadesPage.style.display = "none";
=======
developmentPage.style.opacity = "1";
portfolioPage.style.opacity = "1";
educacaoPage.style.opacity = "1";
habilidadesPage.style.opacity = "1";
>>>>>>> 855cf8fc722d1f374fa77fd9a7125ae814f92e1e
=======
developmentPage.style.opacity = "1";
portfolioPage.style.opacity = "1";
educacaoPage.style.opacity = "0";
qualificacoesPage.style.opacity = "0";
habilidadesPage.style.opacity = "0";
>>>>>>> parent of d2a424e... Site Profissional | Script Menu Skills + Versão Inĝlês


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
<<<<<<< HEAD
<<<<<<< HEAD
  page.style.display = "none";
  educacaoPage.style.display = "flex";
=======
  page.style.opacity = "0";
  educacaoPage.style.display = "1";
>>>>>>> 855cf8fc722d1f374fa77fd9a7125ae814f92e1e
=======
  page.style.opacity = "0";
  educacaoPage.style.display = "1";
>>>>>>> parent of d2a424e... Site Profissional | Script Menu Skills + Versão Inĝlês
});

// Faz a página Qualificações aparecer
qualificacoes.addEventListener('click', () => {
  page.style.opacity = "0";
  qualificacoesPage.style.opacity = "1";
});

// Faz a página Skills aparecer
habilidades.addEventListener('click', () => {
  page.style.opacity = "0";
  habilidadesPage.style.opacity = "1";
});

// ------------------------------------
// ------------------------------------
// Fazer o texto do Portfolio aparecer
