angular.module('jogo')
.controller('ListaNiveisController', [ '$scope', '$http', function($scope, $http) {
  // $scope.niveis = [];
  // $http.get('https://api.myjson.com/bins/15fz9').success(function(data) {
  //   $scope.niveis = data;
  // });
  $scope.niveis = [
      {
        "numero": 1,
        "titulo": "",
        "isDisponivel": true,
        "desafiosCompletados": 1
      },
      {
        "numero": 2,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 3,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 4,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 5,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 6,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 7,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 8,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      },
      {
        "numero": 9,
        "titulo": "",
        "isDisponivel": false,
        "desafiosCompletados": 0
      }
    ];
}]);