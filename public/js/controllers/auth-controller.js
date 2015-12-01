angular.module('jogo')
.controller('AuthController', ['$scope', '$cookies', function($scope, $cookies) {
  $scope.usuario = $cookies.get('login') || '';
  $scope.$on('loginSuccess', function(event, user) {
    alert("ALOHA!");
    $cookies.put('login', user.login);
    $scope.usuario = $cookies.get('login');
  });
}]);