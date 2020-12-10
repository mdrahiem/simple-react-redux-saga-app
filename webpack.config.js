const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const baseURL = path.resolve(__dirname, ''); 
module.exports = { 
  entry: path.resolve(baseURL, 'src', 'index.js'),
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js', 
    publicPath: '/' 
  }, 
  devServer: { 
    // this is for whenever the inner url reloads (or 404s) they should redirect to '/'
    historyApiFallback: true 
  },
  module: { 
    rules: [ 
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
      } 
    ] 
  }, 
  plugins: [ 
    new HtmlWebPackPlugin({ 
      template: `${baseURL}/src/index.html`, 
      filename: './index.html', 
      inject: 'body', 
    }) 
  ] 
};