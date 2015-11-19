angular.module('jogo')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/inicio/index.html'
  })
  .when('/lista-niveis', {
    templateUrl: 'templates/pages/lista-niveis/index.html',
    controller: 'ListaNiveisController',
    controllerAs: 'niveisCtrl'
  })
  // .when('/lista-niveis/:nivel', {
  .when('/lista-niveis/01', {
    templateUrl: 'templates/pages/nivel/index.html',
    controller: 'ListaDesafiosController',
    controllerAs: 'desafiosCtrl'
  })
  ;
});