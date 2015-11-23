angular.module('jogo')
.directive('desafioButton', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/desafio-button.html'
  };
});