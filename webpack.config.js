module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loader: 'babel'
	},{
		test: /\.html$/,
		loader: "file?name=[name].[ext]",
	}]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
