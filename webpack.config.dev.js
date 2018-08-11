const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true'
    ],
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})