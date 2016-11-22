'use strict';

let webpack = require('webpack');

module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|chrome)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        exclude: /chrome/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
