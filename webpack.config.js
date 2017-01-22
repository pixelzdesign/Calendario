const webpack = require('webpack');
const PROD = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        "calendario": "./src/index.ts",
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    debug: true,
    devtool: PROD ? 'source-map' : 'eval-source-map',
    noInfo: false,
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ] : [],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}

module.exports = config