const path = require('path');
const webpack = require('webpack');
const webpackHtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.wav/,
                use: {
                    loader: 'file'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpackHtmlPlugin({
            template: './src/templates/index.html',
            filename: 'views/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/views'),
        publicPath: '/dist/',
        compress: true,
        hot: true,
        watchContentBase: true
    }
};