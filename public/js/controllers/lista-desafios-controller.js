angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', function($scope, $http) {
  $scope.desafios = [];
  $http.get('/nivel/1').success(function(data) {
    $scope.desafios = data;
  });
}]);