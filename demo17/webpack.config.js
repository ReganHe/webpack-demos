const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  entry: { bundle: './main.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    // 抽取webpack runtime
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', // extracted manifest
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: 'webpack-assets.json',
      publicPath: '/resecm/trade/mc/v2/'
    }),
  ]
};
