var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function(){
// 		var {temp, location} = this.props;
// 		return(
// 			<h3>It's {temp}&#8457; in {location}.</h3>
// 		)
// 	}
// });

// use stateless functional component to create WeatherMessage component
// vars temp & location equal props.temp and props.location, respectively
var WeatherMessage = ({temp, location}) => {
	return(
		<h3 className="text-center">It's {temp}&#8457; in {location}.</h3>
	);
};

module.exports = WeatherMessage;
