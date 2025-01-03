const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({filename: 'style.css'})
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react']
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader?name=img/[name].[ext]'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist")
        }
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production' ? true : false,
        minimizer: [new TerserPlugin()]
    }
};