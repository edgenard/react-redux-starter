const path = require('path')
const IN = [path.resolve('src/js/index.js')]
const OUT = 'dist/'

module.exports = {
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
  }
}