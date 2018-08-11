const path = require('path');
const miniCssExcractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    stats: {
        children: false,
        errorDetails: true
    },
    plugins: [
        new miniCssExcractPlugin('style.css')
    ]
})