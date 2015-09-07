var app = angular.module("angularCanvas", []);

app.controller("CanvasCtrl", ["$scope", function ($scope) {
  $scope.test = "I'm a canvas!";
}]);