/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './index.jsx',
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'app.js',
    publicPath: '/public/dist/'
  },
  // mode: 'development',
  watch: process.argv[process.argv.length - 1] === 'development',
  devtool: 'cheap-inline-module-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ]
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // For import without .jsx
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: './public/index.html'
    },
    port: 8082,
  },
}
