var app = angular.module("ramis",[]);

app.controller('MainController', function ($scope) {
  $scope.menu = [
    {
      id: 1,
      item: 'Falafel',
      price: 8.99,
      count: 0
    },
    {
      id: 2,
      item: 'Schwarma',
      price: 11.99,
      count: 0
    },
    {
      id: 3,
      item: 'Humous Platter',
      price: 9.99,
      count: 0
    },
    {
      id: 4,
      item: 'Kebab Platter',
      price: 13.99,
      count: 0
    }
  ];

  $scope.orders = [];
  $scope.subTotal = 0;
  $scope.tax = 0;
  $scope.Total = 0;





  $scope.addToOrder = function (item) {
    $scope.subTotal += item.price;
    $scope.tax = $scope.subTotal * 0.05;
    $scope.Total = $scope.subTotal + $scope.tax;
    if ($scope.orders.indexOf(item) != -1){
      item.count++;
    } else {
      item.count++;
      $scope.orders.push(item);
    }
    // $scope.order = {};
    return $scope.orders;
  }
});

// app.controller('addToOrder', function ($scope) {
//   $scope.addToOrder = {
//     item: 'test'
//   }
// });