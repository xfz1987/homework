const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');//监控浏览器自动更新
const Manifest = require('webpack-manifest');

module.exports = {
	entry: {
		index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/util.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/praise.es'),
            path.join(__dirname, '../src/public/scripts/star.es')
        ]
	},
	output: {
		filename: 'public/scripts/[name]-[hash:5].js',
		path: path.join(__dirname, '../build/'),
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
		new webpack.DefinePlugin({'process.env.NODE_ENV':"dev"}),
		new LiveReloadPlugin({ appendScriptTag: true }),//将<LiveReload>的script自动加入<head>中
		new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
		//提取公共js
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false
        }),
       	new HtmlWebpackPlugin({
        	filename: './widget/praise.html',
            template: 'src/widget/praise.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js',
            chunks: ['vendor', 'index', 'tag'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './widget/star.html',
            template: 'src/widget/star.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/star.html',
            template: 'src/views/star.js',
            chunks: ['vendor', 'index', 'tag'],
            inject: false
        }),
        new Manifest({
            cache: [
                //需要缓存的内容
                '../public/css/*.css'
            ],
            //Add time in comments. 时间戳
            timestamp: true,
            // 生成的文件名字，选填 
            // The generated file name, optional. 
            filename: 'cache.manifest',
            // 注意*星号前面用空格隔开 
            network: [ '*' ],
            // 注意中间用空格隔开 
            // fallback: ['/ /404.html'],
            // manifest 文件中添加注释 
            // Add notes to manifest file. 
            headcomment: "koatesting",
            master: ['../views/layout.html']
        })
	],
    watch: true
}