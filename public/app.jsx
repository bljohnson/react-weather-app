var Greeter = React.createClass({
	getDefaultProps: function(){
		return{
			name: 'React',
			message: 'This is the default message from the Greeter component.'
		}
	},
	render: function(){
		var name = this.props.name;
		var message = this.props.message
		return(
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var firstName = 'Bethany';
var testMessage = 'This is a message.';

ReactDOM.render(
	<Greeter name={firstName} message={testMessage} />,
	document.getElementById('app')
);
