var axios = require('axios');

// generate base URL to be used as template. const var can't be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9dfcd2e9da1098e2429bc2a7c902469f&units=imperial';

module.exports = {
	getTemp: function(location){
		// properly encode location string for browser
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		// axios fetches URL results. axios returns a promise - sends error to error handler or temp to success case in Weather.jsx
		return axios.get(requestUrl).then(function(res){
			// debugger;
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else{
				return res.data.main.temp;
			}
		}, function(err){
			throw new Error(err.response.data.message);
		});
	}
}
