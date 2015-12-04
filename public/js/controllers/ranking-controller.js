angular.module('jogo')
.controller('RankingController', ['$scope', '$http', function($scope, $http) {
  $http.get('/ranking').success(function(data) {
    $scope.ranking = data;
  });
}]);