// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/ts/client/App.ts',
  devtool: 'inline-source-map',
  // devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/client')
  },
  // plugins: [
  //   new MonacoWebpackPlugin()
  // ],
};
