var React = require('react');
var Nav = require('Nav');

// create Main component
// var Main = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

// use stateless functional component to create Main component
var Main = (props) => {
	return(
		<div>
			<Nav/>
			<h2>Main Component</h2>
			{props.children}
		</div>
	);
};

module.exports = Main;
