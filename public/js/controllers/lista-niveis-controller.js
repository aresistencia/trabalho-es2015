angular.module('jogo')
.controller('ListaNiveisController', [ '$scope', '$http', function($scope, $http) {
  $scope.niveis = [];
  $http.get('/lista-niveis').success(function(data) {
    $scope.niveis = data;
  });
}]);