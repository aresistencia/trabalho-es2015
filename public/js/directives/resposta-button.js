angular.module('jogo')
.directive('respostaButton', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/resposta-button.html'
  };
});