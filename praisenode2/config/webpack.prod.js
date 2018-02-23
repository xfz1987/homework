const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/script/index.es'),

            path.join(__dirname, '../src/public/script/indexadd.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/script/tags.es'),
            path.join(__dirname, '../src/public/script/star.es'),
        ]
    },
    output: {
        filename: 'public/script/[name]-[hash:5].js',
        publicPath: 'http://192.168.0.114:3000/', //配置
        path: path.join(__dirname, '../build/'),

    },
    module: {
        loaders: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"pro"'
            }
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/script/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false

        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlWebpackPlugin({
            template: 'src/widget/index.html',
            filename: './widget/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/star.html',
            template: 'src/views/star.js',
            inject: false,
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlWebpackPlugin({
            template: 'src/widget/star.html',
            filename: './widget/star.html',
            inject: false
        }),



    ]
};