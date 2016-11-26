'use strict';

const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ReloadServerPlugin = require('reload-server-webpack-plugin');
const chalk = require('chalk');
const path = require('path');

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname,
    filename: PROD ? './public/bundle.min.js' : './public/bundle.js',
  },
  context: __dirname,
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|chrome)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        exclude: /chrome/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ] : [
    new ProgressBarPlugin({
      format: `${chalk.inverse('webpack:')} ${chalk.cyan('|')}:bar${chalk.cyan('|')} ${chalk.yellow.bold(':percent')} `,
      clear: false,
      renderThrottle: 64,
      complete: chalk.bgCyan('  '),
    }),
    new NpmInstallPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ReloadServerPlugin({
      script: path.resolve(__dirname, 'server/start.js'),
    }),
  ],
};
