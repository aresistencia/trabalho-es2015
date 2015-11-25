angular.module('jogo')
.controller('FormRespController', ['$rootScope', '$http', function($rootScope, $http) {

  $rootScope.validaResposta = function(inputText) {

    $http({
      url: '/nivel/1/desafio/1',
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