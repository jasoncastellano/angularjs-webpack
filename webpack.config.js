var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: [/app\/lib/, /node_modules/],
                loader: 'babel-loader' 
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader' 
            }
        ]
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        })
    ]
    
}