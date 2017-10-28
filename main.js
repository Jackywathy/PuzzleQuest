'use strict';
const express = require('express');
const mandelbrot = require('./build/Release/mandelbrot');
const mime = require('mime');
const path = require('path');

const server = express();
const port = 8080;


const re = /tile_x(\d+(?:\.\d{1,8})?)_y(\d+(?:\.\d{1,8})?)_z([0-9]{1,4}).bmp/;
function serveIndexPage(request, response){
    // Gets the index page: ['/', '/index.html', '/index']
    response.set("Content-Type", mime.getType('bmp'));
    response.send(mandelbrot.GetMandelbrotBuffer(0, 0, 8));
}

function serveMandelbrotImage(request, response){
	var location = request.params.location;
    var match = location.match(re);

    if (match === null || match.length !== 4){
    	response.set("Content-Type", mime.getType('html'));
    	response.send("Cannot parse values :(");
    	return
    }

	var x = parseFloat(match[1]);
	var y = parseFloat(match[2]);
	var zoom = parseInt(match[3]);

	if (isNaN(x) || isNaN(y) || isNaN(zoom)) {
		response.set("Content-Type", mime.getType('html'));
		if (isNaN(x)){
			response.send("Invalid x value");
		} else if (isNaN(y)){
			response.send("Invalid y value");
		} else if (isNaN(zoom)){
			response.send("Invalid z value");
		}

	} else {

		response.set("Content-Type", mime.getType('bmp'));

		response.send(mandelbrot.GetMandelbrotBuffer(x, y, zoom));
	}
}


server.get('/', serveIndexPage);
server.get('/index.html', serveIndexPage);
server.get('/index', serveIndexPage);

server.get('/mandelbrot/tiles2.js', function(request, response) {response.sendFile(path.join(__dirname, 'mandelbrot', 'tiles2.js'));})
server.get('/mandelbrot', function(request, response) {response.redirect('/mandelbrot/viewer')})
server.get('/mandelbrot/viewer', function(request, response) {response.sendFile(path.join(__dirname,'mandelbrot', 'canvas.html'))});
server.get('/mandelbrot/tiles.js', function(request, response) {response.sendFile(path.join(__dirname, 'mandelbrot', 'tiles.js'));})

server.get('/mandelbrot/:location', serveMandelbrotImage);

// lazy hack to make viewer work - will fix later
server.get('/:location', serveMandelbrotImage);

server.listen(port, function(){console.log("Running app on localhost:"+port)});
 