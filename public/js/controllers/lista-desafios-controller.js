angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', '$routeParams', '$cookies', '$location', function($scope, $http, $routeParams, $cookies, $location) {
  $scope.infoDesafios = [];
  $http({
    url: '/nivel/' + $routeParams.nivelID,
    method: 'POST',
    data: 'userID=' + $cookies.get('userID'),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data, status, config, headers) {
    if (data.nivel_id === -1) {
      $location.url('/lista-niveis');
    } else {
      $scope.infoDesafios = data;
    }
  });
}]);