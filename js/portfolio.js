var tecnologias = {
	"c#": {
		"titulo": "C#",
		"cor": "#662E93"
	},
	"c++": {
		"titulo": "C++",
		"cor": "#662E93"
	},
	"php": {
		"titulo": "PHP",
		"cor": "#662E93"
	},
	"cakephp": {
		"titulo": "CakePHP",
		"cor": "#662E93"
	},
	"arduino": {
		"titulo": "Arduino",
		"cor": "#662E93"
	},
	"android": {
		"titulo": "Android",
		"cor": "#662E93"
	},
	"ios": {
		"titulo": "iOS",
		"cor": "#662E93"
	},
	"mindwave": {
		"titulo": "MindWave",
		"cor": "#662E93"
	},
	"vr": {
		"titulo": "Realidade Virtual",
		"cor": "#662E93"
	}
};

var softwares = {
	"unity": {
		"titulo": "Unity",
		"cor": "#662E93"
	},
	"visual_studio": {
		"titulo": "Visual Studio",
		"cor": "#662E93"
	},
	"phpstorm": {
		"titulo": "PHP Storm",
		"cor": "#662E93"
	},
	"android_studio": {
		"titulo": "Android Studio",
		"cor": "#662E93"
	},
	"xcode": {
		"titulo": "XCode",
		"cor": "#662E93"
	},
	"photoshop": {
		"titulo": "Photoshop",
		"cor": "#662E93"
	},
	"maya": {
		"titulo": "Autodesk Maya",
		"cor": "#662E93"
	}
};

var portfolio = [
	{
		"id": "drivr",
		"logo": "drivr.gif",
		"titulo": "DrivR",
		"data": "Agosto de 2017 - Outubro de 2017",
		"links": [],
		"tecnologias": [
			"c#",
			"unity",
			"arduino",
			"c++",
			"android",
			"ios",
			"vr"
		],
		"softwares": [
			"unity",
			"maya",
			"android_studio"
		],
		"participantes": [
			{
				"nome": "Paulo Salvatore",
				"funcao": "Líder e Programador"
			},
			{
				"nome": "Tainá Salvatore",
				"funcao": "Designer"
			},
			{
				"nome": "Tiago Akira",
				"funcao": "Modelador e Texturizador 3D"
			}
		],
		"premios": [
			{
				"data": "Novembro de 2017",
				"descricao": "Top 3 - Startup One FIAP (200 empresas)",
				"premiacao": "Entrada direta no programa de aceleração do FIESP."
			},
			{
				"data": "Novembro de 2017",
				"descricao": "Top 3 - Game Dev Cup - Everis Challenge",
				"premiacao": "Entrada no programa de incubação da Everis, edição 2018."
			}
		]
	},
	{
		"id": "mindrace",
		"titulo": "MindRace",
		"data": "Setembro de 2016 - Dezembro de 2016",
		"links": [
			{
				"link": "https://github.com/paulosalvatore/MindRace",
				"imagem": "github.png"
			}
		]
	},
	{
		"id": "sandbox",
		"titulo": "Sandbox",
		"data": "Abril de 2017 - Junho de 2017",
		"links": [
			{
				"link": "https://github.com/paulosalvatore/FIAP-Sandbox",
				"imagem": "github.png"
			}
		]
	},
	{
		"id": "trash_treasures",
		"titulo": "Trash Treasures",
		"data": "Março de 2017 - Novembro de 2017",
		"links": [
			{
				"link": "http://gg.gg/trash_treasures",
				"imagem": "google_play.png"
			}
		]
	},
	{
		"id": "emancination",
		"titulo": "Emancination",
		"data": "Junho de 2017 (em 48 horas)",
		"links": [
			{
				"link": "https://github.com/paulosalvatore/Emancination",
				"imagem": "github.png"
			},
			{
				"link": "https://cafegamestudio.itch.io/emancination",
				"imagem": "itchio.png"
			}
		]
	},
	{
		"id": "slean",
		"titulo": "The Slean Invasion",
		"data": "Março de 2017 - Setembro de 2017",
		"links": [
			{
				"link": "http://splitstudio.com.br/",
				"imagem": "split_studio.png"
			},
			{
				"link": "https://play.google.com/store/apps/details?id=com.splitstudio.mobile.android.sleans",
				"imagem": "google_play.png"
			}
		]
	},
	{
		"id": "alien_survival",
		"titulo": "Alien Survival",
		"data": "Março de 2016 - Julho de 2016",
		"links": [
			{
				"link": "https://github.com/paulosalvatore/AlienSurvival",
				"imagem": "github.png"
			}
		]
	},
	{
		"id": "scare_them_off",
		"titulo": "Scare Them Off!",
		"data": "Agosto de 2016 - Novembro de 2016",
		"links": [
			{
				"link": "https://github.com/paulosalvatore/ScareThemOff",
				"imagem": "github.png"
			},
			{
				"link": "https://salvatoregames.itch.io/scarethemoff",
				"imagem": "itchio.png"
			}
		]
	}
];

function construir_portfolio()
{
	var box_portfolio = $("#portfolio").find(".g1").first();
	var portfolio_section = box_portfolio.closest("section");
	var box_portfolio_base = box_portfolio.clone();
	box_portfolio.remove();

	$.each(portfolio, function(index, value){
		var box_portfolio_clone = box_portfolio_base.clone();

		var logo =
			value.logo
				? value.logo
				: value.id + ".png";

		box_portfolio_clone.find("img").attr("src", "images/portfolio/" + logo);
		box_portfolio_clone.find(".view_project").data("index", index).text(value.titulo);

		box_portfolio_clone.appendTo(portfolio_section);
	});
}

$(function(){
	construir_portfolio();

	var bloqueado = $("#bloqueado");
	var portfolio_detail_box = $("#detail_box");

	bloqueado.click(function(){
		portfolio_detail_box.hide();
		$(this).hide();
	});

	var links = portfolio_detail_box.find(".links");
	var link = portfolio_detail_box.find(".link").first();
	var link_base = link.clone();
	link.remove();

	$(".view_project").click(function(){
		var index = $(this).data("index");

		var informacoes = portfolio[index];

		bloqueado.show();

		$.get("data/" + informacoes.id + ".txt", function(data){
			portfolio_detail_box.find(".titulo").html(informacoes.titulo);
			portfolio_detail_box.find(".data").html(informacoes.data);

			data = data.split("\n").join("<br>");

			portfolio_detail_box.find(".conteudo").html(data);

			portfolio_detail_box.find(".link").remove();

			$.each(informacoes.links, function(index, value){
				link_clone = link_base.clone();

				link_clone.attr("href", value.link);

				if (value.imagem)
					link_clone.html('<img src="images/' + value.imagem + '">');
				else
					link_clone.html(informacoes.titulo);

				link_clone.appendTo(links);
			});

			portfolio_detail_box.show();

			$("html, body").animate({
				scrollTop: portfolio_detail_box.offset().top
			}, 600);
		});
	});

	$(".fechar").click(function(){
		bloqueado.click();
	});
});
