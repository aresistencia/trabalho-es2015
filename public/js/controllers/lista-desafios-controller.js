angular.module('jogo')
.controller('ListaDesafiosController', [ '$scope', '$http', function($scope, $http) {
  // $scope.desafios = [];
  // $http.get('https://api.myjson.com/bins/115np').success(function(data) {
  //   $scope.desafios = data;
  // });
  $scope.desafios = [
    {
      "numero": 1,
      "titulo": "Animais que nascem de um ovo",
      "pontuacao": 0,
      "isCompletado": false
    },
    {
      "numero": 2,
      "titulo": "Frutas com sementes ou caroço",
      "pontuacao": 0,
      "isCompletado": false
    },
    {
      "numero": 3,
      "titulo": "Alguma outra coisa",
      "pontuacao": 0,
      "isCompletado": false
    }
  ];
}]);