const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
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
      }, {
        test: /\/images\//, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./dist'),
    port: 3000
  }
};
