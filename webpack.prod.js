const path = require('path');

module.exports = {
  //https://webpack.js.org/concepts/#mode
  mode: 'production',

  //https://webpack.js.org/concepts/#entry
  entry: {
    index:  './src/assets/js/index.js'
  },

  //https://webpack.js.org/concepts/#output
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  //https://webpack.js.org/concepts/#loaders
  module: {
    rules: [
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
};