var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function(){
		return{
			name: 'React',
			message: 'This is the default message from the Greeter component.'
		};
	},
	getInitialState: function(){
		return{
			name: this.props.name,
			message: this.props.message
		};
	},
	// function that gets called by GreeterForm component
	handleNewData: function(updates){
		this.setState(updates);
	},
	render: function(){
		var name = this.state.name;
		var message = this.state.message;
		return(
			// containing div - component can only return one root element
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

// allow access to Greeter component
module.exports = Greeter;
