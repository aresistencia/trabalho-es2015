angular.module('jogo')
.controller('FormRespController', ['$rootScope', function($rootScope) {

  $rootScope.listaRespostas = [
    { 'resposta': 'Corridas', 'numero': 1 },
    { 'resposta': 'Mestre do Scrum', 'numero': 2 },
    { 'resposta': 'Dono do Produto', 'numero': 3 },
    { 'resposta': 'Time', 'numero': 4 },
    { 'resposta': 'Fluxo de Processo', 'numero': 5 },
    { 'resposta': 'Reuniões Diárias', 'numero': 6 },
    { 'resposta': 'Revisão', 'numero': 7  }
  ];

  $rootScope.validaResposta = function(inputText) {
    $rootScope.listaRespostas.forEach(function(card) {
      if (card.resposta === inputText) {
        $rootScope.$broadcast('rightAnswer', card);
      }
    });
  };
}]);