angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', function($scope, $http) {
  $scope.desafios = [];
  $http.get('https://api.myjson.com/bins/115np').success(function(data) {
    $scope.desafios = data;
  });
}]);