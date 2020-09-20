const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, 'src'), 
  entry: {
    main: './index.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './bundle-[name]-hash-[contenthash].js'
  },

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@favicon': path.resolve(__dirname, 'src/assets/favicon'),
    }
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

  module: {
    rules: [

    // ================= JAVASCRIPT
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

    // ================= PREPROCESSOR
      {
        test: /\.(sa|sc|c)ss$/,
        use: [

          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'postcss-loader',
            options: {

              postcssOptions: {
                plugins: [
                  [autoprefixer({
                    browsers: ['ie >= 8', 'last 4 version'],
                  })],
                ],
              },

              sourceMap: true,
            },
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },

        ],
      },

    // ================= IMAGE
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              publicPath: '../img',
              outputPath: 'img',
              useRelativePath: true,
              esModule: false,
            }
          },
        ]
      },

    // ================= FONTS
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name]-hash-[contenthash].min.css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets/favicon',
          to: './assets/favicon',
        },
      ],  
    }),
  ]
};
