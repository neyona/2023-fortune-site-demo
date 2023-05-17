// webpack/webpack.prod.js
// PRODUCTION ONLY RUNS ON THE SAME LOCAL ADDRESS http://127.0.0.1:8000 if and
// when the demo url is local. Do that to test it, then switch it to the other
// url on deployment.
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack'); // this is needed for environmental variables to work

module.exports = {
  // mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BACK_TEST_URL: 'http://localhost:4000',
    }),
  ],
}
