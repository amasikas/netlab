/**
 * Created by saki on 2017/2/9.
 */

const webpack = require('webpack');
const consts = require('./consts');
const path = require('path');

const config = {
    module:{
        rules:[{
            test: /\.js[x]?$/,
            use: [
                "babel-loader"
            ],
            exclude: /node_modules/
        }]
    }
}

module.exports = config;
