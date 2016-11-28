module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				// presets tell babel what to do. parse files through React, get output, run through es2015
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				// tells which files to parse, excluding...
				test: /\.jsx?$/,
				exclude: /(node_modules | bower_components)/
			}
		]
	}
};
