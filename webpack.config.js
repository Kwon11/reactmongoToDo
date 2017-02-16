var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/components/main.js",//always 1 root component that renders children component
  output: {
    filename: "/public/bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] //have to install these babel-preset-react, babel-preset-es2015
        }
      }
    ]
  }
}