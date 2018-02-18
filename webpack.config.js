var debug = process.env.NODE_ENV !== "production";
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : false,
    // entry: "./dist/bundle.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: debug ? [] : [
        // new webpack.optimize.UglifyJsPlugin({ mangle: !debug, sourcemap: debug }),
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