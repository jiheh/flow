'use strict';

const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  context: __dirname,
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.inverse('webpack:')} ${chalk.cyan('|')}:bar${chalk.cyan('|')} ${chalk.yellow.bold(':percent')}`,
      clear: false,
      renderThrottle: 64,
      complete: chalk.bgCyan('  '),
    }),
    new NpmInstallPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
};
