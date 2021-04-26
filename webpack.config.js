const { resolve } = require('path');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            'react',
            'es2015',
            'stage-0',
            'stage-2',
          ],
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
        use: 'file-loader',
        options: {
          limit: 25000, // Max file size = 25kb
        },
      },
    ],
  },
};
