const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //https://webpack.js.org/concepts/#mode
  mode: 'development',

  devtool: 'inline-source-map',

  //https://webpack.js.org/concepts/#entry
  entry: {
    index: './src/assets/js/index.js',
    aboutus: './src/assets/js/aboutus.js'
  },

  //https://webpack.js.org/concepts/#output
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  //https://webpack.js.org/concepts/#loaders
  module: {
    rules: [
      // Loading Styles
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // Loading Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      // Loading Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    //https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin(),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};