angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.infoDesafios = [];
  $http.get('/nivel/' + $routeParams.nivelID).success(function(data) {
    $scope.infoDesafios = data;
  });
}]);