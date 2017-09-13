var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, './src/');

module.exports = function () {
    const isDev = process.env.NODE_ENV === 'development';

    let config = {
        entry: [
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/only-dev-server",
            "./src/index.js"
        ],
        output: {
            path: path.join(__dirname, "dist"),
            publicPath: "/",
            filename: "app.[hash].js"
        },
        devtool: "eval-source-map",
        target: 'web',

        resolve: {
            extensions: ['.js']
        },

        module : {
            loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            } 
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                DEV: isDev
            }),

            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),

            new HtmlWebpackPlugin({
                title:'Harman React Demo',
                minify:{
                    collapseWhitespace:true
                },
                hash:true,
                template:'./index.html',
            }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
        ]
    };

    if (isDev) {
        config.devServer = {
            publicPath: "/",
            hot: true,
            port: 3000,
            host: 'localhost',
            historyApiFallback: true,
            contentBase: './',
            open:true,
            compress:true,
            inline:true
        };
    }
    return config;
}