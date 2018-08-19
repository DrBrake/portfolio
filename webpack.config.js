const path = require('path');
const webpack = require('webpack');

var javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
var htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
var buildPath = path.resolve(__dirname, 'dist');

module.exports = {

    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        javascriptEntryPath,
        htmlEntryPath
    ],

    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js?|jsx)$/,
                exclude: /(node_modules|bower_component)/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.svg$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'react-svg-loader',
                        query: {
                            svgo: {
                                plugins: [{ cleanUpIDs: false }]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            },
            {
                test: /\.(otf|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}