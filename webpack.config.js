const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

const entryPoints = require('./entryPoints')
module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: entryPoints, 
  output: {
    path: path.resolve(__dirname, "build"), // string (default)
    filename: "bundle.[hash].js", // string (default)
    // uniqueName: "strange-webpack", // (defaults to package.json "name")
    // name: "config",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    // configuration regarding modules
    rules: [  
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.(jsx)$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader']
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ],
    /* Advanced module configuration (click to show) */
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true
  }
}