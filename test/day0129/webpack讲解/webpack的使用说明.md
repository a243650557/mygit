全局安装：
>cnpm install webpack -g
>cnpm install webpack-dev-server -g

初始化项目路径
>cnpm init

	npm install 的参数   -D(--save-dev)开发依赖       -S(--save)代码依赖，生产依赖

安装webpack工具
>cnpm install webpack -D

命令行中直接使用webpack工具编译js
>webpack [需要编译的入口文件路径] [编译完成后的文件输出路径]

//不在命令行中声明webpack的编译入口以及输出文件路径。
就需要提供webpack的编译的配置文件：webpack.config.js
直接执行：
>webpack
>webpack -p  混淆压缩代码



loader： webpack编译加载器
不同的loader处理不同的文件类型
css -->>  js
vue --->>js
jsx--->js

css -->>  js： 
css-loader将css文件转为js
style-loader 识别css样式
安装：
>cnpm install css-loader style-loader -D
使用：
module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname+'/dist',
		filename: 'vendor.js'
	},
	module: {
		//所有loader的使用规则都在这里配置
		loaders: [
			//一个对象，就是一个处理规则 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'//使用多个laoder时，使用顺序是逆序
			}
			
		]
	}
}


对于静态资源路径使用file-loader
安装：
>cnpm install file-loader -D
配置：
	{	
		test: /\.png$/,
		loader: 'file-loader'
	}
	

//服务器配置
安装服务器
>cnpm install webpack-dev-server -D
启动服务器
>webpack-dev-server


