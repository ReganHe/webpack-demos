const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
