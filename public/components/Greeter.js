function greeter(){
	document.write('From greeter function');
}

// require file to allow access to greeter function from app.js
module.exports = greeter;
