var path = require('path');
var webpack = require('webpack');

module.exports = function(fabricatorConfig) {

	"use strict";

	var config = {
		entry: {
			'fabricator/scripts/f': fabricatorConfig.src.scripts.fabricator,
			'toolkit/scripts/toolkit': fabricatorConfig.src.scripts.toolkit
		},
		output: {
			path: path.resolve(__dirname, fabricatorConfig.dest, 'assets'),
			filename: '[name].js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules|prism\.js)/,
					loaders: ['babel']
				}
			]
		},
		plugins: [],
		resolve: {
			modulesDirectories: ['node_modules', 'bower_components'],
			alias: {
				foundation: './foundation.core.js'
			}
		},
		cache: {},
		externals: {
			jquery: 'jQuery'
		}
	};

	if (!fabricatorConfig.dev) {
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin()
		);
	}

	return config;

};
