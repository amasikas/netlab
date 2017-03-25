/**
 * Created by saki on 2017/2/9.
 */
const config = require('./utils/webpack.config.base');
const consts = require('./utils/consts');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


const __PROD__ = false;

console.log("============++++++++++++");

module.exports = {
    entry: {
        main: path.resolve(consts.ENTRY)
    },
    output: {
        path: path.resolve(consts.DIST),
        publicPath: '/lab/static/js/',
        filename: '[chunkhash].[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: /node_modules/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
            ...config.module.rules
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../../netlab/templates/index.html',
            template: path.resolve(consts.SRC,'./views_tmpl/index.html'),
            hash: true

        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            __DEV__: 'false'
        })
    ]
}
