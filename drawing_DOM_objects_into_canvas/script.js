var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



// Get well-formed markup
var data = document.getElementById('svg1').innerHTML;


// var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
//            '<foreignObject width="100%" height="100%" style="background-color:white;">' +
//              '<div xmlns="http://www.w3.org/1999/xhtml" style="display:block;">' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//              '</div>' +
//              '<div xmlns="http://www.w3.org/1999/xhtml" style="display:block;">' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//              '</div>' +
//              '<div xmlns="http://www.w3.org/1999/xhtml" style="display:block;">' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//              '</div>' +
//              '<div xmlns="http://www.w3.org/1999/xhtml" style="display:block;">' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//              '</div>' +
//              '<div xmlns="http://www.w3.org/1999/xhtml" style="display:block;">' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:yellow;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:blue;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//                '<div xmlns="http://www.w3.org/1999/xhtml" style="width:25px;height:25px;background-color:cyan;border-radius:50%;display:inline-block;margin:5px;">' +
//                '</div>' +
//              '</div>' +
//            '</foreignObject>' +
//            '</svg>';

var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
var url = DOMURL.createObjectURL(svg);

img.onload = function () {
  ctx.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
}

img.src = url;
