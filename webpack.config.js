const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    devtool: 'source-map',
    entry: {
      main: './js/index.js',},
    output: {
        filename: 'main.js',
        path: path.join( __dirname, 'out')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            },
            
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
           contentBase: './out',
         },
         plugins: [
           new HtmlWebpackPlugin({template: './index.html'})
         ]
       };
