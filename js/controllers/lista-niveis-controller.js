angular.module('jogo')
.controller('ListaNiveisController', [ '$http', function($http) {
  var jogo = this;
  jogo.niveis = [];
  $http.get('https://api.myjson.com/bins/3is4h').success(function(data) {
    jogo.niveis = data;
  });
}]);