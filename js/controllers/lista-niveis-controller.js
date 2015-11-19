angular.module('jogo')
.controller('ListaNiveisController', [ '$http', function($http) {
  var controller = this;
  controller.niveis = [];
  $http.get('https://api.myjson.com/bins/15fz9').success(function(data) {
    controller.niveis = data;
  });
}]);