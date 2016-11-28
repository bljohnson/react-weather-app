var React = require('react');
var Nav = require('Nav');

// create Main component
var Main = React.createClass({
	render: function(){
		return(
			<div>
				<Nav/>
				<h2>Main Component</h2>
			</div>
		);
	}
});

module.exports = Main;
