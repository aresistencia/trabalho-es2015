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

  $scope.$on('rightAnswer', function(event, card) {
    $scope.respostas.forEach(function(resposta) {
      if (resposta.id === card.id) {
        resposta.solucao = card.resposta;
      }
    });
  });

}]);