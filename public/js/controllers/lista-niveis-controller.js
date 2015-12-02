angular.module('jogo')
.controller('ListaNiveisController', [ '$scope', '$http', '$cookies', function($scope, $http, $cookies) {
  $scope.niveis = [];
  $http({
    url: '/lista-niveis',
    method: 'POST',
    data: 'userID=' + $cookies.get('userID'),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data, status, config, headers) {
    $scope.niveis = data;
  });
}]);