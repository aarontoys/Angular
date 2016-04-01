var app = angular.module("broken",[])

app.controller('MainController', function($scope) {
  $scope.number = 42
});

app.controller('SecondController', function($scope) {
  $scope.view = {};
  $scope.view.number = 42
});