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
    ]
  }
}
