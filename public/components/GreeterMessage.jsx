var React = require('react');

var GreeterMessage = React.createClass({
	render: function(){
		var name = this.props.name;
		var message = this.props.message;
		return(
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

// when you require a file, whatever module.exports is set to is what you get back
// allow access to GreeterMessage component
module.exports = GreeterMessage;
