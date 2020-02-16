const path = require('path')
const HtmpWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"index_handle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders: "babel-loader" 
            }
        ]
    },
     plugins:[
         new HtmpWebpackPlugin({
             template:'./src/index.html'
         })
     ]

}