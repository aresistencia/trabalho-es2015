angular.module('jogo')
.controller('RespostasController', ['$scope', function($scope) {

  $scope.respostas = [
    { 'resposta': '', 'pontos': '40', 'numero': 1 },
    { 'resposta': '', 'pontos': '15', 'numero': 2 },
    { 'resposta': '', 'pontos': '10', 'numero': 3 },
    { 'resposta': '', 'pontos': '11', 'numero': 4 },
    { 'resposta': '', 'pontos': '04', 'numero': 5 },
    { 'resposta': '', 'pontos': '09', 'numero': 6 },
    { 'resposta': '', 'pontos': '05', 'numero': 7 }
  ];

  $scope.$on('rightAnswer', function(event, cardResposta) {
    $scope.respostas.forEach(function(card) {
      if (card.numero === cardResposta.numero) {
        card.resposta = cardResposta.resposta;
      }
    });
  });

}]);