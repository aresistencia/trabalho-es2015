angular.module('jogo')
.controller('AuthController', ['$scope', '$cookies', function($scope, $cookies) {
  $scope.usuario = $cookies.get('nome') || '';
  $scope.$on('loginSuccess', function(event, login) {
    $cookies.put('username', login.username);
    $cookies.put('nome', login.nome);
    $scope.usuario = $cookies.get('nome');
  });
}]);