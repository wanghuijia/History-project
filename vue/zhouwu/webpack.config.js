const path = require('path');
const fs = require('fs')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, 'src/app.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loader: ["style-loader", "vue-style-loader", "css-loader"]
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: ["vue-style-loader", "css-loader"]
                // })
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.(jpg|png|gif|jpeg|eot|ttf|woff2|woff|svg)$/,
            loader: "url-loader"
        }]
    },
    devServer: {
        host: "localhost",
        port: 8080,
        contentBase: '.',
        before(app) {
            app.get('/api', (req, res) => {
                let filepath = path.join(__dirname, "./data/data.json");
                let filedata = fs.readFileSync(filepath);
                res.end(filedata.toString())
            })
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("main.css"),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
}