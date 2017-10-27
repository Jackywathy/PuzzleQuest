'use strict';
const express = require('express');
try{
const mandelbrot = require('./build/Release/mandelbrot');
} catch (e){
throw new Error("Cannot find mandelbrot binary, please run `npm run restore`")
}
const mime = require('mime');

const server = express();
const port = 8080;

function getIndexPage(request, response){
    // Gets the index page: ['/', '/index.html', '/index']
    response.set("Content-Type", mime.lookup('txt'));
    response.send(mandelbrot.GetMandelbrotBuffer(0, 0, 7));
}


server.get('/', getIndexPage);
server.get('/index.html', getIndexPage);
server.get('/index', getIndexPage);

server.listen(port, function(){console.log("Running app on localhost:"+port)})	
