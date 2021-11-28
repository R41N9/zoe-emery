const path = require('path');

module.exports = {
  mode: "development",
  entry: ['@babel/polyfill', path.resolve(__dirname, "./src/components/Main.jsx")],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/src/imgs/[name].[ext]'
        }
      }
    ],
  },
};