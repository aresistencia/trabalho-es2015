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

  app.controller('RespostasController', function() {
    
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
        'pontuacao': 94,
        'isCompletado': true,
        'respostas': [
          [ 'Peixe', 3 ],
          [ 'Tartaruga', 11 ],
          [ 'Pássaro', 64 ],
          [ 'Cobra', 7 ],
          [ 'Jacaré', 9 ]
        ]
      },
      {
        'titulo': 'Frutas com sementes ou caroço',
        'pontuacao': 68,
        'isCompletado': false
      },
      {
        'titulo': 'Alguma outra coisa',
        'pontuacao': 11,
        'isCompletado': false
      }
    ]
  ];

})();