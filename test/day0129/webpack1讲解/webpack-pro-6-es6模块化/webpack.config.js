//webpack编译的配置文件

//向外输出webpack编译的配置规则
module.exports = {
	//入口文件
	entry: './src/main.js',
	//输出文件
	output: {
		//输出文件路径
		path: __dirname,
		filename: 'dist/vendor.js'
	},
	module: {
		//所有loader的使用规则都在这里配置
		loaders: [
			//一个对象，就是一个处理规则 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'//使用多个laoder时，使用顺序是逆序
			},
			{
				test: /\.(png|jpeg|jpg|gif|ttf|svg)$/,
				loader: 'file-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//babel调用时，按照这里配置好的插件以及预设去编译js
//				options: {
//					plugins: [],
//					presets: ['es2015']
//				}
				//babel的上面这些配置也可以写到根路径下的.babelrc文件中
				
				//除去node_modules文件夹下的js文件
				exclude: /node_modules/
			}
			
		]
	}
}
