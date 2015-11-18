(function() {

  // Modulo principal do jogo
  var app = angular.module('jogo', []);

  // Controlador da lista de niveis
  app.controller('ListaNiveisController', [ '$http', function($http) {
    var jogo = this;
    jogo.niveis = [];
    $http.get('https://api.myjson.com/bins/3is4h').success(function(data) {
      jogo.niveis = data;
    });
  }]);

  // Controlador da lista de desafios
  app.controller('ListaDesafiosController', [ '$http', function($http) {
    var jogo = this;
    jogo.desafios = [];
    $http.get('https://api.myjson.com/bins/3epip').success(function(data) {
      jogo.desafios = data;
    });
  }]);

  app.controller('RespostasController', function() {
    this.desafios = listaDesafios;
  });

  app.controller('FormRespController', function() {
    this.texto = "";
    this.validaResposta = function(inputText) {
	inputText = inputText.toLowerCase();
	if (inputText == 'dono' || inputText == 'owner'|| inputText == 'dono do produto'){
		inputText = 'Dono do Produto';}
	else if (inputText == 'sprint' || inputText == 'corrida' || inputText == 'corridas'){
		inputText = 'Corridas';}
	else if (inputText == 'mestre' || inputText == 'master' || inputText == 'mestre do scrum'){
		inputText = 'Mestre do Scrum';}
	else if (inputText == 'time' || inputText == 'team'){
		inputText = 'Time';}
	else if (inputText == 'fluxo' || inputText == 'processo'|| inputText == 'fluxo de processo'){
		inputText = 'Fluxo de Processo';}
	else if (inputText == 'reunioes' || inputText == 'diarias' || inputText == 'reuniões' || inputText == 'diárias' || 
				inputText == 'reunioes diarias' || inputText == 'reuniões diárias'){
		inputText = 'Reuniões Diárias';}
	else if (inputText == 'revisao' || inputText == 'revisão'){
		inputText = 'Revisão';}
      for (var i = 0; i < 7; i++) {
        if (listaDesafios[0][0].respostas[i].resposta === inputText) {
          listaDesafios[0][0].respostas[i].isRespondida = true;
        }
        this.texto = "";
      }
    };
  });
 

  // Configuracao da diretiva nivel-button
  app.directive('nivelButton', function() {
    return {
      restrict: 'E',
      templateUrl: 'nivel-button.html'
    };
  });

  // Configuracao da diretiva desafio-button
  app.directive('desafioButton', function() {
    return {
      restrict: 'E',
      templateUrl: 'desafio-button.html'
    };
  });

  // Configuracao da diretiva resposta-button
  app.directive('respostaButton', function() {
    return {
      restrict: 'E',
      templateUrl: 'resposta-button.html'
    };
  });

  // Lista de desafios
  var listaDesafios = [
    [
      {
        'titulo': 'SCRUM',
        'pontuacao': 00,
        'isCompletado': false,
        'respostas': [
          { 'resposta': 'Corridas', 'pontos': '40', 'isRespondida': false },
          { 'resposta': 'Mestre do Scrum', 'pontos': '15', 'isRespondida': false },
          { 'resposta': 'Dono do Produto', 'pontos': '10', 'isRespondida': false },
          { 'resposta': 'Time', 'pontos': '11', 'isRespondida': false },
          { 'resposta': 'Fluxo de Processo', 'pontos': '04', 'isRespondida': false },
		  { 'resposta': 'Reuniões Diárias', 'pontos': '09', 'isRespondida': false },
		  { 'resposta': 'Revisão', 'pontos': '05', 'isRespondida': false },
        ]
      },
      {
        'titulo': 'XP',
        'pontuacao': 00,
        'isCompletado': false
      },
      {
        'titulo': 'Alguma outra coisa',
        'pontuacao': 00,
        'isCompletado': false
      }
    ]
  ];

})();