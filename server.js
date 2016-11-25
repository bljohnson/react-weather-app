// load express module
var express = require('express');

// create our app
var app = express();

// serve public folder
app.use(express.static('public'));

// start server
app.listen(3000, function() {
	console.log('Now serving on port 3000');
});
