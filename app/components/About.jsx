var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return(
// 			<h3>About Component</h3>
// 		)
// 	}
// });

// use stateless functional component to create About component
var About = (props) => {
	return(
		<h3>About Component</h3>
	);
};

module.exports = About;
