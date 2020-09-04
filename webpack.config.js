const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

module.exports = (env) => ({
  context: __dirname,
  entry: './index.js',
  target: 'web',
  node: { fs: 'empty' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: env ? 'production' : 'development',
  devServer: {
    inline: true,
    port: process.env.PORT,
    contentBase: path.join(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/transform-runtime',
          ],
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)?$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new Dotenv(),
  ],
  performance: {
    hints: false,
  },
});
