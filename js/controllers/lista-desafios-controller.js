angular.module
.controller('ListaDesafiosController', [ '$http', function($http) {
  var jogo = this;
  jogo.desafios = [];
  $http.get('https://api.myjson.com/bins/179hl').success(function(data) {
    jogo.desafios = data;
  });
}]);