const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    piskel: './src/piskel.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'Piskel-Clone App',
      myPageHeader: 'Piskel-Clone',
      template: './src/screens/piskel.html',
      filename: './piskel.html',
      inject: true,
      chunks: ['piskel'],
    },
  ),
  new HtmlWebpackPlugin(
    {
      title: 'Piskel-Clone App',
      myPageHeader: 'Piskel-Clone',
      template: './src/screens/landing/index.html',
      filename: './index.html',
      inject: true,
      chunks: ['index'],
    },
  ),
  new CopyPlugin([
    {
      from: './src/library/gif.worker.js',
      to: './gif.worker.js',
      toType: 'file',
    },
  ]),
],
};
