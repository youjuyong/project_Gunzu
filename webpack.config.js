const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const postCSSPlugins = [require("postcss-import"), require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("postcss-hexrgba"), require("postcss-color-function"), require("autoprefixer")]

module.exports = (env, argv) => {
    const prod = argv.mode === "production";
    console.log(prod);
    return {
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval",
        entry: "./src/index.tsx",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "[name].js",
            publicPath: "/",
            clean : true
        },
        devServer: {
            port: 3001,
            hot: true,
            historyApiFallback: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx",".scss"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ["babel-loader", "ts-loader"],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|PNG)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                React: "react",
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: process.env.NODE_ENV === 'production' ? {
                    collapseWhitespace: true,
                    removeComments: true, // 주석 제거
                } : false,
                favicon: "./public/favicon.ico",
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist/**/*')]
              }),
            new LoaderOptionsPlugin ({ debug : true })
            // new CopyPlugin({patterns: [{from: 'src/assets', to: 'assets/'}]})
        ],
    }
};
