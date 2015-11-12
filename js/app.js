(function() {

  // Modulo principal do jogo
  var app = angular.module('jogo', []);

  // Controlador da lista de niveis
  app.controller('ListaNiveisController', [ '$http', function($http) {
    // this.niveis = listaNiveis;
    var listaNiveis = this;
    listaNiveis.niveis = [];
    $http.get('https://api.myjson.com/bins/3is4h').success(function(data) {
      listaNiveis.niveis = data;
    });

  }]);

  // Controlador da lista de desafios
  app.controller('ListaDesafiosController', function() {
    this.desafios = listaDesafios;
  });

  app.controller('RespostasController', function() {
    this.desafios = listaDesafios;
  });

  app.controller('FormRespController', function() {
    this.respostas = "";
    this.texto = "";
    this.validaResposta = function(inputText) {
      // listaDesafios = true;
      for (var i = 0; i < 5; i++) {
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

  // Lista dos niveis do jogo
  var listaNiveis = [
    {
      'nivel': '01',
      'titulo': '',
      'isDisponivel': true,
      'desafiosCompletados': 1
    },
    {
      'nivel': '02',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '03',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '04',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '05',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '06',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '07',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '08',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    },
    {
      'nivel': '09',
      'titulo': '',
      'isDisponivel': false,
      'desafiosCompletados': 0
    }
  ];

  // Lista de desafios
  var listaDesafios = [
    [
      {
        'titulo': 'Animais que nascem de um ovo',
        'pontuacao': 00,
        'isCompletado': false,
        'respostas': [
          { 'resposta': 'Peixe', 'pontos': '03', 'isRespondida': false },
          { 'resposta': 'Tartaruga', 'pontos': '11', 'isRespondida': false },
          { 'resposta': 'Pássaro', 'pontos': '64', 'isRespondida': false },
          { 'resposta': 'Cobra', 'pontos': '07', 'isRespondida': false },
          { 'resposta': 'Jacaré', 'pontos': '09', 'isRespondida': false }
        ]
      },
      {
        'titulo': 'Frutas com sementes ou caroço',
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