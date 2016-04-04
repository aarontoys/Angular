var app = angular.module("events",[]);

app.controller('MainController', function ($scope, $timeout) {
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

  $scope.enterCount = 0;
  $scope.colorArr = [];
  $scope.randomColor = function () {
    var x=Math.round(0xffffff * Math.random()).toString(16);
    // console.log('hex: ',0xffffff);
    // console.log('x: ',x);
    var y=(6-x.length);
    // console.log('y: ',y);
    var z="000000";
    // console.log('z: ',z);
    var z1 = z.substring(0,y);
    // console.log('z1: ',z1);
    var color = "#" + z1 + x;
    // console.log('color: ',color);
    $scope.colorArr.push(color);
    return color;
  }

  var replaying = false;

$scope.replay = function() {
  var displayPrevColor = function() {
    // do some logic to change color
    // if done replay colors
    for (i = 0; i < $scope.colorArr.length; i++) {
      console.log($scope.colorArr[i]);
      return $scope.colorArr[i];
    }


      replaying = false;
    // else
      $timeout(dispalyPrevColor, 1000);
    // end if/else 
  };
  if (!replaying) {
    replaying = true;
    // This timeout starts the timeout loop
    $timeout(function() { displayPrevColor(); }, 500);
  }
};

$scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };

  $scope.addresses = [];
  // $scope.newAdd = {};
  $scope.submitAddress = function (myAdd) {
    $scope.addresses.push(myAdd);
    // $scope.showAdd = true;
    // $scope.newAdd = {};
    // $scope.newAdd  = $scope.address;
    // console.log(myAdd);
    // console.log(myAdd.line1);
        $scope.address = {};
        // document.getElementsByName('addrForm')[0].reset();

  }

  // Contacts App Exercise
  $scope.contacts = [];
  $scope.addContact = function (contact) {
    $scope.contacts.push(contact);
    $scope.contact = {};
  }

});