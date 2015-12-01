angular.module('jogo')
.controller('FormRespController', ['$rootScope', '$http', '$routeParams', function($rootScope, $http, $routeParams) {

  $rootScope.validaResposta = function(inputText) {
    $http({
      url: '/nivel/' + $routeParams.nivelID + '/desafio/' + $routeParams.desafioID,
      method: "POST",
      data: 'resposta=' + inputText,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
      if (data.id !== -1) {
        $rootScope.$broadcast('rightAnswer', data);
      }
    });
  };

}]);