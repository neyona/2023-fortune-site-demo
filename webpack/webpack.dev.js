// webpack/webpack.dev.js
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack'); // this is needed for environmental variables to work

module.exports = {
  mode: 'development',
  devtool : 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
    new webpack.EnvironmentPlugin({
      BACK_TEST_URL: 'http://localhost:4000',
    }),
  ],
};
