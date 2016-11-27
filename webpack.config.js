module.exports = {
	entry: './public/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				// presets tell babel what to do. parse files through React, get output, run through es2015
				query: {
					presets: ['react', 'es2015']
				},
				// tells which files to parse, excluding...
				test: /\.jsx?$/,
				exclude: /(node_modules | bower_components)/
			}
		]
	}
};
