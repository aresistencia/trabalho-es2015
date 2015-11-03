(function() {

  // Modulo principal do jogo
  var app = angular.module('jogo', []);

  // Controlador da lista de niveis
  app.controller('ListaNiveisController', function() {
    this.niveis = listaNiveis;
  });

  // Controlador da lista de desafios
  app.controller('ListaDesafiosController', function() {
    this.desafios = listaDesafios;
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
    {
      'nivel': 1,
      'desafios': [
        {
          'titulo': 'Animais que nascem de um ovo',
          'pontuacao': 94,
          'completado': true
        },
        {
          'titulo': 'Frutas com sementes ou caroço',
          'pontuacao': 68,
          'completado': false
        },
        {
          'titulo': 'Alguma outra coisa',
          'pontuacao': 11,
          'completado': false
        }
      ]
    }
  ];

})();