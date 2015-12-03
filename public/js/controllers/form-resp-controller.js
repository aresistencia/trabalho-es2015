angular.module('jogo')
.controller('FormRespController', ['$rootScope', '$http', '$routeParams', '$cookies', function($rootScope, $http, $routeParams, $cookies) {

  $rootScope.validaResposta = function(inputText) {
    $http({
      url: '/desafio/' + $routeParams.desafioID + '/checa-resposta',
      method: "POST",
      data: 'resposta=' + inputText + "&userID=" + $cookies.get('userID'),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
      if (data.id !== -1) {
        $rootScope.$broadcast('rightAnswer', data);
      }
    });
  };

}]);