/**
 * Created by saki on 2017/2/9.
 */
const config = require('./utils/webpack.config.base');
const consts = require('./utils/consts');
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const __PROD__ = false;


module.exports = {
    entry: {
        main: path.resolve(consts.ENTRY)
    },
    output: {
        path: path.resolve(consts.DIST),
        publicPath: '/',
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
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new UglifyJsPlugin({
            beautify: true,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
            },
            sourceMap: false
        })
    ]
}
