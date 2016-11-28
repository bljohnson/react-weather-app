// function returns new promise (ES6 feature)
function getTempPromise(location){
	return new Promise(function(resolve, reject){
		// fake a delay since promises are used for asynchronous computations
		setTimeout(function(){
			// executor function passes resolve and reject functions which resolve or reject promise when they're called
			resolve(79);
			reject('City not found');
		}, 1000);
	});
}

// ues then method for promises to append fulfillment and rejection handlers to promise, and return new promise
getTempPromise('Minneapolis').then(function(temp){
	console.log('promise success', temp);
}, function(err){
	console.log('promise error', err);
});

//////////////////////////////////////////
////// CHALLENGE AREA //////
//////////////////////////////////////////
function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		} else {
			reject('a & b need to be numbers');
		}
	});
}

addPromise(2, 3).then(function(sum){
	console.log('success', sum);
}, function(err){
	console.log('error', err);
});

addPromise('Bethany', 9).then(function(sum){
	console.log('This should not show up');
}, function(err){
	console.log('This should appear', err);
});
