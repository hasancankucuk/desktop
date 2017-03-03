'use strict';

const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  entry: './src/main.js',
  output: {
    filename: './src/[name]_bundle.js'
  },
  node: {
    __filename: false,
    __dirname: false
  },
  target: 'electron-main',
  externals: {
    remote: true // for electron-connect
  }
});
