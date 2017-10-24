'use strict';
const express = require('express');
const server = express();
const port = 8080;

function getIndexPage(request, response){
    // Gets the index page: ['/', '/index.html', '/index']
    response.send("Hello puzzlequest world!");
}


server.get('/', getIndexPage);
server.get('/index.html', getIndexPage);
server.get('/index', getIndexPage);

server.listen(port, function(){console.log("Running app on localhost:"+port)})
