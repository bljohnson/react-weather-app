// load express module
var express = require('express');

// create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Express middleware - lets us do something with every request. Check if traffic is over http, since Open Weather Map API only operates on http not https.
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else{
		next();
	}
});

// serve public folder
app.use(express.static('public'));

// start server
app.listen(PORT, function() {
	console.log('Now serving on port ', PORT);
});
