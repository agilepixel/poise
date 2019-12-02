var path = require('path');
var directory = path.resolve(__dirname);
module.exports = {
  entry: directory + '/test.scss',
  output: {
    filename: 'bundle.js',
    path: directory + '/dist/'
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        }]
    }
};
