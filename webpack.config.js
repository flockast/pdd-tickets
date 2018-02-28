const path = require('path');

module.exports = {
  entry: './source/js/main.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js'
  }
};