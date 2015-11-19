angular.module('jogo')
.directive('respostaForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/resposta-form.html'
  };
});