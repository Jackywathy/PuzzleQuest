'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setupTileViewer);
} else {
	setupTileViewer();
}

function getCanvas(){
	return document.getElementById('tileCanvas');
}


function setupTileViewer() {
	// add a canvas element
	var canvas = document.createElement('canvas');
	canvas.id = 'tileCanvas';
	document.body.appendChild(canvas);
    canvas.height = 1024;
    canvas.width = 1024;

	// add a stylesheet
	var sheet = document.createElement('style');
	sheet.innerHTML = '#tileCanvas {width:100%; height:100%; display:block; margin: 0;} * {padding: 0; margin:0;} body {overflow:hidden;}';
	document.body.appendChild(sheet);

    updateCanvas();
    downloadImages();
}

var HEIGHT = 1024;
var WIDTH = 1024;

// defaults
// x and y are middles
var x = 0;
var y = 0;
var zoom = 8;
function getPixelSize() {return Math.pow(2, -zoom); }

// {'zoomlevel':{[imageXToOrigin, imageYToOrigin]:image}}
var imageStore = {};

function setImage(col, row, zoom, img){
	if (typeof(imageStore[[col, row]]) === 'undefined'){
		imageStore[zoom] = {};
	}
    imageStore[zoom][[col, row]] = img
}

function getImage(row, col, zoom) {
    if (typeof(imageStore[zoom]) === 'undefined') {
    	return null;
	}
    var img = imageStore[zoom][[col, row]];
    if (typeof(img) !== 'undefined' && img.complete){
    	return img
	} else {
    	return null;
	}
}

function downloadImages(){
	// find the corners, and check if the images are in the imageCache
	// always fallback to furtheset away from origin
	// left
	var leftX = Math.floor(x / 512) - 1;
	// right
    var rightX = Math.ceil(x / 512) + 1;
    // top
    var topY = Math.ceil(y / 512) + 1;
    // right cornder
    var bottomY = Math.floor(y / 512) - 1;
    // download all the images
	for (var col=leftX; col<rightX; col++) {
		for (var row=bottomY; row<topY; row++){
			var img = new Image();
			img.src = "./tile_x" + col*512*getPixelSize() + "_y" +
                row*512*getPixelSize() + "_z" + zoom + ".bmp";
			setImage(col, row, zoom, img);

		}
	}
}
function updateCanvas(){
	var canvas = getCanvas();
	var ctx = canvas.getContext('2d');
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.stroke();

	downloadImages();

    // find the corners, and check if the images are in the imageCache
    // always fallback to furtheset away from origin
    // left
    var leftX = Math.floor(x / 512) - 1;
    // right
    var rightX = Math.ceil(x / 512) + 1;
    // top
    var topY = Math.ceil(y / 512) + 1;
    // right cornder
    var bottomY = Math.floor(y / 512) - 1;
    // download all the images
    for (var col=leftX; col<rightX; col++) {
        for (var row=bottomY; row<topY; row++){
            var img = getImage(col, row, zoom);
            if (img) {
                canvas.getContext('2d').drawImage(img, col * 512, row * 512);
            }
        }
    }
}

