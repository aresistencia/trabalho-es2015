angular.module('jogo')
.controller('ListaNiveisController', [ '$scope', '$http', function($scope, $http) {
  $scope.niveis = [];
  $http.get('https://api.myjson.com/bins/15fz9').success(function(data) {
    $scope.niveis = data;
  });
}]);