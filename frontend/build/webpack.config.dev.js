/**
 * Created by saki on 2017/2/9.
 */

const config = require('./utils/webpack.config.base');
const consts = require('./utils/consts');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


console.log("===============develop================");


const webpackConfig = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: consts.SRC,
        port: 7070,
        proxy: {
            "/lab/**": {
                target: "http://localhost:3000",
                changeOrigin: true,
                secure: false
            }

        }
    },

    entry: {
        main: path.resolve(consts.ENTRY)
    },
    output: {
        path: path.resolve(consts.DIST),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ],
        rules: [{
            test: /\.css$/,
            include: /node_modules/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        ],
    },
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
]


module.exports = webpackConfig;