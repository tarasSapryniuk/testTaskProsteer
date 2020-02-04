const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/js/index.js",
    frontend: "./src/styles/style.sass"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.(sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {}
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              plugins: () => [autoprefixer]
            }
          },
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: "imports-loader?jQuery=jquery"
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    //   {
    //     test: /\.(jpg|png|gif)$/,
    //     use: [
    //       {
    //         loader: "file-loader",
    //         options: {
    //           name: "[name].[ext]",
    //           outputPath: "static/",
    //           useRelativePath: true
    //         }
    //       },
    //       {
    //         loader: "image-webpack-loader",
    //         options: {
    //           mozjpeg: {
    //             progressive: true,
    //             quality: 65
    //           },
    //           optipng: {
    //             enabled: true
    //           },
    //           pngquant: {
    //             quality: "65-90",
    //             speed: 4
    //           },
    //           gifsicle: {
    //             interlaced: false
    //           },
    //           webp: {
    //             quality: 75
    //           }
    //         }
    //       }
    //     ]
    //   }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-styles.css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "Black Friday",
      template: "./src/index.handlebars"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether"
    })
  ],
  resolve: {
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js"
    }
  }
};
