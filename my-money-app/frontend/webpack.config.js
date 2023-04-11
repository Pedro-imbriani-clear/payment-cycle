const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public",
        filename: ".app.js",
    },
    devServer: {
        port: 8080,
        contentBase: ".public",
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            module: __dirname + '/node_modules',
            jquery: 'module/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'module/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    Plugin: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
};