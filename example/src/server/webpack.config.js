const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: ['./src/server/schema.js'],
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  output: {
    path: path.resolve('.'),
    filename: 'graphql-js-transpiled.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: ['flow', ['env', {modules: 'commonjs'}]],
          plugins: ['transform-flow-strip-types', 'transform-async-to-generator'],
        },
      },
    ],
  },
};
