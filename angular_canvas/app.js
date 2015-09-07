var app = angular.module("angularCanvas", []);

app.controller("CanvasCtrl", ["$scope", function ($scope) {

  $scope.painting = [["blue", "cyan", "yellow"],
                     ["blue", "cyan", "yellow"],
                     ["blue", "cyan", "yellow"]];

  $scope.render = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var data = document.getElementById('svg').innerHTML;
    console.log(data);

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
    }

    img.src = url;
  };


}]);