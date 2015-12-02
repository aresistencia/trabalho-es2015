angular.module('jogo')
.controller('RespostasController', ['$scope', '$http', '$routeParams', '$cookies', function($scope, $http, $routeParams, $cookies) {

  $scope.respostas = [];

  $http({
    url: '/desafio/' + $routeParams.desafioID,
    method: 'POST',
    data: 'userID=' + $cookies.get('userID'),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).success(function(data, status, config, headers) {
    $scope.respostas = data;
  });

  // $http.get('/desafio/' + $routeParams.desafioID).success(function(data) {
  //   $scope.respostas = data;
  // });

  $scope.$on('rightAnswer', function(event, cardResposta) {
    $scope.respostas.respostas.forEach(function(card) {
      if (card.id === cardResposta.id) {
        card.resposta = cardResposta.resposta;
      }
    });
  });

}]);