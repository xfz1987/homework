const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/util.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es')
        ]
	},
	output: {
		filename: 'public/scripts/[name]-[hash:5].js',
        // publicPath: '', //配置
		path: path.join(__dirname, '../build/')
	},
	module: {
		rules: [
			{
            	test: /\.es$/,
            	exclude: /(node_modules|bower_components)/,
            	use: {
        			loader: 'babel-loader',
        			options: {
        			  presets: ['es2015', 'stage-0']
        			}
      			}
        	},
        	{
        		test: /\.css$/,
        		use: ExtractTextPlugin.extract({
                	fallback: 'style-loader',
                	use: 'css-loader'
            	})
        	}
        ]
	},
	plugins: [
		new webpack.DefinePlugin({'process.env.NODE_ENV':"prod"}),
		new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        //压缩Css
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
        //提取公共js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js',
            chunks: ['vendor', 'index', 'tag'],
            inject: false
        })
	]
}