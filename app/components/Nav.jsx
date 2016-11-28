var React = require('react');
var {Link, IndexLink} = require('react-router');

// create Nav component
// var Nav = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 				<h2>Nav Component</h2>
// 				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// 			</div>
// 		);
// 	}
// });

// use stateless functional component to create Nav component
var Nav = () => {
	return(
		<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);
};

module.exports = Nav;
