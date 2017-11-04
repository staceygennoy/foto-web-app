const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve('./src'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: {
    app: './scripts/app.ts'
  },
  output: {
    path: path.resolve('./dist'),
    filename: './[name].bundle.js',
    sourceMapFilename: './[name].bundle.map'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/, loader: 'ts-loader'
      }, {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }, {
        test: /\.html$/, loader: 'file-loader', options: { name: '[name].[ext]' },
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./dist'),
    port: 3000
  }
};
