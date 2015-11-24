angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', function($scope, $http) {
  $scope.infoDesafios = [];
  $http.get('/nivel/1').success(function(data) {
    $scope.infoDesafios = data;
  });
}]);