const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  //https://webpack.js.org/concepts/#mode
  mode: 'development',

  devtool: 'inline-source-map',
  //https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: './dist',
    //hot: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    // moduleIds: 'hashed',
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
  },
});
