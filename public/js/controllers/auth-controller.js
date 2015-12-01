angular.module('jogo')
.controller('AuthController', ['$scope', '$cookies', function($scope, $cookies) {
  $scope.usuario = $cookies.get('login') || '';
  $scope.$on('loginSuccess', function(event, username) {
    alert("ALOHA!");
    $cookies.put('login', username);
    $scope.usuario = $cookies.get('login');
  });
}]);