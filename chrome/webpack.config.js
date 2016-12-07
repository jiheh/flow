'use strict';

const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: PROD ? 'bundle.min.js' : './bundle.js',
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
          plugins: ['lodash'],
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
      {
        test: /\.(jpg)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ] : [
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
