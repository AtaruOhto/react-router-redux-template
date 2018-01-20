/* Lib */
const webpack = require('webpack');
const path = require('path');

/* Constants */
const NODE_ENV = process.env.NODE_ENV  || 'dev';
const WEBPACK_DEV_SERVER_PORT = 8888;
const WEBPACK_DEV_SERVER_URL = 'http://localhost:' + WEBPACK_DEV_SERVER_PORT;
const BUNDLE_OUTPUT_PATH = path.resolve(path.join('public'));

/* Webpack Third Party Plugins */
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const getWebpackPlugins = () => {
    let webpackPlugins = [];

    if (NODE_ENV === 'production') {
        webpackPlugins.push(new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("production")}))
        webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }))
    } else {
        webpackPlugins.push(new OpenBrowserPlugin({ url: WEBPACK_DEV_SERVER_URL }));
    }
    return webpackPlugins;
};

module.exports = {
    devtool: 'inline-source-map',
    entry: './front/index.tsx',
    output: {
        filename: 'app.js',
        path: BUNDLE_OUTPUT_PATH
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve(__dirname, path.resolve(path.join('front'))),
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.json"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: BUNDLE_OUTPUT_PATH,
        port: WEBPACK_DEV_SERVER_PORT,
    },
    plugins: getWebpackPlugins()
};
