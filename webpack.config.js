const path = require('path');
const webpack = require('webpack');

const PORT = 3000;

const PATH = {
    ENTRY: path.join(__dirname, 'src', 'index.js'),
    OUTPUT: path.join(__dirname, 'dist'),
    NODE_MODULES: path.join(__dirname, 'node_modules')
};

module.exports = {
    entry: [
        PATH.ENTRY,
		`webpack-dev-server/client?http://0.0.0.0:${PORT}`,
        'webpack/hot/only-dev-server'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: PATH.NODE_MODULES,
            loader: 'react-hot!babel'
        }, {
            test: /\.css$/,
            loaders: [
				'style?sourceMap',
				'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
			]
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
    devServer: {
        hot: true,
        port: PORT,
        cache: true,
        inline: true,
        colors: true,
        contentBase: PATH.OUTPUT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // if you don't specify `--hot`
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    cache: true,
    target: 'web',
    devtool: 'cheap-module-eval-source-map'
};
