var debug = process.env.NODE_ENV !== 'production';

  var webpack = require('webpack');
  var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'eval-source-map' : false,
  entry: './js/index.js',
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: []
        }
      }]
    }]
  },
  output: {
    path: `${__dirname}/src/`,
    filename: 'index.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
}
