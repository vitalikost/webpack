/**
 * Created by ostrovskij on 27.04.2017.
 */
'use strict'

const webpack = require('webpack');
module.exports = {
    entry:"./home",
    output:{
        filename: "build.js",
        library: "root"
    },
    watch: true,
    watchOptions:{
        aggregateTimeout:100
    },
    devtool:"cheap-inline-module-source-map",

    plugins:[],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional[]=runtime',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

};