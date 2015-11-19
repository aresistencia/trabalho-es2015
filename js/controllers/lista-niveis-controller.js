angular.module('jogo')
.controller('ListaNiveisController', [ '$http', function($http) {
  var controller = this;
  controller.niveis = [];
  $http.get('https://api.myjson.com/bins/3is4h').success(function(data) {
    controller.niveis = data;
  });
}]);