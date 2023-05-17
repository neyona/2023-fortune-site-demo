// webpack/webpack.prod.js
// PRODUCTION ONLY RUNS ON THE SAME LOCAL ADDRESS http://127.0.0.1:8000 if and
// when the demo url is local. Do that to test it, then switch it to the other
// url on deployment.
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BACK_TEST_URL: 'https://**********************************',
    }),
  ],
}
