const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //https://webpack.js.org/concepts/#entry
    entry: {
        index: './src/pages/index/index.js',
        aboutus: './src/pages/about-us/about-us.js',

    },

    //https://webpack.js.org/concepts/#output
    output: {
        filename: '[name].[contenthash].js',
        //chunkFilename: '[name].bundle.js',
        // pathinfo: false,
        path: path.resolve(__dirname, 'dist'),
    },

    //https://webpack.js.org/concepts/#plugins
    plugins: [
        //https://www.npmjs.com/package/clean-webpack-plugin
        new CleanWebpackPlugin(),
        // https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about-us/about-us.html',
            inject: 'body',
            chunks: ['aboutus'],
            filename: 'aboutus.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    //https://webpack.js.org/concepts/#loaders
    module: {
        rules: [
            // Loading Styles
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
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
