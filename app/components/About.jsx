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
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application built on React. It follows the Udemy course, "The Complete React Web App Developer Course."</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a> - JavaScript framework used
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Third party API used to search for current temperature data by city name
				</li>
				<li>
					<a href="http://foundation.zurb.com/sites/docs/" target="_blank">Foundation</a> - Responsive front-end framework used
				</li>
			</ul>
		</div>
	);
};

module.exports = About;
