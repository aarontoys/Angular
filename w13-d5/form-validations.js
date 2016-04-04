var app = angular.module("forms", []);

app.controller('MainController', function ($scope) {
  $scope.required = true;
  $scope.minLength = 3;
})