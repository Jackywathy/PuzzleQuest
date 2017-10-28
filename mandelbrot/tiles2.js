'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setupTileViewer);
} else {
	setupTileViewer();
}

function getCanvas(){
	return document.getElementById('tileCanvas');
}

function maximizeCanvas() {
	var canvas = getCanvas();
	canvas.height = 1024;
	canvas.width = 1024;
}

function setupTileViewer() {
	// add a canvas element
	var canvas = document.createElement('canvas');
	canvas.id = 'tileCanvas';
	document.body.appendChild(canvas);


	// add a stylesheet
	var sheet = document.createElement('style');
	sheet.innerHTML = '#tileCanvas {width:100%; height:100%;}';
	document.body.appendChild(sheet);

	updateCanvas();
}

function updateCanvas(){
	var canvas = getCanvas();
	var ctx = canvas.getContext('2d');
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.stroke();
}