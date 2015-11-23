angular.module('jogo')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/inicio/index.html'
  })
  .when('/lista-niveis', {
    templateUrl: 'templates/pages/lista-niveis/index.html',
    controller: 'ListaNiveisController',
  })
  // .when('/nivel/:nivel', {
  .when('/nivel/1', {
    templateUrl: 'templates/pages/nivel/index.html',
    controller: 'ListaDesafiosController'
  })
  // .when('/nivel/:nivel/desafio/:desafio', {
  .when('/nivel/1/desafio/1', {
    templateUrl: 'templates/pages/desafio/index.html',
    controller: 'RespostasController'
  })
  ;
});