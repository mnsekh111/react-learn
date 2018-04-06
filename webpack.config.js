const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry : "./src/app.js",
    output : {
        path: path.join(__dirname, 'public' ),
        filename : 'bundle.js'
    },
    watch: true,
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            }
        ]
    },
    plugins : [
        new BrowserSyncPlugin({
            host : 'localhost',
            port: 2018,
            server : {
                baseDir: ['public']
            },
            files:['./public/*.html' ,'./public/*.js']
        })
    ],
    mode: "development"
}