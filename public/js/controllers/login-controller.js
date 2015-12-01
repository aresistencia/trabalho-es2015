angular.module('jogo')
.controller('LoginController', ['$rootScope', function($rootScope) {

  $rootScope.tryLogin = function(uname, pword) {
    if (uname === 'admin' && pword === '12345') {
      var user = { 'login': uname, 'password': pword };
      $rootScope.$broadcast('loginSuccess', user);
    }
  };

}]);