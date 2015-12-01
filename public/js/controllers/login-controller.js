angular.module('jogo')
.controller('LoginController', ['$rootScope', '$http', function($rootScope, $http) {

  $rootScope.tryLogin = function(uname, pword) {
    $http({
      url: '/login',
      method: 'POST',
      data: "username=" + uname + "&password=" + pword,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, headers, config) {
      if (data.isSuccessful) {
        $rootScope.$broadcast('loginSuccess', data.username);  
      }
    });



    // if (uname === 'admin' && pword === '12345') {
    //   var user = { 'login': uname, 'password': pword };
    //   $rootScope.$broadcast('loginSuccess', user);
    // }
  };

}]);