// ===================================================
// Base Setup
// ===================================================
var express = require('express');
var app = express();
var movie = require('./routes/movie');

//ser server port
var port = process.env.PORT || 8080


// register our routes
// all of our routes will be prefixed with /api
app.use('/movie/*', movie);

// ===================================================
// Start the server
// ===================================================
app.listen(port)
console.log('Server listening on port ' + port);
