const path = require('path')
const IN = [path.resolve('src/js/index.js')]
const OUT = path.resolve('dist')

module.exports = {
  devtool: 'eval-source-map',
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
  },
  devServer: {
    contentBase: 'static/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  externals: {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
  }
}
