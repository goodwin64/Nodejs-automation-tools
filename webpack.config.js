const isDebugMode = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: isDebugMode ? "inline-sourcemap" : false,
    // entry: "./dist/bundle.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: isDebugMode ? [] : [
        new webpack.optimize.UglifyJsPlugin({ mangle: !isDebugMode, sourcemap: isDebugMode }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
};