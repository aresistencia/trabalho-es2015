angular.module('jogo')
.controller('AuthController', ['$scope', '$cookies', function($scope, $cookies) {
  $scope.usuario = '';
  $scope.$on('rightAnswer', function(event, card) {
    $cookies.put('login', card.resposta);
    $scope.usuario = $cookies.get('login');
  });
}]);