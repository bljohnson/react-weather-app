var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e){
			that.setState({
				isLoading: false,
				errorMessage: e.message
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
		var {isLoading, temp, location, errorMessage} = this.state;
		// determine whether to show weather message or loading message inside of component
		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}
		function renderError(){
			// if error message exists & state is set to a string, render modal
			if(typeof errorMessage === 'string'){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}
		return(
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
