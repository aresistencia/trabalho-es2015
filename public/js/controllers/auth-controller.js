angular.module('jogo')
.controller('AuthController', ['$scope', '$cookies', function($scope, $cookies) {

  $scope.usuario = $cookies.get('nome') || '';

  $scope.logout = function() {
    $scope.usuario = '';
    $cookies.put('isLoggedIn', false);
  }

  $scope.$on('loginSuccess', function(event, login) {
    $cookies.put('userID', login.id);
    $cookies.put('username', login.username);
    $cookies.put('nome', login.nome);
    $cookies.put('isLoggedIn', true);
    $scope.usuario = $cookies.get('nome');
  });

}]);