angular.module('jogo')
.controller('FormRespController', ['$rootScope', function($rootScope) {

  $rootScope.listaRespostas = [
    { 'resposta': 'Corridas', 'id': 1 },
    { 'resposta': 'Mestre do Scrum', 'id': 2 },
    { 'resposta': 'Dono do Produto', 'id': 3 },
    { 'resposta': 'Time', 'id': 4 },
    { 'resposta': 'Fluxo de Processo', 'id': 5 },
    { 'resposta': 'Reuniões Diárias', 'id': 6 },
    { 'resposta': 'Revisão', 'id': 7  }
  ];

  $rootScope.validaResposta = function(inputText) {
    $rootScope.listaRespostas.forEach(function(card) {
      if (card.resposta === inputText) {
        $rootScope.$broadcast('rightAnswer', card);
      }
    });
  };
}]);