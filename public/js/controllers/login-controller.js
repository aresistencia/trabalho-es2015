angular.module('jogo')
.controller('LoginController', ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {

  $rootScope.tryLogin = function(uname, pword) {
    $http({
      url: '/login',
      method: 'POST',
      data: "username=" + uname + "&password=" + pword,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, headers, config) {
      if (data.isSuccessful) {
        $rootScope.$broadcast('loginSuccess', data);
        $location.url('/lista-niveis');
      }
    });
  };

}]);