angular.module('jogo')
.controller('RegistroController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.registra = function(pnome, snome, uname, pword) {
    $http({
      url: '/registro',
      method: 'POST',
      data: "username=" + uname + "&password=" + pword + "&pnome=" + pnome + "&snome=" + snome,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, config, headers) {
      if (status === 201) {
        $location.url('/login');
      }
    });
  };

}]);