var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return{
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;
		// when make a search, clear out data
		this.setState({
			isLoading: true,
			location: undefined,
			temp: undefined
		});
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage){
			alert(errorMessage);
			that.setState({
				isLoading: false
			});
		});
	},
	// fires when component successfully mounted into browser
	componentDidMount: function(){
		// pull location property from url off of query object
		var location = this.props.location.query.location;
		if(location && location.length > 0){
			this.handleSearch(location);
			// reset url query string after search for weather
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;
		if(location && location.length > 0){
			this.handleSearch(location);
			// reset url query string after search for weather
			window.location.hash = '#/';
		}
	},
	render: function(){
		var {isLoading, temp, location} = this.state;
		// determine whether to show weather message or loading message inside of component
		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}
		return(
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
