const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
    ENTRY: path.join(__dirname, 'src', 'index.js'),
    OUTPUT: path.join(__dirname, 'dist'),
    NODE_MODULES: path.join(__dirname, 'node_modules')
};

module.exports = {
    entry: [
        PATH.ENTRY
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: PATH.NODE_MODULES,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    output: {
        path: PATH.OUTPUT,
        publicPath: '/',
        filename: 'bundle.js'
    },
    target: 'web',
    plugins: [
        new ExtractTextPlugin('./dist/app.css', {
            allChunks: true
        })
    ]
};
