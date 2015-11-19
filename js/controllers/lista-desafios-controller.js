angular.module('jogo')
.controller('ListaDesafiosController', [ '$http', function($http) {
  var controller = this;
  controller.desafios = [];
  $http.get('https://api.myjson.com/bins/179hl').success(function(data) {
    controller.desafios = data;
  });
}]);