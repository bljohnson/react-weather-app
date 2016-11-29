var React = require('react');
// get Link attribute from react-router library
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function(){
// 		return(
// 			<h3>Examples Component</h3>
// 		)
// 	}
// });

// use stateless functional component to create Examples component
var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Grand Marais'>Grand Marais, MN</Link>
				</li>
				<li>
					<Link to='/?location=Reykjavik'>Reykjavik, IS</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;
