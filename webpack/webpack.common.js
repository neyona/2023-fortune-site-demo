// webpack/webpack.common.js
const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '..', './ui_frontend/templates/ui/src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                  sourceMap: true,
              },
          },
        ],
      },
      {
        test: /\.(ico|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000000, // 10000kB
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true, // Necessary for react-router-dom to work
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'ui_frontend/static'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id]-[chunkhash].js',
    // Setting up filename and chunkFile like I did above makes the manifest
    // files much more readable. There are loads of mime type nosniff errors
    // if done like below.
    // filename: '[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', './ui_frontend/templates/ui/public', 'index.html'),
      filename: './index.html',
      favicon: path.resolve(__dirname, '..', './ui_frontend/templates/ui/public/favicons', 'favicon.ico'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', './ui_frontend/templates/ui/public/favicons'), to: 'favicons' },
        { from: path.resolve(__dirname, '..', './ui_frontend/templates/ui/src/assets'), to: 'assets' },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new BundleTracker({
      path: path.resolve(__dirname, './webpack/webpack-stats.json'),
      filename: 'webpack-stats.json'
    }),
    require('autoprefixer'), // The autroprefixer allows bootstrap to be imported
    // at the top of main.scss
  ],
  stats: 'errors-only',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
