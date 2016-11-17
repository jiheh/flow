'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
};
