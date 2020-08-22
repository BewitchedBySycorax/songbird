/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      // {
      //   test: /\.css$/,
      //   use: [ 'MiniCssExtractPlugin.loader' ]
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: { sourceMap: true }
      //     }, {
      //       loader: 'sass-loader',
      //       options: { sourceMap: true }
      //     }
      //   ]
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        // test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '/assets/images/[name].[ext]',
        }
        // use: [
          // {
            // loader: 'file-loader',
            // loader: 'file-loader?name=app/assets/images/[name].[ext]',
          // },
        // ],
      },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '[name].css',
  //   })
  // ],
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
