const path = require('path');
var historyApiFallback = require('connect-history-api-fallback');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry : "./src/app.js",
    output : {
        path: path.join(__dirname, 'public' ),
        filename : 'scripts/bundle.js'
    },
    watch: true,
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            },
            {
                test: /\.s?css$/,
                use: [ 'style-loader', 'css-loader','sass-loader' ]
            }
        ]
    },
    plugins : [
        new BrowserSyncPlugin({
            host : 'localhost',
            port: 2018,
            server : {
                baseDir: ['public'],
                middleware: [ historyApiFallback() ]
            },
            files:['./public/*.html' ,'./public/*.js']
        })
    ],
    mode: "development",
    devtool: "cheap-module-eval-source-map"
}