const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/static/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'development'
}