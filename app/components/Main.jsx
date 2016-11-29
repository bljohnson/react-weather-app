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
			<div className="row">
				<div className="columns small-12 medium-6 large-4 small-centered">
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;
