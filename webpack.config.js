const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "bundle.js"
    },
    plugins: [
             new HtmlWebpackPlugin({
                 filename: 'index.html',
                 template: 'index.html'
     })
   ],
    module: {
             rules: [
         {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
         }
      ]
    },
    devServer: {
        contentBase: './dist'
    }
};