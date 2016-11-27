var React = require('react');

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

// allow access to GreeterForm component
module.exports = GreeterForm;
