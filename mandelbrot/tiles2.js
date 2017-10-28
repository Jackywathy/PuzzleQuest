'use strict';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setupTileViewer);
} else {
	setupTileViewer();
}


function maximizeCanvas(canvas) {
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


}