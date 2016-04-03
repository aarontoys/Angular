var app = angular.module("events",[]);

app.controller('MainController', function ($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.number = Math.floor(Math.random()*10)+1;
  }

  $scope.reverseWord = function (w) {
    $scope.word = w.split('').reverse().join('');
  }
  return $scope.word;
});