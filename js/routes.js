angular.module('jogo')
.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/pages/inicio/index.html'
  });
});