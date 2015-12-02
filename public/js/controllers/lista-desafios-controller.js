angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', '$routeParams', '$cookies', function($scope, $http, $routeParams, $cookies) {
  $scope.infoDesafios = [];
  $http({
    url: '/nivel/' + $routeParams.nivelID,
    method: 'POST',
    data: 'userID=' + $cookies.get('userID'),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data, status, config, headers) {
    $scope.infoDesafios = data;
  });
}]);