const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './examples/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    alias: {
      'better-sqlite3': false
    },
    fallback: {
      'crypto': false,
      'path': false,
      'util': false,
      'fs': false
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs', 'examples'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/index.html'
    }),
    new webpack.DefinePlugin({
      OL_GPKG_DEBUG: JSON.stringify(process.env.OL_GPKG_DEBUG)
    })

  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'examples'),
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    compress: true,
    port: 9000,
  }
};
