var React = require('react');
var ReactDOM = require('react-dom');

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

var GreeterForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var updates = {};
		var name = this.refs.name.value;
		var message = this.refs.message.value;
		if(name.length > 0){
			this.refs.name.value = '';
			// set name property of updates object to what user enters in
			updates.name = name;
		}
		if(message.length > 0){
			this.refs.message.value = '';
			updates.message = message;
		}
		// calls handleNewData function - onNewData is a property of GreeterForm component. pass in updates object, which captures any changes made to name or message
		this.props.onNewData(updates);
	},
	render: function(){
		return(
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="name" placeholder="Enter name"/>
					</div>
					<div>
						<textarea ref="message" placeholder="Enter message"></textarea>
					</div>
					<div>
						<button>Submit</button>
					</div>
				</form>
		);
	}
});

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

var firstName = 'Bethany';

ReactDOM.render(
	<Greeter name={firstName}/>,
	document.getElementById('app')
);
