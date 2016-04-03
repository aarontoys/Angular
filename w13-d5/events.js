var app = angular.module("events",[]);

app.controller('MainController', function ($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.number = Math.floor(Math.random()*10)+1;
  }

  $scope.reverseWord = function (w) {
    $scope.word = w.split('').reverse().join('');
  }

  $scope.players = [
    {
      id: 1,
      score: 0,
      serving: true,
      winner: -1,
      gamesWon: 0
    },
    {
      id: 2,
      score: 0,
      serving: false,
      winner: -1,
      gamesWon: 0
    }
  ];

  var serveCount = 0;
  $scope.addScore = function (player) {
    player.score++;
    serveCount++;
    if (!(serveCount % 2) ) {
      $scope.players[0].serving = !$scope.players[0].serving;
      $scope.players[1].serving = !$scope.players[1].serving;
    }
    if (player.score === 11) {
      $scope.newGame = 1;
      player.gamesWon++;
      player.winner += 2;
      if (player.id === 1) {
        $scope.players[1].winner++;
      } else {
        $scope.players[0].winner++;
      }
    }
  }

  $scope.startNewGame = function () {
    $scope.players[0].score = 0;
    $scope.players[0].serving = true;
    $scope.players[0].winner = -1;
    $scope.players[1].score = 0;
    $scope.players[1].serving = false;
    $scope.players[1].winner = -1;
    serveCount = 0;
  }
  $scope.reset = function () {
    $scope.startNewGame();
    $scope.players[0].gamesWon = 0;
    $scope.players[1].gamesWon = 0;
  }
});