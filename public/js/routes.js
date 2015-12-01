angular.module('jogo')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/inicio/index.html'
  })
  .when('/lista-niveis', {
    templateUrl: 'templates/pages/lista-niveis/index.html',
    controller: 'ListaNiveisController'
  })
  .when('/nivel/:nivelID', {
    templateUrl: 'templates/pages/nivel/index.html',
    controller: 'ListaDesafiosController'
  })
  .when('/desafio/:desafioID', {
    templateUrl: 'templates/pages/desafio/index.html',
    controller: 'RespostasController'
  })
  .when('/login', {
    templateUrl: 'templates/pages/login/index.html'
  })
  .when('/registro', {
    templateUrl: 'templates/pages/registro/index.html'
  })
  .when('/ranking', {
    templateUrl: 'templates/pages/ranking/index.html'
  })
  ;
});