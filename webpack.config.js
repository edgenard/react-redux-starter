const path = require('path')
const IN = [path.resolve('src/js/index.js')]
const OUT = path.resolve('dist')

module.exports = {
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
  }
}
