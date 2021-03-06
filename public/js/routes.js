angular.module('jogo')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/inicio/index.html'
  })
  .when('/lista-niveis', {
    templateUrl: 'templates/pages/lista-niveis/index.html',
    controller: 'ListaNiveisController',
    resolve: {
      loggedIn: loginCheck
    }
  })
  .when('/nivel/:nivelID', {
    templateUrl: 'templates/pages/nivel/index.html',
    controller: 'ListaDesafiosController',
    resolve: {
      loggedIn: loginCheck
    }
  })
  .when('/desafio/:desafioID', {
    templateUrl: 'templates/pages/desafio/index.html',
    controller: 'RespostasController',
    resolve: {
      loggedIn: loginCheck
    }
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

var loginCheck = function($cookies, $location, $q) {
  var deferred = $q.defer();
  if ($cookies.get('isLoggedIn')) {
    deferred.resolve();
  } else {
    deferred.reject();
    $location.url('/login');
  }
}