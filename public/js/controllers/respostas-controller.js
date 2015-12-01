angular.module('jogo')
.controller('RespostasController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.respostas = [];
  $http.get('/desafio/' + $routeParams.desafioID).success(function(data) {
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