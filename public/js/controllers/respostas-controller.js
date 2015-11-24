angular.module('jogo')
.controller('RespostasController', ['$scope', '$http', function($scope, $http) {

  $scope.respostas = [];
  $http.get('/nivel/1/desafio/1').success(function(data) {
    $scope.respostas = data;
  });

  $scope.$on('rightAnswer', function(event, cardResposta) {
    $scope.respostas.respostas.forEach(function(card) {
      if (card.id === cardResposta.id) {
        card.resposta = cardResposta.resposta;
      }
    });
  });

}]);