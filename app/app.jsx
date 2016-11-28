var React = require('react');
var ReactDOM = require('react-dom');
// ES6 object destructuring syntax - creates variable called Route and sets it equal to route property of react-router module, and etc.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
	// set up Router
	<Router history={hashHistory}>
		{/* define individual routes */}
		<Route path="/" component={Main}>

		</Route>
	</Router>,
	document.getElementById('app')
);
