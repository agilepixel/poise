const path = require('path');
const directory = path.resolve(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: directory + '/test.scss',
  output: {
    filename: 'bundle.js',
    path: directory + '/dist/'
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        }]
    }
};
