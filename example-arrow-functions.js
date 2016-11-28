var names = ['Bethany', 'Calvin', 'Ingrid'];

names.forEach(function(name){
	console.log('forEach', name);
});

// arrow function - use { } to run multiple statements
names.forEach((name) => {
	console.log('arrowFunc', name);
	console.log('something else');
	console.log('furthermore');
});

// arrow function for running a single statement, no { } needed. arrow functio takes in a name. console.log gets returned as the return value from the function
names.forEach((name) => console.log(name));

// proves that whatever you put inside the expression automatically gets returned
var returnMe = (name) => name + '!';
console.log(returnMe('Bethany'));

var person = {
	name: 'Bethany',
	greet: function(){
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		});
	}
};

person.greet();
